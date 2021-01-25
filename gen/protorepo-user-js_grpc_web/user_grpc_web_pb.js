/**
 * @fileoverview gRPC-Web generated client stub for sbs.api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var user_status_pb = require('../user/status_pb.js')
const proto = {};
proto.sbs = {};
proto.sbs.api = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.sbs.api.UserServiceClient =
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
proto.sbs.api.UserServicePromiseClient =
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
 *   !proto.sbs.api.TriggerAuthRequest,
 *   !proto.sbs.api.TriggerAuthResponse>}
 */
const methodDescriptor_UserService_TriggerAuth = new grpc.web.MethodDescriptor(
  '/sbs.api.UserService/TriggerAuth',
  grpc.web.MethodType.UNARY,
  proto.sbs.api.TriggerAuthRequest,
  proto.sbs.api.TriggerAuthResponse,
  /**
   * @param {!proto.sbs.api.TriggerAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.TriggerAuthResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sbs.api.TriggerAuthRequest,
 *   !proto.sbs.api.TriggerAuthResponse>}
 */
const methodInfo_UserService_TriggerAuth = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sbs.api.TriggerAuthResponse,
  /**
   * @param {!proto.sbs.api.TriggerAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.TriggerAuthResponse.deserializeBinary
);


/**
 * @param {!proto.sbs.api.TriggerAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sbs.api.TriggerAuthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sbs.api.TriggerAuthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sbs.api.UserServiceClient.prototype.triggerAuth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sbs.api.UserService/TriggerAuth',
      request,
      metadata || {},
      methodDescriptor_UserService_TriggerAuth,
      callback);
};


/**
 * @param {!proto.sbs.api.TriggerAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sbs.api.TriggerAuthResponse>}
 *     A native promise that resolves to the response
 */
proto.sbs.api.UserServicePromiseClient.prototype.triggerAuth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sbs.api.UserService/TriggerAuth',
      request,
      metadata || {},
      methodDescriptor_UserService_TriggerAuth);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sbs.api.RegisterRequest,
 *   !proto.sbs.api.SignResponse>}
 */
const methodDescriptor_UserService_Register = new grpc.web.MethodDescriptor(
  '/sbs.api.UserService/Register',
  grpc.web.MethodType.UNARY,
  proto.sbs.api.RegisterRequest,
  proto.sbs.api.SignResponse,
  /**
   * @param {!proto.sbs.api.RegisterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.SignResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sbs.api.RegisterRequest,
 *   !proto.sbs.api.SignResponse>}
 */
const methodInfo_UserService_Register = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sbs.api.SignResponse,
  /**
   * @param {!proto.sbs.api.RegisterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.SignResponse.deserializeBinary
);


/**
 * @param {!proto.sbs.api.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sbs.api.SignResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sbs.api.SignResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sbs.api.UserServiceClient.prototype.register =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sbs.api.UserService/Register',
      request,
      metadata || {},
      methodDescriptor_UserService_Register,
      callback);
};


/**
 * @param {!proto.sbs.api.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sbs.api.SignResponse>}
 *     A native promise that resolves to the response
 */
proto.sbs.api.UserServicePromiseClient.prototype.register =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sbs.api.UserService/Register',
      request,
      metadata || {},
      methodDescriptor_UserService_Register);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sbs.api.LoginRequest,
 *   !proto.sbs.api.SignResponse>}
 */
const methodDescriptor_UserService_Login = new grpc.web.MethodDescriptor(
  '/sbs.api.UserService/Login',
  grpc.web.MethodType.UNARY,
  proto.sbs.api.LoginRequest,
  proto.sbs.api.SignResponse,
  /**
   * @param {!proto.sbs.api.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.SignResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sbs.api.LoginRequest,
 *   !proto.sbs.api.SignResponse>}
 */
const methodInfo_UserService_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sbs.api.SignResponse,
  /**
   * @param {!proto.sbs.api.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.SignResponse.deserializeBinary
);


/**
 * @param {!proto.sbs.api.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sbs.api.SignResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sbs.api.SignResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sbs.api.UserServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sbs.api.UserService/Login',
      request,
      metadata || {},
      methodDescriptor_UserService_Login,
      callback);
};


/**
 * @param {!proto.sbs.api.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sbs.api.SignResponse>}
 *     A native promise that resolves to the response
 */
proto.sbs.api.UserServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sbs.api.UserService/Login',
      request,
      metadata || {},
      methodDescriptor_UserService_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sbs.api.SSOLoginRequest,
 *   !proto.sbs.api.SignResponse>}
 */
const methodDescriptor_UserService_SSOLogin = new grpc.web.MethodDescriptor(
  '/sbs.api.UserService/SSOLogin',
  grpc.web.MethodType.UNARY,
  proto.sbs.api.SSOLoginRequest,
  proto.sbs.api.SignResponse,
  /**
   * @param {!proto.sbs.api.SSOLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.SignResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sbs.api.SSOLoginRequest,
 *   !proto.sbs.api.SignResponse>}
 */
const methodInfo_UserService_SSOLogin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sbs.api.SignResponse,
  /**
   * @param {!proto.sbs.api.SSOLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.SignResponse.deserializeBinary
);


/**
 * @param {!proto.sbs.api.SSOLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sbs.api.SignResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sbs.api.SignResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sbs.api.UserServiceClient.prototype.sSOLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sbs.api.UserService/SSOLogin',
      request,
      metadata || {},
      methodDescriptor_UserService_SSOLogin,
      callback);
};


/**
 * @param {!proto.sbs.api.SSOLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sbs.api.SignResponse>}
 *     A native promise that resolves to the response
 */
proto.sbs.api.UserServicePromiseClient.prototype.sSOLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sbs.api.UserService/SSOLogin',
      request,
      metadata || {},
      methodDescriptor_UserService_SSOLogin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sbs.api.LogoutRequest,
 *   !proto.sbs.api.LogoutResponse>}
 */
const methodDescriptor_UserService_Logout = new grpc.web.MethodDescriptor(
  '/sbs.api.UserService/Logout',
  grpc.web.MethodType.UNARY,
  proto.sbs.api.LogoutRequest,
  proto.sbs.api.LogoutResponse,
  /**
   * @param {!proto.sbs.api.LogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.LogoutResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sbs.api.LogoutRequest,
 *   !proto.sbs.api.LogoutResponse>}
 */
const methodInfo_UserService_Logout = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sbs.api.LogoutResponse,
  /**
   * @param {!proto.sbs.api.LogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.LogoutResponse.deserializeBinary
);


/**
 * @param {!proto.sbs.api.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sbs.api.LogoutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sbs.api.LogoutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sbs.api.UserServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sbs.api.UserService/Logout',
      request,
      metadata || {},
      methodDescriptor_UserService_Logout,
      callback);
};


/**
 * @param {!proto.sbs.api.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sbs.api.LogoutResponse>}
 *     A native promise that resolves to the response
 */
proto.sbs.api.UserServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sbs.api.UserService/Logout',
      request,
      metadata || {},
      methodDescriptor_UserService_Logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sbs.api.GoogleAuthGetSetupInfoRequest,
 *   !proto.sbs.api.GoogleAuthGetSetupInfoResponse>}
 */
const methodDescriptor_UserService_GoogleAuthGetSetupInfo = new grpc.web.MethodDescriptor(
  '/sbs.api.UserService/GoogleAuthGetSetupInfo',
  grpc.web.MethodType.UNARY,
  proto.sbs.api.GoogleAuthGetSetupInfoRequest,
  proto.sbs.api.GoogleAuthGetSetupInfoResponse,
  /**
   * @param {!proto.sbs.api.GoogleAuthGetSetupInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.GoogleAuthGetSetupInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sbs.api.GoogleAuthGetSetupInfoRequest,
 *   !proto.sbs.api.GoogleAuthGetSetupInfoResponse>}
 */
const methodInfo_UserService_GoogleAuthGetSetupInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sbs.api.GoogleAuthGetSetupInfoResponse,
  /**
   * @param {!proto.sbs.api.GoogleAuthGetSetupInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.GoogleAuthGetSetupInfoResponse.deserializeBinary
);


/**
 * @param {!proto.sbs.api.GoogleAuthGetSetupInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sbs.api.GoogleAuthGetSetupInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sbs.api.GoogleAuthGetSetupInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sbs.api.UserServiceClient.prototype.googleAuthGetSetupInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sbs.api.UserService/GoogleAuthGetSetupInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_GoogleAuthGetSetupInfo,
      callback);
};


/**
 * @param {!proto.sbs.api.GoogleAuthGetSetupInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sbs.api.GoogleAuthGetSetupInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.sbs.api.UserServicePromiseClient.prototype.googleAuthGetSetupInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sbs.api.UserService/GoogleAuthGetSetupInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_GoogleAuthGetSetupInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sbs.api.GoogleAuthVerifyRequest,
 *   !proto.sbs.api.GoogleAuthVerifyResponse>}
 */
const methodDescriptor_UserService_GoogleAuthVerify = new grpc.web.MethodDescriptor(
  '/sbs.api.UserService/GoogleAuthVerify',
  grpc.web.MethodType.UNARY,
  proto.sbs.api.GoogleAuthVerifyRequest,
  proto.sbs.api.GoogleAuthVerifyResponse,
  /**
   * @param {!proto.sbs.api.GoogleAuthVerifyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.GoogleAuthVerifyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sbs.api.GoogleAuthVerifyRequest,
 *   !proto.sbs.api.GoogleAuthVerifyResponse>}
 */
const methodInfo_UserService_GoogleAuthVerify = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sbs.api.GoogleAuthVerifyResponse,
  /**
   * @param {!proto.sbs.api.GoogleAuthVerifyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.GoogleAuthVerifyResponse.deserializeBinary
);


/**
 * @param {!proto.sbs.api.GoogleAuthVerifyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sbs.api.GoogleAuthVerifyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sbs.api.GoogleAuthVerifyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sbs.api.UserServiceClient.prototype.googleAuthVerify =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sbs.api.UserService/GoogleAuthVerify',
      request,
      metadata || {},
      methodDescriptor_UserService_GoogleAuthVerify,
      callback);
};


/**
 * @param {!proto.sbs.api.GoogleAuthVerifyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sbs.api.GoogleAuthVerifyResponse>}
 *     A native promise that resolves to the response
 */
proto.sbs.api.UserServicePromiseClient.prototype.googleAuthVerify =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sbs.api.UserService/GoogleAuthVerify',
      request,
      metadata || {},
      methodDescriptor_UserService_GoogleAuthVerify);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sbs.api.GoogleAuthSetRequest,
 *   !proto.sbs.api.GoogleAuthSetResponse>}
 */
const methodDescriptor_UserService_GoogleAuthSet = new grpc.web.MethodDescriptor(
  '/sbs.api.UserService/GoogleAuthSet',
  grpc.web.MethodType.UNARY,
  proto.sbs.api.GoogleAuthSetRequest,
  proto.sbs.api.GoogleAuthSetResponse,
  /**
   * @param {!proto.sbs.api.GoogleAuthSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.GoogleAuthSetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sbs.api.GoogleAuthSetRequest,
 *   !proto.sbs.api.GoogleAuthSetResponse>}
 */
const methodInfo_UserService_GoogleAuthSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sbs.api.GoogleAuthSetResponse,
  /**
   * @param {!proto.sbs.api.GoogleAuthSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.GoogleAuthSetResponse.deserializeBinary
);


/**
 * @param {!proto.sbs.api.GoogleAuthSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sbs.api.GoogleAuthSetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sbs.api.GoogleAuthSetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sbs.api.UserServiceClient.prototype.googleAuthSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sbs.api.UserService/GoogleAuthSet',
      request,
      metadata || {},
      methodDescriptor_UserService_GoogleAuthSet,
      callback);
};


/**
 * @param {!proto.sbs.api.GoogleAuthSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sbs.api.GoogleAuthSetResponse>}
 *     A native promise that resolves to the response
 */
proto.sbs.api.UserServicePromiseClient.prototype.googleAuthSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sbs.api.UserService/GoogleAuthSet',
      request,
      metadata || {},
      methodDescriptor_UserService_GoogleAuthSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sbs.api.ProfileRequest,
 *   !proto.sbs.api.ProfileResponse>}
 */
const methodDescriptor_UserService_Profile = new grpc.web.MethodDescriptor(
  '/sbs.api.UserService/Profile',
  grpc.web.MethodType.UNARY,
  proto.sbs.api.ProfileRequest,
  proto.sbs.api.ProfileResponse,
  /**
   * @param {!proto.sbs.api.ProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.ProfileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sbs.api.ProfileRequest,
 *   !proto.sbs.api.ProfileResponse>}
 */
const methodInfo_UserService_Profile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sbs.api.ProfileResponse,
  /**
   * @param {!proto.sbs.api.ProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.ProfileResponse.deserializeBinary
);


/**
 * @param {!proto.sbs.api.ProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sbs.api.ProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sbs.api.ProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sbs.api.UserServiceClient.prototype.profile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sbs.api.UserService/Profile',
      request,
      metadata || {},
      methodDescriptor_UserService_Profile,
      callback);
};


/**
 * @param {!proto.sbs.api.ProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sbs.api.ProfileResponse>}
 *     A native promise that resolves to the response
 */
proto.sbs.api.UserServicePromiseClient.prototype.profile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sbs.api.UserService/Profile',
      request,
      metadata || {},
      methodDescriptor_UserService_Profile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sbs.api.ResetPasswordRequest,
 *   !proto.sbs.api.SignResponse>}
 */
const methodDescriptor_UserService_ResetPassword = new grpc.web.MethodDescriptor(
  '/sbs.api.UserService/ResetPassword',
  grpc.web.MethodType.UNARY,
  proto.sbs.api.ResetPasswordRequest,
  proto.sbs.api.SignResponse,
  /**
   * @param {!proto.sbs.api.ResetPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.SignResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sbs.api.ResetPasswordRequest,
 *   !proto.sbs.api.SignResponse>}
 */
const methodInfo_UserService_ResetPassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sbs.api.SignResponse,
  /**
   * @param {!proto.sbs.api.ResetPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.SignResponse.deserializeBinary
);


/**
 * @param {!proto.sbs.api.ResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sbs.api.SignResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sbs.api.SignResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sbs.api.UserServiceClient.prototype.resetPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sbs.api.UserService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_UserService_ResetPassword,
      callback);
};


/**
 * @param {!proto.sbs.api.ResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sbs.api.SignResponse>}
 *     A native promise that resolves to the response
 */
proto.sbs.api.UserServicePromiseClient.prototype.resetPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sbs.api.UserService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_UserService_ResetPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sbs.api.ChangePasswordRequest,
 *   !proto.sbs.api.SignResponse>}
 */
const methodDescriptor_UserService_ChangePassword = new grpc.web.MethodDescriptor(
  '/sbs.api.UserService/ChangePassword',
  grpc.web.MethodType.UNARY,
  proto.sbs.api.ChangePasswordRequest,
  proto.sbs.api.SignResponse,
  /**
   * @param {!proto.sbs.api.ChangePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.SignResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sbs.api.ChangePasswordRequest,
 *   !proto.sbs.api.SignResponse>}
 */
const methodInfo_UserService_ChangePassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sbs.api.SignResponse,
  /**
   * @param {!proto.sbs.api.ChangePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.SignResponse.deserializeBinary
);


/**
 * @param {!proto.sbs.api.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sbs.api.SignResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sbs.api.SignResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sbs.api.UserServiceClient.prototype.changePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sbs.api.UserService/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_UserService_ChangePassword,
      callback);
};


/**
 * @param {!proto.sbs.api.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sbs.api.SignResponse>}
 *     A native promise that resolves to the response
 */
proto.sbs.api.UserServicePromiseClient.prototype.changePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sbs.api.UserService/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_UserService_ChangePassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sbs.api.GetCsrfTokenRequest,
 *   !proto.sbs.api.GetCsrfTokenResponse>}
 */
const methodDescriptor_UserService_GetCsrfToken = new grpc.web.MethodDescriptor(
  '/sbs.api.UserService/GetCsrfToken',
  grpc.web.MethodType.UNARY,
  proto.sbs.api.GetCsrfTokenRequest,
  proto.sbs.api.GetCsrfTokenResponse,
  /**
   * @param {!proto.sbs.api.GetCsrfTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.GetCsrfTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sbs.api.GetCsrfTokenRequest,
 *   !proto.sbs.api.GetCsrfTokenResponse>}
 */
const methodInfo_UserService_GetCsrfToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sbs.api.GetCsrfTokenResponse,
  /**
   * @param {!proto.sbs.api.GetCsrfTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.GetCsrfTokenResponse.deserializeBinary
);


/**
 * @param {!proto.sbs.api.GetCsrfTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sbs.api.GetCsrfTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sbs.api.GetCsrfTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sbs.api.UserServiceClient.prototype.getCsrfToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sbs.api.UserService/GetCsrfToken',
      request,
      metadata || {},
      methodDescriptor_UserService_GetCsrfToken,
      callback);
};


/**
 * @param {!proto.sbs.api.GetCsrfTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sbs.api.GetCsrfTokenResponse>}
 *     A native promise that resolves to the response
 */
proto.sbs.api.UserServicePromiseClient.prototype.getCsrfToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sbs.api.UserService/GetCsrfToken',
      request,
      metadata || {},
      methodDescriptor_UserService_GetCsrfToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sbs.api.GetDetailInfoRequest,
 *   !proto.sbs.api.GetDetailInfoResponse>}
 */
const methodDescriptor_UserService_GetDetailInfo = new grpc.web.MethodDescriptor(
  '/sbs.api.UserService/GetDetailInfo',
  grpc.web.MethodType.UNARY,
  proto.sbs.api.GetDetailInfoRequest,
  proto.sbs.api.GetDetailInfoResponse,
  /**
   * @param {!proto.sbs.api.GetDetailInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.GetDetailInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sbs.api.GetDetailInfoRequest,
 *   !proto.sbs.api.GetDetailInfoResponse>}
 */
const methodInfo_UserService_GetDetailInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sbs.api.GetDetailInfoResponse,
  /**
   * @param {!proto.sbs.api.GetDetailInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.GetDetailInfoResponse.deserializeBinary
);


/**
 * @param {!proto.sbs.api.GetDetailInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sbs.api.GetDetailInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sbs.api.GetDetailInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sbs.api.UserServiceClient.prototype.getDetailInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sbs.api.UserService/GetDetailInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_GetDetailInfo,
      callback);
};


/**
 * @param {!proto.sbs.api.GetDetailInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sbs.api.GetDetailInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.sbs.api.UserServicePromiseClient.prototype.getDetailInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sbs.api.UserService/GetDetailInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_GetDetailInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sbs.api.UpdateDetailInfoRequest,
 *   !proto.sbs.api.UpdateDetailInfoResponse>}
 */
const methodDescriptor_UserService_UpdateDetailInfo = new grpc.web.MethodDescriptor(
  '/sbs.api.UserService/UpdateDetailInfo',
  grpc.web.MethodType.UNARY,
  proto.sbs.api.UpdateDetailInfoRequest,
  proto.sbs.api.UpdateDetailInfoResponse,
  /**
   * @param {!proto.sbs.api.UpdateDetailInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.UpdateDetailInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sbs.api.UpdateDetailInfoRequest,
 *   !proto.sbs.api.UpdateDetailInfoResponse>}
 */
const methodInfo_UserService_UpdateDetailInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sbs.api.UpdateDetailInfoResponse,
  /**
   * @param {!proto.sbs.api.UpdateDetailInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.UpdateDetailInfoResponse.deserializeBinary
);


/**
 * @param {!proto.sbs.api.UpdateDetailInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sbs.api.UpdateDetailInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sbs.api.UpdateDetailInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sbs.api.UserServiceClient.prototype.updateDetailInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sbs.api.UserService/UpdateDetailInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateDetailInfo,
      callback);
};


/**
 * @param {!proto.sbs.api.UpdateDetailInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sbs.api.UpdateDetailInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.sbs.api.UserServicePromiseClient.prototype.updateDetailInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sbs.api.UserService/UpdateDetailInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateDetailInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sbs.api.AdminProfileRequest,
 *   !proto.sbs.api.AdminProfileResponse>}
 */
const methodDescriptor_UserService_AdminProfile = new grpc.web.MethodDescriptor(
  '/sbs.api.UserService/AdminProfile',
  grpc.web.MethodType.UNARY,
  proto.sbs.api.AdminProfileRequest,
  proto.sbs.api.AdminProfileResponse,
  /**
   * @param {!proto.sbs.api.AdminProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.AdminProfileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sbs.api.AdminProfileRequest,
 *   !proto.sbs.api.AdminProfileResponse>}
 */
const methodInfo_UserService_AdminProfile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sbs.api.AdminProfileResponse,
  /**
   * @param {!proto.sbs.api.AdminProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.AdminProfileResponse.deserializeBinary
);


/**
 * @param {!proto.sbs.api.AdminProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sbs.api.AdminProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sbs.api.AdminProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sbs.api.UserServiceClient.prototype.adminProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sbs.api.UserService/AdminProfile',
      request,
      metadata || {},
      methodDescriptor_UserService_AdminProfile,
      callback);
};


/**
 * @param {!proto.sbs.api.AdminProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sbs.api.AdminProfileResponse>}
 *     A native promise that resolves to the response
 */
proto.sbs.api.UserServicePromiseClient.prototype.adminProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sbs.api.UserService/AdminProfile',
      request,
      metadata || {},
      methodDescriptor_UserService_AdminProfile);
};


module.exports = proto.sbs.api;

