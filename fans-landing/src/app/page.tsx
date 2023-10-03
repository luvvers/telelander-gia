import { Country } from "@/components/country";
import { CreatorContentLogo } from "@/components/creator-content-logo";
import { CreatorFooter } from "@/components/creator-footer";
import { CreatorName } from "@/components/creator-name";
import { CreatorPromotionMessage } from "@/components/creator-promotion-message";
import { SeeMyButton } from "@/components/see-my-button";
import { SwiperImages } from "@/components/swiper-images";
import { creatorLinkType } from "../../public/config/data.json";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="antialiased text-gray-600 bg-gray-100">
        <div className="bg-gray-100">
          <div className="max-w-screen-lg mx-auto px-5">
            <a href="/">
              <div className="flex flex-row justify-center py-4">
                <div className="w-48 lg:w-64">
                  <CreatorContentLogo />
                </div>
              </div>
            </a>
          </div>
          <div className="max-w-screen-lg mx-auto px-5">
            <SwiperImages />
          </div>
        </div>
        <div className="bg-gray-100 pt-4 pb-2">
          <div className="max-w-screen-lg mx-auto px-5">
            <div
              className={
                creatorLinkType === "telegram"
                  ? "mb-3 lg:mb-6 text-center"
                  : "mb-6 lg:mb-12 text-center"
              }
            >
              <CreatorName />
              <div className="text-gray-800">
                <h4 className="text-sm lg:text-2xl font-weight: 600">
                  📍 {<Country withCountry={true} />} ❤️ 19 years ♒️ Virgo
                </h4>
                <p className="pt-2 text-sm lg:text-xl">🟢 Online Now</p>
              </div>
              <div
                className={
                  creatorLinkType === "telegram"
                    ? "text-sm lg:text-xl md:px-20 text-gray-800"
                    : "lg:mt-4 text-sm lg:text-xl md:px-20 py-3 lg:py-4 text-gray-800"
                }
              >
                {creatorLinkType === "onlyfans" && (
                  <>
                    <span>
                      Get exclusive access to my content and interact with me
                      directly.
                    </span>
                    <br />
                  </>
                )}

                <p
                  className={
                    creatorLinkType === "telegram"
                      ? "mt-2 lg:mt-4 text-sm lg:text-xl text-gray-800"
                      : "mt-2 lg:mt-4 text-sm lg:text-xl pt-3 text-gray-800"
                  }
                >
                  🍑 💦 Do you live near{" "}
                  <span className="font-bold">
                    {" "}
                    {<Country withCountry={false} />}
                  </span>
                  ?📍 DM me about making content 😉 🍑 🔥
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-center">
              <SeeMyButton />
            </div>
            <div className="mt-2 lg:mt-4 text-md lg:text-xl md:px-20 font-bold text-sky-400 text-center">
              <CreatorPromotionMessage />
            </div>
          </div>
        </div>
        <CreatorFooter />
      </div>
    </div>
  );
}
