import React, { Component } from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../CitySearch';
import { mockData }  from '../Mock-Data';
import { extractLocations } from '../Api';

describe('<CitySearch /> component', () => {
    test('render text output', () => {
        const CitySearchWrapper = shallow(<CitySearch locations={locations} updateEvents={() => {}} />);
        expect(CitySearchWrapper.find('.city')).toHaveLength(1);
    });

    test('render list of suggestions', () => {
        const CitySearchWrapper = shallow(<CitySearch />);
        expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
    });

    test('renders text input correctly', () => {
        const CitySearchWrapper = shallow(<CitySearch />);
        const query = CitySearchWrapper.state('query');
        expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
    });

    test('change state when text input changes', () => {
        const CitySearchWrapper = shallow(<CitySearch />);
        CitySearchWrapper.setState({
            query: 'Munich'
        });
        const eventObject = { target : { value: 'Berlin' }};
        CitySearchWrapper.find('.city').simulate('change', eventObject);
        expect(CitySearchWrapper.state('query')).toBe('Berlin');
    });

    test('render list of suggestions correctly', () => {
        const locations = extractLocations(mockData);
        const CitySearchWrapper = shallow(<CitySearch />);
        CitySearchWrapper.setState({ suggestions: locations });
        const suggestions = CitySearchWrapper.state('suggestions');
        expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(suggestions.length + 1);
        for (let i = 0; i < suggestions.length; i += 1) {
        expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i]);
      }

      test("selecting CitySearch input reveals the suggestions list", () => {
        CitySearchWrapper.find('.city').simulate('focus');
        expect(CitySearchWrapper.state('showSuggestions')).toBe(true);
        expect(CitySearchWrapper.find('.suggestions').prop('style')).not.toEqual({ display: 'none' });
      });


      test("selecting a suggestion should hide the suggestions list", () => {
        CitySearchWrapper.setState({
          query: 'Berlin',
          showSuggestions: undefined
        });
        CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
        expect(CitySearchWrapper.state('showSuggestions')).toBe(false);
        expect(CitySearchWrapper.find('.suggestions').prop('style')).toEqual({ display: 'none' });
      });
      


    });

    
})


