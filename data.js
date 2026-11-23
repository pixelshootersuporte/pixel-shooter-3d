// Dados reais extraídos de config/armas.gd e assets/monster_info.json

export const WEAPONS = [
  { id: "pistola", name: "Pistola", dmg: 10, rate: 3, range: 420, price: 0, color: "#ffd84a", tag: "Inicial · Equilibrada", desc: "Arma padrão confiável para iniciar a sobrevivência." },
  { id: "metra", name: "Metralhadora", dmg: 5, rate: 9, range: 400, price: 450, color: "#77ddff", tag: "Alta Cadência", desc: "Disparo contínuo ideal para controlar grandes hordas." },
  { id: "escopeta", name: "Escopeta", dmg: 10, rate: 1.6, range: 320, price: 580, color: "#ffaa66", tag: "6 Projéteis · Leque", desc: "Devastadora a curta distância com rajada em leque." },
  { id: "magnum", name: "Magnum", dmg: 28, rate: 2, range: 460, price: 720, color: "#ffa94d", tag: "Perfura +1", desc: "Revólver pesado de alto impacto que atravessa inimigos." },
  { id: "smg", name: "Submetralhadora", dmg: 5, rate: 11, range: 380, price: 880, color: "#88eeff", tag: "Compacta · Rápida", desc: "Cadência elevada e mobilidade ágil em combate." },
  { id: "uzi", name: "Uzi", dmg: 4, rate: 16, range: 360, price: 1050, color: "#99eeff", tag: "16 tiros/seg", desc: "Chuva de balas ultrarrápida para limpar enxames." },
  { id: "plasma", name: "Plasma", dmg: 15, rate: 4, range: 460, price: 1300, color: "#55ff99", tag: "Perfura 2 inimigos", desc: "Dispara feixes energéticos que atravessam alvos." },
  { id: "fuzil", name: "Fuzil de Assalto", dmg: 10, rate: 7.2, range: 500, price: 1550, color: "#ffe066", tag: "Precisão · Alcance", desc: "Excelente equilíbrio entre dano, cadência e alcance." },
  { id: "sniper", name: "Sniper", dmg: 68, rate: 0.9, range: 660, price: 1850, color: "#ff66ff", tag: "Perfura 4 · Crítico", desc: "Rifle de precisão extrema capaz de perfurar filas inteiras." },
  { id: "foguete", name: "Lançador", dmg: 44, rate: 1.3, range: 460, price: 2200, color: "#ff5555", tag: "Explosivo · Raio 85", desc: "Lança foguetes com grande dano explosivo em área." },
  { id: "carabina", name: "Rifle Clássico", dmg: 23, rate: 3, range: 540, price: 2500, color: "#c8a8ff", tag: "Perfura 2 · Preciso", desc: "Disparos potentes de longo alcance e alta velocidade." },
  { id: "lancachamas", name: "Lança-chamas", dmg: 3, rate: 22, range: 235, price: 2850, color: "#ff8a2a", tag: "Queima · Curto alcance", desc: "Incendeia ondas inteiras aplicando dano contínuo." },
  { id: "besta", name: "Besta de Guerra", dmg: 50, rate: 1.5, range: 560, price: 3200, color: "#e8c9a0", tag: "Perfura 6 inimigos", desc: "Virotes pesados que atravessam até 6 monstros de uma vez." },
  { id: "gelo", name: "Rifle de Gelo", dmg: 19, rate: 4, range: 480, price: 3600, color: "#8fe3ff", tag: "Congela −50% vel.", desc: "Desacelera inimigos e chefes em 50% ao acertar." },
  { id: "minigun", name: "Minigun", dmg: 5, rate: 21, range: 420, price: 4200, color: "#ffa94d", tag: "21 tiros/seg", desc: "Metralhadora giratória pesada com poder de supressão massivo." },
  { id: "missil", name: "Mísseis Teleguiados", dmg: 28, rate: 2.8, range: 530, price: 4800, color: "#ff6b6b", tag: "Teleguiado · Explosivo", desc: "Mísseis inteligentes que perseguem o alvo e explodem." },
  { id: "canhao", name: "Canhão", dmg: 95, rate: 0.9, range: 520, price: 5400, color: "#ff784a", tag: "Explosão Massiva", desc: "Maior dano único do arsenal com onda de choque de raio 125." },
  { id: "tesla", name: "Arma Tesla", dmg: 28, rate: 3.5, range: 450, price: 6200, color: "#c4b5fd", tag: "Raios em cadeia", desc: "Dispara arcos elétricos que saltam entre múltiplos inimigos." }
];

export const MONSTERS = [
  { id: "V", file: "V", name: "Devorador do Vazio", tag: "Chefão Final · Missão 25 · Vazio", desc: "Leviatã abissal de três cabeças com tentáculos massivos. Destrói o cenário, agarra sua presa e dispara raios do vazio.", features: ["Agarrão Abissal com tentáculo", "Raio do Vazio 3D que destrói obstáculos", "Rugido do Buraco Negro"], pal: ["#7c3aed", "#b06bff", "#22d3ee"] },
  { id: "S3", file: "S3", name: "Dragão do Magma", tag: "Chefão Especial · Missão 20 · Vulcão", desc: "Um dragão de rocha com o ventre em lava. A mandíbula abre, as asas batem e cospe fogo contínuo.", features: ["Sopro de Fogo em cone e Círculo de Fogo em voo", "Invoca brasas explosivas"], pal: ["#ff5a1f", "#8a2016", "#e5d3b0"] },
  { id: "S2", file: "S2", name: "Imperador do Gelo", tag: "Chefão Especial · Missão 15 · Gelo", desc: "Um imperador de cristal flutuante, com coroa de espinhos, cetro e uma capa que ondula.", features: ["Pisão sísmico e Salto da Espada glacial", "Invoca golens de gelo na arena"], pal: ["#7cc8f0", "#e6f7ff", "#1e4a8a"] },
  { id: "S1", file: "S1", name: "Faraó Imortal", tag: "Chefão Especial · Missão 10 · Deserto", desc: "Um faraó enfaixado que flutua, com máscara de ouro e olhos turquesa. Anéis de areia giram ao redor.", features: ["Invoca escorpiões e tempestade de areia", "Anéis de areia giram mais rápido na fase 2"], pal: ["#e5b53a", "#d8c7a0", "#40f0ff"] },
  { id: "S0", file: "S0", name: "Rainha da Colmeia", tag: "Chefão Especial · Missão 5 · Floresta", desc: "Uma rainha-inseto gigante, coroada de ouro. As asas batem sem parar e o ferrão avança com fúria.", features: ["Invoca enxames e dispara múltiplas ferroadas", "Investida aérea veloz com o ferrão"], pal: ["#f2b705", "#1f7a45", "#ffd24a"] },
  { id: "B0", file: "B0", name: "Rei Ancestral", tag: "Chefão · Capítulo 1 · Floresta", desc: "Guardião antigo da floresta capaz de invocar raízes perfurantes do subsolo.", features: ["Invoca raízes que perseguem o jogador", "Grande reserva de vida"], pal: ["#2f9e5a", "#5c3a21", "#86efac"] },
  { id: "B1", file: "B1", name: "Faraó das Areias", tag: "Chefão · Capítulo 2 · Deserto", desc: "Soberano das dunas que libera tempestades em espiral de energia solar e invoca escorpiões.", features: ["Dispara tempestades em espiral", "Invoca escorpiões durante o combate"], pal: ["#d9822b", "#facc15", "#0284c7"] },
  { id: "B2", file: "B2", name: "Titã de Gelo", tag: "Chefão · Capítulo 3 · Gelo", desc: "Colosso glacial que golpeia o chão com força sísmica e dispara rajadas congelantes.", features: ["Machadada pesada de alto impacto", "Rajadas de cristais de gelo"], pal: ["#5ab8ff", "#e0f2fe", "#1e40af"] },
  { id: "B3", file: "B3", name: "Senhor do Magma", tag: "Chefão · Capítulo 4 · Vulcão", desc: "Guerreiro infernal que arremessa sua marreta flamejante em bumerangue e invoca brasas.", features: ["Arremesso da marreta giratória", "Invoca brasas explosivas"], pal: ["#e03a2a", "#451a03", "#fde047"] },
  { id: "M0", file: "M0", name: "Alfa da Matilha", tag: "Mini-Chefe · Floresta", desc: "Lobo alfa gigante e feroz com golpes duplos de garra, uivo intimidador e investida brutal.", features: ["Combo de ataques rápidos e dash", "Lidera as matilhas da Floresta"], pal: ["#6b7280", "#1f2937", "#ff3b3b"] },
  { id: "M1", file: "M1", name: "Escaravelho Real", tag: "Mini-Chefe · Deserto", desc: "Besouro dourado blindado com carapaça pesada que resiste a fogo pesado no deserto.", features: ["Blindagem resistente e alto HP", "Pressão implacável nas missões do Deserto"], pal: ["#0ea5a4", "#fbbf24", "#1e3a8a"] },
  { id: "M3", file: "M3", name: "Colosso de Lava", tag: "Mini-Chefe · Vulcão", desc: "Titã magmático pesado que esmaga o solo abrindo poças de lava temporárias e rajadas ígneas.", features: ["Abre poças de lava no chão", "Rajada de 3 esferas de magma"], pal: ["#f97316", "#292524", "#fff1a8"] },
  { id: "M4", file: "M4", name: "Invocador do Vazio", tag: "Mini-Chefe · Vazio", desc: "Entidade abissal armada com lâmina sombria que conjura bocas devoradoras no chão.", features: ["Invoca Bocas do Vazio sob o jogador", "Combo de dois cortes sombrios"], pal: ["#a855f7", "#1e1b2e", "#22d3ee"] },
  { id: "z", file: "z", name: "Zumbi", tag: "Comum · Floresta", desc: "O monstro básico da Floresta: anda torto, com os braços esticados e o cérebro à mostra.", features: ["Aparece em grande quantidade", "Perseguição direta"], pal: ["#7fa36b", "#4a5d7a", "#ffe14a"] }
];

export const HERO_PARTS = [
  { id: "body", file: "body", name: "Soldado 3D (Corpo)", tag: "Herói Personalizável · Animação Idle", desc: "Modelo 3D completo do soldado com suporte a personalização de cores (pele, traje, cabelo), 4 estilos de cabeça e 8 acessórios.", features: ["Animações Idle e Walk em loop", "Compatível com todas as 22 armas", "Personalizável na oficina do jogo"], pal: ["#38bdf8", "#1e293b", "#facc15"] },
  { id: "head_helmet", file: "head_helmet", name: "Capacete Tático", tag: "Cabeça · Acessório 3D", desc: "Capacete militar blindado para o soldado 3D.", features: ["Estilo tático", "Pintura dinâmica do traje"], pal: ["#4ade80", "#334155", "#94a3b8"] },
  { id: "head_mask", file: "head_mask", name: "Máscara de Combate", tag: "Cabeça · Acessório 3D", desc: "Máscara fechada com visor para operações no Vulcão e no Vazio.", features: ["Visual futurista", "Proteção de rosto inteiro"], pal: ["#a855f7", "#1e293b", "#22d3ee"] },
  { id: "acc_backpack", file: "acc_backpack", name: "Mochila Tática", tag: "Acessório · Costas", desc: "Mochila de suprimentos equipada nas costas do soldado.", features: ["Item cosmético 3D", "Desbloqueável na loja"], pal: ["#f59e0b", "#475569", "#cbd5e1"] },
  { id: "acc_radio", file: "acc_radio", name: "Rádio Comunicador", tag: "Acessório · Costas", desc: "Rádio militar com antena longa para missões de campo.", features: ["Item cosmético 3D", "Estilo clássico de esquadrão"], pal: ["#38bdf8", "#334155", "#e2e8f0"] }
];

export const CHAPTERS = [
  { num: "01", name: "Floresta", missions: "Missões 1–5", boss: "Rei Ancestral & Rainha da Colmeia", color: "#4ade80", desc: "Hordas de Zumbis, Lobos, Arqueiros e Enxames entre árvores e pedras." },
  { num: "02", name: "Deserto", missions: "Missões 6–10", boss: "Faraó das Areias & Faraó Imortal", color: "#fbbf24", desc: "Tempestades de areia, Escorpiões velozes, Sentinelas e Ninjas." },
  { num: "03", name: "Gelo", missions: "Missões 11–15", boss: "Titã de Gelo & Imperador do Gelo", color: "#38bdf8", desc: "Yetis colossais, Gosmas que se dividem e Golens de cristal." },
  { num: "04", name: "Vulcão", missions: "Missões 16–20", boss: "Senhor do Magma & Dragão do Magma", color: "#ff6a22", desc: "Poças de lava, Brasas explosivas, Bombas-viva e Canhoneiros." },
  { num: "05", name: "Vazio", missions: "Missões 21–25+", boss: "Devorador do Vazio", color: "#a855f7", desc: "Dimensão abissal com Invocadores, Magos e o leviatã final." }
];
