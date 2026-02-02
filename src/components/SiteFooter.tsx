import { Instagram } from "lucide-react";
import { MOTTO, SOCIAL_LINKS } from "../content/siteData";
import { FacebookIcon, WhatsAppIcon } from "./BrandIcons";

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4">
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} SIRAIS. All rights reserved.
          </p>

          <p className="text-sm text-zinc-700 text-center">{MOTTO}</p>

          <div className="flex items-center justify-center sm:justify-end gap-3">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-md border border-zinc-200 bg-white flex items-center justify-center text-zinc-800 hover:text-zinc-950 hover:border-zinc-300 transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-md border border-zinc-200 bg-white flex items-center justify-center text-zinc-800 hover:text-zinc-950 hover:border-zinc-300 transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-md border border-zinc-200 bg-white flex items-center justify-center text-zinc-800 hover:text-zinc-950 hover:border-zinc-300 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
