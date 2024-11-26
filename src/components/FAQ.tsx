import React from 'react';

interface FAQProps {
  cityName: string
  questions: {
    question: string
    answer: string
  }[]
}

export default function FAQ({ cityName, questions }: FAQProps) {
  return (
    <div className="divide-y">
      {questions.map((faq, index) => (
        <div key={index} className="py-6">
          <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
          <p className="mt-2 text-gray-600">{faq.answer}</p>
        </div>
      ))}
    </div>
  )
} 