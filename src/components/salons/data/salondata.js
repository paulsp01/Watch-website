import {
  KeyRound,
  ShieldCheck,
  Crown,
} from "lucide-react";
import img8 from "../../../assets/img8.png"
import img9 from "../../../assets/img9.png"
import img10 from "../../../assets/img10.png"

export const salons = [
  {
    location: "Geneva · Switzerland",
    established: "Est. 1898",
    title: "Geneva Atelier",
    subtitle: "Sanctuary",

    description:
      "Perched above the crystalline waters of Lake Geneva, our private Geneva atelier offers an intimate setting for exceptional collectors seeking the finest in horological craftsmanship and discreetly curated acquisitions.",

    image:img8,

    thumbnails: [
     img8,
     img8,
    ],

    map:img8,

    tag: "01 · Private Salon · Lake Geneva",

    address: "Rhone 12, Geneva",

    hours: "One Private Dialogue / Salon",

    phone: "+41 22 910 00 00",

    email: "geneva@maisonelysee.ch",

    architect: "Rothschild Interior Atelier",

    specialty: "High Complications & Rare Horology",
  },

  {
    location: "Paris · France",
    established: "Hotel Particulier",
    title: "Paris Salon",
    subtitle: "Privé",

    description:
      "Located within a discreet residence in the heart of Paris, our salon offers an intimate environment for collectors seeking exceptional pieces and private horological experiences.",

    image: img9,

    thumbnails: [
      img9,
    img9,
    ],

    map: img9,

    tag: "02 · Place Vendôme · 75001 Paris",

    address: "8 Rue de la Paix, Paris",

    hours: "By Appointment Only",

    phone: "+33 1 42 00 00 00",

    email: "paris@maisonelysee.ch",

    architect: "Roche & Partners",

    specialty: "High Jewellery Watches & Rare Gems",
  },

  {
    location: "London · United Kingdom",
    established: "Mayfair · 2026",
    title: "London Mayfair",
    subtitle: "Residence",

    description:
      "A discreet destination in London's historic Mayfair, where private collectors can explore exceptional timepieces, rare complications and carefully selected horological treasures.",

    image:img10,

    thumbnails: [
     img10,
     img10,
    ],

    map:img10,

    tag: "03 · Old Bond Street · Mayfair",

    address: "28 Old Bond Street, London",

    hours: "Private Appointments",

    phone: "+44 20 7945 0000",

    email: "london@maisonelysee.ch",

    architect: "Rose & Associates",

    specialty: "Rare Complications & Collector's Vault",
  },
];


export const accessSteps = [
  {
    icon: KeyRound,

    step: "Stage 01 · Transit",

    title: "Discreet Limousine Transfer",

    description:
      "Arrive in complete privacy through our confidential chauffeur service, available from Geneva airport and selected private residences.",

    button: "Request Transport",
  },

  {
    icon: ShieldCheck,

    step: "Stage 02 · Audience",

    title: "Unhurried 2-Hour Bespoke Audience",

    description:
      "The sanctuary is yours alone. Take your time exploring rare timepieces, complications and private collections with our horological consultants.",

    button: "Book Private Audience",
  },

  {
    icon: Crown,

    step: "Stage 03 · On Display",

    title: "Master Watchmaker Consultation",

    description:
      "Engage directly with a master watchmaker and explore exceptional movements, bespoke commissions and the Maison's private archives.",

    button: "Meet Our Experts",
  },
];