import React, { memo, useState } from 'react';
import SvgIcon from 'components/atoms/SvgIcon/SvgIcon';
import { iconId } from 'data';

import styled from 'styled-components';

export interface CustomCheckBoxProps {
  size?: string;
  icon?: string;
  idx?: string | number;
  onChange?: CustomCheckboxEventHandler;
}

export type CustomCheckboxEventHandler = (
  customEvent: CustomCheckboxEvent
) => void;

export interface CustomCheckboxEvent {
  checked: boolean;
  event?: React.MouseEvent<HTMLButtonElement>;
}

const CheckBox: React.FC<
  CustomCheckBoxProps &
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>
> = ({
  onChange,
  disabled,
  id = '1',
  checked = false,
  size = '24px',
  icon,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  function onChangeHandler(event: React.MouseEvent<HTMLButtonElement>) {
    setIsChecked(prev => {
      return !prev;
    });
    onChange && onChange({ checked: !isChecked, event });
  }

  return (
    <Box
      id={id}
      checked={isChecked}
      disabled={disabled}
      onClick={onChangeHandler}
    >
      <SvgIcon
        size={size}
        iconId={icon || (isChecked ? iconId.checkBoxOn : iconId.checkBoxOff)}
        style={{ fill: 'inherit' }}
      />
    </Box>
  );
};
const Box = styled.button<{ checked?: boolean; disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-style: none;
  background-color: inherit;
  padding: 0;

  //width: 100%;
  //height: 100%;
  fill: ${({ theme }) => theme.accentColor.base};

  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  &:hover {
    fill: ${({ theme }) => theme.accentColor.hover};
  }

  &:active {
    fill: ${({ theme }) => theme.accentColor.pressed};
  }
`;

export default memo(CheckBox);
