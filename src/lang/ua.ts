import { ApiDirType } from '../redux/APP_CONFIGS';
import { ContractorsTypesEnum } from '../redux/contractors/contractors.types';
import { BusinessSubjectTypeEnum, OwnershipTypeEnum } from '../redux/companies/companies.types';

export const langUa = {
  // DIRECTORIES

  [ApiDirType.CATEGORIES_TR]: 'Категорії',
  [ApiDirType.CATEGORIES_PROD]: 'Категорії',
  [ApiDirType.BRANDS]: 'Бренди',
  [ApiDirType.TAGS]: 'Теги',
  [ApiDirType.WAREHOUSES]: 'Склади',

  counter: 'Бухгалтер',
  auditor: 'Аудитор',
  [ContractorsTypesEnum.SUPPLIER]: 'Постачальник',
  [ContractorsTypesEnum.CUSTOMER]: 'Клієнт',
  [ContractorsTypesEnum.CONTRACTOR]: 'Підрядник',
  [ContractorsTypesEnum.SUB_CONTRACTOR]: 'Суб-підрядник',
  // [ContractorsTypesEnum.BRAND_MANAGER]: 'Бренд менеджер',
  // [ContractorsTypesEnum.SUPPLY_MANAGER]: 'Менеджер з постачання',
  // [ContractorsTypesEnum.SALES_MANAGER]: 'Менеджер з продажу',
  [ContractorsTypesEnum.WORKER]: 'Робітник',
  [ContractorsTypesEnum.COMMISSION_AGENT]: 'Комісіонер',
  [ContractorsTypesEnum.CONSIGNOR]: 'Комітент',
  [ContractorsTypesEnum.TRANSPORTER]: 'Перевізник',

  [BusinessSubjectTypeEnum.company]: 'Юридична особа',
  [BusinessSubjectTypeEnum.entrepreneur]: 'ФОП',
  [BusinessSubjectTypeEnum.person]: 'Фізична особа',

  [OwnershipTypeEnum.UA_TOV]: 'Товариство з обмеженою відповідальністю (ТОВ)',
  [OwnershipTypeEnum.UA_CLOSED_JOINT_STOCK_COMPANY]: 'Закрите акціонерне товариство (ЗАТ)',
  [OwnershipTypeEnum.UA_PUBLIC_JOINT_STOCK_COMPANY]: 'Відкрите акціонерне товариство (ВАТ)',
  [OwnershipTypeEnum.UA_COOPERATIVE]: 'Кооператив',
  [OwnershipTypeEnum.UA_SOLE_PROPRIETORSHIP]: 'Індивідуальне підприємство',
  [OwnershipTypeEnum.UA_STATE_COMPANY]: 'Державна компанія',
  [OwnershipTypeEnum.UA_JOINT_VENTURE]: 'Спільне підприємство',
  [OwnershipTypeEnum.UA_BRANCH]: 'Філія',
  [OwnershipTypeEnum.UA_FRANCHISING_COMPANY]: 'Франчайзингова компанія',
  [OwnershipTypeEnum.UA_COLLECTIVE_ENTERPRISE]: 'Колективне підприємство',

  brand: 'Бренд',
  selectBrand: 'Оберіть бренд',
  createTag: 'Створити тег',

  counts: 'Облікові рахунки',
  count: 'Обліковий рахунок',
  categories: 'Категорії',
  category: 'Категорія',
  trCategories: 'Категорії для транзакцій',
  trCategory: 'Категорія для транзакцій',
  productCategories: 'Категорії для товарів/послуг',
  productSubCategories: 'Під-категорії для товарів',
  subCategory: 'Під-категорія',
  parentCategory: 'Батьківська категорія',
  subCategories: 'Під-категорії',
  contractor: 'Контрагент',
  contractors: 'Контрагенти',
  mark: 'Мітка',
  marks: 'Мітки',
  activityType: 'Вид діяльності',
  activityTypes: 'Види діяльності',
  user: 'Користувач',
  users: 'Користувачі',
  project: 'Проєкт',
  projects: 'Проєкти',
  createdAt: 'Створено',
  updateAt: 'Оновлено',
  document: 'Документ',
  documents: 'Документи',
  status: 'Статус',

  code: 'Код',
  insertCode: 'Впишіть код',

  closeAfterSave: 'Закрити після збереження',
  clearAfterSave: 'Очистити після збереження',

  // Transaction form
  countIn: 'Рахунок IN',
  subCountIn: 'Суб-рахунок IN',
  countOut: 'Рахунок OUT',
  subCountOut: 'Суб-рахунок OUT',
  ownership: 'Форма власності',
  businessSubjectType: "Тип суб'єкта господарювання",
  name: "Ім'я",
  insertName: "Введіть ім'я",
  type: 'Тип',
  label: 'Назва',
  insertLabel: 'Введіть назву',
  secondName: 'Прізвище',
  insertSecondName: 'Введіть прізвище',
  comment: 'Коментар',
  description: 'Опис',
  insertComment: 'Введіть коментар',
  amount: 'Сума',
  price: 'Ціна',
  sale: 'Знижка',
  date: 'Дата',
  time: 'Час',
  timeFrom: 'Дійсний з:',
  timeTo: 'Дійсний до:',
  dateAndTime: 'Дата і час',
  parentItem: 'Батьківський елемент',
  expireAt: 'Дійсне до',

  manufacturer: 'Виробник',

  balance: 'Баланс',
  startBalance: 'Початковий баланс',
  insertStartBalance: 'Введіть початковий баланс',
  currency: 'Валюта',
  phone: 'Телефон',
  insertPhone: 'Телефон',
  email: 'Емейл',
  insertEmail: 'Емейл',
  selectCurrency: 'Оберіть валюту',
  selectTags: 'Оберть теги',

  createDirParentItem: 'Створити батьківський елемент',
  createDirChildItem: 'Створити дочірній елемент',
  createParentCount: 'Створити рахунок',
  createChildCount: 'Створити суб-рахунок',
  createParentCategory: 'Створити категорію',
  createChildCategory: 'Створити під-категорію',
  editParentCount: 'Редагувати рахунок',
  editChildCount: 'Редагувати суб-рахунок',
  editParentCategory: 'Редагувати категорію',
  editChildCategory: 'Редагувати під-категорію',
  deleteParentCount: 'Видалити рахунок',
  deleteChildCount: 'Видалити суб-рахунок',
  deleteParentCategory: 'Видалити категорію',
  deleteChildCategory: 'Видалити під-категорію',

  createContractor: 'Створити',
  copyContractor: 'Клпіювати',
  deleteContractor: 'Видалити',
  editContractor: 'Редагувати',
  archive: 'Архівувати',
  unArchive: 'Відновити',

  taxCode: 'ЄДРПОУ',
  personalTaxCode: 'ІПН',

  INCOME: 'Дохід',
  INCOMES: 'Доходи',
  EXPENSE: 'Витрата',
  EXPENSES: 'Витрати',
  TRANSFER: 'Переказ',
  TRANSFERS: 'Перекази',
  ACTIVE: 'Актив',
  ACTIVES: 'Активи',
  PASSIVE: 'Пасив',
  PASSIVES: 'Пасиви',

  DEFAULT: 'DEFAULT',
  CUSTOM: 'CUSTOM',

  BASE: 'BASE',
  ADDITIONAL: 'ADDITIONAL',

  success: 'Успіх',
  successfully: 'Успішно',
  error: 'Помилка',
  pending: 'У процесі',

  logOutUser: 'Вийти з профілю',
  logOutPermission: 'Вийти з компанії',

  select: '',
  selected: '',

  create: '',
  creating: '',
  created: '',
  update: '',
  updating: '',
  updated: '',
  delete: '',
  deleted: '',
  deleting: '',
  load: '',
  loaded: '',
  loading: '',
  cost: 'Собівартість',
  sku: 'Артикул | SKU',
  sizesTable: 'Розмірна сітка',
  visibility: 'Видимість',

  companies: 'Компанії',
  dashboard: 'Дашборд',
  transactions: 'Рух коштів',
  orders: 'Замовлення',
  refunds: 'Повернення',
  supplement: 'Постачання',
  storage: 'Склад',
  products: 'Продукти',
  manager: 'Менеджер',
};
