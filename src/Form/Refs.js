import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Refs extends Component {
    constructor() {
        super();
        this.state = {
            data: ''
        }
        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
    };
    updateState(event) {
        this.setState(
            { data: event.target.value }
        );
    }
    clearInput() {
        this.setState({ data: '' });
        ReactDOM.findDOMNode(this.refs.myInput);
    }
    render() {
        return (
            <div>
                <input value={this.state.data} onChange={this.updateState} ref="myInput"/>
                <button onClick={this.clearInput}>Submit</button>
                <h3>{this.state.data}</h3>
            </div>
        );
    }


}
/*export class Refs extends Component {
    constructor(props) {
      super(props);
      // create a ref to store the textInput DOM element
      this.textInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
    }
  
    focusTextInput() {
      // Explicitly focus the text input using the raw DOM API
      // Note: we're accessing "current" to get the DOM node
      console.log(this.textInput.current);
      this.textInput.current.focus();
    }
  
    render() {
        console.log(React.createRef());
        
      // tell React that we want to associate the <input> ref
      // with the `textInput` that we created in the constructor
      return (
        <div>
          <input
            type="text"
            ref={this.textInput} />
  
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
        </div>
      );
    }
  }*/   

export default Refs;