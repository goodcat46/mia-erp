import { CellTittleProps } from 'components/TableList/TebleCells/CellTitle';
import { SelectItem } from '../components/TableList/TableList';
import { t } from '../lang';
import { BusinessSubjectTypeEnum, CompanyEntity, OwnershipTypeEnum } from '../types/companies.types';
import { enumToFilterOptions } from '../utils';

export const ownershipTypeFilterOptions = enumToFilterOptions(OwnershipTypeEnum);
export const businessSubjectTypeFilterOptions = enumToFilterOptions(BusinessSubjectTypeEnum);
export const companiesTableColumns: CellTittleProps<CompanyEntity>[] = [
  {
    top: {
      name: 'Назва',
      // getData: rd => (rd.name ? `${rd.name} ${rd.fullName || ''}` : `${rd.fullLabel}`),
    },
    bottom: {
      name: 'Тип',

      path: 'company.taxCode',
      getData: rd => (rd.businessSubjectType ? t(rd.businessSubjectType) : rd.businessSubjectType),
    },
    width: '200px',
    action: 'valueByPath',
  },
  {
    top: { name: 'Назва', path: 'company.name' },
    bottom: { name: 'ІПН/ЄДРПОУ', path: 'company.taxCode' },
    width: '200px',
    action: 'valueByPath',
  },
  {
    top: { name: 'Роль', path: 'role.label' },
    bottom: { name: 'Опис', path: 'role.descr' },
    width: '160px',
    action: 'valueByPath',
  },
  {
    top: { name: 'Власник', path: 'company.owner.name' },
    bottom: { name: 'Емейл', path: 'company.owner.email' },
    width: '280px',
    action: 'valueByPath',
  },
  {
    top: { name: 'Локація', path: 'location' },
    width: '250px',
    action: 'valueByPath',
  },
  {
    top: { name: 'Емейл', path: 'company.email' },
    bottom: { name: 'Телефон', path: 'company.phone' },
    width: '210px',
    action: 'valueByPath',
  },
  {
    top: { name: 'Створено', align: 'center', dataKey: 'createdAt' },
    bottom: { name: 'Оновлено', align: 'center', dataKey: 'updatedAt' },
    width: '150px',
    action: 'dateSimple',
  },
];
export const permissionsSearchParams: SelectItem[] = [
  // { label: t('date'), dataPath: 'eventDate', filter: false, search: false, sort: true },
  { label: t('Label'), dataPath: 'label.base', filter: false, search: false, sort: true },
  { label: t('Name first'), dataPath: 'name.first', filter: false, search: false, sort: true },
  { label: t('Name first'), dataPath: 'name.first', filter: false, search: false, sort: true },
  { label: t('status'), dataPath: 'status', filter: false, search: true, sort: true },
];
