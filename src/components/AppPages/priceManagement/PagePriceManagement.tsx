import TableList from 'components/TableList/TableList';
import { takeFullGridArea } from '../pagesStyles';
import styled from 'styled-components';
import { useEffect, useMemo, useState } from 'react';
import { ITableListProps } from '../../TableList/tableTypes.types';
import AppGridPage from '../AppGridPage';
import { usePriceManagementSelector } from '../../../redux/selectors.store';
import { ApiQuerySortParams } from '../../../api';
import { FilterReturnDataType } from '../../Filter/AppFilter';
import usePriceManagementServiceHook from '../../../hooks/usePriceManagementService.hook';
import usePriceManagementActionsCreatorHook from '../../../hooks/usePriceManagementActionsCreator.hook';
import { PriceListEntity } from '../../../types/price-management/price-management.types';
import { useNavigate } from 'react-router-dom';
import { BaseAppPageProps } from '../index';
import { priceListColumns } from '../../../data/priceManagement.data';

interface Props extends BaseAppPageProps {}
const PagePriceManagement: React.FC<BaseAppPageProps> = (props: Props) => {
  const service = usePriceManagementServiceHook();
  const state = usePriceManagementSelector();
  const navigate = useNavigate();
  const { getAll } = service;
  const actionsCreator = usePriceManagementActionsCreatorHook();
  const [isLoading, setIsLoading] = useState(false);
  const [sortParams, setSortParams] = useState<ApiQuerySortParams>();
  const [filterParams, setFilterParams] = useState<FilterReturnDataType>();

  const tableConfig = useMemo(
    (): ITableListProps<PriceListEntity> => ({
      tableData: state.lists,
      tableTitles: priceListColumns,
      hasFilter: false,
      hasSearch: true,
      showFooter: false,
      checkBoxes: true,
      actionsCreator,
      onRowDoubleClick: ev => {
        ev?.rowId && navigate(`${ev?.rowId}`);
      },
      onFilterSubmit: filterParams => {
        setFilterParams(filterParams);
        getAll({ data: { refresh: true, query: { filterParams, sortParams } }, onLoading: setIsLoading }).then();
      },
      onTableSortChange: (param, sortOrder) => {
        setSortParams({ sortPath: param.dataPath, sortOrder });
        getAll({
          data: { refresh: true, query: { sortParams: { sortPath: param.dataPath, sortOrder }, filterParams } },
          onLoading: setIsLoading,
        }).then();
      },
    }),
    [actionsCreator, filterParams, getAll, navigate, sortParams, state.lists]
  );

  useEffect(() => {
    if (sortParams || filterParams) {
      return;
    }

    if (!sortParams && !filterParams) {
      if (state.lists.length === 0) {
        getAll({
          data: { refresh: true },
          onLoading: setIsLoading,
          onSuccess(d) {
            console.log('PagePriceManagement onSuccess getAll');
          },
        });
      }
    }
  }, [filterParams, getAll, sortParams, state.lists.length]);

  return (
    <AppGridPage path={props.path}>
      <Page>
        <TableList {...tableConfig} isLoading={isLoading} />
      </Page>
    </AppGridPage>
  );
};

const Page = styled.div`
  ${takeFullGridArea}
`;

export default PagePriceManagement;
