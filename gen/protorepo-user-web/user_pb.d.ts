import * as jspb from 'google-protobuf'



export class ServerStatus extends jspb.Message {
  getStatus(): UserStatus;
  setStatus(value: UserStatus): ServerStatus;

  getMsg(): string;
  setMsg(value: string): ServerStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ServerStatus): ServerStatus.AsObject;
  static serializeBinaryToWriter(message: ServerStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerStatus;
  static deserializeBinaryFromReader(message: ServerStatus, reader: jspb.BinaryReader): ServerStatus;
}

export namespace ServerStatus {
  export type AsObject = {
    status: UserStatus,
    msg: string,
  }
}

export class UserId extends jspb.Message {
  getUserName(): string;
  setUserName(value: string): UserId;

  getUserVe(): string;
  setUserVe(value: string): UserId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserId.AsObject;
  static toObject(includeInstance: boolean, msg: UserId): UserId.AsObject;
  static serializeBinaryToWriter(message: UserId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserId;
  static deserializeBinaryFromReader(message: UserId, reader: jspb.BinaryReader): UserId;
}

export namespace UserId {
  export type AsObject = {
    userName: string,
    userVe: string,
  }
}

export class TriggerAuthRequest extends jspb.Message {
  getUser(): UserId | undefined;
  setUser(value?: UserId): TriggerAuthRequest;
  hasUser(): boolean;
  clearUser(): TriggerAuthRequest;

  getPurpose(): TriggerAuthPurpose;
  setPurpose(value: TriggerAuthPurpose): TriggerAuthRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerAuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerAuthRequest): TriggerAuthRequest.AsObject;
  static serializeBinaryToWriter(message: TriggerAuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerAuthRequest;
  static deserializeBinaryFromReader(message: TriggerAuthRequest, reader: jspb.BinaryReader): TriggerAuthRequest;
}

export namespace TriggerAuthRequest {
  export type AsObject = {
    user?: UserId.AsObject,
    purpose: TriggerAuthPurpose,
  }
}

export class TriggerAuthResponse extends jspb.Message {
  getStatus(): ServerStatus | undefined;
  setStatus(value?: ServerStatus): TriggerAuthResponse;
  hasStatus(): boolean;
  clearStatus(): TriggerAuthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerAuthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerAuthResponse): TriggerAuthResponse.AsObject;
  static serializeBinaryToWriter(message: TriggerAuthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerAuthResponse;
  static deserializeBinaryFromReader(message: TriggerAuthResponse, reader: jspb.BinaryReader): TriggerAuthResponse;
}

export namespace TriggerAuthResponse {
  export type AsObject = {
    status?: ServerStatus.AsObject,
  }
}

export class RegisterRequest extends jspb.Message {
  getUser(): UserId | undefined;
  setUser(value?: UserId): RegisterRequest;
  hasUser(): boolean;
  clearUser(): RegisterRequest;

  getCodeForVe(): string;
  setCodeForVe(value: string): RegisterRequest;

  getNewPassword(): string;
  setNewPassword(value: string): RegisterRequest;

  getAttachSsoToken(): boolean;
  setAttachSsoToken(value: boolean): RegisterRequest;

  getSsoJumpUrl(): string;
  setSsoJumpUrl(value: string): RegisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    user?: UserId.AsObject,
    codeForVe: string,
    newPassword: string,
    attachSsoToken: boolean,
    ssoJumpUrl: string,
  }
}

export class LoginRequest extends jspb.Message {
  getUser(): UserId | undefined;
  setUser(value?: UserId): LoginRequest;
  hasUser(): boolean;
  clearUser(): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  getCodeForVe(): string;
  setCodeForVe(value: string): LoginRequest;

  getCodeForGa(): string;
  setCodeForGa(value: string): LoginRequest;

  getAttachSsoToken(): boolean;
  setAttachSsoToken(value: boolean): LoginRequest;

  getSsoJumpUrl(): string;
  setSsoJumpUrl(value: string): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    user?: UserId.AsObject,
    password: string,
    codeForVe: string,
    codeForGa: string,
    attachSsoToken: boolean,
    ssoJumpUrl: string,
  }
}

export class UserInfo extends jspb.Message {
  getId(): string;
  setId(value: string): UserInfo;

  getNickName(): string;
  setNickName(value: string): UserInfo;

  getAvatar(): string;
  setAvatar(value: string): UserInfo;

  getEnabledGa(): boolean;
  setEnabledGa(value: boolean): UserInfo;

  getFlagGa(): GoogleAuthGlobalFlag;
  setFlagGa(value: GoogleAuthGlobalFlag): UserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
  static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInfo;
  static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
  export type AsObject = {
    id: string,
    nickName: string,
    avatar: string,
    enabledGa: boolean,
    flagGa: GoogleAuthGlobalFlag,
  }
}

export class SignResponse extends jspb.Message {
  getStatus(): ServerStatus | undefined;
  setStatus(value?: ServerStatus): SignResponse;
  hasStatus(): boolean;
  clearStatus(): SignResponse;

  getToken(): string;
  setToken(value: string): SignResponse;

  getInfo(): UserInfo | undefined;
  setInfo(value?: UserInfo): SignResponse;
  hasInfo(): boolean;
  clearInfo(): SignResponse;

  getSsoToken(): string;
  setSsoToken(value: string): SignResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignResponse): SignResponse.AsObject;
  static serializeBinaryToWriter(message: SignResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignResponse;
  static deserializeBinaryFromReader(message: SignResponse, reader: jspb.BinaryReader): SignResponse;
}

export namespace SignResponse {
  export type AsObject = {
    status?: ServerStatus.AsObject,
    token: string,
    info?: UserInfo.AsObject,
    ssoToken: string,
  }
}

export class SSOLoginRequest extends jspb.Message {
  getSsoToken(): string;
  setSsoToken(value: string): SSOLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSOLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SSOLoginRequest): SSOLoginRequest.AsObject;
  static serializeBinaryToWriter(message: SSOLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSOLoginRequest;
  static deserializeBinaryFromReader(message: SSOLoginRequest, reader: jspb.BinaryReader): SSOLoginRequest;
}

export namespace SSOLoginRequest {
  export type AsObject = {
    ssoToken: string,
  }
}

export class LogoutRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): LogoutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutRequest): LogoutRequest.AsObject;
  static serializeBinaryToWriter(message: LogoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutRequest;
  static deserializeBinaryFromReader(message: LogoutRequest, reader: jspb.BinaryReader): LogoutRequest;
}

export namespace LogoutRequest {
  export type AsObject = {
    token: string,
  }
}

export class LogoutResponse extends jspb.Message {
  getStatus(): ServerStatus | undefined;
  setStatus(value?: ServerStatus): LogoutResponse;
  hasStatus(): boolean;
  clearStatus(): LogoutResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutResponse): LogoutResponse.AsObject;
  static serializeBinaryToWriter(message: LogoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutResponse;
  static deserializeBinaryFromReader(message: LogoutResponse, reader: jspb.BinaryReader): LogoutResponse;
}

export namespace LogoutResponse {
  export type AsObject = {
    status?: ServerStatus.AsObject,
  }
}

export class GoogleAuthGetSetupInfoRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): GoogleAuthGetSetupInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleAuthGetSetupInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleAuthGetSetupInfoRequest): GoogleAuthGetSetupInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GoogleAuthGetSetupInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleAuthGetSetupInfoRequest;
  static deserializeBinaryFromReader(message: GoogleAuthGetSetupInfoRequest, reader: jspb.BinaryReader): GoogleAuthGetSetupInfoRequest;
}

export namespace GoogleAuthGetSetupInfoRequest {
  export type AsObject = {
    token: string,
  }
}

export class GoogleAuthGetSetupInfoResponse extends jspb.Message {
  getStatus(): ServerStatus | undefined;
  setStatus(value?: ServerStatus): GoogleAuthGetSetupInfoResponse;
  hasStatus(): boolean;
  clearStatus(): GoogleAuthGetSetupInfoResponse;

  getSecretKey(): string;
  setSecretKey(value: string): GoogleAuthGetSetupInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleAuthGetSetupInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleAuthGetSetupInfoResponse): GoogleAuthGetSetupInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GoogleAuthGetSetupInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleAuthGetSetupInfoResponse;
  static deserializeBinaryFromReader(message: GoogleAuthGetSetupInfoResponse, reader: jspb.BinaryReader): GoogleAuthGetSetupInfoResponse;
}

export namespace GoogleAuthGetSetupInfoResponse {
  export type AsObject = {
    status?: ServerStatus.AsObject,
    secretKey: string,
  }
}

export class GoogleAuthVerifyRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): GoogleAuthVerifyRequest;

  getCode(): string;
  setCode(value: string): GoogleAuthVerifyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleAuthVerifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleAuthVerifyRequest): GoogleAuthVerifyRequest.AsObject;
  static serializeBinaryToWriter(message: GoogleAuthVerifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleAuthVerifyRequest;
  static deserializeBinaryFromReader(message: GoogleAuthVerifyRequest, reader: jspb.BinaryReader): GoogleAuthVerifyRequest;
}

export namespace GoogleAuthVerifyRequest {
  export type AsObject = {
    token: string,
    code: string,
  }
}

export class GoogleAuthVerifyResponse extends jspb.Message {
  getStatus(): ServerStatus | undefined;
  setStatus(value?: ServerStatus): GoogleAuthVerifyResponse;
  hasStatus(): boolean;
  clearStatus(): GoogleAuthVerifyResponse;

  getToken(): string;
  setToken(value: string): GoogleAuthVerifyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleAuthVerifyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleAuthVerifyResponse): GoogleAuthVerifyResponse.AsObject;
  static serializeBinaryToWriter(message: GoogleAuthVerifyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleAuthVerifyResponse;
  static deserializeBinaryFromReader(message: GoogleAuthVerifyResponse, reader: jspb.BinaryReader): GoogleAuthVerifyResponse;
}

export namespace GoogleAuthVerifyResponse {
  export type AsObject = {
    status?: ServerStatus.AsObject,
    token: string,
  }
}

export class GoogleAuthSetRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): GoogleAuthSetRequest;

  getCode(): string;
  setCode(value: string): GoogleAuthSetRequest;

  getTokenGaOld(): string;
  setTokenGaOld(value: string): GoogleAuthSetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleAuthSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleAuthSetRequest): GoogleAuthSetRequest.AsObject;
  static serializeBinaryToWriter(message: GoogleAuthSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleAuthSetRequest;
  static deserializeBinaryFromReader(message: GoogleAuthSetRequest, reader: jspb.BinaryReader): GoogleAuthSetRequest;
}

export namespace GoogleAuthSetRequest {
  export type AsObject = {
    token: string,
    code: string,
    tokenGaOld: string,
  }
}

export class GoogleAuthSetResponse extends jspb.Message {
  getStatus(): ServerStatus | undefined;
  setStatus(value?: ServerStatus): GoogleAuthSetResponse;
  hasStatus(): boolean;
  clearStatus(): GoogleAuthSetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleAuthSetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleAuthSetResponse): GoogleAuthSetResponse.AsObject;
  static serializeBinaryToWriter(message: GoogleAuthSetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleAuthSetResponse;
  static deserializeBinaryFromReader(message: GoogleAuthSetResponse, reader: jspb.BinaryReader): GoogleAuthSetResponse;
}

export namespace GoogleAuthSetResponse {
  export type AsObject = {
    status?: ServerStatus.AsObject,
  }
}

export class ProfileRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): ProfileRequest;

  getAttachSsoToken(): boolean;
  setAttachSsoToken(value: boolean): ProfileRequest;

  getSsoJumpUrl(): string;
  setSsoJumpUrl(value: string): ProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileRequest): ProfileRequest.AsObject;
  static serializeBinaryToWriter(message: ProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileRequest;
  static deserializeBinaryFromReader(message: ProfileRequest, reader: jspb.BinaryReader): ProfileRequest;
}

export namespace ProfileRequest {
  export type AsObject = {
    token: string,
    attachSsoToken: boolean,
    ssoJumpUrl: string,
  }
}

export class ProfileResponse extends jspb.Message {
  getStatus(): ServerStatus | undefined;
  setStatus(value?: ServerStatus): ProfileResponse;
  hasStatus(): boolean;
  clearStatus(): ProfileResponse;

  getInfo(): UserInfo | undefined;
  setInfo(value?: UserInfo): ProfileResponse;
  hasInfo(): boolean;
  clearInfo(): ProfileResponse;

  getSsoToken(): string;
  setSsoToken(value: string): ProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileResponse): ProfileResponse.AsObject;
  static serializeBinaryToWriter(message: ProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileResponse;
  static deserializeBinaryFromReader(message: ProfileResponse, reader: jspb.BinaryReader): ProfileResponse;
}

export namespace ProfileResponse {
  export type AsObject = {
    status?: ServerStatus.AsObject,
    info?: UserInfo.AsObject,
    ssoToken: string,
  }
}

export class ResetPasswordRequest extends jspb.Message {
  getUser(): UserId | undefined;
  setUser(value?: UserId): ResetPasswordRequest;
  hasUser(): boolean;
  clearUser(): ResetPasswordRequest;

  getNewPassword(): string;
  setNewPassword(value: string): ResetPasswordRequest;

  getCodeForVe(): string;
  setCodeForVe(value: string): ResetPasswordRequest;

  getCodeForGa(): string;
  setCodeForGa(value: string): ResetPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordRequest): ResetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordRequest;
  static deserializeBinaryFromReader(message: ResetPasswordRequest, reader: jspb.BinaryReader): ResetPasswordRequest;
}

export namespace ResetPasswordRequest {
  export type AsObject = {
    user?: UserId.AsObject,
    newPassword: string,
    codeForVe: string,
    codeForGa: string,
  }
}

export class ChangePasswordRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): ChangePasswordRequest;

  getCsrfToken(): string;
  setCsrfToken(value: string): ChangePasswordRequest;

  getPassword(): string;
  setPassword(value: string): ChangePasswordRequest;

  getNewPassword(): string;
  setNewPassword(value: string): ChangePasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordRequest): ChangePasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ChangePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordRequest;
  static deserializeBinaryFromReader(message: ChangePasswordRequest, reader: jspb.BinaryReader): ChangePasswordRequest;
}

export namespace ChangePasswordRequest {
  export type AsObject = {
    token: string,
    csrfToken: string,
    password: string,
    newPassword: string,
  }
}

export class GetCsrfTokenRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): GetCsrfTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCsrfTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCsrfTokenRequest): GetCsrfTokenRequest.AsObject;
  static serializeBinaryToWriter(message: GetCsrfTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCsrfTokenRequest;
  static deserializeBinaryFromReader(message: GetCsrfTokenRequest, reader: jspb.BinaryReader): GetCsrfTokenRequest;
}

export namespace GetCsrfTokenRequest {
  export type AsObject = {
    token: string,
  }
}

export class GetCsrfTokenResponse extends jspb.Message {
  getStatus(): ServerStatus | undefined;
  setStatus(value?: ServerStatus): GetCsrfTokenResponse;
  hasStatus(): boolean;
  clearStatus(): GetCsrfTokenResponse;

  getCsrfToken(): string;
  setCsrfToken(value: string): GetCsrfTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCsrfTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCsrfTokenResponse): GetCsrfTokenResponse.AsObject;
  static serializeBinaryToWriter(message: GetCsrfTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCsrfTokenResponse;
  static deserializeBinaryFromReader(message: GetCsrfTokenResponse, reader: jspb.BinaryReader): GetCsrfTokenResponse;
}

export namespace GetCsrfTokenResponse {
  export type AsObject = {
    status?: ServerStatus.AsObject,
    csrfToken: string,
  }
}

export class GetDetailInfoRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): GetDetailInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDetailInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDetailInfoRequest): GetDetailInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetDetailInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDetailInfoRequest;
  static deserializeBinaryFromReader(message: GetDetailInfoRequest, reader: jspb.BinaryReader): GetDetailInfoRequest;
}

export namespace GetDetailInfoRequest {
  export type AsObject = {
    token: string,
  }
}

export class UserDetailInfo extends jspb.Message {
  getBaseInfo(): UserInfo | undefined;
  setBaseInfo(value?: UserInfo): UserDetailInfo;
  hasBaseInfo(): boolean;
  clearBaseInfo(): UserDetailInfo;

  getCreateAt(): number;
  setCreateAt(value: number): UserDetailInfo;

  getUser(): UserId | undefined;
  setUser(value?: UserId): UserDetailInfo;
  hasUser(): boolean;
  clearUser(): UserDetailInfo;

  getPhone(): string;
  setPhone(value: string): UserDetailInfo;

  getEmail(): string;
  setEmail(value: string): UserDetailInfo;

  getWechat(): string;
  setWechat(value: string): UserDetailInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDetailInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserDetailInfo): UserDetailInfo.AsObject;
  static serializeBinaryToWriter(message: UserDetailInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDetailInfo;
  static deserializeBinaryFromReader(message: UserDetailInfo, reader: jspb.BinaryReader): UserDetailInfo;
}

export namespace UserDetailInfo {
  export type AsObject = {
    baseInfo?: UserInfo.AsObject,
    createAt: number,
    user?: UserId.AsObject,
    phone: string,
    email: string,
    wechat: string,
  }
}

export class GetDetailInfoResponse extends jspb.Message {
  getStatus(): ServerStatus | undefined;
  setStatus(value?: ServerStatus): GetDetailInfoResponse;
  hasStatus(): boolean;
  clearStatus(): GetDetailInfoResponse;

  getInfo(): UserDetailInfo | undefined;
  setInfo(value?: UserDetailInfo): GetDetailInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetDetailInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDetailInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDetailInfoResponse): GetDetailInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetDetailInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDetailInfoResponse;
  static deserializeBinaryFromReader(message: GetDetailInfoResponse, reader: jspb.BinaryReader): GetDetailInfoResponse;
}

export namespace GetDetailInfoResponse {
  export type AsObject = {
    status?: ServerStatus.AsObject,
    info?: UserDetailInfo.AsObject,
  }
}

export class UpdateDetailInfoRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): UpdateDetailInfoRequest;

  getCsrfToken(): string;
  setCsrfToken(value: string): UpdateDetailInfoRequest;

  getAvatar(): string;
  setAvatar(value: string): UpdateDetailInfoRequest;

  getNickName(): string;
  setNickName(value: string): UpdateDetailInfoRequest;

  getPhone(): string;
  setPhone(value: string): UpdateDetailInfoRequest;

  getEmail(): string;
  setEmail(value: string): UpdateDetailInfoRequest;

  getWeChat(): string;
  setWeChat(value: string): UpdateDetailInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDetailInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDetailInfoRequest): UpdateDetailInfoRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDetailInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDetailInfoRequest;
  static deserializeBinaryFromReader(message: UpdateDetailInfoRequest, reader: jspb.BinaryReader): UpdateDetailInfoRequest;
}

export namespace UpdateDetailInfoRequest {
  export type AsObject = {
    token: string,
    csrfToken: string,
    avatar: string,
    nickName: string,
    phone: string,
    email: string,
    weChat: string,
  }
}

export class UpdateDetailInfoResponse extends jspb.Message {
  getStatus(): ServerStatus | undefined;
  setStatus(value?: ServerStatus): UpdateDetailInfoResponse;
  hasStatus(): boolean;
  clearStatus(): UpdateDetailInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDetailInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDetailInfoResponse): UpdateDetailInfoResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateDetailInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDetailInfoResponse;
  static deserializeBinaryFromReader(message: UpdateDetailInfoResponse, reader: jspb.BinaryReader): UpdateDetailInfoResponse;
}

export namespace UpdateDetailInfoResponse {
  export type AsObject = {
    status?: ServerStatus.AsObject,
  }
}

export class GetUserListRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): GetUserListRequest;

  getCsrfToken(): string;
  setCsrfToken(value: string): GetUserListRequest;

  getOffset(): number;
  setOffset(value: number): GetUserListRequest;

  getLimit(): number;
  setLimit(value: number): GetUserListRequest;

  getKeyword(): string;
  setKeyword(value: string): GetUserListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserListRequest): GetUserListRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserListRequest;
  static deserializeBinaryFromReader(message: GetUserListRequest, reader: jspb.BinaryReader): GetUserListRequest;
}

export namespace GetUserListRequest {
  export type AsObject = {
    token: string,
    csrfToken: string,
    offset: number,
    limit: number,
    keyword: string,
  }
}

export class UserListItem extends jspb.Message {
  getUser(): UserId | undefined;
  setUser(value?: UserId): UserListItem;
  hasUser(): boolean;
  clearUser(): UserListItem;

  getInfo(): UserInfo | undefined;
  setInfo(value?: UserInfo): UserListItem;
  hasInfo(): boolean;
  clearInfo(): UserListItem;

  getCreateAt(): string;
  setCreateAt(value: string): UserListItem;

  getLastLoginAt(): string;
  setLastLoginAt(value: string): UserListItem;

  getPrivileges(): number;
  setPrivileges(value: number): UserListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListItem.AsObject;
  static toObject(includeInstance: boolean, msg: UserListItem): UserListItem.AsObject;
  static serializeBinaryToWriter(message: UserListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListItem;
  static deserializeBinaryFromReader(message: UserListItem, reader: jspb.BinaryReader): UserListItem;
}

export namespace UserListItem {
  export type AsObject = {
    user?: UserId.AsObject,
    info?: UserInfo.AsObject,
    createAt: string,
    lastLoginAt: string,
    privileges: number,
  }
}

export class GetUserListResponse extends jspb.Message {
  getStatus(): ServerStatus | undefined;
  setStatus(value?: ServerStatus): GetUserListResponse;
  hasStatus(): boolean;
  clearStatus(): GetUserListResponse;

  getCnt(): number;
  setCnt(value: number): GetUserListResponse;

  getUsersList(): Array<UserListItem>;
  setUsersList(value: Array<UserListItem>): GetUserListResponse;
  clearUsersList(): GetUserListResponse;
  addUsers(value?: UserListItem, index?: number): UserListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserListResponse): GetUserListResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserListResponse;
  static deserializeBinaryFromReader(message: GetUserListResponse, reader: jspb.BinaryReader): GetUserListResponse;
}

export namespace GetUserListResponse {
  export type AsObject = {
    status?: ServerStatus.AsObject,
    cnt: number,
    usersList: Array<UserListItem.AsObject>,
  }
}

export class ManagerUserResetPasswordRequest extends jspb.Message {
  getNewPassword(): string;
  setNewPassword(value: string): ManagerUserResetPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManagerUserResetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ManagerUserResetPasswordRequest): ManagerUserResetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ManagerUserResetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManagerUserResetPasswordRequest;
  static deserializeBinaryFromReader(message: ManagerUserResetPasswordRequest, reader: jspb.BinaryReader): ManagerUserResetPasswordRequest;
}

export namespace ManagerUserResetPasswordRequest {
  export type AsObject = {
    newPassword: string,
  }
}

export class ManagerUserRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): ManagerUserRequest;

  getCsrfToken(): string;
  setCsrfToken(value: string): ManagerUserRequest;

  getUid(): number;
  setUid(value: number): ManagerUserRequest;

  getType(): ManagerUserType;
  setType(value: ManagerUserType): ManagerUserRequest;

  getResetPassword(): ManagerUserResetPasswordRequest | undefined;
  setResetPassword(value?: ManagerUserResetPasswordRequest): ManagerUserRequest;
  hasResetPassword(): boolean;
  clearResetPassword(): ManagerUserRequest;

  getPayloadCase(): ManagerUserRequest.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManagerUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ManagerUserRequest): ManagerUserRequest.AsObject;
  static serializeBinaryToWriter(message: ManagerUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManagerUserRequest;
  static deserializeBinaryFromReader(message: ManagerUserRequest, reader: jspb.BinaryReader): ManagerUserRequest;
}

export namespace ManagerUserRequest {
  export type AsObject = {
    token: string,
    csrfToken: string,
    uid: number,
    type: ManagerUserType,
    resetPassword?: ManagerUserResetPasswordRequest.AsObject,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    RESET_PASSWORD = 50,
  }
}

export class ManagerUserResponse extends jspb.Message {
  getStatus(): ServerStatus | undefined;
  setStatus(value?: ServerStatus): ManagerUserResponse;
  hasStatus(): boolean;
  clearStatus(): ManagerUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManagerUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ManagerUserResponse): ManagerUserResponse.AsObject;
  static serializeBinaryToWriter(message: ManagerUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManagerUserResponse;
  static deserializeBinaryFromReader(message: ManagerUserResponse, reader: jspb.BinaryReader): ManagerUserResponse;
}

export namespace ManagerUserResponse {
  export type AsObject = {
    status?: ServerStatus.AsObject,
  }
}

export class AdminProfileRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): AdminProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminProfileRequest): AdminProfileRequest.AsObject;
  static serializeBinaryToWriter(message: AdminProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminProfileRequest;
  static deserializeBinaryFromReader(message: AdminProfileRequest, reader: jspb.BinaryReader): AdminProfileRequest;
}

export namespace AdminProfileRequest {
  export type AsObject = {
    token: string,
  }
}

export class AdminUserInfo extends jspb.Message {
  getId(): number;
  setId(value: number): AdminUserInfo;

  getNickName(): string;
  setNickName(value: string): AdminUserInfo;

  getAvatar(): string;
  setAvatar(value: string): AdminUserInfo;

  getEnabledGa(): boolean;
  setEnabledGa(value: boolean): AdminUserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminUserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AdminUserInfo): AdminUserInfo.AsObject;
  static serializeBinaryToWriter(message: AdminUserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminUserInfo;
  static deserializeBinaryFromReader(message: AdminUserInfo, reader: jspb.BinaryReader): AdminUserInfo;
}

export namespace AdminUserInfo {
  export type AsObject = {
    id: number,
    nickName: string,
    avatar: string,
    enabledGa: boolean,
  }
}

export class AdminProfileResponse extends jspb.Message {
  getStatus(): ServerStatus | undefined;
  setStatus(value?: ServerStatus): AdminProfileResponse;
  hasStatus(): boolean;
  clearStatus(): AdminProfileResponse;

  getInfo(): AdminUserInfo | undefined;
  setInfo(value?: AdminUserInfo): AdminProfileResponse;
  hasInfo(): boolean;
  clearInfo(): AdminProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminProfileResponse): AdminProfileResponse.AsObject;
  static serializeBinaryToWriter(message: AdminProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminProfileResponse;
  static deserializeBinaryFromReader(message: AdminProfileResponse, reader: jspb.BinaryReader): AdminProfileResponse;
}

export namespace AdminProfileResponse {
  export type AsObject = {
    status?: ServerStatus.AsObject,
    info?: AdminUserInfo.AsObject,
  }
}

export enum UserStatus { 
  USER_STATUS_UNSPECIFIED = 0,
  USER_STATUS_SUCCESS = 1,
  USER_STATUS_FAILED = 2,
  USER_STATUS_NOT_IMPLEMENT = 3,
  USER_STATUS_BAD_INPUT = 4,
  USER_STATUS_NEED_2FA_SETUP = 10,
  USER_STATUS_NEED_2FA_AUTH = 11,
  USER_STATUS_NEED_VE_AUTH = 12,
  USER_STATUS_NEED_PASSWORD_AUTH = 13,
  USER_STATUS_NEED_VE_OR_PASSWORD_AUTH = 14,
  USER_STATUS_DONT_SUPPORT = 20,
  USER_STATUS_VERIFY_TOO_QUICK = 21,
  USER_STATUS_INTERNAL_ERROR = 22,
  USER_STATUS_WRONG_CODE = 23,
  USER_STATUS_WRONG_PASSWORD = 24,
  USER_STATUS_USER_ALREADY_EXISTS = 25,
  USER_STATUS_USER_NOT_EXISTS = 26,
  USER_STATUS_UNAUTHENTICATED = 27,
}
export enum VerificationEquipment { 
  VERIFICATION_EQUIPMENT_UNSPECIFIED = 0,
  VERIFICATION_EQUIPMENT_PHONE = 1,
  VERIFICATION_EQUIPMENT_MAIL = 2,
  VERIFICATION_EQUIPMENT_WX_MINA = 3,
  VERIFICATION_EQUIPMENT_CUSTOM = 100,
}
export enum GoogleAuthGlobalFlag { 
  GOOGLE_AUTH_GLOBAL_FLAG_UNSPECIFIED = 0,
  GOOGLE_AUTH_GLOBAL_FLAG_ENABLED = 1,
  GOOGLE_AUTH_GLOBAL_FLAG_ENABLED_FORCE = 2,
}
export enum TriggerAuthPurpose { 
  TRIGGER_AUTH_PURPOSE_UNSPECIFIED = 0,
  TRIGGER_AUTH_PURPOSE_REGISTER = 1,
  TRIGGER_AUTH_PURPOSE_LOGIN = 2,
  TRIGGER_AUTH_PURPOSE_RESET_PASSWORD = 3,
}
export enum ManagerUserType { 
  MANAGER_USER_TYPE_UNSPECIFIED = 0,
  MANAGER_USER_TYPE_DELETE = 1,
  MANAGER_USER_TYPE_SET_ADMIN_PRIVILEGE = 2,
  MANAGER_USER_TYPE_UNSET_ADMIN_PRIVILEGE = 3,
  MANAGER_USER_TYPE_SWITCH_ADMIN_PRIVILEGE = 4,
  MANAGER_USER_TYPE_RESET_PASSWORD = 5,
}
