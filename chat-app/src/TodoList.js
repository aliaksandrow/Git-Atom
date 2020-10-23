import React, {Component} from 'react'

class TodoList extends Component {
  render() {
    return(
<form className = 'todo-data'>
{this.props.items.map(item =>
  <label>
<input
name='done'
//checked = {}
type= 'checkbox'
key= {item.id}
/> {item.text}
</label>
)}
</form>
    )
  }
}

export default TodoList
