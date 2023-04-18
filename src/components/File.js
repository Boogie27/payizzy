
let production = 'https://example.com'


// Client url link
// let clientURI = 'http://localhost:3000'


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




// web app logo
const logo = (string) => {
    return 'asset/images/logo/' + string
}



// app image 
const app_image = (string) => {
    return 'asset/images/app-image/' + string
}




const blog_img = (string) => {
    return 'asset/images/blog/' + string
}



const user_img = (string) => {
    return 'asset/images/users/' + string
}



const contact_img = (string) => {
    return 'asset/images/contact/' + string
}



const help_img = (string) => {
    return 'asset/images/help/' + string
}



const preloader = (string) => {
    return 'asset/preloader/' + string
}



export {
    url,
    logo,
    help_img,
    user_img,
    blog_img,
    app_image,
    preloader,
    contact_img,
}