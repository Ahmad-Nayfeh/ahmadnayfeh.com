import type { Metadata } from "next"
import HomeView from "@/components/views/HomeView"

export const metadata: Metadata = {
  alternates: { canonical: "/ar/", languages: { en: "/", ar: "/ar/" } },
}

export default function HomePageArabic() {
  return <HomeView locale="ar" />
}
