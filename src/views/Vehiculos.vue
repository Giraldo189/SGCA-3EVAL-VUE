<template>
<div class="container">
    <h1>Listado Vehiculos</h1>
<table class="table">
    <thead>
<tr>
   <th scope="col">#</th>
   <th scope="col">Marca</th>
   <th scope="col">Año</th>
   <th scope="col">Precio</th>
   <th scope="col">estado</th>
   <th scope="col">stock</th>
</tr>
 </thead>
 <tbody>
<tr v-for="(vehiculo,index) in vehiculos":key="index">
    <th scope="row">{{index+1}}</th>
    <td>{{ vehiculo.id_vehiculos }}</td>
    <td>{{ vehiculo.marca }}</td>
    <td>{{ vehiculo.año }}</td>
    <td>{{ vehiculo.precio }}</td>
    <td>{{ vehiculo.estado }}</td>
    <td>{{ vehiculo.stock }}</td>

</tr>
 </tbody>
</table>
</div>
</template>
<script>
    import  axios  from 'axios';

    export default {

    name: 'Vehiculo',
    data (){
        return{
            vehiculos:[]
        }
    },
    mounted() {
       axios
        .get('http://127.0.0.1:8000/api/vehiculos')
        .then(response => (this.vehiculos = response.data.vehiculos))
    },
    }
     </script>
