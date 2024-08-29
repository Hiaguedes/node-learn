import querystring from 'querystring'

const url = 'www.somedomain.com/?value1=valueone&value1=valueoneb&value2=valuetwo'

console.log(querystring.parse(url))

const params = {
    msg: 'Hello World!'
}

console.log(querystring.stringify(params)) // msg=Hello%20World!
