import { ShopexOfferItem } from "../types/types";
import freeDeliveryIcon from "../assets/image/free-delivery-icon.png";
import cashBackIcon from "../assets/image/cashback-icon.png";
import premiumIcon from "../assets/image/premium-quality-icon.png";
import service from "../assets/image/24-hours-support-icon.png";

export const shopexCardItems: ShopexOfferItem[] = [
  {
    img: freeDeliveryIcon,
    title: "Free Delivery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    img: cashBackIcon,
    title: "Cash Back",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    img: premiumIcon,
    title: "Premium Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    img: service,
    title: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
];
