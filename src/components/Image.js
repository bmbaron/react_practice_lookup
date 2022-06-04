export default function Image(country) {

	/*
    get_page_images.js

    MediaWiki API Demos
    Demo of `Images` module: Send a GET request to obtain a JSON
	object listing all of the image files embedded on a single page

    MIT License
*/

var url = "https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=pageimages&format=json&piprop=original&titles="; 

url = url + country

const backupImage = "https://region4.uaw.org/sites/default/files/bio/10546i3dac5a5993c8bc8c_6.jpg"

const imageURL = fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
				var number = Object.keys(response.query.pages)
				var image = ""
        if (response.query.pages[`${number}`].hasOwnProperty('original')) {
					image=response.query.pages[`${number}`].original.source
				}
				else {
					image = ""
				}
				return (image === "" ? backupImage : image)
    })
    .catch(function(error){console.log(error);});

		return imageURL
}