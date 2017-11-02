class ResponseError extends Error {
  constructor (error) {
    super (JSON.stringify({
      status: error.response.status,
      message: error.response.statusText,
      data: error.response.data,
      headers: error.response.headers
    }))
  }
}

module.exports = ResponseError
