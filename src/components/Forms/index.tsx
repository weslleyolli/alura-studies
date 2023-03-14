import { time } from "console";
import React from "react";
import Button from "../Button";
import { ITask } from "../types/task";
import style from './Forms.module.scss'

class Forms extends React.Component <{
    setTask: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
    state = {
        task: '',
        time: ''
    };

    saveTask(event: React.FormEvent) {
        event.preventDefault()
        this.props.setTask(tasksOld => [...tasksOld, {...this.state }])
        
    }
    render() {
        return (
            <form className={style.newTask} onSubmit={this.saveTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Add a new study
                    </label>
                    <input
                        type="text"
                        name="task"
                        value={this.state.task}
                        onChange={event => this.setState({...this.state, task: event.target.value})}
                        id="task"
                        placeholder="What you want study?"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Time
                    </label>
                    <input
                        type="time"
                        step='1'
                        name="time"
                        value={this.state.time}
                        onChange={event => this.setState({...this.state, time: event.target.value})}
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />

                </div>
                <Button 
                    type="submit"
                    text='Add'
                />
                
            </form>
        )
    }
}

export default Forms