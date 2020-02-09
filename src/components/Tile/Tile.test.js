import React from 'react'
import { render } from '@testing-library/react'
import Tile from './Tile'

test('title', async () => {
    const restaurant = {
        name: 'Bob\'s burgers',
        description: 'Best burgers in town!',
        image: 'https://prod-wolt-venue-images-cdn.wolt.com/5b348b31fe8992000bbec771/2be8c7738b220df2f9a0974da5c90d90'
    }
    const component = render(
        <Tile restaurant={restaurant}/>
    )
    /* Container contains the html of the element */
    expect(component.container).toHaveTextContent(
        'Bob\'s burgers',
    )
})
