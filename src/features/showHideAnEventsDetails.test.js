import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {
    let AppWrapper;
    test('Event element is collapsed by default', ({ given, when, then }) => {
        given('A collapsed event element containing events is loaded on the page', () => {});

        when('the user opens the app and performs no action', () => {
            AppWrapper = mount(<App />);
        });

        then('the event element is collapsed by default', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.Event.expanded')).toHaveLength(0);
        });
    });


     test('User expands an event to look at details', ({ given, when, then }) => {
        given('the event information has been loaded', () => {
            AppWrapper = mount(<App />);
        });

        when('a user clicks detail button in the event element', () => {
            AppWrapper.update();
            AppWrapper.find('.Event .details-button').at(0).simulate('click');
        });

        then('the event element will expand to show more details about the event', () => {
            expect(AppWrapper.find('.Event.expanded')).toHaveLength(1);
        });
    });


     test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('the event is showing the event details', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            AppWrapper.find('.Event .details-button').at(0).simulate('click');
        });

        when('the user clicks on the details button', () => {
            AppWrapper.update();
            AppWrapper.find('.Event .details-button').at(0).simulate('click');
        });

        then('the event details is collapsed', () => {
            expect(AppWrapper.find('.Event.expanded')).toHaveLength(0);
        });
    });
});