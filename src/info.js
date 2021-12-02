import React, {Component} from "react";
//import self from './src/self.jpg'
//const self = require('./self.jpg')

class Info extends Component {
    constructor(){
        super();

        this.state = {
            photo: 'https://drive.google.com/uc?id=1f3sv_fpQW5TM3kwKnNIO0UzCAteCLfsh',
            address1: '',
            address2: '',
            phone: '',
            email: '',
            page: '',
            edit: false,
            editPhoto: false
        }
    }

    handlePhotoChange = e =>{
        this.setState({
            photo: e.target.value
        })
    }
    handleAddress1Change = e =>{
        this.setState({
            address1: e.target.value
        })
    }
    handleAddress2Change = e =>{
        this.setState({
            address2: e.target.value
        })
    }
    handlePhoneChange = e =>{
        this.setState({
            phone: e.target.value
        })
    }
    handleEmailChange = e =>{
        this.setState({
            email: e.target.value
        })
    }
    handlePageChange = e =>{
        this.setState({
            page: e.target.value
        })
    }
    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }
    toggleEditPhoto = () => {
        this.setState(prevState => ({
            editPhoto: !prevState.editPhoto
        }))
    }

    render(){
        const {
            photo,
            address1,
            address2,
            phone,
            email,
            page,
            edit,
            editPhoto
        } = this.state
    

        var profilePhoto = {
            backgroundImage: 'url('+ photo +')'
        }

        return (
            <div id="info">
                <div className="header">Resume</div>
                <img
                    id="profile-photo"
                    style={profilePhoto}
                    onClick={this.toggleEditPhoto}
                    
                />
                 <div className="address">
                    <h2>Address</h2>
                    <p>{address1 ? address1 : '822 Anderson Twp'}</p>
                    <p>{address2 ? address2 : 'Cincinnati, OH. 45230'}</p>
                </div>
                <div className="phone">
                    <h2>Phone</h2>
                    <p>{phone ? phone : '513-555-1234'}</p>
                </div>
                <div className="email">
                    <h2>Email</h2>
                    <p>{email ? email : 'joey.newcode@gmail.com'}</p>
                </div>
                <div className="page">
                    <h2>Page</h2>
                    <p>{page ? page : 'joescode.com'}</p>
                </div>
                <button
                className="edit-toggle"
                type="button"
                onClick={this.toggleEdit}
                >
                    Edit
                </button>

                {edit &&
                    <form id="intro-edit" className="edit-form">
                        <label htmlFor="address1">Address</label>
                        <input
                            id="address1"
                            type="text"
                            placeholder="822 Anderson Twp"
                            onChange={this.handleAddress1Change}
                        />
                        <label htmlFor="address2">City, State. Zipcode</label>
                        <input
                            id="address2"
                            type="text"
                            placeholder="Cincinnati, OH 45230"
                            onChange={this.handleAddress2Change}
                        />
                        <label htmlFor="phone">Phone</label>
                        <input
                            id="phone"
                            type="text"
                            onChange={this.handlePhoneChange}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="text"
                            onChange={this.handleEmailChange}
                        />
                        <label htmlFor="page">Page</label>
                        <input
                            id="page"
                            type="text"
                            onChange={this.handlePageChange}
                        />
                        <button
                            type="button"
                            onClick={this.toggleEdit}
                        >
                            Close Edit
                        </button>
                    </form>
                }

                {editPhoto &&
                    <form id="photo-edit" className="edit-form">
                        <label htmlFor="photo">Photo URL</label>
                        <input
                            id="photo"
                            type="text"
                            onChange={this.handlePhotoChange}
                        />
                        <button
                            type="button"
                            onClick={this.toggleEditPhoto}
                        >
                            Close Edit
                        </button>
                    </form>

                }
            </div>
        )
    }


}

export default Info