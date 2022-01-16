<template>
    <div id="main-container">
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'info'
}
</script>

<style>
#main-container {
    flex-grow: 1;
    overflow: auto;
}
</style>