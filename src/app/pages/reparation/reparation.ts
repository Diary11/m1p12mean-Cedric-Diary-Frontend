import { Component } from '@angular/core';
import { ListeService } from './components/listeService';
import { InformationReparation } from './components/informationReparation';

@Component({
    selector: 'app-reparation',
    imports: [ListeService,InformationReparation],
    template: `
        <div class="grid grid-cols-12 gap-8">
            <div class="col-span-12 xl:col-span-6">
                <app-list-service />
            </div>
            <div class="col-span-12 xl:col-span-6">
                <app-information-reparation />
            </div>
            
        </div>
    `
})
export class Reparation {}
