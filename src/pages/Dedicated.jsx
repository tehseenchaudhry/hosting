import React from 'react'
import DedicatedServersHero from '../components/hosting/dropdowns/dedicated/DedicatedServersHero'
import DedicatedServersPlans from '../components/hosting/dropdowns/dedicated/DedicatedServersPlans'
import DedicatedServersWhyChoose from '../components/hosting/dropdowns/dedicated/DedicatedServersWhyChoose'
import DedicatedServersIncluded from '../components/hosting/dropdowns/dedicated/DedicatedServersIncluded'
import DedicatedServersFAQ from '../components/hosting/dropdowns/dedicated/DedicatedServersFAQ'
import DedicatedServersCTA from '../components/hosting/dropdowns/dedicated/DedicatedServersCTA'

const Dedicated = () => {
  return (
    <div>
        <DedicatedServersHero/>
        <DedicatedServersPlans/>
        <DedicatedServersWhyChoose/>
        <DedicatedServersIncluded/>
        <DedicatedServersFAQ/>
        <DedicatedServersCTA/>
    </div>
  )
}

export default Dedicated