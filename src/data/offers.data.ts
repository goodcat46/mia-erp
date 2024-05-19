import { SelectItem } from 'components/TableList/TableList';
import { CellTittleProps } from 'components/TableList/TebleCells/CellTitle';
import { t } from '../lang';
import { OfferEntity, OfferStatusEnum } from '../types/offers/offers.types';
import { getStatusesByEnum } from './statuses.data';
import { enumToFilterOptions } from '../utils';
import { FilterOption } from '../components/atoms/TabSelector';
import { ImageSetSrcType } from '../types/offers/offer-images.types';

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
    top: { name: t('label'), align: 'start', getData: rd => rd?.label },
    // bottom: { name: t('sku'), align: 'start', getData: rd => rd?.sku },
    getImgPreview: pr => (pr.images ? pr.images[0]?.img_preview : undefined),
    width: '270px',
    action: 'dataWithAvatar',
  },
  {
    top: { name: t('sku'), align: 'start', getData: rd => rd?.sku },
    bottom: { name: t('barCode'), align: 'start', getData: rd => rd?.barCode },
    width: '200px',
    action: 'valueByPath',
  },
  {
    top: { name: t('type'), align: 'start', path: 'type' },
    bottom: { name: t('status'), align: 'start', getData: d => d.approved as never },
    width: '100px',
    action: 'status',
  },

  // {
  //   top: {
  //     name: t('category'),
  //     align: 'start',
  //     getData: rd => rd.category?.label,
  //   },
  //   bottom: {
  //     name: t('parentCategory'),
  //     align: 'start',
  //     getData: rd => rd.category?.parent?.label,
  //   },
  //   width: '180px',
  //   action: 'valueByPath',
  // },
  {
    top: { name: 'Бренд', align: 'start', path: 'brand.label' },
    bottom: { name: 'Виробник', align: 'start', path: 'manufacturer.name' },
    width: '150px',
    action: 'valueByPath',
  },
  {
    top: { name: 'Опис', align: 'start', path: 'description' },
    width: '150px',
    action: 'valueByPath',
  },
  {
    top: { name: 'Оновив', align: 'start', getData: rd => rd?.editor?.email },
    bottom: { name: 'Автор', align: 'start', getData: rd => rd?.author?.email },
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

export const productsSearchParams: SelectItem[] = [
  // {
  //   label: t('type'),
  //   dataPath: 'type',
  //   filter: false,
  //   search: true,
  //   sort: true,
  // },
  // {
  //   label: t('price'),
  //   dataPath: 'price',
  //   filter: false,
  //   search: true,
  //   sort: true,
  // },
  // {
  //   label: 'Оновлено',
  //   dataPath: 'createdAt',
  //   filter: false,
  //   search: false,
  //   sort: true,
  // },
  // {
  //   label: 'Створено',
  //   dataPath: 'updatedAt',
  //   filter: false,
  //   search: false,
  //   sort: true,
  // },
  // {
  //   label: t('countIn'),
  //   dataPath: 'countIn.label',
  //   filter: false,
  //   search: true,
  //   sort: true,
  // },
  // {
  //   label: t('subCountIn'),
  //   dataPath: 'subCountIn.label',
  //   filter: false,
  //   search: true,
  //   sort: true,
  // },
  // {
  //   label: t('countOut'),
  //   dataPath: 'countOut.label',
  //   filter: false,
  //   search: true,
  //   sort: true,
  // },
  // {
  //   label: t('subCountOut'),
  //   dataPath: 'subCountOut.label',
  //   filter: false,
  //   search: true,
  //   sort: true,
  // },
  // {
  //   label: t('category'),
  //   dataPath: 'category.label',
  //   filter: false,
  //   search: true,
  //   sort: true,
  // },
  // {
  //   label: t('subCategory'),
  //   dataPath: 'subCategory.label',
  //   filter: false,
  //   search: true,
  //   sort: true,
  // },
  //
  // {
  //   label: 'Контрагент',
  //   dataPath: 'contractor.name',
  //   filter: false,
  //   search: true,
  //   sort: true,
  // },
  // {
  //   label: 'Документ',
  //   dataPath: 'document',
  //   filter: false,
  //   search: true,
  //   sort: true,
  // },
  // {
  //   label: t('project'),
  //   dataPath: 'project.label',
  //   filter: false,
  //   search: true,
  //   sort: true,
  // },
  // { label: 'Мітка', dataPath: 'mark.label', filter: false, search: true, sort: true },
  // {
  //   label: 'Статус',
  //   dataPath: 'status',
  //   filter: false,
  //   search: true,
  //   sort: true,
  // },
];
