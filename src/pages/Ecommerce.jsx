import React from 'react'
import EcommerceHostingHero from '../components/hosting/dropdowns/ecommerce/EcommerceHostingHero'
import EcommerceHostingWhyChoose from '../components/hosting/dropdowns/ecommerce/EcommerceHostingWhyChoose'
import EcommerceHostingIncluded from '../components/hosting/dropdowns/ecommerce/EcommerceHostingIncluded'
import EcommerceHostingFAQ from '../components/hosting/dropdowns/ecommerce/EcommerceHostingFAQ'
import EcommerceHostingCTA from '../components/hosting/dropdowns/ecommerce/EcommerceHostingCTA'

const Ecommerce = () => {
  return (
    <div>
        <EcommerceHostingHero/>
        <EcommerceHostingWhyChoose/>
        <EcommerceHostingIncluded/>
        <EcommerceHostingFAQ/>
        <EcommerceHostingCTA/>
    </div>
  )
}

export default Ecommerce