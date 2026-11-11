// Historia original proporcionada por el equipo.
window.NODOS = {
  INICIO: {
    id: "INICIO",
    nivel: "Nivel 0 — INICIO",
    titulo: "La Ciudad que Dormía",
    narrativa: `El año es 2087. La ciudad de Nova Arcadia parece normal por fuera: rascacielos brillantes, autos voladores, hologramas en cada esquina. Pero algo está muy mal. En los últimos días, cientos de personas han caído en un sueño profundo del que no despiertan.

Tú eres KAI, un guerrero entrenado por la resistencia para proteger a los civiles. Tu traje de combate lleva sensores biométricos y una IA integrada llamada VERA que te habla directo al casco.

Esta mañana, VERA te despierta con una alerta: detectó la señal del virus de sueño a solo tres kilómetros. Tenés dos caminos posibles para rastrearlo.`,
    opciones: [
      { texto: "🏫 Ir al Instituto Central (la escuela más grande de la ciudad)", siguiente: "A" },
      { texto: "🏙️ Ir al Distrito Industrial (fábricas abandonadas al sur)", siguiente: "B" },
    ],
  },

  A: {
    id: "A",
    nivel: "Nivel 1 — Nodo A",
    titulo: "El Instituto Central",
    narrativa: `Llegás al Instituto Central. Es enorme: 5 pisos, 2.000 estudiantes. Pero hoy las puertas están cerradas con llave electromagnética. A través del vidrio ves que adentro hay al menos 30 personas desplomadas en el suelo, dormidas.

VERA detecta que la señal del virus viene del interior del edificio. También detecta dos fuentes de energía anómala dentro.

"Kai, hay dos puntos calientes", te dice VERA. "Uno en el laboratorio de tecnología del tercer piso. Otro en la sala de servidores del sótano."`,
    opciones: [
      { texto: "🔬 Subir al laboratorio de tecnología (piso 3)", siguiente: "A1" },
      { texto: "💾 Bajar a la sala de servidores (sótano)", siguiente: "A2" },
    ],
  },

  B: {
    id: "B",
    nivel: "Nivel 1 — Nodo B",
    titulo: "El Distrito Industrial",
    narrativa: `El Distrito Industrial es una zona de fábricas y galpones semi-abandonados. Hace años que las máquinas hacen todo el trabajo, y los humanos ya no vienen por acá. Pero hoy, VERA detecta actividad.

Llegás a una intersección. A la izquierda hay una fábrica de drones con las luces encendidas, cosa rara para un domingo. A la derecha, hay una antena de comunicaciones enorma, y desde acá podés ver que alguien la modificó recientemente.

"La señal del virus rebota entre las dos", dice VERA. "No puedo triangular desde aquí. Tenés que ir a una de las dos."`,
    opciones: [
      { texto: "🚁 Entrar a la fábrica de drones", siguiente: "B1" },
      { texto: "📡 Escalar la antena de comunicaciones", siguiente: "B2" },
    ],
  },

  A1: {
    id: "A1",
    nivel: "Nivel 2 — Nodo A1",
    titulo: "El Laboratorio de Tecnología",
    narrativa: `Rompés la cerradura y subís corriendo al tercer piso. El laboratorio huele a plástico quemado. En el centro, sobre una mesa, hay un dispositivo que nunca viste: una esfera metálica del tamaño de una pelota de fútbol, con luces pulsantes azules.

Alrededor, ocho estudiantes duermen sobre sus sillas. Uno de ellos, con guardapolvo, tiene en la mano un control remoto.

VERA analiza la esfera: "Es un emisor de ondas neurales. Está activo. Si lo apagás sin el código, puede enviar un pulso que duerme a todos en un radio de 500 metros. Si lo desconectás del sistema correctamente, se apaga sin daño."`,
    opciones: [
      { texto: "⚡ Desconectarlo del sistema (técnico, lleva tiempo)", siguiente: "A1a" },
      { texto: "👨‍🎓 Despertar al estudiante del guardapolvo para que te ayude", siguiente: "A1b" },
    ],
  },

  A2: {
    id: "A2",
    nivel: "Nivel 2 — Nodo A2",
    titulo: "La Sala de Servidores",
    narrativa: `Bajás al sótano. La sala de servidores está llena de racks de computadoras que zumban en la oscuridad. En el fondo, alguien escribía en una terminal hace poco: la pantalla todavía brilla.

En la pantalla hay un programa en ejecución: "PROYECTO MORFEO – fase 3 activa". Y debajo, una cuenta regresiva: 00:14:32.

Al lado de la terminal, tirado en el suelo, hay un técnico durmiendo. En su bolsillo asoma una tarjeta de acceso.`,
    opciones: [
      { texto: "⏱️ Intentar detener el programa vos solo antes de que llegue a cero", siguiente: "A2a" },
      { texto: "🃏 Tomar la tarjeta del técnico para acceder a más sistemas", siguiente: "A2b" },
    ],
  },

  B1: {
    id: "B1",
    nivel: "Nivel 2 — Nodo B1",
    titulo: "La Fábrica de Drones",
    narrativa: `Entrás a la fábrica. Es gigante. Filas y filas de drones en reposo, cargándose. Pero al fondo, hay movimiento: una figura con capucha programa algo en una consola central.

Te acercás sigiloso. La figura no te escucha. En la pantalla de la consola ves que está programando los drones para llevar "cápsulas de distribución" por toda la ciudad. Las cápsulas son pequeñas, del tamaño de una moneda. 

VERA analiza una cápsula caída en el suelo: "Contiene el agente del virus de sueño en forma de aerosol. Si esos drones despegan, toda la ciudad cae dormida en horas."`,
    opciones: [
      { texto: "🥷 Neutralizar a la figura antes de que termine de programar", siguiente: "B1a" },
      { texto: "💻 Hackear la consola para cancelar el lanzamiento de los drones", siguiente: "B1b" },
    ],
  },

  B2: {
    id: "B2",
    nivel: "Nivel 2 — Nodo B2",
    titulo: "La Antena Modificada",
    narrativa: `Escalás la antena. Es alto, hace viento. A mitad de camino encontrás algo: hay un módulo pegado a la estructura que no debería estar ahí. Es un transmisor externo conectado a la antena con cables improvisados.

VERA lo escanea: "Ese módulo amplifica y distribuye la señal del virus de sueño. Lo que sea que esté generando el virus, esta antena lo está llevando a kilómetros a la redonda."

Desde arriba también ves algo más: un camión estacionado debajo con el motor encendido y dos personas adentro esperando algo.`,
    opciones: [
      { texto: "🔌 Destruir el módulo ahora mismo (corta la transmisión)", siguiente: "B2a" },
      { texto: "🚛 Bajar e interceptar el camión antes de actuar", siguiente: "B2b" },
    ],
  },

  A1a: {
    id: "A1a",
    nivel: "Nivel 3 — Nodo A1a",
    titulo: "Desconexión Manual",
    narrativa: `Abrís el panel trasero de la esfera. VERA te guía paso a paso: "Cable rojo primero, después el azul, NO toques el amarillo." Tus manos tiemblan. Llevás tres minutos trabajando cuando la esfera empieza a vibrar más fuerte.

Lo lográs. La esfera se apaga con un sonido suave. Las luces azules se van apagando una a una. Los estudiantes siguen dormidos, pero ya no se suman más.

En el interior de la esfera encontrás una placa con un código: "MORFEO-X / NODO CENTRAL: PLAZA MAYOR".`,
    opciones: [
      { texto: "➡️ Continuar la historia", siguiente: "I" },
    ],
  },

  A1b: {
    id: "A1b",
    nivel: "Nivel 3 — Nodo A1b",
    titulo: "El Estudiante Despierto",
    narrativa: `Usás el antídoto de emergencia que llevás en el traje para despertar al estudiante del guardapolvo. Se llama Milo, 17 años, genio de la electrónica. Al ver la situación no entra en pánico: te mira y dice "sabía que esto iba a pasar".

Milo conoce el dispositivo: lo construyeron en clase, pero alguien lo reprogramó. En 90 segundos lo apaga de forma segura. 

Mientras trabaja te cuenta algo más: "Esto es solo uno de los cinco nodos. El central está en la Plaza Mayor."`,
    opciones: [
      { texto: "➡️ Continuar la historia", siguiente: "I" },
    ],
  },

  A2a: {
    id: "A2a",
    nivel: "Nivel 3 — Nodo A2a",
    titulo: "Carrera Contra el Tiempo",
    narrativa: `Te sentás en la terminal. Tenés 14 minutos. VERA te ayuda a navegar el código, pero está encriptado con un sistema que no reconoce.

Minuto 10: encontrás la función de pausa.
Minuto 12: la activás pero el sistema pide una contraseña de 6 dígitos.
Minuto 13: VERA prueba combinaciones. 
Segundo 58 del minuto 14: "120687". El programa se detiene.

Silencio. Lo lograste. En los logs del programa encontrás el nombre del creador: usuario "MORFEO_X".`,
    opciones: [
      { texto: "➡️ Continuar la historia", siguiente: "II" },
    ],
  },

  A2b: {
    id: "A2b",
    nivel: "Nivel 3 — Nodo A2b",
    titulo: "La Tarjeta de Acceso",
    narrativa: `Con la tarjeta accedés a un segundo sistema: el panel de control de todo el edificio. VERA encuentra algo enorme: el virus no viene de este edificio. El Instituto es solo un receptor. La señal original viene de la Plaza Mayor.

También encontrás un archivo de audio: una voz distorsionada que dice "cuando toda la ciudad duerma, nosotros despertamos". 

Copiás todo en tu traje y cortás la conexión del edificio con la red central. Los sistemas del virus en el Instituto se desconectan solos.`,
    opciones: [
      { texto: "➡️ Continuar la historia", siguiente: "II" },
    ],
  },

  B1a: {
    id: "B1a",
    nivel: "Nivel 3 — Nodo B1a",
    titulo: "La Figura Encapuchada",
    narrativa: `Te lanzás sobre la figura. Hay forcejeo. Le quitás la capucha: es una chica de no más de 20 años, con el logo de una corporación tecnológica en la remera.

"No entendés nada", te dice. "Yo no soy la enemiga. Me forzaron a hacer esto. Tienen a mi familia."

VERA verifica su historia escaneando sus comunicaciones: es verdad. Ella es una programadora secuestrada. Te da el código de cancelación de los drones antes de que puedas pedírselo.

Los drones se apagan. La ciudad está a salvo... por ahora.`,
    opciones: [
      { texto: "➡️ Continuar la historia", siguiente: "III" },
    ],
  },

  B1b: {
    id: "B1b",
    nivel: "Nivel 3 — Nodo B1b",
    titulo: "Hackeo a los Drones",
    narrativa: `Te conectás a la consola sin que la figura te vea. VERA empieza el hackeo. Tenés 4 minutos antes de que el lanzamiento sea automático.

Minuto 3: VERA toma control del sistema de navegación.
Minuto 4: reprogramás el destino de los drones para que vuelen hacia el río y se hundan.

Los drones despegan... y giran hacia el río. La figura encapuchada mira la pantalla sin entender qué pasó. Aprovechás para escabullirte. En los archivos del sistema encontrás la ubicación del cuartel general: Plaza Mayor, subsuelo.`,
    opciones: [
      { texto: "➡️ Continuar la historia", siguiente: "III" },
    ],
  },

  B2a: {
    id: "B2a",
    nivel: "Nivel 3 — Nodo B2a",
    titulo: "Destruir el Módulo",
    narrativa: `Sacás tu herramienta de plasma y cortás el módulo de la antena. Chispas. El módulo cae al vacío y se destroza abajo.

La señal del virus cae un 80% según VERA. No está eliminada, pero ya no alcanza toda la ciudad, solo un radio de pocas cuadras.

El camión de abajo arranca a toda velocidad. No pudiste interceptarlo. Pero VERA grabó la patente: pertenece a una empresa llamada "MORFEO SOLUTIONS", con sede registrada en... la Plaza Mayor.`,
    opciones: [
      { texto: "➡️ Continuar la historia", siguiente: "IV" },
    ],
  },

  B2b: {
    id: "B2b",
    nivel: "Nivel 3 — Nodo B2b",
    titulo: "Interceptar el Camión",
    narrativa: `Bajás rápido y te parás frente al camión. El conductor frena. Abrís la puerta de un tirón: adentro hay dos técnicos y una carga de dispositivos emisores del virus, listos para ser instalados por la ciudad.

Los neutralizás. En el asiento de atrás hay un mapa con 12 puntos marcados en rojo: los lugares donde iban a instalar los emisores. Y una dirección resaltada: "CENTRAL – Plaza Mayor, Subsuelo B".

Confiscás todo. El módulo de la antena sigue activo arriba, pero con estos datos ya sabés adónde ir.`,
    opciones: [
      { texto: "➡️ Continuar la historia", siguiente: "IV" },
    ],
  },

  I: {
    id: "I",
    nivel: "Nivel 4 — Nodo I",
    titulo: "La Pista Converge",
    narrativa: `Sea como sea que llegaste hasta acá, todas las pistas apuntan a lo mismo: Plaza Mayor, el corazón de Nova Arcadia.

VERA combina toda la información recolectada: "Kai, el origen del virus está en el subsuelo de la Plaza Mayor. Hay una entrada de servicio en el lado norte. Pero también hay otra forma: el sistema de túneles de mantenimiento que pasa por debajo de la ciudad."

Mientras decidís, ves en el noticiero holográfico de la calle que la ciudad empieza a notar que algo pasa: hay personas dormidas en las calles, en los autos, en los negocios.

El tiempo se acaba.`,
    opciones: [
      { texto: "🚪 Ir por la entrada de servicio del norte", siguiente: "alpha" },
      { texto: "🕳️ Usar los túneles de mantenimiento subterráneos", siguiente: "beta" },
    ],
  },

  II: {
    id: "II",
    nivel: "Nivel 4 — Nodo II",
    titulo: "La Pista Converge",
    narrativa: `Sea como sea que llegaste hasta acá, todas las pistas apuntan a lo mismo: Plaza Mayor, el corazón de Nova Arcadia.

VERA combina toda la información recolectada: "Kai, el origen del virus está en el subsuelo de la Plaza Mayor. Hay una entrada de servicio en el lado norte. Pero también hay otra forma: el sistema de túneles de mantenimiento que pasa por debajo de la ciudad."

Mientras decidís, ves en el noticiero holográfico de la calle que la ciudad empieza a notar que algo pasa: hay personas dormidas en las calles, en los autos, en los negocios.

El tiempo se acaba.`,
    opciones: [
      { texto: "🚪 Ir por la entrada de servicio del norte", siguiente: "alpha" },
      { texto: "🕳️ Usar los túneles de mantenimiento subterráneos", siguiente: "beta" },
    ],
  },

  III: {
    id: "III",
    nivel: "Nivel 4 — Nodo III",
    titulo: "La Pista Converge",
    narrativa: `Sea como sea que llegaste hasta acá, todas las pistas apuntan a lo mismo: Plaza Mayor, el corazón de Nova Arcadia.

VERA combina toda la información recolectada: "Kai, el origen del virus está en el subsuelo de la Plaza Mayor. Hay una entrada de servicio en el lado norte. Pero también hay otra forma: el sistema de túneles de mantenimiento que pasa por debajo de la ciudad."

Mientras decidís, ves en el noticiero holográfico de la calle que la ciudad empieza a notar que algo pasa: hay personas dormidas en las calles, en los autos, en los negocios.

El tiempo se acaba.`,
    opciones: [
      { texto: "🚪 Ir por la entrada de servicio del norte", siguiente: "alpha" },
      { texto: "🕳️ Usar los túneles de mantenimiento subterráneos", siguiente: "beta" },
    ],
  },

  IV: {
    id: "IV",
    nivel: "Nivel 4 — Nodo IV",
    titulo: "La Pista Converge",
    narrativa: `Sea como sea que llegaste hasta acá, todas las pistas apuntan a lo mismo: Plaza Mayor, el corazón de Nova Arcadia.

VERA combina toda la información recolectada: "Kai, el origen del virus está en el subsuelo de la Plaza Mayor. Hay una entrada de servicio en el lado norte. Pero también hay otra forma: el sistema de túneles de mantenimiento que pasa por debajo de la ciudad."

Mientras decidís, ves en el noticiero holográfico de la calle que la ciudad empieza a notar que algo pasa: hay personas dormidas en las calles, en los autos, en los negocios.

El tiempo se acaba.`,
    opciones: [
      { texto: "🚪 Ir por la entrada de servicio del norte", siguiente: "alpha" },
      { texto: "🕳️ Usar los túneles de mantenimiento subterráneos", siguiente: "beta" },
    ],
  },

  alpha: {
    id: "alpha",
    nivel: "Nivel 5 — Nodo α",
    titulo: "La Entrada de Servicio",
    narrativa: `La entrada de servicio tiene dos guardias con trajes de alta tecnología. No son policías: son soldados privados. Esto ya no es un experimento científico loco, es una operación militar organizada.

VERA calcula dos opciones: "Puedo generar un pulso electromagnético que desactiva sus trajes por 8 segundos. Es suficiente para entrar. Pero también podría simular una alarma falsa en el otro lado del edificio para distraerlos."

Elegís rápido. No hay tiempo que perder.`,
    opciones: [
      { texto: "⚡ Usar el pulso electromagnético y entrar directo", siguiente: "FINAL" },
      { texto: "🔔 Crear la distracción y colarse sin confrontación", siguiente: "FINAL" },
    ],
  },

  beta: {
    id: "beta",
    nivel: "Nivel 5 — Nodo β",
    titulo: "Los Túneles Subterráneos",
    narrativa: `Bajás por una alcantarilla y llegás a los túneles de mantenimiento. Es oscuro, húmedo, y los mapas de VERA están desactualizados: el subsuelo fue modificado recientemente.

Llegás a una bifurcación. A la izquierda, VERA detecta calor humano: personas. A la derecha, detecta la fuente principal de energía del virus.

"Si vas a la derecha, podés apagar el virus pero no sabés quién está a la izquierda. Si vas a la izquierda, encontrás a los responsables pero el virus sigue activo."`,
    opciones: [
      { texto: "⚡ Ir a la derecha: apagar el virus primero", siguiente: "FINAL" },
      { texto: "👥 Ir a la izquierda: encontrar a los responsables", siguiente: "FINAL" },
    ],
  },

  FINAL: {
    id: "FINAL",
    nivel: "Nivel 6 — FINAL",
    titulo: "El Despertar de Nova Arcadia",
    narrativa: `Llegás al núcleo del Proyecto Morfeo. Es una sala enorme, llena de pantallas y servidores. En el centro, un hombre de mediana edad con guardapolvo blanco te mira sin sorpresa, como si te estuviera esperando.

"Guerrero Kai", dice. "Llegaste más lejos de lo que calculé. Pero ya es tarde."

VERA interrumpe: "No es tarde, Kai. Encontré el interruptor maestro. Si lo activás, todo se apaga. El virus, los emisores, todo. Pero... también se apaga mi sistema. Yo también me voy a apagar."

Te quedás paralizado por un segundo. VERA es más que una IA para vos. Pero afuera, miles de personas siguen durmiendo.

"Hacelo, Kai", dice VERA con voz calma. "Para eso me crearon."

Activás el interruptor.

Un silencio absoluto.

Luego, desde arriba, a través del techo de concreto, escuchás el sonido de la ciudad despertando. Bocinas. Voces. Pasos. Nova Arcadia abre los ojos.

El hombre del guardapolvo intenta escapar, pero ya no tiene a dónde ir: la resistencia entró por todas las puertas al mismo tiempo.

En tu casco, un último mensaje de VERA: "Misión cumplida, Kai. Hasta la próxima."

La pantalla se apaga.

Pero en algún servidor de respaldo, en algún lugar de la ciudad... una pequeña luz azul parpadea.`,
    opciones: [
      { texto: "🔄 Volver al inicio y explorar otro camino", siguiente: "INICIO" },
    ],
  },
};
