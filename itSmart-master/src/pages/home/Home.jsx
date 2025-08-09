
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; 

// import required modules
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { TbWorldSearch } from "react-icons/tb";

function Home() {
  return (
    // section home
    <div id="home" className="min-h-screen p-24 relative font-display2">
      <img
        className="w-50 h-50 absolute top-18 right-0"
        src="../../../../public/images/8635cf04-a559-4327-bef8-e93e8c90c667-removebg-preview.png"
        alt=""
      />
      <div className=" flex flex-col gap-3 lg:mb-8 mt-6 justify-center items-center md:text-center md:mb-4 sm:mb-4">
        <h1 className="font-display lg:text-3xl font-semibold text-text md:text-xl">
          IT <span className="text-primary-light">S</span>MART{" "}
        </h1>
        <p className=" font-display2 lg:text-2xl text-text font-medium mt-5 md:text-xl">
          It Smart welcomes you , together towards excellence and distinction
        </p>
      </div>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        modules={[Autoplay, EffectCube, Pagination]}
        className="mySwiper lg:w-[80%] lg:h-[50%] md:w-[100%] md:h-[80%] sm:w-[100%] sm:h-[80%]"
      >
        <SwiperSlide className="w-full">
          <img
            className=" w-full h-96 object-contain"
            src="../../../../public/images/photo5.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <img
            className=" w-full h-96 object-contain"
            src="../../../../public/images/photo7.png"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <img
            className=" w-full h-96 object-contain"
            src="../../../../public/images/photo6.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <img
            className=" w-full h-96 object-contain"
            src="../../../../public/images/photo3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <img
            className=" w-full h-96 object-contain"
            src="../../../../public/images/photo2.jpg"
          />
        </SwiperSlide>
      </Swiper>

      {/* ection about */}
      <section id="about" className="min-h-screen p-24 relative mt-12">
        <div className="lg:text-3xl text-center font-bold md:text-2xl sm:text-xl">
          ABOUT <span className="text-primary-light">U</span>S
        </div>
        <div className=" lg:mt-28 lg:flex lg:gap-12 lg:flex-row justify-center items-center md:mt-16 md:flex md:flex-col md:gap-8 sm:mt-16 sm:flex sm:flex-col sm:gap-8">
          <div className="flex flex-col gap-12 justify-center items-center mt-4">
            <div className="flex justify-center gap-5">
              <div className="bg-text rounded-4xl w-44 h-10  flex justify-center items-center ">
                <FaArrowRightLong className="text-2xl text-primary-light" />
              </div>
              <p>
                The idea for this project stemmed from the growing need to
                automate university exams. A team of students from the College
                of Information Engineering collaborated to develop a system that
                combines simplicity and accuracy to serve both students and
                faculty.
              </p>
            </div>
            <div className="flex justify-center gap-5">
              <div className="bg-text rounded-4xl w-34 h-10 flex justify-center items-center ">
                <FaArrowRightLong className="text-2xl text-primary-light" />
              </div>
              <p>
                This project aims to facilitate the testing process at the
                College of Information Engineering by creating a website that
                allows students to apply for exams and track their results
                easily and effectively.
              </p>
            </div>
            <button className="font-normal px-6 py-1 w-fit h-12 bg-primary hover:bg-text hover:text-primary transition-all rounded-full">
              Learn More
            </button>
          </div>
          <div>
            <img
              className="rounded-2xl"
              width="1400px"
              height="1400px"
              src="../../../../public/images/about.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* section contact */}
      <section id="contact" className="min-h-screen p-24 relative mt-4">
        <div className="lg:text-3xl text-center font-bold md:text-2xl sm:text-xl">
          CONTACT <span className="text-primary-light">U</span>S
        </div>
        <div className="lg:flex lg:flex-row justify-between lg:gap-5 lg:mt-22 md:mt-12  md:grid md:grid-cols-2 md:gap-3 sm:grid sm:grid-cols-1 sm:gap-3">
          <div className="w-60 h-40 text-center flex justify-center mt-3">
            <div className="flex flex-col gap-6 text-center justify-center items-center">
              <FaLocationDot className="text-primary-dark lg:text-5xl md:text-3xl sm:text-2xl" />
              <p className="text-xl text-primary-dark">
                faculty of information engineering in aleppo
              </p>
            </div>
          </div>
          <div className="w-60 h-40 text-center flex justify-center items-center">
            <div className="flex flex-col gap-6  text-center justify-center items-center">
              <MdLocalPhone className="text-primary-dark lg:text-5xl md:text-3xl sm:text-2xl" />
              <p className="text-xl text-primary-dark">1122334455</p>
            </div>
          </div>
          <div className="w-60 h-40 text-center flex justify-center items-center">
            <div className="flex flex-col gap-6  text-center justify-center items-center">
              <MdOutlineAlternateEmail className="text-primary-dark lg:text-5xl md:text-3xl sm:text-2xl" />
              <p className="text-xl text-primary-dark">itsmart@email.com</p>
            </div>
          </div>
          <div className="w-60 h-40  flex justify-center items-center">
            <div className="flex flex-col gap-6  text-center justify-center items-center">
              <TbWorldSearch className="text-primary-dark lg:text-5xl md:text-3xl sm:text-2xl" />
              <p className="text-xl text-primary-dark">itsmart.com</p>
            </div>
          </div>
        </div>
        <div className="border-2 border-zinc-700 p-8 lg:mt-20 md:mt-10 sm:mt-10">
          <div className=" lg:flex lg:flex-row lg:gap-18 justify-center items-center  md:flex md:flex-col md:gap-10 sm:flex sm:flex-col sm:gap-10">
            <div>
              <img
                className="rounded"
                width="400px"
                height="200px"
                src="../../../../public/images/contact.jpg"
                alt=""
              />
            </div>
            <div className="flex justify-between  gap-5 flex-col">
              <input
                placeholder="Your Name"
                type="text"
                className="w-full h-12 p-4 bg-white text-background border-2 border-primary-light "
              />
              <input
                placeholder="Your Email"
                type="text"
                className="w-full h-12 p-4 bg-white text-background border-2 border-primary-light "
              />
              <input
                placeholder="Subject"
                type="text"
                className="w-full h-12 p-4 bg-white text-background border-2 border-primary-light "
              />
              <input
                placeholder="Message"
                type="text"
                className="w-full h-30 p-4 bg-white text-background border-2 border-primary-light "
              />
              <button className="font-normal px-6 py-1 w-fit h-12 bg-primary hover:bg-text hover:text-primary transition-all rounded-full">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
