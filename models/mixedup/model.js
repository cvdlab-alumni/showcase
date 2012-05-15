// sedia a sdraio
var gradi = Math.PI/180;
var alpha = 45*gradi;
var piedibracciolo = SIMPLEX_GRID([[0.05],[-1,0.05,-(2-0.5),0.05],[0.65]]);
var bracciolo = SIMPLEX_GRID([[0.05],[-1,0.05,(2-0.5),0.05],[-0.6,0.05]]);
var braccioli = STRUCT([bracciolo,piedibracciolo,T([0])([0.65])(bracciolo),T([0])([0.65])(piedibracciolo)]);

braccioli = COLOR(simplexn.vector.scalarMul( 1/255 , [139, 69, 19]))(braccioli);


var telaio1 = SIMPLEX_GRID([[-0.5/3-0.025,0.05,-0.5/3-0.025,0.05],[1],[-0.40,0.01]]);


var stecche1 = SIMPLEX_GRID([[-0.05,0.6],REPLICA(10)([0.06,-0.04]),[-(0.4+0.01),[0.02]]]);

stecche1 = COLOR(simplexn.vector.scalarMul( 1/255 , [240,240,240]))(stecche1);
var reclinabile = STRUCT([stecche1,telaio1]);


var telaio2 = SIMPLEX_GRID([[-0.5/3-0.025,0.05,-0.5/3-0.025,0.05],[2],[-0.40,0.01]]);

var stecche2 = SIMPLEX_GRID([[-0.05,0.6],REPLICA(20)([0.06,-0.04]),[-(0.4+0.01),[0.02]]]);

stecche2 = COLOR(simplexn.vector.scalarMul( 1/255 , [240,240,240]))(stecche2);

var fisso = T([1])([1])(STRUCT([stecche2,telaio2]));

var reclinabile = T([1,2])([1+0.05,0.45-0.02])(R([1,2])([-alpha])(T([1,2])([-1,-0.45])(reclinabile)));

var sdraio = STRUCT([braccioli,reclinabile,fisso]);


var sdraio1 = T([0,1,2])([24,2,1])(R([0,1])([90*gradi])(sdraio));
var sdraio2 = T([0,1,2])([24,6,1])(R([0,1])([90*gradi])(sdraio));

var duesdraio = STRUCT([sdraio1,sdraio2]);

//base alta 1m con fondo piscine di 10cm e buco scalette
var base = STRUCT([SIMPLEX_GRID([[39],[1],[1]]),
                   SIMPLEX_GRID([[1,-20,15.45],[-1,1],[1]]),
                   SIMPLEX_GRID([[-21,15.45],[-2,2],[1]]),
                   SIMPLEX_GRID([[-21,31],[-4,1],[1]]),
                   SIMPLEX_GRID([[-21,26,-4,1],[-5,1],[1]]),
                   SIMPLEX_GRID([[-21,26],[-6,4],[1]]),
                   SIMPLEX_GRID([[-1,46],[-10,7],[1]]),
                   SIMPLEX_GRID([[-1,8],[-17,5],[1]]),
                   SIMPLEX_GRID([[-1,20],[-1,9],[0.1]]), //fondo piscinaGrande
                   SIMPLEX_GRID([[-47,4],[-5,11],[0.1]]) //fondo piscinaPiccola
                   ]);
base = COLOR([1,1,0.5])(base);


//acqua piscine alta 70cm
var piscine = STRUCT([BOUNDARY(SIMPLEX_GRID([[-1,20],[-1,9],[-0.1,0.7]])), //piscinaGrande
                      BOUNDARY(SIMPLEX_GRID([[-47,4],[-5,11],[-0.1,0.7]])) //piscinaPiccola
                      ]);
piscine = COLOR([0,0.8,0.9,0.9])(piscine);

//muri alti 4m (3m più alti della base)
var muroPiscinaGrande = STRUCT([SIMPLEX_GRID([[-0.8,7.2],[-0.8,0.2],[-1,3]]),
                                SIMPLEX_GRID([[-0.8,0.2],[-1,21.2],[4]]),
                                SIMPLEX_GRID([[-1,8.2],[-22,0.2],[4]]),
                                SIMPLEX_GRID([[-9,0.2],[-16.8,5.2],[4]])
                                ]);
var muroPiscinaPiccola = STRUCT([SIMPLEX_GRID([[-37.8,13.2],[-16,0.2],[4]]),
                                 SIMPLEX_GRID([[-51,0.2],[-5,11.2],[4]]),
                                 SIMPLEX_GRID([[-41.4,9.8],[-4.8,0.2],[-1,3]])
                                 ]);
var altriMuri = STRUCT([SIMPLEX_GRID([[-7.6,19],[-15,0.2],[-1,3]]), //muroPanche
                        SIMPLEX_GRID([[-25.2,8.6],[-7.2,0.2],[-1,3]]), //muroInternoSx
                        SIMPLEX_GRID([[-37.2,5.4],[-11.4,0.2],[-1,3]]) //muroInternoDx
                        ]);
var muri = STRUCT([muroPiscinaGrande,muroPiscinaPiccola,altriMuri]);
muri = COLOR([0.9,0.9,1])(muri);


//muretti alti 3m sopra la base
var muretti = STRUCT([SIMPLEX_GRID([[-1,6.1],[-16.9,0.1],[-1,3]]), //murettoA
                      SIMPLEX_GRID([[-7.9,1.1],[-16.9,0.1],[-1,3]]), //murettoB
                      SIMPLEX_GRID([[-4.9,0.1],[-17,2.1],[-1,3]]), //murettoC
                      SIMPLEX_GRID([[-4.9,0.1],[-19.9,2.1],[-1,3]]), //murettoD
                      SIMPLEX_GRID([[-5,0.8],[-20.7,0.1],[-1,3]]), //murettoE
                      SIMPLEX_GRID([[-6.6,2.4],[-20.7,0.1],[-1,3]]), //murettoF
                      SIMPLEX_GRID([[-7,0.1],[-21.6,0.4],[-1,3]]) //murettoG
                      ]);
muretti = COLOR([0.9,0.9,1])(muretti);


//scalini
var scaDx = 0.35;
var scaDz = 1/7;
var scale = [];
for (var i = 0; i <= 6; i++) {
  scale[i] = T([0,2])([(scaDx * i),(-scaDz * i)])(SIMPLEX_GRID([[-36.45,0.35],[-1,3],[-6/7,1/7]]));
};
scalinata = STRUCT(scale);
scalinata = COLOR([1,1,0.5])(scalinata);


//colonne
var colDx = 19/3;
var colonnato = STRUCT([SIMPLEX_GRID([[-25.95,0.1,-(colDx - 0.1),0.1,-(colDx - 0.1),0.1,-(colDx - 0.1),0.1],[-6.85,0.1,-0.1,0.1,-6.7,0.1,-0.1,0.1],[-1,3]]),
                        SIMPLEX_GRID([[-25.85,0.3,-(colDx - 0.3),0.3,-(colDx - 0.3),0.3,-(colDx - 0.3),0.3],[-6.95,0.1,-6.9,0.1],[-1,3]])
                        ]);
colonnato = COLOR([0.1,0.1,0.1])(colonnato);


//panche
var panche = STRUCT([SIMPLEX_GRID([[-7.8,2.2,2.2,2.2,2.2,2.2,2.2,2.2],[-14.2,0.5],[-1.3,0.2]]),
                     SIMPLEX_GRID([[-7.9,0.15,-1.8,0.3,-1.9,0.3,-1.9,0.3,-1.9,0.3,-1.9,0.3,-1.9,0.3,-1.8,0.15],[-14.3,0.3],[-1,0.3]])
  ]);
panche = COLOR([1,1,0.3])(panche);


//vetrate
var grigliaVetrataSud = STRUCT([SIMPLEX_GRID([[-30,3.8,3.8,3.8],[-4.9,0.1],[-1,0.1,-2.8,0.1]]),
                                SIMPLEX_GRID([[-30,0.1,-3.65,0.1,-3.7,0.1,-3.65,0.1],[-4.9,0.1],[-1.1,2.8]])
                                ]);
var pannelliVetrataSud = SIMPLEX_GRID([[-30.1,3.65,-0.1,3.7,-0.1,3.65],[-4.94,0.02],[-1.1,2.8]]);
pannelliVetrataSud = COLOR([0.5,1,1,0.5])(BOUNDARY(pannelliVetrataSud));
grigliaVetrataSud = COLOR([0.1,0.1,0.1])(grigliaVetrataSud);

var grigliaVetrataNord = STRUCT([SIMPLEX_GRID([[-30,1,1,1,1,1,1,1,1,1,1],[-13.6,0.1],[-1,0.1,-2.8,0.1]]),
                                 SIMPLEX_GRID([[-30,0.1,-0.85,0.1,-0.9,0.1,-0.9,0.1,-0.9,0.1,-0.9,0.1,-0.9,0.1,-0.9,0.1,-0.9,0.1,-0.9,0.1,-0.85,0.1],[-13.6,0.1],[-1.1,2.8]])
                                 ]);
var pannelliVetrataNord = SIMPLEX_GRID([[-30.1,0.85,-0.1,0.9,-0.1,0.9,-0.1,0.9,-0.1,0.9,-0.1,0.9,-0.1,0.9,-0.1,0.9,-0.1,0.9,-0.1,0.85],[-13.64,0.02],[-1.1,2.8]]);
pannelliVetrataNord = COLOR([0.5,1,1,0.5])(BOUNDARY(pannelliVetrataNord));
grigliaVetrataNord = COLOR([0.1,0.1,0.1])(grigliaVetrataNord);

var vEst = 7.5/8;
var grigliaVetrataEst = STRUCT([SIMPLEX_GRID([[-44.65,0.1],[-6.75,vEst,vEst,vEst,vEst,vEst,vEst,vEst,vEst],[-1,0.1,-2.8,0.1]]),
                                SIMPLEX_GRID([[-44.65,0.1],
                                              [-6.75,0.1,-(vEst-0.15),0.1,-(vEst-0.1),0.1,-(vEst-0.1),0.1,-(vEst-0.1),0.1,-(vEst-0.1),0.1,-(vEst-0.1),0.1,-(vEst-0.1),0.1,-(vEst-0.15),0.1],
                                              [-1.1,2.8]])
                                ]);
var pannelliVetrataEst = SIMPLEX_GRID([[-44.69,0.02],
                                       [-6.85,(vEst-0.15),-0.1,(vEst-0.1),-0.1,(vEst-0.1),-0.1,(vEst-0.1),-0.1,(vEst-0.1),-0.1,(vEst-0.1),-0.1,(vEst-0.1),-0.1,(vEst-0.15)],
                                       [-1.1,2.8]]);
pannelliVetrataEst = COLOR([0.5,1,1,0.5])(BOUNDARY(pannelliVetrataEst));
grigliaVetrataEst = COLOR([0.1,0.1,0.1])(grigliaVetrataEst);

var grligliaVetrataSx = STRUCT([SIMPLEX_GRID([[-30.9,0.1],[-7.4,3.1,3.1],[-1,0.1,-3.3,0.1]]), //è 50cm più alta dei muri
                                SIMPLEX_GRID([[-30.9,0.1],[-7.4,0.1,-2.95,0.1,-2.95,0.1],[-1.1,3.3]])
                                ]);
var pannelliVetrataSx = SIMPLEX_GRID([[-30.94,0.02],[-7.5,2.95,-0.1,2.95],[-1.1,3.3]]);
pannelliVetrataSx = COLOR([0.5,1,1,0.5])(BOUNDARY(pannelliVetrataSx));
grligliaVetrataSx = COLOR([0.1,0.1,0.1])(grligliaVetrataSx);

var grigliaSovratetto =  SIMPLEX_GRID([[-30.9,1.1],[-7.4,0.1,-2.95,0.1,-2.95,0.1],[-4.4,0.1]]); //sovratetto delle vetrate Sx e Dx
var pannelliSovratetto = SIMPLEX_GRID([[-31,0.9],[-7.5,2.95,-0.1,2.95],[-4.44,0.02]]);
pannelliSovratetto = COLOR([0.5,1,1,0.5])(BOUNDARY(pannelliSovratetto));
grigliaSovratetto = COLOR([0.1,0.1,0.1])(grigliaSovratetto);

var vetrate = STRUCT([grigliaVetrataSud,pannelliVetrataSud,grigliaVetrataNord,pannelliVetrataNord,grigliaVetrataEst,pannelliVetrataEst,
                      grligliaVetrataSx,pannelliVetrataSx,T([0])([1])(grligliaVetrataSx),T([0])([1])(pannelliVetrataSx),grigliaSovratetto,pannelliSovratetto]);


//tetti
var tetti = STRUCT([SIMPLEX_GRID([[-24,23],[-4,3.4],[-4,0.3]]),
                    SIMPLEX_GRID([[-24,6.9,-1.1,15],[-7.4,6.2],[-4,0.3]]),
                    SIMPLEX_GRID([[-24,23],[-13.6,3.4],[-4,0.3]]),
                    SIMPLEX_GRID([[-0.2,9.6],[-13.2,9.6],[-4,0.3]])
                    ]);
tetti = COLOR([0.99,0.99,0.99])(tetti);


//2 improbabili tavolinetti da bar rotondi rossi istanziati davanti alle panche
var pezzo1 = T([0])([-0.05])(SIMPLEX_GRID([[0.1],[0.4],[-0.75,0.05]]));
var pezzi1 = [];
for (var i = 0; i <= 36; i++) {
  pezzi1[i] = R([0,1])(PI/18 * i)(pezzo1);
};
var piano = STRUCT(pezzi1);

var pezzo2 = T([0])([-0.05])(SIMPLEX_GRID([[0.1],[0.05],[-0.1,0.65]]));
var pezzi2 = [];
for (var i = 0; i <= 36; i++) {
  pezzi2[i] = R([0,1])(PI/18 * i)(pezzo2);
};
var gamba = STRUCT(pezzi2);

var pezzo3 = T([0])([-0.05])(SIMPLEX_GRID([[0.1],[0.2],[0.1]]));
var pezzi3 = [];
for (var i = 0; i <= 36; i++) {
  pezzi3[i] = R([0,1])(PI/18 * i)(pezzo3);
};
var piede = STRUCT(pezzi3);

var tavolo = STRUCT([piano,gamba,piede]);
var tavolo1 = T([0,1,2])([14,12,1])(tavolo);
var tavolo2 = T([0,1,2])([18,12,1])(tavolo);
var tavoli = STRUCT([tavolo1,tavolo2]);
tavoli = COLOR([1,0,0])(tavoli);


//unisco tutto in un unica STRUCT e la disegno
var scmodel = STRUCT([base,piscine,muri,muretti,scalinata,colonnato,panche,vetrate,tetti,tavoli,duesdraio]);