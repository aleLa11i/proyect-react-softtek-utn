import { Figure, Button } from "react-bootstrap";

export const ProfileData = () => {
  return (
    <div className="row m-5">
      
      <Figure
        className="col-3"
      >
        <Figure.Image
          className="rounded-circle"
          width={300}
          height={300}
          alt="150x150"
          src="https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg?w=2000"
        />
      </Figure>

      <div className="d-flex flex-column col-6 mx-5">
        <h1>Nombre</h1>
        <h4>Username</h4>
        <p>
          Descripcion......
        </p>
      </div>

    </div>
  )
}
