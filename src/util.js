import {isFunction} from 'core-util-is'

export const now = typeof performance !== 'undefined'
  && isFunction(performance.now)
    ? () => performance.now()
    : () => Date.now()

const FREQUENCY = 16.66

export const requestAnimationFrame = isFunction(window.requestAnimationFrame)
  ? callback => window.requestAnimationFrame(callback)
  : setTimeout(callback, FREQUENCY)
