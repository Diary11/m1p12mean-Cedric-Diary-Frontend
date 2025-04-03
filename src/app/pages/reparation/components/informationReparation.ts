import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
    standalone: true,
    selector: 'app-information-reparation',
    imports: [CommonModule, DragDropModule],
    template: `<div class="card !mb-8 p-4 border border-gray-300 rounded">
        <div class="font-semibold text-xl mb-4">Réparation</div>
        
        <div cdkDropList #repairList="cdkDropList" [cdkDropListData]="selectedServices"
             [cdkDropListConnectedTo]="['serviceList']"
             class="p-4 bg-green-100 rounded min-h-[150px]"
             (cdkDropListDropped)="drop($event)">

            <!-- Affichage des services déplacés -->
            <div *ngFor="let item of selectedServices; let i = index" class="p-2 bg-white rounded mb-2 flex items-center justify-between">
                <div class="flex items-center">
                    <img src="https://primefaces.org/cdn/primevue/images/product/{{ item.image }}" width="40" class="mr-2"/>
                    <span>{{ item.name }}</span>
                </div>
                <button class="p-1 text-red-500 hover:text-red-700" (click)="remove(i)">
                    ❌
                </button>
            </div>

            <!-- Message si aucun service déplacé -->
            <div *ngIf="selectedServices.length === 0" class="text-gray-500">Glissez des services ici</div>

        </div>
    </div>`
})
export class InformationReparation {
    selectedServices: any[] = [];

    drop(event: CdkDragDrop<any>) {
        console.log("Élément déplacé :", event);
        if (event.previousContainer !== event.container) {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
            console.log("Nouvelle liste de services :", this.selectedServices);
        }
    }

    remove(index: number) {
        this.selectedServices.splice(index, 1);
        console.log("Service supprimé. Liste mise à jour :", this.selectedServices);
    }
}
