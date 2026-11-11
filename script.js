'use strict';
const $=id=>document.getElementById(id);
const scenes=window.NODOS;
let current='INICIO', history=[];
const hints={INICIO:'Kai, detecté una señal anómala. Elegí por dónde empezar la investigación.',A:'Hay dos focos de energía. Evaluá cuál investigar primero.',B:'La señal rebota entre dos ubicaciones. Necesitamos acercarnos.',A1:'Atención: una desconexión incorrecta podría afectar a más personas.',A2:'El tiempo es limitado. Necesitamos actuar con cuidado.',B1:'Los drones representan un riesgo. Elegí una estrategia.',B2:'La antena amplifica la señal. Considerá las consecuencias.',alpha:'Podemos entrar de distintas formas. Vos decidís.',beta:'Debemos elegir entre investigar a los responsables o detener la señal.',FINAL:'Misión cumplida, Kai. Tus decisiones nos trajeron hasta aquí.'};
function showGame(){ $('welcome').hidden=true;$('game').hidden=false;$('resetTop').hidden=false;render();window.scrollTo({top:0,behavior:'smooth'});}
function render(){const scene=scenes[current];if(!scene){alert('No se encontró la escena.');return;}
 $('sceneTitle').textContent=scene.titulo;$('sceneLevel').textContent=scene.nivel;
 const match=scene.nivel.match(/Nivel (\d+)/);const level=match?Number(match[1]):0;
 $('progressBar').style.width=`${Math.round(level/6*100)}%`;$('progressText').textContent=`${level} / 6`;
 $('story').replaceChildren();scene.narrativa.split(/\n\s*\n/).forEach(part=>{const p=document.createElement('p');p.textContent=part.trim();$('story').appendChild(p)});
 $('choices').replaceChildren();scene.opciones.forEach((option,i)=>{const b=document.createElement('button');b.type='button';b.className='choice';const num=document.createElement('span');num.textContent=i+1;b.append(num,document.createTextNode(option.texto));b.addEventListener('click',()=>{if(option.siguiente==='INICIO'){restart();return;}history.push(current);current=option.siguiente;render();window.scrollTo({top:0,behavior:'smooth'});});$('choices').appendChild(b)});
 $('veraText').textContent=hints[current]|| (current==='FINAL'?'Misión cumplida.': 'Estoy analizando la información. La decisión final es tuya, Kai.');
 $('back').disabled=history.length===0;$('routeText').textContent=[...history,current].map(id=>scenes[id]?.titulo||id).join(' → ');
 $('signal').textContent=current==='FINAL'?'● MISIÓN COMPLETADA':'● MISIÓN EN CURSO';
}
function restart(){current='INICIO';history=[];showGame()}
$('start').addEventListener('click',restart);$('back').addEventListener('click',()=>{if(!history.length)return;current=history.pop();render();window.scrollTo({top:0,behavior:'smooth'})});$('restart').addEventListener('click',restart);$('resetTop').addEventListener('click',restart);$('brand').addEventListener('click',e=>{e.preventDefault();$('welcome').hidden=false;$('game').hidden=true;$('resetTop').hidden=true;window.scrollTo({top:0,behavior:'smooth'})});
