<template>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
</template>
<script setup>
    import FirstSection from "~/components/partials/sections/home/fr/FirstSection.vue";
    import SecondSection from "~/components/partials/sections/home/fr/SecondSection.vue";
    import ThirdSection from "~/components/partials/sections/home/fr/ThirdSection.vue";

    //SEO 
   //SEO 
    useSeoMeta({
     title: "Générateur d'Images AI | Réseau Neuronal Gratuit de Texte en Image",
     description: "Description: Découvrez une créativité sans limites avec notre Générateur d'Images AI. Transformez du texte en visuels étonnants gratuitement. Parfait pour les artistes, les designers et les esprits créatifs.",
    })
    
</script>