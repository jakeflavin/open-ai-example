const { Command } = require('commander');
const openai = require("./api/openai");
const fs = require ("fs");

const program = new Command();

program.name('generate')
    .description('CLI to generate products.')
    .version('1.0.0');

program.command('image')
    .description('Generate an Image (using OpenAI\'s DALL·E API)')
    .argument('<prompt>', 'The prompt to generate the image from.')
    .option('--key <key>', 'Your OpenAI API key.')
    .option('--file', 'The file location you want the image to be placed.', 'image.png')
    .action(async (prompt, options) => {
        const base64Image = await openai.createImage(prompt, options.key);
        fs.writeFile(options.file, base64Image, {encoding: 'base64'}, function(err) {
            console.log('File created.');
        });
    });

program.parse();
