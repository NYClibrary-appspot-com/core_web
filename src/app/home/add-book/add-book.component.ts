import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Observable, from } from 'rxjs';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, startWith, debounceTime, distinctUntilChanged, switchMap, } from 'rxjs/operators';
import { Router } from '@angular/router';
import { query } from '@angular/animations';
import { LibrayServicesService } from 'src/app/services/libray-services.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  firstFormGroup: FormGroup;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  //Variables for Skills.
  skillCtrl = new FormControl();
  filteredSkills: Observable<string[]>;
  skills: string[] = [];
  allSkills: string[] = [];


  @ViewChild('skillInput') skillInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete1: MatAutocomplete;

  @ViewChild('classInput') classInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto2') matAutocomplete2: MatAutocomplete;

  constructor(private router : Router, private libService : LibrayServicesService, private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.skillCtrl.valueChanges.pipe(
      startWith(null),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap( (query: string) => this.libService.add_a_book(query) )
      ).subscribe( (skills: Observable<string[]>) => this.filteredSkills = skills["matches"] );

      
    // this.firstFormGroup = this._formBuilder.group({
    //   title: [ title, Validators.required],
    //   file: [this.collabData.description, Validators.required],
 
    // });
  }

  onSubmit(event: MatChipInputEvent): void { //make an post request and routes to "/home"
    if(!this.matAutocomplete1.isOpen){

      const input = event.input;
      const value = event.value;

      if((value || '').trim()) {
        this.skills.push(value.trim());
      }

      if(input) {
        input.value = '';
      } 

      this.skillCtrl.setValue(null);
      
    }
  }

 

}
