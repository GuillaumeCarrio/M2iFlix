<template>
    <div>
        <HeaderComponent />
        <router-view />
    </div>
</template>
<script setup>
    import HeaderComponent from './components/HeaderComponent.vue';

    const name = 'App'
</script>
