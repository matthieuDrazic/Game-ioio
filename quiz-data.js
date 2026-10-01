'use strict';
(function(root){const trivia=[
['sixgill','Quel requin possède six fentes branchiales et une seule nageoire dorsale ?',['white','blue','mako'],'Le requin griset possède six fentes branchiales. La plupart des autres requins en ont cinq.'],
['thresher','Quel requin utilise sa très longue queue lors de la chasse ?',['tiger','bull','lemon'],'Le lobe supérieur de la queue du requin-renard peut être aussi long que son corps.'],
['goblin','Quel requin peut projeter ses mâchoires vers l’avant ?',['nurse','reef','porbeagle'],'Le requin-lutin possède des mâchoires très mobiles qui se projettent pour saisir une proie.'],
['greenland','Quel requin vit principalement dans l’Atlantique Nord et l’Arctique ?',['blacktip','tiger','scalloped'],'Le requin du Groenland fréquente les eaux froides du Nord et souvent les profondeurs.'],
['whale','Quel requin présente des motifs de taches permettant de reconnaître les individus ?',['blue','lemon','white'],'Les taches du requin-baleine sont utilisées dans la photo-identification.'],
['basking','Lequel de ces requins se nourrit en filtrant le zooplancton ?',['bull','mako','tiger'],'Le requin pèlerin filtre de petites proies en suspension dans l’eau.'],
['whale','Lequel de ces requins est un filtreur de plancton ?',['white','goblin','porbeagle'],'Le requin-baleine collecte du plancton et d’autres petites proies en suspension.'],
['blue','Quel requin a de très longues nageoires pectorales et un dos bleu ?',['nurse','bull','greenland'],'La silhouette fine et les longues pectorales sont caractéristiques du requin bleu.'],
['nurse','Quel requin possède des barbillons et recherche sa nourriture près du fond ?',['mako','white','blue'],'Les barbillons du requin nourrice participent à la recherche de nourriture sur les fonds.'],
['whitetip','Quel requin de cette liste peut respirer au repos et fréquente les grottes du récif ?',['mako','blue','porbeagle'],'Le requin à pointes blanches du récif peut rester immobile pour respirer.'],
['bull','Quel requin peut pénétrer dans certains fleuves et vivre en eau douce ?',['reef','blacktip','basking'],'Le requin bouledogue régule ses sels et peut tolérer l’eau douce.'],
['lemon','Quel requin porte un nom lié à sa couleur jaune-brun ?',['tiger','white','mako'],'Le requin citron a une coloration jaune-brun ou olive qui le camoufle sur certains fonds.'],
['blacktip','Chez quelle espèce les extrémités noires des nageoires sont-elles un repère caractéristique ?',['whitetip','nurse','lemon'],'Les pointes noires contrastent nettement chez Carcharhinus melanopterus.'],
['greatHammer','Quelle est la plus grande espèce de requin-marteau parmi ces choix ?',['scalloped','reef','nurse'],'Le grand requin-marteau peut dépasser les tailles du marteau halicorne.'],
['scalloped','Quel requin-marteau possède plusieurs échancrures sur la bordure avant de sa tête ?',['greatHammer','goblin','thresher'],'La tête du marteau halicorne présente une bordure caractéristique avec plusieurs échancrures.'],
['megalodon','Lequel de ces requins est une espèce éteinte connue notamment grâce à ses dents fossiles ?',['white','greenland','basking'],'Le mégalodon est éteint. Sa présence dans le jeu est un bonus fictif.'],
['white','Quel requin, parmi ces choix, conserve certaines parties de son corps plus chaudes que l’eau ?',['lemon','nurse','blacktip'],'Le grand requin blanc possède une endothermie régionale, sans être entièrement à température constante.'],
['porbeagle','Quel requin de cette liste fréquente surtout des eaux tempérées fraîches ?',['tiger','blacktip','lemon'],'Le requin-taupe commun fréquente notamment l’Atlantique Nord et des eaux tempérées du Sud.'],
['tiger','Quel requin doit son nom à des bandes sombres particulièrement visibles chez les jeunes ?',['blue','bull','nurse'],'Les bandes du requin-tigre ont tendance à être moins marquées chez les adultes.'],
['reef','Quel requin de cette liste est décrit comme fidèle à son récif, avec des regroupements le jour ?',['mako','blue','greenland'],'Le requin gris de récif peut se regrouper le jour et revenir au même site.']
];
const bank=trivia.map(([id,prompt,distractors,explanation],i)=>({id:'fact-'+i,prompt,correct:id,options:[id,...distractors],explanation,shark:id,source:root.SHARKS.find(s=>s.id===id).source,kind:'Espèces & comportements'}));
for(const s of root.SHARKS){if(s.status==='EX')continue;bank.push({id:'science-'+s.id,prompt:'À quelle espèce correspond le nom scientifique « '+s.scientific+' » ?',correct:s.id,options:[s.id,...root.SHARKS.filter(x=>x.id!==s.id&&x.status!=='EX').sort(()=>Math.random()-.5).slice(0,3).map(x=>x.id)],explanation:s.scientific+' est le nom scientifique du '+s.name.toLowerCase()+'.',shark:s.id,source:s.source,kind:'Noms scientifiques'});}
function shuffle(a,rng=Math.random){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
root.QUIZ_BANK=bank;root.makeQuiz=function(mistakes={},recent=[],rng=Math.random){const pool=bank.filter(q=>!recent.includes(q.id));const candidates=pool.length>=5?pool:bank;return candidates.map(q=>({q,key:rng()+Math.min(3,Number(mistakes[q.id])||0)*.35})).sort((a,b)=>b.key-a.key).slice(0,5).map(({q})=>({...q,options:shuffle(q.options,rng)}))};
})(window);
