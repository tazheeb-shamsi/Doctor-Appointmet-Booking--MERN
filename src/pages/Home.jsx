import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import heroImg1 from "/images/hero-img01.png";
import heroImg2 from "/images/hero-img02.png";
import heroImg3 from "/images/hero-img03.png";
import icon1 from "/images/icon01.png";
import icon2 from "/images/icon02.png";
import icon3 from "/images/icon03.png";

const Home = () => {
  return (
    <>
      {/* ============= Hero Section ================== */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ============= Hero Content ================== */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy, longer life.
                </h1>
                <p className="text__paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores harum sapiente mollitia molestiae debitis asperiores
                  impedit delectus modi consequatur est veniam soluta, fugit
                  ullam blanditiis alias dolores nemo dicta quia?
                </p>

                <button className="btn">Request an Appointment</button>
              </div>

              {/* ========== hero counter ============ */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col md:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px]">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px] "></span>
                  <p className="text__paragraph">Year of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px]">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px] "></span>
                  <p className="text__paragraph">Clinic Locations</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px]">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] "></span>
                  <p className="text__paragraph">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/* ============= Hero Content Ends================== */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg1} alt="hero1" />
              </div>
              <div className="mt-[30px]">
                <img className="w-full mb-[30px]" src={heroImg2} alt="hero1" />
                <img className="w-full" src={heroImg3} alt="hero1" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============= Hero Section End================== */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__paragraph text-center">
              World class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[50px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon1} alt="" />
                {/* <img src={icon2} alt="" />
                <img src={icon3} alt="" /> */}
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to Clinic
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-headingColor mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[50px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon2} alt="" />
                {/* <img src={icon3} alt="" /> */}
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Clinic
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to Clinic
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-headingColor mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[50px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon3} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to Clinic
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-headingColor mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
