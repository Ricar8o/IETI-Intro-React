import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (
          //Add your code here to represent a TODO
          <div>
            <input type="checkbox" id="cbox1" value="first_checkbox"/>
            <p>   </p> 
            {this.props.text} | Priority: {this.props.priority}  | {this.props.dueDate}
          </div>
          );
        
    }

}