import APP_CONFIGS, { Endpoints } from '../redux/APP_CONFIGS';
import {
  PermissionEntity,
  IPermissionForReq,
  IPermissionReqData,
  IPermissionsResData,
  PermissionRecipientEnum,
  PermissionStatus,
} from '../types/permissions.types';
import { AppResponse, CompanyQueryType } from '../redux/app-redux.types';
import { UserEntity } from '../types/auth.types';
import { ClientApi } from './client.api';

export default class PermissionsApi {
  private static api = ClientApi.clientRef;
  private static endpoints = APP_CONFIGS.endpoints.permissions;

  public static create(data: IPermissionForReq): Promise<AppResponse<PermissionEntity>> {
    return this.api.post(this.endpoints.create(), data);
  }

  public static inviteUser(data: IPermissionForReq): Promise<AppResponse<PermissionEntity>> {
    return this.api.post(this.endpoints.inviteUser(), data);
  }

  public static deleteById<RD = any>(id: string): Promise<AppResponse<{ _id?: string; result: boolean } | RD>> {
    return this.api.post(this.endpoints.deleteById(id));
  }

  public static getCurrent(): Promise<AppResponse<{ permission_token: string } & PermissionEntity>> {
    return this.api.get(this.endpoints.getCurrent());
  }

  public static updateById({ id, data }: IPermissionReqData): Promise<AppResponse<PermissionEntity>> {
    return this.api.post(this.endpoints.updateById(id), data);
  }

  public static logIn(id: string): Promise<AppResponse<PermissionEntity>> {
    return this.api.post(this.endpoints.logIn(id));
  }

  public static logOut(): Promise<AppResponse<{ _id: string; result: boolean; user: UserEntity }>> {
    return this.api.post(this.endpoints.logOut());
  }

  public static rejectById({
    id,
    data,
  }: IPermissionReqData<{
    status: [PermissionStatus.REJECTED];
  }>): Promise<AppResponse<PermissionEntity>> {
    return this.api.post(this.endpoints.updateById(id), data);
  }

  public static acceptById({
    id,
    data,
  }: IPermissionReqData<{
    status: [PermissionStatus.ACCEPTED];
  }>): Promise<AppResponse<PermissionEntity>> {
    return this.api.post(this.endpoints.updateById(id), data);
  }

  public static getAllByUserId(params?: {
    userId?: string;
    query?: { type?: CompanyQueryType; recipient?: PermissionRecipientEnum };
  }): Promise<IPermissionsResData> {
    return this.api.get(this.endpoints[Endpoints.getAllByUserId](params?.userId), { params: params?.query });
  }

  public static getAllByCompanyId(data?: {
    _id: string;
    params?: { recipient?: PermissionRecipientEnum };
  }): Promise<IPermissionsResData> {
    return this.api.get(this.endpoints[Endpoints.getAllByCompanyId](data?._id), { params: data?.params });
  }
}
