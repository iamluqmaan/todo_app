import React, { Component } from 'react'

export default class AddTodo extends Component {
    state={
        content: ''
    }

    handleChange = (e)=>{
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content : ''
        })
    }
  render() {
    return (
      <div className='mt-6'>
        <form onSubmit={this.handleSubmit}>
            <input className=' w-[300px] bg-none text-red-700 outline-none border-b-2 border-teal-700' onChange={this.handleChange} value={this.state.content} placeholder='Add todo' />
        </form>
      </div>
    )
  }
}
