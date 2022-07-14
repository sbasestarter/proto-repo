/* eslint-disable */
// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var file_pb = require('./file_pb.js');
var share_share_pb = require('./share/share_pb.js');

function serialize_file_api_GetKVRequest(arg) {
  if (!(arg instanceof file_pb.GetKVRequest)) {
    throw new Error('Expected argument of type file.api.GetKVRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_api_GetKVRequest(buffer_arg) {
  return file_pb.GetKVRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_api_GetKVResponse(arg) {
  if (!(arg instanceof file_pb.GetKVResponse)) {
    throw new Error('Expected argument of type file.api.GetKVResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_api_GetKVResponse(buffer_arg) {
  return file_pb.GetKVResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_api_SetKVRequest(arg) {
  if (!(arg instanceof file_pb.SetKVRequest)) {
    throw new Error('Expected argument of type file.api.SetKVRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_api_SetKVRequest(buffer_arg) {
  return file_pb.SetKVRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_api_UpdateFileRequest(arg) {
  if (!(arg instanceof file_pb.UpdateFileRequest)) {
    throw new Error('Expected argument of type file.api.UpdateFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_api_UpdateFileRequest(buffer_arg) {
  return file_pb.UpdateFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_api_UpdateFileResponse(arg) {
  if (!(arg instanceof file_pb.UpdateFileResponse)) {
    throw new Error('Expected argument of type file.api.UpdateFileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_api_UpdateFileResponse(buffer_arg) {
  return file_pb.UpdateFileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_share_api_Empty(arg) {
  if (!(arg instanceof share_share_pb.Empty)) {
    throw new Error('Expected argument of type share.api.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_share_api_Empty(buffer_arg) {
  return share_share_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var FileCenterService = exports.FileCenterService = {
  updateFile: {
    path: '/file.api.FileCenter/UpdateFile',
    requestStream: false,
    responseStream: false,
    requestType: file_pb.UpdateFileRequest,
    responseType: file_pb.UpdateFileResponse,
    requestSerialize: serialize_file_api_UpdateFileRequest,
    requestDeserialize: deserialize_file_api_UpdateFileRequest,
    responseSerialize: serialize_file_api_UpdateFileResponse,
    responseDeserialize: deserialize_file_api_UpdateFileResponse,
  },
  getKV: {
    path: '/file.api.FileCenter/GetKV',
    requestStream: false,
    responseStream: false,
    requestType: file_pb.GetKVRequest,
    responseType: file_pb.GetKVResponse,
    requestSerialize: serialize_file_api_GetKVRequest,
    requestDeserialize: deserialize_file_api_GetKVRequest,
    responseSerialize: serialize_file_api_GetKVResponse,
    responseDeserialize: deserialize_file_api_GetKVResponse,
  },
  setKV: {
    path: '/file.api.FileCenter/SetKV',
    requestStream: false,
    responseStream: false,
    requestType: file_pb.SetKVRequest,
    responseType: share_share_pb.Empty,
    requestSerialize: serialize_file_api_SetKVRequest,
    requestDeserialize: deserialize_file_api_SetKVRequest,
    responseSerialize: serialize_share_api_Empty,
    responseDeserialize: deserialize_share_api_Empty,
  },
};

exports.FileCenterClient = grpc.makeGenericClientConstructor(FileCenterService);
