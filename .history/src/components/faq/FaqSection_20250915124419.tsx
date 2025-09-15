export function FAQSection() {
  const faqs = [
    {
      question: "How long does it take?",
      answer: "5 days from start to finish - design, development, and deployment included.",
    },
    {
      question: "Do you provide revisions?",
      answer: "Yes, unlimited revisions until you're 100% satisfied with the final result.",
    },
    {
      question: "What's the payment process?",
      answer: "50% upfront to get started, 50% after final delivery and your approval.",
    },
    {
      question: "Can you deploy on my hosting?",
      answer: "Deployment is included in every package, on your hosting or ours.",
    },
    {
      question: "Why are your prices so affordable compared to agencies?",
      answer: "We run lean without big overheads - you get the same agency-level quality at a fraction of the cost.",
    },
  ]

  return (
    <section className="bg-[#151E1B] py-8 px-4 font-manrope">
      <div className="max-w-4xl mx-auto  font-manrope">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Got Questions? We've Got The Answers
        </h2>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-white text-lg font-medium mb-2">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
