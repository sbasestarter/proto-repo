// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.19.4
// source: tool.proto

package toolpb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type ColorRGBA struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	R uint32 `protobuf:"varint,1,opt,name=r,proto3" json:"r,omitempty"`
	G uint32 `protobuf:"varint,2,opt,name=g,proto3" json:"g,omitempty"`
	B uint32 `protobuf:"varint,3,opt,name=b,proto3" json:"b,omitempty"`
	A uint32 `protobuf:"varint,4,opt,name=a,proto3" json:"a,omitempty"`
}

func (x *ColorRGBA) Reset() {
	*x = ColorRGBA{}
	if protoimpl.UnsafeEnabled {
		mi := &file_tool_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ColorRGBA) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ColorRGBA) ProtoMessage() {}

func (x *ColorRGBA) ProtoReflect() protoreflect.Message {
	mi := &file_tool_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ColorRGBA.ProtoReflect.Descriptor instead.
func (*ColorRGBA) Descriptor() ([]byte, []int) {
	return file_tool_proto_rawDescGZIP(), []int{0}
}

func (x *ColorRGBA) GetR() uint32 {
	if x != nil {
		return x.R
	}
	return 0
}

func (x *ColorRGBA) GetG() uint32 {
	if x != nil {
		return x.G
	}
	return 0
}

func (x *ColorRGBA) GetB() uint32 {
	if x != nil {
		return x.B
	}
	return 0
}

func (x *ColorRGBA) GetA() uint32 {
	if x != nil {
		return x.A
	}
	return 0
}

type GeneratePixelAvatarRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Size uint32     `protobuf:"varint,1,opt,name=size,proto3" json:"size,omitempty"`
	Back *ColorRGBA `protobuf:"bytes,2,opt,name=back,proto3" json:"back,omitempty"`
	Fore *ColorRGBA `protobuf:"bytes,3,opt,name=fore,proto3" json:"fore,omitempty"`
	Text string     `protobuf:"bytes,4,opt,name=text,proto3" json:"text,omitempty"`
}

func (x *GeneratePixelAvatarRequest) Reset() {
	*x = GeneratePixelAvatarRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_tool_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GeneratePixelAvatarRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GeneratePixelAvatarRequest) ProtoMessage() {}

func (x *GeneratePixelAvatarRequest) ProtoReflect() protoreflect.Message {
	mi := &file_tool_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GeneratePixelAvatarRequest.ProtoReflect.Descriptor instead.
func (*GeneratePixelAvatarRequest) Descriptor() ([]byte, []int) {
	return file_tool_proto_rawDescGZIP(), []int{1}
}

func (x *GeneratePixelAvatarRequest) GetSize() uint32 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *GeneratePixelAvatarRequest) GetBack() *ColorRGBA {
	if x != nil {
		return x.Back
	}
	return nil
}

func (x *GeneratePixelAvatarRequest) GetFore() *ColorRGBA {
	if x != nil {
		return x.Fore
	}
	return nil
}

func (x *GeneratePixelAvatarRequest) GetText() string {
	if x != nil {
		return x.Text
	}
	return ""
}

type GeneratePixelAvatarResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Data []byte `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
}

func (x *GeneratePixelAvatarResponse) Reset() {
	*x = GeneratePixelAvatarResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_tool_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GeneratePixelAvatarResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GeneratePixelAvatarResponse) ProtoMessage() {}

func (x *GeneratePixelAvatarResponse) ProtoReflect() protoreflect.Message {
	mi := &file_tool_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GeneratePixelAvatarResponse.ProtoReflect.Descriptor instead.
func (*GeneratePixelAvatarResponse) Descriptor() ([]byte, []int) {
	return file_tool_proto_rawDescGZIP(), []int{2}
}

func (x *GeneratePixelAvatarResponse) GetData() []byte {
	if x != nil {
		return x.Data
	}
	return nil
}

var File_tool_proto protoreflect.FileDescriptor

var file_tool_proto_rawDesc = []byte{
	0x0a, 0x0a, 0x74, 0x6f, 0x6f, 0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x74, 0x6f,
	0x6f, 0x6c, 0x2e, 0x61, 0x70, 0x69, 0x22, 0x43, 0x0a, 0x09, 0x43, 0x6f, 0x6c, 0x6f, 0x72, 0x52,
	0x47, 0x42, 0x41, 0x12, 0x0c, 0x0a, 0x01, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x01,
	0x72, 0x12, 0x0c, 0x0a, 0x01, 0x67, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x01, 0x67, 0x12,
	0x0c, 0x0a, 0x01, 0x62, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x01, 0x62, 0x12, 0x0c, 0x0a,
	0x01, 0x61, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x01, 0x61, 0x22, 0x96, 0x01, 0x0a, 0x1a,
	0x47, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x50, 0x69, 0x78, 0x65, 0x6c, 0x41, 0x76, 0x61,
	0x74, 0x61, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x69,
	0x7a, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x12, 0x27,
	0x0a, 0x04, 0x62, 0x61, 0x63, 0x6b, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x74,
	0x6f, 0x6f, 0x6c, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x43, 0x6f, 0x6c, 0x6f, 0x72, 0x52, 0x47, 0x42,
	0x41, 0x52, 0x04, 0x62, 0x61, 0x63, 0x6b, 0x12, 0x27, 0x0a, 0x04, 0x66, 0x6f, 0x72, 0x65, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x74, 0x6f, 0x6f, 0x6c, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x43, 0x6f, 0x6c, 0x6f, 0x72, 0x52, 0x47, 0x42, 0x41, 0x52, 0x04, 0x66, 0x6f, 0x72, 0x65,
	0x12, 0x12, 0x0a, 0x04, 0x74, 0x65, 0x78, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x74, 0x65, 0x78, 0x74, 0x22, 0x31, 0x0a, 0x1b, 0x47, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65,
	0x50, 0x69, 0x78, 0x65, 0x6c, 0x41, 0x76, 0x61, 0x74, 0x61, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0c, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x32, 0x73, 0x0a, 0x0b, 0x55, 0x73, 0x65, 0x72, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x64, 0x0a, 0x13, 0x47, 0x65, 0x6e, 0x65, 0x72, 0x61,
	0x74, 0x65, 0x50, 0x69, 0x78, 0x65, 0x6c, 0x41, 0x76, 0x61, 0x74, 0x61, 0x72, 0x12, 0x24, 0x2e,
	0x74, 0x6f, 0x6f, 0x6c, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x47, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74,
	0x65, 0x50, 0x69, 0x78, 0x65, 0x6c, 0x41, 0x76, 0x61, 0x74, 0x61, 0x72, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x25, 0x2e, 0x74, 0x6f, 0x6f, 0x6c, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x47,
	0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x50, 0x69, 0x78, 0x65, 0x6c, 0x41, 0x76, 0x61, 0x74,
	0x61, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x41, 0x5a, 0x3f,
	0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x62, 0x61, 0x73, 0x65,
	0x73, 0x74, 0x61, 0x72, 0x74, 0x65, 0x72, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2d, 0x72, 0x65,
	0x70, 0x6f, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x72, 0x65, 0x70, 0x6f,
	0x2d, 0x74, 0x6f, 0x6f, 0x6c, 0x2d, 0x67, 0x6f, 0x3b, 0x74, 0x6f, 0x6f, 0x6c, 0x70, 0x62, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_tool_proto_rawDescOnce sync.Once
	file_tool_proto_rawDescData = file_tool_proto_rawDesc
)

func file_tool_proto_rawDescGZIP() []byte {
	file_tool_proto_rawDescOnce.Do(func() {
		file_tool_proto_rawDescData = protoimpl.X.CompressGZIP(file_tool_proto_rawDescData)
	})
	return file_tool_proto_rawDescData
}

var file_tool_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_tool_proto_goTypes = []interface{}{
	(*ColorRGBA)(nil),                   // 0: tool.api.ColorRGBA
	(*GeneratePixelAvatarRequest)(nil),  // 1: tool.api.GeneratePixelAvatarRequest
	(*GeneratePixelAvatarResponse)(nil), // 2: tool.api.GeneratePixelAvatarResponse
}
var file_tool_proto_depIdxs = []int32{
	0, // 0: tool.api.GeneratePixelAvatarRequest.back:type_name -> tool.api.ColorRGBA
	0, // 1: tool.api.GeneratePixelAvatarRequest.fore:type_name -> tool.api.ColorRGBA
	1, // 2: tool.api.UserService.GeneratePixelAvatar:input_type -> tool.api.GeneratePixelAvatarRequest
	2, // 3: tool.api.UserService.GeneratePixelAvatar:output_type -> tool.api.GeneratePixelAvatarResponse
	3, // [3:4] is the sub-list for method output_type
	2, // [2:3] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_tool_proto_init() }
func file_tool_proto_init() {
	if File_tool_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_tool_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ColorRGBA); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_tool_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GeneratePixelAvatarRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_tool_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GeneratePixelAvatarResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_tool_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_tool_proto_goTypes,
		DependencyIndexes: file_tool_proto_depIdxs,
		MessageInfos:      file_tool_proto_msgTypes,
	}.Build()
	File_tool_proto = out.File
	file_tool_proto_rawDesc = nil
	file_tool_proto_goTypes = nil
	file_tool_proto_depIdxs = nil
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// UserServiceClient is the client API for UserService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type UserServiceClient interface {
	GeneratePixelAvatar(ctx context.Context, in *GeneratePixelAvatarRequest, opts ...grpc.CallOption) (*GeneratePixelAvatarResponse, error)
}

type userServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewUserServiceClient(cc grpc.ClientConnInterface) UserServiceClient {
	return &userServiceClient{cc}
}

func (c *userServiceClient) GeneratePixelAvatar(ctx context.Context, in *GeneratePixelAvatarRequest, opts ...grpc.CallOption) (*GeneratePixelAvatarResponse, error) {
	out := new(GeneratePixelAvatarResponse)
	err := c.cc.Invoke(ctx, "/tool.api.UserService/GeneratePixelAvatar", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// UserServiceServer is the server API for UserService service.
type UserServiceServer interface {
	GeneratePixelAvatar(context.Context, *GeneratePixelAvatarRequest) (*GeneratePixelAvatarResponse, error)
}

// UnimplementedUserServiceServer can be embedded to have forward compatible implementations.
type UnimplementedUserServiceServer struct {
}

func (*UnimplementedUserServiceServer) GeneratePixelAvatar(context.Context, *GeneratePixelAvatarRequest) (*GeneratePixelAvatarResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GeneratePixelAvatar not implemented")
}

func RegisterUserServiceServer(s *grpc.Server, srv UserServiceServer) {
	s.RegisterService(&_UserService_serviceDesc, srv)
}

func _UserService_GeneratePixelAvatar_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GeneratePixelAvatarRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).GeneratePixelAvatar(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/tool.api.UserService/GeneratePixelAvatar",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).GeneratePixelAvatar(ctx, req.(*GeneratePixelAvatarRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _UserService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "tool.api.UserService",
	HandlerType: (*UserServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GeneratePixelAvatar",
			Handler:    _UserService_GeneratePixelAvatar_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "tool.proto",
}
