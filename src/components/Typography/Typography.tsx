import { useMemo, type ReactNode } from 'react'
import { cn } from '../../utilities/cn'
import styles from './Typography.module.css'

const DEFAULT_COMPONENT = 'span'
const DEFAULT_VARIANT = 'body1'

export type TypographyComponent = 'p' | 'span' | 'h1' | 'h2'

export type TypographyVariant = 'h1' | 'h2' | 'body1' | 'button' | 'link'

export type TypographyProps = {
    children: ReactNode
    component?: TypographyComponent
    variant: TypographyVariant
    className?: string
}

function Typography({
    children,
    component,
    variant,
    className,
}: TypographyProps) {
    const { variantClass, Component } = useMemo(() => {
        return {
            variantClass: styles[variant] || styles[DEFAULT_VARIANT],
            Component: component || DEFAULT_COMPONENT,
        }
    }, [variant, component])

    return (
        <Component className={cn(className, variantClass)}>
            {children}
        </Component>
    )
}

export default Typography
