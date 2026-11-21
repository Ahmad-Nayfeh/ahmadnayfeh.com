import type { Metadata } from "next"
import HomeView from "@/components/views/HomeView"

// The canonical address tells search engines that this, not the old vercel.app address, is the home page.
export const metadata: Metadata = {
  alternates: { canonical: "/", languages: { en: "/", ar: "/ar/" } },
}

export default function HomePage() {
  return <HomeView locale="en" />
}
