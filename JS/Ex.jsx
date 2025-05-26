import React from "react";
import ReactDOM from "react-dom";

class Ex extends Component {
    constructor(props) {
        super(props);
        this.state = {menu:open};
    }
    render() { 
        return(
            <div>
                <button className="btn_open" onClick={()=>setState({menu:open})}><FontAwesomeIcon icon="fa-solid fa-bars"/></button>
                <button className="btn_close" onClick={()=>setState({menu:closed})}><FontAwesomeIcon icon="fa-solid fa-xmark"/></button>
                <li>
                    <ul><a href="/index.html">home</a></ul>
                    <li><a href="/develop.html">develop</a></li>
                    <li><a href="/photo.html">photo</a></li>
                    <li><a href="/ex.html">experiment</a></li>
                </li>
            </div>
        )
    }
}

ReactDOM.render(<Ex/>,document.getElementById("hamburger"))