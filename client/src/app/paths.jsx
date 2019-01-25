import Loader from "../components/loader";
import Loadable from "react-loadable";
import * as ROUTES from "../constants/routes";

/**
 * @description
 * Code Splitting via React Loodable
 * helps us minimize the bundle size.
 * @TODO This will be replaced with the Lazy, Suspense loading in React 16.6
 */

const paths = [
  {
    path: ROUTES.LANDING,
    component: Loadable({
      loader: () => import("../pages/landing"),
      loading: Loader
    })
  },
  {
    path: ROUTES.SIGN_IN,
    component: Loadable({
      loader: () => import("../pages/signIn"),
      loading: Loader
    })
  },
  {
    path: ROUTES.DASHBOARD,
    component: Loadable({
      loader: () => import("../pages/dashboard"),
      loading: Loader
    })
  },
  {
    path: ROUTES.SIGN_OUT,
    component: Loadable({
      loader: () => import("../pages/signOut"),
      loading: Loader
    })
  },
  {
    path: ROUTES.SIGN_UP,
    component: Loadable({
      loader: () => import("../pages/signUp"),
      loading: Loader
    })
  },
  {
    path: ROUTES.CONTEST,
    component: Loadable({
      loader: () => import("../pages/contest"),
      loading: Loader
    })
  }
];

export default paths;
