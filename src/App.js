import React, {Component} from "react";
import  FormCadastro  from "./Components/FormCadastro/formCadastro.jsx";
import  ListaDeNotas  from "./Components/ListaDeNotas/listaDeNotas.jsx";
import './style/reset.css'
import './index.css'
class App extends Component {

  constructor(){
    super();
    this.state = {
      notas: []
    };
  }
  criarNota(titulo, sub ,texto){
    const novaNota = {titulo, sub ,texto }
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado);
  }
  render(){
  return (
    <div>
      <FormCadastro criarNota={this.criarNota.bind(this)}/>
      <ListaDeNotas notas={this.state.notas}/>
      </div>
  );
};
};

export default App;
