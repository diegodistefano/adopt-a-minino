import { useForm } from "react-hook-form";
import { useRef, useState, render } from "react";
import "./Form.css";
import PenguinButton from "../PenguinButton/PenguinButton";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const renderCount = useRef(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    navigate("/");
  };

  const onValid = (data) => {
    console.log(data);
    openPopup();
  };

  const queryParams = new URLSearchParams(location.search);
  const breed = queryParams.get("breed") || "a Minino"; 
  const image = queryParams.get("image");


  return (
    <div>
      {!isPopupOpen ? (
        <>
          <div className="form-container">
            <h1>Adopt {breed}</h1>
            {image && <img src={image} alt={breed} className="adopt-image" />} {/* Mostrar la imagen */}
            <form onSubmit={handleSubmit(onValid)}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                {...register("name", { required: "Name is required" })}
                placeholder="Name"
              />
              {errors.name && (
                <p className="error-message">{errors.name.message}</p>
              )}

              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d{9}$/,
                    message: "Invalid phone number",
                  },
                })}
                placeholder="Phone"
              />
              {errors.phone && (
                <p className="error-message">{errors.phone.message}</p>
              )}

              <label htmlFor="email">Email</label>
              <input
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email",
                  },
                })}
                placeholder="Email"
              />
              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}

              <button type="submit" className="button-primary btn">
                ENVIAR
              </button>
            </form>
          </div>
        </>
      ) : (
        ""
      )}

      <div>
        {isPopupOpen && (
          <div className="ventana-popup">
            <div className="contenido-popup">
              <h3>¡Gracias por adoptar un gatito!</h3>
              <h4>Nos pondremos en contacto contigo lo antes posible.</h4>
              <p>
                <img src="./../favicon.png" />
              </p>
              <PenguinButton onClick={closePopup} text="Cerrar"></PenguinButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
