// switch (status) {
//   case 'Rain':
//     return "http://pexels.imgix.net/photos/1551/field-thunderstorm-rainy-meadow.jpg?fit=crop&w=1600&h=853";
//     break;
//   case 'Drizzle':
//     return "http://pexels.imgix.net/photos/1551/field-thunderstorm-rainy-meadow.jpg?fit=crop&w=1600&h=853";
//     break;
//   case 'Clear':
//     return "http://pexels.imgix.net/photos/3032/summer-ray-of-sunshine-bikes-bicycles.jpg?fit=crop&w=1600&h=853";
//     break;
//   case 'Clouds':
//     return "http://pexels.imgix.net/photos/2083/city-clouds-cloudy-ray-of-sunshine.jpg?fit=crop&w=1600&h=853";
//     break;
//   case 'Thunderstorm':
//     return "http://pexels.imgix.net/photos/2271/clouds-cloudy-field-meadow.jpg?fit=crop&w=1600&h=853";
//     break;
//   case 'Snow':
//     return "http://pexels.imgix.net/photos/2377/snow-black-and-white-street-winter.jpg?fit=crop&w=1600&h=853";
//     break;
//   case 'Mist':
//     return "http://pexels.imgix.net/photos/5230/road-fog-foggy-mist.jpg?fit=crop&w=1600&h=853";
//     break;
//   case 'Fog':
//     return "http://pexels.imgix.net/photos/5230/road-fog-foggy-mist.jpg?fit=crop&w=1600&h=853";
//     break;
//   case 'Haze':
//     return "http://pexels.imgix.net/photos/5281/city-sky-skyline-australia.jpg?fit=crop&w=1600&h=853";
//     break;
//   default:
//     return "http://pexels.imgix.net/photos/2083/city-clouds-cloudy-ray-of-sunshine.jpg?fit=crop&w=1600&h=853";
// }

// function(temp) {
//   var leftSide, rightSide;
//   var temps = [-2, 3, 8, 13, 18, 23, 28, 33, 38];

//   if (temp < 18) {
//     leftSide = temps.splice(0, temps.length / 2);

//     return 'linear-gradient(rgba(' + _calcDegree(leftSide) + ', 0, 200, 0.5), rgba(0, 0, 200, 0.5))';
//   } else if (temp > 18) {
//     rightSide = temps.splice(temps.length / 2, temps.length);

//     return 'linear-gradient(rgba(200, 0, 200, 0.5), rgba(' + _calcDegree(rightSide) + ', 0, 200, 0.5))';
//   } else {
//     return 'linear-gradient(rgba(200, 0, 200, 0.5), rgba(0, 0, 200, 0.5))';
//   }

//   function _calcDegree(tempArr) {
//     var colorR = 0;

//     tempArr.forEach(function (el) {
//       if (temp > el) {
//         colorR += 50;
//       }
//     });

//     return colorR;
//   }
// };
