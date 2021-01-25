/**
 * @fileoverview gRPC-Web generated client stub for sbs.api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var file$center_status_pb = require('../file-center/status_pb.js')
const proto = {};
proto.sbs = {};
proto.sbs.api = require('./file-center_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.sbs.api.FileCenterClient =
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
proto.sbs.api.FileCenterPromiseClient =
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
 *   !proto.sbs.api.UpdateFileRequest,
 *   !proto.sbs.api.UpdateFileResponse>}
 */
const methodDescriptor_FileCenter_UpdateFile = new grpc.web.MethodDescriptor(
  '/sbs.api.FileCenter/UpdateFile',
  grpc.web.MethodType.UNARY,
  proto.sbs.api.UpdateFileRequest,
  proto.sbs.api.UpdateFileResponse,
  /**
   * @param {!proto.sbs.api.UpdateFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.UpdateFileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sbs.api.UpdateFileRequest,
 *   !proto.sbs.api.UpdateFileResponse>}
 */
const methodInfo_FileCenter_UpdateFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sbs.api.UpdateFileResponse,
  /**
   * @param {!proto.sbs.api.UpdateFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.sbs.api.UpdateFileResponse.deserializeBinary
);


/**
 * @param {!proto.sbs.api.UpdateFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sbs.api.UpdateFileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sbs.api.UpdateFileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sbs.api.FileCenterClient.prototype.updateFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sbs.api.FileCenter/UpdateFile',
      request,
      metadata || {},
      methodDescriptor_FileCenter_UpdateFile,
      callback);
};


/**
 * @param {!proto.sbs.api.UpdateFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sbs.api.UpdateFileResponse>}
 *     A native promise that resolves to the response
 */
proto.sbs.api.FileCenterPromiseClient.prototype.updateFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sbs.api.FileCenter/UpdateFile',
      request,
      metadata || {},
      methodDescriptor_FileCenter_UpdateFile);
};


module.exports = proto.sbs.api;

