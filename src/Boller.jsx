import { useState } from "react"
export default function Boller(){
    const [bolls , setbolls] =useState(0)

    const bolling = () => {
       const updatedboll = bolls+1
        setbolls(updatedboll)
    }

    return (
        <div>
            <h1>Boll Count</h1>
            <p>Bolls : {bolls}</p>
            {
                bolls >= 6 && <p>Your Bolls over</p>
            }
            <button onClick={bolling}>Bolling</button>
        </div>
    )
}