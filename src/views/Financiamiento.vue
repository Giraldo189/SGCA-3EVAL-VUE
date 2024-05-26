<template>
    <div class="container">
        <h1>Listado Financiamiento</h1>
    <table class="table">
        <thead>
    <tr>
       <th scope="col">Id Financiamiento</th>
       <th scope="col">Venta</th>
       <th scope="col">Monto</th>
       <th scope="col">Taza Interez</th>
       <th scope="col">Plazo</th>
       <th scope="col">Fecha de Aporte</th>

    </tr>
     </thead>
     <tbody>
    <tr v-for="(financiamiento,index) in financiamientos":key="index">
        <th scope="row">{{index+1}}</th>
        <td>{{ financiamiento.id_financiamiento }}</td>
        <td>{{ financiamiento.id_venta }}</td>
        <td>{{ financiamiento.monto_financiamiento }}</td>
        <td>{{ financiamiento.taza_interez}}</td>
        <td>{{ financiamiento.plazo_meses }}</td>
        <td>{{ financiamiento.fecha_inicio }}</td>
    </tr>
     </tbody>
    </table>
    </div>
    </template>
    <script>
    import { axios } from "axios";

    export default {

    name:'financiamientos',
    data (){
        return{
            financiamientos:[]
        }
    },
    mounted(){
       axios
        .get('http://127.0.0.1:8000/api/financiamientos')
        .then(response => (this.financiamientos = response.data.financiamientos))
    },
    }
     </script>
    