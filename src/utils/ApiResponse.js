class ApiResponse{
  constructor(statusCode,data,message = "success"){
    this.statusbar = statusCode
    this.data = data
    this.message = message
    this.success = statusCode < 
    400
  }
}












 