import { CellTittleProps } from 'components/TableList/TebleCells/CellTitle';
import { t } from '../lang';
import { OfferEntity, OfferStatusEnum } from '../types/offers/offers.types';
import { getStatusesByEnum } from './statuses.data';
import { enumToFilterOptions } from '../utils';
import { FilterOption } from '../components/atoms/TabSelector';
import { ImageSetSrcType } from '../types/offers/offer-images.types';
import { toPrice } from '../utils/numbers';
import { TableSearchParam, TableSortParam } from '../components/TableList/tableTypes.types';

export const offerStatusesData = getStatusesByEnum(OfferStatusEnum);
export const OfferStatusFilterOptions = enumToFilterOptions(OfferStatusEnum);

export const formAddImageSetTabs: FilterOption<ImageSetSrcType>[] = [
  { label: 'Preview', value: ImageSetSrcType.img_preview, required: true },
  { label: '1x', value: ImageSetSrcType.img_1x },
  { label: '2x', value: ImageSetSrcType.img_2x },
  { label: 'Webp', value: ImageSetSrcType.webp },
];
export const offersTableColumns: CellTittleProps<OfferEntity>[] = [
  {
    top: { name: t('label'), getData: rd => rd?.label },
    // bottom: { name: t('sku'), getData: rd => rd?.sku },
    getImgPreview: pr => (pr.images ? pr.images?.[0]?.img_preview : undefined),
    width: '270px',
    action: 'dataWithAvatar',
  },
  {
    top: { name: t('sku'), getData: rd => rd?.sku },
    bottom: { name: t('barCode'), getData: rd => rd?.barCode },
    width: '200px',
    action: 'valueByPath',
  },
  {
    top: { name: t('type'), path: 'type' },
    bottom: { name: t('status'), getData: d => d.approved as never },
    width: '100px',
    action: 'status',
  },

  {
    top: { name: t('Price OUT'), align: 'end', getData: d => toPrice(d.price?.out) },
    bottom: { name: t('Price IN'), align: 'end', getData: d => toPrice(d.price?.in) },
    width: '150px',
    action: 'valueByPath',
  },

  {
    top: { name: t('Variation label'), getData: d => d.variation?.label || '---' },
    bottom: { name: t('SKU'), getData: d => d.variation?.sku || '---' },
    width: '190px',
    action: 'valueByPath',
  },

  {
    top: { name: t('Warehouse'), getData: d => d.warehouse?.label },
    bottom: { name: t('Code'), getData: d => d.warehouse?.code },
    width: '150px',
    action: 'valueByPath',
  },

  // {
  //   top: { name: t('Price OUT'), align: 'end', getData: d => toPrice(d.price?.out) },
  //   bottom: { name: t('Price IN'), getData: d => toPrice(d.price?.in) },
  //   width: '150px',
  //   action: 'valueByPath',
  // },

  // {
  //   top: {
  //     name: t('category'),
  //
  //     getData: rd => rd.category?.label,
  //   },
  //   bottom: {
  //     name: t('parentCategory'),
  //
  //     getData: rd => rd.category?.parent?.label,
  //   },
  //   width: '180px',
  //   action: 'valueByPath',
  // },
  {
    top: { name: 'Бренд', path: 'brand.label' },
    bottom: { name: 'Виробник', path: 'manufacturer.name' },
    width: '150px',
    action: 'valueByPath',
  },
  {
    top: { name: 'Опис', path: 'description' },
    width: '150px',
    action: 'valueByPath',
  },
  {
    top: { name: 'Оновив', getData: rd => rd?.editor?.user?.email ?? '---' },
    bottom: { name: 'Автор', getData: rd => rd?.author?.user?.email ?? '---' },
    width: '150px',
    action: 'valueByPath',
  },
  {
    top: { name: 'Оновлено', align: 'center', path: 'updatedAt' },
    bottom: { name: 'Створено', align: 'center', path: 'createdAt' },
    width: '150px',
    action: 'dateDbl',
  },
];
export type OfferSortParam = TableSortParam<'sku' | 'label' | 'barCode' | 'price' | 'status'>;
export const offersSortParams: OfferSortParam[] = [
  { dataKey: 'sku', label: 'SKU' },
  { dataKey: 'label', label: t('Label') },
  { dataKey: 'barCode', label: t('Bar-code') },
  { dataKey: 'status', label: t('Status') },
  { dataKey: 'price', label: t('Price') },
];
export type OfferSearchParam = TableSearchParam<'sku' | 'label' | 'barCode', 'warehouse.label' | 'warehouse.code'>;
export const offersSearchParams: OfferSearchParam[] = [
  { dataKey: 'sku', label: 'SKU' },
  { dataKey: 'label', label: t('Label') },
  { dataKey: 'barCode', label: t('Bar-code') },
  { dataPath: 'warehouse.code', label: t('Warehouse code') },
  { dataPath: 'warehouse.label', label: t('Warehouse label') },
];