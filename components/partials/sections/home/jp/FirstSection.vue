<template>
     <section class=" w-full max-w-[64.8125rem] mx-auto pt-32 space-y-10 pb-10">
        <div class=" w-full flex flex-col items-center space-y-4">
            <h1 class=" text-black font-Inter text-[2rem] md:text-[4rem] font-normal text-center">AI画像生成器</h1>
            <span class=" text-black font-Inter  text-[1rem] md:text-[2rem] font-normal text-center">テキストから画像を生成する無料オンラインニューラルネットワーク</span>
        </div>

        <Generate pgenerate='Generate' pstyle='🎨 Style' pshape='Shape' pimages='Number of images'/>
    </section>
</template>

<script setup>
    import Generate from '~/components/UI/Generate.vue'

</script>

