import React from 'react'
import AntiSpamHero from '../components/mail/dropdowns/anti/AntiSpamHero'
import WhyChooseSpamExperts from '../components/mail/dropdowns/anti/WhyChooseSpamExperts'
import DiscoverSpamExpertsFeatures from '../components/mail/dropdowns/anti/DiscoverSpamExpertsFeatures'
import SpamExpertsContactCTA from '../components/mail/dropdowns/anti/SpamExpertsContactCTA '

const Anti = () => {
  return (
    <div>
        <AntiSpamHero/>
        <WhyChooseSpamExperts/>
        <DiscoverSpamExpertsFeatures/>
        <SpamExpertsContactCTA/>
    </div>
  )
}

export default Anti