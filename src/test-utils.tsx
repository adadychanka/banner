import { render, type RenderOptions } from '@testing-library/react'
import { type ReactElement } from 'react'

// Custom render function that includes any providers you might need
// Currently a basic wrapper, but can be extended with context providers, etc.
const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, options)

export { customRender as render }
