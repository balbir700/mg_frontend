"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Bell, User, Plus, Minus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AIPredictionPage() {
  const [activeTab, setActiveTab] = useState("Prediction")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm px-6 py-4 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="cursor-pointer">
              <Image src="/images/mg-logo.png" alt="MG Metal Gauge" width={150} height={40} className="h-10 w-auto" />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/">
              <Button variant="ghost" className="text-gray-600 hover:bg-gray-100 rounded-full px-6">
                Home
              </Button>
            </Link>
            <Link href="/analysis">
              <Button variant="ghost" className="text-gray-600 hover:bg-gray-100 rounded-full px-6">
                Analysis
              </Button>
            </Link>
            <Button variant="default" className="bg-teal-700 hover:bg-teal-800 text-white rounded-full px-6">
              Predictive Analysis
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:bg-gray-100 rounded-full px-6">
              About Us
            </Button>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-3">
            <Button size="icon" variant="ghost" className="text-gray-600 hover:bg-gray-100 rounded-full">
              <Search className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="text-gray-600 hover:bg-gray-100 rounded-full">
              <Bell className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="text-gray-600 hover:bg-gray-100 rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 flex">
          {/* Left Section - Prediction */}
          <div className="flex-1 bg-white">
            {/* Tab Header */}
            <div className="bg-black text-white px-6 py-4">
              <h2 className="text-xl font-semibold">Prediction</h2>
            </div>

            {/* Map Container */}
            <div className="p-6">
              <div className="bg-gray-100 rounded-lg p-4 relative" style={{ height: "500px" }}>
                {/* Zoom Controls */}
                <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
                  <Button size="icon" variant="outline" className="bg-white">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="bg-white">
                    <Minus className="h-4 w-4" />
                  </Button>
                </div>

                {/* Color Scale Legend */}
                <div className="absolute top-4 right-4 z-10 bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-2 text-sm">
                    <span>16</span>
                    <div className="flex">
                      <div className="w-4 h-4 bg-yellow-200"></div>
                      <div className="w-4 h-4 bg-yellow-300"></div>
                      <div className="w-4 h-4 bg-yellow-400"></div>
                      <div className="w-4 h-4 bg-orange-300"></div>
                      <div className="w-4 h-4 bg-orange-400"></div>
                      <div className="w-4 h-4 bg-red-400"></div>
                      <div className="w-4 h-4 bg-red-500"></div>
                      <div className="w-4 h-4 bg-red-600"></div>
                      <div className="w-4 h-4 bg-red-700"></div>
                      <div className="w-4 h-4 bg-red-800"></div>
                      <div className="w-4 h-4 bg-red-900"></div>
                    </div>
                    <span>49</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Khed</div>
                </div>

                {/* Predicted HPI Label */}
                <div className="absolute top-16 left-4 z-10 bg-white px-3 py-1 rounded shadow-sm">
                  <span className="text-sm font-medium">Predicted HPI</span>
                </div>

                {/* Heat Map Grid */}
                <div className="absolute inset-0 p-16">
                  <div className="w-full h-full relative">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gkf1AqLydDCRkLtPI8NBaOZftN97SF.png"
                      alt="Predicted HPI Heat Map"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Documentation */}
          <div className="w-96 bg-gray-100">
            {/* Tab Header */}
            <div className="bg-black text-white px-6 py-4">
              <h2 className="text-xl font-semibold">Documentation</h2>
            </div>

            {/* Search Fields */}
            <div className="p-6 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Find State" className="pl-10 border-gray-300" />
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Find City/District" className="pl-10 border-gray-300" />
              </div>
            </div>

            {/* Data Parameters */}
            <div className="px-6">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-4">Data Parameters</h4>
                <div className="space-y-2">
                  {[
                    { label: "Latitude", value: "99.44" },
                    { label: "Longitude", value: "88.33" },
                    { label: "Industrial Load", value: "99.44" },
                    { label: "River HPI", value: "88.33" },
                    { label: "Land Use", value: "99.44" },
                    { label: "EC", value: "25.99" },
                    { label: "TDS", value: "43.77" },
                    { label: "HPI Neighbour Mean", value: "58.79" },
                    { label: "Distance to River", value: "23.51" },
                  ].map((param, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-black text-white px-3 py-2 rounded text-sm"
                    >
                      <span>{param.label}</span>
                      <span>{param.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
