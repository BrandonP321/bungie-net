import React, { ReactElement, useState, useEffect } from 'react'
import HeaderNavLink from '../../components/HeaderNavLink'
import BorderButton from '../BorderButton'
import './index.scss'

interface Props {

}

export default function MainHeader({ }: Props): ReactElement {
    const [showBg, setShowBg] = useState<boolean>(window.pageYOffset > 50)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            // if page is scrolled more than 50px
            if (window.pageYOffset > 50) {
                setShowBg(true) // show header bg
            } else setShowBg(false) // else hide header bg
        })
    }, [])

    return (
        <header className={`main-header${showBg ? ' show-bg' : ''}`}>
            <div className='header-content-wrapper'>
                <div className='flex-items'>
                    <a href='/' className='brand' aria-label='Bungie'></a>
                    <HeaderNavLink>DESTINY 2</HeaderNavLink>
                    <HeaderNavLink>SEASONS</HeaderNavLink>
                    <HeaderNavLink>COMMUNITY</HeaderNavLink>
                    <HeaderNavLink>HELP</HeaderNavLink>
                    <HeaderNavLink>STORE</HeaderNavLink>
                </div>
                <div className='flex-items'>
                    <BorderButton
                        background='gold'
                        border='gold'
                        borderHover='white'
                        color='white'
                        style={{ marginRight: '10px' }}
                        >PLAY DESTINY 2</BorderButton>
                    <HeaderNavLink>MY ACCOUNT</HeaderNavLink>
                </div>
            </div>
        </header>
    )
}
