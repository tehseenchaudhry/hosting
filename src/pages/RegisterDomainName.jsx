import React from 'react'
import RegisterDomainNameHeroSection from '../components/domainname/dropdowns/Registerdomainname/RegisterDomainNameHeroSection'
import RegisterDomianChooseDomain from '../components/domainname/dropdowns/Registerdomainname/RegisterDomianChooseDomain'
import RegisterDomainPopularDomains from '../components/domainname/dropdowns/Registerdomainname/RegisterDomainPopularDomains'
import WhyRegisterDomain from '../components/domainname/dropdowns/Registerdomainname/WhyRegisterDomain'
import RegisterDomainServicesSection from '../components/domainname/dropdowns/Registerdomainname/RegisterDomainServicesSection'
import RegisterDomainFAQ from '../components/domainname/dropdowns/Registerdomainname/RegisterDomainFAQ'
import DomainNameContactUsBlock from '../components/domainname/DomainNameContactUsBlock'

const RegisterDomainName = () => {
  return (
    <>
    <RegisterDomainNameHeroSection/>
    <RegisterDomianChooseDomain/>
    <RegisterDomainPopularDomains/>
    <WhyRegisterDomain/>
    <RegisterDomainServicesSection/>
    <RegisterDomainFAQ/>
    <DomainNameContactUsBlock/>
    </>
  )
}

export default RegisterDomainName