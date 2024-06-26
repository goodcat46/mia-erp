import { ArrayOfUUID, IBase, IFormDataValueWithID, OnlyUUID } from '../../redux/app-redux.types';
import { OfferCategoryEntity, SupplierDirEntity } from '../dir.types';
import { PriceEntity } from '../price-management/price-management.types';
import { WarehouseEntity, WarehouseItemEntity } from '../warehousing/warehouses.types';
import { IBrand } from '../../redux/directories/brands.types';
import { AppQueries, AppQueryParams } from '../../api';
import { VariationEntity } from './variations.types';
import { PropertiesGroupEntity, PropertyValueEntity } from './properties.types';
import {
  AppDate,
  HasAuthor,
  HasBarCode,
  HasDescription,
  HasDimensions,
  HasEditor,
  HasImgPreview,
  HasIsVisibleFlag,
  HasLabel,
  HasMeasurement,
  HasOwnerAsCompany,
  HasSku,
  HasStatus,
  HasType,
  Keys,
  MaybeNull,
  PartialRecord,
  UUID,
  WithPeriod,
} from '../utils.types';
import { OfferImageSlotEntity } from './offer-images.types';
import { WarehouseInventoryEntity } from '../warehousing/warehouse-inventory.types';
import { HasBaseCmsConfigs } from '../cms.types';
import { HasTags, TagEntity } from '../tags.types';

export type { OfferImageSlotEntity } from './offer-images.types';

export enum OfferTypeEnum {
  GOODS = 'GOODS',
  SERVICE = 'SERVICE',
  SET = 'SET',
}
export enum OfferStatusEnum {
  pending = 'pending',
  rejected = 'rejected',
  // success = 'success',
  approved = 'approved',
  error = 'error',
  warning = 'warning',
  // info = 'info',
}

export interface OfferOrderingInfo {
  isAvailable?: MaybeNull<boolean>;
  time?: MaybeNull<AppDate>;
}
export type OfferFutures = {
  isPromo?: MaybeNull<boolean>;
  negativeSale?: MaybeNull<boolean>;
} & HasStatus<string> &
  Partial<
    Record<
      'reservation' | 'availability' | 'customOrder' | 'preOrder' | 'customProduction' | 'rent',
      MaybeNull<OfferOrderingInfo>
    >
  >;

export type PropertyValuesMap = Record<string, PropertyValueEntity>;

export interface IOfferBase
  extends HasLabel,
    HasMeasurement,
    HasDimensions,
    HasDescription,
    HasType<OfferTypeEnum>,
    HasStatus<OfferStatusEnum>,
    HasBaseCmsConfigs,
    HasDimensions,
    WithPeriod,
    HasImgPreview,
    HasBarCode,
    HasSku,
    HasIsVisibleFlag {
  qrCode?: string;

  propsKey?: string;

  approved?: OfferStatusEnum;

  visible?: boolean;

  futures?: MaybeNull<OfferFutures>;

  images?: OfferImageSlotEntity[];

  propertiesMap?: PropertyValuesMap;
}

export interface IOfferRelatedDefaultFields {
  variation?: VariationEntity;
  price?: PriceEntity;
  warehouse?: WarehouseEntity;
  inventory?: WarehouseItemEntity;
  supplier?: SupplierDirEntity;
}
export interface OfferEntity
  extends IBase,
    IOfferBase,
    HasOwnerAsCompany,
    HasAuthor,
    HasEditor,
    IOfferRelatedDefaultFields,
    HasTags {
  offer?: OfferEntity;
  brand?: IBrand;
  categories?: OfferCategoryEntity[];

  recommends?: OfferEntity[];

  template?: PropertiesGroupEntity;
  properties?: PropertyValueEntity[];
  tags?: TagEntity[];

  variations?: VariationEntity[];
  prices?: PriceEntity[];
  warehouses?: WarehouseEntity[];
  inventories?: WarehouseInventoryEntity[];
}

// * >>>>>>> FORM DATA <<<<<<<

export interface OfferDefaultsFormData extends PartialRecord<keyof IOfferRelatedDefaultFields, IFormDataValueWithID> {}

export interface OfferFullFormData extends OfferDto {
  defaults?: OfferDefaultsFormData;

  images?: OfferImageSlotEntity[];

  propValuesIdsMap?: Record<string, string>;
  propertiesMap?: PropertyValuesMap;
}

export interface OfferFormData extends OfferFullFormData {}

// * >>>>>> OFFER DTO <<<<<<<
export interface OfferBaseDto extends Omit<IOfferBase, '_id' | 'createdAt' | 'deletedAt' | 'updatedAt'> {}

export enum OfferFormRelatedFieldKeyEnum {
  tags = 'tags',
  categoriesIds = 'categoriesIds',
  recommendsIds = 'recommendsIds',
  propertiesIds = 'propertiesIds',
  tagsIds = 'tagsIds',
}

export interface OfferRelatedFieldsDto extends PartialRecord<OfferFormRelatedFieldKeyEnum, ArrayOfUUID> {
  brandId?: UUID;
  templateId?: UUID;
}

type OfferDefaultRefKey = Keys<IOfferRelatedDefaultFields>;

type OfferDefaultsIdKey = Keys<Pick<AppQueries, 'warehouseId' | 'variationId' | 'priceId' | 'inventoryId'>>;
export interface IOfferDefaultsDto
  extends PartialRecord<OfferDefaultRefKey, OnlyUUID>,
    PartialRecord<OfferDefaultsIdKey, UUID> {}

export interface OfferDto extends OfferBaseDto, OfferRelatedFieldsDto, IOfferDefaultsDto {}

export interface OfferReqData {
  _id?: string;
  data?: OfferDto;
  params?: AppQueryParams;
}

export interface HasOffers {
  offers?: MaybeNull<OfferEntity[]>;
}
// ? PROPERTIES ================================================
