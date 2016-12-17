import { Route } from '@angular/router';
import { AddItemComponent, LogInComponent, MapComponent, ObjectComponent, GearComponent, HomepageComponent, RegisterComponent, SearchComponent, ItemDetailComponent } from './pages';

export const routerConfig: Route[] = [

    {
        path: 'homepage',
        component: HomepageComponent
    },
    {
        path: 'object',
        component: ObjectComponent
    },
    {
        path: 'gear',
        component: GearComponent
    },
    {
        path: 'map',
        component: MapComponent
    },
    {
        path: 'search',
        children: [
            {
                path: ':id',
                component: ItemDetailComponent
            },
            {
                path: '',
                component: SearchComponent
            }
        ]
    },
    {
        path: 'addItem',
        component: AddItemComponent
    },
    {
        path: 'logIn',
        component: LogInComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home'
    }

]