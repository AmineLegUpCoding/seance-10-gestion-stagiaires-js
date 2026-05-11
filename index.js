 // Declarations
let stagiaires = [
    {id:'DD-102-001', nom:"Radi", prenom:"Hamza", 
        age:18, modules:[
                        {id:1, libelle:"Algo", cc1:12, cc2:3, cc3:14, EFM:21 },
                        {id:2, libelle:"HTML", cc1:13, cc2:13, cc3:14, EFM:26 }
                        ], noteCC: 14, noteEFF : 12},
    {id:'DD-101-002', nom:"Khalidi", prenom:"Khadija", 
        age:18, modules:[
                        {id:1, libelle:"Algo", cc1:12, cc2:16, cc3:14, EFM:21 },
                        {id:2, libelle:"HTML", cc1:13, cc2:13, cc3:14, EFM:26 }
                        ], noteCC: 17, noteEFF : 15},
    {id:'DD-107-003', nom:"Nouini", prenom:"Yasmine", 
        age:18, modules:[
                        {id:1, libelle:"Algo", cc1:12, cc2:13, cc3:14, EFM:21 },
                        {id:2, libelle:"HTML", cc1:13, cc2:13, cc3:14, EFM:26 }
                        ], noteCC: 19, noteEFF : 13},
    {id:'DD-107-004', nom:"Sabir", prenom:"Mohamed", 
        age:18, modules:[
                        {id:1, libelle:"Algo", cc1:12, cc2:18, cc3:14, EFM:21 },
                        {id:2, libelle:"HTML", cc1:13, cc2:13, cc3:14, EFM:26 }
                        ], noteCC: 17, noteEFF : 14},
]
let filteredStg;
const table_stagiaires = objSelect("table_stagiaires")
const oId = objSelect("txtid"); 
const oNom = objSelect("txtnom"); 
const oPrenom = objSelect("txtprenom"); 
const oAge = objSelect("txtage"); 
const oModule = objSelect("sltmodule"); 
const oCc1 = objSelect("txtcc1"); 
const oCc2 = objSelect("txtcc2"); 
const oCc3 = objSelect("txtcc3");
const oEfm = objSelect("txtefm");
const oNoteEFF = objSelect("txtnoteEFF");
const oNoteCC = objSelect("txtnoteCC");
const oSearch = objSelect("txtChercher")
// Fonction pour cibler un element DOM avec son ID
function objSelect(idobj){
    return document.getElementById(idobj); 
}

// Events
document.addEventListener("DOMContentLoaded",afficher);
document.getElementById("btn_ajouter").addEventListener("click", ajouter_stagiaire)
document.getElementById("btn_modifier").addEventListener("click", modifier_stagiaire)
document.getElementById("btn_chercher").addEventListener("click", chercher)

// Functions
function ajouter_stagiaire(){
    let valid = validation()
    let exist = verifierDoublons()
    if (valid && !exist){
        const nouveau_st = {
        id:oId.value,
        nom:oNom.value,
        prenom:oPrenom.value, 
        age:Number(oAge.value),
        noteEFF:Number(oNoteEFF.value),
        noteCC:Number(oNoteCC.value)
        }
        stagiaires.push(nouveau_st)
        // Générer la table DOM à partir la liste js
        afficher()
    }    
}

//Button Modifier
function modifier_stagiaire(){   
    if(validation()){        
        const updated_st = {
        id:oId.value,
        nom:oNom.value,
        prenom:oPrenom.value, 
        age:Number(oAge.value),
        noteEFF:Number(oNoteEFF.value),
        noteCC:Number(oNoteCC.value)
        };

        update_stg(updated_st);
    }
}

// Fonction pour Modifier en passant le nouveau objet
function update_stg(updated_st){
    stagiaires = stagiaires.map(function(item){
        if(updated_st.id == item.id){
            return updated_st;
        }
        return item;
    })
    afficher()
    /*
    for(let i = 0; i < stagiaires.length ; i++){
        if(id == stagiaires[i].id){
            stagiaires[i].nom = oNom.value
            stagiaires[i].prenom = oPrenom.value
            stagiaires[i].age = oAge.value
            stagiaires[i].noteEFF = oNoteEFF.value
        }
    }*/
}


function afficher(){
    let content = "";
    for(let i=0;i < stagiaires.length;i++){
        let noteG = stagiaires[i].noteEFF * 0.6 + stagiaires[i].noteCC * 0.4
        content += `<tr>
                        <td>${stagiaires[i].id}</td>
                        <td>${stagiaires[i].nom}</td>
                        <td>${stagiaires[i].prenom}</td>
                        <td>${stagiaires[i].age}</td>
                        <td>${stagiaires[i].noteEFF}</td>
                        <td>${stagiaires[i].noteCC}</td>
                        <td>${noteG}</td>
                        <td><button class="btn-delete" 
                              onclick="supprimer_stagiaire('${stagiaires[i].id}')" 
                              id="${stagiaires[i].id}">
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
            oNoteCC.value = stagiaires[i].noteCC
        }
    }
}

function supprimer_stagiaire(idstg){
    if (confirm("Voulez vous supprimer cet enregistrement?") == true) {
        let vIndex = stagiaires.findIndex(function(item){
            return item.id == idstg
        });       
        if(vIndex !== -1){
            stagiaires.splice(vIndex, 1);
            afficher();
        }
    }       
}       
         /*
        let vIndex = -1;
        for(let i=0; i < stagiaires.length; i++) {
            if(idstg == stagiaires[i].id){
                vIndex= i;
                break;
            }
        }  
        */

function validation(){   
    let isValid = true 
    hideErrors()
    // DD-102-003
    const vergifierId = /^[A-Z]{2}-\d{3}-\d{3}$/
    if(!vergifierId.test(oId.value)){
        oId.nextElementSibling.style.display = "block";
        isValid = false
    };
   
    if((oNom.value.trim().length === 0) || (oNom.value.trim().length < 5)){
        oNom.nextElementSibling.style.display = "block";
        isValid = false
    }

    if((oPrenom.value.trim().length === 0) || (oPrenom.value.trim().length < 5)){
        oPrenom.nextElementSibling.style.display = "block";
        isValid = false
    }
    if(Number(oAge.value) < 16 || Number(oAge.value > 30)){
        oAge.nextElementSibling.style.display = "block";
        isValid = false
    }
    
    return isValid
}

function verifierDoublons(){
    for(let i=0; i < stagiaires.length; i++) {
        if(oId.value == stagiaires[i].id){
            alert("Cet enregistrement existe déjà")
            return true
        }
    }
    return false  
}

function hideErrors (){
    oId.nextElementSibling.style.display = "none";
    oNom.nextElementSibling.style.display = "none";
    oPrenom.nextElementSibling.style.display = "none";
    oAge.nextElementSibling.style.display = "none";
}
// Chercher
function chercher(){
    filteredStg = stagiaires.filter((item)=>{
        return item.id == oSearch.value || item.nom == oSearch.value || item.prenom == oSearch.value
    })
    afficherRecherche()
}

function afficherRecherche(){
    let content = "";
    for(let i=0;i < filteredStg.length;i++){
        let noteG = filteredStg[i].noteEFF * 0.6 + filteredStg[i].noteCC * 0.4
        let groupe = filteredStg[i].id.substring(0,6)
        content += `<tr>
                        <td>${filteredStg[i].nom}</td>
                        <td>${filteredStg[i].prenom}</td>
                        <td>${groupe}</td>
                        <td>${noteG}</td>
                    </tr>`
    }
    objSelect("tdataS").innerHTML = content
}

