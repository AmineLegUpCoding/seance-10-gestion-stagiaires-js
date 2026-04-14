 // Declarations
const stagiaires = [
    {id:1, nom:"Radi", prenom:"Hamza", 
        age:18, modules:[
                        {id:1, libelle:"Algo", cc1:12, cc2:3, cc3:14, EFM:21 },
                        {id:2, libelle:"HTML", cc1:13, cc2:13, cc3:14, EFM:26 }
                        ], noteEFF : 12},
    {id:2, nom:"Khalidi", prenom:"Khadija", 
        age:18, modules:[
                        {id:1, libelle:"Algo", cc1:12, cc2:16, cc3:14, EFM:21 },
                        {id:2, libelle:"HTML", cc1:13, cc2:13, cc3:14, EFM:26 }
                        ], noteEFF : 15},
    {id:3, nom:"Nouini", prenom:"Yasmine", 
        age:18, modules:[
                        {id:1, libelle:"Algo", cc1:12, cc2:13, cc3:14, EFM:21 },
                        {id:2, libelle:"HTML", cc1:13, cc2:13, cc3:14, EFM:26 }
                        ], noteEFF : 13},
    {id:4, nom:"Sabir", prenom:"Mohamed", 
        age:18, modules:[
                        {id:1, libelle:"Algo", cc1:12, cc2:18, cc3:14, EFM:21 },
                        {id:2, libelle:"HTML", cc1:13, cc2:13, cc3:14, EFM:26 }
                        ], noteEFF : 14},
]

const table_stagiaires = document.getElementById("table_stagiaires")
const oId = document.getElementById("txtid"); 
const oNom = document.getElementById("txtnom"); 
const oPrenom = document.getElementById("txtprenom"); 
const oAge = document.getElementById("txtage"); 
const oModule = document.getElementById("sltmodule"); 
const oCc1 = document.getElementById("txtcc1"); 
const oCc2 = document.getElementById("txtcc2"); 
const oCc3 = document.getElementById("txtcc3");
const oEfm = document.getElementById("txtefm");
const oNoteEFF = document.getElementById("txtnoteEFF");

// Events
document.addEventListener("DOMContentLoaded",afficher);
document.getElementById("btn_ajouter").addEventListener("click", ajouter_stagiaire)
document.getElementById("btn_modifier").addEventListener("click", modifier_stagiaire)

// Functions

function ajouter_stagiaire(e){
    e.preventDefault()
    const nouveau_st = {
        id:Number(oId.value),
        nom:oNom.value,
        prenom:oPrenom.value, 
        age:Number(oAge.value),
        noteEFF:Number(oNoteEFF.value)
    }
    stagiaires.push(nouveau_st)
    afficher()
}

function modifier_stagiaire(e){
    e.preventDefault()
    for(let i = 0; i < stagiaires.length ; i++){
        if(oId.value == stagiaires[i].id){
            stagiaires[i].nom = oNom.value
            stagiaires[i].prenom = oPrenom.value
            stagiaires[i].age = oAge.value
            stagiaires[i].noteEFF = oNoteEFF.value
        }
    }
    afficher()
}

function afficher(){
    let content = "";
    for(let i=0;i < stagiaires.length;i++){
        content += `<tr>
                        <td>${stagiaires[i].id}</td>
                        <td>${stagiaires[i].nom}</td>
                        <td>${stagiaires[i].prenom}</td>
                        <td>${stagiaires[i].age}</td>
                        <td>${stagiaires[i].noteEFF}</td>
                        <td><button class="btn-delete" onclick="supprimer_stagiaire(event)" id=${stagiaires[i].id}>
                            supprimer
                            </button>
                        </td>
                    </tr>`
    }
    document.getElementById("tdata").innerHTML = content

    for(let i = 1; i < table_stagiaires.rows.length - 1 ; i ++){
        table_stagiaires.rows[i].addEventListener("click",  function(e){
            for(let j = 1; j < table_stagiaires.rows.length - 1; j++){
                table_stagiaires.rows[j].classList.remove("row-success");
            }
            e.currentTarget.classList.add("row-success");

            //
            remplirInputs(e.currentTarget.children[0].textContent)
        })
    }

    let vMaxNote = stagiaires[0].noteEFF;
    for(let i = 1; i < stagiaires.length; i++){
        if(stagiaires[i].noteEFF > vMaxNote ){
            vMaxNote = stagiaires[i].noteEFF
        }
    }
    document.getElementById("txtNoteMax").textContent = vMaxNote
}

function remplirInputs(id){
    for(let i=0; i < stagiaires.length; i++){
        if(stagiaires[i].id == id){
            oId.value = stagiaires[i].id
            oNom.value = stagiaires[i].nom
            oPrenom.value = stagiaires[i].prenom
            oAge.value = stagiaires[i].age
            oNoteEFF.value = stagiaires[i].noteEFF
        }
    }
}

function supprimer_stagiaire(event){
    if (confirm("Voulez vous supprimer cet enregistrement ?") == true) {
        let vIndex = -1;
        for(let i=0; i < stagiaires.length; i++) {
            if(event.currentTarget.id == stagiaires[i].id){
                vIndex= i;
                break;
            }
        }  
        if(vIndex !== -1){
            stagiaires.splice(vIndex, 1);
            afficher();
        }
    }    
}
