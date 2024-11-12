import React from 'react'

const Listas = () => {
    const arrayInicial =['Manzana','Mangos','Uvas'];
    const [lista,setLista] = React.useState(arrayInicial);

    const listadeObjetos = [
        {id:1, name:'Alvaro'},
        {id:2, name:'Carlos'},
        {id:3, name:'Esteven'}
        
    ]

    const [user,setUser] = React.useState(listadeObjetos)

    const agregar = ()=>{
        setUser([
            ...user,
            {id:4, name:'Martha'}
        ]
        )
    }


    
  return (
    <div>

        <h2>Listas</h2>
        <ul>
        {
        lista.map((item,index)=>(<li key={index}>{item}</li>))
        }
        </ul>

        

        <ul>
            <button className='btn btn-primary' onClick={()=>agregar()}>Agregar</button>
        </ul>


        <ul>
            {
                user.map((elemento)=>(
                    <li key={elemento.id}> 
                    {elemento.name}

                    </li>
                ) )
            }
        </ul>

    </div>
  )
}

export default Listas