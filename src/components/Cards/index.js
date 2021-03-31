import React, { Component } from 'react'
import md5 from 'js-md5'
import './styles.scss'

export default class Card extends React.PureComponent  {

    static navigationOptions = {
        title: 'Heroes'
    }

    state = {
        data: []
    }

    async componentDidMount() {
        const PUBLIC_KEY = '794421a97f19aa33c8b961b598009f98';
        const PRIVATE_KEY = '1553c81b295fe0e47f9cfa1b284f43080bac185e';
        const timestamp = Number(new Date())
        const hash = md5.create()
        hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)
        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=100&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
        const responseJson = await response.json()
        this.setState({ data: responseJson.data.results })
        console.log(responseJson.data.results)
            }
      render() {
        return (
            <div className="container">
                { this.state.data.map((hero, index) => {
                            return  <div className="size-card flip-card flip-card-hover et_pb_animation_fade_in et-animated" key={}>
   <div className="size-card flip-card flip-card-hover et_pb_animation_fade_in et-animated">
        <div className="supertrunfo">
            
            <div className="supertrunfo-back supertrunfo-face">
              
                    <button>Selecione Essa Carta</button>
            </div>
          <div className="supertrunfo-front supertrunfo-face">
                
                <div className="profile-box">
                    <h4>Moisés Lope Ferreira</h4>
                 <div >
                    <img className="photo" src="https://www.lojadaspalavras.com.br/wp-content/uploads/2017/01/AAEAAQAAAAAAAAdkAAAAJDhmMzdlMDJmLTQwZGEtNDNhNS04MGE1LTlhMzFhNjZhMTI3NQ.jpg" /></div></div><div className="skill-box">
                    <div className="skill">
                        <div className="skill-name">Criatividade:</div>
                        <div className="skill-star">
                            
        </div>
                        <div className="skill-star">
                           
        </div>
                        <div className="skill-star">
                          
        </div>
                        <div className="skill-star">
                            
        </div>
                        <div className="skill-star">
                           
        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-name">Energia:</div>
                        <div className="skill-star">
                           
        </div>
                        <div className="skill-star">
                           
        </div>
                        <div className="skill-star">
                          
        </div>
                        <div className="skill-star">
                          
        </div>
                        <div className="skill-star">
                            
        </div>
                    </div>
                     <div className="skill">
                        <div className="skill-name">Nerdice:</div>
                        <div className="skill-star">
                           
        </div>
                        <div className="skill-star">
                           
        </div>
                        <div className="skill-star">
                          
        </div>
                        <div className="skill-star">
                            
        </div>
                        <div className="skill-star">

        </div>
                    </div>
            </div>
                  
                </div>
            </div>
        </div>
    </div>

                 }
              )
           }
            </div>
        )
    }
}
