<template>
    <div class="cell">
        <p>{{ allergy.createdBy.name }} : </p>
    <p>{{ allergy.name }}</p>
    <button v-if="currentUser.isAdmin" @click="deleteAllergy(allergy._id)">Supprimer</button>
    </div>

</template>

<script lang="ts">
    export default {
        name: "Allergy",
        props: { 
            allergy: Object,
            currentUser: Object
        },
        methods: {
            async deleteAllergy(id) {
                const authToken = localStorage.getItem("Authorization")
                const config = useRuntimeConfig()
                await $fetch(`${config.public.API_BASE_URL}${id}`, {
                    method: 'DELETE',
                    headers: {
                      Authorization: `Bearer ${authToken}`,
                      "Content-Type": "application/json",
                    },
                })
            }
        }
    }
</script>

<style scoped>
.cell{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    border: 1px solid black;
    background-color: rgb(0, 179, 255);
}

.cell p{
    margin: auto;
    font-size: 25px;
    color: black;
}
</style>