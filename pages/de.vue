<template>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
</template>
<script setup>
    import FirstSection from "~/components/partials/sections/home/de/FirstSection.vue";
    import SecondSection from "~/components/partials/sections/home/de/SecondSection.vue";
    import ThirdSection from "~/components/partials/sections/home/de/ThirdSection.vue";

    //SEO 
    useSeoMeta({
     title: "AI Bildgenerator | Kostenloser Online Text-zu-Bild Neuralnetz",
     description: "Entdecken Sie grenzenlose Kreativität mit unserem AI Bildgenerator. Verwandeln Sie Text kostenlos in beeindruckende Bilder. Perfekt für Künstler, Designer und Kreative.",
    })
    
</script>