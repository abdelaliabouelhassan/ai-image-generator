<template>
    <div class=" w-full h-full rounded-[0.625rem] bg-[#D9D9D9] overflow-hidden relative">
        <div class=" w-full h-full">
            <img :src="image" alt="" class=" w-full h-full object-cover">
        </div>
       
        <div class=" w-full flex items-center justify-between absolute bottom-4 px-4">
            <!-- <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                    <path d="M23.25 28.4167C25.3901 28.4167 27.125 26.6818 27.125 24.5417C27.125 22.4016 25.3901 20.6667 23.25 20.6667C21.1099 20.6667 19.375 22.4016 19.375 24.5417C19.375 26.6818 21.1099 28.4167 23.25 28.4167Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.75 19.375C9.8901 19.375 11.625 17.6401 11.625 15.5C11.625 13.3599 9.8901 11.625 7.75 11.625C5.6099 11.625 3.875 13.3599 3.875 15.5C3.875 17.6401 5.6099 19.375 7.75 19.375Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.0955 17.4504L19.9175 22.5913" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23.25 10.3333C25.3901 10.3333 27.125 8.59845 27.125 6.45834C27.125 4.31824 25.3901 2.58334 23.25 2.58334C21.1099 2.58334 19.375 4.31824 19.375 6.45834C19.375 8.59845 21.1099 10.3333 23.25 10.3333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.9046 8.40875L11.0955 13.5496" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button> -->
            <button @click="download">
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                    <path d="M5.16663 15.5V25.8333C5.16663 26.5185 5.4388 27.1756 5.92327 27.66C6.40774 28.1445 7.06482 28.4167 7.74996 28.4167H23.25C23.9351 28.4167 24.5922 28.1445 25.0766 27.66C25.5611 27.1756 25.8333 26.5185 25.8333 25.8333V15.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.6667 7.75001L15.5 2.58334L10.3334 7.75001" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.5 2.58334V19.375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        image: String
    })

     const imageUrl = ref(null);

    onMounted(async () => {
        const response = await fetch(props.image);
        const blob = await response.blob();
        imageUrl.value = URL.createObjectURL(blob);
    });


    const download = () => {
        const a = document.createElement("a");
        a.href = imageUrl.value;
        a.download = "image.jpg";
        a.click();
    };
</script>