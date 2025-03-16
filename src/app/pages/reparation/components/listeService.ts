import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DragDropModule, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Product, ProductService } from '../../service/product.service';

@Component({
    standalone: true,
    selector: 'app-list-service',
    imports: [CommonModule, TableModule, ButtonModule, RippleModule, DragDropModule],
    template: `<div class="card !mb-8">
        <div class="font-semibold text-xl mb-4">Services</div>

        <div cdkDropList #serviceList="cdkDropList" [cdkDropListData]="products"
             [cdkDropListConnectedTo]="['repairList']"
             class="p-4 bg-gray-50 rounded"
             (cdkDropListDropped)="drop($event)">

            <p-table [value]="products" [paginator]="true" [rows]="5" responsiveLayout="scroll">
                <ng-template #header>
                    <tr>
                        <th>Image</th>
                        <th pSortableColumn="name">Name <p-sortIcon field="name"></p-sortIcon></th>
                        <th pSortableColumn="price">Price <p-sortIcon field="price"></p-sortIcon></th>
                        <th>Action</th>
                    </tr>
                </ng-template>
                <ng-template #body let-product>
                    <tr cdkDrag [cdkDragData]="product">
                        <td style="width: 15%;">
                            <img src="https://primefaces.org/cdn/primevue/images/product/{{ product.image }}" class="shadow-lg" width="50" />
                        </td>
                        <td style="width: 35%;">{{ product.name }}</td>
                        <td style="width: 35%;">{{ product.price | currency: 'USD' }}</td>
                        <td style="width: 15%;">
                            <button pButton pRipple type="button" icon="pi pi-search" class="p-button p-button-text p-button-icon-only"></button>
                        </td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
    </div>`,
    providers: [ProductService]
})
export class ListeService {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((data) => {
            this.products = data;
            console.log("Produits chargés :", this.products);
        });
    }

    drop(event: CdkDragDrop<Product[]>) {
        console.log("Événement drop :", event);
        if (event.previousContainer !== event.container) {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
            console.log("Mise à jour des services :", this.products);
        }
    }
}
