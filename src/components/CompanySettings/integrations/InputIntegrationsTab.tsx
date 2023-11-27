import { ReactElement, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { enumToFilterOptions } from '../../../utils/fabrics';
import { ExternalServiceTypeEnum, ExtServiceBase } from '../../../types/integrations.types';
import InvoicingIntegrationsTab from './nested_tabs/InvoicingIntegrationsTab';
import DeliveryIntegrationsTab from './nested_tabs/DeliveryIntegrationsTab';
import CommunicationIntegrationsTab from './nested_tabs/CommunicationIntegrationsTab';
import ModalFilter from '../../ModalForm/ModalFilter';
import FlexBox from '../../atoms/FlexBox';
import { useExtServicesQuery } from './useExtServicesQuery.hook';

export interface InputIntegrationsTabProps {}

export interface IntegrationTabProps {
  onClose?: () => void;
  compId: string;
  providers: ExtServiceBase[];
  currentService?: ExtServiceBase;
  infoVisible?: boolean;
}

const ExtServiceTabs = _.pick(ExternalServiceTypeEnum, ['invoicing', 'delivery', 'communication']);
const tabs = enumToFilterOptions(ExtServiceTabs);

const tabsMap: Record<
  ExternalServiceTypeEnum | string,
  <P = any>(props: IntegrationTabProps & P) => ReactElement<P> | null
> = {
  [ExtServiceTabs.invoicing]: InvoicingIntegrationsTab,
  [ExtServiceTabs.delivery]: DeliveryIntegrationsTab,
  [ExtServiceTabs.communication]: CommunicationIntegrationsTab,
};

const InputIntegrationsTab: React.FC<InputIntegrationsTabProps> = ({ ...props }) => {
  const [currentType, setCurrentType] = useState(tabs[0].value);
  const [providerType, setProviderType] = useState<string>();

  const { loadExtServices, extServProviders } = useExtServicesQuery();

  const providers = useMemo(() => {
    return extServProviders.filter(prov => prov?.originServices && prov?.originServices[currentType]);
  }, [currentType, extServProviders]);

  const currentServiceData = useMemo(() => {
    return providers?.find(pr => pr.value === providerType);
  }, [providerType, providers]);

  const TabComponent = useMemo(() => tabsMap[currentType], [currentType]);

  useEffect(() => {
    loadExtServices();
    // if (extServProviders.length === 0) {
    // }
    // service.getAll({
    //   data: { type: 'input' },
    //   onSuccess: data => {
    //     setIntegrationsList(data);
    //   },
    // });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!providerType && providers) {
      providers[0] && setProviderType(providers[0]?.value);
    }
  }, [providerType, providers]);

  return (
    <>
      <ModalFilter filterOptions={tabs} onOptSelect={info => setCurrentType(info?.value)} />

      <ModalFilter filterOptions={providers} onFilterValueSelect={info => setProviderType(info.value)} />

      <Container flex={1} fillWidth overflow={'hidden'}>
        <TabComponent compId={currentType} providers={providers} currentService={currentServiceData} infoVisible />
      </Container>
    </>
  );
};

const Container = styled(FlexBox)`
  max-width: 100%;
  width: 480px;

  height: 98vh;
  max-height: 100%;

  background-color: ${p => p.theme.modalBackgroundColor};
`;

export default InputIntegrationsTab;