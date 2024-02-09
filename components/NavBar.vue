<template>
    <div class="navbar">

        <div class="left" style="cursor: grab;">
            <NuxtLink to="/">
                <p class="link">Liste Publique </p>
            </NuxtLink>
           
            <NuxtLink to="/profil">
                <p class="link">Liste Privée </p>
            </NuxtLink>
        </div>
    <div class="right" style="cursor: grab;">
      <NuxtLink to="/formulaire"><p class="link">Ajouter une allergie</p></NuxtLink>
        <p class="link" @click="deconnect">Me deconnecter</p>
    </div>
       
    </div>
</template>

<script lang="ts">
    export default {
        name: "Navbar",
        methods : {
            deconnect(){
                localStorage.removeItem("Authorization")
                window.location.reload()
            }
        }
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
    display: flex;
    margin-right: 20px;
    margin-top: auto;
    margin-bottom: auto;
    gap: 20px;
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