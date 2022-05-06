import React from "react";
import { Col, Container, Figure, Image, Row } from "react-bootstrap";
import { HomeItemGalery } from "./HomeItemGalery";

export const HomeItem = () => {
  return (
    <div
      className="m-3"
      style={{
        background: "#EDEDED",
      }}
    >
      <div className="row align-items-center">
        <div className="col-4 d-flex align-items-center">
          <Figure>
            <Figure.Image
              className="rounded-circle"
              width={130}
              height={130}
              alt="130x130"
              src="https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg?w=2000"
            />
          </Figure>
            <hr
            style={{
                width: '2px',
                height: "200px",
                margin: "30px"
            }}
            />
            <h3>Nombre</h3>
        </div>
        
        <h1 className="col-2 mx-3">Titulo</h1>

        <Figure className="col-3 m-3">
            <Figure.Image
              src="https://mdbootstrap.com/img/new/standard/city/041.webp"
            />
        </Figure>

        <div className="col-2">
            <HomeItemGalery />
        </div>
      </div>
    </div>
  );
};
