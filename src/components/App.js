import React from 'react'
import { render } from 'react-dom'
import SearchParams from './SearchParams'
import Header from './Header'
import '../styles.css'

function App() {
    return (
        <>
            <Header />
            <SearchParams />
        </>
    )
}

render(<App />, document.getElementById('root'))
