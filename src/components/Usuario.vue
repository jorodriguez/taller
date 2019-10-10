<template>
  <div id="id_usuario">
    <h1>Usuarios</h1>  
     <h3> {{ loading == true ? 'cargando....':''}} </h3>
   <form>
    <table >
      <thead>        
        <th>Nombre</th>
        <th>Edad</th>
        <th>Correo</th>       
        <th></th>
      </thead>
      <tbody v-for="row in listaUsuario" :key="row.id">
        <tr>         
          <td>
            <button v-on:click="seleccionarUsuario(row,'UPDATE')" type="button" class="btn btn-link">
              <span class="small">{{row.nombre}}</span>              
            </button>
          </td>
          <td>
            <strong>
              <span class="small font-weight-bold">{{row.edad}}</span>
            </strong>
          </td>      
          <td>
            {{row.correo == null ? 'S/C':row.correo}}
          </td>            
          <td>            
          </td>
        </tr>
      </tbody>
    </table>
    
    </form>

 <!-- MODAL PARA SELECCION DE USUARIO
   
      <div
        id="modal_usuario"
        class="modal"
        tabindex="-1"
        data-keyboard="false"
        data-backdrop="static"
        role="dialog"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title"> {{operacion == 'INSERT' ? ' Registrar':'Modificar'}} Gasto</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body text-left">
              <p class="text-danger">{{mensaje}}</p>
              
                           
               <div class="form-group">
                <label for="inputNombre">Nombre</label>
                <input
                  id="inputnombre"
                  type="text"
                  v-model="usuario.nombre"
                  class="form-control"
                  placeholder="Nombre"
                />
              </div>

              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-lg btn-primary" v-on:click="guardarUsuario()">Guardar</button>
              <button type="button" class="btn btn-lg btn-secondary" data-dismiss="modal">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    



   
      <div
        id="modal_eliminar"
        class="modal"
        tabindex="-1"
        data-keyboard="false"
        data-backdrop="static"
        role="dialog"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title"> Confirmar eliminar el Usuario</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body text-left">
              {{mensaje}}
              ¿Confirma eliminar el usuario de <strong>{{usuario.nombre}}</strong> 
            </div>
            <div class="modal-footer">
              <button class="btn btn-lg btn-danger" v-on:click="confirmarEliminar()">Eliminar</button>
              <button type="button" class="btn btn-lg btn-secondary" data-dismiss="modal">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
     </div>


-->

    
     </div>
</template>

<script src="../controller/UsuarioController.js"></script>


<style scoped>
.tachado {
  text-decoration: line-through;
}
</style>
