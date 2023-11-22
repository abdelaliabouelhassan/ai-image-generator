<template>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
</template>
<script setup>
    import FirstSection from "~/components/partials/sections/home/ru/FirstSection.vue";
    import SecondSection from "~/components/partials/sections/home/ru/SecondSection.vue";
    import ThirdSection from "~/components/partials/sections/home/ru/ThirdSection.vue";

    //SEO 
   //SEO 
    useSeoMeta({
     title: "AI-генератор изображений | Бесплатная нейросеть картинка по тексту",
     description: " Откройте неограниченные возможности творчества с нашим AI-генератором изображений. Превратите текст в потрясающие визуализации бесплатно. Идеально подходит для художников, дизайнеров и творческих людей.",
    })
    
</script>