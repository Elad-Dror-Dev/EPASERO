/**
 * FAQ content — spec §7.
 *
 * ⚠️ PLACEHOLDER CONTENT. The brief refers to a document named "Frequently Asked
 * Questions" which was not supplied. The questions below are transcribed from the
 * reference screenshot in the brief; the answers are deliberately left blank.
 *
 * These questions ask about renovation costs. Inventing figures for a real
 * contracting business would put unverified pricing claims on a public site, so
 * every answer must be written by Epasero before this page ships.
 *
 * Any entry with an empty `answer` is hidden from the page automatically.
 */
export type Faq = {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  { question: 'What is a good budget for home renovation?', answer: '' },
  { question: 'How much does it cost to renovate a bathroom in Dubai?', answer: '' },
  { question: 'Is a house renovation worth it?', answer: '' },
  { question: 'How much does renovation cost per square meter in Dubai?', answer: '' },
  { question: 'Is 100k enough to renovate a house?', answer: '' },
  { question: 'Can you redo a kitchen for AED 7000?', answer: '' },
]

/** Only questions with a real answer are shown. */
export const publishedFaqs = faqs.filter(f => f.answer.trim().length > 0)
