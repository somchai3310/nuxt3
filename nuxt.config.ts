// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // runtimeConfig:{
  //   public: {
  //     baseURL: 'https://dummyjson.com/'
  //   }
  // },
  devtools: { enabled: true },
  app: {
    head: {
      title: 'ร้านค้า Mustofa',
      meta:[
        {name: 'deasdfjklasdf',content: 'รายละเอียดเว็บไซค์'}
      ]
    }
  }
})
