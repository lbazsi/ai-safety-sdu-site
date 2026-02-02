import { Outlet } from "react-router-dom";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-stone-50 text-zinc-950 flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
