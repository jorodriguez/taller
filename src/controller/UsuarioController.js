
import URL from "../helpers/Urls";

export default {
    name: "usuario",
    data() {
        return {
            usuario: {
                id: -1,
                nombre: "",
                edad: -1,
                correo: "",
                clave: ""
            },
            listaUsuario: [],
            mensaje: "",
            loading:false
        };
    },
    mounted() {
        console.log("iniciando el componente usuario");
        this.loading = true;
        this.loadFunctionUsuarios = function () {
            this.$http.get(URL.USUARIO, {
                headers: {}
            })
                .then(
                    result => {
                        console.log("====="+JSON.stringify(result));
                        if (result.body != null) {
                            this.listaUsuario = result.body;
                        }
                        this.loading = false;
                    },
                    error => {
                        console.error(error);
                        this.loading = false;
                    });
        };

        this.loadFunctionUsuarios();

    },
    methods: {
        iniciarAgregarUsuario() {
            console.log("iniciar agregar usuario");
            this.usuario = {
                id: -1,
                nombre: "",
                edad: -1,
                correo: "",
                clave: ""
            },
                this.mensaje = "";
            this.operacion = 'INSERT';
            $('#modal_usuario').modal('show');

        },

        guardarUsuario() {
            console.log("guardar usuario");

            if (this.operacion == 'INSERT') {
                this.$http
                    .post(
                        URL.USUARIO, this.usuario,
                        { headers: {} })
                    .then(
                        result => {
                            if (result != null) {
                                this.mensaje = "Insertado";
                            }
                        },
                        error => {
                            console.error(error);
                        });
            } else {
                this.$http
                    .put(url, this.usuario, { headers: {} })
                    .then(
                        result => {
                            if (result != null) {
                                this.mensaje = "Modificado";
                            }
                        },
                        error => {
                            console.error(error);
                        });
            }
        },

        seleccionarUsuario(item, operacion) {
            console.log("seleccionar usuario " + item);
            this.operacion = operacion;
            this.usuario = item;

            if (this.operacion == 'DELETE') {
                $("#modal_eliminar").modal("show");
            } else {
                $("#modal_usuario").modal("show");
            }
        },
        confirmarEliminar() {
            console.log("confirmar eliminar usuario");            
            this.$http
                .delete(URL.USUARIO,{headers: {}})
                .then(
                    result => {
                        if(result != null ){
                            this.mensaje = "eliminado";
                        }
                    },
                    error => {
                        console.error(error);                 
                    });
        }
    },
};