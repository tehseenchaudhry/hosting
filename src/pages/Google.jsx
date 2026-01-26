import React from 'react'
import GoogleWorkspaceHero from '../components/mail/dropdowns/google/GoogleWorkspaceHero'
import WorkspaceForBusiness from '../components/mail/dropdowns/google/WorkspaceForBusiness'
import WorkspaceBundles from '../components/mail/dropdowns/google/WorkspaceBundles'
import WorkspaceAboutOffer from '../components/mail/dropdowns/google/WorkspaceAboutOffer'
import WorkspaceFeatures from '../components/mail/dropdowns/google/WorkspaceFeatures'
import GoogleAppsIncluded from '../components/mail/dropdowns/google/GoogleAppsIncluded'
import WorkspaceHelp from '../components/mail/dropdowns/google/WorkspaceHelp'

const Google = () => {
  return (
    <div>
        <GoogleWorkspaceHero/>
        <WorkspaceForBusiness/>
        <WorkspaceBundles/>
        <WorkspaceAboutOffer/>
        <WorkspaceFeatures/>
        <GoogleAppsIncluded/>
        <WorkspaceHelp/>

    </div>
  )
}

export default Google