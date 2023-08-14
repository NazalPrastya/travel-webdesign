const Welcome = () => {
  return (
    <section className="pt-36 min-h-screen relative">
      <img src="public/background/kodomo.png" alt="kodomo" className="absolute top-0 left-0 w-full h-full " />
      <div className="container">
        <h2 className="text-3xl font-bold text-cyan-900">Welcome to the world of adventure with ZalJourney</h2>
        <div className="md:flex">
          <div className="md:w-1/2 mt-5 bg-green-50 p-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quas facilis beatae, dolorem iure libero. Incidunt dolor magnam minus deserunt corporis esse enim, aperiam, itaque obcaecati consectetur earum eum recusandae</p>
          </div>
          <div className="md:w-1/2 mt-5 bg-green-50 p-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quas facilis beatae, dolorem iure libero. Incidunt dolor magnam minus deserunt corporis esse enim, aperiam, itaque obcaecati </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
