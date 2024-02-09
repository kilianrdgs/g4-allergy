<template>
   <div class="page">
      <div class="formulaire">
        <div class="fortnite"></div>
     <h2>Inscription</h2>
     <form @submit.prevent="inscription" style="display: flex; flex-direction: column; gap: 30px;">
       <div class="inputs">
         <input type="text" id="name" placeholder="nom"  v-model="name" required>
         <input type="email" id="email" placeholder="adresse email"  v-model="email" required>
         <input type="password" id="password" placeholder="mot de passe" v-model="password" required>

       </div>
       <button type="submit" class="btn">S'inscrire</button>
     </form>
     <p>déja un compte ? <NuxtLink to="/connexion" style="color: blue; background-color: rgb(70, 199, 0); padding: 5px;">connexion</NuxtLink></p>
   </div>
   </div>
  
 </template>
 
 <script>
 export default {
   name: "Connexion",
   data() {
     return {
       email: "",
       password: "",
     };
   },
   methods: {
  async inscription() {
    try {
      console.log(this.email)
      console.log(this.password)
      const response = await fetch('http://localhost:3001/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: this.name,
            email: this.email,
            password: this.password,
          }),
        });

        if (!response.ok) {
          throw new Error("Erreur lors de l'inscription");
        }

        const data = await response.json();
        console.log(data);
        alert(data.message);
        if (data.status) {
          return navigateTo('/connexion');
        }
      } catch (error) {
        console.error("Erreur lors de l'inscription:", error.message);
      }
    },
    validateForm() {
      
      if (!this.name || !this.email || !this.password) {
        alert("Veuillez remplir tous les champs.");
        return false;
      }

      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        alert("Veuillez saisir une adresse email valide.");
        return false;
      }

      return true; 
    },
  },
};
</script>

 <style scoped>
 .page{
   height: 100vh;
   width: 100vw;
   display: flex;
 }

 h2{
   margin-left: 20px;
   margin-top: 10px;
 }
 .formulaire{
   margin: auto;
   z-index: 100;
   position: relative;
   background-image: url('/textures.webp');
   width: 300px;
   height: 300px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   box-shadow: 21px 5px 15px 15px #3299aec8;
 }

 .inputs{
   margin-left: 30px;
   margin-right: 30px;
   display: flex;
   flex-direction: column;
   gap: 10px;
 }

 .inputs input {
   height: 25px;
   background-color: yellow;
 }

 .btn{
   margin: auto;
   height: 30px;
   width: 70px;
   background-color: black;
 }

 p{
   margin-left: auto;
   margin-right: auto;
   margin-bottom: 20px;

}

.fortnite{
	position: absolute;
  top: 0px;
  left: 0px;
	height: 150px;
	width: 300px;
  transform: translate(0%, -100%);
	background-image: url("/fortnite.png");
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;

}


 </style>
 