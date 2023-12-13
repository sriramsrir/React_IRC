import { Link } from "react-router-dom"

const Navbar = () => {
    return (<>
            <div className="nav">
                <input type="checkbox" id="nav-check" />
                <div class="nav-header">
                    <div class="nav-title">
                        Logo
                    </div>
                </div>
                <div className="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div className="nav-links">
                    <Link to='/'>Home</Link>

                    <Link to='/login'>Login</Link>

                    <Link to='/register'>Register</Link>

                </div>
            </div>
    </>)
}

export default Navbar