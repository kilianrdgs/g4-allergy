<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div>
    <NavBar />
    <h1>Profil</h1>
    <img src="/error.png" />
    <Footer />
  </div>
</template>

<script lang="ts">
export default {
  name: "accueil",
};
</script>

<style></style>
