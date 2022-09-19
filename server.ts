import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {ProtoGrpcType} from './proto/random';
import { RandomHandlers } from './proto/randomPackage/Random';


const PORT = 8000;
const PROTOFILE = './proto/random.proto';
const packageDef = protoLoader.loadSync(path.resolve(__dirname,PROTOFILE));
const grpcObj = (grpc.loadPackageDefinition(packageDef)as unknown) as ProtoGrpcType;
const randomPackage  = grpcObj.randomPackage;


function main () {
    const server  = getServer();
    server.bindAsync(`0.0.0.0:${PORT}`,grpc.ServerCredentials.createInsecure(),(err,port)=> {
        if(err) {
            console.log(err.message);
            return;
        }
        console.log(`server started on port : ${PORT}`);
        server.start();
    })
    return server;
}

function getServer() {
    const server = new grpc.Server();
    server.addService(randomPackage.Random.service, {
            "Ping" : () => {
 
            }
        } as RandomHandlers
    );
    return server;
}

main();

