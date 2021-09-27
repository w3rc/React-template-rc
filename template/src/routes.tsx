import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/rtk';
import { setLoggedIn, userData } from 'store/slices/userSlice';
import SplashScreen from 'pages/splash';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';


const Routes = () => {
    const location = useLocation();

    const authState = useAppSelector(userData);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setTimeout(() => {
            const token = localStorage.getItem('token');

            if (!token) {
                console.log("no token");
                dispatch(setLoggedIn(false));
            }
            if (typeof token === 'string') {
                const decoded: any = jwtDecode(token);
                const currentEpoch = new Date().getTime() / 1000;
                if (decoded.exp < currentEpoch) {
                    console.log('expired');
                    dispatch(setLoggedIn(false));
                } else {
                    dispatch(setLoggedIn(true));
                }
            }
        }, 2000);
    }, [dispatch]);


    return (
        <>
            {authState.logged_in === 'pending' && <SplashScreen />}

            {/* Landing page route, if any  */}
            {authState.logged_in === true ?
                <Switch location={location} key={Math.random() * 1000}>

                    {/* Logged in routes */}

                </Switch> :
                <Switch location={location} key={Math.random() * 1000}>

                    {/* Guest Routes */}

                </Switch>
            }
        </>
    );
};


export default Routes;