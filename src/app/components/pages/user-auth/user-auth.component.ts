import { UsuariosService } from './../../../../../../tarefasApp/src/app/services/usuarios.service';
import { AutenticarUsuarioRequest } from './../../../../../../tarefasApp/src/app/models/usuarios/autenticar-usuario.request';
import { HttpClient } from '@angular/common/http';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css',
})
export class UserAuthComponent {
  constructor(private service: UsuariosService) {}

  formAuth = new FormGroup({
    usuario: new FormControl(''),
    senha: new FormControl(''),
  });

  onSubmit() {
    const request: AutenticarUsuarioRequest = {
      email: this.formAuth.value.usuario as string,
      senha: this.formAuth.value.senha as string,
    };

    this.service.autenticar(request).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
