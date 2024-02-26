import { HarryPageComponent } from './harry-page/harry-page.component';
import { BhattPageComponent } from './bhatt-page/bhatt-page.component';
import { SnippetPageComponent } from './snippet-page/snippet-page.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { Routes } from '@angular/router';
import { SubscribedContentComponent } from './subscribed-content/subscribed-content.component';

export const routes: Routes = [
    {path:'',component:HomeScreenComponent},
    {path:'snippet-page', component:SnippetPageComponent},
    {path:'bhatt-page',component:BhattPageComponent},
    {path:'harry-page',component:HarryPageComponent},
    {path:'subscriptions',component:SubscribedContentComponent},
];
