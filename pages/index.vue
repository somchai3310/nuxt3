<template>
  <div>
    <div class="container">
      <h1>หน้าแรกของเว็บไซค์</h1>
      <img src="/image/acid.svg" alt="">
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'MusShop | หน้าแรก',
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
  width: 400px;
  height: 400px;
}
</style>
