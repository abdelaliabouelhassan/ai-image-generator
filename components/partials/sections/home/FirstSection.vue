<template>
     <section class=" w-full max-w-[64.8125rem] mx-auto pt-32 space-y-10 pb-10">
        <div class=" w-full flex flex-col items-center space-y-4">
            <h1 class=" text-black font-Inter text-[2rem] md:text-[4rem] font-normal text-center">AI Image Generator</h1>
            <span class=" text-black font-Inter  text-[1rem] md:text-[2rem] font-normal text-center">Free Online AI Image Generator (Text to Image)</span>
            <div class=" w-full flex flex-col items-center space-y-4 pt-4">
                <div class=" w-full flex md:flex-row flex-col items-center space-y-2 md:space-y-0 md:space-x-4">
                    <div class=" w-full max-w-[52.125rem] relative">
                        <textarea name="" id="" placeholder="✏️ Enter a description of what you want the AI to create"  class=" p-4 outline-none h-[5.75rem] w-full border-2 border-black rounded-[0.625rem]"></textarea>
                        <div class=" absolute top-6 right-4 bg-[#D9D9D9] w-[2.6875rem] h-[2.6875rem] rounded-[0.625rem] flex">
                            <div class=" m-auto font-Inter text-2xl font-normal">
                                🎲
                            </div>
                        </div>
                    </div>
                    <button class="btn-gradient md:max-w-[11.6875rem] w-full h-[5.75rem] text-center rounded-[0.625rem] border-2 border-black text-black font-Inter text-2xl font-normal hover:scale-105 sm:hover:scale-110 duration-200"> 
                        Generate
                    </button>
                </div>

                <div class=" w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-0 justify-center items-center  sm:justify-between max-w-[35rem] mx-auto">
                    <div class=" flex items-center space-x-3">
                        <label for="style" class=" text-black text-[0.9375rem] font-Inter font-normal">🎨 Style</label>
                        <select name="style" id="style" class="pl-2 capitalize border-2 rounded-[0.625rem] border-black px-1 py-1 text-[0.9375rem] font-Inter font-normal">
                            <option value="cinematic">cinematic</option>
                        </select>
                    </div>
                     <div class=" flex items-center space-x-3">
                        <label for="style" class=" text-black text-[0.9375rem] font-Inter font-normal">Shape</label>
                        <select name="style" id="style" class=" pl-2 capitalize border-2 rounded-[0.625rem] border-black px-1 py-1 text-[0.9375rem] font-Inter font-normal">
                            <option value="shape">shape</option>
                        </select>
                    </div>
                     <div class=" flex items-center space-x-3">
                        <label for="style" class=" text-black text-[0.9375rem] font-Inter font-normal">Number of images</label>
                        <select name="style" id="style" class=" pl-4 capitalize border-2 rounded-[0.625rem] border-black px-1 py-1 text-[0.9375rem] font-Inter font-normal">
                            <option value="1">1</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class=" w-full flex flex-col items-center sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <ImageCard />
            <ImageCard />
            <ImageCard />
        </div>
    </section>
</template>

<script setup>
 import ImageCard from '~/components/UI/ImageCard.vue'
</script>


<style scoped>
 .btn-gradient {
    background: linear-gradient(180deg, rgba(5, 0, 255, 0.20) 0%, rgba(0, 194, 255, 0.20) 100%), #FFF;
 }
</style>