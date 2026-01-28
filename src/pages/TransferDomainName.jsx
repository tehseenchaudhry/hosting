import React from 'react'
import TransferDomainNameHeroSection from '../components/domainname/dropdowns/TransferDomainName/TransferDomainNameHeroSection'
import DomainTransfer from '../components/domainname/dropdowns/TransferDomainName/DomainTransfer'
import TransferInfoDomain from '../components/domainname/dropdowns/TransferDomainName/TransferInfoDomain'
import HowdoITransferMyDomainName from '../components/domainname/dropdowns/TransferDomainName/HowdoITransferMyDomainName'
import TransferDomainFAQ from '../components/domainname/dropdowns/TransferDomainName/TransferDomainFAQ'
import DomainNameContactUsBlock from '../components/domainname/DomainNameContactUsBlock'

const TransferDomainName = () => {
  return (
    <>
    <TransferDomainNameHeroSection/>
    <DomainTransfer/>
    <TransferInfoDomain/>
    <HowdoITransferMyDomainName/>
    <TransferDomainFAQ/>
    <DomainNameContactUsBlock/>
    </>
  )
}

export default TransferDomainName