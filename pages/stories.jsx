import React from "react";
import Fade from "react-reveal/Fade";
import Link from "next/link";

//components
import Layout from "../components/Layout";
import StoryCard from "../components/StoryCard";
import Info from "../components/Info";
import Gradient from "../components/Gradient";

const Stories = () => {
  return (
    <Layout>
      <div className="flex flex-col items-start justify-center px-24 bg-cover h-317 md:h-650 bg-moon-sm md:bg-moon-md lg:bg-moon">
        <Fade distance="40px" left>
          <div className="hidden space-y-6 text-white md:w-1/2 lg:w-2/5 md:block ">
            <h1 className="tracking-widest uppercase lg:text-xl">
              Last month's featured story
            </h1>

            <h1 className="w-2/3 text-4xl font-medium leading-snug uppercase lg:text-5xl">
              Hazy full moon of Appalachia
            </h1>

            <span className="flex space-x-3">
              <p className="text-lightGrey">March 2nd 2020</p>
              <p>by John Appleseed</p>
            </span>

            <p className="text-lightGrey">
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged.
            </p>

            <div className="flex items-center pt-5 space-x-6">
              <Link href="/stories">
                <a className="tracking-widest uppercase hover:underline">
                  {" "}
                  Read the Story
                </a>
              </Link>

              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#fff">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
          </div>
        </Fade>
      </div>

      <Fade distnace="40px" left>
        <div className="p-10 space-y-6 text-white bg-black md:w-1/2 lg:w-2/5 md:hidden">
          <h1 className="tracking-widest uppercase">
            Last month's featured story
          </h1>

          <h1 className="w-2/3 text-3xl font-medium leading-snug uppercase">
            Hazy full moon of Appalachia
          </h1>

          <span className="flex space-x-3">
            <p className="text-lightGrey">March 2nd 2020</p>
            <p>by John Appleseed</p>
          </span>

          <p className="text-lightGrey">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>

          <div className="flex items-center pt-5 space-x-6">
            <Link href="/stories">
              <a className="tracking-widest uppercase hover:underline">
                {" "}
                Read the Story
              </a>
            </Link>

            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fillRule="evenodd" stroke="#fff">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </div>
        </div>
      </Fade>

      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        <>
          <StoryCard left>
            <div className="stories md:bg-mountains bg-mountains-sm">
              <Info
                title="The Mountains"
                name="John Appleseed"
                date="April 16th 2020"
              />
              <Gradient />
            </div>
          </StoryCard>

          <StoryCard>
            <div className="stories md:bg-cityscapes bg-cityscapes-sm">
              <Info
                title="Sunset Cityscapes"
                name="Benjamin Cruz"
                date="April 14th 2020"
              />
              <Gradient />
            </div>
          </StoryCard>

          <StoryCard left>
            <div className="stories md:bg-voyage bg-voyage-sm">
              <Info
                title="18 Days Voyage"
                name="Alexei Borodin"
                date="April 11th 2020"
              />
              <Gradient />
            </div>
          </StoryCard>

          <StoryCard>
            <div className="stories md:bg-architecturals bg-architecturals-sm">
              <Info
                title="Architecturals"
                name="Samantha Brooke"
                date="April 9th 2020"
              />
              <Gradient />
            </div>
          </StoryCard>
        </>

        <>
          <StoryCard left>
            <div className="stories md:bg-tour bg-tour-sm">
              <Info
                title="World Tour 2019"
                name="Timothy Wagner"
                date="April 7th 2020"
              />
              <Gradient />
            </div>
          </StoryCard>

          <StoryCard>
            <div className="stories md:bg-corners bg-corners-sm">
              <Info
                title="Unforeseen Corners"
                name="William Malcolm"
                date="April 3rd 2020"
              />
              <Gradient />
            </div>
          </StoryCard>

          <StoryCard left>
            <div className="stories md:bg-king bg-king-sm">
              <Info
                title="King on Africa: Part II"
                name="Tim Hillenburg"
                date="March 29th 2020"
              />
              <Gradient />
            </div>
          </StoryCard>

          <StoryCard>
            <div className="stories md:bg-trip bg-trip-sm">
              <Info
                title="The Trip to Nowhere"
                name="Felicia Rourke"
                date="March 21st 2020"
              />
              <Gradient />
            </div>
          </StoryCard>
        </>

        <>
          <StoryCard left>
            <div className="stories md:bg-rage bg-rage-sm">
              <Info
                title="Rage of The Sea"
                name="Mohammed Abdul"
                date="March 19th 2020"
              />
              <Gradient />
            </div>
          </StoryCard>

          <StoryCard>
            <div className="stories md:bg-running bg-running-sm">
              <Info
                title="Running Free"
                name="Michelle"
                date="March 16th 2020"
              />
              <Gradient />
            </div>
          </StoryCard>

          <StoryCard left>
            <div className="stories md:bg-waves bg-waves-sm">
              <Info
                title="Behind the Waves"
                name="Lamarr Wilson"
                date="March 11th 2020"
              />
              <Gradient />
            </div>
          </StoryCard>

          <StoryCard>
            <div className="stories md:bg-calm bg-calm-sm">
              <Info
                title="Calm Waters"
                name="Samantha Brooke"
                date="March 9th 2020"
              />
              <Gradient />
            </div>
          </StoryCard>
        </>

        <>
          <StoryCard left>
            <div className="stories md:bg-milky bg-milky-sm">
              <Info
                title="The Milky Way"
                name="John Appleseed"
                date="Benjamin Cruz"
              />
              <Gradient />
            </div>
          </StoryCard>

          <StoryCard>
            <div className="stories md:bg-forest bg-forest-sm">
              <Info
                title="Night at The Dark Forest"
                name="Mohammed Abdul"
                date="March 4th 2020"
              />
              <Gradient />
            </div>
          </StoryCard>

          <StoryCard left>
            <div className="stories md:bg-somwarpet bg-somwarpet-sm">
              <Info
                title="Somwarpet’s Beauty"
                name="Michelle"
                date="March 1st 2020"
              />
              <Gradient />
            </div>
          </StoryCard>

          <StoryCard>
            <div className="stories md:bg-dreams bg-dreams-sm">
              <Info
                title="Land of Dreams"
                name="William Malcolm"
                date="February 25th 2020"
              />
              <Gradient />
            </div>
          </StoryCard>
        </>
      </div>
    </Layout>
  );
};

export default Stories;
