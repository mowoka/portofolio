import React from 'react';
import image from '../assets/images/boat-image.jpg';

const Home = () => {
  return (
    <>
      <main>
        <img
          src={image}
          alt="boat"
          className="absolute object-cover w-full h-full"
        />
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-32 px-8">
          <h1 className="text-3xl text-white   font-bold cursive leading-none lg:leading-snug home-name">
            Aloha. i'm Giofanny Mowoka
          </h1>
        </section>
      </main>
    </>
  );
};

export default Home;
