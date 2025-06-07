import * as readline from 'readline';
import { GeminiClient } from './gemini.js';

export class InteractiveCLI {
  private rl: readline.Interface;
  private gemini: GeminiClient;
  private chat: any;

  constructor(apiKey: string) {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '> '
    });
    this.gemini = new GeminiClient(apiKey);
  }

  async start() {
    console.log('Gemini CLI - チャットを開始します。終了するには "exit" または "quit" を入力してください。\n');

    try {
      this.chat = await this.gemini.startChat();
      this.rl.prompt();

      this.rl.on('line', async (input) => {
        const trimmedInput = input.trim();

        if (trimmedInput === 'exit' || trimmedInput === 'quit') {
          console.log('チャットを終了します。');
          this.rl.close();
          return;
        }

        if (trimmedInput === '') {
          this.rl.prompt();
          return;
        }

        try {
          console.log('\n考え中...\n');
          const result = await this.chat.sendMessage(trimmedInput);
          const response = await result.response;
          console.log(`Gemini: ${response.text()}\n`);
        } catch (error) {
          console.error(`エラー: ${error}\n`);
        }

        this.rl.prompt();
      });

      this.rl.on('close', () => {
        console.log('さようなら！');
        process.exit(0);
      });
    } catch (error) {
      console.error(`初期化エラー: ${error}`);
      process.exit(1);
    }
  }
}
