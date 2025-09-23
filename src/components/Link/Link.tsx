import { memo, type AnchorHTMLAttributes, type ReactNode } from 'react'
import styles from './Link.module.css'
import { cn } from '../../utilities/cn'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode
}

function Link({ href, children, className, ...props }: LinkProps) {
    return (
        <a
            href={href}
            className={cn(styles.link, className)}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        >
            {children}
        </a>
    )
}

export default memo(Link)
