import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from '../common/adapters/axios.adapter';


@Injectable()
export class SeedService {

 

  constructor( 
    @InjectModel( Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http:AxiosAdapter,
  
  ){}


  async executedSeed(){

    //es para limpiar la base de datos
    await this.pokemonModel.deleteMany({}) //delete * from pokemons

    const data  = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=300')

    const pokemonToInsert: {name:string, no:number} [] = [];

    data.results.forEach(({name, url}) =>{
      const segments = url.split('/')
      const no:number = +segments[segments.length - 2]
      
      // const pokemon = await this.pokemonModel.create( {name, no} );
      pokemonToInsert.push({name, no})
    });

    //una sola inserccion de golpe
    await this.pokemonModel.insertMany(pokemonToInsert);
    
    return 'Seed Executed';
  }
  
}
