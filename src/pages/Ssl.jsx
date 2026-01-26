import React from 'react'
import SSLCertHero from '../components/ssl/SSLCertHero'
import WhyUseSSL from '../components/ssl/WhyUseSSL'
import SSLPricing from '../components/ssl/SSLPricing'
import WhyChooseSSL from '../components/ssl/WhyChooseSSL'
import SSLBrands from '../components/ssl/SSLBrands'
import SSLFaq from '../components/ssl/SSLFaq'
import SSLCTA from '../components/ssl/SSLCTA'

const Ssl = () => {
  return (
    <div>
        <SSLCertHero/>
        <WhyUseSSL/>
        <SSLPricing/>
        <WhyChooseSSL/>
        <SSLBrands/>
        <SSLFaq/>
        <SSLCTA/>
    </div>
  )
}

export default Ssl