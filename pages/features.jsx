import React from "react";
import Fade from "react-reveal/Fade";
import Link from "next/link";

//components
import Layout from "../components/Layout";
import Feature from "../components/Feature";

const features = () => {
  return (
    <Layout>
      <div className="grid lg:grid-cols-12 md:grid-rows-1 md:grid-cols-6">
        <div className="relative flex items-center justify-center row-start-2 bg-black lg:col-span-5 md:col-span-4 md:row-start-1">
          <div className="absolute md:left-0 top-0 md:top-32 left-10 w-40 md:w-1.5 h-1.5 md:bg-gradient-to-b bg-gradient-to-r from-tertiary via-secondary to-primary md:h-72" />
          <Fade distance="40px" left>
            <div className="py-10 space-y-10 text-white md:py-0 w-80 md:w-96">
              <h1 className="heading"> Features</h1>

              <p className="font-light">
                We make sure all of our features are designed to be loved by
                every aspiring and even professional photograpers who wanted to
                share their stories.
              </p>
            </div>
          </Fade>
        </div>

        <div className="bg-cover h-294 md:h-490 lg:col-span-7 md:col-span-2 bg-hero-sm lg:bg-hero md:bg-hero-md" />
      </div>

      <div className="grid py-10 md:grid-cols-2 lg:grid-cols-3">
        <Fade distance="40px" left>
          <Feature>
            <div className="">
              <img src="/responsive.svg" alt="" />
            </div>

            <h1 className="text-xl font-bold text-center">100% Responsive</h1>

            <p className="text-center">
              No matter which the device you’re on, our site is fully responsive
              and stories look beautiful on any screen.
            </p>
          </Feature>

          <Feature>
            <div className="p-5">
              <img src="/no-limit.svg" alt="" />
            </div>

            <h1 className="text-xl font-bold text-center">
              No Photo Upload Limit
            </h1>

            <p className="text-center">
              Our tool has no limits on uploads or bandwidth. Freely upload in
              bulk and share all of your stories in one go.
            </p>
          </Feature>

          <Feature>
            <div className="">
              <img src="/embed.svg" alt="" />
            </div>

            <h1 className="text-xl font-bold text-center">
              Available to Embed
            </h1>

            <p className="text-center">
              Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
              videos, Google Maps, and more.
            </p>
          </Feature>
        </Fade>

        <Fade distance="40px" left>
          <Feature>
            <div className="">
              <img src="/custom-domain.svg" alt="" />
            </div>

            <h1 className="text-xl font-bold text-center">Custom Domain</h1>

            <p className="text-center">
              With Photosnap subscriptions you can host your stories on your own
              domain. You can also remove our branding!
            </p>
          </Feature>

          <Feature>
            <div className="">
              <img src="/boost-exposure.svg" alt="" />
            </div>

            <h1 className="text-xl font-bold text-center">
              Boost Your Exposure
            </h1>

            <p className="text-center">
              Users that viewed your story or gallery can easily get notifed of
              new and featured stories with our built in mailing list.
            </p>
          </Feature>

          <Feature>
            <div className="">
              <img src="/drag-drop.svg" alt="" />
            </div>

            <h1 className="text-xl font-bold text-center">Drag & Drop Image</h1>

            <p className="text-center">
              Easily drag and drop your image and get beautiful shots everytime.
              No over the top tooling to add friction to creating stories.
            </p>
          </Feature>
        </Fade>
      </div>

      <div className="grid px-10 text-white bg-cover md:px-20 md:grid-cols-2 bg-beta-sm md:bg-beta-md lg:bg-beta h-288 md:280">
        <div className="flex items-center">
          <h1 className="text-3xl leading-normal tracking-widest uppercase md:w-11/12 lg:w-4/5 lg:text-5xl">
            We're in Beta. Get your invite today!
          </h1>
        </div>

        <Fade distance="40px" left>
          <div className="flex space-x-5 md:items-center md:justify-end">
            <Link href="/">
              <a className="tracking-widest text-white uppercase hover:underline">
                Get an invite
              </a>
            </Link>

            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fillRule="evenodd" stroke="#fff">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </div>
        </Fade>
      </div>
    </Layout>
  );
};

export default features;
