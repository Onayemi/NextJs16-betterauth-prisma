import FooterSection from "@/components/footer"
import { HeroHeader } from "@/components/header"
import HeroSection from "@/components/hero-section"
import React from "react"

const RootLayout = ({ children}: {children: React.ReactNode}) => {
  return (
    <>
        <HeroHeader />
        {/* <HeroSection /> */}
        <main className="mx-auto px-20">
            { children}
        </main>

        <FooterSection />
    </>
  )
}

export default RootLayout