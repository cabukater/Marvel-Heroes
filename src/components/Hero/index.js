import React, { Component } from 'react'
import './styles.css'

export default class Hero extends Component {
    render() {
        return (
            <div >
                <div>
                <h2>Spiderman</h2>
                    <p>{this.props.texto}</p>
                </div>
            </div>
        )
    }
}
