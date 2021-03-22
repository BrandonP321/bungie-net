import React, { ReactElement } from 'react'
import './index.scss'

interface Props {
    children: string;
}

export default function HeaderNavLink({ children }: Props): ReactElement {
    return (
        <a className='nav-link' href='/'>
            <p>{children}</p>
        </a>
    )
}
