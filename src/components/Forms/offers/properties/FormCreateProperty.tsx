import { ModalFormProps } from '../../../ModalForm';
import { AppSubmitHandler } from '../../../../hooks/useAppForm.hook';
import { OfferTypeEnum } from '../../../../types/offers/offers.types';
import FlexBox from '../../../atoms/FlexBox';
import InputLabel from '../../../atoms/Inputs/InputLabel';
import { t } from '../../../../lang';
import InputText from '../../../atoms/Inputs/InputText';
import { useAppForm } from '../../../../hooks';
import {
  IPropertyDto,
  PropertyBaseEntity,
  PropertyFormData,
  PropertyLevelIsType,
  PropertyLevelTypeEnum,
} from '../../../../types/offers/properties.types';
import React from 'react';
import LangButtonsGroup from '../../../atoms/LangButtonsGroup';
import { AccordionForm } from '../../FormArea/AccordionForm';
import { getIdRef, toReqData } from '../../../../utils';
import ModalBase from '../../../atoms/Modal';
import { MaybeNull } from '../../../../types/utils.types';
import { omit, pick } from 'lodash';
import { useAppServiceProvider } from '../../../../hooks/useAppServices.hook';
import ButtonSwitch from '../../../atoms/ButtonSwitch';
import { useLoaders } from '../../../../Providers/Loaders/useLoaders.hook';
import { useProductsSelector } from '../../../../redux/selectors.store';

export interface FormCreatePropertyProps
  extends Omit<ModalFormProps<OfferTypeEnum, any, PropertyBaseEntity>, 'onSubmit'> {
  create?: boolean;
  parent?: PropertyBaseEntity;
  edit?: boolean;
  updateId?: string;
}

export interface IPropertyFormData extends PropertyFormData {}

const FormCreateProperty: React.FC<FormCreatePropertyProps> = ({
  updateId,
  defaultState,
  parent,
  title,
  onClose,
  ...props
}) => {
  const offersSrv = useAppServiceProvider().offers;
  const dataMap = useProductsSelector().propertiesDataMap;
  const levelIs: PropertyLevelIsType = { [parent?.levelType ?? 'group']: true };
  const current = updateId ? dataMap?.[updateId] : undefined;

  const loaders = useLoaders<'create' | 'update' | 'current', { current?: Partial<PropertyBaseEntity> }>(
    {},
    { current }
  );
  // const submitOptions = useAfterSubmitOptions();
  const form = useAppForm<IPropertyFormData>({
    defaultValues: {
      isSelectable: parent?.selectableType === 'dynamic' ?? false,
      levelType: PropertyLevelTypeEnum.group,

      ...defaultState,
      parent: parent ? getIdRef(parent) : undefined,
    } as IPropertyFormData,
  });

  const {
    // formState: { errors },
    register,
    handleSubmit,
    setValue,
    formValues,
  } = form;

  const selectableHandler = (checked: boolean) => {
    setValue('isSelectable', checked);
  };

  const onValid = (data: IPropertyFormData) => {
    if (updateId) {
      offersSrv.updatePropertyById({
        data: { _id: updateId, data: toReqData(omit(data, ['cmsConfigs'])) },
        onSuccess: data => {
          loaders.setData('current', data);
        },
      });
    } else {
      offersSrv.createProperty({
        data: {
          _id: formValues._id,
          data: toReqData(omit(data, ['cmsConfigs'])),
        },
        onSuccess: data => {
          loaders.setData('current', data);
        },
      });
    }
  };

  return (
    <ModalBase fillHeight title={title || 'Create property'} onClose={onClose}>
      <FlexBox>
        <FlexBox padding={'4px 8px 8px'} flex={1} gap={12} fillWidth>
          <AccordionForm
            label={'Main info'}
            expandable={false}
            isOpen={true}
            hasOnSubmit
            onSubmit={handleSubmit(onValid)}
          >
            <InputLabel label={t('type')} disabled>
              <InputText placeholder={t('type')} {...register('type')} disabled />
            </InputLabel>

            <InputLabel label={t('Доступно для формування варіацій')} disabled>
              <InputText placeholder={t('type')} value={formValues.isSelectable ? 'Так' : 'Ні'} disabled />
            </InputLabel>

            {parent && (
              <InputLabel label={t(levelIs?.group ? 'group' : 'property')} disabled>
                <InputText
                  placeholder={t(levelIs?.group ? 'group' : 'property')}
                  defaultValue={parent?.label ?? ''}
                  disabled
                />
              </InputLabel>
            )}

            <InputLabel label={t('label')} required>
              <InputText placeholder={t('insertLabel')} {...register('label')} autoFocus required />
            </InputLabel>

            {levelIs?.group && formValues?._id && (
              <InputLabel label={'Доступно для формування варіацій'}>
                <ButtonSwitch name={'isSelectable'} value={formValues?.isSelectable} onChange={selectableHandler} />
              </InputLabel>
            )}
          </AccordionForm>

          {loaders.state.current && <PropertyCmsParamsForm defaultState={loaders.state.current} levelIs={levelIs} />}

          {/*{isProperty && (*/}
          {/*  <InputLabel label={t('Cms type')}>*/}
          {/*    <CustomSelect*/}
          {/*      {...registerSelect('cmsConfigs.type', {*/}
          {/*        options: propCmsTypeFilterOptions,*/}
          {/*        placeholder: t('Select cms type'),*/}
          {/*      })}*/}
          {/*    />*/}
          {/*  </InputLabel>*/}
          {/*)}*/}
        </FlexBox>
      </FlexBox>
    </ModalBase>
  );
};
export const PropertyCmsParamsForm = ({
  levelIs,
  onSubmit,
  defaultState,
}: {
  levelIs?: PropertyLevelIsType;
  defaultState?: MaybeNull<Partial<PropertyBaseEntity>>;
  onSubmit?: AppSubmitHandler<Pick<IPropertyDto, 'cmsConfigs'>, { levelIs?: PropertyLevelIsType }>;
}) => {
  const offersSrv = useAppServiceProvider().offers;
  const form = useAppForm<IPropertyFormData>({
    defaultValues: { ...defaultState } as IPropertyFormData,
  });
  const {
    formState: { errors },
    register,
    handleSubmit,
    // setValue,
    formValues,
  } = form;

  const onValid = (data: IPropertyFormData) => {
    if (formValues._id) {
      offersSrv.updatePropertyById({ data: { _id: formValues._id, data: toReqData(pick(data, ['cmsConfigs'])) } });
    }

    // onSubmit && onSubmit(toReqData(pick(data, ['cmsConfigs'])), { levelIs });
  };
  return (
    <AccordionForm label={'Cms params'} expandable={true} isOpen={false} onSubmit={handleSubmit(onValid)}>
      <InputLabel label={t('Cms key')} error={errors?.cmsConfigs?.key}>
        <InputText placeholder={'Key'} {...register('cmsConfigs.key')} />
      </InputLabel>

      <InputLabel label={t('Language key')}>
        <LangButtonsGroup disabled />
      </InputLabel>

      <InputLabel disabled label={t('Label by lang key')} error={errors?.cmsConfigs?.labels?.ua}>
        <InputText placeholder={'Label'} {...register('cmsConfigs.labels.ua')} />
      </InputLabel>

      {levelIs?.group && (
        <InputLabel label={t('Description')}>
          <InputText placeholder={t('description')} {...register('cmsConfigs.description')} />
        </InputLabel>
      )}

      {levelIs?.group && formValues?.cmsConfigs?.key === 'color' && (
        <InputLabel disabled label={t('Colors')}>
          <InputText placeholder={t('Colors')} type={'color'} {...register('cmsConfigs.colors')} />
        </InputLabel>
      )}
    </AccordionForm>
  );
};

export default FormCreateProperty;
