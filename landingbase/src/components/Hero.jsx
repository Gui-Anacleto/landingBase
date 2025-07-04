function Hero({title, subtitle, ctaText, image}) {
  return (
    <section>
      <h1> {title} </h1>
      <p>{subtitle}</p>
      <button> {ctaText} </button>
      <img src={image} alt="Imagem hero"></img>
    </section>
  )
}

export default Hero;