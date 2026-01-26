import React from 'react'
import GeniousMailSolutionHero from '../components/mail/dropdowns/genious/GeniousMailSolutionHero'
import GeniousMailPricing from '../components/mail/dropdowns/genious/GeniousMailPricing'
import WhyChooseGeniousMail from '../components/mail/dropdowns/genious/WhyChooseGeniousMail'
import ProfessionalEmailFAQ from '../components/mail/dropdowns/genious/ProfessionalEmailFAQ '
import MailSolutionsCTA from '../components/mail/dropdowns/genious/MailSolutionsCTA'

const Genious = () => {
  return (
    <div>
        <GeniousMailSolutionHero/>
        <GeniousMailPricing/>
        <WhyChooseGeniousMail/>
        <ProfessionalEmailFAQ/>
        <MailSolutionsCTA/>
    </div>
  )
}

export default Genious