const { logRequest } = require('model/statisticModel')
// const express = require('express')

const fizzBuzzController = async (req, res) => {
  const { int1, int2, limit, str1, str2} = req.body

  const request = int1.toString() + " " + int2.toString() + " " + limit.toString() + " " + str1.toString() + " " + str2.toString()

  logRequest(request)

  const result = []
  for (i = 1; i <= limit; i++) {
    if (i % int1 === 0 && i % int2 === 0)
      result.push(str1 + str2)
    else if (i % int1 === 0) 
      result.push(str1)
    else if (i % int2 === 0)
      result.push(str2)
    else
      result.push(i.toString()) 
  }
  res.status(200).send(result)
}

module.exports = {
  fizzBuzzController
}