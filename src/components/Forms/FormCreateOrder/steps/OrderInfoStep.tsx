import FlexBox from 'components/atoms/FlexBox';
import styled from 'styled-components';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { t } from 'lang';
import { Text } from 'components/atoms/Text';
import FormAccordionItem from '../../components/FormAccordionItem';
import InputLabel from 'components/atoms/Inputs/InputLabel';
import { ICreateOrderInfoFormState } from 'types/orders/orders.types';
import { useModalService } from '../../../ModalProvider/ModalProvider';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import SelectCustomerModal from '../components/SelectCustomerModal';
import TagButtonsFilter from 'components/atoms/TagButtonsFilter';
import SelectManagerModal from '../components/SelectManagerModal';
import { FormOrderStepBaseProps } from '../formOrder.types';
import CheckboxesListSelector from 'components/atoms/CheckboxesListSelector';
import { useTranslatedMethodsList } from 'hooks/useTranslatedMethodsList.hook';
import ButtonSwitch from '../../../atoms/ButtonSwitch';
import InputText from '../../../atoms/Inputs/InputText';
import { Path, useFormContext, UseFormSetValue } from 'react-hook-form';
import CreateCustomerButtonIcon from '../components/CreateCustomerButtonIcon';
import CustomerInfoComponent from '../components/CustomerInfoComponent';
import { destinationAddressInputsProps } from '../components/DestinationInputs';
import { throttleCallback } from '../../../../utils/lodash.utils';
import {
  useCommunicationSelector,
  useDeliveriesSelector,
  useInvoicesSelector,
} from '../../../../redux/selectors.store';
import * as fns from 'date-fns';
import { toInputValueDate } from '../../../../utils';

export interface OrderInfoStepProps extends FormOrderStepBaseProps {
  isGroup?: boolean;
}

const useOrderInfoForm = () => useFormContext<ICreateOrderInfoFormState>();

type ConfirmsStateKay =
  | 'hasDelivery'
  | 'hasDeliveryInvoice'
  | 'hasReceiverInfo'
  | 'hasExecuteDate'
  | 'holdDeliveryPayment'
  | 'holdOrderPayment';

type FormFieldPaths = Path<ICreateOrderInfoFormState>;
const OrderInfoStep: React.FC<OrderInfoStepProps> = ({ onChangeValidStatus }) => {
  const modalS = useModalService();
  const {
    formState: { isValid, errors },
    register,
    setValue,
    unregister,
    watch,
    trigger,
  } = useOrderInfoForm();

  const formValues = watch();

  const deliveryMethodsList = useTranslatedMethodsList(useDeliveriesSelector().methods, { withFullLabel: true });
  const communicationMethodsList = useTranslatedMethodsList(useCommunicationSelector().methods, {
    withFullLabel: true,
  });
  const invoicingMethods = useTranslatedMethodsList(useInvoicesSelector().methods, { withFullLabel: true });

  const setTouchedField = (_path: FormFieldPaths) => {};

  const [confirms, setConfirms] = useState<Record<ConfirmsStateKay | string, boolean>>({
    hasDelivery: !!formValues.deliveryInfo,
    hasDeliveryInvoice: !!formValues.deliveryInfo?.invoiceInfo,
    hasReceiverInfo: !!formValues.receiver,
    hasExecuteDate: !!formValues.shipmentInfo?.executeAt,
  });

  const handleOnChangeValue: UseFormSetValue<ICreateOrderInfoFormState> = (path, value) => {
    try {
      setValue(path, value as never);
      throttleCallback(() =>
        trigger()
          .then(isValid => {
            isValid && onChangeValidStatus && onChangeValidStatus(isValid);
          })
          .catch(e => {
            console.error('handleOnChangeValue trigger error', e);
          })
      );
      setTouchedField(path);
    } catch (e) {
      console.error('handleOnChangeValue: ', e);
    }
  };
  const registerConfirmSelectHandler = (name: ConfirmsStateKay) => {
    return (value: boolean) => {
      setConfirms(p => ({ ...p, [name]: value }));

      if (value) {
        if (name === 'hasExecuteDate') {
          return setValue('shipmentInfo.executeAt', fns.format(fns.addDays(new Date(), 1), 'yyyy-MM-dd'));
        }
        if (name === 'hasDeliveryInvoice') {
          return setValue('deliveryInfo.invoiceInfo.expiredAt', toInputValueDate(fns.addDays(new Date(), 1)));
        }
      } else if (!value) {
        if (name === 'hasReceiverInfo') {
          return unregister('receiver');
        }
        if (name === 'hasDeliveryInvoice') {
          return unregister('deliveryInfo.invoiceInfo');
        }
        if (name === 'hasDelivery') {
          return unregister('deliveryInfo');
        }
      }
    };
  };
  const registerSwitch = (name: ConfirmsStateKay) => {
    return { name, onChange: registerConfirmSelectHandler(name), value: confirms[name] };
  };

  useEffect(() => {
    if (onChangeValidStatus) onChangeValidStatus(isValid);
  }, [isValid, onChangeValidStatus]);

  useEffect(() => {
    // const initData = {
    //   hasDelivery: !!formValues.deliveryInfo,
    //   hasDeliveryInvoice: !!formValues.deliveryInfo?.invoiceInfo,
    //   hasReceiverInfo: !!formValues.receiver,
    //   hasExecuteDate: !!formValues.shipmentInfo?.executeAt,
    // };
    console.debug('CURRENT CONFIRMS', confirms);
    // setConfirms(initData);
    // eslint-disable-next-line
  }, [confirms]);

  return (
    <Inputs flex={1} overflow={'auto'}>
      <FlexBox fillWidth gap={8} padding={'8px 2px'} style={{ maxWidth: 480, width: '100%', margin: '0 auto' }}>
        {formValues?.manager && (
          <InputLabel label={t('manager')}>
            <CustomerInfoComponent info={formValues?.manager?.user as never} isManager />
          </InputLabel>
        )}

        <ButtonIcon
          variant={'outlinedSmall'}
          onClick={() => {
            const m = modalS.open({
              ModalChildren: SelectManagerModal,
              modalChildrenProps: {
                onSelect: pr => {
                  handleOnChangeValue('manager', pr);
                  m?.onClose && m?.onClose();
                },
              },
            });
          }}
        >
          {t(!formValues?.manager ? 'Select manager' : 'Change manager')}
        </ButtonIcon>
      </FlexBox>

      <FlexBox padding={'0 2px'}>
        <StAccordionItem
          contentContainerStyle={{ padding: '8px 0', gap: 8 }}
          open
          renderHeader={<AccordionItemTitle title={t('Customer')} />}
        >
          {formValues?.customer && (
            <>
              <InputLabel label={t('Customer information')}>
                <CustomerInfoComponent info={formValues?.customer} />
              </InputLabel>

              <BorderedBox fillWidth overflow={'hidden'}>
                <InputLabel label={t('Communication methods')}>
                  <TagButtonsFilter
                    multiple
                    numColumns={2}
                    values={formValues?.communication?.customer}
                    resetButtonLabel={t('Not needed')}
                    options={communicationMethodsList}
                    resetButtonPosition={'start'}
                    onChange={value => {
                      handleOnChangeValue('communication.customer', value);
                    }}
                  />
                </InputLabel>
              </BorderedBox>
            </>
          )}

          <FlexBox fxDirection={'row'} gap={8} fillWidth alignItems={'center'}>
            <CreateCustomerButtonIcon
              onSuccess={d => {
                handleOnChangeValue('customer', d);
              }}
            />

            <ButtonIcon
              variant={'outlinedSmall'}
              flex={1}
              onClick={() => {
                const m = modalS.open({
                  ModalChildren: SelectCustomerModal,
                  modalChildrenProps: {
                    onSelect: data => {
                      handleOnChangeValue('customer', data);
                      m?.onClose && m?.onClose();
                    },
                  },
                });
              }}
            >
              {t(!formValues?.customer ? 'Select customer' : 'Change customer')}
            </ButtonIcon>
          </FlexBox>

          <BorderedBox fillWidth gap={4}>
            <InputLabel label={t('Receiver')}>
              <ButtonSwitch
                {...registerSwitch('hasReceiverInfo')}
                rejectLabel={t('The same')}
                acceptLabel={t('Another')}
              />
            </InputLabel>
          </BorderedBox>
        </StAccordionItem>

        {confirms?.hasReceiverInfo && (
          <StAccordionItem
            contentContainerStyle={{ padding: '8px 0', gap: 8 }}
            open
            renderHeader={<AccordionItemTitle title={t('Receiver')} />}
          >
            {formValues?.receiver && (
              <>
                <InputLabel label={t('Receiver information')}>
                  <CustomerInfoComponent info={formValues?.receiver} />{' '}
                </InputLabel>

                <BorderedBox fillWidth>
                  <InputLabel label={t('Communication methods')}>
                    <TagButtonsFilter
                      multiple
                      numColumns={2}
                      values={formValues?.communication?.receiver}
                      resetButtonLabel={t('Without')}
                      options={communicationMethodsList.map(mtd => ({ ...mtd, value: mtd._id }))}
                      resetButtonPosition={'start'}
                      onChange={value => {
                        handleOnChangeValue('communication.receiver', value);
                      }}
                    />
                  </InputLabel>
                </BorderedBox>
              </>
            )}

            <FlexBox fxDirection={'row'} gap={8} fillWidth alignItems={'center'}>
              <CreateCustomerButtonIcon
                isReceiver
                onSuccess={d => {
                  handleOnChangeValue('receiver', d);
                }}
              />

              <ButtonIcon
                variant={'outlinedSmall'}
                flex={1}
                onClick={() => {
                  const m = modalS.open({
                    ModalChildren: SelectCustomerModal,
                    modalChildrenProps: {
                      onSelect: i => {
                        handleOnChangeValue('receiver', i);
                        m?.onClose && m?.onClose();
                      },
                    },
                  });
                }}
              >
                {t(!formValues?.receiver ? 'Select receiver' : 'Change receiver')}
              </ButtonIcon>
            </FlexBox>
          </StAccordionItem>
        )}

        <StAccordionItem
          contentContainerStyle={{ padding: '8px 2px' }}
          open
          renderHeader={<AccordionItemTitle title={t('Invoicing')} />}
        >
          <InputLabel label={t('Payment method')} required>
            <CheckboxesListSelector
              options={invoicingMethods}
              currentOption={formValues?.invoiceInfo?.method}
              onChangeIndex={i => {
                handleOnChangeValue('invoiceInfo.method', invoicingMethods[i]);
              }}
            />
          </InputLabel>

          <InputLabel label={t('Expired at')} required>
            <InputText
              placeholder={t('Expired at')}
              type={'datetime-local'}
              required
              {...register('invoiceInfo.expiredAt', { required: true })}
            />
          </InputLabel>
        </StAccordionItem>

        <StAccordionItem
          contentContainerStyle={{ padding: '0 2px' }}
          open
          renderHeader={<AccordionItemTitle title={t('Shipment')} />}
        >
          <BorderedBox fillWidth gap={4}>
            <InputLabel label={t('Another execute date')}>
              <ButtonSwitch {...registerSwitch('hasExecuteDate')} />
            </InputLabel>

            {confirms?.hasExecuteDate && (
              <InputLabel label={t('Execute at')} required={confirms?.hasExecuteDate}>
                <InputText
                  placeholder={t('Execute at')}
                  type={'date'}
                  required={confirms?.hasExecuteDate}
                  {...register('shipmentInfo.executeAt', { required: confirms?.hasExecuteDate })}
                />
              </InputLabel>
            )}
          </BorderedBox>

          <BorderedBox fillWidth gap={4}>
            <InputLabel label={t('Delivery')}>
              <ButtonSwitch {...registerSwitch('hasDelivery')} />
            </InputLabel>
          </BorderedBox>
        </StAccordionItem>

        {confirms?.hasDelivery && (
          <StAccordionItem
            contentContainerStyle={{ padding: '0 2px' }}
            open
            renderHeader={<AccordionItemTitle title={t('Delivery')} />}
          >
            <BorderedBox fillWidth gap={8}>
              <InputLabel label={t('Delivery method')} required>
                <CheckboxesListSelector
                  options={deliveryMethodsList}
                  currentOption={formValues?.deliveryInfo?.method}
                  onChangeIndex={i => {
                    handleOnChangeValue('deliveryInfo.method', deliveryMethodsList[i]);
                  }}
                />
              </InputLabel>
            </BorderedBox>

            <BorderedBox fillWidth style={{ columnGap: 8, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              {destinationAddressInputsProps.map(({ name, label, required }) => {
                return (
                  <InputLabel
                    key={`dest-addr-${label}`}
                    label={label}
                    error={errors?.deliveryInfo?.destination ? errors?.deliveryInfo?.destination[name] : undefined}
                    required={required}
                  >
                    <InputText
                      required={required}
                      placeholder={label}
                      {...register(`deliveryInfo.destination.${name}`, { required })}
                    />
                  </InputLabel>
                );
              })}
            </BorderedBox>

            <BorderedBox fillWidth gap={8}>
              <InputLabel label={t('Has payment')} required>
                <ButtonSwitch {...registerSwitch('hasDeliveryInvoice')} />
              </InputLabel>
            </BorderedBox>

            <BorderedBox fillWidth gap={8}>
              {confirms?.hasDeliveryInvoice && (
                <>
                  <InputLabel label={t('Payment method')} required>
                    <CheckboxesListSelector
                      options={invoicingMethods}
                      currentOption={formValues?.deliveryInfo?.invoiceInfo?.method}
                      onChangeIndex={i => {
                        handleOnChangeValue('deliveryInfo.invoiceInfo.method', invoicingMethods[i]);
                      }}
                    />
                  </InputLabel>

                  <InputLabel label={t('Expired at')} required>
                    <InputText
                      placeholder={t('Expired at')}
                      type={'datetime-local'}
                      required
                      {...register('deliveryInfo.invoiceInfo.expiredAt', { required: true })}
                    />
                  </InputLabel>
                </>
              )}
            </BorderedBox>
          </StAccordionItem>
        )}
      </FlexBox>
    </Inputs>
  );
};
const AccordionItemTitle = ({ title }: { title: string }) => {
  return (
    <Text $padding={'0 6px'} $ellipsisMode={true} $size={16} $weight={500}>
      {title}
    </Text>
  );
};
const Inputs = styled(FlexBox)``;

const BorderedBox = styled(FlexBox)`
  padding-bottom: 8px;

  border-top: 1px solid ${p => p.theme.modalBorderColor};
  border-bottom: 1px solid ${p => p.theme.modalBorderColor};
`;
const StAccordionItem = styled(FormAccordionItem)`
  & .content {
    max-width: 480px;
    width: 100%;
    margin: auto;
  }
`;

export default OrderInfoStep;