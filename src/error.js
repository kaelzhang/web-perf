const createError = prefix =>
  (message, Ctor = Error) => new Ctor(`${prefix} ${message}`)

module.exports = {
  createError
}
