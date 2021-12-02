import React, {Component} from 'react';
import Aside from './aside';
import Intro from './intro';
import Education from './education';
import Experience from './experience';


class Resume extends Component {
    render(){
        return(
            <div id="resume">
                <Aside/>
                <main>
                    <Intro/>
                    <Education/>
                    <Experience/>
                </main>
            </div>
        )
    }
}

export default Resume;