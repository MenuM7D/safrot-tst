import { join, dirname } from 'path'
import { createRequire } from 'module';
import { fileURLToPath } from 'url'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import cfonts from 'cfonts';
import { createInterface } from 'readline'
import yargs from 'yargs'
import express from 'express'
import path from 'path'

// https://stackoverflow.com/a/50052194
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname)
const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)

say('SAFROT\nMD', {
    font: 'slick',
    align: 'center',
    gradient: ['blue', 'gray']
})

say(`Made By Safrot`, {
    font: 'console',
    align: 'center',
    gradient: ['blue', 'gray']
})

var isRunning = false

async function start(file) {
    if (isRunning) return
    isRunning = true
    let args = [join(__dirname, file), ...process.argv.slice(2)]
    say([process.argv[0], ...args].join(' '), {
        font: 'console',
        align: 'center',
        gradient: ['blue', 'gray']
    })
    setupMaster({
        exec: args[0],
        args: args.slice(1),
    })
    let p = fork()
    p.on('message', data => {
        switch (data) {
            case 'reset':
                p.process.kill()
                isRunning = false
                start.apply(this, arguments)
                break
            case 'uptime':
                p.send(process.uptime())
                break
        }
    })

    p.on('exit', (_, code) => {
        isRunning = false
        console.error('⚠️ ERROR ⚠️ >> ', code)
        start('main.js'); //

        if (code === 0) return
        watchFile(args[0], () => {
            unwatchFile(args[0])
            start(file)
        })
    })

    setInterval(() => {}, 1000)
}

start('remcham.js')