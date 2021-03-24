import React, { ReactElement } from 'react'
import HeaderPopUp from '../HeaderPopUp'
import './index.scss'

interface Props {
    children: any;
    title: string;
}

export default function HeaderNavLink({ children, title }: Props): ReactElement {
    return (
        <a className='nav-link' href='/'>
            <p>{title}</p>
            {children}
        </a>
    )
}
