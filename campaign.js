'use strict';
window.LEVELS=[
{id:1,zone:'reef',title:'Premier courant',type:'travel',duration:100,exit:2400,width:2800,goal:'Rejoins la sortie lumineuse.',bonus:'Ramasse 8 pièces pour une étoile supplémentaire.'},
{id:2,zone:'reef',title:'Le banc argenté',type:'hunt',duration:130,exit:3200,width:3600,food:10,plankton:30,goal:'Capture 10 proies puis rejoins la sortie.',bonus:'Mode filtreur : collecte 30 planctons.'},
{id:3,zone:'reef',title:'Le gardien du récif',type:'boss',boss:'guardian',duration:180,exit:3700,width:4100,trigger:1900,goal:'Esquive trois charges puis atteins la sortie.',bonus:'Le gardien fictif peut aussi être repoussé par les morsures.'},
{id:4,zone:'wreck',title:'Les mailles du piège',type:'travel',duration:120,exit:3100,width:3500,goal:'Contourne les filets pour atteindre la sortie.',bonus:'Surveille les passages au-dessus et au-dessous des filets.'},
{id:5,zone:'wreck',title:'Le carnet englouti',type:'explore',duration:160,exit:4100,width:4500,goal:'Explore trois balises puis rejoins la sortie.',bonus:'Les balises alternent entre les profondeurs.'},
{id:6,zone:'wreck',title:'Le chalut fantôme',type:'boss',boss:'trawl',duration:180,exit:3800,width:4200,trigger:1900,goal:'Traverse trois vagues de filets sans les toucher.',bonus:'Une ouverture est annoncée avant chaque vague.'},
{id:7,zone:'abyss',title:'Sous la lumière',type:'explore',duration:150,exit:3700,width:4100,goal:'Trouve trois balises dans les profondeurs.',bonus:'Le radar des requins-marteaux peut t’aider à repérer les proies.'},
{id:8,zone:'abyss',title:'La patience des abysses',type:'survive',duration:150,exit:3400,width:3800,hold:45,goal:'Survis au moins 45 secondes puis rejoins la sortie.',bonus:'Manger ou filtrer permet de récupérer de la vitalité.'},
{id:9,zone:'abyss',title:'La grande poursuite',type:'boss',boss:'orca',duration:180,exit:4000,width:4400,trigger:2100,goal:'Esquive trois assauts de l’orque puis fuis.',bonus:'Les scénarios de campagne sont fictifs ; les fiches restent documentaires.'}
];
(function(root){const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
class CampaignRun extends root.Expedition{
 constructor(shark,level,rng=Math.random){super(shark,level.zone,rng);this.level=level;this.duration=level.duration;this.width=level.width;this.x=420;this.y=650;this.orcaClock=-99999;this.objects=[];this.visited=new Set();this.beacons=[{x:1100,y:900},{x:2100,y:420},{x:3000,y:1050}];this.objectives=[{type:'path',label:'Sortie',target:1},{type:'coins',label:'Pièces',target:8},{type:level.type==='boss'?'boss':level.type==='explore'?'explore':level.type==='hunt'?'food':level.type==='survive'?'survive':'explore',label:level.type==='boss'?'Esquives':level.type==='explore'?'Balises':level.type==='hunt'?(shark.filter?'Plancton':'Proies'):level.type==='survive'?'Survie':'Balise',target:level.type==='boss'?3:level.type==='explore'?3:level.type==='hunt'?(shark.filter?level.plankton:level.food):level.type==='survive'?level.hold:1}];
 this.boss=level.boss?{type:level.boss,name:level.boss==='guardian'?'Gardien du récif':level.boss==='trawl'?'Chalut fantôme':'Orque des abysses',active:false,cleared:false,phase:'waiting',timer:0,dodges:0,hp:200,maxHp:200,hit:false,x:0,y:650,targetY:650,startX:0,gapY:650,direction:-1}:null;
 for(let i=0;i<55;i++)this.objects.push(this.spawn('fish'));for(let i=0;i<85;i++)this.objects.push(this.spawn('plankton'));for(let i=0;i<45;i++)this.objects.push(this.spawn('coin'));for(let i=0;i<(level.id<3?5:10);i++)this.objects.push(this.spawn('jelly'));for(let i=0;i<(level.id<3?1:3);i++)this.objects.push(this.spawn('enemy'));
 // Scattered food and coins along the route, with a small safe starting area.
 for(let i=0;i<16;i++){const o=this.spawn('coin');o.x=600+i*(level.exit-700)/16;o.y=650+Math.sin(i*.8)*180;this.objects.push(o)}for(let i=0;i<18;i++){const o=this.spawn(shark.filter?'plankton':'fish');o.x=550+i*100;o.y=650+Math.sin(i)*150;o.hp=12;this.objects.push(o)}if(shark.filter)for(let i=0;i<45;i++){const o=this.spawn('plankton');o.x=600+i*55;o.y=650+Math.sin(i*.7)*140;this.objects.push(o)}
 this.objects=this.objects.filter(o=>o.type!=='enemy'||o.x>1000);
 this.nets=level.id===4?[{x:1300,y:150,w:25,h:640},{x:2100,y:650,w:25,h:640},{x:2750,y:180,w:25,h:650}]:level.zone==='wreck'?[{x:1450,y:250,w:25,h:450}]:[];
 this.tell('Niveau '+level.id+' · '+this.goalText());}
 goalText(){return this.level.type==='hunt'&&this.shark.filter?'Collecte '+this.level.plankton+' planctons puis rejoins la sortie.':this.level.goal;}
 value(o){if(o.type==='path')return this.won?1:0;if(o.type==='boss')return this.boss?.cleared?3:this.boss?.dodges||0;if(o.type==='survive')return Math.floor(this.time);return super.value(o)}
 prerequisites(){const l=this.level;return l.type==='boss'?this.boss.cleared:l.type==='explore'?this.visited.size>=3:l.type==='hunt'?this.food>=(this.shark.filter?l.plankton:l.food):l.type==='survive'?this.time>=l.hold:true;}
 end(won=false){super.end(won&&this.prerequisites()&&this.x>=this.level.exit-100)}
 stars(){return this.won?1+(this.coins>=8?1:0)+(this.hp>=this.shark.hp*.5?1:0):0}
 reward(){const r=super.reward();r.campaign=this.won?(this.level.type==='boss'?180:100):0;r.total+=r.campaign;return r}
 startBossPhase(){const b=this.boss;b.phase='warning';b.timer=0;b.hit=false;b.targetY=this.y;b.y=this.y;b.startX=clamp(this.x+560,200,this.width-100);b.x=b.startX;b.direction=-1;b.gapY=[420,930,650][b.dodges%3];this.tell(b.type==='trawl'?'FILET · Rejoins l’ouverture lumineuse !':'CHARGE · Quitte la ligne rouge !');}
 tickBoss(dt){const b=this.boss;if(!b||b.cleared)return;if(!b.active){if(this.x>=this.level.trigger){b.active=true;this.startBossPhase();this.objects=this.objects.filter(o=>!['enemy','jelly'].includes(o.type));this.hp=Math.min(this.shark.hp,this.hp+25);}return}b.timer+=dt;
 const warning=b.type==='orca'?1.8:2.4,charge=b.type==='trawl'?3:2.4;
 if(b.phase==='warning'&&b.timer>=warning){b.phase='charge';b.timer=0;}
 else if(b.phase==='charge'){
  b.x=b.startX-b.timer*(b.type==='trawl'?320:490);
  const dx=Math.abs(this.x-b.x),dy=Math.abs(this.y-(b.type==='trawl'?b.gapY:b.targetY));
  if(b.type==='trawl'?dx<this.baseLength*.4+25&&dy>200:dx<this.baseLength*.4+80&&dy<65){b.hit=true;this.damage(b.type==='orca'?32:22);}
  if(b.timer>=charge){if(!b.hit){b.dodges++;this.tell('Esquive réussie · '+b.dodges+'/3');}else this.tell('Touché ! La vague suivante te donnera une autre chance.');b.phase='rest';b.timer=0;}
 }else if(b.phase==='rest'){
  if(b.type==='guardian'&&!this.shark.filter&&Math.hypot(this.x-b.x,this.y-b.y)<this.baseLength*.55+75&&this.attackCD===0){b.hp-=this.shark.damage*(this.active>0&&this.shark.skill==='power'?2:1);this.attackCD=.4;this.pop(b.x,b.y,'Morsure');}
  if(b.timer>=2.6)this.startBossPhase();
 }
 if(b.dodges>=3||b.type==='guardian'&&b.hp<=0){b.cleared=true;b.dodges=3;b.phase='clear';this.tell('Rencontre réussie ! Rejoins maintenant la sortie.');this.hp=Math.min(this.shark.hp,this.hp+20);}
 }
 step(delta,input){if(this.ended)return;const dt=clamp(delta,0,.05);this.orcaClock=-99999;super.step(dt,input);if(this.ended)return;this.tickBoss(dt);if(this.hp<=0){this.end(false);return}if(this.x>=this.level.exit-100){if(this.prerequisites())this.end(true);else if(this.messageTime<=0)this.tell('La sortie attend : termine d’abord ton objectif.');}}
}
root.CampaignRun=CampaignRun;
})(window);
