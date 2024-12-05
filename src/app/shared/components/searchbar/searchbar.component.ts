import { Component ,EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-searchbar',
  imports: [MatIconModule,ReactiveFormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchbarComponent {
  
searchControl = new FormControl('');
@Output()
search:EventEmitter<string>= new EventEmitter<string>
constructor(){
  this.searchControl.valueChanges.pipe(debounceTime(3000)).subscribe((value)=>{
    this.search.emit(value || '');
  })
}
clearSearch() {
  this.searchControl.setValue('');
  this.search.emit(''); 
}

}
