import Header from "./components/header"
import 'bootstrap/dist/css/bootstrap.min.css'
import useFetch from "./useFetch"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function App() {
  
  const [filteredData, setFilteredData] = useState([]);
  const {data,loading,error} = useFetch("https://neog-bi-backend-swethas-projects-2c80ee43.vercel.app/events")


  useEffect(()=>{
    if(data){
      setFilteredData(data)
    }
  },[data])

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


  const searchHandler = (e) =>{
    e.preventDefault()
    const value = e.target.value
    if(value!=""){
    const filtered = data.filter((event)=>event.title.toUpperCase() === value.toUpperCase() || event.eventTags.includes(value.charAt(0).toUpperCase()+value.slice(1)))
    if(filtered.length!=0){
    setFilteredData(filtered)
    }else{
      setFilteredData("")
    }}else{
      setFilteredData(data)
    }
  }

  return (
    <div className="bg-body-tertiary">
    <Header/>
    <main className="container">
      
      <div className="d-flex justify-content-between">
      <h1>Meetup Events</h1>
      <div>
      <form className="d-flex" role="search" >
          <input className="form-control me-2" type="search" placeholder="🔍 Search by title and tags" aria-label="Search" onChange={searchHandler}/>
      </form>
      <br />
      <select className = "form-select w-auto " onChange={selectHandler}>
          <option value="" selected disabled>Select Event Type</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
          <option value="Both">Both</option>
       </select>
       </div>
       </div>
       {loading && <div className="container text-center">
            <h1 className="display-4">Loading...</h1>
            </div>}
       <div className="row">
          {filteredData? filteredData.map((event) => <div className="col-md-4">
            <Link to={`/events/${event._id}`} className="text-decoration-none">
            <div className="card m-3 border-0">
            <img src={event.imgUrl} alt={event.title} className="rounded" height="250"/>
            <div className="card-img-overlay">
              <span className="bg-light p-2 rounded">{event.isOnlineEvent?"Online Event":"Offline Event"}</span>
            </div>
            <div className="bg-body-tertiary ">
              <p className="text-warning-emphasis mb-0">{event.startDate} • {event.startTime} IST</p>
              <p className="fs-4 fw-bold">{event.title}</p>
            </div>
            </div>
            </Link>
          </div> ): <div className="container text-center">
            <h1 className="display-4">No Relevant Events Found </h1>
            <p className="fw-light">(Please Clear your search to view all events.)</p>
            </div>
 }
       </div>
    </main>
    </div>
  )
}


