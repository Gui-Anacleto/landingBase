import Hero from './components/Hero'
import landingConfig from './config/landing.json'

function App() {


  return (
    <>
      <Hero 
        title={landingConfig.hero.title} 
        ctaText={landingConfig.hero.ctaText} 
        subtitle={landingConfig.hero.subtitle}
        image={landingConfig.hero.image}
      />
    </>
  );
}

export default App
