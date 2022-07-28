/* eslint-disable */
/**
 * @fileoverview gRPC-Web generated client stub for news.api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.news = {};
proto.news.api = require('./news_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.news.api.NewsServiceClient =
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
proto.news.api.NewsServicePromiseClient =
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
 *   !proto.news.api.GetNewsRequest,
 *   !proto.news.api.NewsInfo>}
 */
const methodDescriptor_NewsService_GetNews = new grpc.web.MethodDescriptor(
  '/news.api.NewsService/GetNews',
  grpc.web.MethodType.UNARY,
  proto.news.api.GetNewsRequest,
  proto.news.api.NewsInfo,
  /**
   * @param {!proto.news.api.GetNewsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.news.api.NewsInfo.deserializeBinary
);


/**
 * @param {!proto.news.api.GetNewsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.news.api.NewsInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.news.api.NewsInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.news.api.NewsServiceClient.prototype.getNews =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/news.api.NewsService/GetNews',
      request,
      metadata || {},
      methodDescriptor_NewsService_GetNews,
      callback);
};


/**
 * @param {!proto.news.api.GetNewsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.news.api.NewsInfo>}
 *     Promise that resolves to the response
 */
proto.news.api.NewsServicePromiseClient.prototype.getNews =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/news.api.NewsService/GetNews',
      request,
      metadata || {},
      methodDescriptor_NewsService_GetNews);
};


module.exports = proto.news.api;

