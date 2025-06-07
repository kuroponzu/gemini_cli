import { GoogleGenerativeAI } from '@google/generative-ai';

export class GeminiClient {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor(apiKey: string) {
    this.genAI = new GoogleGenerativeAI(apiKey);
    // https://ai.google.dev/gemini-api/docs/models?hl=ja
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-2.5-flash-preview-05-20' });
  }

  async chat(message: string): Promise<string> {
    try {
      const result = await this.model.generateContent(message);
      const response = await result.response;
      return response.text();
    } catch (error) {
      throw new Error(`Gemini API error: ${error}`);
    }
  }

  async startChat() {
    return this.model.startChat({
      history: [],
    });
  }
}
