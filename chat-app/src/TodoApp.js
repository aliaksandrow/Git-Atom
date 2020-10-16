import React, {Component} from 'react'
import TodoList from './TodoList'


class TodoTest extends Component {

constructor() {
  super()
  this.state = {
    items: [],
     text: '',
     completed: false
   }
this.handleChange = this.handleChange.bind(this)
this.handleSubmit = this.handleSubmit.bind(this)
}

  handleChange(e) {
    this.setState({text: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    }
    this.setState(prevState =>({
      items: prevState.items.concat(newItem),
      text: ''
    }))
  }

  render() {
    return (
<section id = 'TodoApp'>
      <div className = 'todo-list'>
<h2>Чо сделать</h2>
<TodoList items = {this.state.items}/>
<form className = 'todo' onSubmit ={this.handleSubmit}>
<label htmlFor = 'new-todo'>
Чо ваще надо?
</label>
<input
     id='new-todo'
     placeholder = 'пиши чо надо'
     onChange = {this.handleChange}
     value = {this.state.text}
/>
<button>
     Добавь #{this.state.items.length + 1}
</button>
</form>
      </div>
      </section>
    )
  }
}

export default TodoTest
