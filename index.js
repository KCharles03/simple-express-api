const { request } = require("express")
const express = require("express")

const app = express()

const car = [
  { id: 1, make: "Lexus", year: "2021", model: "IS350" },
  { id: 2, make: "Tesla", year: "2023", model: "X" },
  { id: 3, make: "Toyota", year: "2013", model: "XSE" },
  { id: 4, make: "Audi", year: "2020", model: "S5" },
]
// get all cars
app.get("/", (request, response) => {
  response.send(car)
})
// get only my future Lexus
app.get("/car/:carId", (request, response) => {
  console.log("this is my request.params ======>>>>>", request.params)

  // extracting carId from request.params
  const { carId } = request.params
  response.send(car[carId].make)
})

app.listen(3000, () => {
  console.log("API listening on port 3000")
})
