// Modules
import React, {useEffect , lazy , Suspense} from 'react';
import { Routes , Route } from 'react-router-dom';

// Styles
import './Styles/style.scss';

// Redux
import { useSelector , useDispatch } from 'react-redux';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

// Components 
import Header from './Components/header/header.component';
import ProfileCard from './Components/profile/profile.component';
import Spinner from './Components/spinner/spinner.component';
import ErrorBoundary from './Components/error-boundary/error-boundary.component';

// Pages 
const Homepage = lazy(() => import('./pages/homepage.page'))
const ShopPage = lazy(() => import('./pages/shop.page'));
const UserPage = lazy(() => import('./pages/login.page'));
const CheckoutPage = lazy(() => import('./pages/checkout.page'));
const PaymentPage = lazy(() => import('./pages/payment.page'));
const BrokenPage = lazy(() => import('./pages/broken.page'));


const App = () => {

  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()
  useEffect(() => {
    if(!currentUser) {
      dispatch(checkUserSession());
    }
    if(currentUser && dispatch(checkUserSession()) === null) {
      dispatch(checkUserSession); 
    }
  }, [dispatch])

   

  return (
    <div className="App">  
      <Header />
      <ErrorBoundary >
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route index path="/" element={<Homepage />} />
            <Route path='checkout' element={<CheckoutPage />} />
            <Route path='user' element={currentUser ? <ProfileCard />  : <UserPage />} />          
            <Route path='shop/*' element={<ShopPage />} />
            <Route path='payment' element={<PaymentPage />} />
            <Route path='404' element={<BrokenPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>  
  );
}


export default App;