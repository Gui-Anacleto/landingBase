function Hero(props) {
  return (
    <section>
      <h1> {props.title} </h1>
      <button> {props.ctaText} </button>
    </section>
  )
}

export default Hero;