import { IsPositive, IsString, MinLength, Min, IsInt } from "class-validator";

export class CreatePokemonDto {

    //int positivo, min 1
    @IsInt()
    @IsPositive()
    @Min(1)
    readonly  no:number;
    //isString minlengt 1
    @IsString()
    @MinLength(1)
    name:string;


}
