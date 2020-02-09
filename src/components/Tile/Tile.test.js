import React from 'react'
import { render } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Tile from './Tile'

describe('<Tile/> renders', () => {
    let component
    const restaurant = {
        name: 'Bob\'s burgers',
        description: 'Best burgers in town!',
        image: 'https://prod-wolt-venue-images-cdn.wolt.com/5b348b31fe8992000bbec771/2be8c7738b220df2f9a0974da5c90d90'
    }
    beforeEach(() => {
        component = render(
            <Tile restaurant={restaurant}/>
        )
    })
    test('title', () => {
        /* Container contains the html of the element */
        expect(component.container).toHaveTextContent(
            'Bob\'s burgers',
        )
    })
    test('description', () => {
        expect(component.container).toHaveTextContent(
            'Best burgers in town!',
        )
    })
    test('image', () => {
        const img = component.container.querySelector('img')
        console.log(prettyDOM(img))
        expect(img.alt.length > 0).toBeTruthy()
    })
})


