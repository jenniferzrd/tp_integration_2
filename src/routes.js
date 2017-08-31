/*jshint esversion: 6*/

import Home from "./components/pages/Home.vue";
import About from "./components/pages/About.vue";
import Contact from "./components/pages/Contact.vue";
import Admin from "./components/pages/Admin.vue";


export const routes = [
    {
        path: '/', label: "Accueil", name: "home",
        component: Home
    },
    {
        path: '/about', label: "About", name: "about",
        component: About
    },
    {
        path: "/contact", label: "Contact", name:"contact",
        component: Contact
    },
    {
        path: "/admin", label: "Admin", name:"admin",
        component: Admin
    }
];
