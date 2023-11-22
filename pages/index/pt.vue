<template>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
</template>
<script setup>
    import FirstSection from "~/components/partials/sections/home/pt/FirstSection.vue";
    import SecondSection from "~/components/partials/sections/home/pt/SecondSection.vue";
    import ThirdSection from "~/components/partials/sections/home/pt/ThirdSection.vue";

    //SEO 
    useSeoMeta({
     title: "Gerador de Imagens AI | Rede Neural Grátis de Texto para Imagem Online",
     description: "Descubra a criatividade ilimitada com nosso Gerador de Imagens AI. Transforme texto em visuais impressionantes gratuitamente. Ideal para artistas, designers e mentes criativas.",
    })
    
</script>