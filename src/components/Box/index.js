import React from 'react'
import md5 from 'js-md5'
import './styles.scss'
import InfiniteScroll from "react-infinite-scroll-component";

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
        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
        const responseJson = await response.json()
        this.setState({ data: responseJson.data.results })
        console.log(responseJson.data)
    }

    showCard (id) {
        this.props.id(id);    
      
      }; 

      fetchMoreData = () => {
   
        setTimeout(() => {
          this.setState({
            data: this.state.data.concat(Array.from({ length: 16 }))
          });
        }, 1500);
      };
    
    render() {
        return (
            <>
            <h4 className="title">Conheça os novos personagens</h4>
            <hr></hr>
           
            <InfiniteScroll
            dataLength={this.state.data.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.data.map((hero, index) => (
            <div  className="box" key={index}
            onClick={() => this.showCard(hero)}>

                            <div className="box-img" > 
                            <img src={`${hero?.thumbnail.path}.${hero?.thumbnail.extension}`}  alt={hero?.thumbnail.path}/>
                            </div>
                          
            </div>
          ))}
        </InfiniteScroll>

       </>
        )
    }
}
