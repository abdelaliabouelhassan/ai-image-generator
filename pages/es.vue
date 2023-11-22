<template>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
</template>
<script setup>
    import FirstSection from "~/components/partials/sections/home/es/FirstSection.vue";
    import SecondSection from "~/components/partials/sections/home/es/SecondSection.vue";
    import ThirdSection from "~/components/partials/sections/home/es/ThirdSection.vue";

    //SEO 
    useSeoMeta({
     title: "Generador de Imágenes AI | Red Neuronal Gratis de Texto a Imagen",
     description: "Description: Descubre la creatividad sin límites con nuestro Generador de Imágenes AI. Transforma texto en visuales asombrosos gratis. Ideal para artistas, diseñadores y mentes creativas.",
    })
    
</script>