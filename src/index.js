import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import data from './quotes.json';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes_length: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // change code below this line
        this.setState({name: data.length})
        // change code above this line
    }
    render() {
        return (<div>
            <button onClick={this.handleClick}>Click Me</button>
            <h1>{this.state.quotes_length}</h1>
            <h1>{data.length}</h1>
        </div>);
    }
};

ReactDOM.render(<App/>, document.getElementById('root'));
