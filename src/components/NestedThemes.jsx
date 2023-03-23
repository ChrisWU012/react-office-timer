import React from 'react'
import { Theme, Button } from 'react-daisyui'

function NestedThemes() {
    return (
        <>
            <Theme dataTheme="dark">
                <Button color="primary">Click me, dark!</Button>
            </Theme>

            <Theme dataTheme="light">
                <Button color="primary">Click me, light!</Button>
            </Theme>
        </>
    )
}

export default NestedThemes
