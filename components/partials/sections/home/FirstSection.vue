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

                <div class=" w-full flex flex-wrap sm:flex-nowrap gap-4  justify-center items-center  sm:justify-between max-w-[35rem] mx-auto">
                    <div class=" flex items-center space-x-3">
                        <label for="style" class=" text-black text-[0.9375rem] font-Inter font-normal whitespace-nowrap">🎨 Style</label>
                        <select name="style" id="style" class="pl-2 w-[7.3125rem] capitalize border-2 rounded-[0.625rem] border-black px-1 py-1 text-[0.9375rem] font-Inter font-normal">
                            <option v-for="(style,index,key) in Styles" :key="key" :value="style.value">{{style.name}}</option>
                        </select>
                    </div>
                     <div class=" flex items-center space-x-3">
                        <label for="style" class=" text-black text-[0.9375rem] font-Inter font-normal">Shape</label>
                        <select name="style" id="style" class=" pl-2 capitalize border-2 rounded-[0.625rem] border-black px-1 py-1 text-[0.9375rem] font-Inter font-normal">
                            <option value="portrait">Portrait</option>
                            <option value="square">Square</option>
                            <option value="landscape">Landscape</option>
                        </select>
                    </div>
                     <div class=" flex items-center space-x-3">
                        <label for="style" class=" text-black text-[0.9375rem] font-Inter font-normal whitespace-nowrap">Number of images</label>
                        <select name="style" id="style" class=" pl-4 capitalize border-2 rounded-[0.625rem] border-black px-1 py-1 text-[0.9375rem] font-Inter font-normal">
                            <option value="1">1</option>
                            <option value="3">3</option>
                            <option value="6">6</option>
                            
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

 const Styles = ref([
     {
        name:'Cinematic',
        value:'cinematic',
    },
    {
        name:'Painted Anime',
        value:'painted anime',
    },
    {
        name:'Casual Photo',
        value:'casual photo',
    },
    {
        name:'Digital Painting',
        value:'digital painting',
    },
    {
        name:'Concept Art',
        value:'concept art',
    },
    {
        name:'𝗡𝗼 𝘀𝘁𝘆𝗹𝗲',
        value:'no style',
    },
    {
        name:'3D Disney Character',
        value:'3d disney character',
    },
    {
        name:'2D Disney Character',
        value:'2d disney character',
    },
    {
        name:'Disney Sketch',
        value:'disney sketch',
    },
    {
        name:'Concept Sketch',
        value:'concept sketch',
    },
    {
        name:'Painterly',
        value:'painterly',
    },
    {
        name:'Oil Painting',
        value:'oil painting',
    },
    {
        name:'Oil Painting - Realism',
        value:'oil painting - realism',
    },
    {
        name:'Oil Painting - Old',
        value:'oil painting - old',
    },
    {
        name:'Professional Photo',
        value:'professional photo',
    },
    {
        name:' Anime',
        value:' anime',
    },
    {
        name:'Cute Anime',
        value:'cute anime',
    },
    {
        name:'Soft Anime',
        value:'soft anime',
    },
    {
        name:'Fantasy Painting',
        value:'fantasy painting',
    },
    {
        name:'Fantasy Landscape',
        value:'fantasy landscape',
    },
    {
        name:'Fantasy Portrait',
        value:'fantasy portrait',
    },
    {
        name:'Studio Ghibli',
        value:'studio ghibli',
    },
    {
        name:'50s Enamel Sign',
        value:'50s enamel sign',
    },
    {
        name:'Vintage Comic',
        value:'vintage comic',
    },
    {
        name:'Franco-Belgian Comic',
        value:'franco-belgian comic',
    },
    {
        name:'Tintin Comic',
        value:'tintin comic',
    },
    {
        name:'Medieval',
        value:'medieval',
    },
    {
        name:'Pixel Art',
        value:'pixel art',
    },
    {
        name:'Cute Figurine',
        value:'cute figurine',
    },
    {
        name:'3D Emoji',
        value:'3d emoji',
    },
    {
        name:'Illustration',
        value:'illustration',
    },
    {
        name:'Flat Illustration',
        value:'flat illustration',
    },
    {
        name:'Watercolor',
        value:'watercolor',
    },
    {
        name:'1990s Photo',
        value:'1990s photo',
    },
    {
        name:'1980s Photo',
        value:'1980s photo',
    },
    {
        name:'1970s Photo',
        value:'1970s photo',
    },
    {
        name:'1960s Photo',
        value:'1960s photo',
    },
    {
        name:'1950s Photo',
        value:'1950s photo',
    },
    {
        name:'1940s Photo',
        value:'1940s photo',
    },
    {
        name:'1930s Photo',
        value:'1930s photo',
    },
    {
        name:'1920s Photo',
        value:'1920s photo',
    },
    {
        name:'Vintage Pulp Art',
        value:'vintage pulp art',
    },
    {
        name:'50s Infomercial Anime',
        value:'50s infomercial anime',
    },
    {
        name:'3D Pokemon',
        value:'3d pokemon',
    },
    {
        name:'Painted Pokemon',
        value:'painted pokemon',
    },
    {
        name:'2D Pokemon',
        value:'2d pokemon',
    },
    {
        name:'Vintage Anime',
        value:'vintage anime',
    },
    {
        name:'Neon Vintage Anime',
        value:'neon vintage anime',
    },
    {
        name:'Manga',
        value:'manga',
    },
    {
        name:'Fantasy World Map',
        value:'fantasy world map',
    },
    {
        name:'Fantasy City Map',
        value:'fantasy city map',
    },
    {
        name:'Old World Map',
        value:'old world map',
    },
    {
        name:'3D Isometric Icon',
        value:'3d isometric icon',
    },
    {
        name:'Flat Style Icon',
        value:'flat style icon',
    },
    {
        name:'Flat Style Logo',
        value:'flat style logo',
    },
    {
        name:'Game Art Icon',
        value:'game art icon',
    },
    {
        name:'Digital Painting Icon',
        value:'digital painting icon',
    },
    {
        name:'Concept Art Icon',
        value:'concept art icon',
    },
    {
        name:'Cute 3D Icon',
        value:'cute 3d icon',
    },
    {
        name:'Cute 3D Icon 𝗦𝗲𝘁',
        value:'cute 3d icon set',
    },
    {
        name:'Crayon Drawing',
        value:'crayon drawing',
    },
    {
        name:'Pencil',
        value:'pencil',
    },
    {
        name:'Tattoo Design',
        value:'tattoo design',
    },
    {
        name:'Waifu',
        value:'waifu',
    },
    {
        name:'YuGiOh Art',
        value:'yugioh art',
    },
    {
        name:'Traditional Japanese',
        value:'traditional japanese',
    },
    {
        name:'Nihonga Painting',
        value:'nihonga painting',
    },
    {
        name:'Claymation',
        value:'claymation',
    },
    {
        name:'Furry - Painted',
        value:'furry - painted',
    },
    {
        name:'Furry - Drawn',
        value:'furry - drawn',
    },
    {
        name:'Furry - Cinematic',
        value:'furry - cinematic',
    },
    {
        name:'Cartoon',
        value:'cartoon',
    },
    {
        name:'Cursed Photo',
        value:'cursed photo',
    },
    {
        name:'MTG Card',
        value:'mtg card',
    },
 ])
</script>


<style scoped>
 .btn-gradient {
    background: linear-gradient(180deg, rgba(5, 0, 255, 0.20) 0%, rgba(0, 194, 255, 0.20) 100%), #FFF;
 }
</style>