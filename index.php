<?php

include 'config.php';

$q = isset($_GET['q']) ? $_GET['q'] : '';

if($q == '')
{
    $page = 'home';
}
else if($q == 'contact')
{
    $page = 'contact';
}
else if(preg_match('/^article\/[-_a-z0-9]+$/', $q))
{
    $page = 'article';
}
else
{
    $page = '404';
}

include 'views/partials/header.php';
include 'views/pages/'.$page.'.php';
include 'views/partials/footer.php';
//contenu fichier .htaccess permet de ne plus rentrer le ?q= dans //http://localhost:8888/?q=contact