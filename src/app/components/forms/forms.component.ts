import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnitsService } from 'src/app/services/get-units.service';
import { Location } from 'src/app/types/location.interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  results: Location [] = [];
  filtredResults: Location [] = []
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private unitService: GetUnitsService) {}

  ngOnInit(): void {
    this.unitService.getAllUnits().subscribe(data => {
      this.results = data.locations
      this.filtredResults = data.locations
    });
    
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClose: true
    })
    
  }

  onSubmit() {
    if(!this.formGroup.value.showClose) {
      this.filtredResults = this.results.filter(location => location.opened === true);
    } else {
      this.filtredResults = this.results
    }
  }

  onClean() {
    console.log(this.formGroup.reset());
    
  }


}
