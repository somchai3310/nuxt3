<template>
    <div>
        <Head>
            <Title>MusShop | {{ product.title }}</Title>
            <Meta name="description" :content="product.description"></Meta>
        </Head>
        <!-- <h1>รายละเอียดสินค้าชิ้นที่ {{ id }}</h1> -->
        <div class="container">
            <img :src=product.thumbnail :alt=product.title>
            <div class="detail">
                <h1>ชื่อ: {{ product.title }}</h1>
                <h2>ราคา: ${{ product.price }}</h2>
                <h2>หมวดหมู่: {{ product.category }}</h2>
                <h2>ยี่ห้อ: {{ product.brand }}</h2>
                <h4>รายละเอียด: {{ product.description }}</h4>
            </div>
        </div>
        <!-- <pre>{{ product }}</pre> -->

    </div>
</template>

<script setup>
const { id } = useRoute().params
const { data: product } = await useFetch('https://dummyjson.com/products/'+id)
// console.log('--> ',useRoute())
// console.log('product --> ',product)
</script>

<style scoped>
.container{
    display: flex;
    justify-content: center;

}
.detail{
    margin-left: 10px;
}
</style>