import React from 'react'
import SectigoHero from '../components/ssl/dropdowns/sectigo/SectigoHero'
import SectigoFilterSection from '../components/ssl/dropdowns/sectigo/SectigoFilterSection'
import SectigoPricingCards from '../components/ssl/dropdowns/sectigo/SectigoPricingCards'
import SSLFaq from '../components/ssl/dropdowns/sectigo/SSLFaq'
import SSLBottomCTA from '../components/ssl/dropdowns/sectigo/SSLBottomCTA'

const Sectigo = () => {
  return (
    <div>
        <SectigoHero/>
        <SectigoFilterSection/>
        <SectigoPricingCards/>
        <SSLFaq/>
        <SSLBottomCTA/>
    </div>
  )
}

export default Sectigo