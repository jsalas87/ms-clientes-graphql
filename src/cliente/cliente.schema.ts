import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';

export type ClienteDocument = HydratedDocument<Cliente>;

@ObjectType()
@Schema()
export class Cliente {

  @Field((type) => ID)
  @Prop({ required: true })
  id: number;

  @Field()
  @Prop({ required: true })
  rut: string;

  @Field()
  @Prop({ required: true })
  razon_social: string;

  @Field()
  @Prop({ required: true })
  direccion: string

  @Field()
  @Prop({ required: true })
  telefono_principal: string
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);
/*import * as mongoose from 'mongoose';

export const ClienteSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    rut: { type: String, required: true },
    razon_social: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono_principal: { type: String, required: true },
});

export interface Cliente extends mongoose.Document {
    id: number;
    rut: string;
    razon_social: string;
    direccion: string;
    telefono_principal: string;
}

export default mongoose.model<Cliente>('Cliente', ClienteSchema);
// src/cliente/cliente.schema.ts
*/