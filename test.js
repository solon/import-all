import importAll from './src'

const fixtures = importAll(__dirname + '/fixtures')

test('should export an array', () => {
  expect(fixtures).toBeArray()
})

test('should export default modules', () => {
  expect(fixtures).toContain('ball')
  expect(fixtures).toContain('start')
  expect(fixtures).toContainEqual({ lemon: 'yellow', lime: 'green' })
})

test('should not use filenames as module names', () => {
  expect(fixtures).not.toContain('head')
  expect(fixtures).not.toContain('foot')
  expect(fixtures).not.toContain('things')
  expect(fixtures).not.toContain('fruit')
})

test('should not export named modules', () => {
  expect(fixtures).not.toContain('land')
  expect(fixtures).not.toContain('see')
  expect(fixtures).not.toContain('ping')
})
