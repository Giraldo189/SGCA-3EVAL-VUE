<template>
    <div class="container">
        <h1>Listado Ventas</h1>
    <table class="table">
        <thead>
    <tr>
       <th scope="col">#</th>
       <th scope="col">id_venta</th>
       <th scope="col">Vehiculo</th>
       <th scope="col">Cliente</th>
       <th scope="col">Empleado</th>
       <th scope="col">Fecha</th>
       <th scope="col">Precio</th>
    </tr>
     </thead>
     <tbody>
    <tr v-for="(venta,index) in ventas":key="index">
        <th scope="row">{{index+1}}</th>
        <td>{{ venta.id_ventas }}</td>
        <td>{{ ventas.id_vehiculo }}</td>
        <td>{{ ventas.id_cliente }}</td>
        <td>{{ ventas.id_empleado }}</td>
        <td>{{ ventas.fecha_ventas }}</td>
        <td>{{ ventas.precio_final }}</td>
    
    </tr>
     </tbody>
    </table>
    </div>
    </template>
    <script>
    import { axios } from "axios";

    export default {

    name:'venta',
    data (){
        return{
            ventas:[]
        }
    },
    mounted(){
       axios
        .get('http://127.0.0.1:8000/api/ventas')
        .then(response => (this.ventas = response.data.ventas))

    },
    }
     </script>
    
    