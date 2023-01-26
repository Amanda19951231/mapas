// @TODO refactor
// TODO make filters work together

var json = [
  {
  "country" : "brasil",
  "state" : "rs",
  "city" : "panambi",
  "region" : "noroeste",
  "company" : "dryertech",
  "unity" : "dryertech",
  "equipment" : "secador",
  "status" : "offline",
  "geometry": {
      "type": "Point",
      "coordinates": [
          -28.320830674994408, -53.501318282211464
      ]
  }
},
{
  "country" : "brasil",
  "state" : "rs",
  "city" : "panambi",
  "region" : "noroeste",
  "company" : "dryertech",
  "unity" : "dryertech",
  "equipment" : "secador",
  "status" : "online",
  "geometry": {
      "type": "Point",
      "coordinates": [
          -28.320830674994408, -53.501318282211464
      ]
  }
},
{
  "country" : "brasil",
  "state" : "rs",
  "city" : "ijui",
  "region" : "noroeste",
  "company" : "sdryer",
  "unity" : "sdryer",
  "equipment" : "secador",
  "status" : "online",
  "geometry": {
      "type": "Point",
      "coordinates": [
          -28.41, 
          -53.93
      ]
  }
},
{
  "country" : "brasil",
  "state" : "rs",
  "city" : "ijui",
  "region" : "noroeste",
  "company" : "termogrex",
  "unity" : "termogrex",
  "equipment" : "silo",
  "status" : "online",
  "geometry": {
      "type": "Point",
      "coordinates": [
          -28.40, 
          -53.88
      ]
  }
},
{
  "country" : "brasil",
  "state" : "rs",
  "city" : "portoAlegre",
  "region" : "noroeste",
  "company" : "sdryer",
  "unity" : "sdryer",
  "equipment" : "secador",
  "status" : "offline",
  "geometry": {
      "type": "Point",
      "coordinates": [
          -30.09,
          -51.19
      ]
  }
},
{
  "country" : "brasil",
  "state" : "rs",
  "city" : "ibiruba",
  "region" : "noroeste",
  "company" : "termogrex",
  "unity" : "termogrex",
  "equipment" : "silo",
  "status" : "conectado",
  "geometry": {
      "type": "Point",
      "coordinates": [
          -28.62, 
          -53.10
      ]
  }
},
{
  "country" : "brasil",
  "state" : "rs",
  "city" : "portoAlegre",
  "region" : "noroeste",
  "company" : "agromec",
  "unity" : "agromec",
  "equipment" : "silo",
  "status" : "desconectado",
  "geometry": {
      "type": "Point",
      "coordinates": [
          -30.12, 
          -51.15
      ]
  }
},
{
  "country" : "brasil",
  "state" : "amazonia",
  "city" : "manaus",
  "region" : "nordeste",
  "company" : "agromec",
  "unity" : "agromec",
  "equipment" : "silo",
  "status" : "online",
  "geometry": {
      "type": "Point",
      "coordinates": [
        -3.042595861260579, 
        -59.89295860113163
      ]
  }
},
{
  "country" : "brasil",
  "state" : "acre",
  "city" : "manoelUrbano",
  "region" : "noroeste",
  "company" : "sdryer",
  "unity" : "sdryer",
  "equipment" : "secador",
  "status" : "offline",
  "geometry": {
      "type": "Point",
      "coordinates": [
        -8.844433450669746, 
        -69.27535395078417
      ]
  }
},
{
  "country" : "brasil",
  "state" : "mt",
  "city" : "cuiaba",
  "region" : "sul",
  "company" : "termogrex",
  "unity" : "termogrex",
  "equipment" : "silo",
  "status" : "desconectado",
  "geometry": {
      "type": "Point",
      "coordinates": [
        -15.578873791052644, 
        -56.19129413266663
      ]
  }
},
{
  "country" : "brasil",
  "state" : "mt",
  "city" : "cuiaba",
  "region" : "noroeste",
  "company" : "agromec",
  "unity" : "agromec",
  "equipment" : "silo",
  "status" : "desconectado",
  "geometry": {
      "type": "Point",
      "coordinates": [
        -15.678425647179061, 
        -56.058697732755796
      ]
  }
},
{
  "country" : "brasil",
  "state" : "ms",
  "city" : "campoGrande",
  "region" : "noroeste",
  "company" : "termogrex",
  "unity" : "termogrex",
  "equipment" : "silo",
  "status" : "conectado",
  "geometry": {
      "type": "Point",
      "coordinates": [
        -20.46368355657479, 
        -54.7347309172374
      ]
  }
},
{
  "country" : "brasil",
  "state" : "ms",
  "city" : "campoGrande",
  "region" : "noroeste",
  "company" : "termogrex",
  "unity" : "termogrex",
  "equipment" : "silo",
  "status" : "online",
  "geometry": {
      "type": "Point",
      "coordinates": [
        -20.429107896149596, 
        -54.6958883816061
      ]
  }
}
]

var jsonStringify = JSON.stringify(json)
var jsonParse = JSON.parse(jsonStringify); 

var markers = [];
var markerCluster;
var searchInput = jQuery('#searchMap input');
var filterSelect = jQuery('.filter');
var resetButton = jQuery('#resetFilter');



var filterResults = [];
/*for (var i = 0; i < json.length; i++) {
var filters = json[i];
var filterAnimal = filters.animal;
var filterDrink = filters.drink;
var filterName = filters.name;
filterResults.push(filterAnimal, filterDrink, filterName);       
}*/

for (var i = 0; i < json.length; i++) {
var filters = json[i];
var filterCountry = filters.country;
var filterState = filters.state;
var filterCity = filters.city;
var filterRegion = filters.region;
var filterCompany = filters.company;
var filterUnity = filters.unity;
var filterEquipment = filters.equipment;
var filterStatus = filters.status;
filterResults.push(filterCountry, filterState, filterCity, filterRegion, filterCompany, filterUnity, filterEquipment, filterStatus);       
}

var filterStringify = JSON.stringify(filterResults)
var filterParse = JSON.parse(filterStringify);   


function initMap() {

var center = new google.maps.LatLng(-28.320830674994408, -53.501318282211464);
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 6,
  //zoom: 16,
  center: center//new google.maps.LatLng(-28.320830674994408, -53.501318282211464)
});

for (var i = 0; i < json.length; i++){
  setMarkers(json[i], map);
}

markerCluster = new MarkerClusterer(map, markers, {ignoreHiddenMarkers: true, imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}

function setMarkers(marker, map) {
  var markerMap = marker.geometry.coordinates;
  var country = marker.country;
  var state = marker.state;
  var region = marker.region;
  var city = marker.city;
  var company = marker.company;
  var unity = marker.unity;
  var equipment = marker.equipment;
  var status = marker.status;
  var pos = new google.maps.LatLng(markerMap[0], markerMap[1]);
  var content = marker;

  markerMap = new google.maps.Marker({
  position: pos,
  country: country,
  state: state,
  region: region,
  city: city,
  company: company,
  unity: unity,
  equipment: equipment,
  status: status,
  map: map
});

markers.push(markerMap);

var infowindow = new google.maps.InfoWindow({
content: company + '<br/>' + unity + '<br/>' + equipment + '<br/>' + status 
});    

// Marker click listener
google.maps.event.addListener(markerMap, 'click', (function (marker1, content) {
return function () {
    infowindow.setContent(content);
    infowindow.open(map, markerMap);
    map.panTo(this.getPosition());
    // map.setZoom(15);
}
})(markerMap, content));
}

function clusterManager(array) {
markerCluster.clearMarkers();
if (!array.length) {
jQuery('.alert').addClass('is-visible');
} else {
jQuery('.alert').removeClass('is-visible');
for (i=0; i < array.length; i++) {
    markerCluster.addMarker(array[i]);
}
}
}

//@todo add inputsearch
function newFilter(filterType1 = 'all', filterType2 = 'all', filterType3 = 'all', filterType4 = 'all', filterType5 = 'all', filterType6 = 'all', filterType7 = 'all', filterType8 = 'all') {
var criteria = [
{ Field: "country", Values: [filterType1] },
{ Field: "state", Values: [filterType2] },
{ Field: "city", Values: [filterType3] },
{ Field: "region", Values: [filterType4] },
{ Field: "company", Values: [filterType5] },
{ Field: "unity", Values: [filterType6] },
{ Field: "equipment", Values: [filterType7] },
{ Field: "status", Values: [filterType8] },
// { Field: ["animal", "name", "drink"], Values: [filterTyped] }
];

var filtered = markers.flexFilter(criteria);
clusterManager(filtered);
}

Array.prototype.flexFilter = function(info) {
// Set our variables
var matchesFilter, matches = [], count;

// Helper function to loop through the filter criteria to find matching values
// Each filter criteria is treated as "AND". So each item must match all the filter criteria to be considered a match.
// Multiple filter values in a filter field are treated as "OR" i.e. ["Blue", "Green"] will yield items matching a value of Blue OR Green.
matchesFilter = function(item) {
count = 0
for (var n = 0; n < info.length; n++) {
if (info[n]["Values"].indexOf(item[info[n]["Field"]]) > -1) {
    count++;
}
//if value = all, return all item
else if (info[n]["Values"] == "all") {
    count++;
}
}
// If TRUE, then the current item in the array meets all the filter criteria
return count == info.length;
}

// Loop through each item in the array
for (var i = 0; i < this.length; i++) {
// Determine if the current item matches the filter criteria
if (matchesFilter(this[i])) {
matches.push(this[i]);
}
}

// Give us a new array containing the objects matching the filter criteria
return matches;
}



/////////////////////////////////////////////////////////////FILTRO 1
jQuery(document).ready(function() {
jQuery('.filter-country').on('change', function(){       
var filter2 = jQuery('.filter-state').val();
var filter3 = jQuery('.filter-city').val();
var filter4 = jQuery('.filter-region').val();
var filter5 = jQuery('.filter-company').val();
var filter6 = jQuery('.filter-unity').val();
var filter7 = jQuery('.filter-equipment').val();
var filter8 = jQuery('.filter-status').val();
newFilter(jQuery(this).val(), filter2, filter3, filter4, filter5, filter6, filter7, filter8);
});
/////////////////////////////////////////////////////////////FILTRO 2
jQuery('.filter-state').on('change', function(){
var filter1 = jQuery('.filter-country').val();
var filter3 = jQuery('.filter-city').val();
var filter4 = jQuery('.filter-region').val();
var filter5 = jQuery('.filter-company').val();
var filter6 = jQuery('.filter-unity').val();
var filter7 = jQuery('.filter-equipment').val();
var filter8 = jQuery('.filter-status').val();
newFilter(filter1, jQuery(this).val(), filter3, filter4, filter5, filter6, filter7, filter8);
});
/////////////////////////////////////////////////////////////FILTRO 3
jQuery('.filter-city').on('change', function(){
var filter1 = jQuery('.filter-country').val();
var filter2 = jQuery('.filter-state').val();
var filter4 = jQuery('.filter-region').val();
var filter5 = jQuery('.filter-company').val();
var filter6 = jQuery('.filter-unity').val();
var filter7 = jQuery('.filter-equipment').val();
var filter8 = jQuery('.filter-status').val();
newFilter(filter1, filter2, jQuery(this).val(), filter4, filter5, filter6, filter7, filter8);
});
/////////////////////////////////////////////////////////////FILTRO 4
jQuery('.filter-region').on('change', function(){
var filter1 = jQuery('.filter-country').val();
var filter2 = jQuery('.filter-state').val();
var filter3 = jQuery('.filter-city').val();
var filter5 = jQuery('.filter-company').val();
var filter6 = jQuery('.filter-unity').val();
var filter7 = jQuery('.filter-equipment').val();
var filter8 = jQuery('.filter-status').val();
newFilter(filter1, filter2, filter3, jQuery(this).val(), filter5, filter6, filter7, filter8);
});
/////////////////////////////////////////////////////////////FILTRO 5
jQuery('.filter-company').on('change', function(){
var filter1 = jQuery('.filter-country').val();
var filter2 = jQuery('.filter-state').val();
var filter3 = jQuery('.filter-city').val();
var filter4 = jQuery('.filter-region').val();
var filter6 = jQuery('.filter-unity').val();
var filter7 = jQuery('.filter-equipment').val();
var filter8 = jQuery('.filter-status').val();
newFilter(filter1, filter2, filter3, filter4, jQuery(this).val(), filter6, filter7, filter8);
});
/////////////////////////////////////////////////////////////FILTRO 6
jQuery('.filter-unity').on('change', function(){
var filter1 = jQuery('.filter-country').val();
var filter2 = jQuery('.filter-state').val();
var filter3 = jQuery('.filter-city').val();
var filter4 = jQuery('.filter-region').val();
var filter5 = jQuery('.filter-company').val();
var filter7 = jQuery('.filter-equipment').val();
var filter8 = jQuery('.filter-status').val();
newFilter(filter1, filter2, filter3, filter4, filter5, jQuery(this).val(), filter7, filter8);
});
/////////////////////////////////////////////////////////////FILTRO 7
jQuery('.filter-equipment').on('change', function(){
var filter1 = jQuery('.filter-country').val();
var filter2 = jQuery('.filter-state').val();
var filter3 = jQuery('.filter-city').val();
var filter4 = jQuery('.filter-region').val();
var filter5 = jQuery('.filter-company').val();
var filter6 = jQuery('.filter-unity').val();
var filter8 = jQuery('.filter-status').val();
newFilter(filter1, filter2, filter3, filter4, filter5, filter6, jQuery(this).val(), filter8);
});
/////////////////////////////////////////////////////////////FILTRO 8
jQuery('.filter-status').on('change', function(){
var filter1 = jQuery('.filter-country').val();
var filter2 = jQuery('.filter-state').val();
var filter3 = jQuery('.filter-city').val();
var filter4 = jQuery('.filter-region').val();
var filter5 = jQuery('.filter-company').val();
var filter6 = jQuery('.filter-unity').val();
var filter7 = jQuery('.filter-equipment').val();
newFilter(filter1, filter2, filter3, filter4, filter5, filter6, filter7, jQuery(this).val());
});

searchInput.on('keyup', function () {
  var searchTyped = $(this).val();
  var arr = [];
  if (searchTyped.length > 0) {
      jsonParse.filter(function() {
          for (i = 0; i < json.length; i++) {
              marker = markers[i];
              var markerFilter = [];
              var filterAnimal = marker.animal;
              var filterDrink = marker.drink;
              var filterName = marker.name;

              markerFilter.push(filterAnimal, filterDrink, filterName); 
              var markerFilterStringify = JSON.stringify(markerFilter);
              if( markerFilterStringify.indexOf(searchTyped) >= 0) {
                  arr.push(marker);
              } else {
                  console.log('dont fit requirement')
              }
          }
      });
      clusterManager(arr);
  } else {
      newFilter();
  }
});

resetButton.on('click', function() {
searchInput.val('');
filterSelect.val('all');
newFilter();
});

//delete all duplicated value from the previous array
var uniqueValue = [];
jQuery.each(filterResults, function(i, el){
if(jQuery.inArray(el, uniqueValue) === -1) {
    uniqueValue.push(el);
} 
});

var substringMatcher = function(strs) {
return function findMatches(q, cb) {
var matches, substringRegex;
matches = [];

substrRegex = new RegExp(q, 'i');

jQuery.each(strs, function(i, str) {
    if (substrRegex.test(str)) {
    matches.push(str);
    }
});
cb(matches);
};    
};
  searchInput.typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
name: 'customFilter',
source: substringMatcher(uniqueValue)
});

});


jQuery(window).on('load', function(){
initMap();
});