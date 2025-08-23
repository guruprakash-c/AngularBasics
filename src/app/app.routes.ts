import { Routes, VERSION } from '@angular/router';
import { FormsComponent } from './Forms/forms';
import { ReactiveForms } from './Forms/Reactive/reactive-forms/reactive-forms';
import { DynamicForms } from './Forms/dynamic-forms/dynamic-forms';
import { HomeComponent } from './Components/pages/home-component/home-component';
import { DetailsComponent } from './Components/pages/details/details';
import { ErrorComponent } from './Components/pages/error-component/error-component';

const defaultPageTitle = `Angular ${VERSION.full} Basics`;
const routeConfig:Routes = [
    {
        path:'',
        component: HomeComponent,
        title: `Home – ${defaultPageTitle}`
    },
    {
        path:'details/:perma',
        component: DetailsComponent,
        title: `Details Page – ${defaultPageTitle}`
    },
    {
        path:'forms',
        component: FormsComponent,
        title: `Forms – ${defaultPageTitle}`
    },
    {
        path: 'rf',
        component: ReactiveForms,
        title: `Reactive Forms – ${defaultPageTitle}`
    },
    {
        path: 'df',
        component: DynamicForms,
        title: `Dynamic Forms – ${defaultPageTitle}`
    },
    {
        path: 'error',
        component: ErrorComponent,
        title: `Not found – ${defaultPageTitle}`
    },
    {
        path: '**',
        redirectTo: '/error'
    }
];

export default routeConfig;
