// 复现：同一份「能改哪几段」的公开清单，两个入口对 release 的态度不一样
const semver = require('../')
const { RELEASE_TYPES } = require('../internal/constants')

console.log('公开清单里有 release 吗 =', RELEASE_TYPES.includes('release'))
console.log('递增入口 inc("1.2.3-beta","release") =', semver.inc('1.2.3-beta', 'release'))
console.log('截断入口 truncate("1.2.3-beta","release") =', semver.truncate('1.2.3-beta', 'release'))
console.log('对照：截断入口用清单里有的词 truncate("1.2.3-beta","prerelease") =', semver.truncate('1.2.3-beta', 'prerelease'))
