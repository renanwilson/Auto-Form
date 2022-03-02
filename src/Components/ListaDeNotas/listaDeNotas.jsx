import React, { Component } from "react";
import CardNota from "../CardNota/cardNota";
import './listadeNotas.style.css'
class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista">
        {this.props.notas.map((nota, index) => {
          return (
            <li key={index} className="gradient-border">
              <CardNota titulo={nota.titulo} sub={nota.sub} texto={nota.texto}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;