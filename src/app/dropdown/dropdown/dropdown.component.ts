import { Component, Input, Output, OnChanges, EventEmitter } from "@angular/core";

//import { Category } from "../shared/models/category.model";

@Component({
    selector: "dropdown",
    templateUrl: "./dropdown.component.html",
    styleUrls: ["./dropdown.component.scss"]
})

export class DropdownComponent/*<T extends Category>*/ {

    @Input() enabledOptions: string[] = [];
    @Input() disabledOptions: string[] = [];
    @Input() currentlySelected: number;
    @Input() reverse: boolean = false;
    @Input() openDefault: boolean = false;
    @Input() width: string = "20%";

    @Output() selectionChanged: EventEmitter<number> = new EventEmitter<number>();

    private open: boolean = false;
    private visibleIndex: number = 0;
    private addOptionTimeout: number;
    private initialized: boolean = false;
    private optionAmount: number;

    constructor() { }

    ngOnChanges() {
        this.optionAmount = this.enabledOptions.length + this.disabledOptions.length;

        //default settings
        if (!this.initialized) {
            this.initialized = true;
            this.open = this.openDefault;
            this.currentlySelected = Math.max(0, this.currentlySelected);
            this.currentlySelected = Math.min(this.enabledOptions.length, this.currentlySelected);
            this.visibleIndex = this.open ? this.enabledOptions.length + this.disabledOptions.length : 0;
            if (this.open) {
                this.dropdownAction();
            }
        }
    }

    private toggleDropdown(): void {
        this.open = !this.open;
    }

    private dropdownAction(): void {
        clearTimeout(this.addOptionTimeout);
        this.visibleIndex += this.open ? +1 : -1;
        this.visibleIndex = Math.max(0, this.visibleIndex);
        this.visibleIndex = Math.min(this.optionAmount, this.visibleIndex);
        if (this.visibleIndex > 0 && this.visibleIndex < this.optionAmount) {
            this.addOptionTimeout = setTimeout(() => this.dropdownAction(), 50);
        }
    }

    private isHidden(index: number, startvalue: number): boolean {
        return this.reverse ? this.optionAmount - 1 - startvalue - index >= this.visibleIndex : index + startvalue >= this.visibleIndex;
    }

    //this.selectionChanged.emit(new Triple());
   
}