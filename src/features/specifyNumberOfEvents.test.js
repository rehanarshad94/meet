import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');



defineFeature(feature, test => {
    let AppWrapper;
    test('32 is the number that will be default', ({ given, when, then }) => {
        given('app is loaded', () => { });

        when('user hasnt input number in textbox', () => {
            AppWrapper = mount(<App />);
        });

        then('by deafult 32 events will be shown', () => {
            expect(AppWrapper.state('eventCount')).toEqual(32);
        });
    });

    test('number of events can be changed', ({ given, when, then }) => {
        given('app is loaded', async () => {
            AppWrapper = await mount(<App />);
        });

        when('number has been inputted inside the textbox', () => {
            AppWrapper.update();
            let NumberOfEventsWrapper = AppWrapper.find('NumberOfEvents');
            const eventObject = { target: { value: 3 } };
            NumberOfEventsWrapper.find('.noe-input').simulate(
              'change',
              eventObject
            );
          }
        );

        then('only the number inputted of events will be shown', () => {
            expect(AppWrapper.find('.Event')).toHaveLength(1);
        });
    });
});