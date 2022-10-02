import Vehicle from "./vehicle.js";
class AirVehicle extends Vehicle {
    constructor({ maxAltitude }, vehicleProps) {
        super(vehicleProps);
        this.toString = () => {
            return `${this.getString()}\tmaksimalus aukštis: ${this.maxAltitude}`;
        };
        this.maxAltitude = maxAltitude;
    }
}
export default AirVehicle;
//# sourceMappingURL=airVehicle.js.map