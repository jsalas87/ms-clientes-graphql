import { Controller, Get, Param } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.schema'; // Importamos el modelo Cliente

@Controller('clientes')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) {}

    @Get(':id')
    async getClientePorId(@Param('id') id: number): Promise<Cliente> {
        return await this.clienteService.findById(id);
    }
}



// src/cliente/cliente.controller.ts
