
//para mapear las variables de entorno
//retorna un obj
export const EnvConfiguration = ()=>({
    enviroment: process.env.NODE_ENV || 'dev',
    monogdb:  process.env.MONGODB,
    port:  process.env.PORT ||3002,
    defaultLimit:  +process.env.DEFAULT_LIMIT || 7,
})