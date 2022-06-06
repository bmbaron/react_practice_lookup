export default function Image(country) {

	/*
    get_page_images.js

    MediaWiki API Demos
    Demo of `Images` module: Send a GET request to obtain a JSON
	object listing all of the image files embedded on a single page

    MIT License
*/

	function getImageUrl(url) {

		const backupImage = "https://region4.uaw.org/sites/default/files/bio/10546i3dac5a5993c8bc8c_6.jpg"

		return fetch(url)
			.then(function(response){return response.json();})
			.then(function(response) {
					console.log("got response")
					const number = Object.keys(response.query.pages)
					let image = ""
					if (response.query.pages[`${number}`].hasOwnProperty('original')) {
						image=response.query.pages[`${number}`].original.source
					}
					else {
						image = ""
					}
					if (!image.includes("flag") && !image.includes("Flag")){
						image = ""
					}

					return (image === "" ? backupImage : image)
			})
			.catch(function(error){console.log(error);});
	}

	if (!country) {
		return "https://besthqwallpapers.com/Uploads/11-10-2020/143561/thumb2-blue-world-map-digital-art-3d-maps-world-map-concept-artwork.jpg"
	}
	else {
		let url = "https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=pageimages&format=json&piprop=original&titles="; 
		url = url + country
		return getImageUrl(url)
	}

}