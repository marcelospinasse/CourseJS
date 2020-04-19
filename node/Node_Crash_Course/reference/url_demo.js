const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

//serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
//host (root domain)
console.log(myUrl.host);
//hostname (does not get port)
console.log(myUrl.hostname);
//Pathname
console.log(myUrl.pathname);
//Serialized query
console.log(myUrl.search);
//Params object
console.log(myUrl.searchParams);
//Add paramns
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);
//Loop through params
myUrl.searchParams.forEach((valor, nome) => console.log(`${valor}:${nome}`));

// Changing URL params with search
console.log(myUrl.search);
myUrl.search= "cde=456"
console.log(myUrl.href);