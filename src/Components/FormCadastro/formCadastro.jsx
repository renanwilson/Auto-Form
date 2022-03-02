import React, {Component} from 'react'
import './formCadastro.style.css';

class FormCadastro extends Component{
constructor(props){
  super(props);
  this.titulo= "";
  this.sub= "";
  this.texto= "";
};

_handleMudancaTitle(evento){
  evento.stopPropagation();
     this.titulo = evento.target.value
   };
  
_handleMudancaSub(evento){
  evento.stopPropagation();
    this.sub = evento.target.value
}

_handleMudancaTexto(evento){
  evento.stopPropagation();
  this.texto = evento.target.value;
};


_criarNota(evento){
  evento.preventDefault();
  evento.stopPropagation();
  this.props.criarNota( this.titulo, this.sub ,this.texto)

   }
    render(){
        return(
            <form className='rende' onSubmit={this._criarNota.bind(this)}>
            <input type='text' placeholder="titulo" className='inputy'onChange={this._handleMudancaTitle.bind(this)}/>
            <input type='text' placeholder="Coloque aqui o subtitulo" className='inputy' onChange={this._handleMudancaSub.bind(this)}/>
            <textarea placeholder= 'Escreva sua nota..' onChange={this._handleMudancaTexto.bind(this)}/>
            <button> Cria nota </button>
          </form>
        );
    }
}
export default FormCadastro; 