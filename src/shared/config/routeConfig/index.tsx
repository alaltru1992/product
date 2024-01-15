import React from "react";
import {RouteProps} from 'react-router'
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

export enum AppRoutes {
    ABOUT = 'about',
    MAIN = 'main',
}

export const RoutePathes: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]:{
        path: RoutePathes.main,
        element: <MainPage />

    },
    [AppRoutes.ABOUT]:{
        path: RoutePathes.about,
        element: <AboutPage />
    }
}