import {
  BellIcon,
  BrainIcon,
  CalendarIcon,
  ChartLineIcon,
  ClockIcon,
  CloudIcon,
  CloudSunRainIcon,
  EarthIcon,
  EyeIcon,
  GlobeIcon,
  StarIcon,
  TableIcon,
  UsersIcon,
} from "lucide-react";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "MGW",
  description: "My Game Weather",
  cta: "Download Now",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  appStoreUrl: "https://apps.apple.com/nl/app/my-game-weather/id6742402918?l=en-GB",
  keywords: [
    "Football",
    "Weather",
    "Sports",
    "Weather Forecast",
  ],
  links: {
    email: "info@mgw.football",
    twitter: "https://twitter.com/mgw_football",
    instagram: "https://instagram.com/mgw_football",
  },
  features: [
    {
      name: "Global Coverage",
      description:
        "Access 25,000+ teams from 1,100+ leagues & cups worldwide with a single search.",
      icon: <EarthIcon className="h-6 w-6" />,
    },
    {
      name: "Elite Weather Data",
      description:
        "See accurate weather forecasts from industry leading global data sources.",
      icon: <CloudSunRainIcon className="h-6 w-6" />,
    },
    {
      name: "Advanced Visualizations",
      description:
        "Bring your game to life with amazing weather animations for temperature, rain, wind & pressure.",
      icon: <EyeIcon className="h-6 w-6" />,
    },
    {
      name: "Hourly Data Tables",
      description: "Easily see hourly weather data for your favorite teams fixture with detailed information.",
      icon: <TableIcon className="h-6 w-6" />,
    },
    {
      name: "Notifications",
      description: "Receive weather notifications 3 days in advance for your favorite teams' fixtures.",
      icon: <BellIcon className="h-6 w-6" />,
    },
    {
      name: "Favourite Team",
      description:
        "Create a profile to save your favorite teams and easily find their weather data.",
      icon: <StarIcon className="h-6 w-6" />,
    },
  ],
  featureHighlight: [
    {
      title: "Global Coverage",
      description:
        "Access every team from 1,100+ leagues & cups worldwide with a single search.",
      imageSrc: "/MyGameWeather_Promo_Global_Search.svg",
      direction: "rtl" as const,
    },
    {
      title: "Elite Weather Data",
      description:
        "See accurate weather forecasts from industry leading global data sources.",
      imageSrc: "/MyGameWeather_Promo_Temp.svg",
      direction: "ltr" as const,
    },
    {
      title: "Advanced Visualizations",
      description:
        "Bring your game to life with amazing weather animations for temperature, rain, wind & pressure.",
      imageSrc: "/MyGameWeather_Promo_Visualization.svg",
      direction: "rtl" as const,
    },
  ],
  bento: [
    {
      title: "Match Time Display",
      content:
        "No scrolling needed! Easily see the match duration and kick off time for your favorite teams fixtures in the data sections.",
      imageSrc: "/MyGameWeather_Promo_Match_Time_Highlight.svg",
      imageAlt: "Team collaboration illustration",
      fullWidth: false,
    },
    {
      title: "Schedule Prompts",
      content:
        "If fixture weather data is not available yet, you can schedule a notification to get the weather for your favourite teams fixtures.",
      imageSrc: "/MyGameWeather_Promo_No_Data_Available.svg",
      imageAlt: "Time blocking illustration",
      fullWidth: false,
    },
    {
      title: "Receive Notifications",
      content:
        "Be prepared for all eventualities with weather notifications for your favorite teams 3 days in advance of the fixture. Notifications are always free.",
      imageSrc: "/MyGameWeather_Promo_Notifications.svg",
      imageAlt: "AI scheduling illustration",
      fullWidth: true,
    },
    {
      title: "Hourly Data Tables",
      content:
        "Effortlessly see hourly weather data for your favorite teams fixture with detailed temp, feels like temp, wind speed and % chance of rain.",
      imageSrc: "/MyGameWeather_Promo_Weather_Table.svg",
      imageAlt: "Team collaboration illustration",
      fullWidth: false,
    },
    {
      title: "Easy Search",
      content:
        "Save time by having your favourite team saved in the team search, so you can quickly find the weather for their next fixtures.",
      imageSrc: "/MyGameWeather_Promo_Easy_Favourite_Search.svg",
      imageAlt: "Smart reminders illustration",
      fullWidth: false,
    },
  ],
  benefits: [
    {
      id: 1,
      text: "Search from 25,000+ teams globally",
      image: "/MyGameWeather_Promo_Global_Search.svg",
    },
    {
      id: 2,
      text: "Choose from the team's next 5 fixtures",
      image: "/MyGameWeather_Promo_Fixtures.svg",
    },
    {
      id: 3,
      text: "See advanced weather data visualizations",
      image: "/MyGameWeather_Promo_Visualization.svg",
    },
    {
      id: 4,
      text: "Get hourly insights from data sources",
      image: "/MyGameWeather_Promo_All_Weather_Data.svg",
    },
    {
      id: 5,
      text: "Sign up to receive notifications",
      image: "/MyGameWeather_Promo_Profile.svg",
    },
    {
      id: 6,
      text: "Receive weather notifications",
      image: "/MyGameWeather_Promo_Notifications.svg",
    }
  ],
  pricing: [
    {
      name: "Universal",
      href: "#",
      price: "€0",
      period: "always",
      features: [
        "Access to 25,000+ teams",
        "Elite weather data",
        "Advanced visualizations",
        "Hourly data tables",
        "Free notifications",
        "Pick your favourite team",
      ],
      description: "Full access",
      buttonText: "Start Free",
      isPopular: false,
    },
    {
      name: "Supporter",
      href: "#",
      price: "€3.99",
      period: "month",
      features: [
        "Everything in Universal",
        "No ads",
      ],
      description: "Monthly subscription",
      buttonText: "Upgrade to Pro",
      isPopular: true,
    },
    {
      name: "Season Ticket",
      href: "#",
      price: "€39.99",
      period: "year",
      features: [
        "Everything in Universal",
        "No ads",
        "10% discount on Supporter",
      ],
      description: "Annual subscription",
      buttonText: "Start Free",
      isPopular: false,
    },
    {
      name: "Ultra",
      href: "#",
      price: "€99.99",
      period: "lifetime",
      features: [
        "Everything in Universal",
        "No ads",
        "One-off payment",
        "Best value package",
      ],
      description: "Lifetime access",
      buttonText: "Upgrade to Pro",
      isPopular: true,
    },
  ],
  faqs: [
    {
      question: "How does AI improve my scheduling?",
      answer: (
        <span>
          Our AI analyzes your scheduling patterns, preferences, and
          productivity data to suggest optimal times for tasks and meetings. It
          learns from your behavior to continuously improve its recommendations.
        </span>
      ),
    },
    {
      question: "Can I integrate Cal AI with other apps?",
      answer: (
        <span>
          Yes, Cal AI integrates with popular productivity tools and calendar
          apps. You can sync with Google Calendar, Outlook, and more to
          centralize your scheduling.
        </span>
      ),
    },
    {
      question: "How does the team collaboration feature work?",
      answer: (
        <span>
          Team collaboration allows you to share availability, schedule group
          meetings, and coordinate tasks. The AI considers everyone&apos;s
          schedules to find the best times for team activities.
        </span>
      ),
    },
    {
      question: "Is my data secure with Cal AI?",
      answer: (
        <span>
          We take data security seriously. All your calendar data is encrypted
          end-to-end and stored securely in the cloud. We never share your
          personal information or scheduling data with third parties.
        </span>
      ),
    },
    {
      question: "Can I use Cal AI offline?",
      answer: (
        <span>
          While full functionality requires an internet connection, you can view
          your schedule and add events offline. The app will sync and apply AI
          optimizations when you&apos;re back online.
        </span>
      ),
    },
  ],
  footer: [
    {
      id: 1,
      menu: [
        { href: "#", text: "Features" },
        { href: "#", text: "Pricing" },
        { href: "#", text: "About Us" },
        { href: "#", text: "Blog" },
        { href: "#", text: "Contact" },
      ],
    },
  ],
  testimonials: [
    {
      id: 1,
      text: "This app is a game changer for match day planning - banging!",
      name: "Bradford1972",
    },
    {
      id: 2,
      text: "The hourly weather forecasts have saved me from getting soaked at games so many times. I check MGW before every away day now.",
      name: "DannyToy",
    },
    {
      id: 3,
      text: "Being able to save my local club makes checking the weather easy.",
      name: "Hull Mark",
    },
    {
      id: 4,
      text: "I love the detailed temperature readings and wind information. It helps me decide exactly what to wear to matches.",
      name: "Steveie",
    },
    {
      id: 5,
      text: "The rain predictions are spot on! No more surprise downpours.",
      name: "Utrecht87",
    },
    {
      id: 6,
      text: "I follow teams across different countries, and having all this weather data in one place is brilliant. The global coverage is impressive.",
      name: "Sara",
    },
    {
      id: 7,
      text: "The animations make it so easy to understand the weather at a glance.",
      name: "Ryan",
    },
    {
      id: 8,
      text: "The hourly breakdown is incredibly useful for knowing when we might need to go to the pub or not :)",
      name: "Emma88",
    },
    {
      id: 9,
      text: "Never been caught in the rain at a match since downloading this app. The rain probability feature is brilliant!",
      name: "Chris",
    },
    {
      id: 10,
      text: "Can't beleive I can see fixtures for my non-league team!!!",
      name: "Gary108",
    },
    {
      id: 11,
      text: "The temperature data is spot on. Really helps when deciding what layers to bring to evening matches.",
      name: "Alex",
    },
    {
      id: 12,
      text: "I travel all over Europe supporting my team - having accurate weather data for away fixtures has made packing so much easier!",
      name: "Nathan",
    },
    {
      id: 13,
      text: "Great app! Perfect for quick checks before heading to the stadium.",
      name: "Maya",
    },
    {
      id: 14,
      text: "Brilliant that I don't have to use loads of different ways to figure out where the away ground is.",
      name: "Ben",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
