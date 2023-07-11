
// ** Public Pages **
import NotFoundPage from "../pages/404/NotFoundPage";
// import AboutPage from "../pages/about-faqs/AboutPage";
import HomePage from "../pages/home/HomePage";


export const PUBLIC_ROUTES = [
    { index:true, 
      element:<HomePage/>
    },
    { path:`*`,
      element:<NotFoundPage/>
    },
    { path: "home",
      element: <HomePage/>,
    },
    // { path:'about',
    //   element: <AboutPage/>,
    // },
    // { path: 'faqs',
    //   element: <AboutPage/>
    // },
    ]
