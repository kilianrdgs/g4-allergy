<template>
    <div class="navbar">
  
        <div class="left" style="cursor: grab;">
            <NuxtLink to="/liste">
                <h3 class="link">Liste Publique </h3>
            </NuxtLink>
           
            <NuxtLink to="/profil">
                <h3 class="link">Liste Privée </h3>
            </NuxtLink>
        </div>
    <div class="right" style="cursor: grab;">
        <p class="link">Me deconnecter</p>
    </div>
       
    </div>
</template>

<script lang="ts">
    export default {
        name: "Navbar",
    }
</script>

<style scoped>

*{
    padding: 0px;
    margin: 0px;
}

.navbar{
    display: flex;
    justify-content: space-between;
    background-image: url('/textures.webp');
    height: 60px;
}

.left{
    margin-left: 20px;
    display: flex;
    gap: 20px;
    margin-top: auto;
    margin-bottom: auto;
}


.right{
    margin-right: 20px;
    margin-top: auto;
    margin-bottom: auto;
}

.link{
    color: white;
    font-size: 20px;
    background-color: blue;
}

.link:hover{
    rotate: 36000deg;
    transition: 30s ease-out;
}

</style>