import React, {useContext} from "react";
import {Context} from "../store/appContext.js";
import PeopleCard from "../component/PeopleCard.jsx";
import VehicleCard from "../component/VehicleCard.jsx";
import PlanetCard from "../component/PlanetCard.jsx";

const StarWarsHome = () => {
    const {store,actions} = useContext(Context);

    return (
    <>
        <div className="container">
            <h1>People</h1>
            <div className="row">
            {store.people.map(person => {
                return (
                <PeopleCard key={person.uid} name={person.name} />
                );
                })}
            </div>
            <h1>Vehicles</h1>
            <div className="row">
            {store.vehicles.map(vehicle => {
                return (
                <VehicleCard key={vehicle.uid} name={vehicle.name} />
                );
                })}
            </div>
            <h1>Planets</h1>
            <div className="row">
            {store.planets.map(planet => {
                return (
                <PlanetCard key={planet.uid} name={planet.name} />
                );
                })}
            </div>
        </div>
    </>

    );

}

export default StarWarsHome;