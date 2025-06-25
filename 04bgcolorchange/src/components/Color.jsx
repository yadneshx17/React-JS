import React from "react";

function Button(props) {
    return (
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

            <button type="button" className="w-48 h-12 text-black rounded" >
                {props.buttonname}
            </button>    

        </div>
    );
}
export default Button   