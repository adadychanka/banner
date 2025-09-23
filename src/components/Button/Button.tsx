import { type HTMLAttributes, memo, type ReactNode, useMemo } from 'react'
import { cn } from '../../utilities/cn'
import styles from './Button.module.css'

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    variant: 'primary' | 'secondary'
}

function Button({ children, variant, className, ...props }: ButtonProps) {
    const variantClass = useMemo(
        () => styles[variant] || styles.primary,
        [variant]
    )

    return (
        <button
            className={cn(styles.button, variantClass, className)}
            {...props}
        >
            {children}
        </button>
    )
}

export default memo(Button)
