## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Usage](#usage)
* [Authors](#authors)
* [Support](#support)

## General info

This project is a simple fizz-and-buzz project.

The original fizz-buzz consists in writing all numbers from 1 to 100, and just replacing all multiples of 3 by "fizz", all multiples of 5 by "buzz", and all multiples of 15 by "fizzbuzz". The output would look like this: "1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz,16,..."

leboncoin-project is a web server that will expose a REST API with the following endpoint: 

/post fizz-buzz

Accepts five parameters : three integers int1, int2 and limit, and two strings str1 and str2.

Returns a list of strings with numbers from 1 to limit, where: all multiples of int1 are replaced by str1, all multiples of int2 are replaced by str2, all multiples of int1 and int2 are replaced by str1str2.

/get  getStatistic

Allowing users to know what the most frequent request has been and return the parameters corresponding to the most used request, as well as the number of hits for this request
	
## Technologies
Project is created with:
* mongodb: 3.6.9
* supertest: 6.1.3
* express: 4.17.1
* nodejs: 12.4.0
* swagger-jsdoc: 6.1.0
* swagger-ui-express: 4.1.6
	
## Setup

Clone this repository on your machine and run the following command to install all the dependencies:

```
$ npm install
```

To run this project use one of those command:

```
$ npm run dev //for development environment
$ npm run test //for launching test
$ npm run start //for production environment only

```

## Usage

Once the repository clone on your local machine and once the dependencies install, run the above command (show in the Setup section). You will then be able to access it at http://localhost:8080

## Authors

Steven Loo Fat - Developer 

## Support

mail: steven.loofat@gmail.com
