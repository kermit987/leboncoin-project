const { insertLogRequest } = require('model/statistic')

const fizzBuzzController = async (req, res) => {
  const { int1, int2, limit, str1, str2} = req.body

  console.log('inside the fizzBuzzController ', fizzBuzzController)
  if (int1 === undefined || int2 === undefined || limit === undefined || str1 === undefined|| str2 === undefined)
    res.status(400).send('Missing argument')
  else {
    const request = int1.toString() + " " + int2.toString() + " " + limit.toString() + " " + str1.toString() + " " + str2.toString()

    insertLogRequest(request)
  
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
}

module.exports = {
  fizzBuzzController
}