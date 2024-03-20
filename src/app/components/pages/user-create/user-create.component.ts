import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [CommonModule,
  ReactiveFormsModule,
  FormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {


  formCreate = new FormGroup({
    nome : new FormControl(''),
    login : new FormControl(''),
    telefone : new FormControl(''),
    email : new FormControl(''),
    senha : new FormControl(''),
    senhaConf : new FormControl(''),
  }

  );

  onSubmit() {
    console.log(this.formCreate.value)
    }

}
