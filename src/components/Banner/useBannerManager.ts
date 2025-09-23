import { useState } from 'react'

export function useBannerManager() {
    const [isOpen, setIsOpen] = useState(false)

    return {
        isOpen,
        setIsOpen,
    }
}
