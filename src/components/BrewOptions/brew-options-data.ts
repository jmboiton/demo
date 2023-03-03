import coffeeMakerIcon from "assets/coffee-maker-desktop.svg";
import frenchPressIcon from "assets/french-press-desktop.svg";
import pourOverIcon from "assets/pour-over-desktop.svg";
import aeroPressIcon from "assets/aeropress-desktop.svg";
import espressoIcon from "assets/espresso-desktop.svg";
import podsIcon from "assets/pods-desktop.svg";
import mokaPotIcon from "assets/moka-pot-desktop.svg";
import type { OptionType } from "components/OptionCard";

const brewOptionsData: OptionType[] = [
  {
    bgColor: "bg-yellow",
    img: {
      src: coffeeMakerIcon,
      alt: "coffee-maker",
    },
    label: "Coffee Maker",
    value: "coffee-maker",
    className: "xl:-rotate-12",
  },
  {
    bgColor: "bg-green-100",
    img: {
      src: frenchPressIcon,
      alt: "french-press",
    },
    label: "French Press",
    value: "french-press",
    className: "xl:-rotate-8",
  },
  {
    bgColor: "bg-pink",
    img: {
      src: pourOverIcon,
      alt: "pour-over",
    },
    label: "Pour Over",
    value: "pour-over",
    className: "xl:-rotate-4",
  },
  {
    bgColor: "bg-red-200",
    img: {
      src: aeroPressIcon,
      alt: "aeropress",
    },
    label: "AeroPress",
    value: "aeropress",
  },
  {
    bgColor: "bg-blue-200",
    img: {
      src: espressoIcon,
      alt: "espresso",
    },
    label: "Espresso",
    value: "espresso",
    className: "xl:rotate-4",
  },
  {
    bgColor: "bg-chocolate",
    img: {
      src: podsIcon,
      alt: "pods",
    },
    label: "Pods",
    value: "pods",
    className: "xl:rotate-8",
  },
  {
    bgColor: "bg-gray",
    img: {
      src: mokaPotIcon,
      alt: "moka-pot",
    },
    label: "Moka Pot",
    value: "moka-pot",
    className: "xl:rotate-12",
  },
];

export default brewOptionsData