import React, {Component} from "react";
import Info from './info'
import Skills from './skills';

class Aside extends Component {
    render(){
        return(
            <div id="aside">
                <Info/>
                <Skills/>
            </div>
        )
    }
}

export default Aside;