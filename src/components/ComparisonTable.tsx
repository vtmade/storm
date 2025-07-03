import React from 'react'
import { Check, X } from 'lucide-react'

const ComparisonTable = () => {
  const features = [
    {
      feature: "Multi-perspective Research",
      storm: true,
      traditional: false,
      description: "Automatically discovers and explores different viewpoints"
    },
    {
      feature: "Automated Citation",
      storm: true,
      traditional: false,
      description: "Generates proper citations with source verification"
    },
    {
      feature: "Structured Outlines",
      storm: true,
      traditional: true,
      description: "Creates hierarchical content organization"
    },
    {
      feature: "Internet-scale Research",
      storm: true,
      traditional: false,
      description: "Searches and synthesizes from multiple online sources"
    },
    {
      feature: "Collaborative Features",
      storm: true,
      traditional: false,
      description: "Human-AI collaboration with Co-STORM"
    },
    {
      feature: "Time Efficiency",
      storm: true,
      traditional: false,
      description: "Minutes instead of hours for comprehensive articles"
    },
    {
      feature: "Source Diversity",
      storm: true,
      traditional: false,
      description: "Integrates multiple search engines and databases"
    },
    {
      feature: "Quality Consistency",
      storm: true,
      traditional: false,
      description: "Maintains high standards across all generated content"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            STORM vs Traditional Research Methods
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how STORM's AI-powered approach compares to traditional manual research and writing processes.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Header */}
            <div className="bg-gray-50 p-6 border-b lg:border-b-0 lg:border-r border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Feature</h3>
            </div>
            <div className="bg-storm-600 p-6 border-b lg:border-b-0 lg:border-r border-gray-200 text-center">
              <h3 className="text-lg font-semibold text-white">STORM</h3>
              <p className="text-storm-100 text-sm mt-1">AI-Powered Research</p>
            </div>
            <div className="bg-gray-100 p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900">Traditional Methods</h3>
              <p className="text-gray-600 text-sm mt-1">Manual Research</p>
            </div>
            
            {/* Features */}
            {features.map((item, index) => (
              <React.Fragment key={index}>
                <div className="p-6 border-b lg:border-r border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{item.feature}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <div className="p-6 border-b lg:border-r border-gray-200 text-center">
                  {item.storm ? (
                    <Check className="w-8 h-8 text-green-500 mx-auto" />
                  ) : (
                    <X className="w-8 h-8 text-red-500 mx-auto" />
                  )}
                </div>
                <div className="p-6 border-b border-gray-200 text-center">
                  {item.traditional ? (
                    <Check className="w-8 h-8 text-green-500 mx-auto" />
                  ) : (
                    <X className="w-8 h-8 text-red-500 mx-auto" />
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Traditional Research Challenges</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Time-consuming manual search and compilation</span>
              </li>
              <li className="flex items-start space-x-3">
                <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Limited perspective and potential bias</span>
              </li>
              <li className="flex items-start space-x-3">
                <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Inconsistent citation and formatting</span>
              </li>
              <li className="flex items-start space-x-3">
                <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Difficulty maintaining comprehensive coverage</span>
              </li>
            </ul>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">STORM Advantages</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Automated research in minutes, not hours</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Multiple perspectives and comprehensive coverage</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Consistent, high-quality citations</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Scalable and reproducible results</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComparisonTable