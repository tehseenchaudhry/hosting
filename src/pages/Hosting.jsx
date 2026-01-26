import React from 'react'
import HostingHeroSection from '../components/hosting/HostingHeroSection'
import OnlineProjectToday from '../components/hosting/OnlineProjectToday'
import DiscoverOurWebHosting from '../components/hosting/DiscoverOurWebHosting'
import AdditionalServices from '../components/hosting/AdditionalServices'
import WebHostingMorocco from '../components/hosting/WebHostingMorocco'
import AuthorizedPartnerProgram from '../components/hosting/AuthorizedPartnerProgram'
import TrustedBySection from '../components/hosting/TrustedBySection'
import WhyChooseGenious from '../components/hosting/WhyChooseGenious'

const Hosting = () => {
  return (
    <>
    <HostingHeroSection />
    <OnlineProjectToday/>
    <DiscoverOurWebHosting/>
    <AdditionalServices/>
    <WebHostingMorocco/>
    <AuthorizedPartnerProgram/>
    <TrustedBySection/>
    <WhyChooseGenious/>
    </>
  )
}

export default Hosting