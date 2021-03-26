import React, { Component } from 'react'
import md5 from 'js-md5'
import './styles.css'

export default class Box extends React.PureComponent {

    static navigationOptions = {
        title: 'Heroes'
    };

    state = {
        data: []
    };

    async componentDidMount() {
        const PUBLIC_KEY = '794421a97f19aa33c8b961b598009f98';
        const PRIVATE_KEY = '1553c81b295fe0e47f9cfa1b284f43080bac185e'
        const timestamp = Number(new Date())
        const hash = md5.create()
        hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)
        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
        const responseJson = await response.json()
        this.setState({ data: responseJson.data.results })
        console.log(responseJson.data)
    }

    showCard (id) {
        this.props.id(id);    
      
      }; 
    
    render() {
        return (
            <>
            <h2>Conheça os novos Herois</h2>
            <hr></hr>
            <div class="container">
                
                {
                    this.state.data.map((hero, index) => {
                        return <div class="box" key={hero.id}
                        onClick={ () => this.showCard(hero)}>
                            <div className="box-img" > 
                                <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
                            </div>
                            <p>{hero.name}</p>
                        </div>
                    }
                    )
                }

            </div>
</>
        )
    }
}
