import Home from "../pages/Home/Home";
import Variables from "../pages/Variables/Variables";
import VariablesId from "../pages/VariablesId/VariablesId";

export const routes = [
    { path: '/', component: Home },
    { path: '/variables', component: Variables },
    { path: '/variables/:id', component: VariablesId }
]