import React from 'react';
import TodoList from './TodoList';

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

let today = formatDate( new Date());

export class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '', priority: 0 , dueDate: today};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.handleChangePriority= this.handleChangePriority.bind(this);
      this.handleChangeDate = this.handleChangeDate.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="new-todo">
                What needs to be done?
              </label>
              <p>   </p>
              <input
                id="new-todo"
                onChange={this.handleChange}
                value={this.state.text}
                size="30"
                
              />
            </div>

            <div>
              <label htmlFor="new-todo-priority">
                Which Priority?
              </label>
              <p>   </p>
              <input
                id="new-todo-priority"
                type= "number"
                max = {5}
                min = {1}
                onChange={this.handleChangePriority}
                value={this.state.priority}
                
              />
            </div>

            <div>
              <label htmlFor="new-todo-date">
                What needs to be done?
              </label>
              <p>   </p>
              <input
                id="new-todo-date"
                onChange={this.handleChangeDate}
                value={this.state.dueDate}
                type = "date"
                min= {today}
              />
            </div>
            
            <button>
              Add #{this.state.items.length + 1}
            </button>
          </form>

          <TodoList todoList={this.state.items} />
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }

    handleChangePriority(e) {
      this.setState({ priority: e.target.value });
    }

    handleChangeDate(e) {
      this.setState({ dueDate: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        priority: this.state.priority,
        dueDate: this.state.dueDate
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    }
  }
