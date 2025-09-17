"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Bell, User, Upload } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AnalysisPage() {
  const [activeTab, setActiveTab] = useState("Maps");
  const [selectedYear, setSelectedYear] = useState("2022-2023");

  const showSidebar = activeTab === "Maps" || activeTab === "Graphs";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm px-6 py-4 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="cursor-pointer">
              <Image
                src="/images/mg-logo.png"
                alt="MG Metal Gauge"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/">
              <Button
                variant="ghost"
                className="text-gray-600 hover:bg-gray-100 rounded-full px-6"
              >
                Home
              </Button>
            </Link>
            <Button
              variant="default"
              className="bg-teal-700 hover:bg-teal-800 text-white rounded-full px-6"
            >
              Analysis
            </Button>
            <Link href="/ai-prediction">
              <Button
                variant="ghost"
                className="text-gray-600 hover:bg-gray-100 rounded-full px-6"
              >
                Predictive Analysis
              </Button>
            </Link>
            <Button
              variant="ghost"
              className="text-gray-600 hover:bg-gray-100 rounded-full px-6"
            >
              About Us
            </Button>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-3">
            <Button
              size="icon"
              variant="ghost"
              className="text-gray-600 hover:bg-gray-100 rounded-full"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-gray-600 hover:bg-gray-100 rounded-full"
            >
              <Bell className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-gray-600 hover:bg-gray-100 rounded-full"
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar - Only show for Maps and Graphs tabs */}
        {showSidebar && (
          <div className="w-64 bg-white border-r min-h-screen p-6">
            {activeTab === "Graphs" ? (
              <>
                <h3 className="font-semibold text-gray-800 mb-4">
                  Types of Graphs
                </h3>
                <div className="space-y-2">
                  <Button className="w-full justify-start bg-black text-white hover:bg-gray-800">
                    Correlation Graphs
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-600 hover:bg-gray-100"
                  >
                    Geoaccumulation Index
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-600 hover:bg-gray-100"
                  >
                    Contamination Factor
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-600 hover:bg-gray-100"
                  >
                    Enrichment Factor
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-600 hover:bg-gray-100"
                  >
                    Ecological Risk Index
                  </Button>
                </div>
              </>
            ) : (
              <>
                {/* Search */}
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Find City/District"
                    className="pl-10 border-gray-300"
                  />
                </div>

                {/* Filters */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Source</h3>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>CGWB</option>
                    </select>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      State/UTs
                    </h3>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Maharashtra</option>
                    </select>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      District
                    </h3>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Pune City</option>
                    </select>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Timestep
                    </h3>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Yearly</option>
                    </select>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Data Range
                    </h3>
                    <div className="space-y-2">
                      <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option>2022</option>
                      </select>
                      <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option>2025</option>
                      </select>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Bottom Links */}
            <div className="mt-8 space-y-2">
              <Button variant="link" className="text-gray-600 p-0 h-auto">
                User Manual
              </Button>
              <Button variant="link" className="text-gray-600 p-0 h-auto">
                Privacy Policy
              </Button>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1">
          {/* Tabs */}
          <div className="bg-white border-b">
            <div
              className={`max-w-7xl mx-auto ${showSidebar ? "pl-0" : "pl-64"}`}
            >
              <div className="flex">
                <Button
                  variant={activeTab === "Graphs" ? "default" : "ghost"}
                  className={`px-6 py-4 rounded-none ${
                    activeTab === "Graphs"
                      ? "bg-black hover:bg-gray-800 text-white"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("Graphs")}
                >
                  Graphs
                </Button>
                <Button
                  variant={activeTab === "Maps" ? "default" : "ghost"}
                  className={`px-6 py-4 rounded-none ${
                    activeTab === "Maps"
                      ? "bg-black hover:bg-gray-800 text-white"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("Maps")}
                >
                  Maps
                </Button>
                <Button
                  variant={activeTab === "Comparisons" ? "default" : "ghost"}
                  className={`px-6 py-4 rounded-none ${
                    activeTab === "Comparisons"
                      ? "bg-black hover:bg-gray-800 text-white"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("Comparisons")}
                >
                  Comparisons
                </Button>
                <Button
                  variant={
                    activeTab === "Policy Recommendation" ? "default" : "ghost"
                  }
                  className={`px-6 py-4 rounded-none ${
                    activeTab === "Policy Recommendation"
                      ? "bg-gray-700 hover:bg-gray-800 text-white"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("Policy Recommendation")}
                >
                  Policy Recommendation
                </Button>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6">
            {activeTab === "Maps" && (
              <>
                {/* Upload Section */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-700">Upload CSV File</span>
                    <Button className="bg-teal-700 hover:bg-teal-800 text-white px-6">
                      <Upload className="h-4 w-4 mr-2" />
                      UPLOAD
                    </Button>
                  </div>
                </div>

                {/* Location Breadcrumb */}
                <div className="mb-4">
                  <div className="bg-black text-white px-4 py-2 rounded-t-lg inline-block">
                    INDIA &gt; MAHARASHTRA &gt; PUNE
                  </div>
                </div>

                {/* Map Container */}
                <div className="bg-black rounded-lg p-6 relative min-h-96">
                  <div className="absolute inset-6 bg-pink-200 rounded-lg flex items-center justify-center">
                    <img
                      src="/images/map-outline.png"
                      alt="Maharashtra Map"
                      className="max-w-full max-h-full object-contain"
                    />
                    <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-red-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white font-semibold">
                    Ground Water Stations
                  </div>
                  <div className="absolute bottom-4 right-4 bg-gray-600 text-white px-3 py-1 rounded text-sm">
                    X,Y -60.76585, 177.41177
                  </div>
                </div>
              </>
            )}

            {activeTab === "Graphs" && (
              <div className="space-y-6">
                {/* Upload Section */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-700">Upload CSV File</span>
                    <Button className="bg-teal-700 hover:bg-teal-800 text-white px-6">
                      <Upload className="h-4 w-4 mr-2" />
                      UPLOAD
                    </Button>
                  </div>
                </div>

                {/* Correlation Graphs */}
                <div className="space-y-6">
                  {/* HPI vs Zn Graph */}
                  <div className="bg-white rounded-lg shadow-sm border p-4">
                    <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OHcq5uvvukkHylh7t4R0lgHabnPdwn.png"
                        alt="HPI vs Zn μg/L scatter plot"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="text-xs text-gray-600">
                      <h4 className="font-semibold mb-2">Interpretation:</h4>
                      <p>
                        The regression line shows a positive slope, meaning
                        higher Pb and Zn concentrations are linked with higher
                        HPI values.
                      </p>
                      <p className="mt-2">
                        The shaded confidence interval indicates moderate
                        reliability in this trend.
                      </p>
                      <p className="mt-2">
                        Pb plays a significant role in determining water
                        quality, and areas with elevated Pb directly increase
                        the overall HPI pollution index.
                      </p>
                      <p className="mt-2">
                        Confidence intervals confirm a consistent relationship
                        with Zn, though not as steep as Pb.
                      </p>
                    </div>
                  </div>

                  {/* HEI vs Cu Graph */}
                  <div className="bg-white rounded-lg shadow-sm border p-4">
                    <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pgLaBY8RjPK7Xd9BohNOULILSZlJbH.png"
                        alt="HEI vs Cu μg/L scatter plot"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="text-xs text-gray-600">
                      <h4 className="font-semibold mb-2">Interpretation:</h4>
                      <p>
                        A clear positive relationship between Mn and Cu
                        concentration and HEI is observed.
                      </p>
                      <p className="mt-2">
                        Higher Mn = higher HEI, confirming Mn as a dominant
                        driver of the heavy metal enrichment index.
                      </p>
                      <p className="mt-2">
                        The shaded CI band suggests good confidence in the
                        predictive power of Mn for HEI.
                      </p>
                      <p className="mt-2">
                        This means Cu acts as a secondary modifier, intensifying
                        HEI when Mn is also high.
                      </p>
                    </div>
                  </div>

                  {/* DC vs Cu Graph */}
                  <div className="bg-white rounded-lg shadow-sm border p-4">
                    <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ksLr6FvGO8xl5ea89ddCOvbVYRXn05.png"
                        alt="DC vs Cu μg/L scatter plot"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="text-xs text-gray-600">
                      <h4 className="font-semibold mb-2">Interpretation:</h4>
                      <p>
                        Mn also strongly influences the DC (Degree of
                        Contamination).
                      </p>
                      <p className="mt-2">
                        The regression line shows that even moderate increases
                        in Mn significantly push DC values higher.
                      </p>
                      <p className="mt-2">
                        This points to Mn being a key contaminant shaping both
                        HEI and DC indices simultaneously.
                      </p>
                      <p className="mt-2">
                        The confidence interval supports a moderately reliable
                        relationship, emphasizing Cu as a supporting factor in
                        pollution load.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Comparisons" && (
              <div className="space-y-6">
                {/* Upload and Controls */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-700">Upload CSV</span>
                    <Button className="bg-teal-700 hover:bg-teal-800 text-white px-6">
                      <Upload className="h-4 w-4 mr-2" />
                      UPLOAD
                    </Button>
                  </div>
                </div>

                {/* Assessment Year Selection */}
                <div className="text-center mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Assessment Year
                  </h3>
                  <div className="flex justify-center space-x-2">
                    <Button
                      variant={
                        selectedYear === "2022-2023" ? "default" : "outline"
                      }
                      className={
                        selectedYear === "2022-2023"
                          ? "bg-black text-white"
                          : ""
                      }
                      onClick={() => setSelectedYear("2022-2023")}
                    >
                      2022-2023
                    </Button>
                    <Button
                      variant={
                        selectedYear === "2023-2024" ? "default" : "outline"
                      }
                      className={
                        selectedYear === "2023-2024"
                          ? "bg-black text-white"
                          : ""
                      }
                      onClick={() => setSelectedYear("2023-2024")}
                    >
                      2023-2024
                    </Button>
                  </div>
                </div>

                {/* Category Legend */}
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold mb-3">Category</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      <span>Safe</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                      <span>Semi Critical</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-orange-500 rounded"></div>
                      <span>Critical</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      <span>Over Exploited</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-pink-500 rounded"></div>
                      <span>Saline</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span>Hilly Area</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-gray-500 rounded"></div>
                      <span>No Data</span>
                    </div>
                  </div>
                </div>

                {/* Comparison Maps */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Map */}
                  <div className="bg-black rounded-lg p-4 relative min-h-80">
                    <div className="text-white text-sm mb-2">
                      INDIA &gt; MAHARASHTRA &gt; PUNE
                    </div>
                    <div className="absolute inset-4 top-8 bg-pink-200 rounded-lg flex items-center justify-center">
                      <img
                        src="/images/map-outline.png"
                        alt="Maharashtra Map"
                        className="max-w-full max-h-full object-contain"
                      />
                      <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-red-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white font-semibold">
                      Ground Water Stations
                    </div>
                    <div className="absolute bottom-4 right-4 bg-gray-600 text-white px-3 py-1 rounded text-sm">
                      X,Y -60.76585, 177.41177
                    </div>
                  </div>

                  {/* Right Map */}
                  <div className="bg-black rounded-lg p-4 relative min-h-80">
                    <div className="text-white text-sm mb-2">
                      INDIA &gt; MAHARASHTRA &gt; PUNE
                    </div>
                    <div className="absolute inset-4 top-8 bg-pink-200 rounded-lg flex items-center justify-center">
                      <img
                        src="/images/map-outline.png"
                        alt="Maharashtra Map"
                        className="max-w-full max-h-full object-contain"
                      />
                      <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-red-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white font-semibold">
                      Ground Water Stations
                    </div>
                    <div className="absolute bottom-4 right-4 bg-gray-600 text-white px-3 py-1 rounded text-sm">
                      X,Y -60.76585, 177.41177
                    </div>
                  </div>
                </div>

                {/* Fill Parameters Message */}
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">
                    Fill parameters accordingly
                  </p>
                </div>
              </div>
            )}

            {activeTab === "Policy Recommendation" && (
              <div className="space-y-6">
                {/* Year Indicator */}
                <div className="flex justify-end">
                  <div className="bg-black text-white px-4 py-2 rounded text-sm font-medium">
                    2022-2023
                  </div>
                </div>

                {/* Policy Content Sections */}
                <div className="space-y-8">
                  {/* Impact on Ground Water Section */}
                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-start">
                      <span className="mr-3 text-black">*</span>
                      <span className="underline">Impact on Ground Water</span>
                    </h2>
                    <div className="min-h-32 bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-600 italic">
                        Health Risks → Causes cancer, kidney/liver damage,
                        neurological and developmental disorders.
                        <br />
                        Ecosystem Damage → Disrupts aquatic life, soil
                        fertility, and crop quality.
                        <br />
                        Water Quality Decline → Makes groundwater unsafe for
                        drinking and irrigation.
                        <br />
                        Bioaccumulation → Metals accumulate in plants, animals,
                        and humans through the food chain.
                        <br />
                        Economic Loss → Increases healthcare costs, reduces
                        agricultural productivity, and burdens water treatment.
                        <br />
                        Long-Term Persistence → Unlike organic pollutants, heavy
                        metals do not degrade and remain for decades.
                        <br />
                      </p>
                    </div>
                  </div>

                  {/* Policy Recommendation Section */}
                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-start">
                      <span className="mr-3 text-black">*</span>
                      <span className="underline">
                        AI Powered Policy Recommendations
                      </span>
                    </h2>
                    <div className="min-h-32 bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-600 italic">
                        Enforce strict industrial effluent treatment and
                        monitoring. Regulate fertilizers and pesticides; promote
                        organic alternatives.
                        <br />
                        Protect groundwater zones and use recharge/remediation
                        methods. Provide safe drinking water and health
                        monitoring in affected areas.
                        <br />
                        Update standards as per WHO/BIS and ensure strict
                        compliance. Mandate Environmental Impact Assessments
                        before new projects.
                        <br />
                        Promote public awareness and community participation.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar */}
        {activeTab !== "Policy Recommendation" && (
          <div className="w-80 bg-gray-100 border-l min-h-screen p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">
                Available Parameters
              </h3>
              <Button
                variant="outline"
                size="sm"
                className="text-xs bg-transparent"
              >
                Download ↓
              </Button>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-4">
                Data Parameters
              </h4>
              <div className="space-y-2 min-h-[400px]">
                {[
                  { label: "Latitude", value: "99.44" },
                  { label: "Longitude", value: "88.33" },
                  { label: "Lead(Pb)", value: "99.44" },
                  { label: "Cadmium(Cd)", value: "88.33" },
                  { label: "Mercury(Hg)", value: "99.44" },
                  { label: "Arsenic(As)", value: "25.99" },
                  { label: "Copper(Cu)", value: "43.77" },
                  { label: "Nickel(Ni)", value: "58.79" },
                  { label: "Zinc(Zn)", value: "23.51" },
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
        )}
      </div>
    </div>
  );
}
