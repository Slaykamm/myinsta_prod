import { fireEvent, render, screen } from '@testing-library/react';
import Footer from './Footer'

test('test copyRight in Footer at all', () => {
    render(<Footer/>)
    const copyRight = screen.getByText(/Slaykam Production/i)
    expect(copyRight).toBeInTheDocument()
})

test('test email in Footer at all', () => {
    render(<Footer/>)

    const email = screen.getByText(/destpoch@mail.ru/i)
    expect(email).toBeInTheDocument()

})











