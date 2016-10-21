import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Project } from '../pages/project/project';
import { Iteration } from '../pages/iteration/iteration';
import { NewIteration } from '../pages/new-iteration/new-iteration';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Project,
    Iteration,
    NewIteration
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Project,
    Iteration,
    NewIteration
  ],
  providers: []
})
export class AppModule {}
