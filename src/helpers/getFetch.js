
let productos=[
  {
      id:'1',
      categoria:'Chocolate',
      nombre:'Chupelatin',
      desc:'El más rico chupetín de chocolate con leche decorado con chocolate blanco y semiamargo.',
      foto: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/602/902/products/chupelatin1-20e6977e614603e90415644965566638-640-0.jpg',
      precio: "1809"
  },
  
  {
      id:'2',
      categoria:'Chocolate',
      nombre:'Paraguita',
      desc:'Delicioso chupetín a base de cacao con forma de paragüita.',
      foto: 'https://http2.mlstatic.com/D_NQ_NP_689527-MLA41546660651_042020-O.jpg',
      precio: "1229"
  },
  
  {
      id:'3',
      categoria:'Chocolate',
      nombre:'Marroc mini',
      desc:'El bombón Marroc Mini, es una forma distinta de disfrutar tu producto favorito.',
      foto: 'https://m.media-amazon.com/images/I/61MruW9hiKL._SX466_.jpg',
      precio: "4100"
      
  },
  
  
  ];
  
  export const getFetchOne = (id) =>{    
      return new Promise( (resolve, reject)=>{   
          setTimeout(()=>{
              if (id) {
                  resolve(productos.find(prod => prod.id === id))              
              } else {
                  resolve(productos)          
              }
          },2000)    
      })
  }  
  
  export const getFetch = () =>{    
      return new Promise( (resolve, reject)=>{   
          setTimeout(()=>{
              resolve(productos)   
          },2000)    
      })
  }