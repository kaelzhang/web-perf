import {isFunction} from 'core-util-is'

export const now = typeof performance !== 'undefined'
  && isFunction(performance.now)
    ? () => performance.now()
    : () => Date.now()

const FREQUENCY = 16.66

const raf = typeof requestAnimationFrame !== 'undefined'
  && isFunction(requestAnimationFrame)
    ? callback => requestAnimationFrame(callback)
    : setTimeout(callback, FREQUENCY)

export {
  raf as requestAnimationFrame
}
