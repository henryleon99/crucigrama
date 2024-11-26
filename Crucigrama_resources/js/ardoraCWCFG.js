//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFFFF"; colorButton="#02C4B0"; colorText="#000000"; colorSele="#5C146B";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Bien hecho!"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q3J1Y2lncmFtYQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["","","","Ug==","QQ==","RA==","SQ==","QQ==","Qw==","VA==","SQ==","Vg==","Tw==","",""],["","","","","","","Uw==","","","","","","","",""],["","","Qw==","QQ==","VA==","SQ==","Tw==","Tg==","","","","","","",""],["","","","","","","VA==","","","","","","","",""],["","","","","QQ==","VA==","Tw==","TQ==","SQ==","Qw==","Tw==","","","",""],["","","","","","","UA==","","Tw==","","","","","",""],["","Tg==","VQ==","Qw==","TA==","RQ==","Tw==","","Tg==","","","","","",""],["","","","","","Uw==","","","SQ==","","","","","",""],["","","","","","VA==","","","Wg==","","","SQ==","","",""],["","","","","","QQ==","","","QQ==","Tg==","SQ==","Tw==","Tg==","",""],["","","","","","w5E=","","","Qw==","","","Tg==","","",""],["VQ==","Ug==","QQ==","Tg==","SQ==","Tw==","","","SQ==","","","","","",""],["","","","","","","","","Tw==","","","","","",""],["","","","","","","","","Tg==","","","","","",""],["","","","","","","","","","","","","","",""]];
var x1=[4,3,5,2,9,1,7,9,6,12];
var y1=[1,3,5,7,10,12,1,5,7,9];
var x2=[13,8,11,7,13,6,7,9,6,12];
var y2=[1,3,5,7,10,12,7,14,12,11];
var imaCW=["","","","","","","","","",""];
var audioCW=["","","","","","","","","",""];
var defCW=["Isotopo con núcleo inestable","Atomo que ha perdido electrones","Número que representa la cantidad de protones y electrones de un átomo","Parte del átomo donde se encuntran los neutrones y protones.","Átomo que ha ganado electrones","Elemento radiactivo que se utiliza para construir bombas atómicas","Átomo que posee el mismo número átomico que otro, pero con diferente número másico.","Proceso de perdida o ganancia de electrones.","Elemento químico que se emplea para soldar componentes electronicos.","Átomo que posee carga positiva o negativa"];
var altCW=["","","","","","","","","",""];
var colNum=15;
var rowNum=15;
