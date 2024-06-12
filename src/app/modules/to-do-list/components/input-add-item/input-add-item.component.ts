import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';

// interfaces
import { IListItems } from '../../interface/IListitems.interface';
import { NgClass } from '@angular/common';
//import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-input-add-item',
  standalone: true,
  imports: [ NgClass ],
  templateUrl: './input-add-item.component.html',
  styleUrl: './input-add-item.component.scss',
})
export class InputAddItemComponent {
  #cdr = inject(ChangeDetectorRef);

  @ViewChild('inputText') public inputText!: ElementRef;

  @Input({required: true}) public inputListItems: IListItems[] = []

  @Output() public outputAddListItens = new EventEmitter<IListItems>();

  public focusAndAddItem(value: string) {
    if (value) {
      this.#cdr.detectChanges();
      this.inputText.nativeElement.value = ''; // limpando o valor do elemento

      const currentDate = new Date();
      const timestamp = currentDate.getTime();
      const id = `ID ${timestamp}`;

      this.outputAddListItens.emit({
        id,
        checked: false,
        value,
      });

      // console.log({
      //   id,
      //   checked: false,
      //   value,
      // });

      
      return this.inputText.nativeElement.focus();
      console.log(value);
    }
  }
}
