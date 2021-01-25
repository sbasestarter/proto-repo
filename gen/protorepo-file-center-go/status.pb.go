// Code generated by protoc-gen-go. DO NOT EDIT.
// source: file-center/status.proto

package filecenterpb

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
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

type FileCenterStatus int32

const (
	FileCenterStatus_FCS_UNKNOWN FileCenterStatus = 0
	FileCenterStatus_FCS_SUCCESS FileCenterStatus = 1
	FileCenterStatus_FCS_FAILED  FileCenterStatus = 2
)

var FileCenterStatus_name = map[int32]string{
	0: "FCS_UNKNOWN",
	1: "FCS_SUCCESS",
	2: "FCS_FAILED",
}

var FileCenterStatus_value = map[string]int32{
	"FCS_UNKNOWN": 0,
	"FCS_SUCCESS": 1,
	"FCS_FAILED":  2,
}

func (x FileCenterStatus) String() string {
	return proto.EnumName(FileCenterStatus_name, int32(x))
}

func (FileCenterStatus) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_209941579231951a, []int{0}
}

type ServerStatus struct {
	Status               FileCenterStatus `protobuf:"varint,1,opt,name=status,proto3,enum=sbs.api.FileCenterStatus" json:"status,omitempty"`
	Msg                  string           `protobuf:"bytes,2,opt,name=msg,proto3" json:"msg,omitempty"`
	XXX_NoUnkeyedLiteral struct{}         `json:"-"`
	XXX_unrecognized     []byte           `json:"-"`
	XXX_sizecache        int32            `json:"-"`
}

func (m *ServerStatus) Reset()         { *m = ServerStatus{} }
func (m *ServerStatus) String() string { return proto.CompactTextString(m) }
func (*ServerStatus) ProtoMessage()    {}
func (*ServerStatus) Descriptor() ([]byte, []int) {
	return fileDescriptor_209941579231951a, []int{0}
}

func (m *ServerStatus) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ServerStatus.Unmarshal(m, b)
}
func (m *ServerStatus) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ServerStatus.Marshal(b, m, deterministic)
}
func (m *ServerStatus) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ServerStatus.Merge(m, src)
}
func (m *ServerStatus) XXX_Size() int {
	return xxx_messageInfo_ServerStatus.Size(m)
}
func (m *ServerStatus) XXX_DiscardUnknown() {
	xxx_messageInfo_ServerStatus.DiscardUnknown(m)
}

var xxx_messageInfo_ServerStatus proto.InternalMessageInfo

func (m *ServerStatus) GetStatus() FileCenterStatus {
	if m != nil {
		return m.Status
	}
	return FileCenterStatus_FCS_UNKNOWN
}

func (m *ServerStatus) GetMsg() string {
	if m != nil {
		return m.Msg
	}
	return ""
}

func init() {
	proto.RegisterEnum("sbs.api.FileCenterStatus", FileCenterStatus_name, FileCenterStatus_value)
	proto.RegisterType((*ServerStatus)(nil), "sbs.api.ServerStatus")
}

func init() { proto.RegisterFile("file-center/status.proto", fileDescriptor_209941579231951a) }

var fileDescriptor_209941579231951a = []byte{
	// 239 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x5c, 0x90, 0x41, 0x4b, 0x03, 0x31,
	0x10, 0x85, 0xdd, 0x0a, 0x15, 0xa3, 0xd4, 0x25, 0xa7, 0xf5, 0x56, 0x3c, 0x15, 0x21, 0x09, 0xea,
	0x4d, 0x4f, 0xba, 0xed, 0x82, 0x28, 0x2b, 0x34, 0x14, 0xc1, 0x8b, 0x6c, 0xca, 0x98, 0x46, 0xb6,
	0x4d, 0xc8, 0xcc, 0xfa, 0xfb, 0x25, 0xbb, 0x15, 0x8a, 0xb7, 0x79, 0xdf, 0x7c, 0x0c, 0xbc, 0x61,
	0xc5, 0x97, 0x6b, 0x41, 0xac, 0x61, 0x47, 0x10, 0x15, 0x52, 0x43, 0x1d, 0xca, 0x10, 0x3d, 0x79,
	0x7e, 0x82, 0x06, 0x65, 0x13, 0xdc, 0x95, 0x66, 0xe7, 0x1a, 0xe2, 0x0f, 0x44, 0xdd, 0xaf, 0xf9,
	0x0d, 0x1b, 0x0f, 0x62, 0x91, 0x4d, 0xb3, 0xd9, 0xe4, 0xf6, 0x52, 0xee, 0x4d, 0x59, 0xb9, 0x16,
	0xca, 0xfe, 0xd4, 0xa0, 0x2e, 0xf7, 0x22, 0xcf, 0xd9, 0xf1, 0x16, 0x6d, 0x31, 0x9a, 0x66, 0xb3,
	0xd3, 0x65, 0x1a, 0xaf, 0xe7, 0x2c, 0xff, 0x6f, 0xf3, 0x0b, 0x76, 0x56, 0x95, 0xfa, 0x73, 0x55,
	0xbf, 0xd4, 0x6f, 0xef, 0x75, 0x7e, 0xf4, 0x07, 0xf4, 0xaa, 0x2c, 0x17, 0x5a, 0xe7, 0x19, 0x9f,
	0x30, 0x96, 0x40, 0xf5, 0xf8, 0xfc, 0xba, 0x98, 0xe7, 0xa3, 0xa7, 0xf6, 0xe3, 0x7b, 0x43, 0x14,
	0xf0, 0x5e, 0x29, 0xeb, 0x68, 0xd3, 0x19, 0xb9, 0xf6, 0x5b, 0x85, 0xa6, 0x41, 0x40, 0x6a, 0x62,
	0xea, 0xd4, 0x97, 0x11, 0x11, 0x82, 0x57, 0x16, 0x76, 0x43, 0x4c, 0x49, 0x74, 0x08, 0x51, 0x58,
	0x7f, 0x40, 0x0e, 0x5e, 0x21, 0xac, 0x97, 0xd6, 0xd1, 0x43, 0x42, 0x03, 0x09, 0xc6, 0x8c, 0x7b,
	0xf5, 0xee, 0x37, 0x00, 0x00, 0xff, 0xff, 0xdf, 0x1a, 0x1b, 0x40, 0x34, 0x01, 0x00, 0x00,
}
