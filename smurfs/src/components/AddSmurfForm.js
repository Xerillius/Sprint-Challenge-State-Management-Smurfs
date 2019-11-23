import React, { useState } from 'react';
import axios from 'axios';
import { getSmurfs } from '../actions';

const AddSmurfForm = props => {
    const [input, setInput] = useState({
                                name: "",
                                age: "",
                                height: ""
                            });
    
    const handleSubmit = e => {
        e.preventDefault();
        addSmurf();
        setInput({
            name: "",
            age: "",
            height: ""
        })
    }

    const addSmurf = e => {
        axios
            .post('http://localhost:3333/smurfs', JSON.parse(JSON.stringify(input)))
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleChange = e => {
        setInput({...input, [e.target.name]: e.target.value});
    }

    return (
        <form onSubmit={handleSubmit}>
            <span>Name: </span>
            <input
                onChange={handleChange}
                type="text"
                name="name"
                value={input.name}
            />
            <span> Age: </span>
            <input
                onChange={handleChange}
                type="text"
                name="age"
                value={input.age}
            />
            <span> Height: </span>
            <input
                onChange={handleChange}
                type="text"
                name="height"
                value={input.height}
            />
            <button type="submit">Add Smurf</button>
        </form>
    );
}

export default AddSmurfForm;