import { useLocation } from 'react-router-dom';

import Failed from '../Components/payment/failed.component';
import Success from '../Components/payment/success.component';

const PaymentPage = () => {
   const location = useLocation();
   const search = location.search.split("&");
   const queries = search.map(querie => querie.split('='));
   const status = queries[1][1]
   const authority = queries[0][1]

   return (
      <div>
      {
         status === 'OK'
         ?
         <Success authority={authority} />
         :
         <Failed authority={authority} />
      }
      </div>
   )
};

export default PaymentPage;