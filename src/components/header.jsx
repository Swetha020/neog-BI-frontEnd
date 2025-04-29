import meetupLogo from "../assets/meetup-1.svg"
import useFetch from "../useFetch"


// const {data, loading, error} = useFetch("http://localhost:3000")

// const searchHandler = () => {
    
// }

const Header = () =>{
return <header>
       <nav className="navbar navbar-expand-lg w-100">
        <div className="container">
        <div className="navbar-brand" >
         <img src={meetupLogo} alt="meetupLogo" width="150" />
        </div>
        
        {/* <form className="d-flex" role="search" >
          <input className="form-control me-2" type="search" placeholder="🔍 Search by title and tags" aria-label="Search" />
        </form> */}
      </div>
      </nav>
      <hr />
    </header>
}

export default Header