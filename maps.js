import Map from './Map.js';
import InfoWindow from "./InfoWindow.js";


const mainMap = new Map();
const InfoWindows = new InfoWindow();

const initialMarkers = [
    {
        lat: 41.634915,
        lng: -99.885121,
        name: 'Nebraska',
    }
]

initialMarkers.forEach(marker =>{
    mainMap.addMarker(marker,state => InfoWindows.attachButton(marker, marker.name, zoomToState));
})

export {mainMap, initialMarkers, InfoWindows}

const stateMarkers = {
    Nebraska: [
        {
            lat: 41.634917,
            lng: -99.385123,
            name: 'Fake pond',
        }
    ]
}

function zoomToState(marker){
    console.log(mainMap.map);
    // remove old marker,

    // place new markers
    stateMarkers[marker.name].forEach(newMarker => {
        mainMap.addMarker(newMarker, state => InfoWindows.attachButton(newMarker, newMarker.name, zoomToState));
        console.log(mainMap.markers);
    })

    // zoom & center
    mainMap.map.setZoom(7);
    mainMap.map.setCenter(marker);
    console.log(marker.name);
}