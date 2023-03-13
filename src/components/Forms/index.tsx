import React from "react";
import Button from "../Button";

class Forms extends React.Component {
    render() {
        return (
            <form action="">
                <div>
                    <label htmlFor="task">
                        Add a new study
                    </label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder="What you want study?"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="time">
                        Time
                    </label>
                    <input
                        type="time"
                        step='1'
                        name="time"
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />

                </div>
                <Button />
            </form>
        )
    }
}

export default Forms