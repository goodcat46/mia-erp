import FlexBox from './FlexBox';
import ButtonIcon from './ButtonIcon/ButtonIcon';
import { useEffect, useMemo, useState } from 'react';
import _ from 'lodash';
import { useTheme } from 'styled-components';
import { Text } from './Text';
import { IconIdType } from '../../img/sprite';
import { LangPack } from '../../lang';

export interface ChangerOption<T = any, D = any> {
  _id?: string;
  value: T;
  data?: D;
  color?: string;
  icon?: IconIdType;
  backgroundColor?: string;
  label?: string;
  lang?: LangPack;
}

export interface StatusChangerProps<V = any> {
  options?: ChangerOption<V>[];
  onChange?: (event: ChangerEvent<V>) => void;
  currentIndex?: number;
  currentOption?: ChangerOption<V>;
  colorIndicator?: boolean;
  disabled?: boolean;
}

export interface ChangerEvent<V = any> {
  index: number;
  value: ChangerOption<V>['value'];
  option?: ChangerOption<V>;
}

const Changer = <V = any,>({
  options = [],
  colorIndicator = true,
  onChange,
  currentOption,
  currentIndex,
  disabled,
}: StatusChangerProps<V>): JSX.Element => {
  const [current, setCurrent] = useState<number>(0);
  const currentStatus = useMemo(() => (options ? options[current] : null), [current, options]);
  const theme = useTheme();
  const handleChange = (increment: number) => () => {
    if (current >= 0 && current + 1 <= options?.length) {
      setCurrent(prev => {
        const newIndex = prev + increment;
        onChange && onChange({ index: newIndex, value: options[newIndex]?.value, option: options[newIndex] });

        return newIndex;
      });
    }
  };
  useEffect(() => {
    if (!_.isUndefined(currentIndex) && current >= 0 && current + 1 <= options.length) {
      setCurrent(currentIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  useEffect(() => {
    console.log(currentOption, options);

    if (!_.isUndefined(currentOption)) {
      const index = options.findIndex(o => o?.value === currentOption?.value || o?._id === currentOption?._id);
      index >= 0 && setCurrent(index);
    }
  }, [currentOption, options]);
  return (
    <FlexBox fxDirection={'row'} fillWidth height={'28px'} alignItems={'center'} gap={8}>
      <ButtonIcon
        variant={'onlyIconNoEffects'}
        icon={'SmallArrowLeft'}
        iconSize={'28px'}
        disabled={disabled || current === 0}
        onClick={handleChange(-1)}
      />

      <FlexBox
        flex={1}
        alignItems={'stretch'}
        justifyContent={'center'}
        overflow={'hidden'}
        style={{
          borderRadius: 2,
          backgroundColor: theme.fieldBackgroundColor,
          color: theme.fontColorSidebar,
          height: '100%',
        }}
      >
        <FlexBox fillWidth fxDirection={'row'} justifyContent={'center'} alignItems={'center'} flex={1}>
          <Text $size={15} $weight={600} className={'inner'} $ellipsisMode={true}>
            {currentStatus?.label}
          </Text>
        </FlexBox>

        {colorIndicator && currentStatus?.color && (
          <FlexBox fillWidth height={'4px'} style={{ backgroundColor: currentStatus?.backgroundColor }} />
        )}
      </FlexBox>

      <ButtonIcon
        variant={'onlyIconNoEffects'}
        icon={'SmallArrowRight'}
        iconSize={'28px'}
        disabled={disabled || current + 1 === options.length}
        onClick={handleChange(1)}
      />
    </FlexBox>
  );
};
export default Changer;
