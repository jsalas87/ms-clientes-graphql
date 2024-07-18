import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cliente, ClienteDocument } from './cliente.schema'; // Importamos el modelo Cliente

@Injectable()
export class ClienteService {
    constructor(@InjectModel(Cliente.name) private readonly clienteModel: Model<ClienteDocument>) {}

    async findById(id: number): Promise<Cliente> {
        return await this.clienteModel.findOne({ id }).exec();
    }
}

// src/cliente/cliente.service.ts
