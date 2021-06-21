const express = require('express')
const Router = express.Router()
const {
  getStatistic
} = require('controller/statistic.controller.js')

/**
 * @swagger
 * /getStatistic:
 *  get:
 *    description: Allow users to know what the most frequent request has been
 *    responses:
 *      '200':
 *        description: The most used request (doc) and how many time it has been hit (mostUsedRequest)
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                mostUsedRequest:
 *                  type: integer
 *                  example: 4
 *                doc:
 *                  type: string
 *                  example: "5 6 30 five six"
 * 
 */

Router.get('/getStatistic', getStatistic)

module.exports = Router