import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/download.jpg";
import user2 from "../assets/profile-pictures/download.jpg";
import user3 from "../assets/profile-pictures/download.jpg";
import user4 from "../assets/profile-pictures/download.jpg";
import user5 from "../assets/profile-pictures/download.jpg";
import user6 from "../assets/profile-pictures/download.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    // user: "John Doe",
    company: "Aaj-Tak",
    image: user1,
    text: "Rajnath Singh reiterates India's stand on PoK; tears into Opposition on allegations of using ED, CBI.......read more",
  },
  {
    // user: "Jane Smith",
    company: "Zee-Tv",
    image: user2,
    text: "Indians with pending EAD applications stand to benefit with extended validity tenure",
  },
  {
    // user: "David Johnson",
    company: "TOI",
    image: user3,
    text: "IAF's transport, infra focus | Swift tactical airlifts to the border",
  },
  {
    // user: "Ronee Brown",
    company: "Times-Now",
    image: user4,
    text: "Reforms | Do or die for the DRDO facing consequences due to the newest govternment policies.",
  },
  {
    // user: "Michael Wilson",
    company: "New-Nation",
    image: user5,
    text: "Rajnath Singh reiterates India's stand on PoK; tears into Opposition on allegations of using ED, CBI",
  },
  {
    // user: "Emily Davis",
    company: "Aaj-Tak",
    image: user6,
    text: "Indians with pending EAD applications stand to benefit with extended validity tenure",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  // { href: "#", text: "Tutorials" },
  // { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  // { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  // { href: "#", text: "Events" },
  // { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  // { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];