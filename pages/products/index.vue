<template>
    <div class="container">
        <div v-for="product in data.products">
            <NuxtLink :to="`/products/${product.id}`">
                <h2 class="title">{{ product.title }}</h2>
            </NuxtLink>
            <img :src=product.thumbnail>
        </div>
    </div>
</template>

<script setup>
// เปลี่ยน layout
definePageMeta({
    layout: 'products'
}),
useHead({
  title: 'MusShop | สินค้าทั้งหมด',
})
const { data: data } = await useFetch('https://dummyjson.com/products?limit=10')
// console.log('products -->', data);
</script>

<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}
.container div {
    width:300px;
    height: 300px;
    margin: 30px 15px;
    background: #333;
}
.title{
    color: white;
    text-align: center;
    font-size: 1.2em;
}
.container div:hover{
    background: orange;
}
img{
    width: 300px;
    height: 300px;

}
a{
    text-decoration: none;
}
</style>