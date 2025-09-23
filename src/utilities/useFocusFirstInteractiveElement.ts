import { useCallback, type RefObject } from 'react'

const INTERACTIVE_ELEMENTS = [
    'button',
    'a',
    'input',
    'textarea',
    'select',
    'details',
    'summary',
] as const

export function useFocusFirstInteractiveElement(
    containerRef: RefObject<HTMLElement | null>
) {
    return useCallback(() => {
        const container = containerRef.current || document.body

        const interactiveElementsSelector = INTERACTIVE_ELEMENTS.join(',')
        const firstInteractiveElement = container.querySelector(
            interactiveElementsSelector
        ) as HTMLElement | null

        if (firstInteractiveElement) {
            firstInteractiveElement.focus()
        }
    }, [containerRef])
}
