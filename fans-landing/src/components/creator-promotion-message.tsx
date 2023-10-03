import { creatorLinkType } from "../../public/config/data.json";

export const CreatorPromotionMessage = () => {
  return (
    <p>
      {" "}
      {creatorLinkType === "telegram"
        ? "Only 2 content application spots left!"
        : "Get access to my private account now! Only $3.00/m for a limited time!"}
    </p>
  );
};
