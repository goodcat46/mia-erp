import { usePageCurrentProduct } from '../PageCurrentProductProvider';
import ProductOverviewXL from '../../Overviews/ProductOverviewXL';
import { useModalProvider } from '../../ModalProvider/ModalProvider';
import { useAppServiceProvider } from '../../../hooks/useAppServices.hook';
import styled from 'styled-components';
import FlexBox from '../../atoms/FlexBox';
import React, { useMemo } from 'react';
import { Modals } from '../../ModalProvider/Modals';
import { ToastService } from '../../../services';
import { createProductFormData } from '../../../utils/dataTransform';

export interface PageProductOverviewRightSideProps {
  toggleRightSideVisibility?: () => void;
}
const PageProductOverviewRightSide: React.FC<PageProductOverviewRightSideProps> = ({ toggleRightSideVisibility }) => {
  const page = usePageCurrentProduct();
  const modalS = useModalProvider();
  const { products: productsS } = useAppServiceProvider();

  const renderOverlayStack = useMemo(() => {
    const stack = page.getOverlayStack();

    return stack.map(({ RenderComponent, props, id }, index) => {
      return (
        <OverlayBox key={`overlay-${id}`} style={{ zIndex: 20 + index }} fillHeight fillWidth>
          <RenderComponent
            key={`overlay-${id}`}
            {...props}
            onClose={() => {
              page.handleRemoveStackItem(id);
            }}
            overlayId={id}
            index={index}
          />
        </OverlayBox>
      );
    });
  }, [page]);

  return (
    <LeftSide>
      <ProductOverviewXL
        product={page?.currentProduct}
        onEdit={
          page.currentProduct
            ? () => {
                if (!page.currentProduct) {
                  return;
                }
                const formData = createProductFormData(page?.currentProduct);

                const m = modalS.handleOpenModal({
                  Modal: Modals.FormCreateProduct,
                  props: {
                    edit: true,
                    _id: page?.currentProduct?._id,
                    defaultState: formData,
                    onSubmit: (d, o) => {
                      productsS
                        .updateById({
                          data: { ...d, refreshCurrent: true },
                          onSuccess: () => {
                            o?.closeAfterSave && m?.onClose();
                            ToastService.success(`Updated product`);
                          },
                        })
                        .finally();
                    },
                  },
                });
              }
            : undefined
        }
        onDelete={() => {}}
        onArchive={() => {}}
        onHide={() => {}}
        onOpenRightSide={toggleRightSideVisibility}
      />

      <Backdrop fillWidth fillHeight isActive={renderOverlayStack.length > 0} overflow={'hidden'}>
        {renderOverlayStack}
      </Backdrop>
    </LeftSide>
  );
};

const LeftSide = styled(FlexBox)`
  position: relative;

  overflow: hidden;

  border-right: 1px solid ${p => p.theme.modalBorderColor};
`;
const Backdrop = styled(FlexBox)`
  position: absolute;

  top: 0;
  left: ${p => (p.isActive ? 0 : '100%')};
  z-index: 20;

  background-color: ${p => p.theme.backdropColor};

  transition: all ${p => p.theme.globals.timingFunctionMain};
`;

const OverlayBox = styled(FlexBox)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;

  animation: 'OverlayFromRight';
`;

export default PageProductOverviewRightSide;
