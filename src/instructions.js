import  React, { Component } from "react";

class Instructions extends Component{
    constructor(){
        super();

        this.state = {
            instructions: true
        }
    }

    toggleInstructions = () => {
        this.setState(prevState => ({
            instructions: !prevState.instructions
        }))
    } 

    render() {
        return(
            <div>
                {this.state.instructions &&
                <div id="instructions">
                    <div className="container">
                        <h2> Instructions </h2>
                        <ul>
                            <li>Hover over and area to display edit options</li>
                            <li>Enter required info and submit the edit</li>
                            <li>When finsihed, use <code>CTRL</code> + <code>P</code> to create PDF of your CV </li>
                        </ul>

                        <button
                            type="button"
                            onClick={this.toggleInstructions}
                        >
                            Start!
                        </button>

                    </div>
                </div>
                }
            </div>
        )
    }
}


export default Instructions;