import React, { Component } from 'react'
import './styles.scss'

export default class Hero extends Component {
    
    render() {
     console.log(this.props)   
        return (
      
<div class="card" style={{backgroundImage: `url(${this.props.image.thumbnail?.path}.${this.props.image.thumbnail?.extension})`}} >
  <div class="card__inner">
  <header class="card__header">
      <nav class="card__nav">
        <ul class="list list--nav">
          <li><a href="#">Filmes</a></li>
          <li><a href="#">Histórias</a></li>
          <li><a href="#">Cards <small>Soon</small></a></li>
        </ul>
      </nav>
    </header>
    
    <main class="card__body">
      
      <div class="card__info">
        <h1 class="card__title">{this.props.title}</h1>
    
        <p class="card__slug">.{this.props.dsc}</p>
      
      </div>
    </main>
    
    <footer class="card__footer">
    <button class="card__btn" value="Watch trailer">CONHEÇA MAIS S ESSE HERÓI</button>
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