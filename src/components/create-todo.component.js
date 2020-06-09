import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component{

	constructor(props){
		super(props);

		this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
		this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			todo_description: "",
			todo_priority: "",
			todo_completed: false
		}
	}

	onChangeTodoDescription(e){
		this.setState({
			todo_description: e.target.value
		});
	}

	onChangeTodoPriority(e){
		this.setState({
			todo_priority: e.target.value
		});
	}

	onSubmit(e){
		e.preventDefault();

		console.log("form submitted");
		console.log(`${this.state.todo_description}`);

		const newTodo = {
			task: this.state.todo_description,
			completed: this.state.todo_completed
		};

		axios.post('http://localhost:3000/todos', newTodo).then(res => console.log(res.data));

		this.state = {
			todo_description: "",
			todo_priority: "",
			todo_completed: false
		}
	}


	render(){
		return(
			<div style={{marginTop: 20}}>
				<h3>Create New Todo</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
					<label>Description: </label>
					<input	type="text"
							className="form-control"
							value={this.state.todo_description}
							onChange={this.onChangeTodoDescription}
							/>
					</div>
					<div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
				</form>
			</div>
		)
	}
}