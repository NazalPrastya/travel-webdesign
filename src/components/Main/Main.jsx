import React from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Main = () => {
  const [bg, setBg] = useState('background/raja-ampat.jpg');
  const [title, setTitle] = useState('Raja Ampat');

  const handleBg = (e) => {
    setBg(e.target.src);
    setTitle(e.target.alt);
  };

  const backgrounds = [
    {
      id: 1,
      name: 'raja ampat',
      image: 'raja-ampat.jpg',
    },

    {
      id: 2,

      name: 'mountain',
      image: 'mountain.jpg',
    },
    {
      id: 3,

      name: 'pulau komodo',
      image: 'pulau-komodo.jpg',
    },
    {
      id: 4,

      name: 'temple gates',
      image: 'temple-gates.jpg',
    },
    {
      id: 5,
      name: 'wae  rebo',
      image: 'wae-rebo.jpeg',
    },
  ];
  return (
    <main className="h-screen w-full relative">
      <img src={bg} alt="raja-ampat" className="w-full h-full  bg-center  opacity-70 object-cover absolute z-0" />
      <div className="flex flex-col lg:flex-row justify-between pl-10 md:pl-24 pt-10 md:pt-24 relative z-10">
        <div className="w-full lg:w-2/6 my-8 flex flex-col">
          <h1 className="text-[3rem] md:text-[4rem] uppercase font-bold text-cyan-900">Explore the world with us</h1>
          <p className="max-w-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas fuga sequi dolorem ratione blanditiis. Quas.</p>
          <a href="" className="btn-primary">
            SEE MORE
          </a>
        </div>
        <div className="w-full lg:w-4/6 my-8 flex-col justify-center items-center">
          <p className="text-center text-[3rem] font-semibold uppercase text-cyan-900 text-opacity-60">{title}</p>
          <Swiper slidesPerView={4} cubeEffect={true} pagination={{ clickable: true }} modules={[Pagination]} spaceBetween={10} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
            {backgrounds.map((background) => (
              <SwiperSlide className="w-[5rem] h-[5rem] md:w-[16rem] md:h-[15rem] md:max-h-max  rounded-md mx-2 my-2 hover:scale-105 duration-200" key={background.id}>
                <a href="#" onClick={handleBg}>
                  <img src={`public/background/` + background.image} alt={background.name} className={`w-full h-full rounded-md shadow-md shadow-white bg-cover object-center`} />
                </a>
              </SwiperSlide>
            ))}
            ;
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default Main;
