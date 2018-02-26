import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import { HomPagComponent } from '../hom-pag/hom-pag.component';

export const routes : Routes = [
    {
 path: 'hom',

children: [ 
  {
     path: 'jav',
     component: HomPagComponent
  }
  
]
}  ];


@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class HomPagModule{ }
