import React from 'react'
import DomainExtensionsHeroSection from '../components/domainname/dropdowns/Domainextensions/DomainExtensionsHeroSection'
import ChooseExtensions from '../components/domainname/dropdowns/Domainextensions/ChooseExtensions'
import DomainExtensionGenaric from '../components/domainname/dropdowns/Domainextensions/DomainExtensionGenaric'
import ExtensionsFAQ from '../components/domainname/dropdowns/Domainextensions/ExtensionsFAQ'
import DomainNameContactUsBlock from '../components/domainname/DomainNameContactUsBlock'

const DomainExtensions = () => {
  return (
    <>
    <DomainExtensionsHeroSection/> 
    <ChooseExtensions/>
    <DomainExtensionGenaric/>
    <ExtensionsFAQ/>
    <DomainNameContactUsBlock/>
    </>
  )
}

export default DomainExtensions