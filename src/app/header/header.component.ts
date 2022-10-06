import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Output() featureSelected = new EventEmitter();

    onSelected(feature: string) {
        if(feature == 'recipes') {
            this.featureSelected.emit('recipes');
        } else {
            this.featureSelected.emit('shopping-list');
        }
    }
}
