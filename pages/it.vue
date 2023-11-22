<template>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
</template>
<script setup>
    import FirstSection from "~/components/partials/sections/home/it/FirstSection.vue";
    import SecondSection from "~/components/partials/sections/home/it/SecondSection.vue";
    import ThirdSection from "~/components/partials/sections/home/it/ThirdSection.vue";

    //SEO 
   //SEO 
    useSeoMeta({
     title: "Generatore di Immagini AI | Rete Neurale Gratuita da Testo a Immagine",
     description: "Scopri la creatività illimitata con il nostro Generatore di Immagini AI. Trasforma il testo in visual sorprendenti gratuitamente. Ideale per artisti, designer e menti creative.",
    })
    
</script>