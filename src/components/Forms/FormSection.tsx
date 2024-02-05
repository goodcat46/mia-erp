import FlexBox, { FlexForm } from '../atoms/FlexBox';
import { Text } from '../atoms/Text';
import { AppSubmitHandler } from '../../hooks/useAppForm.hook';
import FormSectionFooter from './FormSectionFooter';

export interface FormSectionProps {
  title?: string;
  children?: React.ReactNode;
  onSubmit?: AppSubmitHandler;
  renderFooter?: React.ReactNode;
  renderTitle?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
}

export const FormSection = ({
  children,
  renderFooter,
  renderTitle,
  disabled,
  title = 'Section',
  onSubmit,
  isLoading,
}: FormSectionProps) => {
  return (
    <FlexForm fillWidth onSubmit={onSubmit}>
      <FlexBox padding={'8px 6px'} overflow={'hidden'}>
        {renderTitle || (
          <Text $size={14} $weight={600}>
            {title}
          </Text>
        )}
      </FlexBox>
      {children}

      {renderFooter || <FormSectionFooter onSubmitPassed={!!onSubmit} isLoading={isLoading} disabled={disabled} />}
    </FlexForm>
  );
};
