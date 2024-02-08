const Navigation=()=>{
    return(
        <div>
      <nav className='navBar'>
       <div className='logo'>
        <img src='/images/brand_logo.png' alt='logo'></img>
        <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>

        <button className="login">Login</button>
       </div>
      </nav>
    </div> 
    )
}

export default Navigation