import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PersonDetails = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  console.log(id)
  useEffect(() => {
    actions.getPersonDetails(id);
  }, []);

  return (
    <div className="">
      {store.personDetails ?
        <div className="container-fluid d-flex align-items-center justify-content-center">
          {store.personDetails && (
            <>
              <div className="mb-3" style={{ width: "80%" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h1 className="card-title">{store.personDetails.properties.name}</h1>
                      <p className="card-text fs-4">Birth Year: {store.personDetails.properties.birth_year}</p>
                      <p className="card-text fs-4">Gender: {store.personDetails.properties.gender}</p>
                      <p className="card-text fs-4">Height: {store.personDetails.properties.height}</p>
                      <p className="card-text fs-4">Skin Color: {store.personDetails.properties.skin_color}</p>
                      <p className="card-text fs-4">Hair Color: {store.personDetails.properties.hair_color}</p>
                      <p className="card-text fs-4">Mass: {store.personDetails.properties.mass}</p>
                      <p className="card-text fs-4">Eye Color: {store.personDetails.properties.eye_color}</p>
                    </div>
                  </div>
                </div>
              </div>


            </>
          )}
        </div>
        : <img src="https://media1.tenor.com/m/fc47Cmt6yn4AAAAC/star-wars-disney.gif">
        </img>}

        <div className="container-fluid d-flex align-items-center justify-content-center">
            <Link to="/">
                <span className="btn btn-success btn-lg" href="#" role="button">
                Back home
                </span>
            </Link>
        </div>
    </div>
  );
};

export default PersonDetails;

PersonDetails.propTypes = {
  match: PropTypes.object,
};
