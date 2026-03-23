import MainPage from "./pages/MainPage";
import Auth from "./pages/Auth";
import ErrorPage from "./pages/Error";
import LimsPage from "./pages/LimsPage";
import BasesPage from "./pages/BasesPage";
import PredictPage from "./pages/PredictPage";
import {
  MAIN_ROUTE,
  LOGIN_ROUTE,
//   REGISTRATION_ROUTE,
  BASES_ROUTE,
  LIMS_ROUTE,
  PRED_ROUTE,
  ERROR_ROUTE,
} from "./consts";



export const authRoutes = [
  {
    path: BASES_ROUTE,
    Component: BasesPage,
  },
  {
    path: PRED_ROUTE,
    Component: PredictPage,
  },
  {
    path: LIMS_ROUTE,
    Component: LimsPage,
  },
];

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
//   { пока без регистрации
//     path: REGISTRATION_ROUTE,
//     Component: Auth,
//   },
  {
    path: ERROR_ROUTE,
    Component: ErrorPage,
  },
];
