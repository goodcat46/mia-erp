import ModalForm, { ModalFormProps } from '../../ModalForm';
import FlexBox from '../../atoms/FlexBox';
import { OfferEntity } from '../../../types/offers/offers.types';
import ProductCardSimpleOverview from './ProductCardSimpleOverview';
import TableList from '../../TableList/TableList';
import styled from 'styled-components';
import { pricesColumnsForProductReview } from '../../../data/priceManagement.data';
import { useAppServiceProvider } from '../../../hooks/useAppServices.hook';
import { useEffect, useState } from 'react';
import { PriceEntity } from '../../../types/price-management/price-management.types';
import { getIdRef } from '../../../utils/data-transform';

export interface ProductOverviewProps extends Omit<ModalFormProps, 'onSelect' | 'onSubmit'> {
  product?: OfferEntity;
}

const OfferOverview: React.FC<ProductOverviewProps> = ({ product, ...props }) => {
  const { priceManagement } = useAppServiceProvider();
  const [priceList, setPriceList] = useState<PriceEntity[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (product?._id) {
      priceManagement
        .getAllPrices({
          data: { params: { offer: getIdRef(product) } },
          onSuccess: setPriceList,
          onLoading: setLoading,
        })
        .then();
    }
  }, [priceManagement, product]);

  return (
    <StModal {...props}>
      <FlexBox gap={0}>
        <FlexBox padding={'16px 8px'} fillWidth overflow={'hidden'}>
          {product && <ProductCardSimpleOverview product={product} disabled />}
        </FlexBox>

        <PricesBox>
          <TableList
            tableTitles={pricesColumnsForProductReview}
            tableData={priceList}
            hasSearch={false}
            hasFilter={false}
            isLoading={loading}
          />
        </PricesBox>
      </FlexBox>
    </StModal>
  );
};
const StModal = styled(ModalForm)`
  max-width: 700px;
`;

const PricesBox = styled(FlexBox)`
  max-width: 100%;
  min-height: 150px;

  max-height: 250px;

  padding: 0 8px;
`;
export default OfferOverview;
