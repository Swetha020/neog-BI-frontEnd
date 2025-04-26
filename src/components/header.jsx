import meetupLogo from "../assets/meetup-1.svg"

const Header = () =>{
return <header>
       <nav className="navbar navbar-expand-lg w-100">
        <div className="container">
        <div className="navbar-brand" >
         <img src={meetupLogo} alt="meetupLogo" width="150" />
        </div>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="🔍 Search by title and tags" aria-label="Search" />
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        </form>
      </div>
      </nav>
    </header>
}

export default Header