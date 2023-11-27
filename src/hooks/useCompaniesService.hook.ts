import { ICompanyReqData } from '../types/companies.types';
import { IPermission } from '../types/permissions.types';
import { useMemo } from 'react';
import { CompaniesApi, createApiCall } from '../api';
import { defaultApiCallPayload } from '../utils/fabrics';
import { ApiCaller } from '../api/createApiCall.api';

export interface CompaniesService {
  delete?: ApiCaller<string, Partial<IPermission>>;
  create?: ApiCaller<ICompanyReqData, IPermission>;
  update?: ApiCaller<Required<ICompanyReqData>, IPermission>;
}

const useCompaniesServiceHook = (): CompaniesService => {
  // const dispatch: AppDispatch = useAppDispatch();

  return useMemo((): CompaniesService => {
    const { create, updateById, deleteById } = CompaniesApi;
    return {
      create: async payload => createApiCall(defaultApiCallPayload(payload), create, CompaniesApi),
      update: async payload => createApiCall(defaultApiCallPayload(payload), updateById, CompaniesApi),
      delete: async payload => createApiCall(defaultApiCallPayload(payload), deleteById, CompaniesApi),
    };
  }, []);
};

export default useCompaniesServiceHook;