import React from 'react'
import { Users, FileText, Clock, Star } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: "70,000+",
    label: "Users Worldwide",
    description: "Researchers and writers using STORM"
  },
  {
    icon: FileText,
    value: "100+",
    label: "Research Papers",
    description: "High-quality articles in FreshWiki dataset"
  },
  {
    icon: Clock,
    value: "2-5 min",
    label: "Generation Time",
    description: "Average time to create comprehensive articles"
  },
  {
    icon: Star,
    value: "NAACL 2024",
    label: "Published Research",
    description: "Peer-reviewed at top AI conference"
  }
]

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Researchers Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            STORM has been adopted by thousands of users and validated through rigorous academic research.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-storm-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-storm-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection