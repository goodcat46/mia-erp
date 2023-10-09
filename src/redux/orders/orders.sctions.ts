import { createAction } from '@reduxjs/toolkit';
import { IOrderTempSlot } from './orders.types';

enum OrdersActionTypeEnum {
  addSlotToOrder = 'orders/addSlotToOrderAction',
  removeSlotFromOrder = 'orders/removeSlotFromOrderAction',
  addSlotToGroup = 'orders/addSlotToGroupAction',
  removeSlotFromGroup = 'orders/removeSlotFromGroupAction',
  updateSlotInGroup = 'orders/updateSlotInGroupAction',
}
export const AddSlotToOrderAction = createAction<IOrderTempSlot, OrdersActionTypeEnum.addSlotToOrder>(
  OrdersActionTypeEnum.addSlotToOrder
);
export const RemoveSlotFromOrderAction = createAction<string, OrdersActionTypeEnum.removeSlotFromOrder>(
  OrdersActionTypeEnum.removeSlotFromOrder
);
export const AddSlotToGroupAction = createAction<IOrderTempSlot, OrdersActionTypeEnum.addSlotToGroup>(
  OrdersActionTypeEnum.addSlotToGroup
);
export const RemoveSlotFromGroupAction = createAction<string, OrdersActionTypeEnum.removeSlotFromGroup>(
  OrdersActionTypeEnum.removeSlotFromGroup
);
export const UpdateSlotInGroupAction = createAction<IOrderTempSlot, OrdersActionTypeEnum.updateSlotInGroup>(
  OrdersActionTypeEnum.updateSlotInGroup
);
