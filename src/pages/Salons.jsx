import Hero from '../components/salons/Hero.jsx'
import SalonList from '../components/salons/SalonList.jsx'
import PrivateAudience from '../components/salons/PrivateAudience.jsx'
import SalonsQuoate from '../components/salons/SalonsQuoate.jsx'
import { salons } from "../components/salons/data/salondata.js";
const Salons = () => {
  return (
     <>

      {/* HERO */}
      <Hero/>


      {/* SALONS */}
      <SalonList salons={salons} />

      {/* PRIVATE AUDIENCE */}
      <PrivateAudience />


      {/* QUOTE */}
      <SalonsQuoate />

    </>
  )
}

export default Salons