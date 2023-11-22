<template>
  <div class="w-full max-w-[64.8125rem] mx-auto">
    <div class="w-full flex items-center justify-between pt-4">
      <nuxt-link to="/">
        <img src="/images/logo.jpg" alt="logo" />
      </nuxt-link>
      <div>
        <select
         @change="changeLang" v-model="selectedLang"
          name=""
          id=""
          class="uppercase border-2 rounded-[0.625rem] border-black px-1 py-1 text-[0.9375rem] font-Inter font-normal"
        >
          <option :value="item.value" v-for="(item,index,key) in langs" :key="key">{{item.name}}</option>

        </select>
      </div>
    </div>
  </div>
</template>


<script setup>
const langs = ref([
  { name: "EN", value: "en" },
  { name: "DE", value: "de" },
  { name: "ES", value: "es" },
  { name: "FR", value: "fr" },
  { name: "IT", value: "it" },
  { name: "JP", value: "jp" },
  { name: "NL", value: "nl" },
  { name: "PT", value: "pt" },
  { name: "RU", value: "ru" },
  { name: "TR", value: "tr" },
]);



const selectedLang = ref("en");
const router = useRouter();
const route = useRoute();
const changeLang = () => {
    router.push({ path: '/' + selectedLang.value });
}

onMounted(() => {
  const url = window.location.href;
  const urlLang = url.split("/")[3];
  if (urlLang) {
    selectedLang.value = urlLang;
  }
})
</script>