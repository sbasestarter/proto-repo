/* eslint-disable */
/**
 * @fileoverview gRPC-Web generated client stub for file.api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var share_share_pb = require('./share/share_pb.js')
const proto = {};
proto.file = {};
proto.file.api = require('./file_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.file.api.FileServiceClient =
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
proto.file.api.FileServicePromiseClient =
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
 *   !proto.file.api.UpdateFileRequest,
 *   !proto.file.api.UpdateFileResponse>}
 */
const methodDescriptor_FileService_UpdateFile = new grpc.web.MethodDescriptor(
  '/file.api.FileService/UpdateFile',
  grpc.web.MethodType.UNARY,
  proto.file.api.UpdateFileRequest,
  proto.file.api.UpdateFileResponse,
  /**
   * @param {!proto.file.api.UpdateFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.file.api.UpdateFileResponse.deserializeBinary
);


/**
 * @param {!proto.file.api.UpdateFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.file.api.UpdateFileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.file.api.UpdateFileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.file.api.FileServiceClient.prototype.updateFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/file.api.FileService/UpdateFile',
      request,
      metadata || {},
      methodDescriptor_FileService_UpdateFile,
      callback);
};


/**
 * @param {!proto.file.api.UpdateFileRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.file.api.UpdateFileResponse>}
 *     Promise that resolves to the response
 */
proto.file.api.FileServicePromiseClient.prototype.updateFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/file.api.FileService/UpdateFile',
      request,
      metadata || {},
      methodDescriptor_FileService_UpdateFile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.file.api.GetKVRequest,
 *   !proto.file.api.GetKVResponse>}
 */
const methodDescriptor_FileService_GetKV = new grpc.web.MethodDescriptor(
  '/file.api.FileService/GetKV',
  grpc.web.MethodType.UNARY,
  proto.file.api.GetKVRequest,
  proto.file.api.GetKVResponse,
  /**
   * @param {!proto.file.api.GetKVRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.file.api.GetKVResponse.deserializeBinary
);


/**
 * @param {!proto.file.api.GetKVRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.file.api.GetKVResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.file.api.GetKVResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.file.api.FileServiceClient.prototype.getKV =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/file.api.FileService/GetKV',
      request,
      metadata || {},
      methodDescriptor_FileService_GetKV,
      callback);
};


/**
 * @param {!proto.file.api.GetKVRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.file.api.GetKVResponse>}
 *     Promise that resolves to the response
 */
proto.file.api.FileServicePromiseClient.prototype.getKV =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/file.api.FileService/GetKV',
      request,
      metadata || {},
      methodDescriptor_FileService_GetKV);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.file.api.SetKVRequest,
 *   !proto.share.api.Empty>}
 */
const methodDescriptor_FileService_SetKV = new grpc.web.MethodDescriptor(
  '/file.api.FileService/SetKV',
  grpc.web.MethodType.UNARY,
  proto.file.api.SetKVRequest,
  share_share_pb.Empty,
  /**
   * @param {!proto.file.api.SetKVRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  share_share_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.file.api.SetKVRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.share.api.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.share.api.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.file.api.FileServiceClient.prototype.setKV =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/file.api.FileService/SetKV',
      request,
      metadata || {},
      methodDescriptor_FileService_SetKV,
      callback);
};


/**
 * @param {!proto.file.api.SetKVRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.share.api.Empty>}
 *     Promise that resolves to the response
 */
proto.file.api.FileServicePromiseClient.prototype.setKV =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/file.api.FileService/SetKV',
      request,
      metadata || {},
      methodDescriptor_FileService_SetKV);
};


module.exports = proto.file.api;

