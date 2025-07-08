function Hero({ title, subtitle, ctaText, image }) {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-lg text-gray-600 mb-8">{subtitle}</p>
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
          {ctaText}
        </button>
        <div className="mt-10">
          <img src={image} alt="Imagem principal" className="mx-auto w-80" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
