import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { AuthService } from './auth.service';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    CoreRoutingModule
  ],
  declarations: [],
  providers: [AuthGuard]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [AuthService]
    };
  }
}
