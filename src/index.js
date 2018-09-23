import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import data from './quotes.json';

const quotes = [...data];
let max = quotes.length;
let min = 0;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quote: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // change code below this line
        const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
        this.setState({quote: quotes[randomNum]['quote']
        })
        // change code above this line
    }
    render() {
        return (<div>
            <button onClick={this.handleClick}>Click Me</button>
            <h1>{this.state.quote}</h1>

        </div>);
    }
};

ReactDOM.render(<App/>, document.getElementById('root'));
