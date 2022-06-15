
let productos=[
    {
        id:'1',
        nombre:'jack chocolate',
        descripcion:'El más rico y tradicional chocolate ¡y con las sorpresas más divertidas Emoji!',
        stock:5,
    },
    
    {
        id:'2',
        nombre:'PARAGUITA',
        descripcion:'Delicioso chupetín a base de cacao con forma de paragüita',
        stock:5,
    },
    
    {
        id:'3',
        nombre:'CHUPELATIN',
        descripcion:'Exquisito chupetín de chocolate con leche decorado con chocolate blanco y semiamargo.',
        stock:5,
    }
    ];
    
    export const getFetch = () => {
    
        return new Promise( (resolve, reject)=>{
            setTimeout (()=>{
            resolve(productos)
            }, 3000)
        })
    }