/* eslint-disable */
/**
 * @fileoverview gRPC-Web generated client stub for user.api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var user_status_pb = require('../user/status_pb.js')
const proto = {};
proto.user = {};
proto.user.api = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.user.api.UserServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.user.api.UserServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.api.TriggerAuthRequest,
 *   !proto.user.api.TriggerAuthResponse>}
 */
const methodDescriptor_UserService_TriggerAuth = new grpc.web.MethodDescriptor(
  '/user.api.UserService/TriggerAuth',
  grpc.web.MethodType.UNARY,
  proto.user.api.TriggerAuthRequest,
  proto.user.api.TriggerAuthResponse,
  /**
   * @param {!proto.user.api.TriggerAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.TriggerAuthResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.api.TriggerAuthRequest,
 *   !proto.user.api.TriggerAuthResponse>}
 */
const methodInfo_UserService_TriggerAuth = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.api.TriggerAuthResponse,
  /**
   * @param {!proto.user.api.TriggerAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.TriggerAuthResponse.deserializeBinary
);


/**
 * @param {!proto.user.api.TriggerAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.api.TriggerAuthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.api.TriggerAuthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.api.UserServiceClient.prototype.triggerAuth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.api.UserService/TriggerAuth',
      request,
      metadata || {},
      methodDescriptor_UserService_TriggerAuth,
      callback);
};


/**
 * @param {!proto.user.api.TriggerAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.api.TriggerAuthResponse>}
 *     A native promise that resolves to the response
 */
proto.user.api.UserServicePromiseClient.prototype.triggerAuth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.api.UserService/TriggerAuth',
      request,
      metadata || {},
      methodDescriptor_UserService_TriggerAuth);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.api.RegisterRequest,
 *   !proto.user.api.SignResponse>}
 */
const methodDescriptor_UserService_Register = new grpc.web.MethodDescriptor(
  '/user.api.UserService/Register',
  grpc.web.MethodType.UNARY,
  proto.user.api.RegisterRequest,
  proto.user.api.SignResponse,
  /**
   * @param {!proto.user.api.RegisterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.SignResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.api.RegisterRequest,
 *   !proto.user.api.SignResponse>}
 */
const methodInfo_UserService_Register = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.api.SignResponse,
  /**
   * @param {!proto.user.api.RegisterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.SignResponse.deserializeBinary
);


/**
 * @param {!proto.user.api.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.api.SignResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.api.SignResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.api.UserServiceClient.prototype.register =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.api.UserService/Register',
      request,
      metadata || {},
      methodDescriptor_UserService_Register,
      callback);
};


/**
 * @param {!proto.user.api.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.api.SignResponse>}
 *     A native promise that resolves to the response
 */
proto.user.api.UserServicePromiseClient.prototype.register =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.api.UserService/Register',
      request,
      metadata || {},
      methodDescriptor_UserService_Register);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.api.LoginRequest,
 *   !proto.user.api.SignResponse>}
 */
const methodDescriptor_UserService_Login = new grpc.web.MethodDescriptor(
  '/user.api.UserService/Login',
  grpc.web.MethodType.UNARY,
  proto.user.api.LoginRequest,
  proto.user.api.SignResponse,
  /**
   * @param {!proto.user.api.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.SignResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.api.LoginRequest,
 *   !proto.user.api.SignResponse>}
 */
const methodInfo_UserService_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.api.SignResponse,
  /**
   * @param {!proto.user.api.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.SignResponse.deserializeBinary
);


/**
 * @param {!proto.user.api.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.api.SignResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.api.SignResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.api.UserServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.api.UserService/Login',
      request,
      metadata || {},
      methodDescriptor_UserService_Login,
      callback);
};


/**
 * @param {!proto.user.api.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.api.SignResponse>}
 *     A native promise that resolves to the response
 */
proto.user.api.UserServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.api.UserService/Login',
      request,
      metadata || {},
      methodDescriptor_UserService_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.api.SSOLoginRequest,
 *   !proto.user.api.SignResponse>}
 */
const methodDescriptor_UserService_SSOLogin = new grpc.web.MethodDescriptor(
  '/user.api.UserService/SSOLogin',
  grpc.web.MethodType.UNARY,
  proto.user.api.SSOLoginRequest,
  proto.user.api.SignResponse,
  /**
   * @param {!proto.user.api.SSOLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.SignResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.api.SSOLoginRequest,
 *   !proto.user.api.SignResponse>}
 */
const methodInfo_UserService_SSOLogin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.api.SignResponse,
  /**
   * @param {!proto.user.api.SSOLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.SignResponse.deserializeBinary
);


/**
 * @param {!proto.user.api.SSOLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.api.SignResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.api.SignResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.api.UserServiceClient.prototype.sSOLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.api.UserService/SSOLogin',
      request,
      metadata || {},
      methodDescriptor_UserService_SSOLogin,
      callback);
};


/**
 * @param {!proto.user.api.SSOLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.api.SignResponse>}
 *     A native promise that resolves to the response
 */
proto.user.api.UserServicePromiseClient.prototype.sSOLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.api.UserService/SSOLogin',
      request,
      metadata || {},
      methodDescriptor_UserService_SSOLogin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.api.LogoutRequest,
 *   !proto.user.api.LogoutResponse>}
 */
const methodDescriptor_UserService_Logout = new grpc.web.MethodDescriptor(
  '/user.api.UserService/Logout',
  grpc.web.MethodType.UNARY,
  proto.user.api.LogoutRequest,
  proto.user.api.LogoutResponse,
  /**
   * @param {!proto.user.api.LogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.LogoutResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.api.LogoutRequest,
 *   !proto.user.api.LogoutResponse>}
 */
const methodInfo_UserService_Logout = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.api.LogoutResponse,
  /**
   * @param {!proto.user.api.LogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.LogoutResponse.deserializeBinary
);


/**
 * @param {!proto.user.api.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.api.LogoutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.api.LogoutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.api.UserServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.api.UserService/Logout',
      request,
      metadata || {},
      methodDescriptor_UserService_Logout,
      callback);
};


/**
 * @param {!proto.user.api.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.api.LogoutResponse>}
 *     A native promise that resolves to the response
 */
proto.user.api.UserServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.api.UserService/Logout',
      request,
      metadata || {},
      methodDescriptor_UserService_Logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.api.GoogleAuthGetSetupInfoRequest,
 *   !proto.user.api.GoogleAuthGetSetupInfoResponse>}
 */
const methodDescriptor_UserService_GoogleAuthGetSetupInfo = new grpc.web.MethodDescriptor(
  '/user.api.UserService/GoogleAuthGetSetupInfo',
  grpc.web.MethodType.UNARY,
  proto.user.api.GoogleAuthGetSetupInfoRequest,
  proto.user.api.GoogleAuthGetSetupInfoResponse,
  /**
   * @param {!proto.user.api.GoogleAuthGetSetupInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.GoogleAuthGetSetupInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.api.GoogleAuthGetSetupInfoRequest,
 *   !proto.user.api.GoogleAuthGetSetupInfoResponse>}
 */
const methodInfo_UserService_GoogleAuthGetSetupInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.api.GoogleAuthGetSetupInfoResponse,
  /**
   * @param {!proto.user.api.GoogleAuthGetSetupInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.GoogleAuthGetSetupInfoResponse.deserializeBinary
);


/**
 * @param {!proto.user.api.GoogleAuthGetSetupInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.api.GoogleAuthGetSetupInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.api.GoogleAuthGetSetupInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.api.UserServiceClient.prototype.googleAuthGetSetupInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.api.UserService/GoogleAuthGetSetupInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_GoogleAuthGetSetupInfo,
      callback);
};


/**
 * @param {!proto.user.api.GoogleAuthGetSetupInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.api.GoogleAuthGetSetupInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.user.api.UserServicePromiseClient.prototype.googleAuthGetSetupInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.api.UserService/GoogleAuthGetSetupInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_GoogleAuthGetSetupInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.api.GoogleAuthVerifyRequest,
 *   !proto.user.api.GoogleAuthVerifyResponse>}
 */
const methodDescriptor_UserService_GoogleAuthVerify = new grpc.web.MethodDescriptor(
  '/user.api.UserService/GoogleAuthVerify',
  grpc.web.MethodType.UNARY,
  proto.user.api.GoogleAuthVerifyRequest,
  proto.user.api.GoogleAuthVerifyResponse,
  /**
   * @param {!proto.user.api.GoogleAuthVerifyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.GoogleAuthVerifyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.api.GoogleAuthVerifyRequest,
 *   !proto.user.api.GoogleAuthVerifyResponse>}
 */
const methodInfo_UserService_GoogleAuthVerify = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.api.GoogleAuthVerifyResponse,
  /**
   * @param {!proto.user.api.GoogleAuthVerifyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.GoogleAuthVerifyResponse.deserializeBinary
);


/**
 * @param {!proto.user.api.GoogleAuthVerifyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.api.GoogleAuthVerifyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.api.GoogleAuthVerifyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.api.UserServiceClient.prototype.googleAuthVerify =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.api.UserService/GoogleAuthVerify',
      request,
      metadata || {},
      methodDescriptor_UserService_GoogleAuthVerify,
      callback);
};


/**
 * @param {!proto.user.api.GoogleAuthVerifyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.api.GoogleAuthVerifyResponse>}
 *     A native promise that resolves to the response
 */
proto.user.api.UserServicePromiseClient.prototype.googleAuthVerify =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.api.UserService/GoogleAuthVerify',
      request,
      metadata || {},
      methodDescriptor_UserService_GoogleAuthVerify);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.api.GoogleAuthSetRequest,
 *   !proto.user.api.GoogleAuthSetResponse>}
 */
const methodDescriptor_UserService_GoogleAuthSet = new grpc.web.MethodDescriptor(
  '/user.api.UserService/GoogleAuthSet',
  grpc.web.MethodType.UNARY,
  proto.user.api.GoogleAuthSetRequest,
  proto.user.api.GoogleAuthSetResponse,
  /**
   * @param {!proto.user.api.GoogleAuthSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.GoogleAuthSetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.api.GoogleAuthSetRequest,
 *   !proto.user.api.GoogleAuthSetResponse>}
 */
const methodInfo_UserService_GoogleAuthSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.api.GoogleAuthSetResponse,
  /**
   * @param {!proto.user.api.GoogleAuthSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.GoogleAuthSetResponse.deserializeBinary
);


/**
 * @param {!proto.user.api.GoogleAuthSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.api.GoogleAuthSetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.api.GoogleAuthSetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.api.UserServiceClient.prototype.googleAuthSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.api.UserService/GoogleAuthSet',
      request,
      metadata || {},
      methodDescriptor_UserService_GoogleAuthSet,
      callback);
};


/**
 * @param {!proto.user.api.GoogleAuthSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.api.GoogleAuthSetResponse>}
 *     A native promise that resolves to the response
 */
proto.user.api.UserServicePromiseClient.prototype.googleAuthSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.api.UserService/GoogleAuthSet',
      request,
      metadata || {},
      methodDescriptor_UserService_GoogleAuthSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.api.ProfileRequest,
 *   !proto.user.api.ProfileResponse>}
 */
const methodDescriptor_UserService_Profile = new grpc.web.MethodDescriptor(
  '/user.api.UserService/Profile',
  grpc.web.MethodType.UNARY,
  proto.user.api.ProfileRequest,
  proto.user.api.ProfileResponse,
  /**
   * @param {!proto.user.api.ProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.ProfileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.api.ProfileRequest,
 *   !proto.user.api.ProfileResponse>}
 */
const methodInfo_UserService_Profile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.api.ProfileResponse,
  /**
   * @param {!proto.user.api.ProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.ProfileResponse.deserializeBinary
);


/**
 * @param {!proto.user.api.ProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.api.ProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.api.ProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.api.UserServiceClient.prototype.profile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.api.UserService/Profile',
      request,
      metadata || {},
      methodDescriptor_UserService_Profile,
      callback);
};


/**
 * @param {!proto.user.api.ProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.api.ProfileResponse>}
 *     A native promise that resolves to the response
 */
proto.user.api.UserServicePromiseClient.prototype.profile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.api.UserService/Profile',
      request,
      metadata || {},
      methodDescriptor_UserService_Profile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.api.ResetPasswordRequest,
 *   !proto.user.api.SignResponse>}
 */
const methodDescriptor_UserService_ResetPassword = new grpc.web.MethodDescriptor(
  '/user.api.UserService/ResetPassword',
  grpc.web.MethodType.UNARY,
  proto.user.api.ResetPasswordRequest,
  proto.user.api.SignResponse,
  /**
   * @param {!proto.user.api.ResetPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.SignResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.api.ResetPasswordRequest,
 *   !proto.user.api.SignResponse>}
 */
const methodInfo_UserService_ResetPassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.api.SignResponse,
  /**
   * @param {!proto.user.api.ResetPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.SignResponse.deserializeBinary
);


/**
 * @param {!proto.user.api.ResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.api.SignResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.api.SignResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.api.UserServiceClient.prototype.resetPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.api.UserService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_UserService_ResetPassword,
      callback);
};


/**
 * @param {!proto.user.api.ResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.api.SignResponse>}
 *     A native promise that resolves to the response
 */
proto.user.api.UserServicePromiseClient.prototype.resetPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.api.UserService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_UserService_ResetPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.api.ChangePasswordRequest,
 *   !proto.user.api.SignResponse>}
 */
const methodDescriptor_UserService_ChangePassword = new grpc.web.MethodDescriptor(
  '/user.api.UserService/ChangePassword',
  grpc.web.MethodType.UNARY,
  proto.user.api.ChangePasswordRequest,
  proto.user.api.SignResponse,
  /**
   * @param {!proto.user.api.ChangePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.SignResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.api.ChangePasswordRequest,
 *   !proto.user.api.SignResponse>}
 */
const methodInfo_UserService_ChangePassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.api.SignResponse,
  /**
   * @param {!proto.user.api.ChangePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.SignResponse.deserializeBinary
);


/**
 * @param {!proto.user.api.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.api.SignResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.api.SignResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.api.UserServiceClient.prototype.changePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.api.UserService/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_UserService_ChangePassword,
      callback);
};


/**
 * @param {!proto.user.api.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.api.SignResponse>}
 *     A native promise that resolves to the response
 */
proto.user.api.UserServicePromiseClient.prototype.changePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.api.UserService/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_UserService_ChangePassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.api.GetCsrfTokenRequest,
 *   !proto.user.api.GetCsrfTokenResponse>}
 */
const methodDescriptor_UserService_GetCsrfToken = new grpc.web.MethodDescriptor(
  '/user.api.UserService/GetCsrfToken',
  grpc.web.MethodType.UNARY,
  proto.user.api.GetCsrfTokenRequest,
  proto.user.api.GetCsrfTokenResponse,
  /**
   * @param {!proto.user.api.GetCsrfTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.GetCsrfTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.api.GetCsrfTokenRequest,
 *   !proto.user.api.GetCsrfTokenResponse>}
 */
const methodInfo_UserService_GetCsrfToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.api.GetCsrfTokenResponse,
  /**
   * @param {!proto.user.api.GetCsrfTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.GetCsrfTokenResponse.deserializeBinary
);


/**
 * @param {!proto.user.api.GetCsrfTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.api.GetCsrfTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.api.GetCsrfTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.api.UserServiceClient.prototype.getCsrfToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.api.UserService/GetCsrfToken',
      request,
      metadata || {},
      methodDescriptor_UserService_GetCsrfToken,
      callback);
};


/**
 * @param {!proto.user.api.GetCsrfTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.api.GetCsrfTokenResponse>}
 *     A native promise that resolves to the response
 */
proto.user.api.UserServicePromiseClient.prototype.getCsrfToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.api.UserService/GetCsrfToken',
      request,
      metadata || {},
      methodDescriptor_UserService_GetCsrfToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.api.GetDetailInfoRequest,
 *   !proto.user.api.GetDetailInfoResponse>}
 */
const methodDescriptor_UserService_GetDetailInfo = new grpc.web.MethodDescriptor(
  '/user.api.UserService/GetDetailInfo',
  grpc.web.MethodType.UNARY,
  proto.user.api.GetDetailInfoRequest,
  proto.user.api.GetDetailInfoResponse,
  /**
   * @param {!proto.user.api.GetDetailInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.GetDetailInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.api.GetDetailInfoRequest,
 *   !proto.user.api.GetDetailInfoResponse>}
 */
const methodInfo_UserService_GetDetailInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.api.GetDetailInfoResponse,
  /**
   * @param {!proto.user.api.GetDetailInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.GetDetailInfoResponse.deserializeBinary
);


/**
 * @param {!proto.user.api.GetDetailInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.api.GetDetailInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.api.GetDetailInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.api.UserServiceClient.prototype.getDetailInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.api.UserService/GetDetailInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_GetDetailInfo,
      callback);
};


/**
 * @param {!proto.user.api.GetDetailInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.api.GetDetailInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.user.api.UserServicePromiseClient.prototype.getDetailInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.api.UserService/GetDetailInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_GetDetailInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.api.UpdateDetailInfoRequest,
 *   !proto.user.api.UpdateDetailInfoResponse>}
 */
const methodDescriptor_UserService_UpdateDetailInfo = new grpc.web.MethodDescriptor(
  '/user.api.UserService/UpdateDetailInfo',
  grpc.web.MethodType.UNARY,
  proto.user.api.UpdateDetailInfoRequest,
  proto.user.api.UpdateDetailInfoResponse,
  /**
   * @param {!proto.user.api.UpdateDetailInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.UpdateDetailInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.api.UpdateDetailInfoRequest,
 *   !proto.user.api.UpdateDetailInfoResponse>}
 */
const methodInfo_UserService_UpdateDetailInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.api.UpdateDetailInfoResponse,
  /**
   * @param {!proto.user.api.UpdateDetailInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.UpdateDetailInfoResponse.deserializeBinary
);


/**
 * @param {!proto.user.api.UpdateDetailInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.api.UpdateDetailInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.api.UpdateDetailInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.api.UserServiceClient.prototype.updateDetailInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.api.UserService/UpdateDetailInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateDetailInfo,
      callback);
};


/**
 * @param {!proto.user.api.UpdateDetailInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.api.UpdateDetailInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.user.api.UserServicePromiseClient.prototype.updateDetailInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.api.UserService/UpdateDetailInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateDetailInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.api.GetUserListRequest,
 *   !proto.user.api.GetUserListResponse>}
 */
const methodDescriptor_UserService_GetUserList = new grpc.web.MethodDescriptor(
  '/user.api.UserService/GetUserList',
  grpc.web.MethodType.UNARY,
  proto.user.api.GetUserListRequest,
  proto.user.api.GetUserListResponse,
  /**
   * @param {!proto.user.api.GetUserListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.GetUserListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.api.GetUserListRequest,
 *   !proto.user.api.GetUserListResponse>}
 */
const methodInfo_UserService_GetUserList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.api.GetUserListResponse,
  /**
   * @param {!proto.user.api.GetUserListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.GetUserListResponse.deserializeBinary
);


/**
 * @param {!proto.user.api.GetUserListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.api.GetUserListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.api.GetUserListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.api.UserServiceClient.prototype.getUserList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.api.UserService/GetUserList',
      request,
      metadata || {},
      methodDescriptor_UserService_GetUserList,
      callback);
};


/**
 * @param {!proto.user.api.GetUserListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.api.GetUserListResponse>}
 *     A native promise that resolves to the response
 */
proto.user.api.UserServicePromiseClient.prototype.getUserList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.api.UserService/GetUserList',
      request,
      metadata || {},
      methodDescriptor_UserService_GetUserList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.api.ManagerUserRequest,
 *   !proto.user.api.ManagerUserResponse>}
 */
const methodDescriptor_UserService_ManagerUser = new grpc.web.MethodDescriptor(
  '/user.api.UserService/ManagerUser',
  grpc.web.MethodType.UNARY,
  proto.user.api.ManagerUserRequest,
  proto.user.api.ManagerUserResponse,
  /**
   * @param {!proto.user.api.ManagerUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.ManagerUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.api.ManagerUserRequest,
 *   !proto.user.api.ManagerUserResponse>}
 */
const methodInfo_UserService_ManagerUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.api.ManagerUserResponse,
  /**
   * @param {!proto.user.api.ManagerUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.ManagerUserResponse.deserializeBinary
);


/**
 * @param {!proto.user.api.ManagerUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.api.ManagerUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.api.ManagerUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.api.UserServiceClient.prototype.managerUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.api.UserService/ManagerUser',
      request,
      metadata || {},
      methodDescriptor_UserService_ManagerUser,
      callback);
};


/**
 * @param {!proto.user.api.ManagerUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.api.ManagerUserResponse>}
 *     A native promise that resolves to the response
 */
proto.user.api.UserServicePromiseClient.prototype.managerUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.api.UserService/ManagerUser',
      request,
      metadata || {},
      methodDescriptor_UserService_ManagerUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.api.AdminProfileRequest,
 *   !proto.user.api.AdminProfileResponse>}
 */
const methodDescriptor_UserService_AdminProfile = new grpc.web.MethodDescriptor(
  '/user.api.UserService/AdminProfile',
  grpc.web.MethodType.UNARY,
  proto.user.api.AdminProfileRequest,
  proto.user.api.AdminProfileResponse,
  /**
   * @param {!proto.user.api.AdminProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.AdminProfileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.api.AdminProfileRequest,
 *   !proto.user.api.AdminProfileResponse>}
 */
const methodInfo_UserService_AdminProfile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.api.AdminProfileResponse,
  /**
   * @param {!proto.user.api.AdminProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.api.AdminProfileResponse.deserializeBinary
);


/**
 * @param {!proto.user.api.AdminProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.api.AdminProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.api.AdminProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.api.UserServiceClient.prototype.adminProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.api.UserService/AdminProfile',
      request,
      metadata || {},
      methodDescriptor_UserService_AdminProfile,
      callback);
};


/**
 * @param {!proto.user.api.AdminProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.api.AdminProfileResponse>}
 *     A native promise that resolves to the response
 */
proto.user.api.UserServicePromiseClient.prototype.adminProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.api.UserService/AdminProfile',
      request,
      metadata || {},
      methodDescriptor_UserService_AdminProfile);
};


module.exports = proto.user.api;

