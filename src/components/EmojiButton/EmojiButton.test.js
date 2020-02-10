import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import EmojiButton from './EmojiButton'


let component
const mockAction = jest.fn()
beforeEach(() => {
    component = render(
        <EmojiButton
            buttonAction={mockAction}
            className='imaginary-button'
            alt='test'
            body='U+1F984'
        />
    )
})
describe('a11y', () => {
    test('alt value matches className', () => {
        const div = component.container.querySelector('.imaginary-button')
        expect(div).toHaveAttribute('alt', 'test')
    })
})


describe('Functionality: ', () => {
    test('clicking button calls event handler once', () => {
        const input = component.container.querySelector('input')
        fireEvent.click(input)
        expect(mockAction.mock.calls.length).toBe(1)
    })
})



