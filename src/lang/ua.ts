import { ApiDirType, AppPagesEnum } from '../redux/APP_CONFIGS';
import { ContractorsTypesEnum } from '../redux/contractors/contractors.types';
import { BusinessSubjectTypeEnum, OwnershipTypeEnum } from '../redux/companies/companies.types';

export const langUa = {
  // DIRECTORIES

  [ApiDirType.CATEGORIES_TR]: 'Статті доходів/витрат',
  [ApiDirType.CATEGORIES_PROD]: 'Категорії товарів/послуг',
  [ApiDirType.BRANDS]: 'Бренди',
  [ApiDirType.TAGS]: 'Теги',
  [ApiDirType.WAREHOUSES]: 'Склади',
  [ApiDirType.VARIATIONS]: 'Варіації',
  [ApiDirType.BANK_ACCOUNTS]: 'Банківські рахунки',
  [ApiDirType.PROPERTIES_PRODUCTS]: 'Характеристики товарів/послуг',
  variationsTemplate: 'Шаблон для варіацій',
  variationsTemplates: 'Шаблони для варіацій',

  propertiesList: 'Список характеристик',
  staticProperties: 'Статичні характеристики',
  availableProperties: 'Доступні характеристики',

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

  [AppPagesEnum.priceLists]: 'Прайс листи',
  [AppPagesEnum.documentsFlow]: 'Документи',
  [AppPagesEnum.companies]: 'Компанії',
  [AppPagesEnum.dashboard]: 'Дашборд',
  [AppPagesEnum.transactions]: 'Рух коштів',
  [AppPagesEnum.orders]: 'Замовлення',
  [AppPagesEnum.refunds]: 'Повернення',
  [AppPagesEnum.supplement]: 'Постачання',
  [AppPagesEnum.storage]: 'Склад',
  [AppPagesEnum.products]: 'Продукти',
  [AppPagesEnum.manager]: 'Менеджер',

  brand: 'Бренд',
  selectBrand: 'Оберіть бренд',
  createTag: 'Створити тег',

  selectVariationsTemplate: 'Оберіть список доступних характеристик',

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
  barCode: 'Штрих-код',
  qrCode: 'QR-Code',
  innerCode: 'Внутрішній код',
  insertCode: 'Впишіть код',
  variation: 'Варіація',

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
  group: 'Група',
  property: 'Характеристика',
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
  min: 'MIN',
  max: 'MAX',
  step: 'Крок',
  units: 'Од. виміру',
  discount: 'Знижка',
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
  createPropertiesGroup: 'Створити групу хараткеристик',
  createProperty: 'Створити характеритику',
  createPropertyValue: 'Створити значення характеристики',

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

  select: 'Обрати',
  selected: 'Обрано',

  create: 'Створити',
  creating: 'Створення',
  created: 'Створено',
  update: 'Оновити дані',
  updating: 'Оновлення даних',
  updated: 'Оновлено',
  delete: 'Видалити',
  deleted: 'Видалено',
  deleting: 'Видалення',
  load: 'Завантажити',
  loaded: 'Завантажено',
  loading: 'Завантаження',
  cost: 'Собівартість',
  sku: 'Артикул | SKU',
  sizesTable: 'Розмірна сітка',
  visibility: 'Видимість',
};
