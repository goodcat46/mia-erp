import { AddressDto, AppResponse, IBase, IFormDataValueWithUUID, OnlyUUID } from '../global.types';
import { IPriceBase, IPriceListItem } from '../priceManagement/priceManagement.types';
import { ICompany } from '../companies/companies.types';
import { IManager, IUserBase } from '../auth/auth.types';
import { ICommunicationDirItem } from '../../components/Directories/dir.types';
import { IProductInventory, IWarehouse } from '../warehouses/warehouses.types';
import { IProduct } from '../products/products.types';
import { IVariation } from '../products/variations.types';
import { ICustomerBase } from '../customers/customers.types';
import { IShipment } from '../shipments/shipments.types';
import { IPayment } from '../payments/payments.types';
import { IInvoice } from '../invoices/invoices.types';
import { AppQueryParams } from '../../api';

export enum OrderTypeEnum {
  Order = 'Order',
  Group = 'Group',
}

export enum OrderStatusEnum {
  new = 'order_new',
  inWork = 'order_inWork',
  rejectedByCustomer = 'order_rejectedByCustomer',
  rejectedByManager = 'order_rejectedByManager',
  active = 'order_active',
  fulfilled = 'order_fulfilled',
  fulfilledWithRefund = 'order_fulfilledWithRefund',
  archived = 'order_archived',
  expired = 'order_expired',
}

// export type OrderStatus = 'rejected' | 'approved' | 'pending' | 'error' | 'success' | 'warning' | 'info';

export interface IOrderSlotBase extends IPriceBase {
  quantity?: number;
  total?: number;
  status?: OrderStatusEnum;

  product?: IProduct;
  variation?: IVariation;
  origin?: Partial<IPriceListItem>;
  inventory?: IProductInventory;
  warehouse?: IWarehouse;
}

export interface IOrderSlot extends IBase, IOrderSlotBase {
  owner?: ICompany;
  order?: OnlyUUID;

  shipment?: IShipment;
}

export interface IOrderTempSlot extends IOrderSlotBase {
  tempId?: string;
}
export interface OrderTotals {
  items?: number;
  amount?: number;
}
export interface IOrder extends IBase {
  owner?: ICompany;
  manager?: IManager;

  barCode?: string;
  code?: string;

  customer?: ICustomerBase;
  customerCommunicationMethods?: ICommunicationDirItem[];

  receiver?: ICustomerBase;
  receiverCommunicationMethods?: ICommunicationDirItem[];

  customerInfo?: ICustomerBase & {
    communication?: string[];
  };

  receiverInfo?: ICustomerBase & {
    communication?: string[];
  };
  executeAt?: string | number | Date;
  executeNow?: boolean;

  status?: OrderStatusEnum;

  totals?: OrderTotals;

  slots?: IOrderSlot[];
  invoices?: IInvoice[];
  shipments?: IShipment[];
  deliveries?: IShipment[];
  payments?: IPayment[];

  comment?: string;
  innerComment?: string;
}

export interface ICreateOrderInfoFormState {
  manager?: {
    _id?: string;
    user?: Partial<IUserBase>;
  };

  // customer?: ICustomerBase;
  // customerCommunicationMethods?: string[];
  //
  // receiver?: ICustomerBase;
  // receiverCommunicationMethods?: string[];

  customer?: {
    info?: ICustomerBase;
    communication?: string[];
  };

  receiver?: {
    info?: ICustomerBase;
    communication?: string[];
  };

  status?: OrderStatusEnum;

  invoiceInfo?: {
    method?: IFormDataValueWithUUID;
    expiredAt?: string | number | Date;
  };

  executeAt?: string | number | Date;
  executeNow?: boolean;

  shipmentInfo?: {
    executeAt?: Date | number | string;
    executeNow?: boolean;
  };
  deliveryInfo?: {
    method?: IFormDataValueWithUUID;
    destination?: AddressDto;

    invoiceInfo?: {
      method?: IFormDataValueWithUUID;
      expiredAt?: string | number | Date;
    };
  };
}

export interface ICreateOrdersGroupFormState {
  slots: IOrderTempSlot[];
  info?: ICreateOrderInfoFormState;
  orders: IOrder[];
}

export interface FormCreateOrdersGroupFormData {
  info?: ICreateOrdersGroupFormState;
  slots?: IOrderSlotReqData[];
  invoices?: any[];
  shipments?: any[];
}

export interface IAllOrdersRes extends AppResponse<IOrder[]> {}

export interface IOrderRes extends AppResponse<IOrder> {}

export interface IOrderReqData {
  _id?: string;
  data: IOrderBaseDto;
  params?: AppQueryParams;
}

export interface ICreateOrdersGroupDto {
  slots?: IOrderTempSlot[];
  info?: ICreateOrderInfoFormState;
}
export interface ICreateOrdersWithSlotsAndGroupByWarehousesReqData {
  data: ICreateOrdersGroupDto;
  params?: AppQueryParams;
}

export interface IOrderBaseDto {
  manager?: OnlyUUID;
  barCode?: number;
  code?: number;
  status?: OrderStatusEnum;
  customer?: OnlyUUID;
  customerCommunicationMethods?: string[];
  receiver?: OnlyUUID;
  receiverCommunicationMethods?: string[];
  destination?: string;
  shipmentMethod?: OnlyUUID;
  paymentMethod?: OnlyUUID;
  comment?: string;
  innerComment?: string;
}

export interface IOrderSlotReqData {
  _id?: string;
  data: IOrderSlot;
}

export interface IOrderSlotItemReqData {
  _id?: string;
  data: IOrderSlot;
}

// export type OrderStatus = 'rejected' | 'approved' | 'pending' | 'error' | 'success' | 'warning' | 'info';
//
// export enum OrderTypeEnum {
//   SIMPLE = 'SIMPLE',
//   SET = 'SET',
// }
//
// export type OrderType = keyof typeof OrderTypeEnum;
//
// export type OrderFilterOption = FilterOpt<OrderType>;
//
// export enum OrderPriceTypeEnum {
//   DEFAULT = 'DEFAULT',
//   COMMISSION = 'COMMISSION',
//   COMMISSION_FIX = 'COMMISSION_FIX',
// }
//
// export type OrderPriceType = 'COMMISSION' | 'DEFAULT' | 'COMMISSION_FIX';
//
// export interface IOrderBase extends IBase {
//   price?: number;
//   priceType?: OrderPriceType;
//   type?: OrderType;
//   currency?: CurrencyCode;
//   status?: OrderStatus;
//   archived?: boolean;
//   visible?: boolean;
//   description?: string;
//   tags?: string[];
//   isService?: boolean;
// }
//
// export interface IOrderSlot extends IPriceListItem {
//   origin?: IPriceListItem;
// }
//
// export interface IOrderInvoice extends IBase {
//   order?: IOrder;
//   payments?: IOrderPayment;
//   payer?: IBaseDirItem<any, ApiDirType.CONTRACTORS>;
//   bankInfo?: any;
// }
//
// export interface IOrderShipment extends IBase {
//   customer?: IBaseDirItem<any, ApiDirType.CONTRACTORS>;
//   receiver?: IBaseDirItem<any, ApiDirType.CONTRACTORS>;
// }
//
// export interface IOrderPayment extends IBase {
//   invoice: IOrderInvoice;
// }
//
// export interface IDestination extends Partial<IBase> {
//   postCode?: string;
//   region?: string;
//   city?: string;
//   street?: string;
//   house?: string;
//   room?: string;
// }
//
// export interface ITransporter extends IBaseDirItem {}
//
// export interface IOrder extends IOrderBase {
//   owner?: ICompany;
//   author?: IManager;
//   editor?: IManager;
//   manager?: IManager;
//
//   // customer?: IBaseDirItem<any, ApiDirType.CONTRACTORS>;
//   // receiver?: IBaseDirItem<any, ApiDirType.CONTRACTORS>;
//   customer?: string;
//   receiver?: string;
//   destination?: string;
//   transporter?: string;
//   // destination?: IDestination;
//   // transporter?: ITransporter;
//
//   slots?: IOrderSlot[];
//   invoices?: IOrderInvoice[];
//   payments?: IOrderPayment[];
//   shipments?: IOrderShipment[];
//
//   comment?: string;
//   innerComment?: string;
// }
//
// export type OrderImage = { img_preview?: string; img_1x: string; img_2x: string; webp: string };
//
// export interface IOrderForReq extends Partial<Record<keyof IOrder, any>> {
//   type?: OrderType;
//   customer?: OnlyUUID;
//   receiver?: OnlyUUID;
//   slots?: OnlyUUID;
//   invoices?: OnlyUUID;
//   payments?: OnlyUUID;
//   shipments?: OnlyUUID;
//   comment?: string;
//   innerComment?: string;
//   status?: OrderStatus;
//   tags?: string[];
// }
//
// export interface IOrderReqData {
//   _id?: string;
//   data: IOrderForReq;
// }
//
// export interface IOrderReqData {
//   _id?: string;
//   data: IOrderForReq;
// }
//
// export interface IAllOrdersRes extends AppResponse<IOrder[]> {}
//
// export interface IOrderRes extends AppResponse<IOrder> {}
//
// export interface ICreateOrderRes extends AppResponse<IOrder> {}
