import React, { Component } from 'react'
import './App.scss';
import Box from './components/Box'
import Hero from './components/Hero'
/**
 *     showCard (id) {
        console.log(id)
        this.props.gettId(is);    
       
      }; 
 */

export default class App extends Component {

  state = { hero: '' }
  showCard = (HeroValue) => {
    this.setState({ hero: HeroValue });

    console.log(HeroValue)
  }

  render() {
    return (
     <>
        <div className="App">
          <div className="stage">
            <Hero title={this.state.hero.name} 
             dsc={this.state.hero.description}
             image={this.state.hero} />
            </div>
          <div className="list-cards">
            <Box id={this.showCard} />
          </div>
        </div>
      </>
    )
  }
}
