(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,a,n){},16:function(t,a,n){},18:function(t,a,n){"use strict";n.r(a);var c=n(0),i=n.n(c),o=n(4),r=n.n(o);n(14),n(16);function y(){return i.a.createElement("header",{className:"header"},"Capital Finder")}var e=n(2),u=n(1);function l(t){return i.a.createElement("button",{className:"suggestion",onClick:function(a){t.function(a,t.country)},value:t.country},t.country)}function s(t){if(t){var a="https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=pageimages&format=json&piprop=original&titles=";return function(t){return fetch(t).then(function(t){return t.json()}).then(function(t){console.log("got response");var a=Object.keys(t.query.pages),n="";return(n=t.query.pages["".concat(a)].hasOwnProperty("original")?t.query.pages["".concat(a)].original.source:"").includes("flag")||n.includes("Flag")||(n=""),""===n?"https://region4.uaw.org/sites/default/files/bio/10546i3dac5a5993c8bc8c_6.jpg":n}).catch(function(t){console.log(t)})}(a+=t)}return"https://besthqwallpapers.com/Uploads/11-10-2020/143561/thumb2-blue-world-map-digital-art-3d-maps-world-map-concept-artwork.jpg"}var d=function(t){return i.a.createElement("div",{className:"image-container"},i.a.createElement("img",{className:"image-flag",src:t.image,alt:"country flag"}))};function m(t){var a=i.a.useState(""),n=Object(u.a)(a,2),c=n[0],o=n[1],r=i.a.useState([{show:!1},{name:""}]),y=Object(u.a)(r,2),e=y[0],m=y[1],g=i.a.useState([{show:!1},{name:""}]),h=Object(u.a)(g,2),p=h[0],b=h[1],S=i.a.useState([]),f=Object(u.a)(S,2),w=f[0],v=f[1];function k(a,n){m([{show:!1},{name:n}]),v([]),function(a){t.data.forEach(function(t){t.country===a.target.value&&b([{show:!0},{name:t.city}])})}(a),o(""),Promise.resolve(s(a.target.value)).then(function(t){return o(t)})}function B(a){v(function(a){var n=a.toLowerCase();return t.data.filter(function(t){for(var a=0,c=0;c<n.length;c++)t.country.charAt(c)!==n.charAt(c)&&t.country.charAt(c).toLowerCase()!==n.charAt(c)||(a+=1);return a===n.length&&t.country})}(a).map(function(t){return i.a.createElement(l,{country:t.country,function:k,key:t.country})}))}return c||o(s()),i.a.createElement("div",null,i.a.createElement("div",{className:"container-main"},i.a.createElement("div",{className:"container-fields"},i.a.createElement("input",{id:"country-input",className:"input",type:"text",placeholder:"enter a country",name:"country",onChange:function(t){t.preventDefault(),m([{show:!0},{name:t.target.value}]),b([{show:!1},{name:""}]),B(t.target.value)},onKeyDown:function(t){var a=t.keyCode||t.charCode;8!==a&&46!==a||(t.preventDefault(),m([{show:!1},{name:""}]),b([{show:!1},{name:""}]),v([]),o(""))},value:e[1].name,autoComplete:"off"}),e[0].show&&i.a.createElement("div",{className:"suggestion-container"},w),p[0].show&&i.a.createElement("input",{id:"city-input",className:"output",type:"text",placeholder:"capital",name:"capital",readOnly:!0,value:p[1].name})),e[1].name&&i.a.createElement("div",{className:"container-buttons"},!e[0].show&&i.a.createElement("button",{className:"button-clear",onClick:function(){m([{show:!1},{name:""}]),b([{show:!1},{name:""}]),v([]),o("")}},"clear"))),i.a.createElement(d,{image:c}))}var g=[{country:"Afghanistan",city:"Kabul"},{country:"Albania",city:"Tirana"},{country:"Algeria",city:"Alger"},{country:"American Samoa",city:"Fagatogo"},{country:"Andorra",city:"Andorra la Vella"},{country:"Angola",city:"Luanda"},{country:"Anguilla",city:"The Valley"},{country:"Antarctica",city:"(no capital)"},{country:"Antigua and Barbuda",city:"Saint John's"},{country:"Argentina",city:"Buenos Aires"},{country:"Armenia",city:"Yerevan"},{country:"Aruba",city:"Oranjestad"},{country:"Australia",city:"Canberra"},{country:"Austria",city:"Wien"},{country:"Azerbaijan",city:"Baku"},{country:"Bahamas",city:"Nassau"},{country:"Bahrain",city:"al-Manama"},{country:"Bangladesh",city:"Dhaka"},{country:"Barbados",city:"Bridgetown"},{country:"Belarus",city:"Minsk"},{country:"Belgium",city:"Bruxelles [Brussel]"},{country:"Belize",city:"Belmopan"},{country:"Benin",city:"Porto-Novo"},{country:"Bermuda",city:"Hamilton"},{country:"Bhutan",city:"Thimphu"},{country:"Bolivia",city:"La Paz"},{country:"Bosnia and Herzegovina",city:"Sarajevo"},{country:"Botswana",city:"Gaborone"},{country:"Bouvet Island",city:"(no capital)"},{country:"Brazil",city:"Bras\xedlia"},{country:"British Indian Ocean Territory",city:"(no capital)"},{country:"Brunei",city:"Bandar Seri Begawan"},{country:"Bulgaria",city:"Sofia"},{country:"Burkina Faso",city:"Ouagadougou"},{country:"Burundi",city:"Bujumbura"},{country:"Cambodia",city:"Phnom Penh"},{country:"Cameroon",city:"Yaound"},{country:"Canada",city:"Ottawa"},{country:"Cape Verde",city:"Praia"},{country:"Cayman Islands",city:"George Town"},{country:"Central African Republic",city:"Bangui"},{country:"Chad",city:"N'Djam"},{country:"Chile",city:"Santiago de Chile"},{country:"China",city:"Peking"},{country:"Christmas Island",city:"Flying Fish Cove"},{country:"Cocos (Keeling) Islands",city:"West Island"},{country:"Colombia",city:"Santaf"},{country:"Comoros",city:"Moroni"},{country:"Congo",city:"Brazzaville"},{country:"Cook Islands",city:"Avarua"},{country:"Costa Rica",city:"San Jos\xe9"},{country:"Croatia",city:"Zagreb"},{country:"Cuba",city:"La Habana"},{country:"Cyprus",city:"Nicosia"},{country:"Czech Republic",city:"Praha"},{country:"Denmark",city:"Copenhagen"},{country:"Djibouti",city:"Djibouti"},{country:"Dominica",city:"Roseau"},{country:"Dominican Republic",city:"Santo Domingo de Guzm"},{country:"East Timor",city:"Dili"},{country:"Ecuador",city:"Quito"},{country:"Egypt",city:"Cairo"},{country:"El Salvador",city:"San Salvador"},{country:"England",city:"London"},{country:"Equatorial Guinea",city:"Malabo"},{country:"Eritrea",city:"Asmara"},{country:"Estonia",city:"Tallinn"},{country:"Ethiopia",city:"Addis Abeba"},{country:"Falkland Islands",city:"Stanley"},{country:"Faroe Islands",city:"T\xf3rshavn"},{country:"Fiji Islands",city:"Suva"},{country:"Finland",city:"Helsinki [Helsingfors]"},{country:"France",city:"Paris"},{country:"French Guiana",city:"Cayenne"},{country:"French Polynesia",city:"Papeete"},{country:"French Southern territories",city:"(no capital)"},{country:"Gabon",city:"Libreville"},{country:"Gambia",city:"Banjul"},{country:"Georgia",city:"Tbilisi"},{country:"Germany",city:"Berlin"},{country:"Ghana",city:"Accra"},{country:"Gibraltar",city:"Gibraltar"},{country:"Greece",city:"Athenai"},{country:"Greenland",city:"Nuuk"},{country:"Grenada",city:"Saint George's"},{country:"Guadeloupe",city:"Basse-Terre"},{country:"Guam",city:"Aga"},{country:"Guatemala",city:"Ciudad de Guatemala"},{country:"Guinea",city:"Conakry"},{country:"Guinea-Bissau",city:"Bissau"},{country:"Guyana",city:"Georgetown"},{country:"Haiti",city:"Port-au-Prince"},{country:"Heard Island and McDonald Islands",city:"(no capital)"},{country:"Holy See (Vatican City State)",city:"Citt"},{country:"Honduras",city:"Tegucigalpa"},{country:"Hong Kong",city:"Victoria"},{country:"Hungary",city:"Budapest"},{country:"Iceland",city:"Reykjav\xedk"},{country:"India",city:"New Delhi"},{country:"Indonesia",city:"Jakarta"},{country:"Iran",city:"Tehran"},{country:"Iraq",city:"Baghdad"},{country:"Ireland",city:"Dublin"},{country:"Israel",city:"Jerusalem"},{country:"Italy",city:"Roma"},{country:"Ivory Coast",city:"Yamoussoukro"},{country:"Jamaica",city:"Kingston"},{country:"Japan",city:"Tokyo"},{country:"Jordan",city:"Amman"},{country:"Kazakhstan",city:"Astana"},{country:"Kenya",city:"Nairobi"},{country:"Kiribati",city:"Bairiki"},{country:"Kuwait",city:"Kuwait"},{country:"Kyrgyzstan",city:"Bishkek"},{country:"Laos",city:"Vientiane"},{country:"Latvia",city:"Riga"},{country:"Lebanon",city:"Beirut"},{country:"Lesotho",city:"Maseru"},{country:"Liberia",city:"Monrovia"},{country:"Libyan Arab Jamahiriya",city:"Tripoli"},{country:"Liechtenstein",city:"Vaduz"},{country:"Lithuania",city:"Vilnius"},{country:"Luxembourg",city:"Luxembourg [Luxemburg/L"},{country:"Macao",city:"Macao"},{country:"North Macedonia",city:"Skopje"},{country:"Madagascar",city:"Antananarivo"},{country:"Malawi",city:"Lilongwe"},{country:"Malaysia",city:"Kuala Lumpur"},{country:"Maldives",city:"Male"},{country:"Mali",city:"Bamako"},{country:"Malta",city:"Valletta"},{country:"Marshall Islands",city:"Dalap-Uliga-Darrit"},{country:"Martinique",city:"Fort-de-France"},{country:"Mauritania",city:"Nouakchott"},{country:"Mauritius",city:"Port-Louis"},{country:"Mayotte",city:"Mamoutzou"},{country:"Mexico",city:"Ciudad de M"},{country:"Micronesia, Federated States of",city:"Palikir"},{country:"Moldova",city:"Chisinau"},{country:"Monaco",city:"Monaco-Ville"},{country:"Mongolia",city:"Ulan Bator"},{country:"Montenegro",city:"Podgorica"},{country:"Montserrat",city:"Plymouth"},{country:"Morocco",city:"Rabat"},{country:"Mozambique",city:"Maputo"},{country:"Myanmar",city:"Rangoon (Yangon)"},{country:"Namibia",city:"Windhoek"},{country:"Nauru",city:"Yaren"},{country:"Nepal",city:"Kathmandu"},{country:"Netherlands",city:"Amsterdam"},{country:"Netherlands Antilles",city:"Willemstad"},{country:"New Caledonia",city:"Noum"},{country:"New Zealand",city:"Wellington"},{country:"Nicaragua",city:"Managua"},{country:"Niger",city:"Niamey"},{country:"Nigeria",city:"Abuja"},{country:"Niue",city:"Alofi"},{country:"Norfolk Island",city:"Kingston"},{country:"North Korea",city:"Pyongyang"},{country:"Northern Ireland",city:"Belfast"},{country:"Northern Mariana Islands",city:"Garapan"},{country:"Norway",city:"Oslo"},{country:"Oman",city:"Masqat"},{country:"Pakistan",city:"Islamabad"},{country:"Palau",city:"Koror"},{country:"Palestine",city:"Gaza"},{country:"Panama",city:"Ciudad de Panam\xe1"},{country:"Papua New Guinea",city:"Port Moresby"},{country:"Paraguay",city:"Asunci\xf3n"},{country:"Peru",city:"Lima"},{country:"Philippines",city:"Manila"},{country:"Pitcairn",city:"Adamstown"},{country:"Poland",city:"Warszawa"},{country:"Portugal",city:"Lisboa"},{country:"Puerto Rico",city:"San Juan"},{country:"Qatar",city:"Doha"},{country:"Reunion",city:"Saint-Denis"},{country:"Romania",city:"Bucuresti"},{country:"Russian Federation",city:"Moscow"},{country:"Rwanda",city:"Kigali"},{country:"Saint Helena",city:"Jamestown"},{country:"Saint Kitts and Nevis",city:"Basseterre"},{country:"Saint Lucia",city:"Castries"},{country:"Saint Pierre and Miquelon",city:"Saint-Pierre"},{country:"Saint Vincent and the Grenadines",city:"Kingstown"},{country:"Samoa",city:"Apia"},{country:"San Marino",city:"San Marino"},{country:"Sao Tome and Principe",city:"S\xe3o Tom\xe9"},{country:"Saudi Arabia",city:"Riyadh"},{country:"Scotland",city:"Edinburgh"},{country:"Senegal",city:"Dakar"},{country:"Serbia",city:"Belgrade"},{country:"Seychelles",city:"Victoria"},{country:"Sierra Leone",city:"Freetown"},{country:"Singapore",city:"Singapore"},{country:"Slovakia",city:"Bratislava"},{country:"Slovenia",city:"Ljubljana"},{country:"Solomon Islands",city:"Honiara"},{country:"Somalia",city:"Mogadishu"},{country:"South Africa",city:"Pretoria"},{country:"South Georgia and the South Sandwich Islands",city:"(no capital)"},{country:"South Korea",city:"Seoul"},{country:"South Sudan",city:"Juba"},{country:"Spain",city:"Madrid"},{country:"Sri Lanka",city:"(no capital)"},{country:"Sudan",city:"Khartum"},{country:"Suriname",city:"Paramaribo"},{country:"Svalbard and Jan Mayen",city:"Longyearbyen"},{country:"Swaziland",city:"Mbabane"},{country:"Sweden",city:"Stockholm"},{country:"Switzerland",city:"Bern"},{country:"Syria",city:"Damascus"},{country:"Tajikistan",city:"Dushanbe"},{country:"Taiwan",city:"Taipei"},{country:"Tanzania",city:"Dodoma"},{country:"Thailand",city:"Bangkok"},{country:"The Democratic Republic of Congo",city:"Kinshasa"},{country:"Togo",city:"Lom\xe9"},{country:"Tokelau",city:"Fakaofo"},{country:"Tonga",city:"Nuku'alofa"},{country:"Trinidad and Tobago",city:"Port-of-Spain"},{country:"Tunisia",city:"Tunis"},{country:"Turkey",city:"Ankara"},{country:"Turkmenistan",city:"Ashgabat"},{country:"Turks and Caicos Islands",city:"Cockburn Town"},{country:"Tuvalu",city:"Funafuti"},{country:"Uganda",city:"Kampala"},{country:"Ukraine",city:"Kyiv"},{country:"United Arab Emirates",city:"Abu Dhabi"},{country:"United Kingdom",city:"London"},{country:"United States",city:"Washington"},{country:"United States Minor Outlying Islands",city:"(no capital)"},{country:"Uruguay",city:"Montevideo"},{country:"Uzbekistan",city:"Toskent"},{country:"Vanuatu",city:"Port-Vila"},{country:"Venezuela",city:"Caracas"},{country:"Vietnam",city:"Hanoi"},{country:"Virgin Islands, British",city:"Road Town"},{country:"Virgin Islands, U.S.",city:"Charlotte Amalie"},{country:"Wales",city:"Cardiff"},{country:"Wallis and Futuna",city:"Mata-Utu"},{country:"Western Sahara",city:"El-Aai"},{country:"Yemen",city:"Sanaa"},{country:"Zambia",city:"Lusaka"},{country:"Zimbabwe",city:"Harare"}];function h(){return g.map(function(t,a){return Object(e.a)({},t,{id:a,current:!1})})}function p(){var t=i.a.useState(h),a=Object(u.a)(t,2),n=a[0],c=a[1];return i.a.createElement("div",null,i.a.createElement(m,{function:function(t){c(function(a){return a.map(function(a,n){return n===t?Object(e.a)({},a,{current:!0}):a})})},data:n}))}function b(){return i.a.createElement("div",null,i.a.createElement(y,null),i.a.createElement(p,null))}r.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)))},5:function(t,a,n){t.exports=n(18)}},[[5,2,1]]]);
//# sourceMappingURL=main.912941f6.chunk.js.map