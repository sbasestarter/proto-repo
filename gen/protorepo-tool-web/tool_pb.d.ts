import * as jspb from 'google-protobuf'



export class ColorRGBA extends jspb.Message {
  getR(): number;
  setR(value: number): ColorRGBA;

  getG(): number;
  setG(value: number): ColorRGBA;

  getB(): number;
  setB(value: number): ColorRGBA;

  getA(): number;
  setA(value: number): ColorRGBA;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColorRGBA.AsObject;
  static toObject(includeInstance: boolean, msg: ColorRGBA): ColorRGBA.AsObject;
  static serializeBinaryToWriter(message: ColorRGBA, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColorRGBA;
  static deserializeBinaryFromReader(message: ColorRGBA, reader: jspb.BinaryReader): ColorRGBA;
}

export namespace ColorRGBA {
  export type AsObject = {
    r: number,
    g: number,
    b: number,
    a: number,
  }
}

export class GeneratePixelAvatarRequest extends jspb.Message {
  getSize(): number;
  setSize(value: number): GeneratePixelAvatarRequest;

  getBack(): ColorRGBA | undefined;
  setBack(value?: ColorRGBA): GeneratePixelAvatarRequest;
  hasBack(): boolean;
  clearBack(): GeneratePixelAvatarRequest;

  getFore(): ColorRGBA | undefined;
  setFore(value?: ColorRGBA): GeneratePixelAvatarRequest;
  hasFore(): boolean;
  clearFore(): GeneratePixelAvatarRequest;

  getText(): string;
  setText(value: string): GeneratePixelAvatarRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneratePixelAvatarRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GeneratePixelAvatarRequest): GeneratePixelAvatarRequest.AsObject;
  static serializeBinaryToWriter(message: GeneratePixelAvatarRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneratePixelAvatarRequest;
  static deserializeBinaryFromReader(message: GeneratePixelAvatarRequest, reader: jspb.BinaryReader): GeneratePixelAvatarRequest;
}

export namespace GeneratePixelAvatarRequest {
  export type AsObject = {
    size: number,
    back?: ColorRGBA.AsObject,
    fore?: ColorRGBA.AsObject,
    text: string,
  }
}

export class GeneratePixelAvatarResponse extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): GeneratePixelAvatarResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneratePixelAvatarResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GeneratePixelAvatarResponse): GeneratePixelAvatarResponse.AsObject;
  static serializeBinaryToWriter(message: GeneratePixelAvatarResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneratePixelAvatarResponse;
  static deserializeBinaryFromReader(message: GeneratePixelAvatarResponse, reader: jspb.BinaryReader): GeneratePixelAvatarResponse;
}

export namespace GeneratePixelAvatarResponse {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

