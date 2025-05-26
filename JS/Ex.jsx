import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

const element = <FontAwesomeIcon icon={byPrefixAndName.fas['house']} />

class Ex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {menu:"opne"};
    }
    render() { 
        return(
            <div>
                <button className="btn_open" onClick={()=>this.setState({menu:"open"})}><FontAwesomeIcon icon="fa-solid fa-bars"/></button>
                <button className="btn_close" onClick={()=>this.setState({menu:"closed"})}><FontAwesomeIcon icon="fa-solid fa-xmark"/></button>
                <li>
                    <ul><a href="/index.html">home</a></ul>
                    <li><a href="/develop.html">develop</a></li>
                    <li><a href="/photo.html">photo</a></li>
                    <li><a href="/ex.html">experiment</a></li>
                </li>
            </div>
        );
    }
}

ReactDOM.render(<Ex/>,document.getElementById("hamburger"));