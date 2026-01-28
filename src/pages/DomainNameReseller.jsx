import React from 'react'
import DomainNameResellerHeroSection from '../components/domainname/dropdowns/DomainNameReseller/DomainNameResellerHeroSection'
import ResellerBenefits from '../components/domainname/dropdowns/DomainNameReseller/ResellerBenefits'
import ResellerPacks from '../components/domainname/dropdowns/DomainNameReseller/ResellerPacks'
import ResellerWhyChooseGenious from '../components/domainname/dropdowns/DomainNameReseller/ResellerWhyChooseGenious'
import ResellerFAQ from '../components/domainname/dropdowns/DomainNameReseller/ResellerFAQ'
import DomainNameContactUsBlock from '../components/domainname/DomainNameContactUsBlock'

const DomainNameReseller = () => {
  return (
    <>
    <DomainNameResellerHeroSection/>
    <ResellerBenefits/>
    <ResellerPacks/>
    <ResellerWhyChooseGenious/>
    <ResellerFAQ/>
      <DomainNameContactUsBlock/>
    </>
  )
}

export default DomainNameReseller