import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CriarUsuarioRequest } from "../../../../../tarefasApp/src/app/models/usuarios/criar-usuario.request";
import { CriarUsuarioResponse } from "../../../../../tarefasApp/src/app/models/usuarios/criar-usuario.response";
import { AutenticarUsuarioRequest } from "../../models/autenticar-usuario.request";
import { AutenticarUsuarioResponse } from "../../models/autenticar-usuario.response";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  apiUrl : string = "http://apicontatoscoti-001-site1.itempurl.com/api";


  constructor(private httpCliente : HttpClient ) { }


  criarUsuario (request : CriarUsuarioRequest): Observable<CriarUsuarioResponse>{
    return this.httpCliente.post<CriarUsuarioResponse>(this.apiUrl + '/criar-conta', request);
  }


  autenticar (request : AutenticarUsuarioRequest): Observable<AutenticarUsuarioResponse> {
    return this.httpCliente.post<AutenticarUsuarioResponse>(this.apiUrl + '/autenticar', request);
  }



}
