<template>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
</template>
<script setup>
    import FirstSection from "~/components/partials/sections/home/nl/FirstSection.vue";
    import SecondSection from "~/components/partials/sections/home/nl/SecondSection.vue";
    import ThirdSection from "~/components/partials/sections/home/nl/ThirdSection.vue";

   //SEO 
    useSeoMeta({
     title: "AI Afbeeldingengenerator | Gratis Online Tekst-naar-Beeld Neuraal Netwerk",
     description: "Ontdek onbeperkte creativiteit met onze AI Afbeeldingengenerator. Zet tekst gratis om in prachtige visuals. Ideaal voor kunstenaars, ontwerpers en creatieve geesten.",
    })
    
</script>