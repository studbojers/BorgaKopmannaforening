
/*
function writeYears() {
    var yr = new Date().getFullYear();
    document.write('1945 - ' + yr.toString());
}
*/

function getBannerAndMenu() {
    
    var banner = "";
    banner += '<div class="brand">Borgå Svenska KöpmannaFörening rf</div>';
    //banner += '<!--<div class="address-bar"><script>writeYears();</script></div>-->';
    //banner += '<div class="address-bar">borgakopmannaforening @ gmail.com</div>';

    banner += '<!-- Navigation -->';
    banner += '<nav class="navbar navbar-default" role="navigation">';
    banner += '    <div class="container">';
    banner += '        <!-- Brand and toggle get grouped for better mobile display -->';
    banner += '        <div class="navbar-header">';
    banner += '            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">';
    banner += '                <span class="sr-only">Toggle navigation</span>';
    banner += '                <span class="icon-bar"></span>';
    banner += '                <span class="icon-bar"></span>';
    banner += '                <span class="icon-bar"></span>';
    banner += '            </button>';
    banner += '            <!-- navbar-brand is hidden on larger screens, but visible when the menu is collapsed -->';
    banner += '            <a class="navbar-brand" href="index.html">Borgå Köpmannaförening</a>';
    banner += '        </div>';
    banner += '        <!-- Collect the nav links, forms, and other content for toggling -->';
    banner += '        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">';
    banner += '            <ul class="nav navbar-nav">';
    banner += '                <li id="aframsida">';
    banner += '                    <a href="index.html">Framsida</a>';
    banner += '                </li>';
    banner += '                <li id="ainfo" class="dropdown">';
    banner += '                    <a class="dropdown-toggle" data-toggle="dropdown" href="info.html">Info<span class="caret"></span></a>';
    banner += '                    <ul class="dropdown-menu">';
    banner += '                        <li><a href="info.html#kontakt">Kontaktuppgifter</a></li>';
    banner += '                        <li><a href="info.html#styrelse">Styrelse</a></li>';
    banner += '                        <li><a href="info.html#bottom">Stadgar</a></li>';
    banner += '                        <li><a href="info.html#bottom">Historik</a></li>';
    banner += '                    </ul>';
    banner += '                </li>';
    banner += '                <li id="averksamhet">';
    banner += '                    <a href="verksamhet.html">Verksamhet</a>';
    banner += '                </li>';
    banner += '                <li id="amedlemsskap" class="dropdown">';
    banner += '                    <a  class="dropdown-toggle" data-toggle="dropdown" href="medlemskap.html">Medlemsskap<span class="caret"></span></a>';
    banner += '                    <ul class="dropdown-menu">';
    banner += '                        <li><a href="medlemskap.html#avgifter">Medlemsavgifter</a></li>';
    banner += '                        <li><a href="medlemskap.html#foretagansokan">Ansökan om företagsmedlemsskap</a></li>';
    banner += '                        <li><a href="medlemskap.html#bottom">Ansökan om personmedlemsskap</a></li>';
    banner += '                        <li><a href="medlemskap.html#bottom">Ansökan till understödande medlem</a></li>';
    banner += '                    </ul>';
    banner += '                </li>';
    banner += '                <li id="abilder">';
    banner += '                    <a href="bilder.html">Bilder</a>';
    banner += '                </li>';
    banner += '                <li>';
    banner += '                    <a href="skyddat/index.html">Logga in</a>';
    banner += '                </li>';
    banner += '            </ul>';
    banner += '        </div>';
    banner += '        <!-- /.navbar-collapse -->';
    banner += '    </div>';
    banner += '    <!-- /.container -->';
    banner += '</nav>';
    return banner;
}

function getBody1()
{
    var body = 'Ansökan om företagsmedlemskap' + escape('\n');
    body += '============================================='  + escape('\n');
    body += 'Företagets namn: ' + $('#foretagnamn').val() + escape('\n');
    body += 'Adress: ' + $('#foretagadress').val() + escape('\n');
    body += 'Postnummer: ' + $('#foretagpostnummer').val() + escape('\n');
    body += 'Ort: ' + $('#foretagort').val() + escape('\n');
    body += 'Telefon: ' + $('#foretagtelefon').val() + escape('\n');
    body += 'E-post:' + $('#foretagepost').val() + escape('\n');
    body += '1. Innehavare/kontaktperson: ' + $('#kontaktperson1').val() + escape('\n');
    body += 'Född: ' + $('#kontaktfdag1').val() + escape('\n');
    body += '2. Innehavare/kontaktperson: ' + $('#kontaktperson2').val() + escape('\n');
    body += 'Född: ' + $('#kontaktfdag2').val() + escape('\n');
    body += 'Bransch: ' + $('#bransch').val() + escape('\n');
    body += 'Antal butiker: ' + $('#butiker').val() + escape('\n');
    body += 'Antal anställda: ' + $('#anstallda').val() + escape('\n');
    body += 'Företaget grundat: ' + $('#grundat').val() + escape('\n');
    
    return body;
}

function getBody2()
{
    var body = 'Ansökan om medlemskap: ' + $('#typ option:selected').val() + escape('\n');
    body += '============================================='  + escape('\n');
    body += 'Namn: ' + $('#namn').val() + escape('\n');
    body += 'Adress: ' + $('#adress').val() + escape('\n');
    body += 'Postnummer: ' + $('#postnummer').val() + escape('\n');
    body += 'Ort: ' + $('#ort').val() + escape('\n');
    body += 'Telefon: ' + $('#telefon').val() + escape('\n');
    body += 'E-post:' + $('#epost').val() + escape('\n');
    body += 'Född: ' + $('#fdag').val() + escape('\n');
    
    return body;
}

function send(item)
{
    document.location.href = item;
}

$(document).ready(function () {
    // get the name of the class of the '#banner-menu' div
    // to set the 'active-navlink' selector to the correct menu item.
    // activeNames are: aframsida, ainfo, averksamhet, amedlemsskap, abilder (one for each page)
    var activeName = $('#banner-menu').attr('class');
    $('#banner-menu').html(getBannerAndMenu());
    $('*').removeClass('active-navlink');
    $('#' + activeName).addClass('active-navlink');
    
    // -- event handlers -- //
    
    $('.navigate-back-to-top').on('click', function () {
        $('html,body').animate({scrollTop:0}, 'slow');
    });
    
    $('#nappi1').on('click', function() {
        var kohde = 'borgakopmannaforening';
        var dohme = 'gmail' + '.' + 'com';
        
        var item = 'mailto:' + kohde + '@' + dohme;
        item += '?subject=' + 'Ansökan om företagsmedlemskap';
        item += '&content-type=text/html';
        item += '&body=' + getBody1();
        
        send(item);
    });
    
    $('#nappi2').on('click', function() {
        var kohde = 'borgakopmannaforening';
        var dohme = 'gmail' + '.' + 'com';
        
        var item = 'mailto:' + kohde + '@' + dohme;
        item += '?subject=' + 'Ansökan om medlemskap: ' + $('#typ option:selected').val();
        item += '&content-type=text/html';
        item += '&body=' + getBody2();
        
        send(item);
    });
    
});


/*
$('#ansokan .dag').datepicker({
    format: "dd.mm.yyyy"
});
*/