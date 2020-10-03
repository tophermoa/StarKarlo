import React from 'react';
import axios from 'axios';
import '../styles.css';
import moment from 'moment';

class Content extends React.Component{
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
                // full: isi.authors[0].user.full_name
                title: isi.title,
                link: isi.link,
                bracket: isi.bracket,
                subBracket: isi.sub_bracket,
                date: isi.date,
                authors: isi.authors[0].user,
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
        const image = this.state.datas[fe].authors.profile_picture.url_compressed
        const editorState = this.state.datas[fe].editorState
        const descParse = JSON.parse(editorState)
        const gbrParse = descParse.entityMap[0].data.src
        if(descParse.entityMap[0] == undefined){
          return(<p>{this.state.datas[fe].title} edited</p>)
        }
        const tgl = moment(this.state.datas[fe].date).format("MMM Do YYYY")
        console.log(descParse)
        return (
            <div>
              <div className="avatar">
                <div>
                  <p>
                    <img style={{
                    'borderRadius':'70%',
                    'width':'80px',
                    'height':'70px',
                    'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                    }} src={image} />
                  </p>
                </div>
                <div className="avatar1">
                  <p>{this.state.datas[fe].authors.full_name}</p>
                  <p style={{fontSize: '12px'}}>{tgl}</p>
                </div>
              </div>
              <div className="isikonten">
                <div>
                  <img src={gbrParse} style={{width: '600px',height:'300px'}} />
                </div>
                <p>
                    {descParse.blocks.map((isi)=>{
                      return(<p>{isi.text}</p>)
                    })}
                </p>
              </div>
            </div>
        )
    }
    
    render(){
        return(
            <div className="globalkonten">
                {this.state.Loading ? <p>Masih Loading</p>
                 : this.panggilData()}
            </div>
        )
    }
}

export default Content;