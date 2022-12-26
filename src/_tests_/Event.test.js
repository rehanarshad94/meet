import React, { Component } from "react";
import { shallow } from 'enzyme';
import Event from '../Event';


describe('<Event /> component', () => {
    test('render more event information when button is clicked', () => {
        const EventWrapper = shallow(<Event />);
        expect(EventWrapper.find('.showData')).toHaveLength(1);
    });

    test('Hide details of event when button is clicked', () => {
        const EventWrapper = shallow(<Event />);
        expect(EventWrapper.find('#hideData')).toHaveLength(1);
    });
})