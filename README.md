<div style="background: linear-gradient(135deg, #F4F8FC, #EAF2FB); border-left: 8px solid #1F4E79; padding: 18px 22px; border-radius: 12px; margin-bottom: 24px;">

<h1 style="margin: 0; color: #163A5F;">Documentation technique de l’application “Gestion des stagiaires”</h1>

<p style="margin: 10px 0 6px 0;"><strong>Préparé par :</strong> Siham AALIL, Amine Legdani.</p>
<p style="margin: 6px 0;"><strong>Module :</strong> M105 - Programmer en Javascript.</p>
<p style="margin: 6px 0 0 0;"><strong>Groupes :</strong> DD101, DD102 et DD107</p>

</div>

> <span style="color:#1F4E79;"><strong>Objectif du document :</strong></span> expliquer le fonctionnement du fichier `index.js` en le découpant en <strong>blocs logiques</strong> pour faciliter l’apprentissage et la révision.

Le fichier `index.js` permet de gérer une petite application de **gestion des stagiaires**.  
Il permet notamment de manipuler :

- le **DOM** ;
- les **objets** ;
- les **listes** ;
- les **événements** ;
- l’**affichage dynamique** d’un tableau HTML.

---

<h2 style="color:#1F4E79; border-bottom: 2px solid #D6E4F0; padding-bottom: 6px; margin-top: 30px;">Bloc de déclaration des données : la liste `stagiaires`</h2>


```js
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
```

Ici, on déclare une variable nommée `stagiaires`.

- `const` permet de déclarer une constante ;
- `stagiaires` est un **tableau** ;
- chaque élément du tableau est un **objet** représentant un stagiaire.

<h4 style="color:#3C78D8; margin-top: 18px;">Structure d’un stagiaire</h4>

Chaque stagiaire possède plusieurs propriétés :

- `id`
- `nom`
- `prenom`
- `age`
- `modules`
- `noteEFF`

<h4 style="color:#3C78D8; margin-top: 18px;">Point important</h4>

La propriété `modules` contient elle-même un **tableau d’objets**.  
Cela signifie que nous avons ici une **structure imbriquée** :

- une liste de stagiaires ;
- chaque stagiaire contient une liste de modules.

<h3 style="color:#2E75B6; margin-top: 24px;">Exemple de lecture</h3>

```js
stagiaires[0].nom
```

Cette instruction retourne le nom du premier stagiaire.

```js
stagiaires[0].modules[1].libelle
```

Cette instruction retourne le libellé du deuxième module du premier stagiaire.

<h3 style="color:#2E75B6; margin-top: 24px;">Remarque pédagogique</h3>

> <span style="color:#B26A00;"><strong>À noter :</strong></span> cette remarque aide à mieux comprendre le comportement du programme.

Même si la propriété `modules` existe dans les objets, **elle n’est pas utilisée dans le formulaire ni dans le tableau HTML actuel**.  
Dans cette version de l’application, l’interface manipule surtout : 
- `id`
- `nom`
- `prenom`
- `age`
- `noteEFF`

<div style="height:10px;"></div>

<h2 style="color:#1F4E79; border-bottom: 2px solid #D6E4F0; padding-bottom: 6px; margin-top: 30px;">Bloc de récupération des éléments HTML</h2>


```js
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
```

Ce bloc sert à **sélectionner des éléments HTML** pour pouvoir les manipuler en JavaScript.

<h4 style="color:#3C78D8; margin-top: 18px;">Exemple</h4>

```js
const oNom = document.getElementById("txtnom");
```

Cette ligne récupère l’élément HTML qui possède l’identifiant `txtnom`.

Ensuite, on peut lire ou modifier sa valeur avec :

```js
oNom.value
```

<h3 style="color:#2E75B6; margin-top: 24px;">Pourquoi utiliser `const` ?</h3>

On utilise `const` car la référence vers l’élément HTML ne change pas.

<h3 style="color:#2E75B6; margin-top: 24px;">Remarque pédagogique importante</h3>

> <span style="color:#B26A00;"><strong>Attention :</strong></span> cette partie signale une situation qui peut provoquer des erreurs dans le code.

Dans le fichier HTML actuel :

- `txtid`, `txtnom`, `txtprenom`, `txtage`, `txtnoteEFF` existent bien ;
- mais `sltmodule`, `txtcc1`, `txtcc2`, `txtcc3`, `txtefm` n’existent pas dans le formulaire actuel.

Donc :

- ces variables seront égales à `null` ;
- elles ne provoquent pas d’erreur tant qu’on ne les utilise pas ;
- si on essaie d’accéder à leurs propriétés, une erreur apparaîtra.

<div style="height:10px;"></div>
<h2 style="color:#1F4E79; border-bottom: 2px solid #D6E4F0; padding-bottom: 6px; margin-top: 30px;">Bloc de gestion des événements</h2>

```js
document.addEventListener("DOMContentLoaded", afficher);
document.getElementById("btn_ajouter").addEventListener("click", ajouter_stagiaire)
document.getElementById("btn_modifier").addEventListener("click", modifier_stagiaire)
```

Ce bloc associe des **fonctions** à des **événements**.

<h4 style="color:#3C78D8; margin-top: 18px;">a) `DOMContentLoaded`</h4>

```js
document.addEventListener("DOMContentLoaded", afficher);
```

Cette ligne signifie que la fonction `afficher()` sera exécutée dès que la page HTML sera complètement chargée.

**Intérêt :** le tableau des stagiaires s’affiche automatiquement au démarrage.

<h4 style="color:#3C78D8; margin-top: 18px;">b) Bouton Ajouter</h4>

Quand l’utilisateur clique sur le bouton **Ajouter Stagiaire**, la fonction `ajouter_stagiaire` est exécutée.

<h4 style="color:#3C78D8; margin-top: 18px;">c) Bouton Modifier</h4>

Quand l’utilisateur clique sur le bouton **Modifier**, la fonction `modifier_stagiaire` est exécutée.

<div style="height:10px;"></div>
<h2 style="color:#1F4E79; border-bottom: 2px solid #D6E4F0; padding-bottom: 6px; margin-top: 30px;">Fonction `ajouter_stagiaire(e)`</h2>

```js
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
```

<h3 style="color:#2E75B6; margin-top: 24px;">a) `e.preventDefault()`</h3>

Cette instruction empêche le comportement par défaut associé à l’événement.

**Remarque importante :** dans le HTML actuel, les boutons sont de type `button` et non `submit`.  
Donc, dans cette version précise de la page, le clic ne soumet pas normalement le formulaire.

Ici, `preventDefault()` reste acceptable, mais il n’est **pas indispensable**.

<h4 style="color:#3C78D8; margin-top: 18px;">b) Création d’un nouvel objet</h4>

```js
const nouveau_st = {
    id:Number(oId.value),
    nom:oNom.value,
    prenom:oPrenom.value, 
    age:Number(oAge.value),
    noteEFF:Number(oNoteEFF.value)
}
```

On crée un objet `nouveau_st` à partir des valeurs saisies dans les champs du formulaire.

<h4 style="color:#3C78D8; margin-top: 18px;">c) Ajout dans la liste</h4>

```js
stagiaires.push(nouveau_st)
```

La méthode `push()` ajoute un nouvel élément à la fin du tableau.

<h4 style="color:#3C78D8; margin-top: 18px;">d) Mise à jour de l’affichage</h4>

```js
afficher()
```

Après l’ajout, on réaffiche le tableau pour voir le nouveau stagiaire.

<div style="height:10px;"></div>
<h2 style="color:#1F4E79; border-bottom: 2px solid #D6E4F0; padding-bottom: 6px; margin-top: 30px;">Fonction `modifier_stagiaire(e)`</h2>

```js
function modifier_stagiaire(e){
    e.preventDefault()
    for(let i = 0; i < stagiaires.length ; i++){
        if(Number(oId.value) == stagiaires[i].id){
            stagiaires[i].nom = oNom.value
            stagiaires[i].prenom = oPrenom.value
            stagiaires[i].age = oAge.value
            stagiaires[i].noteEFF = oNoteEFF.value
        }
    }
    afficher()
}
```


Cette fonction permet de modifier un stagiaire déjà existant.

<h4 style="color:#3C78D8; margin-top: 18px;">a) Parcours du tableau</h4>

```js
for(let i = 0; i < stagiaires.length ; i++)
```

On parcourt tous les stagiaires un par un.

<h4 style="color:#3C78D8; margin-top: 18px;">b) Recherche du stagiaire à modifier</h4>

```js
if(Number(oId.value) == stagiaires[i].id)
```

On compare l’identifiant saisi dans le champ `txtid` avec l’identifiant du stagiaire courant.

<h4 style="color:#3C78D8; margin-top: 18px;">c) Mise à jour des propriétés</h4>

Si l’identifiant correspond, les anciennes valeurs sont remplacées par les nouvelles.

<h4 style="color:#3C78D8; margin-top: 18px;">d) Réaffichage</h4>

Après la modification, on réaffiche le tableau avec `afficher()`.

<h3 style="color:#2E75B6; margin-top: 24px;">Point pédagogique</h3>

> <span style="color:#7D3C98;"><strong>Idée clé :</strong></span> ce point met l’accent sur une notion importante pour bien coder en JavaScript.

Le code utilise `==` au lieu de `===`.

- `==` compare les valeurs en autorisant une conversion de type ;
- `===` compare la valeur **et** le type.

Ici, `oId.value` est une chaîne de caractères, alors que `stagiaires[i].id` peut être un nombre.  
Le code fonctionne grâce à la conversion implicite.
<div style="height:10px;"></div>
<h2 style="color:#1F4E79; border-bottom: 2px solid #D6E4F0; padding-bottom: 6px; margin-top: 30px;">Fonction `afficher()`</h2>

```js
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
```

Cette partie construit le contenu HTML du tableau.

<h4 style="color:#3C78D8; margin-top: 18px;">a) Variable `content`</h4>

```js
let content = "";
```

On initialise une chaîne vide.

<h4 style="color:#3C78D8; margin-top: 18px;">b) Construction des lignes du tableau</h4>

Pour chaque stagiaire, on ajoute une ligne `<tr>` avec plusieurs colonnes `<td>`.

<h4 style="color:#3C78D8; margin-top: 18px;">c) Utilisation des template strings</h4>

Le code utilise les **template strings** avec les accents graves :

```js
` ... ${expression} ... `
```

Cela permet d’insérer dynamiquement des valeurs JavaScript dans du HTML.

<h4 style="color:#3C78D8; margin-top: 18px;">d) Injection dans le DOM</h4>

```js
document.getElementById("tdata").innerHTML = content
```

Le contenu généré est placé dans le `<tbody>` du tableau.

Cette technique permet de créer un affichage dynamique à partir des données du tableau `stagiaires`.

<div style="height:10px;"></div>

<h2 style="color:#1F4E79; border-bottom: 2px solid #D6E4F0; padding-bottom: 6px; margin-top: 30px;">Sélection d’une ligne du tableau</h2>


```js
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
```


Après avoir généré le tableau, le script ajoute un événement `click` à chaque ligne.

<h4 style="color:#3C78D8; margin-top: 18px;">a) Parcours des lignes</h4>

```js
for(let i = 1; i < table_stagiaires.rows.length - 1 ; i ++)
```

On commence à `1` car :

- l’indice `0` correspond à l’en-tête (`thead`) ;
- la dernière ligne correspond au `tfoot`.

<h4 style="color:#3C78D8; margin-top: 18px;">b) Ajout d’un clic sur chaque ligne</h4>

Quand une ligne est cliquée :

- toutes les anciennes sélections sont retirées ;
- la ligne cliquée reçoit la classe CSS `row-success`.

<h4 style="color:#3C78D8; margin-top: 18px;">c) Remplissage automatique du formulaire</h4>

```js
remplirInputs(e.currentTarget.children[0].textContent)
```

On récupère l’identifiant affiché dans la première cellule de la ligne, puis on envoie cet identifiant à la fonction `remplirInputs()`.

<h3 style="color:#2E75B6; margin-top: 24px;">Intérêt pédagogique</h3>
Cette partie montre comment :

- parcourir les lignes d’un tableau HTML ;
- ajouter des événements à des éléments créés dynamiquement ;
- utiliser `classList.add()` et `classList.remove()`.

<div style="height:10px;"></div>

<h2 style="color:#1F4E79; border-bottom: 2px solid #D6E4F0; padding-bottom: 6px; margin-top: 30px;">Calcul de la meilleure note</h2>


```js
    let vMaxNote = stagiaires[0].noteEFF;
    for(let i = 1; i < stagiaires.length; i++){
        if(stagiaires[i].noteEFF > vMaxNote ){
            vMaxNote = stagiaires[i].noteEFF
        }
    }
    document.getElementById("txtNoteMax").textContent = vMaxNote
}
```


Cette partie cherche la plus grande note `noteEFF`.

<h4 style="color:#3C78D8; margin-top: 18px;">a) Initialisation</h4>

```js
let vMaxNote = stagiaires[0].noteEFF;
```

On suppose au départ que la meilleure note est celle du premier stagiaire.

<h4 style="color:#3C78D8; margin-top: 18px;">b) Comparaison</h4>

On parcourt ensuite le tableau à partir du deuxième stagiaire.

Si une note est supérieure à `vMaxNote`, elle devient la nouvelle meilleure note.

<h4 style="color:#3C78D8; margin-top: 18px;">c) Affichage dans le `tfoot`</h4>

```js
document.getElementById("txtNoteMax").textContent = vMaxNote
```

La meilleure note est affichée dans le pied du tableau.

<div style="height:10px;"></div>

<h2 style="color:#1F4E79; border-bottom: 2px solid #D6E4F0; padding-bottom: 6px; margin-top: 30px;">Fonction `remplirInputs(id)`</h2>

```js
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
```


Cette fonction remplit automatiquement les champs du formulaire à partir de l’identifiant reçu.

<h4 style="color:#3C78D8; margin-top: 18px;">Fonctionnement</h4>

- on parcourt la liste `stagiaires` ;
- on cherche le stagiaire dont l’`id` correspond ;
- quand on le trouve, on copie ses données dans les champs du formulaire.

<h3 style="color:#2E75B6; margin-top: 24px;">Intérêt pédagogique</h3>

Cette fonction montre comment :

- rechercher un objet dans un tableau ;
- réutiliser des données pour préremplir un formulaire.

<div style="height:10px;"></div>

<h2 style="color:#1F4E79; border-bottom: 2px solid #D6E4F0; padding-bottom: 6px; margin-top: 30px;">Fonction `supprimer_stagiaire(event)`</h2>

```js
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
```

Cette fonction supprime un stagiaire lorsque l’utilisateur clique sur le bouton **supprimer**.

<h3 style="color:#2E75B6; margin-top: 24px;">a) Demande de confirmation</h3>

```js
confirm("Voulez vous supprimer cet enregistrement ?")
```

Avant la suppression, une boîte de dialogue demande à l’utilisateur de confirmer son action.

Cela évite les suppressions accidentelles.

<h3 style="color:#2E75B6; margin-top: 24px;">b) Recherche de la position</h3>

```js
let vIndex = -1;
```

On initialise l’indice à `-1`, ce qui signifie « élément non trouvé ».

<h3 style="color:#2E75B6; margin-top: 24px;">c) Recherche dans le tableau</h3>

Le script compare l’identifiant du bouton cliqué avec l’identifiant de chaque stagiaire.

Lorsqu’il trouve une correspondance :

```js
vIndex = i;
break;
```

- `vIndex = i` mémorise la position ;
- `break` arrête immédiatement la boucle, ce qui évite des comparaisons inutiles.

<h3 style="color:#2E75B6; margin-top: 24px;">d) Suppression sécurisée</h3>

```js
if(vIndex !== -1){
    stagiaires.splice(vIndex, 1);
    afficher();
}
```

La suppression n’a lieu que si l’élément a réellement été trouvé.

`splice(vIndex, 1)` supprime un seul élément à partir de l’indice `vIndex`.

Ensuite, `afficher()` reconstruit le tableau pour mettre l’interface à jour.

<div style="height:10px;"></div>

<div style="height:10px;"></div>

<h3 style="color:#2E75B6; margin-top: 24px;">Exercice de prolongement</h3>

1. Ajouter une **validation des champs** avant l’ajout d’un stagiaire.  
2. Rechercher un stagiaire par **nom**, **prénom** ou **identifiant**.  
3. Mettre à jour les **modules** d’un stagiaire.  
4. Améliorer la fonction de suppression en affichant un message de confirmation plus clair.  
5. Remplacer certaines boucles par des méthodes modernes comme `find()`, `findIndex()`, `filter()` ou `map()`.

<h3 style="color:#2E75B6; margin-top: 24px;">Travail à faire</h3>

> <span style="color:#1F4E79;"><strong>Consigne :</strong></span> réaliser l’activité demandée en appliquant les notions vues dans le document.

> Chercher un stagiaire puis mettre à jour ses modules en appliquant également une validation des champs du formulaire.

<div style="height:10px;"></div>
