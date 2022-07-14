/**
 * @fileoverview gRPC-Web generated client stub for tool.api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as tool_pb from './tool_pb';


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

  methodInfoGeneratePixelAvatar = new grpcWeb.MethodDescriptor(
    '/tool.api.UserService/GeneratePixelAvatar',
    grpcWeb.MethodType.UNARY,
    tool_pb.GeneratePixelAvatarRequest,
    tool_pb.GeneratePixelAvatarResponse,
    (request: tool_pb.GeneratePixelAvatarRequest) => {
      return request.serializeBinary();
    },
    tool_pb.GeneratePixelAvatarResponse.deserializeBinary
  );

  generatePixelAvatar(
    request: tool_pb.GeneratePixelAvatarRequest,
    metadata: grpcWeb.Metadata | null): Promise<tool_pb.GeneratePixelAvatarResponse>;

  generatePixelAvatar(
    request: tool_pb.GeneratePixelAvatarRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tool_pb.GeneratePixelAvatarResponse) => void): grpcWeb.ClientReadableStream<tool_pb.GeneratePixelAvatarResponse>;

  generatePixelAvatar(
    request: tool_pb.GeneratePixelAvatarRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tool_pb.GeneratePixelAvatarResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tool.api.UserService/GeneratePixelAvatar',
        request,
        metadata || {},
        this.methodInfoGeneratePixelAvatar,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tool.api.UserService/GeneratePixelAvatar',
    request,
    metadata || {},
    this.methodInfoGeneratePixelAvatar);
  }

}

