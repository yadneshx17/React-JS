import React from "react";

function Button({buttonname, style, onClick}) {
    return (
        <div className="flex flex-wrap m-auto justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button type="button" style={style} onClick={onClick} className="w-48 h-12 text-black rounded">
                {buttonname}
            </button>    
        </div>
    );
}
export default Button   