import { enumToFilterOptions } from '../utils';
import { TagTypeEnum, TrCategoryTypeEnum } from '../types/directories.types';
import { CountsTypesEnum } from '../redux/directories/counts.types';
import { OfferTypeEnum } from '../types/offers/offers.types';
import { ContractorsTypesEnum } from '../redux/directories/contractors.types';
import { PropertySelectableTypeEnum } from '../types/offers/properties.types';

export const categoriesFilterOptions = enumToFilterOptions(TrCategoryTypeEnum);
export const countsFilterOptions = enumToFilterOptions(CountsTypesEnum);
export const productsFilterOptions = enumToFilterOptions(OfferTypeEnum);

export const propertiesSelectableTypeFilterOptions = enumToFilterOptions(PropertySelectableTypeEnum);
export const tagsFilterOptions = enumToFilterOptions(TagTypeEnum);
export const counterpartyFilterOptions = enumToFilterOptions(ContractorsTypesEnum);