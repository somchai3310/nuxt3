<template>
    <div>
        <div class="container">
            <h1>เกี่ยวกับเรา</h1>
            <img src="/image/aj.svg" alt="">
        </div>
    </div>
</template>

<script setup>
useHead({
  title: 'MusShop | เกี่ยวกับเรา',
  meta: [
    { name: 'description', content: 'ร้านค้ามอุปกรณ์คอมพิวเตอร์' }
  ],
})
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

img {
    width: 500px;
    height: 400px;
}
</style>