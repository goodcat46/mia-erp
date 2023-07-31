import { DirectoriesFormProps, ITagDirItem } from '../Directories/dir.types';
import { ContractorsTypesEnum } from 'redux/contractors/contractors.types';
import ModalForm from '../ModalForm';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import InputLabel from '../atoms/Inputs/InputLabel';
import t from '../../lang';
import InputText from '../atoms/Inputs/InputText';
import React from 'react';
import { useAppForm } from '../../hooks';
import FormAfterSubmitOptions from './components/FormAfterSubmitOptions';
import { AppSubmitHandler } from '../../hooks/useAppForm.hook';
import { ApiDirType } from '../../redux/APP_CONFIGS';
import { tagsFilterOptions } from '../../data/directories.data';

export interface FormCreateTagProps
  extends DirectoriesFormProps<ContractorsTypesEnum, ITagDirItem, ITagDirItem, ApiDirType.TAGS> {}

const validation = yup.object().shape({
  type: yup.string().required(),
  label: yup.string().max(100).required(),
});

const FormCreateTag: React.FC<FormCreateTagProps> = ({ onSubmit, type, parent, data, ...props }) => {
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
    setValue,
    clearAfterSave,
    closeAfterSave,
    toggleAfterSubmitOption,
  } = useAppForm<ITagDirItem>({
    defaultValues: {
      ...data,
      type,
    },
    resolver: yupResolver(validation),
    reValidateMode: 'onSubmit',
  });

  function formEventWrapper(evHandler?: AppSubmitHandler<ITagDirItem>) {
    if (evHandler) {
      return handleSubmit(data => evHandler(data, { clearAfterSave, closeAfterSave }));
    }
  }

  return (
    <ModalForm
      {...props}
      style={{ maxWidth: 480 }}
      filterOptions={tagsFilterOptions}
      onOptSelect={(_o, v) => {
        setValue('type', v);
      }}
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
      <Inputs>
        <InputLabel label={t('label')} direction={'vertical'} error={errors.label} required>
          <InputText placeholder={t('insertLabel')} {...register('label')} required autoFocus />
        </InputLabel>
      </Inputs>
    </ModalForm>
  );
};
const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 16px;

  background-color: inherit;
`;
export default FormCreateTag;