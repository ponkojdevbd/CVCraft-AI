import OpenAI from 'openai'

let openai: OpenAI | null = null

function getOpenAI(): OpenAI | null {
  if (!process.env.OPENAI_API_KEY) return null
  if (!openai) openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  return openai
}

const mockSuggestions: Record<string, string[]> = {
  summary: [
    'Results-driven professional with hands-on experience in...',
    'Dedicated professional with a proven track record of...',
    'Accomplished professional skilled in...',
  ],
  experience: [
    '• Led the development of...',
    '• Achieved 25% improvement in...',
    '• Collaborated with cross-functional teams to...',
  ],
  skills: [
    'Strong proficiency in',
    'Advanced knowledge of',
    'Expertise in',
  ],
}

export async function getAISuggestions(text: string, type: string): Promise<string[]> {
  const client = getOpenAI()

  if (!client) {
    return mockSuggestions[type] || mockSuggestions.summary
  }

  try {
    const completion = await client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are a resume expert. Improve and provide suggestions for {type} content. Return exactly 3 different versions that make the text more impactful and professional.`,
        },
        {
          role: 'user',
          content: `Improve this ${type}: ${text}`,
        },
      ],
      max_tokens: 500,
      n: 3,
    })

    return completion.choices.map((choice) => choice.message.content || '')
  } catch (error) {
    console.error('OpenAI error:', error)
    return mockSuggestions[type] || mockSuggestions.summary
  }
}