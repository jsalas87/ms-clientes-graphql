import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Cliente } from './cliente.schema';
import { ClienteService } from './cliente.service';
import { InputType, Field } from '@nestjs/graphql';

@Resolver((of) => Cliente)
export class ClienteResolver {
  constructor(private readonly clienteService: ClienteService) {}
  @Query(() => Cliente)
    async cliente(@Args('id') id: number): Promise<Cliente> {
      return this.clienteService.findById(id);
    }
}