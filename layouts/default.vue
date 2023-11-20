<template>
    <div class=" w-full px-4 lg:px-0">
        <Header />
        <slot></slot>
    </div>
</template>

<script setup>
  import Header from '~/components/partials/Header.vue'

</script>