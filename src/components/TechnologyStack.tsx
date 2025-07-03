import React from 'react'
import { Code, Database, Zap, Shield } from 'lucide-react'

const technologies = [
  {
    category: "Language Models",
    icon: Code,
    items: ["GPT-4", "Claude", "Gemini", "LiteLLM Integration", "Custom Model Support"]
  },
  {
    category: "Search & Retrieval",
    icon: Database,
    items: ["Bing Search", "You.com", "Vector Databases", "Custom Corpora", "Multi-source Integration"]
  },
  {
    category: "Framework",
    icon: Zap,
    items: ["DSPy", "Python", "Modular Architecture", "Async Processing", "Pipeline Customization"]
  },
  {
    category: "Research Quality",
    icon: Shield,
    items: ["Citation Verification", "Source Validation", "Fact Checking", "Academic Standards", "Peer Review"]
  }
]

const TechnologyStack = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Built on Cutting-Edge Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            STORM leverages the latest advances in AI, natural language processing, and information retrieval 
            to deliver state-of-the-art knowledge curation capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="card">
              <div className="w-12 h-12 bg-storm-100 rounded-lg flex items-center justify-center mb-4">
                <tech.icon className="w-6 h-6 text-storm-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {tech.category}
              </h3>
              <ul className="space-y-2">
                {tech.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-storm-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-storm-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Open Source & Extensible</h3>
              <p className="text-storm-100 mb-6">
                STORM is built with modularity in mind. Customize language models, retrieval sources, 
                and generation strategies to fit your specific needs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">MIT License</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Python Package</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">API Ready</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="font-semibold mb-3">Quick Installation</h4>
              <div className="bg-black/20 rounded-lg p-4 font-mono text-sm">
                <div className="text-storm-200">$ pip install knowledge-storm</div>
                <div className="text-storm-200 mt-2">$ python -m storm.run</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologyStack