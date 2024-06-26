import ModalForm, { ModalFormProps } from '../ModalForm';
import TableList, { ITableListProps } from '../TableList/TableList';
import { useEffect, useMemo, useState } from 'react';
import { PriceEntity, PriceListEntity } from '../../types/price-management/price-management.types';
import { UseAppFormSubmitOptions } from '../../hooks/useAppForm.hook';
import { usePriceListOverviewActionsCreator } from '../../hooks/usePriceListOverviewActionsCreator.hook';
import { useAppServiceProvider } from '../../hooks/useAppServices.hook';
import { usePriceManagementSelector } from '../../redux/selectors.store';
import { FormCreatePriceProps } from '../Forms/pricing/FormCreatePrice/FormCreatePrice';
import { pricesColumns } from '../../data/priceManagement.data';

export interface PriceListOverviewProps extends Omit<ModalFormProps, 'onSubmit' | 'afterSubmit'> {
  createFormProps?: FormCreatePriceProps;
  priceList?: PriceListEntity;
  getTableSetting: (data?: PriceEntity[]) => ITableListProps<PriceEntity>;
  listId?: string;
  onSubmit?: (
    data: PriceEntity | PriceEntity[],
    options: UseAppFormSubmitOptions & {
      onSuccess: (newData: PriceListEntity) => void;
      onLoading: (l: boolean) => void;
    }
  ) => void;
}

const PriceListOverview: React.FC<PriceListOverviewProps> = ({
  getTableSetting,
  createFormProps,
  listId,
  onSubmit,
  ...props
}) => {
  const { lists } = usePriceManagementSelector();
  const actionsCreator = usePriceListOverviewActionsCreator(listId);
  const { priceManagement } = useAppServiceProvider();
  const [tableData, setTableData] = useState<PriceEntity[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const listInfo = useMemo(() => lists.find(l => l._id === listId), [listId, lists]);
  const tableSettings = useMemo(
    (): ITableListProps<PriceEntity> => getTableSetting(tableData),
    [tableData, getTableSetting]
  );

  useEffect(() => {
    if (listId) {
      priceManagement
        .getAllPrices({
          data: { params: { list: { _id: listId } }, refreshCurrent: true },
          onSuccess: setTableData,
          onLoading: setIsLoading,
        })
        .then();
    }
  }, [listId, priceManagement]);

  // TODO onSubmit={handleSubmit(onValidSubmit)}

  return (
    <ModalForm {...props} fillHeight title={isLoading ? 'Loading...' : `Price list: ${listInfo?.label}`}>
      <TableList
        {...tableSettings}
        actionsCreator={actionsCreator}
        hasSearch={false}
        tableData={tableData}
        tableTitles={pricesColumns}
      />
    </ModalForm>
  );
};
export default PriceListOverview;
