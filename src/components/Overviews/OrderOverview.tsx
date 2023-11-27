import ModalForm, { ModalFormProps } from '../ModalForm';
import { IOrder } from '../../types/orders/orders.types';
import FlexBox from '../atoms/FlexBox';
import styled from 'styled-components';
import FormAccordionItem from '../Forms/components/FormAccordionItem';
import { FormCreateOrderTabs } from '../Forms/FormCreateOrder/FormCreateOrder';
import { useState } from 'react';
import { t } from '../../lang';
import { getCustomerFullNameOrLabel } from '../../utils';

export interface OrderOverviewProps extends Omit<ModalFormProps, 'onSubmit'> {
  order?: IOrder;
}
export type OrderInfoBoxProps = { label?: string; getData?: (data: IOrder) => React.ReactNode | void };

export const OrderOverview: React.FC<OrderOverviewProps> = ({ order, ...props }) => {
  const [currenTab, setCurrentTab] = useState(0);

  return (
    <ModalForm
      filterOptions={FormCreateOrderTabs}
      onOptSelect={(_o, _v, index) => {
        setCurrentTab(index);
      }}
      fillHeight
      title={`Order: ${order?.code ? order?.code : '000000000'}`}
      {...props}
    >
      <Container flex={1}>
        {currenTab === 0 && (
          <FlexBox height={'max-content'}>
            <FormAccordionItem
              open
              contentContainerStyle={{ padding: '0 8px 8px' }}
              renderHeader={'Загальна інформація'}
            >
              {mainOrderInfo.map((el, idx) => (
                <InfoBox key={idx.toString()}>
                  <InfoBoxTitle>{el.label || 'Title'}</InfoBoxTitle>
                  <InfoBoxContent>{(order && el.getData && el.getData(order)) || 'Не визначено'}</InfoBoxContent>
                </InfoBox>
              ))}
            </FormAccordionItem>
            <FormAccordionItem contentContainerStyle={{ padding: '0 8px 8px' }} renderHeader={'Замовник'}>
              {orderCustomerInfo.map((el, idx) => (
                <InfoBox key={idx.toString()}>
                  <InfoBoxTitle>{el.label || 'Title'}</InfoBoxTitle>
                  <InfoBoxContent>{(order && el.getData && el.getData(order)) || 'Не визначено'}</InfoBoxContent>
                </InfoBox>
              ))}
            </FormAccordionItem>
            <FormAccordionItem contentContainerStyle={{ padding: '0 8px 8px' }} renderHeader={'Отримувач'}>
              {orderReceiverInfo.map((el, idx) => (
                <InfoBox key={idx.toString()}>
                  <InfoBoxTitle>{el.label || 'Title'}</InfoBoxTitle>
                  <InfoBoxContent>{(order && el.getData && el.getData(order)) || 'Не визначено'}</InfoBoxContent>
                </InfoBox>
              ))}
            </FormAccordionItem>
            <FormAccordionItem
              contentContainerStyle={{ padding: '0 8px 8px' }}
              renderHeader={'Відвантаження'}
            ></FormAccordionItem>

            <FormAccordionItem
              contentContainerStyle={{ padding: '0 8px 8px' }}
              renderHeader={'Оплата'}
            ></FormAccordionItem>

            {/*<FormAccordionItem contentContainerStyle={{ padding: '0 8px 8px' }} renderHeader={'Додатково'}>*/}
            {/*  {orderAdditionalInfo.map((el, idx) => (*/}
            {/*    <InfoBox key={idx.toString()}>*/}
            {/*      <InfoBoxTitle>{el.label || 'Title'}</InfoBoxTitle>*/}
            {/*      <InfoBoxContent>{(order && el.getData && el.getData(order)) || 'Не визначено'}</InfoBoxContent>*/}
            {/*    </InfoBox>*/}
            {/*  ))}*/}
            {/*</FormAccordionItem>*/}
          </FlexBox>
        )}
      </Container>
    </ModalForm>
  );
};

const Container = styled(FlexBox)`
  overflow: auto;
`;

const InfoBox = styled(FlexBox)`
  height: 44px;
  border-bottom: 1px solid ${({ theme }) => theme.modalBorderColor};
`;
const InfoBoxTitle = styled(FlexBox)`
  padding: 4px 8px;
  font-size: 11px;
  color: ${({ theme }) => theme.globals.inputPlaceholderColor};
`;
const InfoBoxContent = styled(FlexBox)`
  padding: 4px 8px;
  text-align: right;
  font-size: 14px;
  font-weight: 600;
`;

export default OrderOverview;

const mainOrderInfo: OrderInfoBoxProps[] = [
  { label: 'ID', getData: o => o._id },
  { label: 'Статус', getData: o => o.status },
  { label: 'Тип', getData: o => '' },
  { label: 'Менеджер', getData: o => o.manager?.user?.name },
  { label: 'Створив / Дата', getData: o => new Date(o.createdAt || '').getDate() },
  { label: 'Оновив / Дата', getData: o => new Date(o.deletedAt || '').getDate() },
];

const orderCustomerInfo: OrderInfoBoxProps[] = [
  { label: 'ID', getData: o => o.customer?._id },
  {
    label: `${t('Name')}/${t('Label')}`,
    getData: o => (o?.customer ? getCustomerFullNameOrLabel(o?.customer) : '---'),
  },
  // { label: 'Статус', getData: o => o.customer?.status },
  { label: 'Телефон', getData: o => o.customer?.phone },
  { label: 'Емейл', getData: o => o.customer?.email },
  { label: 'Способи комунікації', getData: o => o?.communication?.customer?.map(m => m?.label ?? '').join(', ') },
];

// function getCustomerInfoColumns(info: ICustomer, communication?: ICommunicationMethod[]) {
//   const arr: OrderInfoBoxProps[] = [
//     { label: 'Ref ID', getData: o => info?._id },
//     {
//       label: `${t('Name')}/${t('Label')}`,
//       getData: o => (info ? getCustomerFullNameOrLabel(o?.customer) : '---'),
//     },
//     // { label: 'Статус', getData: o => info?.status },
//     { label: 'Телефон', getData: o => info?.phone },
//     { label: 'Емейл', getData: o => info?.email },
//     { label: 'Способи комунікації', getData: o => communication?.map(m => m?.label ?? '').join(', ') },
//   ];
//
//   return arr;
// }

const orderReceiverInfo: OrderInfoBoxProps[] = [
  { label: 'ID', getData: o => o.receiver?._id },
  {
    label: 'ПІП',
    getData: o => (o?.receiver ? getCustomerFullNameOrLabel(o?.receiver) : '---'),
  },
  // { label: 'Статус', getData: o => o.receiver?.status },
  { label: 'Телефон', getData: o => o.receiver?.phone },
  { label: 'Емейл', getData: o => o.receiver?.email },
  { label: 'Способи комунікації', getData: o => o?.communication?.receiver?.map(m => m?.label ?? '').join(', ') },
];
// const orderAdditionalInfo: OrderInfoBoxProps[] = [
//   { label: 'Коментар', getData: o => o.comment },
//   { label: 'Внутрішній коментар', getData: o => o.innerComment },
// ];
// const orderShipmentInfo: OrderInfoBoxProps[] = [
//   {
//     label: 'ПІП',
//     getData: o =>
//       !o.receiver?.label ? `${o.receiver?.name || ''} ${o.receiver?.secondName || ''}` : `${o.receiver?.label || ''}`,
//   },
//   // { label: 'Статус', getData: o => o.receiver?.status },
//   { label: 'Телефон', getData: o => o.receiver?.phone },
//   { label: 'Емейл', getData: o => o.receiver?.email },
//   { label: 'Спосіб комунікації', getData: o => o.receiverCommunicationMethod?.label },
// ];