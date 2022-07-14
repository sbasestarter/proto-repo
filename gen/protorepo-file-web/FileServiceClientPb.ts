/**
 * @fileoverview gRPC-Web generated client stub for file.api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as file_pb from './file_pb';
import * as share_share_pb from './share/share_pb';


export class FileCenterClient {
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

  methodInfoUpdateFile = new grpcWeb.MethodDescriptor(
    '/file.api.FileCenter/UpdateFile',
    grpcWeb.MethodType.UNARY,
    file_pb.UpdateFileRequest,
    file_pb.UpdateFileResponse,
    (request: file_pb.UpdateFileRequest) => {
      return request.serializeBinary();
    },
    file_pb.UpdateFileResponse.deserializeBinary
  );

  updateFile(
    request: file_pb.UpdateFileRequest,
    metadata: grpcWeb.Metadata | null): Promise<file_pb.UpdateFileResponse>;

  updateFile(
    request: file_pb.UpdateFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: file_pb.UpdateFileResponse) => void): grpcWeb.ClientReadableStream<file_pb.UpdateFileResponse>;

  updateFile(
    request: file_pb.UpdateFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: file_pb.UpdateFileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/file.api.FileCenter/UpdateFile',
        request,
        metadata || {},
        this.methodInfoUpdateFile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/file.api.FileCenter/UpdateFile',
    request,
    metadata || {},
    this.methodInfoUpdateFile);
  }

  methodInfoGetKV = new grpcWeb.MethodDescriptor(
    '/file.api.FileCenter/GetKV',
    grpcWeb.MethodType.UNARY,
    file_pb.GetKVRequest,
    file_pb.GetKVResponse,
    (request: file_pb.GetKVRequest) => {
      return request.serializeBinary();
    },
    file_pb.GetKVResponse.deserializeBinary
  );

  getKV(
    request: file_pb.GetKVRequest,
    metadata: grpcWeb.Metadata | null): Promise<file_pb.GetKVResponse>;

  getKV(
    request: file_pb.GetKVRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: file_pb.GetKVResponse) => void): grpcWeb.ClientReadableStream<file_pb.GetKVResponse>;

  getKV(
    request: file_pb.GetKVRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: file_pb.GetKVResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/file.api.FileCenter/GetKV',
        request,
        metadata || {},
        this.methodInfoGetKV,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/file.api.FileCenter/GetKV',
    request,
    metadata || {},
    this.methodInfoGetKV);
  }

  methodInfoSetKV = new grpcWeb.MethodDescriptor(
    '/file.api.FileCenter/SetKV',
    grpcWeb.MethodType.UNARY,
    file_pb.SetKVRequest,
    share_share_pb.Empty,
    (request: file_pb.SetKVRequest) => {
      return request.serializeBinary();
    },
    share_share_pb.Empty.deserializeBinary
  );

  setKV(
    request: file_pb.SetKVRequest,
    metadata: grpcWeb.Metadata | null): Promise<share_share_pb.Empty>;

  setKV(
    request: file_pb.SetKVRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: share_share_pb.Empty) => void): grpcWeb.ClientReadableStream<share_share_pb.Empty>;

  setKV(
    request: file_pb.SetKVRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: share_share_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/file.api.FileCenter/SetKV',
        request,
        metadata || {},
        this.methodInfoSetKV,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/file.api.FileCenter/SetKV',
    request,
    metadata || {},
    this.methodInfoSetKV);
  }

}

