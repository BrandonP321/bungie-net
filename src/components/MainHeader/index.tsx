import React, { ReactElement, useState, useEffect } from 'react'
import HeaderNavLink from '../../components/HeaderNavLink'
import BorderButton from '../BorderButton'
import HeaderPopUp from '../HeaderPopUp'
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
                    <HeaderNavLink title='DESTINY 2'>
                        <HeaderPopUp>
                            <HeaderPopUp.Option
                                title='BEYOND LIGHT'
                                smallTitle='YEAR 4 EXPANSION'
                                url='#'
                                hasBottomBorder={true} />
                            <HeaderPopUp.Option
                                title='PLAY FOR FREE'
                                url='#' />
                            <HeaderPopUp.Option
                                title='SHADOWKEEP'
                                smallTitle='YEAR 3 EXPANSION'
                                url='#' />
                            <HeaderPopUp.Option
                                title='FORSAKEN'
                                smallTitle='YEAR 2 EXPANSION'
                                url='#' />
                        </HeaderPopUp>
                    </HeaderNavLink>
                    <HeaderNavLink title='SEASONS'>
                        <HeaderPopUp>
                            <HeaderPopUp.Option
                                title='SEASON OF THE CHOSEN'
                                smallTitle='CURRENT SEASON'
                                url='#'
                                hasBottomBorder={true} />
                            <HeaderPopUp.Option
                                title='PAST SEASONS'
                                url='#' />
                        </HeaderPopUp>
                    </HeaderNavLink>
                    <HeaderNavLink title='COMMUNITY'>
                        <HeaderPopUp>
                            <HeaderPopUp.Option
                                title='NEWS'
                                url='#' />
                            <HeaderPopUp.Option
                                title='MY CLAN'
                                url='#' />
                            <HeaderPopUp.Option
                                title='CLAN SEARCH'
                                url='#' />
                            <HeaderPopUp.Option
                                title='FIND FIRETEAM'
                                url='#' />
                            <HeaderPopUp.Option
                                title='FORUMS'
                                url='#' />
                            <HeaderPopUp.Option
                                title='GROUPS'
                                url='#' />
                            <HeaderPopUp.Option
                                title='CREATIONS'
                                url='#' />
                            <HeaderPopUp.Option
                                title='COMICS'
                                url='#' />
                        </HeaderPopUp>
                    </HeaderNavLink>
                    <HeaderNavLink title='HELP'>
                        <HeaderPopUp>
                            <HeaderPopUp.Option
                                title='ARTICLES'
                                url='#' />
                            <HeaderPopUp.Option
                                title='NEW PLAYER GUIDE'
                                url='#' />
                            <HeaderPopUp.Option
                                title='HELP FORUM'
                                url='#' />
                            <HeaderPopUp.Option
                                title='EVERVERSE'
                                url='#' />
                            <HeaderPopUp.Option
                                title='EVERVERSE HELP FORUM'
                                url='#' />
                        </HeaderPopUp>
                    </HeaderNavLink>
                </div>
                <div className='flex-items'>
                    <BorderButton
                        background='gold'
                        border='gold'
                        borderHover='white'
                        color='white'
                        style={{ marginRight: '10px' }}
                    >PLAY DESTINY 2</BorderButton>
                    <HeaderNavLink title='MY ACCOUNT'>
                        <HeaderPopUp>
                            <HeaderPopUp.CustomOption>
                                <div className='sign-in-title'>
                                    SIGN IN
                                </div>
                            </HeaderPopUp.CustomOption>
                            <HeaderPopUp.Option
                                title='XBOX LIVE'
                                url='#' />
                            <HeaderPopUp.Option
                                title='PLAYSTATION'
                                url='#' />
                            <HeaderPopUp.Option
                                title='STEAM'
                                url='#' />
                            <HeaderPopUp.Option
                                title='STADIA'
                                url='#' />
                            <HeaderPopUp.Option
                                title='TWITCH'
                                url='#' />
                            <HeaderPopUp.CustomOption>
                                <div className='login-btn'>
                                    <BorderButton 
                                        background='gold'
                                        border='gold'
                                        borderHover='gold'
                                        color='white'
                                        style={{ padding: '.5rem' }}
                                        >Login</BorderButton>
                                </div>
                            </HeaderPopUp.CustomOption>
                        </HeaderPopUp>
                    </HeaderNavLink>
                </div>
            </div>
        </header>
    )
}
