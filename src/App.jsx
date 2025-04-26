import Header from "./components/header"
import 'bootstrap/dist/css/bootstrap.min.css'
import useFetch from "./useFetch"
import { useState } from "react"
export default function App() {

  const {data,loading,error} = useFetch("http://localhost:3000/events")
 console.log(data)
  
  const [filteredData, setFilteredData] = useState(data);
  

  const selectHandler = (e) => {
    console.log(data)
    const value = e.target.value;
    const filtered = 
      value === "Online" ? data.filter((event) => event.isOnlineEvent)
      : value === "Offline" ? data.filter((event) => !event.isOnlineEvent)
      : data
    ;
    setFilteredData(filtered)
  };


  return (
    <div className="bg-body-tertiary">
    <Header/>
    <main className="container">
    <hr />
      <div className="d-flex justify-content-between">
      <h1>Meetup Events</h1>
      <div>
      <select className = "form-select w-auto " onChange={selectHandler}>
          <option value="" selected disabled>Select Event Type</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
          <option value="Both">Both</option>
       </select>
       </div>
       </div>
       <div className="row">
          {filteredData?.map((event) => <div className="col-md-4">
            <div className="card m-3 border-0">
            <img src={event.imgUrl} alt={event.title} className="rounded"/>
            <div className="card-img-overlay">
              <span className="bg-light p-2 rounded">{event.isOnlineEvent?"Online Event":"Offline Event"}</span>
            </div>
            <div className="bg-body-tertiary ">
              <p className="text-warning-emphasis mb-0">{event.startDate} • {event.startTime} IST</p>
              <p className="fs-4 fw-bold">{event.title}</p>
            </div>
            </div>
          </div> )}
       </div>
    </main>
    </div>
  )
}


