import React from 'react'
import CloudHostingHero from '../components/hosting/dropdowns/cloud/CloudHostingHero'
import CloudHostingPlans from '../components/hosting/dropdowns/cloud/CloudHostingPlans'
import WhyChooseCloudHosting from '../components/hosting/dropdowns/cloud/WhyChooseCloudHosting'
import CloudHostingValuableFeatures from '../components/hosting/dropdowns/cloud/CloudHostingValuableFeatures'
import CloudHostingFAQ from '../components/hosting/dropdowns/cloud/CloudHostingFAQ'
import CloudHostingCTA from '../components/hosting/dropdowns/cloud/CloudHostingCTA'

const Cloud = () => {
  return (
    <div>
        <CloudHostingHero/>
        <CloudHostingPlans/>
        <WhyChooseCloudHosting/>
        <CloudHostingValuableFeatures/>
        <CloudHostingFAQ/>
        <CloudHostingCTA/>
    </div>
  )
}

export default Cloud