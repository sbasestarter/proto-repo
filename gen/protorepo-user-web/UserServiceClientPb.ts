/**
 * @fileoverview gRPC-Web generated client stub for user.api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as user_pb from './user_pb';


export class UserServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoTriggerAuth = new grpcWeb.MethodDescriptor(
    '/user.api.UserService/TriggerAuth',
    grpcWeb.MethodType.UNARY,
    user_pb.TriggerAuthRequest,
    user_pb.TriggerAuthResponse,
    (request: user_pb.TriggerAuthRequest) => {
      return request.serializeBinary();
    },
    user_pb.TriggerAuthResponse.deserializeBinary
  );

  triggerAuth(
    request: user_pb.TriggerAuthRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.TriggerAuthResponse>;

  triggerAuth(
    request: user_pb.TriggerAuthRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.TriggerAuthResponse) => void): grpcWeb.ClientReadableStream<user_pb.TriggerAuthResponse>;

  triggerAuth(
    request: user_pb.TriggerAuthRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.TriggerAuthResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.api.UserService/TriggerAuth',
        request,
        metadata || {},
        this.methodInfoTriggerAuth,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.api.UserService/TriggerAuth',
    request,
    metadata || {},
    this.methodInfoTriggerAuth);
  }

  methodInfoRegister = new grpcWeb.MethodDescriptor(
    '/user.api.UserService/Register',
    grpcWeb.MethodType.UNARY,
    user_pb.RegisterRequest,
    user_pb.SignResponse,
    (request: user_pb.RegisterRequest) => {
      return request.serializeBinary();
    },
    user_pb.SignResponse.deserializeBinary
  );

  register(
    request: user_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.SignResponse>;

  register(
    request: user_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.SignResponse) => void): grpcWeb.ClientReadableStream<user_pb.SignResponse>;

  register(
    request: user_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.SignResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.api.UserService/Register',
        request,
        metadata || {},
        this.methodInfoRegister,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.api.UserService/Register',
    request,
    metadata || {},
    this.methodInfoRegister);
  }

  methodInfoLogin = new grpcWeb.MethodDescriptor(
    '/user.api.UserService/Login',
    grpcWeb.MethodType.UNARY,
    user_pb.LoginRequest,
    user_pb.SignResponse,
    (request: user_pb.LoginRequest) => {
      return request.serializeBinary();
    },
    user_pb.SignResponse.deserializeBinary
  );

  login(
    request: user_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.SignResponse>;

  login(
    request: user_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.SignResponse) => void): grpcWeb.ClientReadableStream<user_pb.SignResponse>;

  login(
    request: user_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.SignResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.api.UserService/Login',
        request,
        metadata || {},
        this.methodInfoLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.api.UserService/Login',
    request,
    metadata || {},
    this.methodInfoLogin);
  }

  methodInfoSSOLogin = new grpcWeb.MethodDescriptor(
    '/user.api.UserService/SSOLogin',
    grpcWeb.MethodType.UNARY,
    user_pb.SSOLoginRequest,
    user_pb.SignResponse,
    (request: user_pb.SSOLoginRequest) => {
      return request.serializeBinary();
    },
    user_pb.SignResponse.deserializeBinary
  );

  sSOLogin(
    request: user_pb.SSOLoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.SignResponse>;

  sSOLogin(
    request: user_pb.SSOLoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.SignResponse) => void): grpcWeb.ClientReadableStream<user_pb.SignResponse>;

  sSOLogin(
    request: user_pb.SSOLoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.SignResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.api.UserService/SSOLogin',
        request,
        metadata || {},
        this.methodInfoSSOLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.api.UserService/SSOLogin',
    request,
    metadata || {},
    this.methodInfoSSOLogin);
  }

  methodInfoLogout = new grpcWeb.MethodDescriptor(
    '/user.api.UserService/Logout',
    grpcWeb.MethodType.UNARY,
    user_pb.LogoutRequest,
    user_pb.LogoutResponse,
    (request: user_pb.LogoutRequest) => {
      return request.serializeBinary();
    },
    user_pb.LogoutResponse.deserializeBinary
  );

  logout(
    request: user_pb.LogoutRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.LogoutResponse>;

  logout(
    request: user_pb.LogoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.LogoutResponse) => void): grpcWeb.ClientReadableStream<user_pb.LogoutResponse>;

  logout(
    request: user_pb.LogoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.LogoutResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.api.UserService/Logout',
        request,
        metadata || {},
        this.methodInfoLogout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.api.UserService/Logout',
    request,
    metadata || {},
    this.methodInfoLogout);
  }

  methodInfoGoogleAuthGetSetupInfo = new grpcWeb.MethodDescriptor(
    '/user.api.UserService/GoogleAuthGetSetupInfo',
    grpcWeb.MethodType.UNARY,
    user_pb.GoogleAuthGetSetupInfoRequest,
    user_pb.GoogleAuthGetSetupInfoResponse,
    (request: user_pb.GoogleAuthGetSetupInfoRequest) => {
      return request.serializeBinary();
    },
    user_pb.GoogleAuthGetSetupInfoResponse.deserializeBinary
  );

  googleAuthGetSetupInfo(
    request: user_pb.GoogleAuthGetSetupInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.GoogleAuthGetSetupInfoResponse>;

  googleAuthGetSetupInfo(
    request: user_pb.GoogleAuthGetSetupInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.GoogleAuthGetSetupInfoResponse) => void): grpcWeb.ClientReadableStream<user_pb.GoogleAuthGetSetupInfoResponse>;

  googleAuthGetSetupInfo(
    request: user_pb.GoogleAuthGetSetupInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.GoogleAuthGetSetupInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.api.UserService/GoogleAuthGetSetupInfo',
        request,
        metadata || {},
        this.methodInfoGoogleAuthGetSetupInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.api.UserService/GoogleAuthGetSetupInfo',
    request,
    metadata || {},
    this.methodInfoGoogleAuthGetSetupInfo);
  }

  methodInfoGoogleAuthVerify = new grpcWeb.MethodDescriptor(
    '/user.api.UserService/GoogleAuthVerify',
    grpcWeb.MethodType.UNARY,
    user_pb.GoogleAuthVerifyRequest,
    user_pb.GoogleAuthVerifyResponse,
    (request: user_pb.GoogleAuthVerifyRequest) => {
      return request.serializeBinary();
    },
    user_pb.GoogleAuthVerifyResponse.deserializeBinary
  );

  googleAuthVerify(
    request: user_pb.GoogleAuthVerifyRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.GoogleAuthVerifyResponse>;

  googleAuthVerify(
    request: user_pb.GoogleAuthVerifyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.GoogleAuthVerifyResponse) => void): grpcWeb.ClientReadableStream<user_pb.GoogleAuthVerifyResponse>;

  googleAuthVerify(
    request: user_pb.GoogleAuthVerifyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.GoogleAuthVerifyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.api.UserService/GoogleAuthVerify',
        request,
        metadata || {},
        this.methodInfoGoogleAuthVerify,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.api.UserService/GoogleAuthVerify',
    request,
    metadata || {},
    this.methodInfoGoogleAuthVerify);
  }

  methodInfoGoogleAuthSet = new grpcWeb.MethodDescriptor(
    '/user.api.UserService/GoogleAuthSet',
    grpcWeb.MethodType.UNARY,
    user_pb.GoogleAuthSetRequest,
    user_pb.GoogleAuthSetResponse,
    (request: user_pb.GoogleAuthSetRequest) => {
      return request.serializeBinary();
    },
    user_pb.GoogleAuthSetResponse.deserializeBinary
  );

  googleAuthSet(
    request: user_pb.GoogleAuthSetRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.GoogleAuthSetResponse>;

  googleAuthSet(
    request: user_pb.GoogleAuthSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.GoogleAuthSetResponse) => void): grpcWeb.ClientReadableStream<user_pb.GoogleAuthSetResponse>;

  googleAuthSet(
    request: user_pb.GoogleAuthSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.GoogleAuthSetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.api.UserService/GoogleAuthSet',
        request,
        metadata || {},
        this.methodInfoGoogleAuthSet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.api.UserService/GoogleAuthSet',
    request,
    metadata || {},
    this.methodInfoGoogleAuthSet);
  }

  methodInfoProfile = new grpcWeb.MethodDescriptor(
    '/user.api.UserService/Profile',
    grpcWeb.MethodType.UNARY,
    user_pb.ProfileRequest,
    user_pb.ProfileResponse,
    (request: user_pb.ProfileRequest) => {
      return request.serializeBinary();
    },
    user_pb.ProfileResponse.deserializeBinary
  );

  profile(
    request: user_pb.ProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.ProfileResponse>;

  profile(
    request: user_pb.ProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.ProfileResponse) => void): grpcWeb.ClientReadableStream<user_pb.ProfileResponse>;

  profile(
    request: user_pb.ProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.ProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.api.UserService/Profile',
        request,
        metadata || {},
        this.methodInfoProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.api.UserService/Profile',
    request,
    metadata || {},
    this.methodInfoProfile);
  }

  methodInfoResetPassword = new grpcWeb.MethodDescriptor(
    '/user.api.UserService/ResetPassword',
    grpcWeb.MethodType.UNARY,
    user_pb.ResetPasswordRequest,
    user_pb.SignResponse,
    (request: user_pb.ResetPasswordRequest) => {
      return request.serializeBinary();
    },
    user_pb.SignResponse.deserializeBinary
  );

  resetPassword(
    request: user_pb.ResetPasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.SignResponse>;

  resetPassword(
    request: user_pb.ResetPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.SignResponse) => void): grpcWeb.ClientReadableStream<user_pb.SignResponse>;

  resetPassword(
    request: user_pb.ResetPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.SignResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.api.UserService/ResetPassword',
        request,
        metadata || {},
        this.methodInfoResetPassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.api.UserService/ResetPassword',
    request,
    metadata || {},
    this.methodInfoResetPassword);
  }

  methodInfoChangePassword = new grpcWeb.MethodDescriptor(
    '/user.api.UserService/ChangePassword',
    grpcWeb.MethodType.UNARY,
    user_pb.ChangePasswordRequest,
    user_pb.SignResponse,
    (request: user_pb.ChangePasswordRequest) => {
      return request.serializeBinary();
    },
    user_pb.SignResponse.deserializeBinary
  );

  changePassword(
    request: user_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.SignResponse>;

  changePassword(
    request: user_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.SignResponse) => void): grpcWeb.ClientReadableStream<user_pb.SignResponse>;

  changePassword(
    request: user_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.SignResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.api.UserService/ChangePassword',
        request,
        metadata || {},
        this.methodInfoChangePassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.api.UserService/ChangePassword',
    request,
    metadata || {},
    this.methodInfoChangePassword);
  }

  methodInfoGetCsrfToken = new grpcWeb.MethodDescriptor(
    '/user.api.UserService/GetCsrfToken',
    grpcWeb.MethodType.UNARY,
    user_pb.GetCsrfTokenRequest,
    user_pb.GetCsrfTokenResponse,
    (request: user_pb.GetCsrfTokenRequest) => {
      return request.serializeBinary();
    },
    user_pb.GetCsrfTokenResponse.deserializeBinary
  );

  getCsrfToken(
    request: user_pb.GetCsrfTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.GetCsrfTokenResponse>;

  getCsrfToken(
    request: user_pb.GetCsrfTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.GetCsrfTokenResponse) => void): grpcWeb.ClientReadableStream<user_pb.GetCsrfTokenResponse>;

  getCsrfToken(
    request: user_pb.GetCsrfTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.GetCsrfTokenResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.api.UserService/GetCsrfToken',
        request,
        metadata || {},
        this.methodInfoGetCsrfToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.api.UserService/GetCsrfToken',
    request,
    metadata || {},
    this.methodInfoGetCsrfToken);
  }

  methodInfoGetDetailInfo = new grpcWeb.MethodDescriptor(
    '/user.api.UserService/GetDetailInfo',
    grpcWeb.MethodType.UNARY,
    user_pb.GetDetailInfoRequest,
    user_pb.GetDetailInfoResponse,
    (request: user_pb.GetDetailInfoRequest) => {
      return request.serializeBinary();
    },
    user_pb.GetDetailInfoResponse.deserializeBinary
  );

  getDetailInfo(
    request: user_pb.GetDetailInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.GetDetailInfoResponse>;

  getDetailInfo(
    request: user_pb.GetDetailInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.GetDetailInfoResponse) => void): grpcWeb.ClientReadableStream<user_pb.GetDetailInfoResponse>;

  getDetailInfo(
    request: user_pb.GetDetailInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.GetDetailInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.api.UserService/GetDetailInfo',
        request,
        metadata || {},
        this.methodInfoGetDetailInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.api.UserService/GetDetailInfo',
    request,
    metadata || {},
    this.methodInfoGetDetailInfo);
  }

  methodInfoUpdateDetailInfo = new grpcWeb.MethodDescriptor(
    '/user.api.UserService/UpdateDetailInfo',
    grpcWeb.MethodType.UNARY,
    user_pb.UpdateDetailInfoRequest,
    user_pb.UpdateDetailInfoResponse,
    (request: user_pb.UpdateDetailInfoRequest) => {
      return request.serializeBinary();
    },
    user_pb.UpdateDetailInfoResponse.deserializeBinary
  );

  updateDetailInfo(
    request: user_pb.UpdateDetailInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.UpdateDetailInfoResponse>;

  updateDetailInfo(
    request: user_pb.UpdateDetailInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.UpdateDetailInfoResponse) => void): grpcWeb.ClientReadableStream<user_pb.UpdateDetailInfoResponse>;

  updateDetailInfo(
    request: user_pb.UpdateDetailInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.UpdateDetailInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.api.UserService/UpdateDetailInfo',
        request,
        metadata || {},
        this.methodInfoUpdateDetailInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.api.UserService/UpdateDetailInfo',
    request,
    metadata || {},
    this.methodInfoUpdateDetailInfo);
  }

  methodInfoGetUserList = new grpcWeb.MethodDescriptor(
    '/user.api.UserService/GetUserList',
    grpcWeb.MethodType.UNARY,
    user_pb.GetUserListRequest,
    user_pb.GetUserListResponse,
    (request: user_pb.GetUserListRequest) => {
      return request.serializeBinary();
    },
    user_pb.GetUserListResponse.deserializeBinary
  );

  getUserList(
    request: user_pb.GetUserListRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.GetUserListResponse>;

  getUserList(
    request: user_pb.GetUserListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.GetUserListResponse) => void): grpcWeb.ClientReadableStream<user_pb.GetUserListResponse>;

  getUserList(
    request: user_pb.GetUserListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.GetUserListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.api.UserService/GetUserList',
        request,
        metadata || {},
        this.methodInfoGetUserList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.api.UserService/GetUserList',
    request,
    metadata || {},
    this.methodInfoGetUserList);
  }

  methodInfoManagerUser = new grpcWeb.MethodDescriptor(
    '/user.api.UserService/ManagerUser',
    grpcWeb.MethodType.UNARY,
    user_pb.ManagerUserRequest,
    user_pb.ManagerUserResponse,
    (request: user_pb.ManagerUserRequest) => {
      return request.serializeBinary();
    },
    user_pb.ManagerUserResponse.deserializeBinary
  );

  managerUser(
    request: user_pb.ManagerUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.ManagerUserResponse>;

  managerUser(
    request: user_pb.ManagerUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.ManagerUserResponse) => void): grpcWeb.ClientReadableStream<user_pb.ManagerUserResponse>;

  managerUser(
    request: user_pb.ManagerUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.ManagerUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.api.UserService/ManagerUser',
        request,
        metadata || {},
        this.methodInfoManagerUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.api.UserService/ManagerUser',
    request,
    metadata || {},
    this.methodInfoManagerUser);
  }

  methodInfoAdminProfile = new grpcWeb.MethodDescriptor(
    '/user.api.UserService/AdminProfile',
    grpcWeb.MethodType.UNARY,
    user_pb.AdminProfileRequest,
    user_pb.AdminProfileResponse,
    (request: user_pb.AdminProfileRequest) => {
      return request.serializeBinary();
    },
    user_pb.AdminProfileResponse.deserializeBinary
  );

  adminProfile(
    request: user_pb.AdminProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.AdminProfileResponse>;

  adminProfile(
    request: user_pb.AdminProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.AdminProfileResponse) => void): grpcWeb.ClientReadableStream<user_pb.AdminProfileResponse>;

  adminProfile(
    request: user_pb.AdminProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.AdminProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.api.UserService/AdminProfile',
        request,
        metadata || {},
        this.methodInfoAdminProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.api.UserService/AdminProfile',
    request,
    metadata || {},
    this.methodInfoAdminProfile);
  }

}

