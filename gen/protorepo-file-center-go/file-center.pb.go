// Code generated by protoc-gen-go. DO NOT EDIT.
// source: file-center/file-center.proto

package filecenterpb

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

type UpdateFileRequest struct {
	FileName             string   `protobuf:"bytes,1,opt,name=file_name,json=fileName,proto3" json:"file_name,omitempty"`
	Content              []byte   `protobuf:"bytes,2,opt,name=content,proto3" json:"content,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UpdateFileRequest) Reset()         { *m = UpdateFileRequest{} }
func (m *UpdateFileRequest) String() string { return proto.CompactTextString(m) }
func (*UpdateFileRequest) ProtoMessage()    {}
func (*UpdateFileRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_5681b265c29dddbf, []int{0}
}

func (m *UpdateFileRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateFileRequest.Unmarshal(m, b)
}
func (m *UpdateFileRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateFileRequest.Marshal(b, m, deterministic)
}
func (m *UpdateFileRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateFileRequest.Merge(m, src)
}
func (m *UpdateFileRequest) XXX_Size() int {
	return xxx_messageInfo_UpdateFileRequest.Size(m)
}
func (m *UpdateFileRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateFileRequest.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateFileRequest proto.InternalMessageInfo

func (m *UpdateFileRequest) GetFileName() string {
	if m != nil {
		return m.FileName
	}
	return ""
}

func (m *UpdateFileRequest) GetContent() []byte {
	if m != nil {
		return m.Content
	}
	return nil
}

type UpdateFileResponse struct {
	Status               *ServerStatus `protobuf:"bytes,1,opt,name=status,proto3" json:"status,omitempty"`
	FileUrl              string        `protobuf:"bytes,2,opt,name=file_url,json=fileUrl,proto3" json:"file_url,omitempty"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}

func (m *UpdateFileResponse) Reset()         { *m = UpdateFileResponse{} }
func (m *UpdateFileResponse) String() string { return proto.CompactTextString(m) }
func (*UpdateFileResponse) ProtoMessage()    {}
func (*UpdateFileResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_5681b265c29dddbf, []int{1}
}

func (m *UpdateFileResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateFileResponse.Unmarshal(m, b)
}
func (m *UpdateFileResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateFileResponse.Marshal(b, m, deterministic)
}
func (m *UpdateFileResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateFileResponse.Merge(m, src)
}
func (m *UpdateFileResponse) XXX_Size() int {
	return xxx_messageInfo_UpdateFileResponse.Size(m)
}
func (m *UpdateFileResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateFileResponse.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateFileResponse proto.InternalMessageInfo

func (m *UpdateFileResponse) GetStatus() *ServerStatus {
	if m != nil {
		return m.Status
	}
	return nil
}

func (m *UpdateFileResponse) GetFileUrl() string {
	if m != nil {
		return m.FileUrl
	}
	return ""
}

func init() {
	proto.RegisterType((*UpdateFileRequest)(nil), "filecenter.api.UpdateFileRequest")
	proto.RegisterType((*UpdateFileResponse)(nil), "filecenter.api.UpdateFileResponse")
}

func init() { proto.RegisterFile("file-center/file-center.proto", fileDescriptor_5681b265c29dddbf) }

var fileDescriptor_5681b265c29dddbf = []byte{
	// 282 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x90, 0x31, 0x4f, 0xc3, 0x30,
	0x10, 0x85, 0x09, 0x43, 0x4b, 0x0e, 0x84, 0x84, 0xa7, 0x50, 0x40, 0x2a, 0x99, 0xba, 0x24, 0x91,
	0x0a, 0x13, 0x6c, 0x20, 0x31, 0x30, 0x30, 0xa4, 0xca, 0xc2, 0x52, 0x39, 0xe1, 0x48, 0x83, 0x12,
	0xdb, 0xf8, 0x2e, 0xfc, 0x7e, 0x64, 0xa7, 0xa8, 0x01, 0xa4, 0x6e, 0x79, 0x4f, 0x5f, 0xde, 0x3b,
	0x3f, 0xb8, 0x7a, 0x6f, 0x5a, 0x4c, 0x2a, 0x54, 0x8c, 0x36, 0x1b, 0x7d, 0xa7, 0xc6, 0x6a, 0xd6,
	0xe2, 0xd4, 0x59, 0x5b, 0x47, 0x9a, 0x66, 0x16, 0x8d, 0x71, 0x62, 0xc9, 0x3d, 0x0d, 0x64, 0xfc,
	0x0c, 0x67, 0x85, 0x79, 0x93, 0x8c, 0x4f, 0x4d, 0x8b, 0x39, 0x7e, 0xf6, 0x48, 0x2c, 0x2e, 0x20,
	0x74, 0x3f, 0xac, 0x95, 0xec, 0x30, 0x0a, 0xe6, 0xc1, 0x22, 0xcc, 0x8f, 0x9c, 0xf1, 0x22, 0x3b,
	0x14, 0x11, 0x4c, 0x2b, 0xad, 0x18, 0x15, 0x47, 0x87, 0xf3, 0x60, 0x71, 0x92, 0xff, 0xc8, 0x18,
	0x41, 0x8c, 0xb3, 0xc8, 0x68, 0x45, 0x28, 0x6e, 0x61, 0x32, 0x34, 0xfa, 0xa4, 0xe3, 0xe5, 0x65,
	0xfa, 0xfb, 0xb8, 0x74, 0x85, 0xf6, 0x0b, 0xed, 0xca, 0x33, 0xf9, 0x96, 0x15, 0xe7, 0xe0, 0x1b,
	0xd7, 0xbd, 0x6d, 0x7d, 0x4d, 0x98, 0x4f, 0x9d, 0x2e, 0x6c, 0xbb, 0xac, 0x00, 0x5c, 0xc1, 0xa3,
	0x4f, 0x10, 0x05, 0xc0, 0xae, 0x54, 0x5c, 0xff, 0x0d, 0xff, 0xf7, 0xb8, 0x59, 0xbc, 0x0f, 0x19,
	0x6e, 0x8e, 0x0f, 0x1e, 0xda, 0xd7, 0x8f, 0x0d, 0xb3, 0xa1, 0xbb, 0x2c, 0xab, 0x1b, 0xde, 0xf4,
	0x65, 0x5a, 0xe9, 0x2e, 0xa3, 0x52, 0x12, 0x12, 0x4b, 0xeb, 0x76, 0xf4, 0x03, 0x26, 0x16, 0x8d,
	0xce, 0x6a, 0x54, 0x83, 0x74, 0x2a, 0xe9, 0x09, 0x6d, 0x52, 0xeb, 0x91, 0x33, 0x9a, 0x3f, 0xa9,
	0x75, 0x5a, 0x37, 0x7c, 0xbf, 0x3b, 0xc2, 0x94, 0xe5, 0xc4, 0xa3, 0x37, 0xdf, 0x01, 0x00, 0x00,
	0xff, 0xff, 0x2d, 0xd7, 0xaa, 0x31, 0xd7, 0x01, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// FileCenterClient is the client API for FileCenter service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type FileCenterClient interface {
	UpdateFile(ctx context.Context, in *UpdateFileRequest, opts ...grpc.CallOption) (*UpdateFileResponse, error)
}

type fileCenterClient struct {
	cc *grpc.ClientConn
}

func NewFileCenterClient(cc *grpc.ClientConn) FileCenterClient {
	return &fileCenterClient{cc}
}

func (c *fileCenterClient) UpdateFile(ctx context.Context, in *UpdateFileRequest, opts ...grpc.CallOption) (*UpdateFileResponse, error) {
	out := new(UpdateFileResponse)
	err := c.cc.Invoke(ctx, "/filecenter.api.FileCenter/UpdateFile", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// FileCenterServer is the server API for FileCenter service.
type FileCenterServer interface {
	UpdateFile(context.Context, *UpdateFileRequest) (*UpdateFileResponse, error)
}

func RegisterFileCenterServer(s *grpc.Server, srv FileCenterServer) {
	s.RegisterService(&_FileCenter_serviceDesc, srv)
}

func _FileCenter_UpdateFile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateFileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileCenterServer).UpdateFile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/filecenter.api.FileCenter/UpdateFile",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileCenterServer).UpdateFile(ctx, req.(*UpdateFileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _FileCenter_serviceDesc = grpc.ServiceDesc{
	ServiceName: "filecenter.api.FileCenter",
	HandlerType: (*FileCenterServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "UpdateFile",
			Handler:    _FileCenter_UpdateFile_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "file-center/file-center.proto",
}
