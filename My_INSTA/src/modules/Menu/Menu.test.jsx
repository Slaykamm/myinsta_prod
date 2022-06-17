import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Menu from './Menu'
import store from '../../redux/reducers/index'
import { useState } from 'react'


test('test Menu', () => {
    render(
         
    <Provider store={store}>
        <Menu/>
    </Provider>
    )
    const copyRight = screen.getByText(/Hello world!/i)
    expect(copyRight).toBeInTheDocument()
})

