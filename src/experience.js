import { Component } from "react";
import uniqid from 'uniqid'

class Experience extends Component {
    constructor(){
        super();


        this.state ={
            company: '',
            title: '',
            startDate: '',
            endDate: '',
            desc: '',
            experience: [
                {
                    id: uniqid(),
                    company: '4WeHelp',
                    title: 'Manager',
                    date: 'Jan 2011 - Aug 2020',
                    desc: 'Responsible for all aspects of the business. Handled Payroll, Schedule and Employees. Also responsible for Job leads, supervised job completion and satisfaction. Other responseabilties included: Website(Content and Function), Office(Calls and Walk-ins), as well as warehouse(Inventory and Logistics)',

                },
                {
                    id: uniqid(),
                    company: 'Procter and Gamble',
                    title: 'CLFC and Scripting Team',
                    date: 'Jan 2008 - Dec 2010',
                    desc: 'Handeled inventory levels in 5 warehouses, and over 3,000 products for P&Gs top client(Kroger). I also was a memeber of the Scripting Team. Where I wrote code to simplify and improve processes. Had several programs implemented across the Site.',

                
                }
            ],
            edit: false
        };

    }

    handleCompanyChange = e => {
        this.setState({
            company: e.target.value
        })
    }
    handleTitleChange = e => {
        this.setState({
            title: e.target.value
        })
    }
    handleStartDateChange = e => {
        this.setState({
            startDate: e.target.value
        })
    }
    handleEndDateChange = e => {
        this.setState({
            endDate: e.target.value
        })
    }
    handleDescChange = e => {
        this.setState({
            desc: e.target.value
        })
    }
    onSubmitExperience = e =>{
        e.preventDefault();
        this.setState({
            experience: this.state.experience.concat({
                id: uniqid(),
                company: this.state.company,
                title: this.state.title,
                date: this.state.startDate + ' - ' + this.state.endDate,
                desc: this.state.desc
            }),
            company: '',
            title: '',
            startDate: '',
            endDate: '',
            desc: '',

        })
        this.toggleEdit()
    }

    toggleEdit = e =>{
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleRemove = key =>{
        const newExp = this.state.experience.filter(exp => exp.id !== key)

        this.setState({
            experience: newExp
        })
    }

    render(){
        const {
            company,
            title,
            startDate,
            endDate,
            desc,
            experience,
            edit
        }= this.state;

        return (
            <div id="experience">
                <h2>Experience</h2>
                {experience.map(exp => {
                    return(
                        <div key={exp.id} onClick={() => this.handleRemove(exp.id)}>
                            <div>
                                <p className="experience-date">{exp.date}</p>
                                <p className="experience-title">{exp.title}</p>
                            </div>
                            <div>
                                <p className="experience-company">{exp.company}</p>
                                <p className="experience-desc">{exp.desc}</p>
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
                    <form id="experience-add" className="edit-form">
                        <label htmlFor="company">Company</label>
                        <input
                            id="company"
                            type="text"
                            value={company}
                            onChange={this.handleCompanyChange}
                        />
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            type="text"
                            value={title}
                            onChange={this.handleTitleChange}
                        />
                        <label htmlFor="start-date">Start Date</label>
                        <input
                            id="start-date"
                            type="text"
                            value={startDate}
                            onChange={this.handleStartDateChange}
                        />
                        <label htmlFor="end-date">End Date</label>
                        <input
                            id="end-date"
                            type="text"
                            value={endDate}
                            onChange={this.handleEndDateChange}
                        />
                        <label htmlFor="desc">Description</label>
                        <input
                            id="desc"
                            type="text"
                            value={desc}
                            onChange={this.handleDescChange}
                        />
                        <button
                            type="button"
                            onClick={this.onSubmitExperience}
                        >
                            Add Experience
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

export default Experience;