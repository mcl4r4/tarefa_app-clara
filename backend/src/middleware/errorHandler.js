export function errorHandler(error, request, response, next){
  console.log(error)

  const statusCode = error.statusCode || 500
  const message = error.message || "Internal server error"

  response.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
}
