import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-auth',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css'
})
export class UserAuthComponent {

  formAuth = new FormGroup(
    {
      usuario : new FormControl(''),
      senha: new FormControl('')
  }
  );

  onSubmit(){
    console.log(this.formAuth.value);
  }


}
