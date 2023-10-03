import { DirectoriesFormProps, ITagDirItem } from '../Directories/dir.types';
import ModalForm from '../ModalForm';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputLabel from '../atoms/Inputs/InputLabel';
import t from '../../lang';
import InputText from '../atoms/Inputs/InputText';
import React, { useCallback, useEffect } from 'react';
import { useAppForm } from '../../hooks';
import FormAfterSubmitOptions from './components/FormAfterSubmitOptions';
import { AppSubmitHandler } from '../../hooks/useAppForm.hook';
import { ApiDirType } from '../../redux/APP_CONFIGS';
import { tagsFilterOptions } from '../../data/directories.data';
import { FilterOption } from '../ModalForm/ModalFilter';
import { ContractorsTypesEnum } from '../../redux/directories/contractors.types';
import { FormInputs } from './components/atoms';
import TagButtonsFilter from 'components/atoms/TagButtonsFilter';

export interface FormCreateTagProps extends DirectoriesFormProps<ApiDirType.TAGS, ITagDirItem, ITagDirItem> {}

const validation = yup.object().shape({
  type: yup.string().required(),
  label: yup.string().max(100).min(3).required(),
});

const FormCreateTag: React.FC<FormCreateTagProps> = ({
  filterOptions = tagsFilterOptions,
  onSubmit,
  type,
  parent,
  data,
  defaultState,
  ...props
}) => {
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
    setValue,
    clearAfterSave,
    closeAfterSave,
    formValues,
    toggleAfterSubmitOption,
  } = useAppForm<ITagDirItem>({
    defaultValues: {
      ...data,
      ...defaultState,
      type,
    },
    resolver: yupResolver(validation),
    reValidateMode: 'onChange',
  });

  const handleFilterSelect = useCallback(
    (option: FilterOption<ContractorsTypesEnum>) => {
      setValue('type', option?.value);
    },
    [setValue]
  );

  function formEventWrapper(evHandler?: AppSubmitHandler<ITagDirItem>) {
    if (evHandler) {
      return handleSubmit(data => evHandler(data, { clearAfterSave, closeAfterSave }));
    }
  }

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  return (
    <ModalForm
      {...props}
      title={t('Create tag')}
      onSubmit={formEventWrapper(onSubmit)}
      isValid={isValid}
      extraFooter={
        <FormAfterSubmitOptions
          clearAfterSave={clearAfterSave}
          closeAfterSave={closeAfterSave}
          toggleOption={toggleAfterSubmitOption}
        />
      }
    >
      <FormInputs>
        <TagButtonsFilter<ContractorsTypesEnum>
          options={filterOptions}
          name={'type'}
          onSelectValue={setValue}
          values={formValues.type ? [formValues.type] : undefined}
        />

        <InputLabel label={t('label')} direction={'vertical'} error={errors.label} required>
          <InputText placeholder={t('insertLabel')} {...register('label')} required autoFocus />
        </InputLabel>
      </FormInputs>
    </ModalForm>
  );
};

export default FormCreateTag;
