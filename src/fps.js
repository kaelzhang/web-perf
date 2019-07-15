import {
  now,
  requestAnimationFrame
} from './util'

let span = 1000

let last = now()
let frame = 0
let stopped = true
let stopping = false
let fps = 0
let callback = () => {}

// Yes this function is ugly and simple
const loop = () => {
  const current = now()

  frame ++

  const duration = now - last

  if (duration > span) {
    fps = frame * span / duration
    frame = 0
    last = current
    callback(fps)
  }

  if (stopping) {
    stopping = false
    stopped = true
    return
  }

  requestAnimationFrame(loop)
}

const exports = {
  get value () {
    return fps
  },

  set callback (fn) {
    callback = fn
  },

  set span (s) {
    span = s
  },

  stop () {
    stopping = true
  },

  start () {
    // `stop()` has been executed just now,
    // and the next frame does not run
    if (stopping) {
      stopping = false
      return
    }

    // Only start looping when it is completely stopped
    // to prevent duplicate starting
    if (stopped) {
      stopped = false
      loop()
    }
  }
}

export default exports
