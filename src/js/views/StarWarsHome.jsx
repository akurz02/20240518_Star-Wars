import React, { useContext } from "react";
import { Context } from "../store/appContext";

import PeopleCard from "../component/PeopleCard.jsx";
import VehicleCard from "../component/VehicleCard.jsx";
import PlanetCard from "../component/PlanetCard.jsx";

const StarWarsHome = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="row mt-5">
        <div className="col-1"></div>
        <div className="col-10">
          <h1>Characters</h1>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row mt-5">
        <div className="col-1"></div>
        <div className="col-10 d-flex overflow-auto justify-content-evenly">
          {store.people.map((person) => {
            return (
              <PeopleCard
                key={person.uid}
                uid={person.uid}
                name={person.name}
                url={person.url}
              />
            );
          })}
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row mt-5">
        <div className="col-1"></div>
        <div className="col-10">
          <h1>Vehicle</h1>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row mt-5">
        <div className="col-1"></div>
        <div className="col-10 d-flex overflow-auto">
          {store.vehicles.map((vehicle) => {
            return (
              <VehicleCard
                key={vehicle.uid}
                uid={vehicle.uid}
                url={vehicle.url}
                vehicle={vehicle.name}
              />
            );
          })}
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row mt-5">
        <div className="col-1"></div>
        <div className="col-10">
          <h1>Planets</h1>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row mt-5">
        <div className="col-1"></div>
        <div className="col-10 d-flex overflow-auto">
          {store.planets.map((planet) => {
            return (
              <PlanetCard
                key={planet.uid}
                uid={planet.uid}
                url={planet.url}
                planet={planet.name}
              />
            );
          })}
        </div>
        <div className="col-1"></div>
      </div>
    </>
  );
};

export default StarWarsHome;
