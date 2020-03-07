import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../App.css';
class TodoItem extends Component {

    getStyle = () =>{
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '2px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }


    render() {
        const { id, title } = this.props.todo
        return (
            <div className="Container">
                    
              <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" className="Checkbox" onChange={this.props.markComplete.bind(this,id)}/>
                    { title }
                    <button className="btnStyle" onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>  
            </div>
            
        )
    }
}
// proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default TodoItem
