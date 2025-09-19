import { DashboardIcon } from "@radix-ui/react-icons";
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
  PencilIcon,
  StarIcon,
  TableIcon,
  TargetIcon,
  UsersIcon,
} from "lucide-react";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Weivly",
  description: "Weivly",
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
      name: "Comprehensive Dashboard",
      description:
        "Track your weight, body composition & more with our comprehensive dashboard.",
      icon: <DashboardIcon className="h-6 w-6" />,
    },
    {
      name: "Advanced Visualizations",
      description:
        "Track progress with our advanced graph & chart data animations + table data.",
      icon: <PencilIcon className="h-6 w-6" />,
    },
    {
      name: "Target focused",
      description:
        "Stay motivated by setting targets and tracking your progress with our target focused metrics.",
      icon: <TargetIcon className="h-6 w-6" />,
    },
    {
      name: "Hourly Data Tables",
      description: "Easily see hourly weather data for your favorite teams fixture with detailed information.",
      icon: <TableIcon className="h-6 w-6" />,
    },
    {
      name: "Notifications",
      description: "Receive weather notifications 3 days in advance for your favorite teams&apos; fixtures.",
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
      title: "Comprehensive dashboard",
      description:
        "Track your weight, body composition & more with our metric-focused dashboard.",
      imageSrc: "/dashboard1.svg",
      direction: "rtl" as const,
    },
    {
      title: "Advanced Visualizations",
      description:
        "Track progress with our advanced graph & chart data animations + table data.",
      imageSrc: "/metric1.svg",
      direction: "ltr" as const,
    },
    {
      title: "Target focused",
      description:
        "Stay motivated by setting targets and tracking your progress with our target focused metrics.",
      imageSrc: "/metric5.svg",
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
      title: "Notifications",
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
      text: "Search from 25,000+ teams",
      image: "/MyGameWeather_Promo_Global_Search.svg",
    },
    {
      id: 2,
      text: "Choose from next 5 fixtures",
      image: "/MyGameWeather_Promo_Fixtures.svg",
    },
    {
      id: 3,
      text: "See advanced visualizations",
      image: "/MyGameWeather_Promo_Visualization.svg",
    },
    {
      id: 4,
      text: "Get hourly insights",
      image: "/MyGameWeather_Promo_All_Weather_Data.svg",
    },
    {
      id: 5,
      text: "Create profile",
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
      name: "Free Trial",
      href: "#",
      price: "Free",
      period: "1 month",
      features: [
        "Part of Monthly plan",
        "Part of Annual plan",
      ],
      description: "Full access",
      buttonText: "Start Free",
      isPopular: false,
    },
    {
      name: "Monthly",
      href: "#",
      price: "€1.99",
      period: "month",
      features: [
        "Target weight date predictor",
        "Weight metrics",
        "Muscle % metrics",
        "Body fat % metrics",
        "BMI metrics",
        "Advanced visualizations",
        "Monthly average calculator",
      ],
      description: "Monthly subscription",
      buttonText: "Upgrade to Pro",
      isPopular: false,
    },
    {
      name: "Annual",
      href: "#",
      price: "€9.99",
      period: "year",
      features: [
        "Everything in Monthly",
        "58% discount on Monthly",
      ],
      description: "Annual subscription",
      buttonText: "Start Free",
      isPopular: true,
    },
  ],
  faqs: [
    {
      question: "How accurate is the weather data in the app?",
      answer: (
        <span>
          MGW uses industry-leading global weather data sources to provide highly accurate forecasts. Our weather data is updated multiple times per day to ensure you have the most current information for any fixture.
        </span>
      ),
    },
    {
      question: "How far in advance can I check weather for upcoming matches?",
      answer: (
        <span>
          Weather data visuzlaizations are available 4 days in advance. You can check weather forecasts, such as data info, charts and tables, for upcoming fixtures up to 14 days in advance. For the most accurate predictions, we recommend checking within 7 days of the match, as weather forecasts become more precise as the fixture approaches.
        </span>
      ),
    },
    {
      question: "How do I set notifications for my favorite team's matches?",
      answer: (
        <span>
          Simply create a profile, search for your favorite team, and mark them as a favorite. You'll then have the option to receive weather notifications 3 days before any fixture. Notifications are completely free and can be customized in your profile settings.
        </span>
      ),
    },
    {
      question: "How many teams and leagues are covered in the app?",
      answer: (
        <span>
          MGW provides weather data for over 25,000 teams across 1,100+ leagues and cups worldwide. From the biggest professional leagues to local non-league clubs, we've got comprehensive global coverage to support fans at every level.
        </span>
      ),
    },
    {
      question: "What weather information is available for each match?",
      answer: (
        <span>
          For each fixture, you can access detailed hourly data including temperature, 'feels like' temperature, wind speed and direction, precipitation probability, rainfall amounts, air pressure, and humidity. All data is presented with easy-to-understand visualizations.
        </span>
      ),
    },
    {
      question: "Is MGW available for both iOS and Android?",
      answer: (
        <span>
          Yes, MGW is available for both iOS and Android. Go to the top of the page for both the iOS and Android download links.
        </span>
      ),
    },
    {
      question: "What's the difference between the free and paid versions?",
      answer: (
        <span>
          The free Universal version gives you complete access to all weather data and features. Our paid plans (Supporter, Season Ticket, and Ultra) simply remove advertisements from the experience. All core weather features are available in every plan.
        </span>
      ),
    },
    {
      question: "How can I provide feedback or report issues with the app?",
      answer: (
        <span>
          We welcome your feedback! You can contact us directly at info@mgw.football or reach out via our social media channels. We're constantly working to improve the app and value user suggestions for new features and improvements.
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
