import '../styles/global.css'

import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
       <Component {...pageProps} /> {/* children */}
    </ChallengesProvider>
  ) }

export default MyApp
