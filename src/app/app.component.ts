import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  form: FormGroup

  ngOnInit(): void {
    this.form = new FormGroup({
      /** принимает на вход начальное значение и список валидаторов */
      email: new FormControl(''),
      password: new FormControl(null)
    })
  }

  submit() {
    console.log('Form:', this.form);
    const formData = {...this.form.value};
    console.log('FormData: ', formData)
  }
}
