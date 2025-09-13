import { Routes, VERSION } from '@angular/router';
import { FormsComponent } from './Forms/forms';
import { ReactiveForms } from './Forms/Reactive/reactive-forms/reactive-forms';
import { DynamicForms } from './Forms/dynamic-forms/dynamic-forms';
import { HomeComponent } from './Components/pages/home-component/home-component';
import { DetailsComponent } from './Components/pages/details/details';
import { ErrorComponent } from './Components/pages/error-component/error-component';
import { StocksComponent } from './stocks-component/stocks-component';
import { UsersComponent } from './Components/pages/users-component/users-component';
import { SignalPage } from './Components/pages/signal-page/signal-page';
import { BlogpostsPage } from './Components/pages/blogposts/blogposts';
import { TemplateDrivenFormsPages } from './Forms/template-driven-forms/template-driven-forms';
import { TypedFormsComponent } from './Forms/typed-forms/typed-forms';

const defaultPageTitle = `Angular ${VERSION.full} Basics`;
const routeConfig:Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component: HomeComponent,
        title: `Home - ${defaultPageTitle}`
    },
    {
        path:'details/:perma',
        component: DetailsComponent,
        title: `Details Page - ${defaultPageTitle}`,
    },
    {
        path:'forms',
        component: FormsComponent,
        title: `Forms - ${defaultPageTitle}`,
        children: [
            {
                path: 'tf',
                component: TemplateDrivenFormsPages,
                title: `Template Driven Forms - ${defaultPageTitle}`
            },
            {
                path: 'rf',
                component: ReactiveForms,
                title: `Reactive Forms - ${defaultPageTitle}`
            },
            {
                path: 'df',
                component: DynamicForms,
                title: `Dynamic Forms - ${defaultPageTitle}`
            },
            {
                path: 'yf',
                loadComponent: () => import('./Forms/typed-forms/typed-forms').then(y => y.TypedFormsComponent),
                title: `Typed Forms - ${defaultPageTitle}`
            }
        ]
    },
    {
        path:'stocks',
        component: StocksComponent,
        title: `Stocks - ${defaultPageTitle}`
    },
    {
        path: 'users',
        component: UsersComponent,
        title: `Users - ${defaultPageTitle}`
    },
    {
        path: 'signals',
        component: SignalPage,
        title: `Signals - ${defaultPageTitle}`
    },
    {
        path:'blogpost/:category/:postId',
        component: BlogpostsPage
    },
    {
        path:'posts/:category/:postId',
        redirectTo: (route) =>{
            return `/blogpost/${route.params['category']}/${route.params['postId']}`
        }
    },
    {
        path: 'error',
        component: ErrorComponent,
        title: `Not found - ${defaultPageTitle}`
    },
    {
        path: '**',
        redirectTo: '/error'
    }
];

export default routeConfig;
