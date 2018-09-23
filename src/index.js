import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import data from './quotes.json';

const quotes = [...data];
let max = quotes.length;
let min = 0;
const firstRandomNum = Math.floor(Math.random() * (max - min + 1) + min);
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: quotes[firstRandomNum]['quote'],
            author: quotes[firstRandomNum]['author']
        };
        this.newQuote = this.newQuote.bind(this);
    }
    newQuote() {
        // change code below this line
        const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
        this.setState({quote: quotes[randomNum]['quote'], author: quotes[randomNum]['author']
        })
        // change code above this line
    }
    render() {
        return (<wrapper id="quote-box">
            <div id="text">{this.state.quote}</div>
            <div id="author"></div>
            <button id="tweet-quote"></button>
            <button onClick={this.newQuote} id="new-quote">New quote</button>

        </wrapper>);
    }
};

ReactDOM.render(<App/>, document.getElementById('root'));
