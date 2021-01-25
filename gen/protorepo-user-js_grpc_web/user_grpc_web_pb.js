/**
 * @fileoverview gRPC-Web generated client stub for sba.api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var user_status_pb = require('../user/status_pb.js')
const proto = {};
proto.sba = {};
proto.sba.api = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.sba.api.UserServiceClient =
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
proto.sba.api.UserServicePromiseClient =
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
 *   !proto.sba.api.TriggerAuthRequest,
 *   !proto.sba.api.TriggerAuthResponse>}
 */
const methodDescriptor_UserService_TriggerAuth = new grpc.web.MethodDescriptor(
  '/sba.api.UserService/TriggerAuth',
  grpc.web.MethodType.UNARY,
  proto.sba.api.TriggerAuthRequest,
  proto.sba.api.TriggerAuthResponse,
  /**
   * @param {!proto.sba.api.TriggerAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.TriggerAuthResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sba.api.TriggerAuthRequest,
 *   !proto.sba.api.TriggerAuthResponse>}
 */
const methodInfo_UserService_TriggerAuth = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sba.api.TriggerAuthResponse,
  /**
   * @param {!proto.sba.api.TriggerAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.TriggerAuthResponse.deserializeBinary
);


/**
 * @param {!proto.sba.api.TriggerAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sba.api.TriggerAuthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sba.api.TriggerAuthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sba.api.UserServiceClient.prototype.triggerAuth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sba.api.UserService/TriggerAuth',
      request,
      metadata || {},
      methodDescriptor_UserService_TriggerAuth,
      callback);
};


/**
 * @param {!proto.sba.api.TriggerAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sba.api.TriggerAuthResponse>}
 *     A native promise that resolves to the response
 */
proto.sba.api.UserServicePromiseClient.prototype.triggerAuth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sba.api.UserService/TriggerAuth',
      request,
      metadata || {},
      methodDescriptor_UserService_TriggerAuth);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sba.api.RegisterRequest,
 *   !proto.sba.api.SignResponse>}
 */
const methodDescriptor_UserService_Register = new grpc.web.MethodDescriptor(
  '/sba.api.UserService/Register',
  grpc.web.MethodType.UNARY,
  proto.sba.api.RegisterRequest,
  proto.sba.api.SignResponse,
  /**
   * @param {!proto.sba.api.RegisterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.SignResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sba.api.RegisterRequest,
 *   !proto.sba.api.SignResponse>}
 */
const methodInfo_UserService_Register = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sba.api.SignResponse,
  /**
   * @param {!proto.sba.api.RegisterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.SignResponse.deserializeBinary
);


/**
 * @param {!proto.sba.api.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sba.api.SignResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sba.api.SignResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sba.api.UserServiceClient.prototype.register =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sba.api.UserService/Register',
      request,
      metadata || {},
      methodDescriptor_UserService_Register,
      callback);
};


/**
 * @param {!proto.sba.api.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sba.api.SignResponse>}
 *     A native promise that resolves to the response
 */
proto.sba.api.UserServicePromiseClient.prototype.register =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sba.api.UserService/Register',
      request,
      metadata || {},
      methodDescriptor_UserService_Register);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sba.api.LoginRequest,
 *   !proto.sba.api.SignResponse>}
 */
const methodDescriptor_UserService_Login = new grpc.web.MethodDescriptor(
  '/sba.api.UserService/Login',
  grpc.web.MethodType.UNARY,
  proto.sba.api.LoginRequest,
  proto.sba.api.SignResponse,
  /**
   * @param {!proto.sba.api.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.SignResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sba.api.LoginRequest,
 *   !proto.sba.api.SignResponse>}
 */
const methodInfo_UserService_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sba.api.SignResponse,
  /**
   * @param {!proto.sba.api.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.SignResponse.deserializeBinary
);


/**
 * @param {!proto.sba.api.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sba.api.SignResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sba.api.SignResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sba.api.UserServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sba.api.UserService/Login',
      request,
      metadata || {},
      methodDescriptor_UserService_Login,
      callback);
};


/**
 * @param {!proto.sba.api.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sba.api.SignResponse>}
 *     A native promise that resolves to the response
 */
proto.sba.api.UserServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sba.api.UserService/Login',
      request,
      metadata || {},
      methodDescriptor_UserService_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sba.api.SSOLoginRequest,
 *   !proto.sba.api.SignResponse>}
 */
const methodDescriptor_UserService_SSOLogin = new grpc.web.MethodDescriptor(
  '/sba.api.UserService/SSOLogin',
  grpc.web.MethodType.UNARY,
  proto.sba.api.SSOLoginRequest,
  proto.sba.api.SignResponse,
  /**
   * @param {!proto.sba.api.SSOLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.SignResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sba.api.SSOLoginRequest,
 *   !proto.sba.api.SignResponse>}
 */
const methodInfo_UserService_SSOLogin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sba.api.SignResponse,
  /**
   * @param {!proto.sba.api.SSOLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.SignResponse.deserializeBinary
);


/**
 * @param {!proto.sba.api.SSOLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sba.api.SignResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sba.api.SignResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sba.api.UserServiceClient.prototype.sSOLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sba.api.UserService/SSOLogin',
      request,
      metadata || {},
      methodDescriptor_UserService_SSOLogin,
      callback);
};


/**
 * @param {!proto.sba.api.SSOLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sba.api.SignResponse>}
 *     A native promise that resolves to the response
 */
proto.sba.api.UserServicePromiseClient.prototype.sSOLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sba.api.UserService/SSOLogin',
      request,
      metadata || {},
      methodDescriptor_UserService_SSOLogin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sba.api.LogoutRequest,
 *   !proto.sba.api.LogoutResponse>}
 */
const methodDescriptor_UserService_Logout = new grpc.web.MethodDescriptor(
  '/sba.api.UserService/Logout',
  grpc.web.MethodType.UNARY,
  proto.sba.api.LogoutRequest,
  proto.sba.api.LogoutResponse,
  /**
   * @param {!proto.sba.api.LogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.LogoutResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sba.api.LogoutRequest,
 *   !proto.sba.api.LogoutResponse>}
 */
const methodInfo_UserService_Logout = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sba.api.LogoutResponse,
  /**
   * @param {!proto.sba.api.LogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.LogoutResponse.deserializeBinary
);


/**
 * @param {!proto.sba.api.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sba.api.LogoutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sba.api.LogoutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sba.api.UserServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sba.api.UserService/Logout',
      request,
      metadata || {},
      methodDescriptor_UserService_Logout,
      callback);
};


/**
 * @param {!proto.sba.api.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sba.api.LogoutResponse>}
 *     A native promise that resolves to the response
 */
proto.sba.api.UserServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sba.api.UserService/Logout',
      request,
      metadata || {},
      methodDescriptor_UserService_Logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sba.api.GoogleAuthGetSetupInfoRequest,
 *   !proto.sba.api.GoogleAuthGetSetupInfoResponse>}
 */
const methodDescriptor_UserService_GoogleAuthGetSetupInfo = new grpc.web.MethodDescriptor(
  '/sba.api.UserService/GoogleAuthGetSetupInfo',
  grpc.web.MethodType.UNARY,
  proto.sba.api.GoogleAuthGetSetupInfoRequest,
  proto.sba.api.GoogleAuthGetSetupInfoResponse,
  /**
   * @param {!proto.sba.api.GoogleAuthGetSetupInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.GoogleAuthGetSetupInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sba.api.GoogleAuthGetSetupInfoRequest,
 *   !proto.sba.api.GoogleAuthGetSetupInfoResponse>}
 */
const methodInfo_UserService_GoogleAuthGetSetupInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sba.api.GoogleAuthGetSetupInfoResponse,
  /**
   * @param {!proto.sba.api.GoogleAuthGetSetupInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.GoogleAuthGetSetupInfoResponse.deserializeBinary
);


/**
 * @param {!proto.sba.api.GoogleAuthGetSetupInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sba.api.GoogleAuthGetSetupInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sba.api.GoogleAuthGetSetupInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sba.api.UserServiceClient.prototype.googleAuthGetSetupInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sba.api.UserService/GoogleAuthGetSetupInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_GoogleAuthGetSetupInfo,
      callback);
};


/**
 * @param {!proto.sba.api.GoogleAuthGetSetupInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sba.api.GoogleAuthGetSetupInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.sba.api.UserServicePromiseClient.prototype.googleAuthGetSetupInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sba.api.UserService/GoogleAuthGetSetupInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_GoogleAuthGetSetupInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sba.api.GoogleAuthVerifyRequest,
 *   !proto.sba.api.GoogleAuthVerifyResponse>}
 */
const methodDescriptor_UserService_GoogleAuthVerify = new grpc.web.MethodDescriptor(
  '/sba.api.UserService/GoogleAuthVerify',
  grpc.web.MethodType.UNARY,
  proto.sba.api.GoogleAuthVerifyRequest,
  proto.sba.api.GoogleAuthVerifyResponse,
  /**
   * @param {!proto.sba.api.GoogleAuthVerifyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.GoogleAuthVerifyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sba.api.GoogleAuthVerifyRequest,
 *   !proto.sba.api.GoogleAuthVerifyResponse>}
 */
const methodInfo_UserService_GoogleAuthVerify = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sba.api.GoogleAuthVerifyResponse,
  /**
   * @param {!proto.sba.api.GoogleAuthVerifyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.GoogleAuthVerifyResponse.deserializeBinary
);


/**
 * @param {!proto.sba.api.GoogleAuthVerifyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sba.api.GoogleAuthVerifyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sba.api.GoogleAuthVerifyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sba.api.UserServiceClient.prototype.googleAuthVerify =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sba.api.UserService/GoogleAuthVerify',
      request,
      metadata || {},
      methodDescriptor_UserService_GoogleAuthVerify,
      callback);
};


/**
 * @param {!proto.sba.api.GoogleAuthVerifyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sba.api.GoogleAuthVerifyResponse>}
 *     A native promise that resolves to the response
 */
proto.sba.api.UserServicePromiseClient.prototype.googleAuthVerify =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sba.api.UserService/GoogleAuthVerify',
      request,
      metadata || {},
      methodDescriptor_UserService_GoogleAuthVerify);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sba.api.GoogleAuthSetRequest,
 *   !proto.sba.api.GoogleAuthSetResponse>}
 */
const methodDescriptor_UserService_GoogleAuthSet = new grpc.web.MethodDescriptor(
  '/sba.api.UserService/GoogleAuthSet',
  grpc.web.MethodType.UNARY,
  proto.sba.api.GoogleAuthSetRequest,
  proto.sba.api.GoogleAuthSetResponse,
  /**
   * @param {!proto.sba.api.GoogleAuthSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.GoogleAuthSetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sba.api.GoogleAuthSetRequest,
 *   !proto.sba.api.GoogleAuthSetResponse>}
 */
const methodInfo_UserService_GoogleAuthSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sba.api.GoogleAuthSetResponse,
  /**
   * @param {!proto.sba.api.GoogleAuthSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.GoogleAuthSetResponse.deserializeBinary
);


/**
 * @param {!proto.sba.api.GoogleAuthSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sba.api.GoogleAuthSetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sba.api.GoogleAuthSetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sba.api.UserServiceClient.prototype.googleAuthSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sba.api.UserService/GoogleAuthSet',
      request,
      metadata || {},
      methodDescriptor_UserService_GoogleAuthSet,
      callback);
};


/**
 * @param {!proto.sba.api.GoogleAuthSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sba.api.GoogleAuthSetResponse>}
 *     A native promise that resolves to the response
 */
proto.sba.api.UserServicePromiseClient.prototype.googleAuthSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sba.api.UserService/GoogleAuthSet',
      request,
      metadata || {},
      methodDescriptor_UserService_GoogleAuthSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sba.api.ProfileRequest,
 *   !proto.sba.api.ProfileResponse>}
 */
const methodDescriptor_UserService_Profile = new grpc.web.MethodDescriptor(
  '/sba.api.UserService/Profile',
  grpc.web.MethodType.UNARY,
  proto.sba.api.ProfileRequest,
  proto.sba.api.ProfileResponse,
  /**
   * @param {!proto.sba.api.ProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.ProfileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sba.api.ProfileRequest,
 *   !proto.sba.api.ProfileResponse>}
 */
const methodInfo_UserService_Profile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sba.api.ProfileResponse,
  /**
   * @param {!proto.sba.api.ProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.ProfileResponse.deserializeBinary
);


/**
 * @param {!proto.sba.api.ProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sba.api.ProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sba.api.ProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sba.api.UserServiceClient.prototype.profile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sba.api.UserService/Profile',
      request,
      metadata || {},
      methodDescriptor_UserService_Profile,
      callback);
};


/**
 * @param {!proto.sba.api.ProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sba.api.ProfileResponse>}
 *     A native promise that resolves to the response
 */
proto.sba.api.UserServicePromiseClient.prototype.profile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sba.api.UserService/Profile',
      request,
      metadata || {},
      methodDescriptor_UserService_Profile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sba.api.ResetPasswordRequest,
 *   !proto.sba.api.SignResponse>}
 */
const methodDescriptor_UserService_ResetPassword = new grpc.web.MethodDescriptor(
  '/sba.api.UserService/ResetPassword',
  grpc.web.MethodType.UNARY,
  proto.sba.api.ResetPasswordRequest,
  proto.sba.api.SignResponse,
  /**
   * @param {!proto.sba.api.ResetPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.SignResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sba.api.ResetPasswordRequest,
 *   !proto.sba.api.SignResponse>}
 */
const methodInfo_UserService_ResetPassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sba.api.SignResponse,
  /**
   * @param {!proto.sba.api.ResetPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.SignResponse.deserializeBinary
);


/**
 * @param {!proto.sba.api.ResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sba.api.SignResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sba.api.SignResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sba.api.UserServiceClient.prototype.resetPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sba.api.UserService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_UserService_ResetPassword,
      callback);
};


/**
 * @param {!proto.sba.api.ResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sba.api.SignResponse>}
 *     A native promise that resolves to the response
 */
proto.sba.api.UserServicePromiseClient.prototype.resetPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sba.api.UserService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_UserService_ResetPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sba.api.ChangePasswordRequest,
 *   !proto.sba.api.SignResponse>}
 */
const methodDescriptor_UserService_ChangePassword = new grpc.web.MethodDescriptor(
  '/sba.api.UserService/ChangePassword',
  grpc.web.MethodType.UNARY,
  proto.sba.api.ChangePasswordRequest,
  proto.sba.api.SignResponse,
  /**
   * @param {!proto.sba.api.ChangePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.SignResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sba.api.ChangePasswordRequest,
 *   !proto.sba.api.SignResponse>}
 */
const methodInfo_UserService_ChangePassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sba.api.SignResponse,
  /**
   * @param {!proto.sba.api.ChangePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.SignResponse.deserializeBinary
);


/**
 * @param {!proto.sba.api.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sba.api.SignResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sba.api.SignResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sba.api.UserServiceClient.prototype.changePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sba.api.UserService/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_UserService_ChangePassword,
      callback);
};


/**
 * @param {!proto.sba.api.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sba.api.SignResponse>}
 *     A native promise that resolves to the response
 */
proto.sba.api.UserServicePromiseClient.prototype.changePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sba.api.UserService/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_UserService_ChangePassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sba.api.GetCsrfTokenRequest,
 *   !proto.sba.api.GetCsrfTokenResponse>}
 */
const methodDescriptor_UserService_GetCsrfToken = new grpc.web.MethodDescriptor(
  '/sba.api.UserService/GetCsrfToken',
  grpc.web.MethodType.UNARY,
  proto.sba.api.GetCsrfTokenRequest,
  proto.sba.api.GetCsrfTokenResponse,
  /**
   * @param {!proto.sba.api.GetCsrfTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.GetCsrfTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sba.api.GetCsrfTokenRequest,
 *   !proto.sba.api.GetCsrfTokenResponse>}
 */
const methodInfo_UserService_GetCsrfToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sba.api.GetCsrfTokenResponse,
  /**
   * @param {!proto.sba.api.GetCsrfTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.GetCsrfTokenResponse.deserializeBinary
);


/**
 * @param {!proto.sba.api.GetCsrfTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sba.api.GetCsrfTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sba.api.GetCsrfTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sba.api.UserServiceClient.prototype.getCsrfToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sba.api.UserService/GetCsrfToken',
      request,
      metadata || {},
      methodDescriptor_UserService_GetCsrfToken,
      callback);
};


/**
 * @param {!proto.sba.api.GetCsrfTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sba.api.GetCsrfTokenResponse>}
 *     A native promise that resolves to the response
 */
proto.sba.api.UserServicePromiseClient.prototype.getCsrfToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sba.api.UserService/GetCsrfToken',
      request,
      metadata || {},
      methodDescriptor_UserService_GetCsrfToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sba.api.GetDetailInfoRequest,
 *   !proto.sba.api.GetDetailInfoResponse>}
 */
const methodDescriptor_UserService_GetDetailInfo = new grpc.web.MethodDescriptor(
  '/sba.api.UserService/GetDetailInfo',
  grpc.web.MethodType.UNARY,
  proto.sba.api.GetDetailInfoRequest,
  proto.sba.api.GetDetailInfoResponse,
  /**
   * @param {!proto.sba.api.GetDetailInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.GetDetailInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sba.api.GetDetailInfoRequest,
 *   !proto.sba.api.GetDetailInfoResponse>}
 */
const methodInfo_UserService_GetDetailInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sba.api.GetDetailInfoResponse,
  /**
   * @param {!proto.sba.api.GetDetailInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.GetDetailInfoResponse.deserializeBinary
);


/**
 * @param {!proto.sba.api.GetDetailInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sba.api.GetDetailInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sba.api.GetDetailInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sba.api.UserServiceClient.prototype.getDetailInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sba.api.UserService/GetDetailInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_GetDetailInfo,
      callback);
};


/**
 * @param {!proto.sba.api.GetDetailInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sba.api.GetDetailInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.sba.api.UserServicePromiseClient.prototype.getDetailInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sba.api.UserService/GetDetailInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_GetDetailInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sba.api.UpdateDetailInfoRequest,
 *   !proto.sba.api.UpdateDetailInfoResponse>}
 */
const methodDescriptor_UserService_UpdateDetailInfo = new grpc.web.MethodDescriptor(
  '/sba.api.UserService/UpdateDetailInfo',
  grpc.web.MethodType.UNARY,
  proto.sba.api.UpdateDetailInfoRequest,
  proto.sba.api.UpdateDetailInfoResponse,
  /**
   * @param {!proto.sba.api.UpdateDetailInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.UpdateDetailInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sba.api.UpdateDetailInfoRequest,
 *   !proto.sba.api.UpdateDetailInfoResponse>}
 */
const methodInfo_UserService_UpdateDetailInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sba.api.UpdateDetailInfoResponse,
  /**
   * @param {!proto.sba.api.UpdateDetailInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.UpdateDetailInfoResponse.deserializeBinary
);


/**
 * @param {!proto.sba.api.UpdateDetailInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sba.api.UpdateDetailInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sba.api.UpdateDetailInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sba.api.UserServiceClient.prototype.updateDetailInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sba.api.UserService/UpdateDetailInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateDetailInfo,
      callback);
};


/**
 * @param {!proto.sba.api.UpdateDetailInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sba.api.UpdateDetailInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.sba.api.UserServicePromiseClient.prototype.updateDetailInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sba.api.UserService/UpdateDetailInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateDetailInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sba.api.AdminProfileRequest,
 *   !proto.sba.api.AdminProfileResponse>}
 */
const methodDescriptor_UserService_AdminProfile = new grpc.web.MethodDescriptor(
  '/sba.api.UserService/AdminProfile',
  grpc.web.MethodType.UNARY,
  proto.sba.api.AdminProfileRequest,
  proto.sba.api.AdminProfileResponse,
  /**
   * @param {!proto.sba.api.AdminProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.AdminProfileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sba.api.AdminProfileRequest,
 *   !proto.sba.api.AdminProfileResponse>}
 */
const methodInfo_UserService_AdminProfile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sba.api.AdminProfileResponse,
  /**
   * @param {!proto.sba.api.AdminProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sba.api.AdminProfileResponse.deserializeBinary
);


/**
 * @param {!proto.sba.api.AdminProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sba.api.AdminProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sba.api.AdminProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sba.api.UserServiceClient.prototype.adminProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sba.api.UserService/AdminProfile',
      request,
      metadata || {},
      methodDescriptor_UserService_AdminProfile,
      callback);
};


/**
 * @param {!proto.sba.api.AdminProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sba.api.AdminProfileResponse>}
 *     A native promise that resolves to the response
 */
proto.sba.api.UserServicePromiseClient.prototype.adminProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sba.api.UserService/AdminProfile',
      request,
      metadata || {},
      methodDescriptor_UserService_AdminProfile);
};


module.exports = proto.sba.api;

