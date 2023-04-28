export const mapstyles = {
  zoom: 16,
  center: {lat: 53.668398, lng: -2.167713},
  styles: [
    {
      featureType: 'landscape',
      elementType: 'geometry.fill',
      stylers: [{color: '#ffffff'}],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [{color: '#efefef'}],
    },
    {
      featureType: 'water',
      stylers: [{visibility: 'off'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{visibility: 'on'}, {color: '#dedddd'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry.fill',
      stylers: [{visibility: 'on'}, {color: '#efefef'}],
    },
    {
      featureType: 'poi',
      elementType: 'labels.icon',
      stylers: [{visibility: 'on'}],
    },
  ],
};
