import { FilterSelectorType } from 'components/Filter/AppFilter';
import { PriceListEntity } from '../../types/price-management/price-management.types';

const useStorageFilterSelectors = (): FilterSelectorType<keyof PriceListEntity>[] => {
  // const transactionTypes = [
  //   { _id: 'ds6d5vf6sd5f1v6sd', name: 'INCOME', label: 'ДОХІД' },
  //   { _id: 'ds6d5vf6sd6f1v61d', name: 'TRANSFER', label: 'ПЕРЕКАЗ' },
  //   { _id: 'ds6d5vf6dd6f1v68d', name: 'EXPENSE', label: 'ВИТРАТИ' },
  // ];

  return [
    // {
    //   label: 'Рахунок OUT',
    //   data: dirCounts.directory,
    //   selectorName: 'countOut',
    //   dirType: ApiDirType.COUNTS,
    // },
    // {
    //   label: 'Суб-рахунок OUT',
    //   data: dirCounts.directory,
    //   selectorName: 'subCountOut',
    //   dirType: ApiDirType.COUNTS,
    // },
    // {
    //   label: 'Рахунок IN',
    //   data: dirCounts.directory,
    //   selectorName: 'countIn',
    //   dirType: ApiDirType.COUNTS,
    // },
    // {
    //   label: 'Суб-рахунок IN',
    //   data: dirCounts.directory,
    //   selectorName: 'subCountIn',
    //   dirType: ApiDirType.COUNTS,
    // },
    // {
    //   label: 'Категорії',
    //   data: dirCategories.directory,
    //   selectorName: 'category',
    //   dirType: ApiDirType.CATEGORIES_TR,
    // },
    // {
    //   label: 'Під-категорії',
    //   data: dirCategories.directory,
    //   selectorName: 'subCategory',
    //   dirType: ApiDirType.CATEGORIES_TR,
    // },
  ];
};
export default useStorageFilterSelectors;
