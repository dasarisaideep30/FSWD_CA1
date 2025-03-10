import React from "react"
import ServiceCard from "./components/ServiceCard"


function App() {
  // const ServiceDetails = [
  //   {title:"web development",description:"My role is to fully develop the web from frontend to backend"},
  //   {title:"frontend development",description:"My role is to develop frontend of a particular website"}
  // ]
  return (
    <div  className='border border-gray-thin-300 w-60 justify-center items-center '>
      <ServiceCard/>
      <h1>title:"web development",description:"My role is to fully develop the web from frontend to backend"</h1>
      <h2>title:"frontend development",description:"My role is to develop frontend of a particular website"</h2>
    </div>
  )
}

export default App;
