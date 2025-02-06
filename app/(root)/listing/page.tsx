'use client'
import React from 'react'
import {
  SprayCan,
  Thermometer,
  PillBottle,
  MessageCircleHeart
} from 'lucide-react'
import { motion } from 'framer-motion'

const FeaturePage = () => {
  const features = [
    {
      icon: SprayCan,
      title: "Medical Spray Relief",
      description: "Advanced spray treatments providing rapid symptom management and targeted healing for various medical conditions.",
      color: "bg-sky-50",
      hoverColor: "hover:bg-sky-100"
    },
    {
      icon: Thermometer,
      title: "Temperature Monitoring",
      description: "Comprehensive digital temperature tracking with real-time health diagnostics and personalized wellness insights.",
      color: "bg-red-50",
      hoverColor: "hover:bg-red-100"
    },
    {
      icon: PillBottle,
      title: "Smart Medicine Management",
      description: "Intelligent medication tracking system with prescription guidance, dosage reminders, and comprehensive health analytics.",
      color: "bg-emerald-50",
      hoverColor: "hover:bg-emerald-100"
    },
    {
      icon: MessageCircleHeart,
      title: "Emotional Wellness Support",
      description: "Dedicated one-to-one counseling providing empathetic mental health support, stress management, and holistic emotional care.",
      color: "bg-purple-50",
      hoverColor: "hover:bg-purple-100"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-800">
          Our Healthcare Services
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`
                ${feature.color} 
                ${feature.hoverColor} 
                rounded-2xl p-8 transition-all duration-300 
                transform hover:-translate-y-2 hover:shadow-xl
              `}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
            >
              <div className="flex items-center mb-6">
                <feature.icon
                  size={64}
                  className="text-gray-700 mr-6"
                  strokeWidth={1.5}
                />
                <h2 className="text-3xl font-semibold text-gray-800">
                  {feature.title}
                </h2>
              </div>
              <p className="text-lg text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturePage
