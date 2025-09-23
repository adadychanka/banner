import { render, screen, act } from '@testing-library/react'
import { useRef } from 'react'
import userEvent from '@testing-library/user-event'
import { useFocusFirstInteractiveElement } from './useFocusFirstInteractiveElement'

function TestComponent({ withRef = true }: { withRef?: boolean }) {
    const ref = useRef<HTMLDivElement | null>(null)
    const focusFirst = useFocusFirstInteractiveElement(
        withRef ? ref : { current: null }
    )

    return (
        <div>
            <div ref={withRef ? ref : undefined} data-testid="container">
                <input data-testid="input1" />
                <button data-testid="button1">Button</button>
                <a href="#" data-testid="link1">
                    Link
                </a>
            </div>
            <button onClick={focusFirst} data-testid="focus-btn">
                Focus First Interactive
            </button>
        </div>
    )
}

describe('useFocusFirstInteractiveElement', () => {
    describe('when container has interactive elements', () => {
        it('should focus the first interactive element inside the container when button is clicked', async () => {
            // Arrange
            render(<TestComponent />)
            const input = screen.getByTestId('input1')
            const focusBtn = screen.getByTestId('focus-btn')

            // Blur input to ensure it is not focused initially
            ;(document.activeElement as HTMLElement)?.blur()
            expect(document.activeElement).not.toBe(input)

            // Act
            await act(async () => {
                await userEvent.click(focusBtn)
            })

            // Assert
            expect(document.activeElement).toBe(input)
        })
    })

    describe('when ref is null', () => {
        it('should focus the first interactive element in document.body when ref is null', async () => {
            // Arrange
            const fallbackButton = document.createElement('button')
            fallbackButton.textContent = 'Fallback'
            fallbackButton.setAttribute('data-testid', 'fallback-btn')
            document.body.appendChild(fallbackButton)

            render(<TestComponent withRef={false} />)
            const focusBtn = screen.getByTestId('focus-btn')

            // Blur fallbackButton to ensure it is not focused initially
            ;(document.activeElement as HTMLElement)?.blur()
            expect(document.activeElement).not.toBe(fallbackButton)

            // Act
            await act(async () => {
                await userEvent.click(focusBtn)
            })

            // Assert
            expect(document.activeElement).toBe(fallbackButton)

            // Cleanup
            document.body.removeChild(fallbackButton)
        })
    })
})
