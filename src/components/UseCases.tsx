import React from 'react'
import { GraduationCap, Briefcase, BookOpen, Globe, Lightbulb, Users } from 'lucide-react'

const useCases = [
  {
    icon: GraduationCap,
    title: "Academic Research",
    description: "Students and researchers use STORM to quickly understand new topics and generate comprehensive literature reviews.",
    examples: ["Literature reviews", "Research proposals", "Background studies", "Topic exploration"]
  },
  {
    icon: Briefcase,
    title: "Business Intelligence",
    description: "Companies leverage STORM for market research, competitive analysis, and industry trend reports.",
    examples: ["Market analysis", "Competitor research", "Industry reports", "Trend analysis"]
  },
  {
    icon: BookOpen,
    title: "Content Creation",
    description: "Writers and journalists use STORM as a research assistant for fact-checking and comprehensive topic coverage.",
    examples: ["Article research", "Fact verification", "Topic outlines", "Source compilation"]
  },
  {
    icon: Globe,
    title: "Educational Content",
    description: "Educators create comprehensive teaching materials and course content with proper citations and references.",
    examples: ["Course materials", "Study guides", "Reference documents", "Educational resources"]
  },
  {
    icon: Lightbulb,
    title: "Innovation Research",
    description: "R&D teams explore emerging technologies and scientific developments for strategic planning.",
    examples: ["Technology scouting", "Patent research", "Innovation mapping", "Future trends"]
  },
  {
    icon: Users,
    title: "Collaborative Knowledge",
    description: "Teams use Co-STORM for collaborative research sessions and knowledge sharing initiatives.",
    examples: ["Team research", "Knowledge sharing", "Collaborative writing", "Expert discussions"]
  }
]

const UseCases = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Powering Knowledge Work Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From academic research to business intelligence, STORM helps professionals 
            create comprehensive, well-researched content efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="card hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-storm-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-storm-600 transition-colors duration-300">
                <useCase.icon className="w-6 h-6 text-storm-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {useCase.description}
              </p>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-700">Common Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {useCase.examples.map((example, exampleIndex) => (
                    <span key={exampleIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-storm-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Research Process?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of researchers, writers, and professionals who use STORM 
              to create comprehensive, well-cited content in minutes instead of hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://storm.genie.stanford.edu" target="_blank" rel="noopener noreferrer"
                 className="btn-primary px-8 py-3">
                Try STORM Now
              </a>
              <a href="https://github.com/stanford-oval/storm" target="_blank" rel="noopener noreferrer"
                 className="btn-secondary px-8 py-3">
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UseCases