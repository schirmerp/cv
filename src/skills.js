import React, {Component} from "react";
import uniqid from 'uniqid';

class Skills extends Component {
    constructor(){
        super();

        this.state = {
            skill: '',
            skills: [
                {
                    id: uniqid(),
                    skill: 'Typing'
                },
                {
                    id: uniqid(),
                    skill: 'Developing'
                },
                {
                    id: uniqid(),
                    skill: 'Unit-testing'
                },
                {
                    id: uniqid(),
                    skill: 'React.js'
                },
                {
                    id: uniqid(),
                    skill: 'Vanilla.js'
                },
                {
                    id: uniqid(),
                    skill: 'CSS'
                },
                {
                    id: uniqid(),
                    skill: 'HTML'
                },
            ],
            edit: false

        }
    }

    handleSkillChange = e => {
        this.setState({
            skill: e.target.value
        })
    }

    onSubmitSkill = e =>{
        e.preventDefault();
        this.setState({
            skills: this.state.skills.concat({
                id: uniqid(),
                skill: this.state.skill
            }),
            skill: ''
        })
        this.toggleEdit()
    }

    toggleEdit = () =>{
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleRemove = key => {
        const newSKills = this.state.skills.filter(skill => skill.id !== key)

        this.setState({
            skills: newSKills
        })
    }

    render(){
        const {
            skill,
            skills,
            edit

        } = this.state;

        return (
            <div id="skills">
                <h2>Skills</h2>
                <ul>
                    {skills.map(skill => {
                        return(
                            <li key={skill.id} onClick={() => this.handleRemove(skill.id)}>{skill.skill}</li>
                        )
                    })}
                </ul>

                <button
                    className="edit-toggle"
                    type="button"
                    onClick={this.toggleEdit}
                >
                    Add
                </button>

                {edit &&
                <form id="skill-add" className="edit-form">
                    <label htmlFor="skill">Skill</label>
                    <input
                        id="skill"
                        type="text"
                        value={skill}
                        onChange={this.handleSkillChange}
                    />
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

export default Skills;