<template>
  <div class="w-full flex flex-col items-center space-y-4">
    <div class="w-full flex flex-col items-center space-y-4 pt-4">
      <div
        class="w-full flex md:flex-row flex-col items-center space-y-2 md:space-y-0 md:space-x-4"
      >
        <div class="w-full max-w-[52.125rem] relative">
          <textarea
            v-model="prompt"
            name=""
            id=""
            placeholder="✏️ Enter a description of what you want the AI to create"
            class="p-4 outline-none h-[5.75rem] w-full border-2 border-black rounded-[0.625rem]"
          ></textarea>
          <button @click="GenerateRandomPrompt"
            class="absolute top-6 right-4 bg-[#D9D9D9] w-[2.6875rem] h-[2.6875rem] rounded-[0.625rem] flex"
          >
            <div class="m-auto font-Inter text-2xl font-normal">🎲</div>
          </button>
        </div>
        <button
          :disabled="loading"
          @click="Generate"
          class="btn-gradient flex md:max-w-[11.6875rem] w-full h-[5.75rem] text-center rounded-[0.625rem] border-2 border-black text-black font-Inter text-2xl font-normal hover:scale-105 sm:hover:scale-110 duration-200"
        >
          <span v-if="!loading" class="m-auto">{{pgenerate}}</span>
          <div role="status" class="m-auto" v-else>
            <svg
              aria-hidden="true"
              class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </button>
      </div>

      <div
        class="w-full flex flex-wrap sm:flex-nowrap gap-4 justify-center items-center sm:justify-between max-w-[35rem] mx-auto"
      >
        <div class="flex items-center space-x-3">
          <label
            for="style"
            class="text-black text-[0.9375rem] font-Inter font-normal whitespace-nowrap"
            >{{pstyle}}</label
          >
          <select
            v-model="style"
            name="style"
            id="style"
            class="pl-2 w-[7.3125rem] capitalize border-2 rounded-[0.625rem] border-black px-1 py-1 text-[0.9375rem] font-Inter font-normal"
          >
            <option
              v-for="(style, index, key) in Styles"
              :key="key"
              :value="style.value"
            >
              {{ style.name }}
            </option>
          </select>
        </div>
        <div class="flex items-center space-x-3">
          <label
            for="style"
            class="text-black text-[0.9375rem] font-Inter font-normal"
            >{{pshape}}</label
          >
          <select
            v-model="shape"
            name="style"
            id="style"
            class="pl-2 capitalize border-2 rounded-[0.625rem] border-black px-1 py-1 text-[0.9375rem] font-Inter font-normal"
          >
            <option value="portrait">Portrait</option>
            <option value="square">Square</option>
            <option value="landscape">Landscape</option>
          </select>
        </div>
        <div class="flex items-center space-x-3">
          <label
            for="style"
            class="text-black text-[0.9375rem] font-Inter font-normal whitespace-nowrap"
            >{{pimages}}</label
          >
          <select
            v-model="number"
            name="style"
            id="style"
            class="pl-4 capitalize border-2 rounded-[0.625rem] border-black px-1 py-1 text-[0.9375rem] font-Inter font-normal"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
    </div>
    <div
      class="w-full flex flex-col items-center sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
    >
      <ImageCard
        v-for="(image, index, key) in Images"
        :key="key"
        :image="image"
      />
    </div>
  </div>
</template>


<script setup>
import ImageCard from "~/components/UI/ImageCard.vue";
import axios from "axios";
const randPrompts = ref([]);

const props = defineProps({
  pgenerate: {
    type: String,
    default:'Generate'
  },
  pstyle: {
    type: String,
    default:'🎨 Style'
  },
  pshape:{
    type: String,
    default:'Shape'
  },
  pimages:{
   type: String,
    default:'Number of images'
  }

});

const Styles = ref([
  {
    name: "Cinematic",
    value: "cinematic",
  },
  {
    name: "Painted Anime",
    value: "painted anime",
  },
  {
    name: "Casual Photo",
    value: "casual photo",
  },
  {
    name: "Digital Painting",
    value: "digital painting",
  },
  {
    name: "Concept Art",
    value: "concept art",
  },
  {
    name: "𝗡𝗼 𝘀𝘁𝘆𝗹𝗲",
    value: "no style",
  },
  {
    name: "3D Disney Character",
    value: "3d disney character",
  },
  {
    name: "2D Disney Character",
    value: "2d disney character",
  },
  {
    name: "Disney Sketch",
    value: "disney sketch",
  },
  {
    name: "Concept Sketch",
    value: "concept sketch",
  },
  {
    name: "Painterly",
    value: "painterly",
  },
  {
    name: "Oil Painting",
    value: "oil painting",
  },
  {
    name: "Oil Painting - Realism",
    value: "oil painting - realism",
  },
  {
    name: "Oil Painting - Old",
    value: "oil painting - old",
  },
  {
    name: "Professional Photo",
    value: "professional photo",
  },
  {
    name: " Anime",
    value: " anime",
  },
  {
    name: "Cute Anime",
    value: "cute anime",
  },
  {
    name: "Soft Anime",
    value: "soft anime",
  },
  {
    name: "Fantasy Painting",
    value: "fantasy painting",
  },
  {
    name: "Fantasy Landscape",
    value: "fantasy landscape",
  },
  {
    name: "Fantasy Portrait",
    value: "fantasy portrait",
  },
  {
    name: "Studio Ghibli",
    value: "studio ghibli",
  },
  {
    name: "50s Enamel Sign",
    value: "50s enamel sign",
  },
  {
    name: "Vintage Comic",
    value: "vintage comic",
  },
  {
    name: "Franco-Belgian Comic",
    value: "franco-belgian comic",
  },
  {
    name: "Tintin Comic",
    value: "tintin comic",
  },
  {
    name: "Medieval",
    value: "medieval",
  },
  {
    name: "Pixel Art",
    value: "pixel art",
  },
  {
    name: "Cute Figurine",
    value: "cute figurine",
  },
  {
    name: "3D Emoji",
    value: "3d emoji",
  },
  {
    name: "Illustration",
    value: "illustration",
  },
  {
    name: "Flat Illustration",
    value: "flat illustration",
  },
  {
    name: "Watercolor",
    value: "watercolor",
  },
  {
    name: "1990s Photo",
    value: "1990s photo",
  },
  {
    name: "1980s Photo",
    value: "1980s photo",
  },
  {
    name: "1970s Photo",
    value: "1970s photo",
  },
  {
    name: "1960s Photo",
    value: "1960s photo",
  },
  {
    name: "1950s Photo",
    value: "1950s photo",
  },
  {
    name: "1940s Photo",
    value: "1940s photo",
  },
  {
    name: "1930s Photo",
    value: "1930s photo",
  },
  {
    name: "1920s Photo",
    value: "1920s photo",
  },
  {
    name: "Vintage Pulp Art",
    value: "vintage pulp art",
  },
  {
    name: "50s Infomercial Anime",
    value: "50s infomercial anime",
  },
  {
    name: "3D Pokemon",
    value: "3d pokemon",
  },
  {
    name: "Painted Pokemon",
    value: "painted pokemon",
  },
  {
    name: "2D Pokemon",
    value: "2d pokemon",
  },
  {
    name: "Vintage Anime",
    value: "vintage anime",
  },
  {
    name: "Neon Vintage Anime",
    value: "neon vintage anime",
  },
  {
    name: "Manga",
    value: "manga",
  },
  {
    name: "Fantasy World Map",
    value: "fantasy world map",
  },
  {
    name: "Fantasy City Map",
    value: "fantasy city map",
  },
  {
    name: "Old World Map",
    value: "old world map",
  },
  {
    name: "3D Isometric Icon",
    value: "3d isometric icon",
  },
  {
    name: "Flat Style Icon",
    value: "flat style icon",
  },
  {
    name: "Flat Style Logo",
    value: "flat style logo",
  },
  {
    name: "Game Art Icon",
    value: "game art icon",
  },
  {
    name: "Digital Painting Icon",
    value: "digital painting icon",
  },
  {
    name: "Concept Art Icon",
    value: "concept art icon",
  },
  {
    name: "Cute 3D Icon",
    value: "cute 3d icon",
  },
  {
    name: "Cute 3D Icon 𝗦𝗲𝘁",
    value: "cute 3d icon set",
  },
  {
    name: "Crayon Drawing",
    value: "crayon drawing",
  },
  {
    name: "Pencil",
    value: "pencil",
  },
  {
    name: "Tattoo Design",
    value: "tattoo design",
  },
  {
    name: "Waifu",
    value: "waifu",
  },
  {
    name: "YuGiOh Art",
    value: "yugioh art",
  },
  {
    name: "Traditional Japanese",
    value: "traditional japanese",
  },
  {
    name: "Nihonga Painting",
    value: "nihonga painting",
  },
  {
    name: "Claymation",
    value: "claymation",
  },
  {
    name: "Furry - Painted",
    value: "furry - painted",
  },
  {
    name: "Furry - Drawn",
    value: "furry - drawn",
  },
  {
    name: "Furry - Cinematic",
    value: "furry - cinematic",
  },
  {
    name: "Cartoon",
    value: "cartoon",
  },
  {
    name: "Cursed Photo",
    value: "cursed photo",
  },
  {
    name: "MTG Card",
    value: "mtg card",
  },
]);

const style = ref("cinematic");
const shape = ref("portrait");
const number = ref(1);
const prompt = ref("");
const loading = ref(false);
const Images = ref([]);
const tokenKey = 'gCLp2iRbF4INN9VE0IRaUptNYhQbUmrHM7XrjgkrYN7ESHLDLnujxkFEyW1p';
const lang = ref('en')


const fetchResult = (response) => {
  loading.value = true;
   console.log('fetch',response)
     const headers = {
    "Content-Type": "application/json",
  };
    const data = {
    key: tokenKey,
  };
   if(response.data.status == 'processing'){
    setTimeout(() => {
      axios.post(response.data.fetch_result,data, { headers }).then((res) => {
        loading.value = true
        console.log(res)
        fetchResult(res)
      }).catch((error) => {
        loading.value = false
        console.log(error)
      })
    },10000)
   }else if(response.data.status == "success"){
    Images.value = response.data.output;
    loading.value = false
   }
   else if(response.data.status == "failed"){
    loading.value = false
   }
   
}

const Generate = () => {

  useTrackEvent({
    event: "generate",
    properties: {
      prompt: prompt.value,
      style: style.value,
      shape: shape.value,
      number: number.value,
    },
  });
  
  let width = 512;
  let height = 512;


  if (prompt.value == "") {
    alert("Please enter a description");
    loading.value = false;
    return;
  }
 
  

  if(shape.value == 'portrait'){
     width = 510;
     height = 768;
     width = width + 8 - width % 8;
      height = height + 8 - height % 8;
  }else if(shape.value == 'square'){
     width = 512;
     height = 512;
  }
  else if(shape.value == 'landscape'){
     width = 768;
     height = 512;
  }


  loading.value = true;
  const url = "https://stablediffusionapi.com/api/v3/text2img";
  const headers = {
    "Content-Type": "application/json",
  };
  const data = {
    key: tokenKey,
    prompt: prompt.value + ' ' + style.value,
    negative_prompt: null,
    width: width,
    height: height,
    samples: number.value,
    num_inference_steps: "20",
    seed: null,
    guidance_scale: 7.5,
    safety_checker: "yes",
    multi_lingual: "no",
    panorama: "no",
    self_attention: "no",
    upscale: "no",
    embeddings_model: null,
    webhook: null,
    track_id: null,
  };

  axios
    .post(url, data, { headers })
    .then((response) => {
      console.log(response.data);
      if (response.data.status == "success") {
        Images.value = response.data.output;
      } else if (response.data.status == "error") {
        console.log(response.data["messege"].samples);
        alert(response.data["messege"].samples[0]);
      }else if(response.data.status == "processing"){
        fetchResult(response)
      }
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      loading.value = false;
    });
};


const getRandPrompt = async (lang) => {
    const url = '/prompts/' + lang.value + '_rand.json';
    const response = await fetch(url);
    const data = await response.json();
    randPrompts.value = data
}

const GenerateRandomPrompt = () => {
  const rand = Math.floor(Math.random() * randPrompts.value.length);
  prompt.value = randPrompts.value[rand]
}


  onMounted(() => {
    const url = window.location.href;
    const urlLang = url.split("/")[3];
    if (urlLang) {
      lang.value = urlLang;
    }
    getRandPrompt(lang)
  })
</script>


<style scoped>
.btn-gradient {
  background: linear-gradient(
      180deg,
      rgba(5, 0, 255, 0.2) 0%,
      rgba(0, 194, 255, 0.2) 100%
    ),
    #fff;
}
</style>