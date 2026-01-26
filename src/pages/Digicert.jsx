import React from 'react'
import DigicertHero from '../components/ssl/dropdowns/Digicert/DigicertHero'
import DigicertFilterBar from '../components/ssl/dropdowns/Digicert/DigicertFilterBar'
import DigicertPricingCards from '../components/ssl/dropdowns/Digicert/DigicertPricingCards'
import DigicertFaq from '../components/ssl/dropdowns/Digicert/DigicertFaq'
import DigicertBottomCTA from '../components/ssl/dropdowns/Digicert/DigicertBottomCTA'

const Digicert = () => {
  return (
    <div>
    <DigicertHero/>
    <DigicertFilterBar/>
    <DigicertPricingCards/>
    <DigicertFaq/>
    <DigicertBottomCTA/>
    </div>
  )
}

export default Digicert