import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import data from './quotes.json';

class App extends Component {
    render() {
        return (<div>{
                data.map(quote => <div>
                    <h1>{quote.quote}</h1>
                    <h2>{quote.author}</h2>
                </div>)
            }</div>);
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
