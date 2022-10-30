import { Document } from "mongoose";
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'

@Schema()
export class Pokemon extends Document {
    //id:string;//Mongo me lo da

    @Prop({
        unique: true,
        index:true,
    })
    name:string;
    @Prop({
        unique: true,
        index:true,
    })
    no:number;//nº pokemon
}

export const PokemonSchema = SchemaFactory.createForClass( Pokemon )