import React, { Component } from 'react'
import './styles.css'

export default class Hero extends Component {

    render() {
        return (
            <div >
                <div>
                <h2>{this.props.title}</h2>
                    <p>{this.props.desc}</p>
                </div>
            </div>
        )
    }
}
