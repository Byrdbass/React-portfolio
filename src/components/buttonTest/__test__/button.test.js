import React from "react";
import ReactDOM from "react-dom";
import Button from './../button'

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

it('renders without crashing', () => {
    // where we write our test!
    const div = document.createElement('div');
    ReactDOM.render(<Button></Button>, div)
})

it('renders button correctly', () => {
    const {getByTestId} = render(<Button label='click test!'></Button> )
    expect(getByTestId('button')).toHaveTextContent('click test!')
})