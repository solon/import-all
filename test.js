import importAll from './src'

const fixtures = importAll(__dirname + '/fixtures')

test('should export an object', () => {
  expect(fixtures).toBeObject()
})

test('should import default exports', () => {
  expect(fixtures).toHaveProperty('foot', 'ball')
  expect(fixtures).toHaveProperty('head', 'start')
  expect(fixtures).toHaveProperty('fruit', { lemon: 'yellow', lime: 'green' })
})

test('should import named exports', () => {
  expect(fixtures).toHaveProperty('land', 'line')
  expect(fixtures).toHaveProperty('see', 'saw')
  expect(fixtures).toHaveProperty('ping', 'pong')
})

test('should not use filenames for named exports', () => {
  expect(fixtures).not.toHaveProperty('things')
})
