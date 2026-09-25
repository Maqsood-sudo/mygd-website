import {
  BookOpen,
  Moon,
  Volleyball,
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
import {
  InstagramIcon,
  WhatsappIcon,
} from "@/components/ui/social-icons";

export type IconComponent = ComponentType<{
  size?: number;
  className?: string;
  strokeWidth?: number;
}>;

export const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Programs", href: "/#programs" },
  { label: "Events", href: "/events" },
  { label: "Shop", href: "/shop" },
  { label: "Connect", href: "/connect" },
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
  href?: string;
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
    href: "/programs/halaqas",
    image: "/qiyaam-poster.png",
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
    href: "/programs/qiyams",
    image: "/qiyam2.jpg",
  },
  {
    id: "sports",
    icon: Volleyball,
    title: "Sports Leagues",
    description:
      "Competitive and recreational sports for brothers and sisters. Hoops, soccer & more.",
    meta: [
      { icon: Calendar, label: "Seasonal" },
      { icon: Users, label: "Team-based" },
    ],
    href: "/programs/sports",
    image: "/sports.jpg",
    imagePosition: "center 15%",
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

export type Event = {
  id: string;
  icon: IconComponent;
  title: string;
  description: string;
  date?: string; // ISO date string; omit if date is TBD
  time?: string;
  location: string;
  tag?: string;
  cost?: string;
  signupUrl?: string;
  href?: string; // internal page link (same-tab navigation)
  poster?: string;
};

export const UPCOMING_EVENTS: Event[] = [
  {
    id: "qiyam-october",
    icon: Moon,
    title: "Monthly Qiyam",
    description:
      "Late-night worship gathering that strengthens our connection with Allah and each other. Open to all brothers and sisters. Chai and snacks provided.",
    date: "2026-10-02",
    time: "After Isha",
    location: "879 W Auburn Rd, Rochester Hills, MI 48307",
    tag: "Spiritual",
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
    value: "Instagram",
  },
] as const;

export const GET_INVOLVED_CONTACT = {
  name: "Shahvayz Shuttari",
  role: "Get Involved",
  methods: [
    { icon: Phone, value: "+1 (248) 854-7214", href: "tel:+12488547214" },
    {
      icon: Mail,
      value: "youthdirector@iagd.net",
      href: "mailto:youthdirector@iagd.net",
    },
  ],
};

export const SOCIALS = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/mygd_insta/?hl=en",
  },
] as const;

export const CONNECT_LINKS = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    description: "Follow @mygd_insta for updates & reels",
    href: "https://www.instagram.com/mygd_insta/?hl=en",
    ready: true,
  },
  {
    icon: WhatsappIcon,
    label: "WhatsApp",
    description: "Join our WhatsApp community",
    href: "https://chat.whatsapp.com/C4zTs9fCVC0Ctb5y5urteu",
    ready: true,
  },
] as const;

export const DONATE_LINKS = [
  {
    label: "Venmo",
    monogram: "V",
    color: "#3D95CE",
    value: "@MY-GD",
    href: "https://venmo.com/u/MY-GD",
    copyable: false,
  },
  {
    label: "Zelle",
    monogram: "Z",
    color: "#6D1ED4",
    value: "mygdfinance@gmail.com",
    href: null,
    copyable: true,
  },
] as const;

export const MASJID = {
  name: "IAGD",
  address: "879 W Auburn Rd, Rochester Hills, MI 48307",
  latitude: 42.6583,
  longitude: -83.1499,
};
