<template>

    <div class="form">
        <form @submit.prevent="submitForm" class="gap">
        <input type="text" id="name" v-model="allergy" placeholder="Entrer votre Allergie" required>
        
        <fieldset id="isPrivate" class="inputs">
            <p style="color: black;">Visibilité de l'allergie :</p>
            <input type="radio" v-model="visibility" value="public"> <p style="color: black;">Publique</p>

            <input type="radio" v-model="visibility" value="private"> <p style="color: black;&">Privée</p>
        </fieldset>
        
        <button type="submit" class="btn">Soumettre</button>
        </form>
    </div>

</template>
    
<script lang="ts">

export default {
    data() {
        return {
        allergy: '',
        visibility: 'public'
        }
    },
    methods: {
        async submitForm() {
            const config = useRuntimeConfig()
            const authToken = localStorage.getItem("Authorization")
          if(this.allergy !== '') {
            await $fetch(`${config.public.API_BASE_URL}formulaire`, {
                method: 'POST',
                headers: {
                  Authorization: `Bearer ${authToken}`,
                },
                body: {
                  "name": this.allergy,
                  "isPrivate": this.visibility,
                }
              })
              .then((res) => {
                this.allergy = '';
                this.visibility = 'public';
                alert(res.message)
                navigateTo("/")
              })
          }
        }
    }
}

</script>

<style scoped>
.form{
  background-color: pink;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
  height: 100%;
}

.gap {
  display: flex;
  flex-direction: column;
  gap: 50px;
  
}

input{
  height: 80px;
  font-size: 40px;
  padding-left: 10px;
}

.inputs{
  display: flex;
  width: 50%;
}
.inputs input{
  margin: auto;
  width: 20px;
  height: 20px;
}

.btn{
  height: 100px;
  width: 100px;
  margin: auto;
  border-radius: 100%;
  background-color: red;
  color: white;
  font-size: 20px;
}
</style>