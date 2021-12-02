
import React, { Component} from "react";
import uniqid from 'uniqid';

class Education extends Component{
    constructor(props){
        super(props);

        this.state = {
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
            gpa: '',
            education: [
                {
                    id: uniqid(),
                    school: 'Odin University',
                    degree: 'Web Development',
                    date: 'Jan 2019 - October 2021',
                    gpa: '4.0',
                }
            ],
            edit: false
        }
        
    }

    handleSchoolEdit = e =>{
        this.setState({
            school: e.target.value
        })
    }
    handleDegreeEdit = e =>{
        this.setState({
            degree: e.target.value
        })
    }
    handleStartDateEdit = e =>{
        this.setState({
            startDate: e.target.value
        })
    }
    handleEndDateEdit = e => {
        this.setState({
            endDate: e.target.value
        })
    }
    handleGpaEdit = e => {
        this.setState({
            gpa: e.target.value
        })
    }

    onSubmitEducation = e => {
        e.preventDefault();
        this.setState({
            education: this.state.education.concat({
                id: uniqid(),
                school: this.state.school,
                degree: this.state.degree,
                date: this.startDate + ' - ' + this.endDate,
                gpa: this.state.gpa
            }),
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
            gpa: '',
        })

        this.toggleEdit()
    }
    toggleEdit = () =>{
        this.setState( prevState => ({
            edit: !prevState.edit
        }))
    }

    handleRemove = key =>{
        const newEducation = this.state.education.filter(education => education.id !== key)

        this.setState({
            education: newEducation
        })
    }



    render(){
        const {
            school,
            degree,
            startDate,
            endDate,
            gpa,
            education,
            edit
        } = this.state;

        return(
            <div id="education">
                <h2>Education</h2>
                {education.map(edu =>{
                    return(
                        <div key={edu.id} onClick={() => this.handleRemove(edu.id)}>
                            <div>
                                <p className="education-date">{edu.date}</p>
                                <p className="education-degree">{edu.degree}</p>
                            </div>
                            <div>
                                <p className="education-school">{edu.school}</p>
                                <p className="education-gpa">{edu.gpa}</p>
                            </div>
                        </div>
                    )
                })}
                <button
                    className="edit-toggle"
                    type="button"
                    onClick={this.toggleEdit}
                >
                    Add
                </button>

                {edit &&
                    <form id="education-add" className="edit-form">
                        <label htmlFor="school">School</label>
                        <input
                            id="school"
                            text="text"
                            value={school}
                            onChange={this.handleSchoolEdit}
                        />
                        <label htmlFor="degree">Degree</label>
                        <input
                            id="degree"
                            text="text"
                            value={degree}
                            onChange={this.handleDegreeEdit}
                        />
                        <label htmlFor="start-date">Start Date</label>
                        <input
                            id="start-date"
                            text="text"
                            value={startDate}
                            placeholder="Month &amp; Year "
                            onChange={this.handleStartDateEdit}
                        />
                        <label htmlFor="end-date">End Date</label>
                        <input
                            id="end-date"
                            text="text"
                            value={endDate}
                            placeholder="Month &amp; Year "
                            onChange={this.handleEndDateEdit}
                        />
                        <label htmlFor="gpa">GPA</label>
                        <input
                            id="gpa"
                            text="text"
                            value={gpa}
                            onChange={this.handleGpaEdit}
                        />
                        <button 
                        type="button"
                        onClick={this.onSubmitEducation}
                        >
                            Add Education
                        </button>
                        <button 
                        type="button"
                        onClick={this.toggleEdit}
                        >
                            Close
                        </button>
                    </form>
                }
            </div>
        )
    }
}
export default Education;