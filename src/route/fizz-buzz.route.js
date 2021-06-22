const express = require('express')
const Router = express.Router()
const {
  fizzBuzzController
} = require('controller/fizz-buzz.controller.js')

/**
 * @swagger
 * /fizz-buzz:
 *  post:
 *    description: Returns a list of strings with numbers from 1 to limit, where all multiples of int1 are replaced by str1, all multiples of int2 are replaced by str2, all multiples of int1 and int2 are replaced by str1str2.
 *    parameters:
 *      - in: query
 *        name: int1
 *        schema:
 *          type: integer
 *        required: true
 *        description: first number to look for multiple
 *      - in: query
 *        name: int2
 *        schema:
 *          type: integer
 *        required: true
 *        description: second number to look for multiple
 *      - in: query
 *        name: str1
 *        schema:
 *          type: integer
 *        required: true
 *        description: first string to use to replace if one of the number is a multiple of int1
 *      - in: query
 *        name: str2
 *        schema:
 *          type: integer
 *        required: true
 *        description: second string to use to replace if one of the number is a multiple of int2
 *    requestBody:
 *      required: true
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              int1:
 *                type: int
 *              int2:
 *                type: int
 *              limit:
 *                type: int
 *              str1:
 *                type: string
 *              str2:
 *                type: string
 *              example:
 *                int1: 1
 *                int2: 2
 *                limit: 12
 *                str1: one
 *                str2: second
 * 
 *    responses:
 *      '200':
 *        description: a list replace by str1 or/and str2 if one of them is a multiple of int1 or/and int2
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: string
 * 
 */

Router.post('/fizz-buzz', fizzBuzzController)

module.exports = Router
