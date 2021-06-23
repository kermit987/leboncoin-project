<!--  PROJECT LOGO -->

<div style="text-align:center; max-width:50%;">
 <img src="https://github.com/kermit987/leboncoin-project/blob/main/images/logo.png" alt="drawing"/>	
</div>

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Usage](#usage)
* [Example](#example)
* [Authors](#authors)
* [Support](#support)

## General info

This project is a simple fizz-and-buzz project.

The original fizz-buzz consists in writing all numbers from 1 to 100, and just replacing all multiples of 3 by "fizz", all multiples of 5 by "buzz", and all multiples of 15 by "fizzbuzz". The output would look like this: "1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz,16,..."

leboncoin-project is a web server that will expose a REST API with the following endpoint: 

 - **fizz-buzz/** : 
    - Method: **POST**
      - Description: Returns a list of strings with numbers from 1 to limit, where: all multiples of int1 are replaced by str1, all multiples of int2 are 			     replaced by str2, all multiples of int1 and int2 are replaced by str1str2.
      - Body: int1, int2, limit, str1, str2

 - **getStatistic/** : 
    - Methods: **GET**
    - Description: Return a 200 status code and allow users to know what the most frequent request has been and return the parameters corresponding to the most 		   used request, as well as the number of hits for this request
    - Query Strings: none
    - 

	
## Technologies
Project is created with:
* mongodb: 3.6.9
* supertest: 6.1.3
* express: 4.17.1
* nodejs: 12.4.0
* swagger-jsdoc: 6.1.0
* swagger-ui-express: 4.1.6
	
## Setup

Clone this repository on your machine and run the following command:

```
$ git clone git@github.com:kermit987/leboncoin-project.git
```

install all the dependencies

```
$ cd leboncoin-project
$ npm install
```

To run this project use one of those command:

```
$ npm run dev //for development environment
$ npm run test //for launching test
$ npm run start //for production environment only

```

When running on your machine, your can access the swagger documentation at http://localhost:8080/api-docs 

## Usage

Once the repository clone on your local machine and once the dependencies install, run the above command (show in the Setup section). You will then be able to access it at http://localhost:8080

## example


```
curl -v http://localhost:8080/getSatistic
```

should return 

```
{
    "mostUsedRequest": 18,
    "doc": "3 4 40 three four"
}
```

```
curl -d "int1=3&int2=4&limit=10&str1=three&str2=four" -X POST http://localhost:8080/getStatistic

```
should return

```
[
    "1",
    "2",
    "3",
    "4",
    "five",
    "six",
    "7",
    "8",
    "9",
    "five",
    "11",
    "six",
    "13",
    "14",
    "five",
    "16",
    "17",
    "six",
    "19",
    "five",
    "21",
    "22",
    "23",
    "six",
    "five",
    "26",
    "27",
    "28",
    "29",
    "fivesix"
]
```


## Authors

Steven Loo Fat - Developer 

## Support

mail: steven.loofat@gmail.com
