import React from "react";

const Form = ({ name }) => {

    const hobbies = ["hüppamine", "jooksmine", "mängimine"];
    return (
        <div className="container">
        <h2>NIMI: {name}</h2>
        <h3>HOBID:</h3>
        <ol>
        {hobbies.map(element => (
            <li>{element}</li>
        ))}
        </ol>
        <form className="form">
            <label for="email">Email: </label>
            <input type="email" id="email" name="email"></input>
            <br/>
            <label for="text-message">Saada sõnum: </label>
            <input type="text" id="text-message" name="text-message"></input>
            <br/>
            <input type="submit" value ="Saada" className="btn"/>
        </form>
        </div>
    );
};


export default Form;