import { renderHook } from '@testing-library/react'
import { useEscapeKey } from './useEscapeKey'

describe('useEscapeKey', () => {
    let addEventListenerSpy: jest.SpyInstance
    let removeEventListenerSpy: jest.SpyInstance

    beforeEach(() => {
        addEventListenerSpy = jest.spyOn(document, 'addEventListener')
        removeEventListenerSpy = jest.spyOn(document, 'removeEventListener')
    })

    afterEach(() => {
        addEventListenerSpy.mockRestore()
        removeEventListenerSpy.mockRestore()
    })

    it('calls the callback when Escape key is pressed', () => {
        const callback = jest.fn()
        renderHook(() => useEscapeKey(callback, true))

        const event = new KeyboardEvent('keydown', { key: 'Escape' })
        document.dispatchEvent(event)

        expect(callback).toHaveBeenCalledTimes(1)
    })

    it('does not call the callback when a different key is pressed', () => {
        const callback = jest.fn()
        renderHook(() => useEscapeKey(callback, true))

        const event = new KeyboardEvent('keydown', { key: 'Enter' })
        document.dispatchEvent(event)

        expect(callback).not.toHaveBeenCalled()
    })

    it('does not call the callback when disabled', () => {
        const callback = jest.fn()
        renderHook(() => useEscapeKey(callback, false))

        const event = new KeyboardEvent('keydown', { key: 'Escape' })
        document.dispatchEvent(event)

        expect(callback).not.toHaveBeenCalled()
    })
})
