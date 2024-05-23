import { createSlice } from '@reduxjs/toolkit';
import { StateErrorType } from 'redux/reduxTypes.types';
import { OfferEntity } from '../../types/offers/offers.types';
import {
  createProductThunk,
  getAllInventoriesByProductIdThunk,
  getAllOfferPricesThunk,
  getAllProductsThunk,
  getOfferThunk,
  getProductFullInfoThunk,
  updateProductDefaultsThunk,
  updateProductThunk,
} from './products.thunks';
import {
  createVariationThunk,
  getAllVariationsByOfferIdThunk,
  updateVariationThunk,
} from './variations/variations.thunks';
import { IProperiesGroup } from '../../types/offers/properties.types';
import { createPropertyThunk, getAllPropertiesThunk } from './properties/properties.thunks';
import {
  clearCurrentProductAction,
  setCurrentProductInventoriesAction,
  setCurrentProductPricesAction,
  setCurrentProductVariationsAction,
} from './products.actions';
import { PartialRecord } from '../../types/utils.types';
import { VariationEntity } from '../../types/offers/variations.types';
import { onCreatePriceCase, onGetPricesCase, onUpdatePriceCase } from '../priceManagement/prices.actions';
import { Action } from '../store.store';
import { PriceEntity } from '../../types/price-management/price-management.types';

type SKU = string;
type UUID = string;

export interface OffersState {
  list: OfferEntity[];
  currentOffer?: OfferEntity;
  filteredProducts?: OfferEntity[];
  properties: IProperiesGroup[];
  isLoading: boolean;
  error: StateErrorType;

  skuKeysMap: PartialRecord<SKU, UUID>;
  dataMap: PartialRecord<UUID, OfferEntity>;

  variationsKeysMap: PartialRecord<UUID, UUID[]>;
  variationsMap: PartialRecord<UUID, VariationEntity>;
}

const initialState: OffersState = {
  isLoading: false,
  error: null,
  list: [],
  currentOffer: undefined,
  filteredProducts: [],
  properties: [],

  dataMap: {},
  skuKeysMap: {},

  variationsKeysMap: {},
  variationsMap: {},
};

export const offersSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAllProductsThunk.fulfilled, (s, a) => {
        if (Array.isArray(a.payload.data)) {
          if (a.payload.refresh) {
            s.list = a.payload.data;
            return;
          } else {
            s.list = [...a.payload.data, ...s.list];
          }

          a.payload.data.forEach(offer => {
            ManageOffersStateMap(s, { data: offer }, { refresh: false });
          });
        }
      })
      .addCase(createProductThunk.fulfilled, (s, a) => {
        if (a.payload?.data) {
          ManageOffersStateMap(s, a.payload);
        }
      })
      .addCase(updateProductThunk.fulfilled, (s, a) => {
        if (a.payload) {
          ManageOffersStateMap(s, a.payload);
        }
      })
      .addCase(getProductFullInfoThunk.fulfilled, (s, a) => {
        ManageOffersStateMap(s, a.payload, { refresh: a.payload.refreshCurrent });
      })
      .addCase(getOfferThunk.fulfilled, (s, a) => {
        ManageOffersStateMap(s, a.payload, a.payload);
      })
      .addCase(updateProductDefaultsThunk.fulfilled, (s, a) => {
        ManageOffersStateMap(s, { data: a.payload?.data }, { refresh: a.payload?.refreshCurrent });
      })
      .addCase(getAllPropertiesThunk.fulfilled, (s, a) => {
        if (a.payload) {
          s.properties = a.payload;
        }
      })
      .addCase(createPropertyThunk.fulfilled, (s, a) => {
        if (a.payload) {
          s.properties = a.payload;
        }
      })
      .addCase(createVariationThunk.fulfilled, (s, a) => {
        // if (!a.payload) {
        //   return;
        // } else {
        //   s?.currentOffer?.variations?.unshift(a.payload);
        // }
        ManageVariationsStateMap(s, { data: a.payload });
      })

      .addCase(updateVariationThunk.fulfilled, (s, a) => {
        // if (!a.payload) {
        //   return;
        // } else if (s.currentOffer) {
        //   s.currentOffer.variations = s?.currentOffer?.variations?.map(vrn =>
        //     vrn._id === a.payload?._id ? a.payload : vrn
        //   );
        // }
        ManageVariationsStateMap(s, { data: a.payload });
      })
      .addCase(getAllVariationsByOfferIdThunk.fulfilled, (s, a) => {
        // if (s.currentOffer) {
        //   s.currentOffer = { ...(s.currentOffer as OfferEntity), variations: a.payload?.data };
        // }

        const offerId = a.payload?.offerId || a.payload?.data?.[0]?._id;
        if (offerId) {
          a.payload?.data.forEach(vr => {
            ManageVariationsStateMap(s, { data: vr, offerId });
          });

          ManageOffersStateMap(s, { data: { _id: offerId, variations: a.payload?.data } });
        }
      })
      .addCase(getAllOfferPricesThunk.fulfilled, (s, a) => {
        // if (a.payload?.refreshCurrent) {
        //   s.currentOffer = { ...(s.currentOffer as OfferEntity), prices: a.payload.data };
        // }
        if (a.payload.params?.offerId) {
          ManageOffersStateMap(s, { data: { _id: a.payload.params?.offerId, prices: a.payload.data } });
        }
      })
      .addCase(getAllInventoriesByProductIdThunk.fulfilled, (s, a) => {
        if (a.payload?.refreshCurrent) {
          s.currentOffer = { ...(s.currentOffer as OfferEntity), inventories: a.payload.data };
        }
      })
      .addCase(clearCurrentProductAction, s => {
        s.currentOffer = { _id: '' };
      })
      .addCase(setCurrentProductPricesAction, (s, a) => {
        s.currentOffer = {
          ...(s.currentOffer as OfferEntity),
          prices: a.payload.refresh
            ? a.payload?.data
            : s.currentOffer?.prices
            ? [...a.payload.data, ...s.currentOffer?.prices]
            : a.payload.data,
        };
      })
      .addCase(setCurrentProductVariationsAction, (s, a) => {
        s.currentOffer = {
          ...(s.currentOffer as OfferEntity),
          variations: a.payload.refresh
            ? a.payload?.data
            : s.currentOffer?.variations
            ? [...a.payload.data, ...s.currentOffer?.variations]
            : a.payload.data,
        };

        a.payload?.data.forEach(vr => {
          ManageVariationsStateMap(s, { data: vr });
        });
      })
      .addCase(setCurrentProductInventoriesAction, (s, a) => {
        s.currentOffer = {
          ...(s.currentOffer as OfferEntity),
          inventories: a.payload.refresh
            ? a.payload?.data
            : s.currentOffer?.inventories
            ? [...a.payload.data, ...s.currentOffer?.inventories]
            : a.payload.data,
        };
      })
      .addMatcher(onCreatePriceCase, (s, a: Action<{ data: PriceEntity }>) => {
        const offerId = a.payload.data.offer?._id;
        if (offerId) {
          const current = s.dataMap?.[offerId];
          if (!current) return;

          if (current?.prices?.length) {
            current?.prices?.unshift(a.payload.data);
          }
          current.prices = [a.payload?.data];

          s.dataMap[offerId] = current;
        }
      })
      .addMatcher(onUpdatePriceCase, (s, a: Action<{ data: PriceEntity }>) => {
        const offerId = a.payload?.data?.offer?._id;

        if (offerId) {
          const current = s.dataMap?.[offerId];
          if (!current) return;

          if (current?.prices?.length) {
            current?.prices?.unshift(a.payload.data);
          }
          current.prices = [a.payload?.data];

          s.dataMap[offerId] = current;
        }
      })
      .addMatcher(onGetPricesCase, (s, a: Action<{ data: PriceEntity[] }>) => {
        console.log('onGetPricesCase', a);
      }),
});

// function isProductsCase(type: string) {
//   return checks.isStr(type) && type.startsWith('products');
// }
// const defaultsKeys: (keyof Pick<OfferEntity, 'warehouse' | 'price' | 'variation' | 'inventory' | 'supplier'>)[] = [
//   'warehouse',
//   'price',
//   'variation',
//   'inventory',
//   'supplier',
// ];

function ManageOffersStateMap(
  st: OffersState,
  input: { data?: OfferEntity },
  options?: { refresh?: boolean; isForList?: boolean }
) {
  if (input.data) {
    const itemId = input.data?._id;
    const itemSku = input.data?.sku;

    if (options?.refresh) {
      st.dataMap[itemId] = input.data;
    } else {
      st.dataMap[itemId] = { ...st.dataMap?.[itemId], ...input.data };

      // for (const dataKey of defaultsKeys) {
      //   const currentData = st.dataMap?.[itemId];
      //
      //   newData[dataKey] = {
      //     ...(currentData?.[dataKey] ?? {}),
      //     ...(input?.data?.[dataKey] ?? {}),
      //   };
      // }
    }
    if (itemSku) {
      st.skuKeysMap[itemSku] = itemId;
    }
  }
}

// function ManageOfferDefaults(
//   st: OffersState,
//   input: { data?: OfferEntity },
//   options?: { refresh?: boolean; isForList?: boolean }
// ) {
//   if (input.data) {
//     const itemId = input.data?._id;
//     const itemSku = input.data?.sku;
//
//     st.dataMap[itemId] = options?.refresh ? input.data : { ...st.dataMap?.[itemId], ...input.data };
//
//     if (itemSku) {
//       st.skuKeysMap[itemSku] = itemId;
//     }
//   }
// }

function ManageVariationsStateMap(
  st: OffersState,
  input: { data?: VariationEntity; offerId?: string },
  options?: { refresh?: boolean; isForList?: boolean }
) {
  if (input.data) {
    const itemId = input.data?._id;
    const offerId = input.data?.offer?._id || input?.offerId;
    const itemSku = input.data?.sku;

    st.variationsMap[itemId] = options?.refresh ? input.data : { ...st.dataMap?.[itemId], ...input.data };

    if (itemSku) {
      st.skuKeysMap[itemSku] = itemId;
    }

    if (offerId) {
      st.variationsKeysMap[itemId] = Array.from(new Set<string>(st.variationsKeysMap?.[itemId] ?? []).add(offerId));

      if (st.dataMap[offerId]) {
        if (!st.dataMap[offerId]?.variations) {
          st.dataMap[offerId] = {
            ...(st.dataMap[offerId] as OfferEntity),
            variations: [input.data],
          };
        } else {
          st.dataMap[offerId]?.variations?.unshift(input.data);
        }
      }
    }
  }
}