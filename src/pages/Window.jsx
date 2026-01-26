import React from 'react'
import WindowsSharedHostingHero from '../components/hosting/dropdowns/window/WindowsSharedHostingHero'
import WindowsSharedHostingPricing from '../components/hosting/dropdowns/window/WindowsSharedHostingPricing'
import WindowsSharedHostingFeature from '../components/hosting/dropdowns/window/WindowsSharedHostingFeature'
import WindowsSharedHostingWhyChoose from '../components/hosting/dropdowns/window/WindowsSharedHostingWhyChoose'
import WindowsSharedHostingFAQ from '../components/hosting/dropdowns/window/WindowsSharedHostingFAQ'
import WindowsSharedHostingCTA from '../components/hosting/dropdowns/window/WindowsSharedHostingCTA'

const Window = () => {
  return (
    <div>
        <WindowsSharedHostingHero/>
        <WindowsSharedHostingPricing/>
        <WindowsSharedHostingFeature/>
        <WindowsSharedHostingWhyChoose/>
        <WindowsSharedHostingFAQ/>
        <WindowsSharedHostingCTA/>
    </div>
  )
}

export default Window