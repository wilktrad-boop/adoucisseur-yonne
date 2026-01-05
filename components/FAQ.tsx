"use client";

import { useState } from "react";
import { FAQItem } from "@/data/faq";

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg">
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
          >
            <span className="font-semibold text-gray-900">{item.question}</span>
            <span className="text-primary-600 text-xl">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-gray-700">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}













