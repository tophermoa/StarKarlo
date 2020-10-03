import React from 'react';
import axios from 'axios';
import '../styles.css';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Loading: true
        }
        this.Datanya=this.Datanya.bind(this);
    }

    Datanya() {
        axios
          .get(
            'http://api.mapid.io/blog/get_list_docs_public/blog'
          )
          .then(response =>
            response.data.map(
              isi => ({
                title: isi.title,
                editorState: isi.editorState
              })
             
            )
          )
    
          .then(datas => {
            this.setState(
              {
                datas,
                Loading: false
              }
            );
          })
      }
    

    async componentDidMount(){
        await this.Datanya();
    }

    panggilData(){
        const fe = this.props.pindah
        const editorState = this.state.datas[fe].editorState
        const descParse = JSON.parse(editorState)
        const gbrParse = descParse.entityMap[0].data.src
        console.log(this.state.datas[fe])
        return (
            <div className="header2">
              <div className="gbrParseContainer">
                <img className="gbrParse" src={gbrParse} />
              </div>
              <div className="tulisanHeader">
                {this.state.datas[fe].title}
              </div>
            </div>
        )
    }

    render(){
        console.log(this.props.pindah)
        return(
              <header>
                {this.state.Loading ? <div>Masih Loading</div>
                 : this.panggilData()}
              </header>
        )
    }
}

export default Header;