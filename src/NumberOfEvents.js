import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        query: '32'
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ query: value });
    }
    
    render() {

        return (
            <div className='numberOfEvents'>
                <h1>Number Of Events</h1>
                <input 
                    type="number" 
                    className='eventNumber'
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                    />  

            </div>
        )
    }
}

export default NumberOfEvents;
