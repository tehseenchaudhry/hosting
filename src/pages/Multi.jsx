import React from 'react'
import MultiSiteHostingHero from '../components/hosting/dropdowns/multi/MultiSiteHostingHero'
import MultiSiteHostingPricing from '../components/hosting/dropdowns/multi/MultiSiteHostingPricing'
import MultiSiteHostingPromo from '../components/hosting/dropdowns/multi/MultiSiteHostingPromo'
import MultiSiteHostingWhyChoose from '../components/hosting/dropdowns/multi/MultiSiteHostingWhyChoose'
import MultiSiteHostingFAQ from '../components/hosting/dropdowns/multi/MultiSiteHostingFAQ'
import MultiSiteHostingCTA from '../components/hosting/dropdowns/multi/MultiSiteHostingCTA'

const Multi = () => {
  return (
    <div>
        <MultiSiteHostingHero/>
        <MultiSiteHostingPricing/>
        <MultiSiteHostingPromo/>
        <MultiSiteHostingWhyChoose/>
        <MultiSiteHostingFAQ/>
        <MultiSiteHostingCTA/>
    </div>
  )
}

export default Multi