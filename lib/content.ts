import {
  BookOpen,
  Tent,
  Moon,
  Volleyball,
  RollerCoaster,
  Flame,
  UtensilsCrossed,
  Users,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Clock,
} from "lucide-react";
import type { ComponentType } from "react";
import { InstagramIcon, YoutubeIcon } from "@/components/ui/social-icons";

export type IconComponent = ComponentType<{
  size?: number;
  className?: string;
  strokeWidth?: number;
}>;

export const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Programs", href: "/#programs" },
  { label: "Brothers", href: "/events/brothers" },
  { label: "Sisters", href: "/events/sisters" },
  { label: "Mizan", href: "/mizan" },
  { label: "Merch", href: "/merch" },
  { label: "Contact", href: "/#contact" },
] as const;

export const PILLARS = [
  "Faith & Spirituality",
  "Community Service",
  "Youth Leadership",
  "Brotherhood & Sisterhood",
] as const;

export type ProgramMeta = { icon: IconComponent; label: string };

export type Program = {
  id: string;
  icon: IconComponent;
  title: string;
  description: string;
  meta: ProgramMeta[];
  image?: string;
  imagePosition?: string;
};

export const PROGRAMS: Program[] = [
  {
    id: "halaqas",
    icon: BookOpen,
    title: "Weekly Halaqas",
    description:
      "Regular circles of knowledge and reflection, building understanding of our deen together.",
    meta: [
      { icon: Calendar, label: "Weekly" },
      { icon: MapPin, label: "IAGD" },
    ],
    image: "/halaqah-crop.jpg",
  },
  {
    id: "retreats",
    icon: Tent,
    title: "Youth Retreats",
    description:
      "Weekend getaways focused on personal growth, team building, and spiritual rejuvenation.",
    meta: [
      { icon: Calendar, label: "Seasonal" },
      { icon: Users, label: "Limited spots" },
    ],
  },
  {
    id: "qiyam",
    icon: Moon,
    title: "Monthly Qiyams",
    description:
      "Late-night worship gatherings that strengthen our connection with Allah and each other.",
    meta: [
      { icon: Calendar, label: "Monthly" },
      { icon: Clock, label: "Late night" },
    ],
    image: "/qiyam.jpg",
  },
  {
    id: "sports",
    icon: Volleyball,
    title: "Sports Leagues",
    description:
      "Competitive and recreational sports for brothers and sisters — hoops, soccer & more.",
    meta: [
      { icon: Calendar, label: "Seasonal" },
      { icon: Users, label: "Team-based" },
    ],
    image: "/sports.jpg",
    imagePosition: "center 15%",
  },
  {
    id: "cedar-point",
    icon: RollerCoaster,
    title: "Cedar Point Trip",
    description:
      "Our annual day trip to Cedar Point — a full day of rides and brotherhood/sisterhood outside IAGD.",
    meta: [
      { icon: Calendar, label: "Annual" },
      { icon: Users, label: "All ages" },
    ],
  },
];

export type EventType = {
  id: string;
  icon: IconComponent;
  name: string;
  description: string;
};

export const EVENT_TYPES: EventType[] = [
  {
    id: "bonfires",
    icon: Flame,
    name: "Bonfires",
    description: "Outdoor s'mores & good talks",
  },
  {
    id: "friendsgiving",
    icon: UtensilsCrossed,
    name: "Friendsgiving",
    description: "Sisters' annual gathering",
  },
  {
    id: "qiyams",
    icon: Moon,
    name: "Qiyams",
    description: "Night prayer & reflection",
  },
  {
    id: "game-nights",
    icon: Users,
    name: "Game Nights",
    description: "Sports, fun & competition",
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "879 W Auburn Rd, Rochester Hills, MI 48307",
  },
  {
    icon: Mail,
    label: "Email",
    value: "brothersyd@iagd.net",
  },
  {
    icon: InstagramIcon,
    label: "Follow Us",
    value: "Instagram & YouTube",
  },
] as const;

export const GET_INVOLVED_CONTACT = {
  name: "Shahvayz Shuttari",
  role: "Get Involved",
  methods: [
    { icon: Phone, value: "+1 (248) 854-7214", href: "tel:+12488547214" },
    {
      icon: Mail,
      value: "shahvayz11@gmail.com",
      href: "mailto:shahvayz11@gmail.com",
    },
  ],
};

export const SOCIALS = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/mygd_insta/?hl=en",
  },
  { icon: YoutubeIcon, label: "YouTube", href: "#" },
] as const;

export const MASJID = {
  name: "IAGD",
  address: "879 W Auburn Rd, Rochester Hills, MI 48307",
  latitude: 42.6583,
  longitude: -83.1499,
};
