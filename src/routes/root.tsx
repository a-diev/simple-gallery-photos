import { createBrowserRouter } from "react-router-dom";
import Index from '@/pages/index.page'

const root = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
    },
]);

export default root
