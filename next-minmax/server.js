const express = require('express')
const next = require('next')

const app = next({ dev: false, dir: '/home/html.jean2.minmax.website/minmax-web' })
const handle = app.getRequestHandler()

app.prepare()

module.exports = handle