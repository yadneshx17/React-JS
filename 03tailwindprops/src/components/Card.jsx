import React from 'react'


// function Card(props) {
  // console.log(props.username);
  // console.log("Props:", props);
  // console.log(prop.username);
  // console.log(prop.someObject.age);
// function Card({username, someObject}) { // destructure
function Card({username, btnText="Visit Me"}) { // destructure
  
    return (
      <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 space-y-4">
      <img
        className="w-full h-48 object-cover"
        src="https://images.unsplash.com/photo-1750126833705-ba98013f16f3?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Card image"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{username}</h2>
        {/* <h2 className="text-xl font-semibold text-gray-800">{someObject.age}</h2> */}
        {/* <h2 className="text-xl font-semibold text-gray-800">{prop.someObject.username}</h2> */}
        <p className="text-gray-600 text-sm mt-2">
          Just a normal guy with a passion for coding and clean UI.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card