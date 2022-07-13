import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "@fortawesome/fontawesome-free/js/all.js";
import { Link } from "react-router-dom";

export default function Home() {
  const [loading, setLoading] = useState<Boolean>(true);
  useEffect(() => {
    setLoading(true);
  }, []);
  const demo_data: any = [
    {
      title: "Gut Health",
      description:
        "Thrive with health using our simple product systems that help weed, seed, and feed your mighty gut microbiome.",
      image: "/img/apple.png",
    },
    {
      title: "Weight Management",
      description: "Take the guesswork out of weight management with products that help you rev up your metabolism, kick hunger to the curb, and love your results on and off the scale!",
      image: "/img/oppo.png",
    },
    {
      title: "Skincare",
      description:
        "Fall in love with your skin again and defend your natural glow with age-defying skincare products and a beautifully simple skincare routine.",
      image: "/img/apple.png",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Plexus | Home</title>
        <meta
          name="description"
          content="Plexus® is for you—yes, you. It’s for who you are today and who you’ll be tomorrow. It’s for your biggest dreams and your craziest goals. It’s for your drive to better yourself and change the world. We know you’ve got it in you. Let’s bring it out—together."
        />
        <meta
          name="keywords"
          content="Gut-Health,
    Weight-Management,
    Skincare"
        />
        <script
          defer
          src="https://kit.fontawesome.com/f89eb210df.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <div className={loading ? "" : "hidden"}>
        <section
          id="landing-page"
          className="flex flex-col justify-center items-center"
        >
          <div className="flex flex-col sm:flex-row landing-page-wrapper md:w-4/5 sm:w-full md:my-8">
            <div className="flex md:w-2/7 sm:w-full">
              <img src="/img/girl.png" className="my-5" />
            </div>
            <div className="flex flex-col md:w-5/7 sm:w-full justify-center items-center px-10 sm:">
              <div className="md:w-50vw md:w-100vw">
                <h1 className="text-3xl text-gray-600">
                  Real Health is Way More Than What’s on the{" "}
                  <span className="text-5xl text-logogreen">Outside</span>
                </h1>
                <br />
                <h1 className="md:text-md text-gray-600 text-justify">
                  <span className="text-logogreen">Plexus</span> is on the cutting edge of health science, with a range of products focused on every aspect of your health and happiness. We help your body get rid of the bad stuff, pave the way to better digestive health, and feed your system to benefit the body and mind. Our goal is to make products that are the highest quality non-GMO, 100% vegetarian, and gluten free, wherever possible. Most importantly, Plexus products work. They’re all for health, so there’s health for all.
                  <br />
                  Start your journey to Health and Happiness with Plexus products that fit your unique needs, goals, and lifestyle. Take this short quiz to find your perfect daily wellness routine.
                 </h1>
                </div>
            </div>
          </div>
        </section>
        <section className="feature-ribbon bg-gray-200 text-white py-8">
          <h1 className="text-center text-gray-800 font-bold text-4xl my-2 mb-2">
            Latest Sales
          </h1>
          <div className="flex flex-col md:flex-row justify-center">
            {demo_data.map((news: any) => {
              return (
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto my-2">
                  <a>
                    <img className="rounded-t-lg" src={news.image} alt="" />
                  </a>
                  <div className="p-5">
                    <a>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {news.title}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {news.description}
                    </p>
                    <Link to="/shop">
                      <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                       Details
                        <svg
                          className="ml-2 -mr-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="body">
          <div className="bg-white">
            <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
              <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                <div className="max-w-lg">
                  <h1 className="text-xl tracking-wide text-white text-gray-900 lg:text-3xl lg:text-5xl">
                    Your Oppurtunities
                  </h1>
                  <ul className="mt-4 text-gray-300 text-gray-600">
                    <li>
                      <p className="mt-4 text-gray-700 text-gray-600">
                        VIP Customers
                      </p>
                      <p className="mt-4 text-gray-700 text-gray-600">
                       Brand Ambassadors
                      </p>
                      <p className="mt-4 text-gray-700 text-gray-600">
                        Welcome Packs
                      </p>
                      <p className="mt-4 text-gray-700 text-gray-600">
                       Compensation
                      </p>
                      <p className="mt-4 text-gray-700 text-gray-600">
                        Rewards and Recognition
                      </p>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link to="/about">
                      <a className="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-logogreen rounded-md hover:bg-green-800">
                        Know More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
                <img
                  className="object-cover w-full max-w-2xl rounded-md lg:h-full"
                  src="https://d2xz00m0afizja.cloudfront.net/wp-content/uploads/sites/5/2017/12/Tarl-Robinson-Plexus-Scoop.png"
                  alt="old man"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={loading ? "hidden" : "h-500"}>
        <div
          className="flex flex-col justify-center items-center"
          style={{ height: "90vh" }}
        >
          <div className="flex">
            <div className="h-5 w-5 bg-logogreen rounded-full mr-1 animate-bounce"></div>
            <div className="h-5 w-5 bg-logogreen rounded-full mr-1 animate-bounce200"></div>
            <div className="h-5 w-5 bg-logogreen rounded-full animate-bounce400"></div>
          </div>
          <h1 className="text-2xl">Loading...</h1>
        </div>
      </div>
    </>
  );
}
