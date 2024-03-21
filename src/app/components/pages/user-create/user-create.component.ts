import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [CommonModule,
  ReactiveFormsModule,
  FormsModule
  ],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {


  formCreate = new FormGroup({
    nome : new FormControl('', [Validators.required]),
    login : new FormControl('', [Validators.required]),
    telefone : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    senha : new FormControl('', [Validators.required, Validators.minLength(8)]),
    senhaConf : new FormControl('', [Validators.required, Validators.minLength(8)]),
  }

  );

  get formValidate() {
    return this.formCreate.controls;
  }

  onSubmit() {
    console.log(this.formCreate.value)
    }

}
