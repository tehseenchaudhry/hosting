import React from 'react'
import DomainNameHeroSection from '../components/DomainName/DomainNameHeroSection'
import WhatIsADomainName from '../components/domainname/WhatIsADomainName'
import WhyChooseGenious from '../components/domainname/WhyChooseGenious'
import DomainOffers from '../components/domainname/DomainOffers'
import DomainServices from '../components/domainname/DomainServices'
import DomainNameContactUsBlock from '../components/domainname/DomainNameContactUsBlock'

const DomainName = () => {
  return (
    <>
    <DomainNameHeroSection/>
    <WhatIsADomainName/>
  <WhyChooseGenious/>
  <DomainOffers/>
  <DomainServices/>
  <DomainNameContactUsBlock/>
    </>
  )
}

export default DomainName