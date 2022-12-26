import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
    test('render information for an event', () => {
        const EventWrapper = shallow(<Event />);
        expect(EventWrapper.find(Event)).toHaveLength(1);
    })
})
