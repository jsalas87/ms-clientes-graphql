import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { Cliente, ClienteSchema } from './cliente.schema';
import { ClienteResolver } from './cliente.resolver'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Cliente.name, schema: ClienteSchema }]),
    ],
    controllers: [ClienteController],
    providers: [ClienteService, ClienteResolver],
})
export class ClienteModule {}


// src/cliente/cliente.module.ts
