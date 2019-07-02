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

## fps

```js
import {
  fps
} from 'web-perf'

console.log(fps.value)  // 59.5

fps.stop()    // stop collecting frames

fps.start()   // start / restart collecting

fps.callback = value => {
  // invoked every second
}
```

## License

MIT
