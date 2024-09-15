import React from "react";

/*const Name = (props) => {
    console.log({props});
    
    // const title = props.title;
    const { title } = props; //extractid title'i objekti seest

    return <h1>Hello {title}</h1>;
};*/

const Name = ({title = "World"}) => {
    return <h2>Hello {title}</h2>;
};

export default Name;