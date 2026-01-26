import React from 'react'
import MonEntrepriseHero from '../components/hosting/dropdowns/mon/MonEntrepriseHero'
import MyCompanyPackSection from '../components/hosting/dropdowns/mon/MyCompanyPackSection'
import MyCompanyPricingCTA from '../components/hosting/dropdowns/mon/MyCompanyPricingCTA '
import WebsiteCreationTools from '../components/hosting/dropdowns/mon/WebsiteCreationTools'

const Mon = () => {
  return (
    <div>
        <MonEntrepriseHero/>
        <MyCompanyPackSection/>
        <WebsiteCreationTools/>
        <MyCompanyPricingCTA/>
    </div>
  )
}

export default Mon