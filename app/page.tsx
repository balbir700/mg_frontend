import { Button } from "@/components/ui/button"
import { Search, Bell, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/background.png')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-gray-900/90 backdrop-blur-sm px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <div className="cursor-pointer">
                <Image src="/images/mg-logo.png" alt="MG Metal Gauge" width={150} height={40} className="h-10 w-auto" />
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <Button
                variant="secondary"
                className="bg-gray-600 hover:bg-gray-500 text-white border-0 rounded-full px-6"
              >
                Home
              </Button>
              <Link href="/analysis">
                <Button variant="ghost" className="text-white hover:bg-gray-700 rounded-full px-6">
                  Analysis
                </Button>
              </Link>
              <Link href="/ai-prediction">
                <Button variant="ghost" className="text-white hover:bg-gray-700 rounded-full px-6">
                  Predictive Analysis
                </Button>
              </Link>
              <Button variant="ghost" className="text-white hover:bg-gray-700 rounded-full px-6">
                About Us
              </Button>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-3">
              <Button size="icon" variant="ghost" className="text-white hover:bg-gray-700 rounded-full">
                <Search className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:bg-gray-700 rounded-full">
                <Bell className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:bg-gray-700 rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h1 className="text-white text-6xl md:text-7xl font-bold leading-tight mb-16">
                WE ARE LEADERS IN
                <br />
                GROUNDWATER CONSULTING &<br />
                ENGINEERING
              </h1>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col lg:flex-row justify-between items-end mt-32">
              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-0">
                {/* Client */}
                <div className="text-white">
                  <h3 className="text-sm font-semibold mb-2 text-gray-300">CLIENT</h3>
                  <p className="text-lg font-medium">
                    Policymakers and Researchers
                    <br />
                    from all across India
                  </p>
                </div>

                {/* Service */}
                <div className="text-white">
                  <h3 className="text-sm font-semibold mb-2 text-gray-300">SERVICE</h3>
                  <p className="text-lg font-medium">
                    Groundwater Quality Visual
                    <br />
                    Representation using Graphs
                    <br />
                    and Maps
                  </p>
                </div>

                {/* Prediction */}
                <div className="text-white">
                  <h3 className="text-sm font-semibold mb-2 text-gray-300">PREDICTION</h3>
                  <p className="text-lg font-medium">
                    AI-driven parameter prediction
                    <br />
                    with policy recommendations for
                    <br />
                    policymakers
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Link href="/analysis">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-3 text-lg font-medium"
                >
                  Explore Project →
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
