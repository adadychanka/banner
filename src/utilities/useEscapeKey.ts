import { useEffect } from 'react'

/**
 * Custom hook to handle escape key press
 * @param callback Function to call when escape key is pressed
 * @param enabled Whether the escape key handler is active
 */
export function useEscapeKey(callback: () => void, enabled: boolean = true) {
    useEffect(() => {
        if (!enabled) return

        const handleEscapeKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.preventDefault()
                e.stopPropagation()
                callback()
            }
        }

        document.addEventListener('keydown', handleEscapeKey)

        return () => {
            document.removeEventListener('keydown', handleEscapeKey)
        }
    }, [callback, enabled])
}
