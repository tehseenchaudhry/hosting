import React from 'react'
import ThawteHero from '../components/ssl/dropdowns/thawte/ThawteHero'
import SSLFilterBar from '../components/ssl/dropdowns/thawte/SSLFilterBar'
import ThawteProducts from '../components/ssl/dropdowns/thawte/ThawteProducts'
import ThawteFaq from '../components/ssl/dropdowns/thawte/ThawteFaq'

const Thawte = () => {
  return (
    <div>
        <ThawteHero/>
        <SSLFilterBar/>
        <ThawteProducts/>
        <ThawteFaq/>
    </div>
  )
}

export default Thawte