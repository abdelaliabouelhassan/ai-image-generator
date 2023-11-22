<template>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
</template>
<script setup>
    import FirstSection from "~/components/partials/sections/home/en/FirstSection.vue";
    import SecondSection from "~/components/partials/sections/home/en/SecondSection.vue";
    import ThirdSection from "~/components/partials/sections/home/en/ThirdSection.vue";

    //SEO 
    useSeoMeta({
     title: " AI Image Generator | Free Online Text-to-Image Neural Network",
     description: "Discover the limitless creativity with our AI Image Generator. Transform text into stunning visuals for free. Ideal for artists, designers, and creative ",
    })
    
</script>