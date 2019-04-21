[![Build Status](https://travis-ci.org/kaelzhang/web-perf.svg?branch=master)](https://travis-ci.org/kaelzhang/web-perf)
[![Coverage](https://codecov.io/gh/kaelzhang/web-perf/branch/master/graph/badge.svg)](https://codecov.io/gh/kaelzhang/web-perf)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/kaelzhang/web-perf?branch=master&svg=true)](https://ci.appveyor.com/project/kaelzhang/web-perf)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/web-perf.svg)](http://badge.fury.io/js/web-perf)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/web-perf.svg)](https://www.npmjs.org/package/web-perf)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/web-perf.svg)](https://david-dm.org/kaelzhang/web-perf)
-->

# web-perf

Indicators for web performance

## Install

```sh
$ npm i web-perf
```

## Usage

### new CPU(options)

- **options** `Object`
  - **samplePeriod** `number` The time span of a single sample period in milliseconds

```js
const {CPU} = require('web-perf')

const cpu = new CPU({
  // It will take the sample in every 50 milliseconds
  samplePeriod: 50
})

// Record the profile for 100 periods
cpu.profile(100)
.then(report => {
  // Print the report
  console.log(report)
})
```

### cpu.profile(periods): Promise&lt;CPUReport&gt;

- **periods** `number` the number of periods the profile is to record

The returned promise will be solved when the profiling completes, and returns the recorded reports.

```ts
interface CPUReport {
  samplePeriod: number
  records: Array<CPURecord>
}

interface CPURecord {
  // The close range of the begin period number and the end period number.
  // The period number starts with `0`
  period: [number, number]
  // If the event-loop(CPU) stucked during the period, this property will be true
  frozen: boolean
  // The event loop latency
  latency: number
}
```

### How `CPU` works

It will delay(setTimeout) `options.samplePeriod` to take the first profile sample. If the event-loop called before the second sample ought to be taken, the first sample is marked as `NOT FROZEN`

## License

MIT
