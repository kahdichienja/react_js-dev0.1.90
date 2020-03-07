import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: '',
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.AddTodo(this.state.title)
        this.setState({title: ''})
    }
    onChange = (e)=> this.setState({ [e.target.name]: e.target.value }) 
    
    render() {
        return (
            <div>
                <form className="Form" onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        name="title" 
                        className="Input"
                        placeholder="Add Todos..." 
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    <input type="submit" value="Submit" className="btnStyle2"/>
                </form>
            </div>
        )
    }
}

export default AddTodo
