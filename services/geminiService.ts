
import { GoogleGenAI, Type } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async generateSEOBlueprint(businessNiche: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Generate a high-level SEO Alpha Engine Blueprint for a business in the ${businessNiche} niche. Focus on North American market dominance. Include 3 technical phases and a concluding summary. Keep it punchy and professional.`,
        config: {
          thinkingConfig: { thinkingBudget: 0 }
        }
      });
      return response.text || "Consultation blueprint unavailable. Contact our team.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Strategic analysis offline. Please try again shortly.";
    }
  }
}

export const geminiService = new GeminiService();
