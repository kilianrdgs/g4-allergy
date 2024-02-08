<template>
    <div v-for="allergy in allergyList">
        <PublicAllergy :allergy="allergy" :currentUser="currentUser" />
    </div>
</template>

<script lang="ts">
    import PublicAllergy from './PublicAllergy.vue'
    export default {
        name: "AllergyList",
        components: { PublicAllergy },
        props: { 
            allergyList: Array,
            currentUser: Object
        }
    }
</script>

<style scoped>
    .list{
        margin: auto;
        max-width: 800px;
        min-height: 500px;
        background-color: rgb(255, 255, 255);
        border-radius: 5%;
        box-shadow: 10px 10px 40px 5px rgb(6, 93, 255);
    }

    .top{
        display: flex;
        justify-content: space-between;
        height: 60px;
        padding-left: 30px;
        padding-right: 30px;
        border-bottom: 3px dashed red;
    }

    .top h2, .top p{
        margin-top: auto;
        margin-bottom: auto;
    }
    .bottom{
        margin: 20px;
        border: 1px solid saddlebrown;
        gap: 20px;
    }
</style>