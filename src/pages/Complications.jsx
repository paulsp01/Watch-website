import PageContainer from '../components/PageContainer.jsx'
import Hero from '../components/Complication/Hero'
import Portfolio from '../components/Complication/Portfolio'
import Finshing from '../components/Complication/Finshing'
import Dossier from '../components/Complication/Dossier'

const Complications = () => {
  return (
    <PageContainer className='min-h-screen bg-[#101011] text-[#d8d4cd]'>
        <Hero/>
        <Portfolio/>
        <Finshing/>
        <Dossier/>
    </PageContainer>
  )
}

export default Complications