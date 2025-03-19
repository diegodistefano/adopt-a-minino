import { useForm } from "react-hook-form";
import { useRef } from "react";
import "./Form.css";
import PenguinButton from "../PenguinButton/PenguinButton";

function Form() {
    const renderCount = useRef(0);
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className="form-container">
            <h1>Adopt a Minino</h1>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Name"
                />
                {errors.name && <p className="error-message">{errors.name.message}</p>}

                <label htmlFor="phone">Phone</label>
                <input
                    id="phone"
                    {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                            value: /^\d+$/,
                            message: "Invalid phone number",
                        },
                    })}
                    placeholder="Phone"
                />
                {errors.phone && <p className="error-message">{errors.phone.message}</p>}

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
                {errors.email && <p className="error-message">{errors.email.message}</p>}

                <PenguinButton text="ENVIAR" type="submit" className="PenguinButton" />
            </form>
        </div>
    );
}

export default Form;
