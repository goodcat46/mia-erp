import FlexBox from '../../atoms/FlexBox';
import { IntegrationTabProps } from '../CompanyIntegrationsModal';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import { useEffect, useMemo, useState } from 'react';
import { Text } from '../../atoms/Text';
import { t } from '../../../lang';
import { useModalService } from '../../ModalProvider/ModalProvider';
import FormCreateIntegration from '../../Forms/FormCreateIntegration';
import { ExtIntegrationBase } from '../../../redux/integrations/integrations.types';
import { useTranslatedShipmentMethods } from '../../../hooks/useTranslatedMethods.hook';
import { createApiCall } from '../../../api';
import ExtServicesApi from '../../../api/extServices.api';
import { getIdRef, transformQueriesForReq } from '../../../utils/dataTransform';
import styled from 'styled-components';
import ExtraFooterWithButtonButton from '../../Forms/components/ExtraFooterWithButtonButton';
import IntegrationOverview from '../components/IntegrationOverview';

export interface ShipmentsIntegrationsTabProps extends IntegrationTabProps {}

const ShipmentsIntegrationsTab: React.FC<ShipmentsIntegrationsTabProps> = ({
  providers,
  onClose,
  compId,
  currentService: currentServiceData,
  ...props
}) => {
  const [integrationsList, setIntegrationsList] = useState<ExtIntegrationBase[]>([]);
  const modalS = useModalService();
  const [isListVisible, setIsListVisible] = useState(false);
  const handleToggleListVisibility = () => setIsListVisible(p => !p);
  const shipmentMethods = useTranslatedShipmentMethods();

  const onOpenModalPress = () => {
    currentServiceData &&
      modalS.open({
        ModalChildren: FormCreateIntegration,
        modalChildrenProps: {
          onSuccess: d => setIntegrationsList(p => [...p, d?.data]),
          service: currentServiceData,
        },
        settings: { closeByBackdropPress: false, closeByEscapePress: false },
      });
  };

  useEffect(() => {
    currentServiceData &&
      createApiCall(
        {
          data: { type: 'input', ...transformQueriesForReq({ service: getIdRef(currentServiceData) }) },
          onSuccess: data => {
            setIntegrationsList(data);
          },
        },
        ExtServicesApi.getAllByQueries,
        ExtServicesApi
      );
  }, [currentServiceData]);

  const renderMethods = useMemo(() => {
    const methods = shipmentMethods.filter(m => {
      return m.service?._id === currentServiceData?._id;
    });

    return methods.length <= 0
      ? null
      : methods.map(m => {
          return (
            <FlexBox key={m._id} border={'1px solid lightgrey'} padding={'4px 6px'} borderRadius={'4px'}>
              <Text $size={10}>{m.label}</Text>
            </FlexBox>
          );
        });
  }, [currentServiceData?._id, shipmentMethods]);

  const renderIntegrations = useMemo(() => {
    return integrationsList.map(int => {
      return (
        <IntegrationOverview
          key={int?._id}
          info={int}
          isDefault={currentServiceData?.defIntegration?._id === int._id}
        />
      );
    });
  }, [currentServiceData?.defIntegration?._id, integrationsList]);

  return (
    <FlexBox fillWidth flex={1} overflow={'hidden'}>
      <FlexBox fillWidth flex={1} padding={'8px 4px 0'} overflow={'hidden'}>
        {renderMethods && (
          <List overflow={'auto'} isVisible={isListVisible} fillWidth>
            <Text $size={11} $weight={600} $margin={'4px 8px'}>
              {t('Delivery types')}
            </Text>

            <FlexBox fxDirection={'row'} padding={'4px 2px'} flexWrap={'wrap'} gap={4} fillWidth>
              {renderMethods}
            </FlexBox>

            {/*<Text $size={11} $weight={600} $margin={'4px 8px'}>*/}
            {/*  {t('Support')}*/}
            {/*</Text>*/}

            {/*<Text $size={16}>{t('+380 5632 55623')}</Text>*/}

            {/*<Text $size={11} $weight={600} $margin={'4px 8px'}>*/}
            {/*  {t('Url')}*/}
            {/*</Text>*/}

            {/*<Text $size={16}>{t('www.monobank.ua/contacts')}</Text>*/}
          </List>
        )}

        <ButtonIcon
          variant={'textExtraSmall'}
          icon={isListVisible ? 'SmallArrowUp' : 'SmallArrowDown'}
          onClick={handleToggleListVisibility}
        >
          {t(isListVisible ? 'Hide' : 'More')}
        </ButtonIcon>

        <FlexBox fillWidth gap={8} flex={1} padding={'8px 2px'} overflow={'auto'}>
          {renderIntegrations}
        </FlexBox>

        <ExtraFooterWithButtonButton onClick={onOpenModalPress} buttonText={t('Add new')} />
      </FlexBox>
    </FlexBox>
  );
};

const List = styled(FlexBox)<{ isVisible?: boolean }>`
  max-height: ${p => (p.isVisible ? '100%' : 0)};

  transition: all ${p => p.theme.globals.timingFnLong};
`;

export default ShipmentsIntegrationsTab;
