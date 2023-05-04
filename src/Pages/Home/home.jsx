import React from 'react'
import HeroHome from '../../Components/HeroHome/herohome.jsx'
import FeaturesHome from '../../Components/FeaturesHome/featureshome.jsx'
import './home.css'

function Home() {
    return (
        <main>
            <HeroHome />
            <FeaturesHome />
        </main>
    )
}
  
export default Home