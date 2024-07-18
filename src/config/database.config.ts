import { MongooseModuleOptions } from '@nestjs/mongoose';

export const databaseConfig: MongooseModuleOptions = {
    uri: 'mongodb://localhost:27017/sales',
};
// src/config/database.config.ts
