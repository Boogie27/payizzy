
let production = 'https://example.com'


// Client url link
let clientURI = 'http://localhost:3000'


// data base url link
let databaseURI = 'http://localhost:3001'







const url = (string = null) => { 
    const url = window.location.href.split('/')[2]
    const url_name = url.split(':')[0]
    if(url_name === 'localhost'){
        return databaseURI + string
    }
    return production + string
}














export {
    url,
}