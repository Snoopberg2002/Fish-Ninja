//Create United States Map
function initMap() {
    let options = {
        zoom: 4,
        center: {lat: 38.248175, lng: -94.147841},
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
    }
    this.map = new google.maps.Map(document.getElementById("map"), options);
    
    //Add Marker Function
    const markers = [];

    function addMarker(props) {
    let marker = new google.maps.Marker({
        position: {lat: props.latitude, lng: props.longitude},
        state: props.name,
        map: map
    });

    

    //    Create Info Window
    let info = new google.maps.InfoWindow({
        content: `<h3><a href=${marker.state}.html class="stateZoom" data-state="${marker.state}">${marker.state}</a></h3>`
        // content: attachButton(marker.state)
    });
    
    marker.addListener("click", function() {
        info.open(map, marker);
    });
    markers.push(marker);
  }

  

    addMarker({
        latitude: 41.634915, 
        longitude: -99.885121,
        name: "Nebraska"
    });
    addMarker({
        latitude: 42.418086, 
        longitude: -93.589918,
        name: "Iowa"
    });
    addMarker({
        latitude: 43.201730, 
        longitude: -75.532868,
        name: "NewYork"
    });
    addMarker({
        latitude: 43.994966, 
        longitude: -72.666294,
        name: "Vermont"
    });
}
// setTimeout(function () {
//   initMapTest();
// }, 1000);

/// Create Button
function attachButton(state){
  let button = document.createElement('button');
  button.innerText = state;
  button.addEventListener('click',()=>{
    zoomToState(state)
  });
  return button;
}

function zoomToState(state){
  console.log(state);
}

//Finding News Articles
let url = "https://newsapi.org/v2/everything?q=fishing&apiKey=4b11091ff1384feb8a0969a8197672d2";

// let req = new Request(url);
// let stories = [];
// fetch(req)
//     .then(response => response.json())
//     .then(res => {
//       document.querySelector("#news").insertAdjacentHTML("afterbegin", res.articles.map(curr => `<li class="modalBtn"><a href="#">${curr.title}</a></li>`).join(""), stories.push(res.articles))
//       console.log(stories)
//       let titles = document.querySelector(".modalBtn");
//       titles.addEventListener("click", event = () => {
//         event.preventDefault();
//         console.log(titles.textContent);
//         // stories.forEach(story => {
//         //   if (story.title === titles.textContent) {
//         //     console.log(story.content);
//         //   }
//         // })
//       });
    
    
//       // .then(document.querySelector(".modalBtn").addEventListener("click", event = () => {
//     //     event.preventDefault();
//     //     console.log(curr);
//     //   }));
//     })

//     // .then(data => stories.push(data.articles))
//     // .then(console.log(stories))
    

// // document.querySelector(".modalBtn").addEventListener("click", event = () => {
// //   event.preventDefault();
// //   console.log(curr);
// // });

    
// // url = "https://www.in-fisherman.com/search-results.aspx#?cludoquery=articles&cludopage=1&cludorefurl=https%3A%2F%2Fwww.in-fisherman.com%2Fcontent%2Fwhere-to-boat-and-fish%2F326757&cludorefpt=Where%20to%20Fish%20and%20Boat";

// // req = new Request(url);

// // fetch(req)
// //     .then(response => response.json())
// //     .then(data => console.log(data))