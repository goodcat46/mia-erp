import { RenderOverviewCellComponent } from '../../components/overview-types';
import { AreaStyledComp } from '../../components/CellStyles';
import { OverviewCellHeader } from '../../components/OverviewCellHeader';
import FormCreateVariation from '../../../Overlays/CreateVariationOverlay';
import FlexBox from '../../../atoms/FlexBox';
import React from 'react';

export const OfferOverviewVariationsTemplateCell: RenderOverviewCellComponent = ({ cell, overlayHandler, data }) => {
  return (
    <AreaStyledComp.Cell padding={'4px'}>
      <OverviewCellHeader
        title={cell.title}
        openOverlayButtonTitle={'Перегляд'}
        onOpenOverlayPress={() => {
          overlayHandler({ RenderComponent: FormCreateVariation, props: { create: true } });
        }}
      />

      <FlexBox
        fillWidth
        fxDirection={'row'}
        gap={8}
        height={'24px'}
        justifyContent={'flex-end'}
        alignItems={'flex-end'}
        overflow={'hidden'}
      >
        <AreaStyledComp.CellText
          $disabled={!data?.template?.label}
          $weight={500}
        >{`${data?.template?.label}`}</AreaStyledComp.CellText>
      </FlexBox>
    </AreaStyledComp.Cell>
  );
};
