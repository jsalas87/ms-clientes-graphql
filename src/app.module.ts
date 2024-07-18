import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import { databaseConfig } from './config/database.config';
import { ClienteModule } from './cliente/cliente.module';
import { ApolloServer } from 'apollo-server-express';
import { join } from 'path';

@Module({
    imports: [
        MongooseModule.forRoot(databaseConfig.uri),
        GraphQLModule.forRoot<ApolloDriverConfig>({
              driver: ApolloDriver,
              playground: true,
              autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        }),
        ClienteModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}




// src/app.module.ts

