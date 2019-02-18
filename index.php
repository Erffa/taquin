

<!DOCTYPE html>
<html>
<head>
  <title>Taquin</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf8">
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="taquin.css">
  <link href='https://fonts.googleapis.com/css?family=Merienda' rel='stylesheet'>
  <script language="javascript" src="taquin.js" charset="UTF-8"></script>
  <link rel="shortcut icon" href="images/site_icon.ico" type="image/x-icon" />
  <style id="bg_css">
    .bg_pic {
      background-image: url('images/taquin_bg/hokusai1.jpg');
    }
  </style>
</head>
<body class="bg pic">

<!-- la musique pour le site en ligne -->
<!-- <embed id="embed" 
style="visibility: hidden;"
src="http://www.youtube.com/embed/uorVoWL0CuM?autoplay=1" 
> -->

<!-- div caché pour transmettre les infos au JS -->
<!-- <div id="info" style="visibility:hidden;">grid_width:3;grid_height:3;imagefile:image5;numberfile:image0;min_record:</div>max_time -->
<div id="info" style="visibility:hidden;">grid_width:3;grid_height:3;imagefile:image5;numberfile:image0;max_time:</div>

<!-- Le titre -->
<h1>LE TAQUIN - 智慧盤 </h1>

<!-- Panneau gauche de réglage de la grille pour partie normale + retour acceuil -->
<div id="leftPanel">
  <div class="boxTitle"><u>Réglages pour Partie</u></div>

  <!-- Propose les fond et images pour partie personnalisée -->
  <div id="boxGallery">
    <label class="title_gallery">Choix de l'image :</label>
    <br/>

    <div class="liste_images">
      
        <a onclick="buildGrid(null,null,'image0',null,true)">
        <img class='mini_icon' src='images/gallery/image0.png'  />
        </a>
        <a onclick="buildGrid(null,null,'image1',null,true)">
        <img class='mini_icon' src='images/gallery/image1.png'  />
        </a>
        <a onclick="buildGrid(null,null,'image2',null,true)">
        <img class='mini_icon' src='images/gallery/image2.png'  />
        </a>
        <a onclick="buildGrid(null,null,'image3',null,true)">
        <img class='mini_icon' src='images/gallery/image3.png'  />
        </a>
        <a onclick="buildGrid(null,null,'image4',null,true)">
        <img class='mini_icon' src='images/gallery/image4.png'  />
        </a>
        <a onclick="buildGrid(null,null,'image5',null,true)">
        <img class='mini_icon' src='images/gallery/image5.png'  />
        </a>
        <a onclick="buildGrid(null,null,'image6',null,true)">
        <img class='mini_icon' src='images/gallery/image6.png'  />
        </a>    </div>

    <br/>
    <hr>

    <label class="title_gallery">Affichage des numéros :</label>
    <br/>

    <div class="liste_images">
      
      <a onclick="buildGrid(null,null,null,'image0',true)" >
          <img class='mini_icon' src='images/gallery/image0.png' />
        </a>
      <a onclick="buildGrid(null,null,null,'numbers',true)" >
        <img class='mini_icon' src='images/numbers/8.png' />
      </a>
      <a onclick="buildGrid(null,null,null,'numbersO',true)" >
        <img class='mini_icon' src='images/numbersO/8.png' />
      </a>
          </div>
  </div><!-- fin gallery -->

  <hr>

  <!-- Propose les dimensions de la grille -->
  <div id="boxDim"> 
    Choisir une autre dimension :<br/>
    <table>
      <tr>
        <td><input type='button' value='2x2' onclick='buildGrid(2,2,null,null,true)' /></td>
        <td><input type='button' value='2x3' onclick='buildGrid(2,3,null,null,true)' /></td>
      </tr>
      <tr>
        <td><input type='button' value='3x2' onclick='buildGrid(3,2,null,null,true)' /></td>
        <td><input type='button' value='3x3' onclick='buildGrid(3,3,null,null,true)' /></td>
      </tr>
    </table>
  </div>

  <hr>

  <!-- Pour retourner à l'acceuil -->
  <input type="button" value="◄ Accueil" OnClick="window.location.href='index.html'" />

</div> <!-- fin du menu de gauche -->

<!-- La grille de jeu -->
<div class="middle">
  <div id="grid">
    <div class='row'>

        <div name='1' class='case' style="background-image: url('images/image5/1.png');"
        onclick='clickAt(0,0,this)'>
          <img name='1' src='images/image0/1.png'>
        </div>
        

        <div name='2' class='case' style="background-image: url('images/image5/2.png');"
        onclick='clickAt(0,1,this)'>
          <img name='2' src='images/image0/2.png'>
        </div>
        

        <div name='3' class='case' style="background-image: url('images/image5/3.png');"
        onclick='clickAt(0,2,this)'>
          <img name='3' src='images/image0/3.png'>
        </div>
        
</div>
<div class='row'>

        <div name='4' class='case' style="background-image: url('images/image5/4.png');"
        onclick='clickAt(1,0,this)'>
          <img name='4' src='images/image0/4.png'>
        </div>
        

        <div name='5' class='case' style="background-image: url('images/image5/5.png');"
        onclick='clickAt(1,1,this)'>
          <img name='5' src='images/image0/5.png'>
        </div>
        

        <div name='6' class='case' style="background-image: url('images/image5/6.png');"
        onclick='clickAt(1,2,this)'>
          <img name='6' src='images/image0/6.png'>
        </div>
        
</div>
<div class='row'>

        <div name='7' class='case' style="background-image: url('images/image5/7.png');"
        onclick='clickAt(2,0,this)'>
          <img name='7' src='images/image0/7.png'>
        </div>
        

        <div name='8' class='case' style="background-image: url('images/image5/8.png');"
        onclick='clickAt(2,1,this)'>
          <img name='8' src='images/image0/8.png'>
        </div>
        

        <div name='0' class='case' style="background-image: url('images/image5/9.png');"
        onclick='clickAt(2,2,this)'>
          <img name='0' src='images/image0/0.png'>
        </div>
        
</div>
 
  </div>
</div> <!-- fin de la grille -->

<!-- panneau droit d'affichage des scores et reglage sonore -->
<div id="rightPanel">


  <!-- le leader board 
  <div id="topFive">
    <u>Top 5</u>

    <br/><br/>

    <table id="theTop">
    
    </table>

  </div>
  -->

  <hr>

  <!-- pour lancer un challenge -->
  <div id="challenge">
    <br>
    LANCER LE CHALLENGE 
    <br>
    <input type='button' value="LET'S GO"  style='text-decoration:none;' onclick='challengePrepare()' />
    <br><br>
  </div>

  <hr>

  <!-- Les réglages augio : vomlume/muet pour musique et bruitages -->
  <div id="boxAudio">
    <div class="boxTitle"><u>Réglages audio</u></div>
    <div>
      <label>Musique</label>
      <input id="checkBoxMusic" type="checkbox" onmouseup="muteMusic()">
      <input id="rangeMusic" type="range" onmouseup="rangeMusicVolume()" min=0 max=1 step=0.01>
    </div>
    <div>
      <label>Effets sonores</label>
      <input id="checkBoxSound" type="checkbox" onmouseup="muteSound()">
      <input id="rangeSound" type="range" onmouseup="rangeSoundVolume()" min=0 max=1 step=0.01>
    </div>
  </div>

</div> <!-- fin de score -->

<!-- zone d'écriture message accompagne joueur -->
<div id="message">
  <!-- on écrit dedans grâce à la fonction meassger du JS -->
</div>

</body>
</html>
