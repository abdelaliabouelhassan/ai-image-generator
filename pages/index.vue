<template>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
</template>
<script setup>
    import FirstSection from "~/components/partials/sections/home/FirstSection.vue";
    import SecondSection from "~/components/partials/sections/home/SecondSection.vue";
    import ThirdSection from "~/components/partials/sections/home/ThirdSection.vue";

    //SEO 
    useSeoMeta({
     title: "AI Image Generator",
     description: "Discover the creative possibilities with our Text-to-Image AI Generator. Transform your ideas into visual art with just a few clicks. Enter your text, select a style, choose the shape of your image, and set the number of results you wish to see. Our AI will craft an image that aligns with your description. Text-to-Image.ai is an innovative platform that brings your words to life. Whether you're imagining a surreal landscape, a detailed character sketch, or a unique abstract design, our tool generates high-quality images in seconds. Simply type in your description, pick your preferred art style, define the shape, and decide how many variations you want. The AI does the rest. Our Text-to-Image AI is accessible through any web browser and supports all devices (PC, Mac, Android, iOS) without the need for additional software. This powerful tool is perfect for artists, designers, content creators, or anyone looking to bring their imaginative concepts to visual reality.",
    })
    
</script>