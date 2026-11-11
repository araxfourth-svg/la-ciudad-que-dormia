// Cloudflare Worker opcional. Guardar GEMINI_API_KEY como Secret, nunca en GitHub.
// Configurar ALLOWED_ORIGIN con la URL exacta de GitHub Pages.
export default {async fetch(request, env) {
 const origin=request.headers.get('Origin')||'';
 const allowed=env.ALLOWED_ORIGIN||'';
 const headers={'Access-Control-Allow-Origin':allowed,'Access-Control-Allow-Methods':'POST, OPTIONS','Access-Control-Allow-Headers':'Content-Type','Content-Type':'application/json'};
 if(request.method==='OPTIONS')return new Response(null,{status:204,headers});
 if(request.method!=='POST'||origin!==allowed)return new Response(JSON.stringify({error:'No autorizado'}),{status:403,headers});
 let data;try{data=await request.json()}catch{return new Response('{}',{status:400,headers})}
 const question=String(data.question||'').slice(0,450);if(!question)return new Response('{}',{status:400,headers});
 const instruction=`Sos VERA, IA ficticia de una aventura educativa de ciencia ficción en Nova Arcadia en 2087. Respondé en español argentino con frases breves (máximo 85 palabras), tono de asistente táctica amable. No reveles futuros nodos ni spoilers. No inventes acceso a sensores reales. Tu función es guiar al jugador a pensar, no elegir por él. Escena actual: ${String(data.scene||'').slice(0,90)}. Contexto: ${String(data.story||'').slice(0,1400)}. Opciones: ${JSON.stringify(data.options||[]).slice(0,500)}.`;
 try{const r=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`,{method:'POST',headers:{'Content-Type':'application/json','x-goog-api-key':env.GEMINI_API_KEY},body:JSON.stringify({systemInstruction:{parts:[{text:instruction}]},contents:[{role:'user',parts:[{text:question}]}],generationConfig:{maxOutputTokens:220,temperature:.6}})});if(!r.ok)return new Response(JSON.stringify({error:'Gemini no disponible'}),{status:502,headers});const json=await r.json();const answer=json.candidates?.[0]?.content?.parts?.map(p=>p.text||'').join('')||'No tengo una respuesta ahora.';return new Response(JSON.stringify({answer}),{headers});}catch{return new Response(JSON.stringify({error:'Error de conexión'}),{status:502,headers})}
 }};
