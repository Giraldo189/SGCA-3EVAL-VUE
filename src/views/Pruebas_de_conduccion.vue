<template>
    <div class="container">
        <h1>Listado Vehiculos</h1>
    <table class="table">
        <thead>
    <tr>
       <th scope="col">Id Prueba</th>
       <th scope="col">Vehiculo</th>
       <th scope="col">Cliente</th>
       <th scope="col">Fecha Prueba</th>
       <th scope="col">Resultados</th>
    </tr>
     </thead>
     <tbody>
    <tr v-for="(pruebasdeconduccion,index) in pruebasdeconducciones":key="index">
        <th scope="row">{{index+1}}</th>
        <td>{{ pruebasdeconduccion.id_prueba }}</td>
        <td>{{ pruebasdeconduccion.id_vehiculo }}</td>
        <td>{{ pruebasdeconduccion.id_cliente }}</td>
        <td>{{ pruebasdeconduccion.fecha_prueba }}</td>
        <td>{{ pruebasdeconduccion.resultado }}</td>
    </tr>
     </tbody>
    </table>
    </div>
    </template>
    <script>
    import { axios } from "axios";

    export default {

    name:'pruebasdeconducciones',
    data (){
        return{
            pruebasdeconducciones:[]
        }
    },
    mounted(){
       axios
        .get('http://127.0.0.1:8000/api/pruebasdeconducciones')
        .then(response => (this.pruebasdeconducciones = response.data.pruebasdeconducciones))
    },
    }
     </script>
    