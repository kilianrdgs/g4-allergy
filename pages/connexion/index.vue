<template>
  <div class="page">
    <div class="formulaire">
      <div class="fortnite"></div>
     <h2>Connexion</h2>
     <form @submit.prevent="connexion" style="display: flex; flex-direction: column; gap: 30px;">
       <div class="inputs">
         <input type="email" id="email" placeholder="adresse email" v-model="email" required>
         <input type="password" id="password"  placeholder="mot de passe" v-model="password" required>
       </div>
       <button type="submit" class="btn">Se connecter</button>
     </form>
     <p>pas encore de compte ? <NuxtLink to="/inscription" style="color: blue; background-color: rgb(70, 199, 0); padding: 5px;">inscription</NuxtLink></p>
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
    async connexion() {
      try {
        console.log(this.email); 
        console.log(this.password); 
        const response = await fetch('http://localhost:3001/connexion', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        });

        if (!response.ok) {
          throw new Error('Erreur lors de la connexion');
        }

        const data = await response.json();
        localStorage.setItem("Authorization", data.authToken); 
        this.$router.push("/");
      } catch (error) {
        alert("Mot de passe ou email incorrect");
      }
    },
  },
};
</script>
 

 <style scoped>
 .page{
   height: 100vh;
   width: 100vw;
   display: flex;
   background-image: url('/shrek.png');
    background-size: 120px 120px;
    background-position: bottom;
    background-repeat: repeat;
 }

 h2{
   margin-left: 20px;
   margin-top: 10px;
 }
 .formulaire{
   margin: auto;
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
   width: 90px;
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
 
 