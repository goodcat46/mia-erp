import { useParams } from 'react-router-dom';

export enum AppUrlParamKeys {
  companyId = 'companyId',
  permissionId = 'permissionId',
  warehouseId = 'warehouseId',
  priceListId = 'priceListId',
  priceId = 'priceId',
  discountId = 'discountId',
  offerId = 'offerId',
  orderId = 'orderId',
  cartId = 'cartId',
  refundId = 'refundId',
  customerId = 'customerId',
  for = 'for',
  type = 'type',
  businessType = 'businessType',
}
export type AppUrlParams = Record<AppUrlParamKeys, string>;
const useAppParams = (): Readonly<Partial<AppUrlParams & { '*': string }>> => useParams<AppUrlParams>();

export default useAppParams;
