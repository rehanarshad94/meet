import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        query: '32',
        errorText: "",
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ query: value });
        if (value < 1 || value > 32) {
            this.setState({ errorText: "Select number from 1 to 32" });
          } else this.setState({ errorText: "" });
    }
    
    render() {

        return (
            <div className='numberOfEvents'>
                <ErrorAlert text={this.state.errorText} />
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
