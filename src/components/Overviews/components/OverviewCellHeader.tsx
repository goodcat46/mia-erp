import { t } from '../../../lang';
import FlexBox from '../../atoms/FlexBox';
import React from 'react';
import { CellStyledComp } from './CellStyles';

export const OverviewCellHeader = ({
  title = 'Title',
  openOverlayButtonTitle = t('Change'),
  onOpenOverlayPress,
  editButtonText = t('Change'),
  onEditPress,
  acceptButtonText = t('Ok'),
  onAcceptPress,
  editMode = false,
  canAccept = false,
  cancelButtonText = t('Cancel'),
  onCancelPress,
}: {
  title?: string;
  openOverlayButtonTitle?: string;
  onOpenOverlayPress?: () => void;
  editButtonText?: string;
  onEditPress?: () => void;
  acceptButtonText?: string;
  onAcceptPress?: () => void;
  cancelButtonText?: string;
  onCancelPress?: () => void;
  editMode?: boolean;
  editable?: boolean;
  canAccept?: boolean;
}) => {
  return (
    <FlexBox fxDirection={'row'} justifyContent={'space-between'} height={'max-content'} alignItems={'center'}>
      <CellStyledComp.CellText $isTitle $size={13} style={{ marginRight: 'auto' }}>
        {title}
      </CellStyledComp.CellText>

      {onOpenOverlayPress && (
        <CellStyledComp.HeaderButton type={'button'} onClick={onOpenOverlayPress}>
          {openOverlayButtonTitle}
        </CellStyledComp.HeaderButton>
      )}

      {!editMode && onEditPress && (
        <CellStyledComp.HeaderButton type={'button'} onClick={onEditPress}>
          {editButtonText}
        </CellStyledComp.HeaderButton>
      )}

      {editMode && onCancelPress && (
        <CellStyledComp.HeaderButton type={'button'} onClick={onCancelPress}>
          {cancelButtonText}
        </CellStyledComp.HeaderButton>
      )}

      {editMode && onAcceptPress && (
        <CellStyledComp.HeaderButton type={'button'} disabled={!canAccept} onClick={onAcceptPress}>
          {acceptButtonText}
        </CellStyledComp.HeaderButton>
      )}
    </FlexBox>
  );
};