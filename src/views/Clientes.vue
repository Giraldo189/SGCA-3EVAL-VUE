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
        <td>{{ clientes.id_cliente }}</td>
        <td>{{ clientes.nombre }}</td>
        <td>{{ clientes.apellido }}</td>
        <td>{{ clientes.telefono }}</td>
        <td>{{ clientes.email }}</td>
        <td>{{ clientes.dirrecion }}</td>
    </tr>
     </tbody>
    </table>
    </div>
    </template>
    <script>
    import { axios } from "axios";

    export default {

    name:'clientes',
    data (){
        return{
            clientes:[]
        }
    },
    mounted(){
       axios
        .get('http://127.0.0.1:8000/api/clientes')
        .then(response => (this.clientes = response.data.clientes))
    },
    }
     </script>
    