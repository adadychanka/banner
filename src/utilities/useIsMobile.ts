import { useEffect, useState } from 'react'
import { BREAKPOINTS } from '../theme/breakpoints'

function useIsMobile(): boolean {
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth <= BREAKPOINTS.sm
        }
        return false
    })

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= BREAKPOINTS.sm)
        }

        window.addEventListener('resize', handleResize)
        // In case of SSR hydration mismatch or resize before mount
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return isMobile
}

export default useIsMobile
