import { createBrowserRouter } from 'react-router-dom';

import ComingSoon from '@/routes/landing/ComingSoon';
import Error from '@/routes/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ComingSoon />,
    errorElement: <Error />,
  },
]);



export default router;