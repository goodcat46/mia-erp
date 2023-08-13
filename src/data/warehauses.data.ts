import { CellTittleProps } from '../components/TableList/TebleCells/CellTitle';
import { IProductInventory, IWarehouse } from '../redux/warehouses/warehouses.types';
import t from '../lang';

export const warehousesTableColumns: CellTittleProps<IWarehouse>[] = [
  {
    top: { name: 'Склад', getData: rd => rd.label },
    bottom: { name: 'Номер', getData: rd => rd.code },
    width: '220px',

    action: 'valueByPath',
  },
  {
    top: { name: 'Тип' },
    bottom: { name: 'Статус' },
    width: '180px',
    action: 'valueByPath',
  },
  {
    top: { name: 'Емейл' },
    bottom: { name: 'Телефон' },
    width: '180px',
    action: 'contacts',
  },
  {
    top: { name: 'Локація' },
    width: '150px',
    action: 'valueByPath',
  },
  {
    top: { name: 'Створено', align: 'center', path: 'createdAt' },
    bottom: { name: 'Оновлено', align: 'center', path: 'updatedAt' },
    width: '150px',
    action: 'dateSimple',
  },
];
export const warehouseOverviewTableColumns: CellTittleProps<IProductInventory>[] = [
  {
    top: { name: t('label'), align: 'start', getData: rd => rd.product?.label },
    bottom: { name: t('sku'), align: 'start', getData: rd => rd.product?.sku },
    width: '200px',
    action: 'valueByPath',
  },
  {
    top: {
      name: t('category'),
      align: 'start',
      getData: rd => rd.product?.category?.label,
    },
    bottom: {
      name: t('parentCategory'),
      align: 'start',
      getData: rd => rd.product?.parentCategory?.label,
    },
    width: '180px',
    action: 'valueByPath',
  },
  {
    top: { name: t('type'), align: 'start', path: 'type' },
    bottom: { name: t('status'), align: 'start', path: 'status' },
    width: '120px',
    action: 'status',
  },
  {
    top: { name: 'Наявність', align: 'start', path: 'availabilityInfo.status' },
    bottom: { name: 'Видимість', align: 'start', path: 'visibility' },
    width: '150px',
    action: 'status',
  },
  {
    top: { name: 'Бренд', align: 'start', path: 'brand.label' },
    bottom: { name: 'Виробник', align: 'start', path: 'manufacturer.name' },
    width: '150px',
    action: 'valueByPath',
  },
  {
    top: { name: 'Автор', align: 'start', path: 'author.name' },
    bottom: { name: 'Емейл', align: 'start', path: 'author.email' },
    width: '190px',
    action: 'valueByPath',
  },
  {
    top: { name: 'Опис', align: 'start', path: 'description' },
    width: '190px',
    action: 'valueByPath',
  },
  {
    top: { name: 'Створено', align: 'center', path: 'createdAt' },
    bottom: { name: 'Оновлено', align: 'center', path: 'updatedAt' },
    width: '150px',
    action: 'dateSimple',
  },
];
export const warehousesTableColumnsForOrderCreateOrderSlotForm: CellTittleProps[] = [
  {
    top: { name: 'Склад' },
    bottom: { name: 'Номер' },
    width: '150px',
    action: 'valueByPath',
  },

  {
    top: { name: 'Залишок' },
    bottom: { name: 'Резерв' },
    width: '150px',
    action: 'valueByPath',
  },
  {
    top: { name: 'Локація' },
    width: '150px',
    action: 'valueByPath',
  },
  {
    top: { name: 'Інфо' },
    width: '150px',
    action: 'valueByPath',
  },
];
