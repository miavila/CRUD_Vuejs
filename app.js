const app = new Vue({
    el: '#app',
    data:{
        titulo: 'CRUD con Vue',
        tareas:[],
        nuevaTarea: ''
    },
    methods: {
        agragarTarea: function(){
            // console.log('click', this.nuevaTarea);
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false

            })
            // console.log(this.tareas)
            this.nuevaTarea ='';
        },

        editarTarea: function(index){
            // console.log('editar', index);
            this.tareas[index].estado='true';
        },
        eliminar: function(index){
            this.tareas.splice(index, 1);

        },
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        console.log(datosDB);
    }
});