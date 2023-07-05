import React, { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../App";

function Component3(){
    const user = useContext(UserContext);
    return (
        <>
        <h2>Component 3</h2>
        <h4>Hello again {user}</h4>
        </>
    )
}
export default Component3;