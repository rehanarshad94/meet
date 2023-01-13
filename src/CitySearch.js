import React, { Component } from 'react';

class CitySearch extends Component {

    state = {
        query: '',
        suggestions: [],
        showSuggestions: undefined
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ query: value });
    }

    handleItemClicked = (suggestion) => {
        this.setState({
          query: suggestion,
          showSuggestions: false
        });
      
        this.props.updateEvents(suggestion);
      }

    render() {

        return (
            <div className='CitySearch'>

                <input 
                    type="text" 
                    className="city" 
                    placeholder='Search for a City'
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                    onFocus={() => { this.setState({ showSuggestions: true }) }}
                    />

                {/* <ul className='suggestions'>
                    {this.state.suggestions.map((suggestion) => (
                        <li key={suggestion}>{suggestion}</li>
                    ))}
                    <li onClick={() => this.handleItemClicked("all")}>
                        <b>See all cities</b>
                    </li>
                </ul> */}

                <ul className="suggestions">
                    {this.state.suggestions.map((suggestion) => (
                        <li
                            key={suggestion}
                            onClick={() => this.handleItemClicked(suggestion)}
                            >{suggestion}</li>
                         ))}
                            <li onClick={() => this.handleItemClicked("all")}>
                                <b>See all cities</b>
                            </li>
                </ul>
                <ul className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none' }}></ul>
            </div>
        )
    }
}

export default CitySearch;