#!/usr/bin/env node

'use strict';

const c = require('chalk');

const wrap = require('word-wrap');

const terminalLink = require ('terminal-link');

const gradient = require('gradient-string');

const figlet = require('figlet');

const prompts = require('prompts');

const axios = require('axios');

const text = `Hey there! I'm ${c.bold("Abdlmu'tii")}, a 14-year-old developer from egypt with ${c.bold.greenBright('3-4 years of experience')} under my belt. My main field is back-end development, but I also consider myself a ${c.blueBright.bold('full-stack')} developer. I'm comfortable working with a variety of programming tools and technologies, including VSCode, Replit, Node.js, NPM, Deno, Python, HTML/CSS, and Tailwind CSS.\n\nI'm ${c.bold.greenBright("always eager to learn more")} and take on new challenges. I'm passionate about coding, and I'm constantly working on new projects to improve my skills. I have a few open-source projects on my GitHub profile that you can check out if you're interested.\n\nIf you want to connect with me, you can find me on Twitter, Discord, Telegram, or GitHub. Feel free to drop me a message or follow me to keep up with my latest projects and updates!\n\n${c.bold("GitHub:")} ${c.hex('#fff').bold(terminalLink("@abdlmutii",'github.com/abdlmutii'))}\n${c.bold("Discord:")} ${c.bold.hex("#4150f1")("Seif#0995")}\n${c.bold("Telegram:")} ${c.bold.hex('#30A3E6')(terminalLink("@abdlmutii",'t.me/abdlmutii'))}\n${c.bold("Bird:")} ${c.bold.hex(`#1DA1F2`)(terminalLink("@abdlmutii",'twitter.com/abdlmutii'))}\n${c.bold("Email:")} ${c.hex(" #28A8EA").bold("abdlmutii@outlook.com")}\n${c.bold("Hiring?:")} ${c.hex(" #cc99ff").bold("abdlmutii.buz@outlook.com")}`;

const wrappedText = wrap(text, { width: 110 });

const value = figlet.textSync("Seif ",{

      font: 'Standard',

      horizontalLayout: 'default',

      verticalLayout: 'default'

    });

console.log(gradient.rainbow(value));

console.log(wrappedText);
