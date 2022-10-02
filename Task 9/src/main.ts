import LandVehicle from './landVehicle.js';
import AirVehicle from './airVehicle.js';
import WaterVehicle from './waterVehicle.js';

const vehicles: (LandVehicle | AirVehicle | WaterVehicle)[] = [
  new LandVehicle({
    tires: ['Delux 200 m&s', 'Delux 200 m&s', 'Fairtex 200 m&s', 'Fairtex 200 m&s']
  }, {
    brand: 'Mersedes',
    model: 'Vito',
    year: 2005,
  }),
  new LandVehicle({
    tires: ['Delux 200 m&s', 'Delux 200 m&s', 'Fairtex 200 m&s', 'Fairtex 200 m&s']
  }, {
    brand: 'Hyundai',
    model: 'i30',
    year: 2007,
  }),
  new AirVehicle({
    maxAltitude: 7000,
  }, {
    brand: 'Jeep',
    model: 'Cherokee',
    year: 2015,
  }),
  new AirVehicle({
    maxAltitude: 5000,
  }, {
    brand: 'Lexus',
    model: 'rx',
    year: 2012,
  }),
  new WaterVehicle({
    maxDepth: 50,
  }, {
    brand: 'Landrover',
    model: 'Defender',
    year: 2011,
  }),
  new WaterVehicle({
    maxDepth: 70,
  }, {
    brand: 'Volvo',
    model: 'xc90',
    year: 202,
  }),
];

vehicles.forEach(v => console.log(v.toString()));