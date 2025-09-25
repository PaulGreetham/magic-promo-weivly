import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import {
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { TermsModal } from "@/components/terms-modal";
import { FaThreads, FaTiktok } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

interface Icon {
  icon: JSX.Element;
  url: string;
  label: string;
}

const icons: Icon[] = [
  { 
    icon: <TwitterLogoIcon className="w-5 h-5" />, 
    url: "https://twitter.com/weivly_app",
    label: "Twitter"
  },
  { 
    icon: <InstagramLogoIcon className="w-5 h-5" />, 
    url: "https://instagram.com/weivly.app",
    label: "Instagram"
  },
  { 
    icon: <FaThreads className="w-4 h-4" />, 
    url: "https://threads.net/@weivly.app",
    label: "Threads"
  },
  { 
    icon: <MdEmail className="w-5 h-5" />, 
    url: "mailto:info@vertechx-collective.com",
    label: "Email"
  },
];

export function Footer() {
  return (
    <footer className="flex flex-col gap-y-5 rounded-lg px-7 py-5 md:px-10 container">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <h2 className="text-lg font-bold text-foreground">
            {siteConfig.name}
          </h2>
        </div>

        <div className="flex gap-x-3">
          {icons.map((icon, index) => (
            <a
              key={index}
              href={icon.url}
              aria-label={icon.label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-5 w-5 items-center justify-center text-muted-foreground transition-all duration-100 ease-linear hover:text-foreground hover:underline hover:underline-offset-4"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-y-5 md:flex-row md:items-center">
        <div className="text-[15px]/normal font-medium">
          <TermsModal />
        </div>
        <div className="flex items-center justify-between text-sm font-medium tracking-tight text-muted-foreground">
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
