import PageContainer from '../components/PageContainer.jsx'
import Hero from '../components/Heritage/Hero'
import Statssection from '../components/Heritage/Statssection'
import Timeline from '../components/Heritage/Timeline'
import Finishing from '../components/Heritage/Finishing'
import CallibreSection from '../components/Heritage/CallibreSection'
import ArchiveSection from '../components/Heritage/ArchiveSection'
import QuoteSection from '../components/Heritage/QuoteSection'

const Heritage = () => {
  return (
   <PageContainer className="min-h-screen bg-[#101011] text-[#d8d3cc]">
      <Hero/>
      <Statssection />

      <Timeline />

      <Finishing />

      <CallibreSection />

      <ArchiveSection />

      <QuoteSection />

    </PageContainer>
  )
}

export default Heritage