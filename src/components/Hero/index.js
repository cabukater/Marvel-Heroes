import React, { Component } from 'react'
import './styles.css'

export default class Hero extends Component {
    
    render() {
     console.log(this.props)   
        return (
            
            <div className="Hero" >
                <div>
                <h2>{this.props.title}</h2>
                    <p>{this.props.dsc}</p>
                    <img src={`${this.props.image.thumbnail.path}.${this.props.image.thumbnail.extension}`} />
                    
                </div>
            </div>
        )
    }
}
