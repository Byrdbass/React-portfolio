import React from "react";
import ReactDOM from "react-dom";
import Button from './../button'

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup)
it('renders without crashing', () => {
    // where we write our test!
    const div = document.createElement('div');
    ReactDOM.render(<Button></Button>, div)
})

it('renders button correctly', () => {
    const {getByTestId} = render(<Button label='click test!' />)
    expect(getByTestId('button')).toHaveTextContent('click test!')
})

//TESTING ANOTHER ELEMENT WITH A DIFFERENT LABEL
it('renders button correctly', () => {
    const {getByTestId} = render(<Button label='save'/> )
    expect(getByTestId('button')).toHaveTextContent('save')
})