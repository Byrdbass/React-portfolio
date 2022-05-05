import React from "react";
import ReactDOM from "react-dom";
import Button from './../button'

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer'

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

it('matches snapshot 1', () =>{
    const tree = renderer.create(<Button label='save'/>).toJSON()
    expect(tree).toMatchSnapshot();
    //FIRST TIME YOU RUN THIS IT WILL CREATE A SNAPSHOT DIR WITH A JSON FILE
    // when you push the code it will keep track fo the snapshot as well - it will always check to see if there were edits made on the component
    // we can update the failing snapshot by typing 'u' in the terminal

})

it('matches snapshot 2', () =>{
    const tree = renderer.create(<Button label='click test!'/>).toJSON()
    expect(tree).toMatchSnapshot();
})