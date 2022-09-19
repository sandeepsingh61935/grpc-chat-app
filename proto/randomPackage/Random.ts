// Original file: proto/random.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { PingRequest as _randomPackage_PingRequest, PingRequest__Output as _randomPackage_PingRequest__Output } from '../randomPackage/PingRequest';
import type { PingResponse as _randomPackage_PingResponse, PingResponse__Output as _randomPackage_PingResponse__Output } from '../randomPackage/PingResponse';

export interface RandomClient extends grpc.Client {
  Ping(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  Ping(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  Ping(argument: _randomPackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  Ping(argument: _randomPackage_PingRequest, callback: grpc.requestCallback<_randomPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _randomPackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _randomPackage_PingRequest, callback: grpc.requestCallback<_randomPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface RandomHandlers extends grpc.UntypedServiceImplementation {
  Ping: grpc.handleUnaryCall<_randomPackage_PingRequest__Output, _randomPackage_PingResponse>;
  
}

export interface RandomDefinition extends grpc.ServiceDefinition {
  Ping: MethodDefinition<_randomPackage_PingRequest, _randomPackage_PingResponse, _randomPackage_PingRequest__Output, _randomPackage_PingResponse__Output>
}
