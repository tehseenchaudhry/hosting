import React from 'react'
import MailSolutionsHero from '../components/mail/MailSolutionsHero'
import WhyChooseGenious from '../components/mail/WhyChooseGenious'
import MailSolutionsOffers from '../components/mail/MailSolutionsOffers'
import MailSolutionsFAQ from '../components/mail/MailSolutionsFAQ'
import MailSolutionsCTA from '../components/mail/MailSolutionsCTA '

const Mail = () => {
  return (
    <div>
        <MailSolutionsHero/>
        <WhyChooseGenious/>
        <MailSolutionsOffers/>
        <MailSolutionsFAQ/>
        <MailSolutionsCTA />
    </div>
  )
}

export default Mail