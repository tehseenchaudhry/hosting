import React from 'react'
import Microsoft365Hero from '../components/mail/dropdowns/micro/Microsoft365Hero'
import Microsoft365Plans from '../components/mail/dropdowns/micro/Microsoft365Plans'
import WhyUseOffice365 from '../components/mail/dropdowns/micro/WhyUseOffice365'
import Office365Comparison from '../components/mail/dropdowns/micro/Office365Comparison'
import Microsoft365FAQ from '../components/mail/dropdowns/micro/Microsoft365FAQ'
import Microsoft365FinalCTA from '../components/mail/dropdowns/micro/Microsoft365FinalCTA'

const Micro = () => {
  return (
    <div>
        <Microsoft365Hero/>
        <Microsoft365Plans/>
        <WhyUseOffice365/>
        <Office365Comparison/>
        <Microsoft365FAQ/>
        <Microsoft365FinalCTA/>

    </div>
  )
}

export default Micro