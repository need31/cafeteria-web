import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Offers } from './pages/offers/offers';
import { Store } from './pages/store/store';
import { Contact } from './pages/contact/contact';
import { Dashboard } from './pages/dashboard/dashboard';
import { MyAccount } from './pages/my-account/my-account';
import { Login } from './pages/login/login';
import { NotFound } from './pages/not-found/not-found';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [

    {
        path: "",
        component: Home
    },

    {
        path: "home",
        component: Home
    },

    {
        path:"productos",
        component: Products
    },

    {
        path: 'oferta',
        component: Offers
    },

    {
        path: 'tienda',
        component: Store
    },

    {
        path: 'contacto',
        component: Contact
    },

    {
        path: 'mi-cuenta',
        component: MyAccount
    },

    {
        path: 'login',
        component: Login
    },

    {
        path: 'dashboard',
        component: Dashboard,
        canActivate: [AuthGuard]
    },

    {
        path: '**',
        component: NotFound
    },
];
