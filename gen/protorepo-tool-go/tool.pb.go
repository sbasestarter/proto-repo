// Code generated by protoc-gen-go. DO NOT EDIT.
// source: tool/tool.proto

package toolpb

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type ColorRGBA struct {
	R                    uint32   `protobuf:"varint,1,opt,name=r,proto3" json:"r,omitempty"`
	G                    uint32   `protobuf:"varint,2,opt,name=g,proto3" json:"g,omitempty"`
	B                    uint32   `protobuf:"varint,3,opt,name=b,proto3" json:"b,omitempty"`
	A                    uint32   `protobuf:"varint,4,opt,name=a,proto3" json:"a,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ColorRGBA) Reset()         { *m = ColorRGBA{} }
func (m *ColorRGBA) String() string { return proto.CompactTextString(m) }
func (*ColorRGBA) ProtoMessage()    {}
func (*ColorRGBA) Descriptor() ([]byte, []int) {
	return fileDescriptor_db3cd0d3ec75b371, []int{0}
}

func (m *ColorRGBA) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ColorRGBA.Unmarshal(m, b)
}
func (m *ColorRGBA) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ColorRGBA.Marshal(b, m, deterministic)
}
func (m *ColorRGBA) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ColorRGBA.Merge(m, src)
}
func (m *ColorRGBA) XXX_Size() int {
	return xxx_messageInfo_ColorRGBA.Size(m)
}
func (m *ColorRGBA) XXX_DiscardUnknown() {
	xxx_messageInfo_ColorRGBA.DiscardUnknown(m)
}

var xxx_messageInfo_ColorRGBA proto.InternalMessageInfo

func (m *ColorRGBA) GetR() uint32 {
	if m != nil {
		return m.R
	}
	return 0
}

func (m *ColorRGBA) GetG() uint32 {
	if m != nil {
		return m.G
	}
	return 0
}

func (m *ColorRGBA) GetB() uint32 {
	if m != nil {
		return m.B
	}
	return 0
}

func (m *ColorRGBA) GetA() uint32 {
	if m != nil {
		return m.A
	}
	return 0
}

type GeneratePixelAvatarRequest struct {
	Size                 uint32     `protobuf:"varint,1,opt,name=size,proto3" json:"size,omitempty"`
	Back                 *ColorRGBA `protobuf:"bytes,2,opt,name=back,proto3" json:"back,omitempty"`
	Fore                 *ColorRGBA `protobuf:"bytes,3,opt,name=fore,proto3" json:"fore,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *GeneratePixelAvatarRequest) Reset()         { *m = GeneratePixelAvatarRequest{} }
func (m *GeneratePixelAvatarRequest) String() string { return proto.CompactTextString(m) }
func (*GeneratePixelAvatarRequest) ProtoMessage()    {}
func (*GeneratePixelAvatarRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_db3cd0d3ec75b371, []int{1}
}

func (m *GeneratePixelAvatarRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GeneratePixelAvatarRequest.Unmarshal(m, b)
}
func (m *GeneratePixelAvatarRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GeneratePixelAvatarRequest.Marshal(b, m, deterministic)
}
func (m *GeneratePixelAvatarRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GeneratePixelAvatarRequest.Merge(m, src)
}
func (m *GeneratePixelAvatarRequest) XXX_Size() int {
	return xxx_messageInfo_GeneratePixelAvatarRequest.Size(m)
}
func (m *GeneratePixelAvatarRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GeneratePixelAvatarRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GeneratePixelAvatarRequest proto.InternalMessageInfo

func (m *GeneratePixelAvatarRequest) GetSize() uint32 {
	if m != nil {
		return m.Size
	}
	return 0
}

func (m *GeneratePixelAvatarRequest) GetBack() *ColorRGBA {
	if m != nil {
		return m.Back
	}
	return nil
}

func (m *GeneratePixelAvatarRequest) GetFore() *ColorRGBA {
	if m != nil {
		return m.Fore
	}
	return nil
}

type GeneratePixelAvatarResponse struct {
	Status               *ServerStatus `protobuf:"bytes,1,opt,name=status,proto3" json:"status,omitempty"`
	Data                 []byte        `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}

func (m *GeneratePixelAvatarResponse) Reset()         { *m = GeneratePixelAvatarResponse{} }
func (m *GeneratePixelAvatarResponse) String() string { return proto.CompactTextString(m) }
func (*GeneratePixelAvatarResponse) ProtoMessage()    {}
func (*GeneratePixelAvatarResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_db3cd0d3ec75b371, []int{2}
}

func (m *GeneratePixelAvatarResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GeneratePixelAvatarResponse.Unmarshal(m, b)
}
func (m *GeneratePixelAvatarResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GeneratePixelAvatarResponse.Marshal(b, m, deterministic)
}
func (m *GeneratePixelAvatarResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GeneratePixelAvatarResponse.Merge(m, src)
}
func (m *GeneratePixelAvatarResponse) XXX_Size() int {
	return xxx_messageInfo_GeneratePixelAvatarResponse.Size(m)
}
func (m *GeneratePixelAvatarResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GeneratePixelAvatarResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GeneratePixelAvatarResponse proto.InternalMessageInfo

func (m *GeneratePixelAvatarResponse) GetStatus() *ServerStatus {
	if m != nil {
		return m.Status
	}
	return nil
}

func (m *GeneratePixelAvatarResponse) GetData() []byte {
	if m != nil {
		return m.Data
	}
	return nil
}

func init() {
	proto.RegisterType((*ColorRGBA)(nil), "tool.api.ColorRGBA")
	proto.RegisterType((*GeneratePixelAvatarRequest)(nil), "tool.api.GeneratePixelAvatarRequest")
	proto.RegisterType((*GeneratePixelAvatarResponse)(nil), "tool.api.GeneratePixelAvatarResponse")
}

func init() { proto.RegisterFile("tool/tool.proto", fileDescriptor_db3cd0d3ec75b371) }

var fileDescriptor_db3cd0d3ec75b371 = []byte{
	// 324 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x91, 0xc1, 0x4b, 0xf3, 0x40,
	0x10, 0xc5, 0xbf, 0x7c, 0x96, 0xa2, 0xdb, 0x8a, 0xb8, 0x05, 0x09, 0xf5, 0x22, 0x41, 0xd1, 0x4b,
	0x12, 0xa8, 0x37, 0x3d, 0xb5, 0x3d, 0xf4, 0x2a, 0x29, 0x5e, 0x04, 0x91, 0xdd, 0x76, 0xdc, 0x06,
	0x6b, 0x36, 0xce, 0x4c, 0x8a, 0x78, 0xf4, 0x2f, 0x97, 0xdd, 0xad, 0xd6, 0x43, 0x8b, 0x97, 0x30,
	0xbf, 0xbc, 0xc7, 0x9b, 0xb7, 0xbb, 0xe2, 0x88, 0xad, 0x5d, 0xe6, 0xee, 0x93, 0xd5, 0x68, 0xd9,
	0xca, 0x7d, 0x3f, 0xab, 0xba, 0xec, 0x1f, 0x7b, 0x89, 0x58, 0x71, 0x43, 0x41, 0x4c, 0xc6, 0xe2,
	0x60, 0x6c, 0x97, 0x16, 0x8b, 0xc9, 0x68, 0x28, 0xbb, 0x22, 0xc2, 0x38, 0x3a, 0x8b, 0xae, 0x0e,
	0x8b, 0x08, 0x1d, 0x99, 0xf8, 0x7f, 0x20, 0xe3, 0x48, 0xc7, 0x7b, 0x81, 0xb4, 0x23, 0x15, 0xb7,
	0x02, 0xa9, 0xe4, 0x33, 0x12, 0xfd, 0x09, 0x54, 0x80, 0x8a, 0xe1, 0xae, 0x7c, 0x87, 0xe5, 0x70,
	0xa5, 0x58, 0x61, 0x01, 0x6f, 0x0d, 0x10, 0x4b, 0x29, 0x5a, 0x54, 0x7e, 0xc0, 0x3a, 0xd9, 0xcf,
	0xf2, 0x52, 0xb4, 0xb4, 0x9a, 0xbd, 0xf8, 0xfc, 0xce, 0xa0, 0x97, 0x7d, 0x77, 0xcc, 0x7e, 0xda,
	0x14, 0xde, 0xe0, 0x8c, 0xcf, 0x16, 0xc1, 0xaf, 0xde, 0x65, 0x74, 0x86, 0x44, 0x89, 0xd3, 0xad,
	0x1d, 0xa8, 0xb6, 0x15, 0x81, 0xcc, 0x44, 0x3b, 0x1c, 0xdc, 0xd7, 0xe8, 0x0c, 0x4e, 0x36, 0x49,
	0x53, 0xc0, 0x15, 0xe0, 0xd4, 0xab, 0xc5, 0xda, 0xe5, 0x4a, 0xcf, 0x15, 0x2b, 0x5f, 0xb0, 0x5b,
	0xf8, 0x79, 0x40, 0xa2, 0x73, 0x4f, 0x80, 0xce, 0x5f, 0xce, 0x40, 0xce, 0x45, 0x6f, 0xcb, 0x46,
	0x79, 0xbe, 0x49, 0xde, 0x7d, 0x29, 0xfd, 0x8b, 0x3f, 0x5c, 0xa1, 0x76, 0xf2, 0x6f, 0xf4, 0xf4,
	0xf0, 0xb8, 0x60, 0xae, 0xe9, 0x26, 0xcf, 0x4d, 0xc9, 0x8b, 0x46, 0x67, 0x33, 0xfb, 0x9a, 0x93,
	0x56, 0x04, 0xc4, 0x0a, 0x19, 0x30, 0xf7, 0x4f, 0x99, 0x22, 0xd4, 0x36, 0x37, 0x50, 0x05, 0x74,
	0x94, 0x36, 0x04, 0x98, 0x1a, 0xfb, 0xeb, 0x8f, 0x5b, 0x9a, 0x1a, 0x9b, 0x99, 0x92, 0x6f, 0xdd,
	0x5c, 0x6b, 0xdd, 0xf6, 0xea, 0xf5, 0x57, 0x00, 0x00, 0x00, 0xff, 0xff, 0x5c, 0x74, 0xd3, 0x06,
	0x39, 0x02, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// UserServiceClient is the client API for UserService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type UserServiceClient interface {
	GeneratePixelAvatar(ctx context.Context, in *GeneratePixelAvatarRequest, opts ...grpc.CallOption) (*GeneratePixelAvatarResponse, error)
}

type userServiceClient struct {
	cc *grpc.ClientConn
}

func NewUserServiceClient(cc *grpc.ClientConn) UserServiceClient {
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
	Metadata: "tool/tool.proto",
}