const app = new Vue({
    el: '#app',
    data:{
        titulo: 'CRUD con Vue',
        tareas:[],
        nuevaTarea: ''
    },
    methods: {
        agragarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false

            })
            this.nuevaTarea ='';
            localStorage.setItem('crud-vue', JSON.stringify (this.tareas));

        },

        editarTarea: function(index){
            this.tareas[index].estado='true';
            localStorage.setItem('crud-vue', JSON.stringify (this.tareas));
        },
        eliminar: function(index){
            this.tareas.splice(index, 1);
            localStorage.setItem('crud-vue', JSON.stringify (this.tareas));
        },
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('crud-vue'));
        if (datosDB === null) {
            this.tareas = [];
        } else {
            this.tareas = datosDB;
        }
    }
});