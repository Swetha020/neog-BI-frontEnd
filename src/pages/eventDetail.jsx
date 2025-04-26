import { useParams } from "react-router-dom"
import Header from "../components/header"
import useFetch from "../useFetch"
const EventDetail = () =>{
    const eventID = useParams()
    console.log(eventID)
    const {data,loading,error} = useFetch(`http://localhost:3000/events/${eventID.eventId}`)
    console.log(data)
    return(
        <div className=" bg-body-tertiary pb-5">
        <Header/>
        {data&&     
       
        <div className="container">
            <h1>{data.title}</h1>
            <div className="row">
                <div className="col-md-6">
                    <p className="mb-0 fw-light">Hosted By:</p>
                    <p><strong>{data.hostedBy}</strong></p>
                    <img src={data.imgUrl} className="img-fluid my-3" alt={data.title} />
                    <h5>Details:</h5>
                    <p>{data.details}</p>
                    <h5>Additional Information:</h5>
                    <p><strong>Dress Code: </strong>{data.dressCode}</p>
                    <p><strong>Age Restrictions: </strong>{data.ageRestrictions?"18 and above":"-"}</p>
                    <h4 className="mb-3">Event Tags:</h4>
                    {data.eventTags.map((tag)=> <span className="bg-danger text-light rounded p-2 me-3">{tag}</span>)}
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                           {data.startDate} at {data.startTime} to <br /> 
                           {data.endDate} at {data.endTime} 
                            <br />
                            <br />
                            {data.location.split(",")[1]}
                            <br />
                            {data.location.split(",")[0]}
                            <br />
                            <br />
                            {data.fee}
                        </div>
                    </div>
                    <div>
                        <h5>Speakers:</h5>
                        <div className="row">
                        {data.speakers?.map(speaker =><div className="col-md-6">
                            <div className="card">
                                <div className="card-body text-center ">
                                    <img src={speaker.picture} height="90" width="100" alt={speaker.name}  className="rounded-circle"/>
                                    <p className="mb-0"><strong>{speaker.name}</strong></p>
                                    <p>{speaker.designation}</p>
                                </div>
                            </div>
                        </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div> }
        </div>
    )
}
export default EventDetail