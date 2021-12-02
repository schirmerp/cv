import React, {Component} from "react";

class Intro extends Component{
    constructor(){
        super();

        this.state ={
            name: '',
            title: '',
            profile: '',
            edit: false,

        }
    }

    handleNameChange = e => {
        this.setState({
            name: e.target.value
        })
    }
    handleTitleChange = e => {
        this.setState({
            title: e.target.value
        })
    }
    handleProfileChange = e => {
        this.setState({
            profile: e.target.value
        })
    }

    toggleEdit = () =>{
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    render(){
        const {
            name,
            title,
            profile,
            edit
        } = this.state

        return(
            <div id="intro">
                <h1>{name ? name: 'Your Name'}</h1>
                <p className="title">{title ? title : 'Your Title'}</p>
                <h2>Profile</h2>
                <p className="profile">{profile ? profile : 'Profile Information goes here .....'}</p>
                <button
                    className="edit-toggle"
                    type="button"
                    onClick={this.toggleEdit}
                >
                    Edit
                </button>

                {edit&&
                    <form id="intro-edit" className="eidt-form">
                        <label htmlFor="name">Your name</label>
                        <input
                            id="name"
                            type="text"
                            onChange={this.handleNameChange}
                        />
                        <label htmlFor="title">Your title</label>
                        <input
                            id="title"
                            type="text"
                            onChange={this.handleTitleChange}
                        /><label htmlFor="profile">Profile</label>
                        <textarea
                            id="profile"
                            onChange={this.handleProfileChange}
                        />
                        <button
                            type="button"
                            onClick={this.toggleEdit}
                        >
                            Close edit
                        </button>
                    </form>
                }
            </div>
        )
    }
}

export default Intro;