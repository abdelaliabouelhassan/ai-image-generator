<template>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
</template>
<script setup>
    import FirstSection from "~/components/partials/sections/home/tr/FirstSection.vue";
    import SecondSection from "~/components/partials/sections/home/tr/SecondSection.vue";
    import ThirdSection from "~/components/partials/sections/home/tr/ThirdSection.vue";

    //SEO 
   //SEO 
    useSeoMeta({
     title: "AI Resim Oluşturucu | Ücretsiz Online Metinden-Resme Yapay Sinir Ağı",
     description: "AI Resim Oluşturucumuzla sınırsız yaratıcılığı keşfedin. Metni ücretsiz olarak etkileyici görsellere dönüştürün. Sanatçılar, tasarımcılar ve yaratıcı zihinler için idealdir.",
    })
    
</script>