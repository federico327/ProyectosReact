
let productos = [
    {
        id: '1',
        nombre: 'chupelatin',
        descripcion: 'chocolate',
        stock: 5,
    },
    {
        id: '2',
        nombre: 'moneda de oro',
        descripcion: 'chocolate',
        stock: 5,
    },
    {
        id: '3',
        nombre: 'paleta',
        descripcion: 'caramelo',
        stock: 5,
    },
    {
        id: '4',
        nombre: 'paraguita',
        descripcion: 'chocolate',
        stock: 5, 
    },
];

export const getFetch = () =>{

    return new promise ( (resolve,reject)=>{
        setTimeout(()=>{
            resolve(productos)
        },2000)
    })
}