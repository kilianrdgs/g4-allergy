<template>
    <div class="footer">
        <div class="img">
            <p>copyright</p>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Footer",
    }
</script>

<style scoped>

.footer{
    position: absolute;
    bottom: 0px;
    height: 100px;
    width: 100%;
    background-image: url('/shrek.png');
    background-color: rgb(72, 255, 0);
    background-size: contain;
    background-position: bottom;
    background-repeat: repeat-x;
}

</style>