<template>
<div class="inscription">
    <form class="newinscription">
        <div class="form-group">
            <label for="email">Adresse mail</label>
            <input type="email" class="form-control" style="margin:5px" id="email" v-model="email" required>
        </div>
        <div class="form-group">
            <label for="username">Pseudo</label>
            <input type="text" class="form-control" style="margin:5px" id="username" v-model="username" required>
        </div>
        <div class="form-group">
            <label for="password">Mot de passe</label>
            <input type="password" class="form-control" style="margin:5px" id="password" v-model="password" required>
        </div>
        <button type="submit" class="btn btn-submit-color" v-on:click="signUpUser">Inscription</button>
    </form>
</div>
</template>

<script>
export default {
    name: 'Inscription',
    data() { return {
        email: '',
        username: '',
        password: '',
        //photo: ''
        }
    },
    methods: {
        signUpUser() {
            let dataForm = JSON.stringify({email: this.email, username: this.username, password: this.password});
            console.log(dataForm)
            async function signUp(dataForm) {
                try {
                let response = await fetch("http://localhost:3000/api/user/signup", {
                    method: 'POST',
                    body: dataForm,

                    headers: {
                        'content-type': 'application/json'
                    },
                });
                    if (response.ok) {
                        let responseId = await response.json();
                        console.log(responseId);
                    
                    } else {
                        console.error('Retour du serveur : ', response.status);
                    }
                } catch (e) {
                console.log(e);
                }
            }
            signUp(dataForm)
            window.location.href="http://localhost:8080/#/login";
        }
    }
}
</script>

<style scoped>

.from-group{
    margin: 10px;
}
.btn-submit-color{
    background-color: #bbbaf3;
    color: black;
    font-weight: bold;
}
.btn-submit-color:hover{
            font-weight:bold;
            background-color: #f0e8c7;
            color:#1e49d6;
}

</style>