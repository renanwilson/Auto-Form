import React, {Component} from 'react';
import './cardNota.style.css'
class CardNota extends Component { 
    render() { 
        return (
            <section className='cardNota'> 
              <h3> {this.props.titulo} </h3>
              <h4> {this.props.sub} </h4>
            <p> {this.props.texto} </p>
          </section>
        );
    }
}
 
export default CardNota;
