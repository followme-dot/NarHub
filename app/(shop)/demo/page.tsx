'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, Video, ArrowLeft, Check, User, Mail, Building, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react'
import Button from '@frontend/components/ui/Button'

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
]

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default function DemoPage() {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    platforms: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const days: (Date | null)[] = []

    // Add empty slots for days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null)
    }

    // Add all days of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i))
    }

    return days
  }

  const isDateAvailable = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const day = date.getDay()
    // Available Monday to Friday, and not in the past
    return date >= today && day !== 0 && day !== 6
  }

  const formatDate = (date: Date) => {
    return `${daysOfWeek[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg w-full text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-[#1a1a2e] mb-4">Demo Scheduled!</h1>
          <p className="text-[#4a4a68] mb-6">
            Your demo has been scheduled for <strong>{selectedDate && formatDate(selectedDate)}</strong> at <strong>{selectedTime} CET</strong>.
          </p>
          <p className="text-[#4a4a68] mb-8">
            You will receive a Google Meet invitation at <strong>{formData.email}</strong> shortly.
          </p>
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-8">
            <h3 className="font-bold text-emerald-800 mb-2">What to expect:</h3>
            <ul className="text-left text-emerald-700 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>30-minute personalized walkthrough</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Live platform demonstration</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Q&A with our technical team</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Custom pricing discussion</span>
              </li>
            </ul>
          </div>
          <Link href="/products">
            <Button size="lg" className="w-full">Browse Platforms</Button>
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-[#4a4a68] hover:text-[#1a1a2e] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              <Video className="w-4 h-4" />
              Schedule a Demo
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
              See Our Platforms in Action
            </h1>
            <p className="text-lg text-[#4a4a68] max-w-2xl mx-auto">
              Book a 30-minute call with our team to see a live demonstration of any platform.
              We'll answer your questions and discuss how our solutions can help your business.
            </p>
          </motion.div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Progress Steps */}
          <div className="bg-gray-50 px-8 py-6 border-b border-gray-100">
            <div className="flex items-center justify-center gap-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step >= s ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step > s ? <Check className="w-4 h-4" /> : s}
                  </div>
                  <span className={`hidden sm:block text-sm ${step >= s ? 'text-[#1a1a2e] font-medium' : 'text-gray-500'}`}>
                    {s === 1 ? 'Select Date' : s === 2 ? 'Select Time' : 'Your Details'}
                  </span>
                  {s < 3 && <div className={`w-12 h-0.5 ${step > s ? 'bg-emerald-500' : 'bg-gray-200'}`} />}
                </div>
              ))}
            </div>
          </div>

          <div className="p-8">
            {/* Step 1: Select Date */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="max-w-md mx-auto">
                  <div className="flex items-center justify-between mb-6">
                    <button
                      onClick={prevMonth}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-[#4a4a68]" />
                    </button>
                    <h2 className="text-xl font-bold text-[#1a1a2e]">
                      {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                    </h2>
                    <button
                      onClick={nextMonth}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-[#4a4a68]" />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {daysOfWeek.map((day) => (
                      <div key={day} className="text-center text-sm font-medium text-[#4a4a68] py-2">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {getDaysInMonth(currentMonth).map((date, index) => (
                      <div key={index} className="aspect-square">
                        {date ? (
                          <button
                            onClick={() => isDateAvailable(date) && setSelectedDate(date)}
                            disabled={!isDateAvailable(date)}
                            className={`w-full h-full rounded-lg text-sm font-medium transition-all ${
                              selectedDate?.toDateString() === date.toDateString()
                                ? 'bg-emerald-500 text-white'
                                : isDateAvailable(date)
                                ? 'hover:bg-emerald-100 text-[#1a1a2e]'
                                : 'text-gray-300 cursor-not-allowed'
                            }`}
                          >
                            {date.getDate()}
                          </button>
                        ) : null}
                      </div>
                    ))}
                  </div>

                  {selectedDate && (
                    <div className="mt-8">
                      <p className="text-center text-[#4a4a68] mb-4">
                        Selected: <strong className="text-[#1a1a2e]">{formatDate(selectedDate)}</strong>
                      </p>
                      <Button onClick={() => setStep(2)} size="lg" className="w-full">
                        Continue
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 2: Select Time */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="max-w-md mx-auto">
                  <button
                    onClick={() => setStep(1)}
                    className="flex items-center gap-2 text-[#4a4a68] hover:text-[#1a1a2e] mb-6"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Change date
                  </button>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-emerald-600" />
                      <span className="font-medium text-emerald-800">
                        {selectedDate && formatDate(selectedDate)}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#1a1a2e] mb-4">Select a time (CET)</h3>

                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                          selectedTime === time
                            ? 'bg-emerald-500 text-white'
                            : 'bg-gray-100 text-[#1a1a2e] hover:bg-emerald-100'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  {selectedTime && (
                    <div className="mt-8">
                      <Button onClick={() => setStep(3)} size="lg" className="w-full">
                        Continue
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 3: Contact Details */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="max-w-lg mx-auto">
                  <button
                    onClick={() => setStep(2)}
                    className="flex items-center gap-2 text-[#4a4a68] hover:text-[#1a1a2e] mb-6"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Change time
                  </button>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-emerald-600" />
                        <span className="font-medium text-emerald-800">
                          {selectedDate && formatDate(selectedDate)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-emerald-600" />
                        <span className="font-medium text-emerald-800">{selectedTime} CET</span>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-[#1a1a2e] mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#1a1a2e] mb-2">
                          <Mail className="w-4 h-4 inline mr-2" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#1a1a2e] mb-2">
                          <Building className="w-4 h-4 inline mr-2" />
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                          placeholder="Company Inc."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#1a1a2e] mb-2">
                          Which platforms are you interested in?
                        </label>
                        <input
                          type="text"
                          value={formData.platforms}
                          onChange={(e) => setFormData({ ...formData, platforms: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                          placeholder="e.g., INFRABANK, INFRA PAY"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#1a1a2e] mb-2">
                          <MessageSquare className="w-4 h-4 inline mr-2" />
                          Anything specific you'd like to discuss?
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={3}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
                          placeholder="Tell us about your project or questions..."
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full mt-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Scheduling...
                        </span>
                      ) : (
                        <>
                          <Video className="w-5 h-5 mr-2" />
                          Schedule Demo via Google Meet
                        </>
                      )}
                    </Button>
                  </form>

                  <p className="text-center text-sm text-[#4a4a68] mt-4">
                    You will receive a Google Meet link at your email address.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: Video, title: 'Google Meet', description: '30-minute video call with screen sharing' },
            { icon: User, title: 'Expert Team', description: 'Meet with Rafael Baena or technical lead' },
            { icon: Clock, title: 'Timezone Flexible', description: 'We accommodate global schedules' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-[#1a1a2e] mb-2">{item.title}</h3>
              <p className="text-sm text-[#4a4a68]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
