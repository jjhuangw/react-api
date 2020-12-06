import React, { Component } from 'react';
import Events from './components/events';

    class App extends Component {
      render () {
           return (
            <Events events={this.state.events} />
        )
      }
    

    state = {
        events: []
    };

   componentDidMount() {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then((data) => {
                this.setState({ events: data })
            })
            .catch(console.log)
    }
}
    export default App;
