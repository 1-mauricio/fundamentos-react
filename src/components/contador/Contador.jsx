import './Contador.css'
import React from "react";
import Display from './Display';

export default class Contador extends React.Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }
    
    render() {
        return(
            <div>
                <h2>Contador</h2>
                <div className='Contador'>

                    <label for="passoInput">Passo </label>
                    <input type="number" value={this.state.passo} onChange={e => this.setState({passo: +e.target.value})}/>
                </div>

                <Display valor={this.state.valor}></Display>

                <div>
                    <button onClick={this.dec}>-</button>
                    <button onClick={this.inc}>+</button>
                </div>
            </div>
        )
    }
}