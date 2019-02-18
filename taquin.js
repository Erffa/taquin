/* à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„
  à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„        /// A L'EXECUTION  ///    à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„
 à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„ */

window.onload = function () { // ??? fond d'ecran alÃ©atoire
	//~ a l'execution ~//

	console.log("hello");

	// fond d'Ã©cran
	document.getElementById("bg_css").innerHTML = "\
	.pic {\
		background-image: url('images/taquin_bg/hokusai"+ randint(1,10) +".jpg');\
	}\
	";	

	//// la musique
	// les sons
	// on charge les sons et la musique
	yoosound = loadSound("sounds/yoo.mp3");
    tatamsound = loadSound("sounds/tatam.mp3");
    clapsound = loadSound("sounds/clap.mp3");
    song = loadSound("sounds/KimioEto.mp3");
    // valeur par dÃ©faut des volumes
    yoosound.volume = document.getElementById("rangeSound").value;
    tatamsound.volume = document.getElementById("rangeSound").value;
    clapsound.volume = document.getElementById("rangeSound").value;
    song.volume = document.getElementById("rangeMusic").value;
    // jouer la musique
    song = playMusic(song);
    song.loop = true;

  	let infos = getInfos();


	grid_width = parseInt( infos["grid_width"]);
	grid_height = parseInt( infos["grid_height"]);
	imagefile = infos["imagefile"];
	numberfile = infos["numberfile"];

	// min_record = parseInt( infos["min_record"]);
	// console.log("min_record : " + min_record);
	max_time = parseInt( infos["max_time"]);

	// on positionne hole :
	resetHOLE_VARS();

	// on affecte au body la fonction keyMove pour utiliser le clavier
	document.getElementsByTagName("body")[0].onkeypress = keyMove;

	// Ã©cran de dÃ©part de jeu, par dÃ©faut
	message_begin_game();	


	
}

function getInfos(){
	/* renvoi en liste les variable de la page php */
	let infos = document.getElementById("info").innerHTML;
	let blocs = infos.split(";");
	let list_infos = [];

	let key;
	let val;

	for (let i=0 ; i<blocs.length ; i++) {
		[key,val] = blocs[i].split(":");
		list_infos[key] = val;
	}
	return list_infos;
}



/* à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„
  à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„    /// LES VARIABLES GLOBALES UTILISEES ///    à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„
 à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„ */


/* variables relatives Ã  la page */
// dimension de la grille construie en php
var grid_width;						// largeur de la grille
var grid_height;					// longueur de la grille
// raffrechir l'Ã©cran
var si_refresh;						// seetinterval
// pour la musique
var yoosound;
var tatamsound;
var clapsound;
//var thissound;
//var song;
let list_tracks = [0, 273, 700, 982, 1234, 1521, 1869] ;
/* variables puzzle */
var imagefile;; //nom (chemin) du file contenant le fond
var numberfile; // nom du file comptenant les numÃ©ros

/* variables relatives au jeu simple */
var gameIsOn = false;				// jeu en cours VF
var time_start;						// temps jeu dÃ©mmare
var time_finish;					// temps jeu fini
var nmbCoup = 0;					// le nombre de chiffres deplace
// le trou //
var hole;							// l'image qui contient la case vide
var hole_row;						// la ligne ou se trouve le trou
var hole_col;						// la colonne ou se trouve le trou

/* variables relatives au challenge */
var challengeIsOn = false;			// challenge en cours ?
var time_challenge_start;			// temps challenge dÃ©marre
var time_challenge_finish;			// temps challenge fini
var time_challenge_temporary;		// temps au dÃ©but d'une partie
var challengeTurn = 1;				// numÃ©ro du tour
var challengeMaxTurn = 4;			// nombre de grilles
var challengeInfo = [];				// tableau contient temps, coup dim par partie
var min_record;						// le record Ã  battre

/* à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„
  à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„     /// FONCTION DE DEMARRAGE ARRET ET FIN DE JEU/CHALLENGE ///      à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„
 à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„ */

function gamePrepare() {
	/* prpepare une nouvelle partie */
	//~ jamais utilsÃ© mais pourrai si au lieu de url build grid

	// si il y avait une partie en cours, on l'arrÃªte
	stopGameOrChallenge();

	message_begin_game();
}


function gameBegin() {
	/* action a realiser pour demarrer un jeu */
	//~ utilisÃ© en dÃ©but de partie simple et Ã  chaque tour d'un challenge 
	//? dÃ©doublÃ© la fonction : sÃ©parÃ© cas jeu simple et challenge ?

	// si challenge en cours , on construit des grilles spÃ©cifiques ??? ajout de random
	if ( challengeIsOn ) {
		switch (challengeTurn) {
			case 1: {
				buildGrid( 2 , 2 , "image0" , "numbers");
				break;
			}
			case 2: {
				buildGrid( 2 , 3 , "image5" , "numbersO");
				break;
			}
			case 3: {
				buildGrid( 3 , 2 , "image6" , "image0");
				break;
			}
			case 4: {
				buildGrid( 3 , 3 , "image2" , "image0");
				break;
			}
		}
	}
	// sinon, remplace dernier carreau par hole pour pouvoir jouer 
	else  {
		// on change le background la derniÃ¨re case
		let allCASE = listCASE();
		let theCASE = allCASE.item( allCASE.length - 1);
		let index_last = grid_height*3 - 3 + grid_width;
		theCASE.style = "background-image: url('images/" + imagefile + "/" + 0 + ".png')";
	}
	
	// on mÃ©lange
	shuffle_times(300);

	// on remet le compteur de coups a 0 
	nmbCoup = 0;

	// on change depart partie
	time_start = (new Date()).getTime();

	// on affiche le temps Ã©coulÃ©
	si_refresh = setInterval(refresh, 50);

	// rend la grille jouable
	gameIsOn = true;
}

function gameFinished() { // old endGame
	/* actions rÃ©alisÃ© si jeu fini */
	//~ en fin partie simple  ou challenge

	// on ferme la grille
	gameIsOn = false;

	// on enregistre le temps fin du jeu
	time_finish = (new Date()).getTime();

	let time_spend = (time_finish - time_start)/1000;// temps passe sur la partie
	
	// stopper l'affichage
	clearInterval(si_refresh);

	// affiche fini et propose de rejouer
	message_ending_game( time_spend , nmbCoup );

	// affiche l'image manquante
	if (!challengeIsOn || challengeTurn == challengeMaxTurn ) {
		let allCASE = listCASE();
		let index_last = grid_height*3 - 3 + grid_width;
		let theCASE = allCASE.item( allCASE.length - 1);
		theCASE.style = "background-image: url('images/" + imagefile + "/" + index_last + ".png')";
	}
}

function challengePrepare() {
	/* prpepare au challenge */
	//~ utilisÃ© quand clique sur challenge 'ici'

	// si il y avait une partie en cours, on l'arrÃªte
	stopGameOrChallenge();

	message_begin_challenge();
}

function challengeBegin() {
	/* action rÃ©alisÃ© au dÃ©part d'un challenge */
	//~ utilisÃ© qd clique sur c est partis

	// on dÃ©marre : tour numÃ©ro 0
	challengeTurn = 1;

	// on reset les infos
	challengeInfo = [];

	// on dÃ©marre le challenge
	challengeIsOn = true;

	// temps au dÃ©but du challenge
	time_challenge_start = (new Date()).getTime();

	// premier tour : temporary vaut debut
	time_challenge_temporary = time_challenge_start;


	gameBegin();
}

function challengeFinished() { // old stopChallenge
	/* action rÃ©alisÃ©e a la fin du challenge */
	// signal
	yoosound = playSound(yoosound);

	// le challenge n'a plu lieu
	challengeIsOn = false;

	// on enregistre le temps fin du challenge (useless??? soome des autres temps plus dÃ©calage)
	time_challenge_finish = (new Date()).getTime();

	
	//let time_spend =  (time_challenge_finish - time_challenge_start)/1000;
	//let time_spend = totaltime()/1000;
	//let score = 50000 - totaltime()

	let challenge_time_spend =  totaltime()/1000;

	// on arrÃªte l'affichage
	clearInterval(si_refresh);

	/**
	if( challenge_time_spend < max_time ) {
		message_ending_challenge_gagne( challenge_time_spend );
	}
	else {
		message_ending_challenge_perdu( challenge_time_spend );
	}
	*/

	messager("\
		Votre temps : " + temps + "<br>\
		<input type='button' value='enregistrer' onclick='message_register("+ temps +")' />\
		<input type='button' value='rejouer' onclick='challengePrepare()' />\
		");
}

function stopGameOrChallenge() { // old stopGame
	/* actions a realiser pour arreter un jeu simple ou un challenge */
	//~ utiliser si on clique sur challenge dans preparation
	//~ gamePrepare aussi mas jms utlisÃ© (sauf si au lieu de lien recharger page build grille ????)

	// arrÃªter le jeu
	gameIsOn = false;

	// arrÃªter le challenge
	challengeIsOn = false;

	// stopper l'affichage
	clearInterval(si_refresh);

	// on range la grille, pour revenir comme Ã  l'initial ????
	//

	// on affiche message d'accueil
	message_begin_game();	
}


/* à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„
  à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„     /// LES FONCTIONS QUI MODIFIENT LE TEXT DE L'ELEMENT MESSAGE ///      à¼„Và¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„
 à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„ */


function messager( message ) { // ????? d'autres params pour couleur (en vrai, creer des classe)
	/* ecrit le message dans la zone pour */
	//~ utilisÃ© dans les fonction message_

	// la zone d'ecriture
	let mess = document.getElementById("message");

	// on affiche le message
	mess.innerHTML = message;

	// rend la zone visible si nÃ©cessaire
	mess.style.visibility = "visible";
}

function message_begin_game() {
	/* message par dÃ©faut et debut partie propose une partie simple */
	//~ utilisÃ© a initialisation (onload) et si on quitte challenge (rÃ©initialise par defaut)
	//~ si prepare un jeu (jamais utilisÃ©)

	messager("\
		DÃ©marrer une partie\
		<br/>\
		<input type='button' value=\"C'est parti !\" onclick='gameBegin()' />\
		");
}

function message_ending_game( time , nbcoups ) { 
	/* message affichÃ© en fin de partie simple */

	messager("\
		Bravo, vous avez fini en "+ nmbCoup +" coups\
		et en "+ time +" sec\
		<input type='button' value='Rejouer ? !' onclick='gameBegin()' />\
		");	
}

function message_begin_challenge() {
	/* message de dÃ©but de challenge */
	//~ apparit qd prepare le challenge

	messager("\
		Cliquez pour dÃ©marrer le challenge\
		<br/>\
		<input type='button' value='Start' onclick='challengeBegin()' />\
		");
}

function message_ending_challenge_gagne( temps ) {
	/* message de fin de challenge gagnÃ© */

	messager("\
		Challenge remportÃ© !<br>\
		Votre temps : " + temps + "<br>\
		<input type='button' value='enregistrer' onclick='message_register("+ temps +")' />\
		<input type='button' value='rejouer' onclick='challengePrepare()' />\
		");
}
function message_ending_challenge_perdu( temps ) {
	/* message de fin de challenge */

	messager("\
		Challenge perdu :(\
		Votre score : " + temps + "\
		<input type='button' value='Nouveau\nchallenge' onclick='challengePrepare()' />\
		");
}
function message_register( temps ) {
	/* message de fin de challenge */

	messager("\
		<form action='taquin.php' method='post'>\
			Bravo ! Rentrez votre nom !!!<br>\
			Name: <input type='text' name='name'><input type='submit'><br>\
			Score: <input type='hidden' name='score' value='"+temps+"'>"+temps+"<br>\
		</form>\
		");
}

function refresh() {
	/* gere l'ecran d'affiche pdt jeu ou challenge */
	//~ looper en setInterval en debut de jeu

	// l'element ou l'on ecrit les messages
	let mess = document.getElementById("message");

	// le temps actuel 
	let time_now = (new Date()).getTime();

	// le temps affiche
	let time_shown;

	// cas de challenge
	if ( challengeIsOn ) {
		// temps du challenge 
		time_shown = round_time( (time_now - time_challenge_start)/1000 );

		// on affiche en changeant html
		messager("\
		Grille numÃ©ro : "+ challengeTurn + "/" + challengeMaxTurn + " <br/>\
		Nombre de coups : "+ nmbCoup + "<br/>\
		Temps : " + time_shown + "<br/>\
		");

		return;
	}
	//cas de jeu simple
	if ( gameIsOn ) {
		// temps du jeu
		time_shown = round_time( (time_now - time_start)/1000 );

		// on affiche en changeant html
		messager("Nombre de coups : "+ nmbCoup + "<br/>Temps : " + time_shown);
	}
}

/* à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„
  à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„    /// DEPLACER LES CASES ///        à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„
 à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„ */


function exchange_and_( case1 , case2 ,soundplay ) {//??? Ã  simplifier
	/* Ã©change deux cases */
	//~ utilisÃ© pour mÃ©langer
	//~ a chaque coup de l'utilisateur

	if (soundplay) {
		clapsound = playSound(clapsound);
	}

	let case1_name = case1.getAttribute('name');
	let case1_img = case1.innerHTML; 

	let case2_name = case2.getAttribute('name');
	let case2_img = case2.innerHTML;

	// intervertissons

	case1.setAttribute('name' , case2_name);
	case1.style = "background-image: url('images/" + imagefile + "/" + case2_name + ".png')";
	case1.innerHTML = case2_img;

	case2.setAttribute('name' , case1_name);
	case2.style = "background-image: url('images/" + imagefile + "/" + case1_name + ".png')";
	case2.innerHTML = case1_img;

	resetHOLE_VARS();
}

/* à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„
   /// Deplacer par l'utilisateur
 à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„*/

function clickAt(ligne , colonne , theCase) {
	/* fonction onclick pour deplacer les cases avec la souris */

	// si on a fini le jeu, on s'arrete la
	if ( !gameIsOn ) {
		return;
	}

	// si le hole est a cÃ´te, on echange les deux :
	if ( _isNearby([ligne , colonne]) ) {
		// on procede Ã  l'echange de hole et la case cliquee
		exchange_and_( theCase , hole , true);
		// un coup en plus :
		nmbCoup++;
		// on regarde si puzzle est fini et agi en consÃ©quence
		endTurn();
	}
}

function keyMove( e ) {
	//console.log("key move");
	/* fonction onkeypress pour deplacer les cases avec le clavier */
	//  I : haut  K : bas  J : gauche  L : droite
	//      105       107       106        108      

	// si on a fini le jeu, on s'arrete la
	if ( !gameIsOn ) {
		return;
	}

	// la touche pressee 
	let keyPressed;
	// on cherche quelle touche est pressÃ©e
	if( e.which )
		keyPressed = e.which;
	// l'index du trou, utile pour savoir ou se trouve l image a deplacer
	let hole_index = getHole_index();
	// la liste de toutes les cases
	let allCASE = listCASE();
	// on choisi le mouvement en fonction de la touche
	switch (keyPressed) { // ???? changer 2 en fonction des dimension de la grille (rajouter var )
		case 107: {// en haut //38
			if ( hole_row>0 ){ // on echange hole avec la case au dessus
				exchange_and_( allCASE.item(hole_index-grid_width) , hole , true);
				nmbCoup++;}
			break;}
		case 105: {// en bas  //40
			if ( hole_row<grid_height-1 ){ // on echange hole avec la case en dessous
				exchange_and_( allCASE.item(hole_index+grid_width) , hole , true);
				nmbCoup++;}
			break;}
		case 108: {// a gauche  //37
			if ( hole_col>0 ){ // on echange hole avec la case a gauche
				exchange_and_( allCASE.item(hole_index-1) , hole , true);
				nmbCoup++;}
			break;}
		case 106: {// a droite  //39
			if ( hole_col<grid_width-1 ){ // on echange hole avec la case a droite
				exchange_and_( allCASE.item(hole_index+1) , hole , true);
				nmbCoup++;}
			break;}
		default: {} // on ne fait rien pour autres touches
	}
	// on regarde si puzzle est fini et agi en consÃ©quence
	endTurn();
	// fin clickAt */
}

function isSolved() {
	/*  true/false le puzzle est il fini */
	//~ utilisÃ© en fin de tour pour vÃ©rifier
	
	// la liste des noms de toutes les cases
	let allNAMES = listCaseNames();
	// longueur de allNAMES (utilise a plusieurs reprises)
	let len = allNAMES.length;

	// si la derniere case n'est pas le blanc
	if (allNAMES[len-1] != 0) {
		return false;
	}
	// si le nom des autres images n'est pas i+1
	for (let i=0 ; i<len-1 ; i++) {
		if (allNAMES[i] != i+1) {
			return false;
		}// on retourne false.
	}//si le test est passe, on retourne enfin true 
	return true;
}

function endTurn() { // ??? still
	/* les actions Ã  faire Ã  la fin d'un coup (vÃ©rifier si rÃ©solu,...) */
	//~ executÃ© aprÃ¨s mvt de l'utilisateur

	// si le puzzle est fini
	if ( isSolved() ) {
		//signal
		tatamsound = playSound(tatamsound);		

		// et si c'Ã©tait dans le cadre du challenge
		if ( challengeIsOn ) {

			// on ajoute les stats Ã  challengeInfo
			challengeInfo.push([ nmbCoup , getTime() - time_challenge_temporary ]);

			// y a t'il d'autre tour ?
			if (challengeTurn < challengeMaxTurn) {

				// tour suivant
				challengeTurn++;

				// nouveau dÃ©part : temporary
				time_challenge_temporary = getTime();

				// jeu suivant
				gameBegin();
			}
			// si tour fini
			else {
				// fini le dernier jeu
				gameFinished();
				// on fini le challenge
				challengeFinished();
			}
		}
		// si pas challenge, partie classique
		else {
			// on arrÃªte la partie
			gameFinished();
		}
	}
}

//// FONCTION UTILISe POUR BOUGER /////

function _isNearby( pos_xy ) {
	/* indique si la position [x,y] est prÃ¨s de hole */
	//~ utilisÃ© dans clic pour savoir si clique fait bouger
	
	if (// en haut ?
		( hole_row+1==pos_xy[0] && hole_col == pos_xy[1] ) ||
		// en bas ?
		( hole_row-1==pos_xy[0] && hole_col == pos_xy[1] ) ||
		// a gauche ?
		( hole_row == pos_xy[0] && hole_col==pos_xy[1]-1 ) ||
		// a droite ?
		( hole_row == pos_xy[0] && hole_col==pos_xy[1]+1 ) )
		// si vrai on retourne true
		return true;
	// sinon, on retourne false (pas de hole nearby)
	return false;	
}

/* à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„
   /// MÃ©langer
 à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„*/

function nearByHole( except ) { //??? Ã  utiliser pour dÃ©placer case ???
	//* retourne la liste des index autour de hole sauf l'exception *//
	//~ utilisÃ© pour mÃ©lange 

	let res = [];  // le rÃ©sultat renvoyÃ©
	let hole_index = getHole_index(); // l'index du hole

	// cherche les dÃ©placements possibles pour le trou autour de lui
	if ( hole_row < grid_height-1 && 
		(except != hole_index+grid_width) )// en bas
		res.push( hole_index+grid_width );
	if ( hole_row > 0 && 
		(except != hole_index-grid_width) )// en haut
		res.push(hole_index-grid_width);
	if ( hole_col < grid_width-1 && 
		(except != hole_index+1) ) 		// a droite
		res.push(hole_index+1);
	if ( hole_col > 0 && 
		(except != hole_index-1) )			// a gauche
		res.push(hole_index-1);

	return res;
}

function randint( min , max) {
	/* renvoi un entier alÃ©atoire entre min et max inclus */
	//~ utilisÃ© au moment du choix de fond d'Ã©cran

	return Math.floor( Math.random()*(max - min + 1) ) + min;
}

function randomPickIn_( array ) {
	/* renvoi un element du aarry alÃ©atoirement */
	//~ utilisÃ© dans mÃ©lange pour choisir case alÃ©atoire autour de hole

	return array[ randint(0 , array.length-1) ];
}

function shuffle_times( n ) { // ??? Ã  simplfier old index vs index 
	/* melange les cases de la grille */
	//~ utilisÃ© en dÃ©but de partie

	// la liste des cases
	allCASE = listCASE();

	// ancien index de hole :
	let old_idx = getHole_index();

	//// premiere intervertion
	// index de la case Ã  changer : (-1) resultat absurde car pas de mÃ©moire
	let index = randomPickIn_( nearByHole( -1 ) );
	// l'image en question
	let lacase = allCASE.item(index);
	// on fait l'Ã©change :
	exchange_and_(lacase , hole , false);

	//// suivante intervertion : on prend en compte l'ancien index
	for (let i=1 ; i<n ; i++) {
		// index de la case Ã  changer :
		index = randomPickIn_( nearByHole( old_idx ) );
		// le nouveau ancien emplacement de hole sera :
		old_idx = index;
		// l'image en question
		lacase = allCASE.item(index);
		// on fait l'Ã©change :
		exchange_and_(lacase , hole , false);
	}
}


/* à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„
  à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„           /// MUSIQUE ///              à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„
 à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„ */


// FONCTION CHARGER/JOUER MUSQUE

function loadSound( mp3 ) {
	/* charge un son */
	//~ utilisÃ© pour initialiser les sons dans onload
	//~ utilisÃ© qd joue un son (destruction plus crÃ©ation de l'ele audio)

	aSound = document.createElement("audio");
	aSound.src = mp3 ;
	aSound.setAttribute("preload", "auto");
	aSound.setAttribute("controls", "none");
	aSound.style.display = "none";
	document.body.appendChild(aSound); 

	return aSound;
}

function playSound( audio_element ) {
	/* permet de jouer un son (si pas muet) */
	//~ utlisÃ© Ã  chaque Ã©change, en fin de partie (ds fin de tour) et en fin de challenge
	//~ utilisÃ© pour jouer la musique
	// ecrire de la forme sound = play(sound) car destruction de l'Ã©lÃ©ment audio
	// code ne prend pas en compte global de la var ???

	if ( !document.getElementById("checkBoxSound").checked ) {
		let src = audio_element.src; 
		audio_element.parentNode.removeChild(audio_element);
		audio_element = loadSound(src);
		audio_element.volume = document.getElementById("rangeSound").value;
		audio_element.play();
	}
	return audio_element;
}

function playMusic( audio_element ) {
	
	if ( !document.getElementById("checkBoxSound").checked ) {
		let src = audio_element.src; 
		audio_element.parentNode.removeChild(audio_element);
		audio_element = loadSound(src);
		audio_element.volume = document.getElementById("rangeSound").value;

		let rand = randint(0, 6);
		let time = list_tracks[rand];
		audio_element.currentTime = time;

		audio_element.play();
	}
	return audio_element;
}

// FONCTIONS ONCLICK DES REGLAGES

function muteMusic() {
	/* mettre musique en muet */

	if (document.getElementById("checkBoxMusic").checked ) {
		song.volume = document.getElementById("rangeMusic").value;
	}
	else {
		song.volume = 0;
	}
}

function muteSound() {
	/* mettre bruitages en muet */

	if (document.getElementById("checkBoxMusic").checked ) {
		yoosound.volume = document.getElementById("rangeSound").value;
	    tatamsound.volume = document.getElementById("rangeSound").value;
	    clapsound.volume = document.getElementById("rangeSound").value;
	}
	else {
		yoosound.volume = 0;
	    tatamsound.volume = 0;
	    clapsound.volume = 0;
	}
}

function rangeMusicVolume() {
	/* gerer volume de la musique */

	if( !document.getElementById("checkBoxMusic").checked ) {
		song.volume = document.getElementById("rangeMusic").value;
	}
}

function rangeSoundVolume() {
	/* gerer volume des bruitages */

	if( !document.getElementById("checkBoxSound").checked ) {
		yoosound.volume = document.getElementById("rangeSound").value;
	    tatamsound.volume = document.getElementById("rangeSound").value;
	    clapsound.volume = document.getElementById("rangeSound").value;
	}
}

/* à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„
  à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„           /// SCORE CHALLENGE STATS ///              à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„
 à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„ */

//??? charly zone ????

function totaltime() {// plus prÃ©cis que chrono dÃ©but et fin cahllenge car temps de construire new grid...
					  // suprimmer les chrono inutles ????
	/* donne temps total du challeenge grÃ¢ce au temps de chaque tour */
	//~ utilisÃ© quand challenge fini

	let tot=0;
	for (let i=0 ; i<4 ; i++) {
		tot += challengeInfo[i][1];
	}
	return tot;
}


/* à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„
  à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„      /// CONSTRUIRE GRID POUR CHALLENGE ///          à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„
 à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„ */


function buildGrid( height , width , fond , number , newGame) {// ??? utilisÃ© aussi pour fanction boutons ??s
	/* construit une nouvelle grille en fonction des params */
	//~ utilisÃ© en dÃ©but de jeu si challenge

	if ( newGame ) {
		gamePrepare();
	}

	// reset var globale
	if ( height != null )
		grid_height = height;

	if ( width != null )
		grid_width = width;


	if ( ( (fond=="image0") && (numberfile!="image0") ) ||
		(fond!="image0" && fond!=null) || ((fond!=number)&&fond!=null&&number!=null) )
		imagefile = fond;

	if ( ( (number=="image0") && (imagefile!="image0") ) ||
		(number!="image0" && number!=null) || ((fond!=number)&&fond!=null&&number!=null) )
		numberfile = number;
	
	if ((imagefile=="image0") && (numberfile=="image0")) {
		imagefile = "image3";
		numberfile = "image0";
	}

	// Ã©criture du nouveau contenu de grid (avant gÃ©nÃ©rer par html/php)
	let newInnerHTML = "";

	for (let i=0 ; i<grid_height ; i++){

		newInnerHTML+="<div class='row'>\n";

		for (let j=0 ; j<grid_width ; j++) {

			//let index_number = (i*width + j + 1)%(width*height);
			//let index_image = (i*3 + j + 1)%(3*height + width - 3); ?????

			let index_number = (i*grid_width + j + 1)%(grid_width*grid_height);
			let index_image = (i*3 + j + 1);
			let index_image_name = index_image%(3*grid_height + grid_width - 3);

			newInnerHTML+="\
	<div name='" + index_image_name + "' class='case' \
style=\"background-image: url('images/" + imagefile + "/" + index_image + ".png');\" \
onclick='clickAt(" + i + "," + j + ",this)'>\n\
		<img name='" + index_number + "' \
src='images/" + numberfile + "/" + index_number + ".png'/>\n\
	</div>\n\
";
		}
		newInnerHTML+="</div>\n";
	}
	document.getElementById("grid").innerHTML = newInnerHTML;

	// on a tout bougÃ©, reset le hole
	resetHOLE_VARS();
}


/* à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„
  à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„           /// DIVERS ///             à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„
 à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„ */


function round_time ( time ) { // useless
	/* tentative infructueuse d'Ã©crire le temps avec dexu dÃ©cimale */
	// ex : afficher 41,50 au lieu de 41,5
	//~ utilisÃ© Ã©cran affichage du chrono

	let dec = Math.floor(time).toString();

	let ced = Math.round((time - Math.floor(time))*100, 2);

	let res = dec.toString() + "." + ced.toString();

	return res;
}

function convINDEX_POSGRID( idx , colonne , ligne ) { // ???? gÃ©rer mauvais index
	/* converti l'index d'un image en [ligne, colonne] */
	//~ utilisÃ© uniquement quand reset hole pour avoir hole_row et hole_col

	let res = []; // variable retournee
	// si resultat improbable
	if ( idx >= ligne*colonne ) {
		alert("de fuck la position ?");
		return;
	}
	// la ligne est le quotient de la div. eucl. de l'index et la colonne
	res[0] = Math.floor(idx/colonne);
	// la colonne est le reste de la meme division
	res[1] = idx%colonne;

	return res;
}

function listCASE() {
	/* retourne la HTML collection des cases de la grille */
	//~ avoir la liste des noms des cases
	//~ redefinir hole
	//~ changer le bg de la derniÃ¨re case en dÃ©but et finde partie
	//~ indiquer la case Ã  Ã©changer dans mÃ©lange et par touche

	return document.getElementsByClassName("case");
}

function listCaseNames() {
	/* liste du nom des cases */
	//~ utilisÃ© pour savoir si puzzle rÃ©solu
	//~ trouver la position de hole

	// on parcours la liste des cases et on ajoute leur nom Ã  la liste retournÃ©e
	let allCASE = listCASE();
	let list = [];
	for (let i=0 ; i<allCASE.length ; i++) {
		list.push( allCASE[i].getElementsByTagName('img')[0].getAttribute('name') )
	}
	return list;
}

function getHole_index() {
	//* renvoi l'index du hole *//
	//~ utilisÃ© pour rÃ©initialisÃ© hole
	//~ utilisÃ© savoir les cases Ã  proximiter de hole
	//~ utilisÃ© dans touche clavier pour savoir quel element Ã©changer
	//~ utilisÃ© dans mÃ©lange pour mÃ©moire de l'ancienne place de hole 

	// on retourne l'index de hole dans la liste des images
	// en cherchant la case de nom "0"
	return listCaseNames().indexOf("0");
}

function getTime() {
	/* renvoi le temps actuel (en ms de puis 1970...) */
	//~ utilisÃ© en dÃ©but et fin de challenge pour avoir le temps de rÃ©solution du puzzle
	//~ utilisÃ© pour afficher chrono pendant partie
	//~ Ã  chaque tour, si jeu rÃ©solu pdt challenge, pour avoir temps de chaque tour

	return (new Date()).getTime();
}

function resetHOLE_VARS() { //???? Ã  simplifier
	/* rÃ©initialsie hole */
	//~ utilisÃ© Ã  l'initialisation pour avoir le hole
	//~ utilisÃ© aprÃ¨s chaque Ã©change et aprÃ¨s construction de la grille

	let hole_index = getHole_index();

	hole = listCASE().item(hole_index);

	let new_pos = convINDEX_POSGRID(hole_index , grid_width , grid_height);

	hole_row = new_pos[0];
	hole_col = new_pos[1];
}

/* à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„
   /// Au revoir
 à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„à¼„*/
