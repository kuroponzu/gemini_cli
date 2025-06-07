#!/usr/bin/env node

import { Command } from 'commander';
import { InteractiveCLI } from './cli.js';

const program = new Command();

program
  .name('gemini-cli')
  .description('Geminiと対話するCLIツール')
  .version('1.0.0')
  .requiredOption('-k, --api-key <key>', 'Gemini API キー')
  .action(async (options) => {
    const cli = new InteractiveCLI(options.apiKey);
    await cli.start();
  });

program.parse();
