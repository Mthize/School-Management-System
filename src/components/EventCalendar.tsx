"use client"

import { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import Image from "next/image"

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const events = [
  {
    id: 1,
    title: "Math Exam – Grade 10",
    time: "09:00 AM - 11:00 AM",
    description: "Final term math examination for Grade 10 students in Hall A.",
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting",
    time: "12:30 PM - 02:00 PM",
    description: "Scheduled meeting with parents to discuss student progress and performance.",
  },
  {
    id: 3,
    title: "Science Fair",
    time: "03:00 PM - 05:00 PM",
    description: "Annual science fair showcasing student projects and experiments in the auditorium.",
  },
]

const EventCalendar: React.FC = () => {
  const [value, onChange] = useState<Value>(new Date())

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />

      <div className="flex items-center justify-between mt-4">
        <h1 className="text-xl font-semibold">Events</h1>
        <Image src="/moreDark.png" alt="More options" width={20} height={20} />
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-blue-400 even:border-t-purple-400"
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventCalendar

