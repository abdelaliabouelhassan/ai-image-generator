<template>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
</template>
<script setup>
    import FirstSection from "~/components/partials/sections/home/jp/FirstSection.vue";
    import SecondSection from "~/components/partials/sections/home/jp/SecondSection.vue";
    import ThirdSection from "~/components/partials/sections/home/jp/ThirdSection.vue";

    //SEO 
   //SEO 
    useSeoMeta({
     title: "AI画像生成器 | テキストから画像への無料オンラインニューラルネットワーク",
     description: "私たちのAI画像生成器で無限の創造性を発見しましょう。テキストを無料で驚くべきビジュアルに変換。アーティスト、デザイナー、創造的な人々に最適です。",
    })
    
</script>