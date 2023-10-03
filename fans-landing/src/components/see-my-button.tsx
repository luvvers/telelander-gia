import { creatorUrl, creatorLinkType } from "../../public/config/data.json";

export const SeeMyButton = () => {
  return (
    <button className="bg-sky-400 hover:bg-sky-500 text-white font-bold py-3 lg:py-6 px-16 lg:px-72 rounded-3xl">
      <a href={creatorUrl} className="text-md lg:text-2xl w-full truncate">
        {creatorLinkType === "telegram"
          ? "❤️ JOIN MY TELEGRAM ❤️"
          : "❤️ SEE MY ONLYFANS ❤️"}
      </a>
    </button>
  );
};
