import React from 'react'
import HostingHeroSection from '../components/hosting/HostingHeroSection'
import DiscoverOurWebHosting from '../components/hosting/DiscoverOurWebHosting'
import AdditionalServices from '../components/hosting/AdditionalServices'
import OnlineProjectToday from '../components/hosting/OnlineProjectToday'
import WebHostingMorocco from '../components/hosting/WebHostingMorocco'

const Hosting = () => {
  return (
    <>
    <HostingHeroSection />
    <OnlineProjectToday/>
    <DiscoverOurWebHosting/>
    <AdditionalServices/>
    <WebHostingMorocco/>
    </>
  )
}

export default Hosting