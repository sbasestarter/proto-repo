/* eslint-disable */
/**
 * @fileoverview gRPC-Web generated client stub for filecenter.api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var file$center_status_pb = require('../file-center/status_pb.js')
const proto = {};
proto.filecenter = {};
proto.filecenter.api = require('./file-center_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.filecenter.api.FileCenterClient =
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
proto.filecenter.api.FileCenterPromiseClient =
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
 *   !proto.filecenter.api.UpdateFileRequest,
 *   !proto.filecenter.api.UpdateFileResponse>}
 */
const methodDescriptor_FileCenter_UpdateFile = new grpc.web.MethodDescriptor(
  '/filecenter.api.FileCenter/UpdateFile',
  grpc.web.MethodType.UNARY,
  proto.filecenter.api.UpdateFileRequest,
  proto.filecenter.api.UpdateFileResponse,
  /**
   * @param {!proto.filecenter.api.UpdateFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.filecenter.api.UpdateFileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.filecenter.api.UpdateFileRequest,
 *   !proto.filecenter.api.UpdateFileResponse>}
 */
const methodInfo_FileCenter_UpdateFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.filecenter.api.UpdateFileResponse,
  /**
   * @param {!proto.filecenter.api.UpdateFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.filecenter.api.UpdateFileResponse.deserializeBinary
);


/**
 * @param {!proto.filecenter.api.UpdateFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.filecenter.api.UpdateFileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.filecenter.api.UpdateFileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.filecenter.api.FileCenterClient.prototype.updateFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/filecenter.api.FileCenter/UpdateFile',
      request,
      metadata || {},
      methodDescriptor_FileCenter_UpdateFile,
      callback);
};


/**
 * @param {!proto.filecenter.api.UpdateFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.filecenter.api.UpdateFileResponse>}
 *     A native promise that resolves to the response
 */
proto.filecenter.api.FileCenterPromiseClient.prototype.updateFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/filecenter.api.FileCenter/UpdateFile',
      request,
      metadata || {},
      methodDescriptor_FileCenter_UpdateFile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.filecenter.api.GetKVRequest,
 *   !proto.filecenter.api.GetKVResponse>}
 */
const methodDescriptor_FileCenter_GetKV = new grpc.web.MethodDescriptor(
  '/filecenter.api.FileCenter/GetKV',
  grpc.web.MethodType.UNARY,
  proto.filecenter.api.GetKVRequest,
  proto.filecenter.api.GetKVResponse,
  /**
   * @param {!proto.filecenter.api.GetKVRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.filecenter.api.GetKVResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.filecenter.api.GetKVRequest,
 *   !proto.filecenter.api.GetKVResponse>}
 */
const methodInfo_FileCenter_GetKV = new grpc.web.AbstractClientBase.MethodInfo(
  proto.filecenter.api.GetKVResponse,
  /**
   * @param {!proto.filecenter.api.GetKVRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.filecenter.api.GetKVResponse.deserializeBinary
);


/**
 * @param {!proto.filecenter.api.GetKVRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.filecenter.api.GetKVResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.filecenter.api.GetKVResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.filecenter.api.FileCenterClient.prototype.getKV =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/filecenter.api.FileCenter/GetKV',
      request,
      metadata || {},
      methodDescriptor_FileCenter_GetKV,
      callback);
};


/**
 * @param {!proto.filecenter.api.GetKVRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.filecenter.api.GetKVResponse>}
 *     A native promise that resolves to the response
 */
proto.filecenter.api.FileCenterPromiseClient.prototype.getKV =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/filecenter.api.FileCenter/GetKV',
      request,
      metadata || {},
      methodDescriptor_FileCenter_GetKV);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.filecenter.api.SetKVRequest,
 *   !proto.filecenter.api.SetKVResponse>}
 */
const methodDescriptor_FileCenter_SetKV = new grpc.web.MethodDescriptor(
  '/filecenter.api.FileCenter/SetKV',
  grpc.web.MethodType.UNARY,
  proto.filecenter.api.SetKVRequest,
  proto.filecenter.api.SetKVResponse,
  /**
   * @param {!proto.filecenter.api.SetKVRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.filecenter.api.SetKVResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.filecenter.api.SetKVRequest,
 *   !proto.filecenter.api.SetKVResponse>}
 */
const methodInfo_FileCenter_SetKV = new grpc.web.AbstractClientBase.MethodInfo(
  proto.filecenter.api.SetKVResponse,
  /**
   * @param {!proto.filecenter.api.SetKVRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.filecenter.api.SetKVResponse.deserializeBinary
);


/**
 * @param {!proto.filecenter.api.SetKVRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.filecenter.api.SetKVResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.filecenter.api.SetKVResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.filecenter.api.FileCenterClient.prototype.setKV =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/filecenter.api.FileCenter/SetKV',
      request,
      metadata || {},
      methodDescriptor_FileCenter_SetKV,
      callback);
};


/**
 * @param {!proto.filecenter.api.SetKVRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.filecenter.api.SetKVResponse>}
 *     A native promise that resolves to the response
 */
proto.filecenter.api.FileCenterPromiseClient.prototype.setKV =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/filecenter.api.FileCenter/SetKV',
      request,
      metadata || {},
      methodDescriptor_FileCenter_SetKV);
};


module.exports = proto.filecenter.api;

