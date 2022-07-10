import * as jspb from 'google-protobuf'

import * as share_share_pb from './share/share_pb';


export class UpdateFileRequest extends jspb.Message {
  getFileName(): string;
  setFileName(value: string): UpdateFileRequest;

  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): UpdateFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFileRequest): UpdateFileRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFileRequest;
  static deserializeBinaryFromReader(message: UpdateFileRequest, reader: jspb.BinaryReader): UpdateFileRequest;
}

export namespace UpdateFileRequest {
  export type AsObject = {
    fileName: string,
    content: Uint8Array | string,
  }
}

export class UpdateFileResponse extends jspb.Message {
  getFileUrl(): string;
  setFileUrl(value: string): UpdateFileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFileResponse): UpdateFileResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFileResponse;
  static deserializeBinaryFromReader(message: UpdateFileResponse, reader: jspb.BinaryReader): UpdateFileResponse;
}

export namespace UpdateFileResponse {
  export type AsObject = {
    fileUrl: string,
  }
}

export class GetKVRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): GetKVRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKVRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKVRequest): GetKVRequest.AsObject;
  static serializeBinaryToWriter(message: GetKVRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKVRequest;
  static deserializeBinaryFromReader(message: GetKVRequest, reader: jspb.BinaryReader): GetKVRequest;
}

export namespace GetKVRequest {
  export type AsObject = {
    key: string,
  }
}

export class GetKVResponse extends jspb.Message {
  getValue(): string;
  setValue(value: string): GetKVResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKVResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetKVResponse): GetKVResponse.AsObject;
  static serializeBinaryToWriter(message: GetKVResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKVResponse;
  static deserializeBinaryFromReader(message: GetKVResponse, reader: jspb.BinaryReader): GetKVResponse;
}

export namespace GetKVResponse {
  export type AsObject = {
    value: string,
  }
}

export class SetKVRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): SetKVRequest;

  getValue(): string;
  setValue(value: string): SetKVRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetKVRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetKVRequest): SetKVRequest.AsObject;
  static serializeBinaryToWriter(message: SetKVRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetKVRequest;
  static deserializeBinaryFromReader(message: SetKVRequest, reader: jspb.BinaryReader): SetKVRequest;
}

export namespace SetKVRequest {
  export type AsObject = {
    key: string,
    value: string,
  }
}

