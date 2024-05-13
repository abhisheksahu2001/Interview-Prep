import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
const Home = () => {
    return (
        <div className='__Home_Container' >
            <nav className='__Home_Navigation' >
                <Link className='__Nav_Links' to="/fileExplorer" >File Explorer</Link>
            </nav>
        </div>
    )
}

export default Home