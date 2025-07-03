import React, { useState } from 'react'
import { Search, BookOpen, Users, Zap, Github, ExternalLink, FileText, Brain, Globe } from 'lucide-react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import StatsSection from './components/StatsSection'
import TechnologyStack from './components/TechnologyStack'
import UseCases from './components/UseCases'
import ComparisonTable from './components/ComparisonTable'
import ResearchDemo from './components/ResearchDemo'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-storm-50 to-blue-50">
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <Features />
        <TechnologyStack />
        <UseCases />
        <ComparisonTable />
        <ResearchDemo />
      </main>
      <Footer />
    </div>
  )
}

export default App