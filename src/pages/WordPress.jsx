import React from 'react'
import WordpressHostingHero from '../components/hosting/dropdowns/wordpress/WordpressHostingHero'
import WordpressHostingPlans from '../components/hosting/dropdowns/wordpress/WordpressHostingPlans'
import WordpressHostingOptimize from '../components/hosting/dropdowns/wordpress/WordpressHostingOptimize'
import WordpressHostingFeatures from '../components/hosting/dropdowns/wordpress/WordpressHostingFeatures'
import WordpressHostingMigrationCTA from '../components/hosting/dropdowns/wordpress/WordpressHostingMigrationCTA'

const WordPress = () => {
  return (
    <div>
        <WordpressHostingHero/>
        <WordpressHostingPlans/>
        <WordpressHostingOptimize/>
        <WordpressHostingFeatures/>
        <WordpressHostingMigrationCTA/>
        
    </div>
  )
}

export default WordPress