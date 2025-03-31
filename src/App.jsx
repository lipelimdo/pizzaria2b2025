import {useState} from "react"

function App (){

  

  const Formulario = (props) => {

    const [nome, setNome] = useState ('Felipe')
    return (
      <div>
        <h3>{props.titulo}</h3>
        <input className="nome"
    placeholder="Digite seu nome..."
    onChange={(e)=>{setNome(e.target.value)}}
    name="nome"
    type="text" />
    <button className="botao" onClick={
      () => { 
         if(nome.length > 0)
           alert(nome) 
         else
           alert(props.mensagem)
       
         }  
       }>
     
      CLIQUE AQUI
    </button>
      
    </div>
    )
  }

  return (
    <div>
    <h3> Pizzaria 2B</h3>
   <Formulario titulo = "Nome" mensagem = "Baleia" />
   <Formulario titulo = "E-mail" mensagem = "Sem Mundial" />
   <Formulario titulo = "CPF" mensagem = "São Paulo Futebol Clube" />
   <Formulario />
    </div>

  )

}

export default App