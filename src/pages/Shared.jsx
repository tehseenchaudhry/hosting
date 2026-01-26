import React from 'react'
import SharedHostingMoroccoHero from '../components/hosting/dropdowns/shared/SharedHostingMoroccoHero'
import SharedHostingMoroccoPack from '../components/hosting/dropdowns/shared/SharedHostingMoroccoPack'
import SharedHostingMoroccoWhyChoose from '../components/hosting/dropdowns/shared/SharedHostingMoroccoWhyChoose'
import SharedHostingMoroccoBenefits from '../components/hosting/dropdowns/shared/SharedHostingMoroccoBenefits'
import SharedHostingMoroccoCTA from '../components/hosting/dropdowns/shared/SharedHostingMoroccoCTA'

const Shared = () => {
  return (
    <div>
        <SharedHostingMoroccoHero/>
        <SharedHostingMoroccoPack/>
        <SharedHostingMoroccoWhyChoose/>
        <SharedHostingMoroccoBenefits/>
        <SharedHostingMoroccoCTA/>
    </div>
  )
}

export default Shared