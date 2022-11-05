import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
    return (
        <div className="sweet-loading" >
            <ClipLoader
                color="green"
                loading="true"
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
                
            />
        </div >
    )
}

export default Spinner