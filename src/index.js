const {createError} = require('./error')

const error = createError('[web-perf:CPU]')

class CPU {
  constructor (options) {
    if (Object(options) !== options) {
      throw error('options must be an object', TypeError)
    }

    const {
      samplePeriod
    } = options

    if (!samplePeriod || typeof options.samplePeriod !== 'number') {
      throw error('options.samplePeriod must be an object', TypeError)
    }

    this._samplePeriod = samplePeriod
    this._records = null
  }

  _profile (periods, callback) {
    const records = []
    const max = periods - 1

    const take = (startNumber, startTime) => {
      const now = Date.now()
      const wholeLatency = now - startTime
      const lasts = Math.min(
        Math.floor(wholeLatency / this._samplePeriod),
        max - startNumber
      )

      const latency = lasts * this._samplePeriod
      const delay = wholeLatency - latency

      const endNumber = lasts + startNumber

      if (lasts === 0) {
        records.push({
          period: [num, num],
          frozen: false,
          latency
        })
      } else {
        records.push({
          period: [startNumber, endNumber - 1],
          frozen: true,
          latency: undefined
        })

        records.push({
          period: [endNumber, endNumber],
          frozen: false,
          latency
        })
      }

      if (endNumber === max) {
        return callback(records)
      }

      setTimeout(() => {
        take(now - latency, endNumber + 1)
      }, this._samplePeriod - latency)
    }

    take(Date.now(), 0)
  }

  profile (periods) {
    return new Promise(resolve => {
      this._profile(periods, resolve)
    })
  }
}
