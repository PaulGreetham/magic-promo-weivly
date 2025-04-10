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
      period: "month",
      features: [
        "Access to 25,000+ teams",
        "Elite weather data",
        "Advanced visualizations",
        "Hourly data tables",
        "Free notifications",
        "Pick your favourite team",
      ],
      description: "Basic access",
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
      text: "Cal AI has revolutionized how I manage my time. It&apos;s like having a personal assistant.",
      name: "Alice Johnson",
      role: "Freelance Designer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      text: "The AI-powered scheduling has significantly reduced conflicts in our team&apos;s calendar.",
      name: "Bob Brown",
      role: "Project Manager, Tech Innovations",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 3,
      text: "The smart time blocking feature has helped me maintain a better work-life balance.",
      name: "Charlie Davis",
      role: "Entrepreneur",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 4,
      text: "Cal AI's predictive planning has made my workweek so much more efficient.",
      name: "Diana Evans",
      role: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 5,
      text: "The team collaboration features have streamlined our project management process.",
      name: "Ethan Ford",
      role: "Software Team Lead",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 6,
      text: "Cal AI has helped me balance my work and personal commitments effortlessly.",
      name: "Fiona Grant",
      role: "HR Manager",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 7,
      text: "The AI-driven insights have helped me optimize my daily routines significantly.",
      name: "George Harris",
      role: "Productivity Coach",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 8,
      text: "Cal AI's integration with my other tools has created a seamless workflow.",
      name: "Hannah Irving",
      role: "Digital Nomad",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 9,
      text: "The smart reminders have drastically reduced my missed appointments.",
      name: "Ian Johnson",
      role: "Sales Executive",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 10,
      text: "Cal AI's ability to learn my preferences has made scheduling a breeze.",
      name: "Julia Kim",
      role: "Researcher",
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 11,
      text: "The AI-suggested meeting times have improved our team's productivity.",
      name: "Kevin Lee",
      role: "Operations Manager",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 12,
      text: "Cal AI's travel time estimations have made my commute planning much easier.",
      name: "Laura Martinez",
      role: "Urban Planner",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 13,
      text: "The AI-powered task prioritization has helped me focus on what's truly important.",
      name: "Michael Nelson",
      role: "Entrepreneur",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 14,
      text: "Cal AI's habit tracking feature has helped me build better routines.",
      name: "Natalie Owens",
      role: "Personal Trainer",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 15,
      text: "The AI suggestions for breaks have improved my work-from-home productivity.",
      name: "Oscar Parker",
      role: "Remote Worker",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 16,
      text: "Cal AI's integration with my smart home devices has streamlined my mornings.",
      name: "Patricia Quinn",
      role: "Tech Enthusiast",
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 17,
      text: "The AI-driven energy level tracking has helped me schedule tasks more effectively.",
      name: "Quincy Roberts",
      role: "Productivity Consultant",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 18,
      text: "Cal AI's goal-setting features have kept me accountable and on track.",
      name: "Rachel Stevens",
      role: "Life Coach",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 19,
      text: "The AI-suggested focus times have dramatically improved my deep work sessions.",
      name: "Samuel Thompson",
      role: "Writer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 20,
      text: "Cal AI's team availability feature has made cross-timezone scheduling effortless.",
      name: "Tina Upton",
      role: "Global Project Coordinator",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 21,
      text: "The AI-powered meeting summarizer has saved me hours of note-taking.",
      name: "Ulysses Vaughn",
      role: "Executive Assistant",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 22,
      text: "Cal AI's personalized productivity insights have been eye-opening.",
      name: "Victoria White",
      role: "Business Analyst",
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 23,
      text: "The AI-suggested networking opportunities have expanded my professional circle.",
      name: "William Xavier",
      role: "Startup Founder",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 24,
      text: "Cal AI's integration with my fitness tracker has helped me maintain a healthier lifestyle.",
      name: "Xena Yates",
      role: "Wellness Coach",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 25,
      text: "The AI-driven project timeline suggestions have kept our team ahead of deadlines.",
      name: "Yannick Zimmerman",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
