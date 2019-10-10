<template>
  <div class="login">
   Login
     <div class="text-left">
      <router-link to="/usuario">
        Usuario
        <i class="fas fa-arrow-circle-left text-gray"  style="font-size:20px;"></i>
      </router-link>
      <form class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal"></h1>
      <input
        type="email"
        v-model="correo"
        class="form-control"
        placeholder="Correo"
        v-on:keyup.enter="login()"
        required
        autofocus
      >
      <input
        type="password"
        v-model="password"
        class="form-control"
        placeholder="Password"
        v-on:keyup.enter="login()"
        required
      >          
      <a class="btn btn-lg btn-primary btn-block text-white "  
            v-on:click="login()"  
            :disabled="loading">
        Entrar       
      </a> 
      <small> {{loading == true ? 'cargando':''}} </small>
     
    </form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      correo:'',
      password:'',
      mensaje:'',
      loading:false
    }
  },
  mounted(){   
    console.log("Iniciando el componente de login en vue ");   
  },
  methods:{
    login(){      
       if (!this.correo || !this.password) {
        this.mensaje = "Los campos son requeridos";
        return;
      }else{   
        this.loading = true;
        var dataSend = { correo: this.correo, password: this.password };          
          //invocar el servicio de login
       this.$http.post(URL.LOGIN, dataSend).then(
        result => {
          console.log("En el login");
          this.response = result.data;
          if (this.response.auth) {
            //this.$session.set("usuario_sesion", this.response);                                  
            this.loading = false;
            this.$router.replace({ path: "/principal" });                        
          } else {            
            this.loading = false;
            this.mensaje = "No se encuentra el usuario..";
          }
        },
        error => { 
                this.loading = false;
                 this.mensaje = "¡¡Uppssss!!!! :( sucedió un error";         
        }
      );
      }
    }
  }  
}
</script>

<style scoped>

</style>
