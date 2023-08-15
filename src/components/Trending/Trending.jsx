import React from 'react';
import { BiSolidCoinStack } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Trending = () => {
  return (
    <section className="py-44">
      <div className="container">
        <h3 className="text-3xl font-semibold text-green-600 uppercase">Now Trending</h3>
        <Swiper slidesPerView={4} cubeEffect={true} pagination={{ clickable: true }} modules={[Pagination]} spaceBetween={10} onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide>
            <div className="mx-3 bg-green-100 max-w-md my-4 rounded-xl overflow-hidden hover:translate-y-10 duration-300">
              <div className="p-2 max-h-52 overflow-hidden">
                <img src="https://source.unsplash.com/400x400?nature" alt="image" className="rounded-xl" />
              </div>
              <div className="mt-3 p-2">
                <p className="font-semibold text-2xl">Title</p>
                <span className="text-slate-500">Bali | Raja Ampat</span>
                <div className="flex justify-between mt-3">
                  <span className="font-semibold text-3xl">$153.23</span>
                  <a href="" className="border border-green-300 px-3 py-1 rounded-md text-green-600 hover:bg-green-600 hover:text-white hover:shadow hover:shadow-white duration-200">
                    Book Now
                  </a>
                </div>
              </div>

              <div className="mt-3 py-2 bg-green-300 rounded-t-xl text-center text-slate-500">
                <BiSolidCoinStack className="inline text-orange-500" /> Safe tour Agency
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="mx-3 bg-green-100 max-w-md my-4 rounded-xl overflow-hidden hover:translate-y-10 duration-300">
              <div className="p-2 max-h-52 overflow-hidden">
                <img src="https://source.unsplash.com/400x400?nature" alt="image" className="rounded-xl" />
              </div>
              <div className="mt-3 p-2">
                <p className="font-semibold text-2xl">Title</p>
                <span className="text-slate-500">Bali | Raja Ampat</span>
                <div className="flex justify-between mt-3">
                  <span className="font-semibold text-3xl">$153.23</span>
                  <a href="" className="border border-green-300 px-3 py-1 rounded-md text-green-600 hover:bg-green-600 hover:text-white hover:shadow hover:shadow-white duration-200">
                    Book Now
                  </a>
                </div>
              </div>

              <div className="mt-3 py-2 bg-green-300 rounded-t-xl text-center text-slate-500">
                <BiSolidCoinStack className="inline text-orange-500" /> Safe tour Agency
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="mx-3 bg-green-100 max-w-md my-4 rounded-xl overflow-hidden hover:translate-y-10 duration-300">
              <div className="p-2 max-h-52 overflow-hidden">
                <img src="https://source.unsplash.com/400x400?nature" alt="image" className="rounded-xl" />
              </div>
              <div className="mt-3 p-2">
                <p className="font-semibold text-2xl">Title</p>
                <span className="text-slate-500">Bali | Raja Ampat</span>
                <div className="flex justify-between mt-3">
                  <span className="font-semibold text-3xl">$153.23</span>
                  <a href="" className="border border-green-300 px-3 py-1 rounded-md text-green-600 hover:bg-green-600 hover:text-white hover:shadow hover:shadow-white duration-200">
                    Book Now
                  </a>
                </div>
              </div>

              <div className="mt-3 py-2 bg-green-300 rounded-t-xl text-center text-slate-500">
                <BiSolidCoinStack className="inline text-orange-500" /> Safe tour Agency
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="mx-3 bg-green-100 max-w-md my-4 rounded-xl overflow-hidden hover:translate-y-10 duration-300">
              <div className="p-2 max-h-52 overflow-hidden">
                <img src="https://source.unsplash.com/400x400?nature" alt="image" className="rounded-xl" />
              </div>
              <div className="mt-3 p-2">
                <p className="font-semibold text-2xl">Title</p>
                <span className="text-slate-500">Bali | Raja Ampat</span>
                <div className="flex justify-between mt-3">
                  <span className="font-semibold text-3xl">$153.23</span>
                  <a href="" className="border border-green-300 px-3 py-1 rounded-md text-green-600 hover:bg-green-600 hover:text-white hover:shadow hover:shadow-white duration-200">
                    Book Now
                  </a>
                </div>
              </div>

              <div className="mt-3 py-2 bg-green-300 rounded-t-xl text-center text-slate-500">
                <BiSolidCoinStack className="inline text-orange-500" /> Safe tour Agency
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="mx-3 bg-green-100 max-w-md my-4 rounded-xl overflow-hidden hover:translate-y-10 duration-300">
              <div className="p-2 max-h-52 overflow-hidden">
                <img src="https://source.unsplash.com/400x400?nature" alt="image" className="rounded-xl" />
              </div>
              <div className="mt-3 p-2">
                <p className="font-semibold text-2xl">Title</p>
                <span className="text-slate-500">Bali | Raja Ampat</span>
                <div className="flex justify-between mt-3">
                  <span className="font-semibold text-3xl">$153.23</span>
                  <a href="" className="border border-green-300 px-3 py-1 rounded-md text-green-600 hover:bg-green-600 hover:text-white hover:shadow hover:shadow-white duration-200">
                    Book Now
                  </a>
                </div>
              </div>

              <div className="mt-3 py-2 bg-green-300 rounded-t-xl text-center text-slate-500">
                <BiSolidCoinStack className="inline text-orange-500" /> Safe tour Agency
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Trending;
