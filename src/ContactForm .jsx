import { useState } from "react";



const ContactForm = () => {
    const [inputValues, setInputValues] = useState({
        nombre: '',
        email: '',
        comentario: ''
    });
    const [errors, setErrors] = useState({});

    const onInputChange = (event) => {
        const { id, value } = event.target;
        setInputValues({
            ...inputValues,
            [id]: value
        });
    };

    const validate = () => {
        let errors = {};

        if (!inputValues.nombre.trim()) {
            errors.nombre = 'Campo obligatorio';
        }

        if (!inputValues.email.trim()) {
            errors.email = 'Campo obligatorio';
        } else if (!/\S+@\S+\.\S+/.test(inputValues.email)) {
            errors.email = 'Email inválido';
        }

        if (!inputValues.comentario.trim()) {
            errors.comentario = 'Campo obligatorio';
        }


        return errors;
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            console.log(inputValues);
            // Aquí puedes agregar la lógica para enviar el formulario
        } else {
            setErrors(errors);
        }
    };
    const handleFocus = (e) => {
        const { id } = e.target;
        if (errors[id]) {
          // Si hay un error en el campo, limpiamos el valor y reseteamos el error
          setInputValues({ ...inputValues, [id]: '' });
          setErrors({ ...errors, [id]: '' });
        }
      };
    return (
        <div className='formulario' id='formulario'>
            <h2 className='titulo'>Contacto</h2>
            <form onSubmit={onSubmit} className='form'>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id='nombre' value={inputValues.nombre} onChange={onInputChange} style={{ backgroundColor: errors.nombre ? 'pink' : '' }} onFocus={handleFocus} />
                {errors.nombre && <p className="error" style={{ color: 'red', fontSize: '10px', marginLeft: '10px' }} >{errors.nombre}</p>}

                <label htmlFor="email">Email</label>
                <input type="email" id='email' value={inputValues.email} onChange={onInputChange} style={{ backgroundColor: errors.nombre ? 'pink' : '' }} onFocus={handleFocus} />
                {errors.email && <p className="error" style={{ color: 'red', fontSize: '10px', marginLeft: '10px' }} >{errors.email}</p>}

                <label htmlFor="comentario">Comentario</label>
                <textarea id="comentario" rows={5} value={inputValues.comentario} onChange={onInputChange} style={{ backgroundColor: errors.nombre ? 'pink' : '' }} onFocus={handleFocus}></textarea>
                {errors.comentario && <p className="error" style={{ color: 'red', fontSize: '10px', marginLeft: '10px' }} >{errors.comentario}</p>}

                <button type='submit' className='enviar' id='enviar'>Enviar</button>
            </form>
        </div>
    );
};
export default ContactForm