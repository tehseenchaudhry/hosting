import React from 'react'
import DomainRetrievalHeroSection from '../components/domainname/dropdowns/DomainRetrieval/DomainRetrievalHeroSection'
import DomainRetrievalInfo from '../components/domainname/dropdowns/DomainRetrieval/DomainRetrievalInfo'
import DomainRetrievalCommitment from '../components/domainname/dropdowns/DomainRetrieval/DomainRetrievalCommitment'
import DomainNameContactUsBlock from '../components/domainname/DomainNameContactUsBlock'

const DomainRetrieval = () => {
  return (
    <>
    <DomainRetrievalHeroSection/>
    <DomainRetrievalInfo/>
    <DomainRetrievalCommitment/>
    <DomainNameContactUsBlock/>
    </>
  )
}

export default DomainRetrieval