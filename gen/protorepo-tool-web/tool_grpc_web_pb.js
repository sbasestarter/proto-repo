/* eslint-disable */
/**
 * @fileoverview gRPC-Web generated client stub for tool.api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.tool = {};
proto.tool.api = require('./tool_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.tool.api.UserServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

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
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.tool.api.UserServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

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
 *   !proto.tool.api.GeneratePixelAvatarRequest,
 *   !proto.tool.api.GeneratePixelAvatarResponse>}
 */
const methodDescriptor_UserService_GeneratePixelAvatar = new grpc.web.MethodDescriptor(
  '/tool.api.UserService/GeneratePixelAvatar',
  grpc.web.MethodType.UNARY,
  proto.tool.api.GeneratePixelAvatarRequest,
  proto.tool.api.GeneratePixelAvatarResponse,
  /**
   * @param {!proto.tool.api.GeneratePixelAvatarRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tool.api.GeneratePixelAvatarResponse.deserializeBinary
);


/**
 * @param {!proto.tool.api.GeneratePixelAvatarRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.tool.api.GeneratePixelAvatarResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tool.api.GeneratePixelAvatarResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tool.api.UserServiceClient.prototype.generatePixelAvatar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tool.api.UserService/GeneratePixelAvatar',
      request,
      metadata || {},
      methodDescriptor_UserService_GeneratePixelAvatar,
      callback);
};


/**
 * @param {!proto.tool.api.GeneratePixelAvatarRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tool.api.GeneratePixelAvatarResponse>}
 *     Promise that resolves to the response
 */
proto.tool.api.UserServicePromiseClient.prototype.generatePixelAvatar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tool.api.UserService/GeneratePixelAvatar',
      request,
      metadata || {},
      methodDescriptor_UserService_GeneratePixelAvatar);
};


module.exports = proto.tool.api;

