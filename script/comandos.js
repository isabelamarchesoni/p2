        function logar(){
            var login = document.getElementById('Login').value;
            var senha = document.getElementById('Senha').value;

            if(login == "Isabela" && senha == "Breno"){
                alert('Sucesso');
                location.href = "home.html";
            }
            else{
                alert('Usuario ou senha incorrretos');
            }
        }