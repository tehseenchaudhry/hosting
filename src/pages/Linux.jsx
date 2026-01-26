import React from 'react'
import LinuxSharedHostingHero from '../components/hosting/dropdowns/linux/LinuxSharedHostingHero'
import LinuxSharedHostingPricing from '../components/hosting/dropdowns/linux/LinuxSharedHostingPricing'
import LinuxSharedHostingEconomical from '../components/hosting/dropdowns/linux/LinuxSharedHostingEconomical'
import LinuxSharedHostingWhyChoose from '../components/hosting/dropdowns/linux/LinuxSharedHostingWhyChoose'
import LinuxSharedHostingAddedValue from '../components/hosting/dropdowns/linux/LinuxSharedHostingAddedValue'
import LinuxSharedHostingFAQ from '../components/hosting/dropdowns/linux/LinuxSharedHostingFAQ'
import LinuxSharedHostingContact from '../components/hosting/dropdowns/linux/LinuxSharedHostingContact'

const Linux = () => {
  return (
    <div>
      <LinuxSharedHostingHero />
      <LinuxSharedHostingPricing/>
      <LinuxSharedHostingEconomical/>
      <LinuxSharedHostingWhyChoose/>
      <LinuxSharedHostingAddedValue/>
      <LinuxSharedHostingFAQ/>
      <LinuxSharedHostingContact/>
    </div>
  )
}

export default Linux