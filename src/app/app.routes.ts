import { Routes } from '@angular/router';
import { App } from './app';
import { FormsComponent } from './Forms/forms';
import { ReactiveForms } from './Forms/Reactive/reactive-forms/reactive-forms';

export const routes: Routes = [
    {
        path:'',
        component: App
    },
    {
        path:'forms',
        component: FormsComponent,
    },
    {
        path: 'rf',
        component: ReactiveForms
    }
];
