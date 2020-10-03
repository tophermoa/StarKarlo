import React from 'react';
import '../styles.css';
import Less from '../less.png';
import Greater from '../greater.png';



class Sidebar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            menu: true
        }
        this.toogle=this.toogle.bind(this);
    }

    componentDidMount=()=>{
        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            document.getElementById("sidePanelnya").style.margin = "3px 0px 0px 0px";
          } else {
            document.getElementById("sidePanelnya").style.margin = "350px 0px 0px 0px";
          }
        }

       
    }

    toogle(){
        this.setState({menu: !this.state.menu})
    }

    render(){
        return(
            <div>
                <div>
                <div id="sidePanelnya" className="sidepanelluar">
                    {this.state.menu ? 
                    <div className="toogle" onClick={this.toogle} id="toogle"><img style={{width:"12px",height:"12px"}} src={Greater} /></div> :
                    <div>
                        <div className="toogleInside" onClick={this.toogle} id="toogle"><img style={{width:"12px",height:"12px"}} src={Less} /></div>
                            <p className="blog">BLOG</p>
                        <div className="sidepaneldalem">
                            <br/>
                            <p className="isibracket">SEMINAR & WORKSHOP</p>
                            <p className="isimenu" onClick={() => this.props.edit(5)}>Webinar E-Learning & IOT Platform Batch 2</p>
                            <p className="isimenu" onClick={() => this.props.edit(6)}>Seminar GIS PODOMORO UNIVERSITY</p>
                            <p className="isimenu" onClick={() => this.props.edit(7)}>Seminar GIS BINUS</p>
                            <p className="isimenu" onClick={() => this.props.edit(8)}>Seminar IOT UNIKOM</p>
                            <p className="isimenu" onClick={() => this.props.edit(9)}>Seminar POLBAN</p>
                            <p className="isimenu" onClick={() => this.props.edit(10)}>Seminar UNJANI</p>
                            <p className="isimenu" onClick={() => this.props.edit(11)}>Seminar ALGOMARINE</p>
                            <p className="isimenu" onClick={() => this.props.edit(13)}>Seminar Pendidikan SMK GAJAH MADA BANYUWANGI</p>
                            <br />
                            <p className="isibracket">ACHIEVEMENT</p>
                            <p className="isimenu" onClick={() => this.props.edit(1)}>Making Indonesia 4.0 By KEMENPERIN</p>
                            <p className="isimenu" onClick={() => this.props.edit(3)}>MAPID Berhasil Menjadi Salah Satu Startup Terpilih dalam MRT Accel 2020</p>
                            <p className="isimenu" onClick={() => this.props.edit(14)}>GK PLUG AND PLAY BATCH 5.0</p>
                            <p className="isimenu" onClick={() => this.props.edit(15)}>Tech in Asia Conference 2019</p>
                            <br />
                            <p className="isibracket">NEWS</p>
                            <p className="isimenu" onClick={() => this.props.edit(4)}>MAPID Bersama doctorSHARE Perangi COVID-19 dengan Memetakan Kebutuhan APD di Indonesia</p>
                            <p className="isimenu" onClick={() => this.props.edit(12)}>In Collaboration with doctorShare to Map PPE (APD) Needs with GEO MAPID</p>
                            <p className="isimenu" onClick={() => this.props.edit(16)}>MAPID Outing at DUFAN Ancol</p>
                            <p className="isimenu" onClick={() => this.props.edit(17)}>Early Warning System on Smartwatch</p>
                            <p className="isimenu" onClick={() => this.props.edit(18)}>Mapping Jakarta Flood with MAPID</p>
                            <p className="isimenu" onClick={() => this.props.edit(19)}>MAPID Featured on Kompas.com</p>
                            <p className="isimenu" onClick={() => this.props.edit(20)}>NOW MAPID as a Collaborative Mapping App to Report Bandung Flood</p>
                            <p className="isimenu" onClick={() => this.props.edit(21)}>Mapping COVID-19 Outbreak with GEO MAPID</p>
                            <br />
                            <p className="isibracket">PARTNERSHIP</p>
                            <p className="isimenu" onClick={() => this.props.edit(2)}>doctorSHARE Peta Donasi APD</p>
                            <p className="isimenu" onClick={() => this.props.edit(22)}>Infimap</p>
                            <p className="isimenu" onClick={() => this.props.edit(23)}>Mountable</p>
                            <p className="isimenu" onClick={() => this.props.edit(24)}>Algomarine </p>
                            <p className="isimenu" onClick={() => this.props.edit(25)}>POLBAN </p>
                            <p className="isimenu" onClick={() => this.props.edit(26)}>UNIKOM </p>
                            <p className="isimenu" onClick={() => this.props.edit(27)}>SMK Gajah Mada Banyuwangi</p>
                            <br />
                            <p className="isibracket">KOMPETISI MAPID</p>
                            <p className="isimenu" onClick={() => this.props.edit(0)}>Pengumuman Pemenang Kompetisi MAPID</p>
                        </div>
                    </div>
                    }
                </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;