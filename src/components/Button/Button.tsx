import { type HTMLAttributes, memo, type ReactNode, useMemo } from 'react'
import { cn } from '../../utilities/cn'
import styles from './Button.module.css'

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    variant: 'primary' | 'secondary'
    fullWidth?: boolean
}

function Button({
    children,
    variant,
    className,
    fullWidth,
    ...props
}: ButtonProps) {
    const variantClass = useMemo(
        () => styles[variant] || styles.primary,
        [variant]
    )

    return (
        <button
            className={cn(styles.button, variantClass, className, {
                [styles.fullWidth]: fullWidth,
            })}
            {...props}
        >
            {children}
        </button>
    )
}

export default memo(Button)
