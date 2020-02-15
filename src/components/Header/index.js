import React from 'react'
import favicon from '../../../public/favicon.svg'

export default function Header() {
    return (
        <header>
            <img alt="favicon" className="favicon" src={favicon}/>
            <h1 className="site-name">Cheers!</h1>
        </header>
    )
}
