import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {

    state = {
        query: '',
        suggestions: [],
        showSuggestions: false,
        infoText:'',
    }

    // this.setState({
    //     query: suggestion,
    //     suggestions: [],
    //     showSuggestions:false,
    //     infoText:''
    //   });

    // handleInputChanged = (event) => {
    //     const value = event.target.value;
    //     this.setState({ query: value });
    // }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({showSuggestions:true});
        const suggestions = this.props.locations.filter((location) => {
          return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        if (suggestions.length === 0) {
          this.setState({
            query: value,
            infoText: 'We can not find the city you are looking for. Please try another city',
          });
        } else {
          return this.setState({
            query: value,
            suggestions,
            infoText:''
          });
        }
      };


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

                <InfoAlert text={this.state.infoText} />

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