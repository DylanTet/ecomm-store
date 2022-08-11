import { Link, Outlet } from "react-router-dom"
import { Fragment, useContext } from "react"
import { ReactComponent as CrwnLogo } from '../../../logo.svg'
import { UserContext } from '../../../context/user.context'
import './navigation.styles.scss'

const Navigation = () => {

    const { currentUser } = useContext(UserContext)

    return(
        <Fragment>
            <div className="navigation">
                <Link to='/' className="logo-container" >
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='#'>
                        SHOP
                    </Link>

                    {currentUser ? (
                        <span className="nav-link">SIGN OUT</span>
                        ) : (
                            <Link className="nav-link" to='/sign-in'>
                                SIGN IN
                            </Link>
                        )}
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation