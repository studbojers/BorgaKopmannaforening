
/*
function writeYears() {
    var yr = new Date().getFullYear();
    document.write('1945 - ' + yr.toString());
}
*/

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

/*
function getBodyToo()
{
    return document.getElementById('mailbody').innerHTML;
}
*/

$(document).ready(function () {
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
        
        document.location.href = item;
    });
    
    $('#nappi2').on('click', function() {
        var kohde = 'borgakopmannaforening';
        var dohme = 'gmail' + '.' + 'com';
        
        var item = 'mailto:' + kohde + '@' + dohme;
        item += '?subject=' + 'Ansökan om medlemskap: ' + $('#typ option:selected').val();
        item += '&content-type=text/html';
        item += '&body=' + getBody2();
        
        document.location.href = item;
    });
    
});


$('#ansokan .dag').datepicker({
    format: "dd.mm.yyyy"
});
