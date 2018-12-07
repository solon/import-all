var fs = require('fs')
var path = require('path')

delete require.cache[__filename]
const parentFile = module.parent.filename
const parentDir = path.dirname(parentFile)

module.exports = function(importPath) {
	importPath = path.resolve(parentDir, importPath || '')
	return fs
		.readdirSync(importPath)
		.filter(fileName => fileName.match(/\.js$/))
		.map(fileName => ({
			name: fileName.split('.js')[0],
			module: require(path.join(importPath, fileName)),
		}))
		.filter(({ name, module }) => ({ name, module: module.__esModule }))
		.map(({ name, module }) =>
			Object.entries(module).map(([k, v]) => ({ name: k === 'default' ? name : k, module: v })),
		)
		.reduce((accumulator, currentValue, currentIndex) => {
			if (Array.isArray(currentValue)) {
				for (const item of currentValue) accumulator[item.name] = item.module
			} else {
				accumulator[currentValue.name] = currentValue.module
			}
			return accumulator
		}, {})
}
