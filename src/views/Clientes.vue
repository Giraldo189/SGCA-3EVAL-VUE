<template>
    <div class="container">
        <h1>Listado Clientes</h1>
    <table class="table">
        <thead>
    <tr>
       <th scope="col">Id Cliente</th>
       <th scope="col">Nombre</th>
       <th scope="col">Apellido</th>
       <th scope="col">Telefono</th>
       <th scope="col">Email</th>
       <th scope="col">Dirreccion</th>
    </tr>
     </thead>
     <tbody>
    <tr v-for="(cliente,index) in clientes":key="index">
        <th scope="row">{{index+1}}</th>
        <td>{{ cliente.id_cliente }}</td>
        <td>{{ cliente.nombre }}</td>
        <td>{{ cliente.apellido }}</td>
        <td>{{ cliente.telefono }}</td>
        <td>{{ cliente.email }}</td>
        <td>{{ cliente.dirrecion }}</td>
    </tr>
     </tbody>
    </table>
    </div>
    </template>
    <script>
    import  axios  from 'axios';

    export default {

    name: 'Cliente',
    data(){
        return{
            clientes: []
        }
    },
    mounted() {
       axios
        .get('http://127.0.0.1:8000/api/clientes')
        .then(response => (this.clientes = response.data.clientes))
    },
    }
     </script>
    