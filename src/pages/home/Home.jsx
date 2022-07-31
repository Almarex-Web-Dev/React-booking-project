import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Feature from '../../components/feature/Feature'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperty from '../../components/FeaturedProperties/FeaturedProperty'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import './home.css'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Feature />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home Guest love</h1>
        <FeaturedProperty />
        <MailList />
        <Footer />
      </div>
    </>
  )
}

export default Home
