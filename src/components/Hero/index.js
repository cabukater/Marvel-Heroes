import React, { Component } from 'react'
import './styles.scss'

export default class Hero extends Component {
    
    render() {
     console.log(this.props)   
        return (
      
<div className="card" style={{backgroundImage: `url(${this.props.image.thumbnail?.path}.${this.props.image.thumbnail?.extension})`}} >
  <div className="card__inner">
  <header className="card__header">
      <nav className="card__nav">
        <ul className="list list--nav">
          <li><a href="#">Filmes</a></li>
          <li><a href="#">Histórias</a></li>
          <li><a href="#">Cards <small>Soon</small></a></li>
        </ul>
      </nav>
    </header>
    
    <main className="card__body">
      
      <div className="card__info">
        <h1 className="card__title">{this.props.title}</h1>
    
        <p className="card__slug">.{this.props.dsc}</p>
      
      </div>
    </main>
    
    <footer className="card__footer">
    <button className="card__btn" value="Watch trailer">CONHEÇA MAIS S ESSE HERÓI</button>
    </footer>
  </div>
</div>

        )
    }
}

/***
 * 
 *       
            <div className="Hero" >
                <div>
                <h2>{this.props.title}</h2>
                    <p>{this.props.dsc}</p>
               
                    <img  src={`${this.props.image.thumbnail?.path}.${this.props.image.thumbnail?.extension}`}/>
                    <button> Conheça mais do person
                    </button>
                </div>
            </div>

 * 
 */