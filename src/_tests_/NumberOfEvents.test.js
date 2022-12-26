import React, { Component } from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    test('show number of events', () => {
        const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
        expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
    });

    test('change state of number of events', () => {
        const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
        NumberOfEventsWrapper.setState({
            query: ''
        });
        const eventObject = { target : { value: '' }};
        NumberOfEventsWrapper.find('.eventNumber').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('query')).toBe('');
    });
})
