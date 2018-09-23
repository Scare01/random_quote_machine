import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import data from './quotes.json';

const quotes = [...data];
let max = quotes.length;
let min = 0;
const firstRandomNum = Math.floor(Math.random() * (max - min + 1) + min);

const colors = [
    '#E52B50',
    '#FFBF00',
    '#9966CC',
    '#007FFF',
    '#89CFF0',
    '#DE5D83',
    '#DE3163',
    '#50C878',
    '#29AB87',
    '#29AB87',
    '#FF00FF'
];

const backgroundColor = {
    backgroundColor: colors[0]
}

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
        return (<div>
            <wrapper id="quote-box">
                <div id="text">{this.state.quote}</div>
                <div id="author">-{this.state.author}</div>
                <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a>

                <button onClick={this.newQuote} id="new-quote">New quote</button>

            </wrapper>
            <footer>by RubyLupus</footer>
        </div>);
    }
};

ReactDOM.render(<App/>, document.getElementById('root'));
