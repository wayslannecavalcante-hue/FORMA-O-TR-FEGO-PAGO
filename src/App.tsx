import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  Target, 
  Clock, 
  ArrowRight, 
  Store,
  MessageCircle,
  PlayCircle,
  Monitor,
  AlertTriangle,
  CreditCard,
  Link as LinkIcon,
  CheckCircle2,
  MessageSquare,
  ClipboardList,
  MousePointerClick,
  ListChecks,
  Crosshair,
  Layers,
  Settings2,
  Save,
  Rocket,
  Users,
  Tv,
  Filter,
  Globe,
  RefreshCcw,
  Copy,
  MapPin,
  Instagram,
  Edit3,
  MousePointer2,
  Megaphone,
  XCircle,
  Magnet,
  BookOpen,
  Tag,
  Camera
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function Aula01({ onNext }: { onNext: () => void; key?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      {/* HEADER / ABERTURA */}
      <header className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 pt-20 pb-16">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <PlayCircle className="w-4 h-4 text-[var(--color-aeg-blue)]" />
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-300">Aula 01 • O Jogo do Tráfego</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-black uppercase leading-tight tracking-tight mb-8">
            Faça o telefone <br/>
            <span className="relative inline-block pb-2">
              da sua loja
              <span className="absolute -bottom-1 left-0 w-full h-1.5 md:h-2 lg:h-3 bg-[var(--color-aeg-blue)]"></span>
            </span>{' '}tocar.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-medium mb-12">
            Se você depende SÓ de quem passa na frente da sua loja ou de indicação, você tá deixando dinheiro na mesa <span className="text-white font-bold">todo santo dia</span>.
          </p>

          <a href="#tratar-realidade" className="group flex items-center justify-center gap-3 bg-[var(--color-aeg-blue)] hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-all text-lg shadow-[0_0_30px_rgba(10,60,218,0.4)]">
            Entenda o Jogo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </header>

      {/* SEÇÃO 1: ORGÂNICO VS PAGO */}
      <section id="tratar-realidade" className="py-24 px-6 relative border-t border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-black uppercase mb-4">A Ilusão da Avenida</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-2xl mx-auto">A diferença brutal entre quem passa na sua porta e quem tá pronto para comprar o seu carro.</motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Orgânico */}
            <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-white/20 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-gray-600"></div>
              <Store className="w-12 h-12 text-gray-500 mb-6" />
              <h3 className="font-heading text-2xl font-bold uppercase mb-4">A Loja Física <br/><span className="text-gray-500">(Orgânico)</span></h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Quantas pessoas passam na frente todo dia? Mil? Dessas, quantas REALMENTE param e olham os carros?
                Esse é quem passou ali por acaso. A sua vitrine tá esperando a sorte.
              </p>
            </motion.div>

            {/* Pago */}
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-blue)]/10 border border-[var(--color-aeg-blue)]/30 rounded-2xl p-8 relative overflow-hidden group hover:border-[var(--color-aeg-blue)]/50 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-aeg-blue)] shadow-[0_0_10px_#0A3CDA]"></div>
              <Smartphone className="w-12 h-12 text-[var(--color-aeg-blue)] mb-6" />
              <h3 className="font-heading text-2xl font-bold uppercase mb-4">O Celular <br/><span className="text-white">(Tráfego Pago)</span></h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Centenas estão rolando o feed AGORA querendo trocar de carro. Você paga pra jogar a sua vitrine na frente de quem já tá pesquisando. <strong className="text-white">Na hora certa.</strong>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 2: FRASE DE IMPACTO */}
      <section className="py-32 px-6 relative bg-[var(--color-aeg-blue)] overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjI1KSIvPjwvc3ZnPg==')] opacity-30"></div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-black uppercase leading-tight">
            Tráfego pago = <br className="hidden md:block" />
            <span className="text-white/90">Comprar atenção de quem </span><br/>
            <span className="bg-white text-[var(--color-aeg-blue)] px-4 py-1 mt-2 inline-block">tá pronto pra comprar</span>
          </h2>
        </motion.div>
      </section>

      {/* SEÇÃO 3: ESTATÍSTICA MATADORA */}
      <section className="py-24 px-6 relative border-t border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-[12px] border-white/5 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                <circle cx="50%" cy="50%" r="calc(50% - 6px)" stroke="var(--color-aeg-blue)" strokeWidth="12" fill="none" strokeDasharray="100 100" strokeDashoffset="20"></circle>
              </svg>
              <div className="text-center backdrop-blur-md bg-black/40 rounded-full w-full h-full flex flex-col justify-center items-center shadow-xl">
                <span className="font-heading text-6xl font-black text-white">80%</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="font-heading text-3xl font-bold uppercase mb-6 leading-tight">Pesquisam online <span className="text-[var(--color-aeg-blue)]">ANTES</span> de ir na loja</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              O concorrente da esquina JÁ tá anunciando. Enquanto você espera o cliente entrar na porta, ele tá indo no celular do cliente às dez da noite, mostrando o mesmo carro.
            </p>
            <p className="text-white font-semibold text-lg border-l-4 border-[var(--color-aeg-blue)] pl-4">
              Se você não está na internet com anúncio, você está invisível para 8 em cada 10 clientes.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 4: OS 3 FUNDAMENTOS */}
      <section className="py-24 px-6 relative bg-white/5 border-t border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-black uppercase mb-4">Os 3 Fundamentos</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-2xl mx-auto">
              Decora isso. Tudo que você vai fazer pra vender carro online sai daqui.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] p-8 rounded-xl border border-white/10 relative overflow-hidden group">
              <div className="text-[var(--color-aeg-blue)] font-heading text-6xl font-black opacity-10 absolute -right-2 -bottom-4 group-hover:scale-110 transition-transform">01</div>
              <Target className="w-10 h-10 text-[var(--color-aeg-blue)] mb-6" />
              <h3 className="font-heading text-xl font-bold uppercase mb-3">Pessoa Certa</h3>
              <p className="text-gray-400">
                Você não quer QUALQUER um. Mostrar Onix pra adolescente não vende. Você foca em pessoas de 30-50 anos, da sua cidade, com perfil pra compra.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] p-8 rounded-xl border border-white/10 relative overflow-hidden group mt-4 md:mt-0">
               <div className="text-[var(--color-aeg-blue)] font-heading text-6xl font-black opacity-10 absolute -right-2 -bottom-4 group-hover:scale-110 transition-transform">02</div>
              <MessageCircle className="w-10 h-10 text-[var(--color-aeg-blue)] mb-6" />
              <h3 className="font-heading text-xl font-bold uppercase mb-3">Mensagem Certa</h3>
              <p className="text-gray-400">
                Ninguém liga pra sua loja, as pessoas ligam pro <strong>CARRO</strong>, pro preço e pra parcela que cabe no bolso. Fale o que eles querem ouvir.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] p-8 rounded-xl border border-white/10 relative overflow-hidden group mt-8 md:mt-0">
               <div className="text-[var(--color-aeg-blue)] font-heading text-6xl font-black opacity-10 absolute -right-2 -bottom-4 group-hover:scale-110 transition-transform">03</div>
              <Clock className="w-10 h-10 text-[var(--color-aeg-blue)] mb-6" />
              <h3 className="font-heading text-xl font-bold uppercase mb-3">Hora Certa</h3>
              <p className="text-gray-400">
                Deitar na cama às 9 da noite. É aí que o celular rola infinito. O seu anúncio precisa impactar o cliente no momento de atenção total.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER / CHAMADA PRÓXIMA AULA */}
      <footer className="py-20 px-6 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full bg-[var(--color-aeg-blue)] opacity-[0.15] blur-[100px] -z-10"></div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-8">
            <span className="bg-white/10 text-white border border-white/20 uppercase tracking-widest text-xs font-bold px-4 py-2 rounded-full">
              Lição de Casa
            </span>
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
             Abra o Instagram da sua loja agora e pergunte-se:
          </h2>
          
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl inline-block mb-10 text-[var(--color-aeg-blue)] font-heading text-xl md:text-2xl font-black italic">
            "Se eu fosse cliente, eu compraria carro com base no que tá aqui?"
          </div>
          
          <p className="text-gray-400 mb-10 text-lg">
            Anota o que você precisa melhorar. Na próxima aula vamos configurar sua conta e preparar tudo para faturar de verdade. Deixa o celular e computador no jeito.
          </p>

          <button onClick={onNext} className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--color-aeg-blue)] hover:bg-blue-800 text-white font-bold py-5 px-10 rounded-xl transition-all text-xl mx-auto shadow-[0_10px_30px_rgba(10,60,218,0.3)] hover:-translate-y-1 cursor-pointer">
            <PlayCircle className="w-6 h-6" />
            Ir para Aula 02 
          </button>
        </motion.div>
      </footer>
    </motion.div>
  );
}

function Aula02({ onNext }: { onNext: () => void; key?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* HEADER / ABERTURA */}
      <header className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 pt-20 pb-16 border-b border-white/5">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[var(--color-aeg-blue)] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <PlayCircle className="w-4 h-4 text-[var(--color-aeg-blue)]" />
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-300">Aula 02 • Mão na Massa</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl font-black uppercase leading-tight tracking-tight mb-6">
            Configurando o <br/>
            <span className="text-[var(--color-aeg-blue)]">Ambiente de Anúncios</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl font-medium mb-8">
            Para a aula em algum momento se precisar. Pega o computador e vamos juntos configurar TUDO que você precisa pra começar a anunciar.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Gerenciador Criado
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Instagram Conectado
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Cartão Cadastrado
            </div>
          </div>
        </motion.div>
      </header>

      {/* SEÇÃO 1: O FIM DO IMPULSIONAR */}
      <section className="py-20 px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="bg-red-500/10 text-red-500 font-bold px-4 py-1.5 rounded-full inline-block mb-6 uppercase text-sm border border-red-500/20">
                Aviso Importante
              </div>
              <h2 className="font-heading text-3xl font-black uppercase mb-4">Esquece o botão "Impulsionar"</h2>
              <p className="text-gray-400 text-lg mb-6">
                Aquilo ali é pra amador, te cobra caro e não dá controle nenhum. Quem é lojista de verdade anuncia pelo <strong className="text-white">Gerenciador de Negócios da Meta.</strong>
              </p>
              <div className="bg-[var(--color-aeg-darker)] p-6 rounded-xl border border-white/5">
                <p className="text-gray-300 italic">
                  "O impulsionar do Instagram é tipo dirigir um carro com câmbio automático e sem painel — você não vê nada, não controla nada. O Gerenciador é o painel completo."
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[var(--color-aeg-blue)] opacity-20 blur-2xl rounded-full"></div>
                <Monitor className="w-48 h-48 text-[var(--color-aeg-blue)] relative z-10" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 2: PASSO A PASSO */}
      <section className="py-24 px-6 relative bg-white/5 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-black uppercase mb-4">O Passo a Passo</h2>
            <p className="text-gray-400 text-lg">Faz exatamente isso na frente do seu computador.</p>
          </div>

          <div className="space-y-8">
            {/* Passo 1 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-[var(--color-aeg-darker)] border border-white/10 rounded-2xl p-8 relative"
            >
              <div className="absolute -left-4 top-8 w-8 h-8 bg-[var(--color-aeg-blue)] rounded-full flex items-center justify-center font-bold text-white shadow-lg border-4 border-[var(--color-aeg-darker)]">1</div>
              <h3 className="font-heading text-2xl font-bold uppercase mb-4 pl-4">Acesse o Gerenciador</h3>
              <div className="pl-4 text-gray-400 space-y-4">
                <p>Abre o navegador e digita: <a href="https://business.facebook.com" target="_blank" rel="noreferrer" className="text-[var(--color-aeg-blue)] font-bold hover:underline">business.facebook.com</a></p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Clique em <strong>"Criar conta"</strong>.</li>
                  <li>Preencha o nome do seu negócio (ex: Auto Show Multimarcas).</li>
                  <li>Coloque seu nome completo e um <strong>e-mail comercial usado apenas para a loja</strong>.</li>
                  <li>Confirme o e-mail na sua caixa de entrada e volte.</li>
                </ul>
              </div>
            </motion.div>

            {/* Passo 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-[var(--color-aeg-darker)] border border-white/10 rounded-2xl p-8 relative"
            >
              <div className="absolute -left-4 top-8 w-8 h-8 bg-[var(--color-aeg-blue)] rounded-full flex items-center justify-center font-bold text-white shadow-lg border-4 border-[var(--color-aeg-darker)]">2</div>
              <h3 className="font-heading text-2xl font-bold uppercase mb-4 pl-4 flex items-center gap-3">
                <LinkIcon className="w-6 h-6 text-gray-500" />
                Conectar Página e Instagram
              </h3>
              <div className="pl-4 text-gray-400 space-y-4">
                <p>Sua loja precisa de uma página no Facebook e uma conta COMERCIAL no Instagram.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>No menu lateral, vá em <strong>"Contas" &gt; "Páginas"</strong>. Adicione a página da sua loja.</li>
                  <li>Vá em <strong>"Contas" &gt; "Contas do Instagram"</strong>. Adicione e faça o login autorizando o acesso.</li>
                </ul>
              </div>
            </motion.div>

            {/* Passo 3 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-[var(--color-aeg-darker)] border border-[var(--color-aeg-blue)]/30 rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <AlertTriangle className="w-32 h-32 text-[var(--color-aeg-blue)]" />
              </div>
              <div className="absolute -left-4 top-8 w-8 h-8 bg-[var(--color-aeg-blue)] rounded-full flex items-center justify-center font-bold text-white shadow-lg border-4 border-[var(--color-aeg-darker)]">3</div>
              <h3 className="font-heading text-2xl font-bold uppercase mb-4 pl-4 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-[var(--color-aeg-blue)]" />
                Conta de Anúncios e Pagamento
              </h3>
              <div className="pl-4 text-gray-400 space-y-4 relative z-10">
                <p>Onde o dinheiro vai rolar. Muita atenção nessa etapa.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Vá em <strong>"Contas de Anúncios" &gt; "Adicionar" &gt; "Criar nova"</strong>.</li>
                  <li className="bg-red-500/10 p-3 rounded-lg border border-red-500/20 text-red-200">
                    <strong>PRESTA ATENÇÃO:</strong> Escolha Fuso horário <strong>America/Sao_Paulo</strong> e Moeda <strong>BRL (Real)</strong>. Se errar, vai perder a conta e ter que refazer.
                  </li>
                  <li>Vá em <strong>"Pagamentos" &gt; "Adicionar forma"</strong>. Recomendo usar Cartão de Crédito.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 relative overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-6">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
          </div>
          
          <h2 className="font-heading text-3xl font-bold mb-6">
            Tudo configurado!
          </h2>
          
          <p className="text-gray-400 mb-8 text-lg">
            Você acabou de fazer a parte mais chata. De agora em diante, é só estratégia e prática.
            Navegue pelo Gerenciador, clique nos menus para se acostumar. Não tem como quebrar nada só clicando.
          </p>

          <button onClick={onNext} className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--color-aeg-blue)] hover:bg-blue-800 text-white font-bold py-5 px-10 rounded-xl transition-all text-xl mx-auto shadow-[0_10px_30px_rgba(10,60,218,0.3)] hover:-translate-y-1 cursor-pointer mb-10">
            <PlayCircle className="w-6 h-6" />
            Ir para Aula 03 
          </button>

          <div className="p-6 bg-white/5 rounded-xl border border-white/10 uppercase tracking-widest text-sm font-bold text-gray-300">
            Próxima aula: Planejamento de Campanha. Antes de gastar 1 real, você precisa saber o que tá querendo conseguir.
          </div>
        </motion.div>
      </footer>
    </motion.div>
  );
}

function Aula03({ onNext }: { onNext: () => void; key?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* HEADER / ABERTURA */}
      <header className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 pt-20 pb-16 border-b border-white/5">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[var(--color-aeg-blue)] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <PlayCircle className="w-4 h-4 text-[var(--color-aeg-blue)]" />
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-300">Aula 03 • Estratégia Base</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl font-black uppercase leading-tight tracking-tight mb-6">
            O objetivo <br/>
            <span className="text-[var(--color-aeg-blue)]">certo</span> para a loja
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl font-medium mb-8">
            Tem gente que abre o Gerenciador, escolhe um objetivo qualquer, e três dias depois vem reclamar que "tráfego pago não funciona". Não é que não funciona. É que errou no básico.
          </p>
        </motion.div>
      </header>

      {/* SEÇÃO 1: OBJETIVO DA CAMPANHA */}
      <section className="py-20 px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-black uppercase mb-4">O Facebook é uma máquina</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Você dá o comando certo, ele entrega o resultado certo. Você dá o comando errado, ele entrega lixo. Simples assim.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-30">
             <div className="bg-white/5 p-4 rounded-xl border border-white/5 grayscale text-center">Reconhecimento</div>
             <div className="bg-white/5 p-4 rounded-xl border border-white/5 grayscale text-center">Engajamento (Curtidas)</div>
             <div className="bg-white/5 p-4 rounded-xl border border-white/5 grayscale text-center">Promoção de App</div>
          </div>
          <div className="text-center mt-6 mb-12">
            <span className="uppercase tracking-widest text-xs font-bold text-gray-500">Esquece esses por enquanto. Vamos focar nos 3 que funcionam para loja.</span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mensagem */}
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-blue)]/10 border border-[var(--color-aeg-blue)]/30 rounded-2xl p-8 relative hover:bg-[var(--color-aeg-blue)]/20 transition-colors">
              <MessageSquare className="w-12 h-12 text-[var(--color-aeg-blue)] mb-6" />
              <h3 className="font-heading text-2xl font-bold uppercase mb-4 text-white">Mensagens</h3>
              <p className="text-gray-300 mb-6">
                Cliente clica no anúncio e cai direto no WhatsApp da loja. Quente. Vendedor atende, manda foto, tenta fechar.
              </p>
              <div className="mt-auto bg-[var(--color-aeg-blue)] text-white text-xs font-bold uppercase px-3 py-1 rounded inline-block">
                Quando usar: QUASE SEMPRE.
              </div>
            </motion.div>

            {/* Cadastros */}
            <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 rounded-2xl p-8 relative hover:bg-white/10 transition-colors">
              <ClipboardList className="w-12 h-12 text-gray-300 mb-6" />
              <h3 className="font-heading text-2xl font-bold uppercase mb-4 text-white">Cadastros</h3>
              <p className="text-gray-400 mb-6">
                Formulário dentro do Facebook (nome, telefone, email). Você recebe o contato e a equipe liga depois.
              </p>
              <div className="mt-auto bg-white/10 text-gray-300 text-xs font-bold uppercase px-3 py-1 rounded inline-block">
                Volume / Telemarketing
              </div>
            </motion.div>

            {/* Tráfego */}
            <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 rounded-2xl p-8 relative hover:bg-white/10 transition-colors">
              <MousePointerClick className="w-12 h-12 text-gray-300 mb-6" />
              <h3 className="font-heading text-2xl font-bold uppercase mb-4 text-white">Tráfego</h3>
              <p className="text-gray-400 mb-6">
                Leva para o seu site ou Webmotors. Depende de você ter um destino muito bom, com parcela e detalhes.
              </p>
              <div className="mt-auto bg-white/10 text-gray-300 text-xs font-bold uppercase px-3 py-1 rounded inline-block">
                Se tiver um SITE BOM
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 2: PLANEJAMENTO (O CHECKLIST) */}
      <section className="py-24 px-6 relative bg-white/5 border-t border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16 flex flex-col items-center">
            <ListChecks className="w-16 h-16 text-[var(--color-aeg-blue)] mb-6" />
            <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-5xl font-black uppercase mb-4">O Checklist de Ouro</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg">
              Responda essas 5 perguntas ANTES de criar qualquer campanha pra não jogar dinheiro fora.
            </motion.p>
          </div>

          <div className="space-y-6">
            {[
              { num: 1, title: 'Qual carro eu quero anunciar?', desc: 'Não anuncia "a loja toda". Foca em UM carro por campanha (o parado, o mais barato ou o mais procurado).' },
              { num: 2, title: 'Quem é o cliente desse carro?', desc: 'Onix popular (25 a 50 anos). Hilux 4x4 (35 a 60, classe média alta). Cada carro tem seu dono.' },
              { num: 3, title: 'Quanto eu posso gastar por dia?', desc: 'Sem isso você quebra. Começa com 20, 30 ou 50 reais por dia. O importante é a constância.' },
              { num: 4, title: 'Onde o cliente vai cair?', desc: 'WhatsApp da loja? Formulário? Site? Decide e deixa o terreno pronto antes de rodar.' },
              { num: 5, title: 'Quem vai atender?', desc: 'Não gasta 100 reais pra ninguém responder em 4 horas. O cliente tá pesquisando vários. Quem responde primeiro, vende.' }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-6 bg-[var(--color-aeg-darker)] p-6 rounded-xl border border-white/10 items-start">
                <div className="shrink-0 w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center font-heading font-black text-xl text-[var(--color-aeg-blue)] border border-white/10">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold uppercase text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full bg-[var(--color-aeg-blue)] opacity-[0.10] blur-[100px] -z-10"></div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-6">
            <Crosshair className="w-16 h-16 text-[var(--color-aeg-blue)] mx-auto" />
          </div>
          
          <h2 className="font-heading text-3xl font-bold mb-6 uppercase">
            Ação: Pega papel e caneta.
          </h2>
          
          <p className="text-gray-300 mb-8 text-lg font-medium">
            Responda essas 5 perguntas para um carro específico da sua loja AGORA.
          </p>

          <button onClick={onNext} className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--color-aeg-blue)] hover:bg-blue-800 text-white font-bold py-5 px-10 rounded-xl transition-all text-xl mx-auto shadow-[0_10px_30px_rgba(10,60,218,0.3)] hover:-translate-y-1 cursor-pointer mb-10">
            <PlayCircle className="w-6 h-6" />
            Ir para Aula 04 
          </button>

          <div className="p-6 bg-white/5 rounded-xl border border-[var(--color-aeg-blue)]/50 uppercase tracking-widest text-sm font-bold text-white shadow-[0_0_30px_rgba(10,60,218,0.2)]">
            Na próxima aula, a gente pega essas respostas e vai pra prática: criar a campanha de verdade no Gerenciador. Te vejo lá.
          </div>
        </motion.div>
      </footer>
    </motion.div>
  );
}

function Aula04({ onNext }: { onNext: () => void; key?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* HEADER / ABERTURA */}
      <header className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 pt-20 pb-16 border-b border-white/5">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[var(--color-aeg-blue)] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <PlayCircle className="w-4 h-4 text-[var(--color-aeg-blue)]" />
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-300">Aula 04 • Prática Guiada</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl font-black uppercase leading-tight tracking-tight mb-6">
            Criando a <br/>
            <span className="text-[var(--color-aeg-blue)]">Primeira Campanha</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl font-medium mb-8">
            Pega o computador, abre o Gerenciador de Negócios, e bora criar nossa primeira campanha juntos. Mesmo passo a passo.
          </p>
        </motion.div>
      </header>

      {/* SEÇÃO 1: ESTRUTURA BASICA */}
      <section className="py-20 px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-black uppercase mb-4">A Estrutura do Anúncio</h2>
            <p className="text-gray-400 text-lg">
              Decora essa estrutura. Campanha é o pai, Conjunto é o filho, Anúncio é o neto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] border border-white/10 p-6 rounded-xl relative">
              <Layers className="w-10 h-10 text-[var(--color-aeg-blue)] mb-4" />
              <h3 className="font-heading text-xl font-bold uppercase mb-2">1. Campanha</h3>
              <p className="text-gray-400"><strong>O Quê:</strong> Qual o objetivo. O que eu quero conseguir com isso (Mensagens, Cadastros, Tráfego).</p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] border border-white/10 p-6 rounded-xl relative">
              <Settings2 className="w-10 h-10 text-[var(--color-aeg-blue)] mb-4" />
              <h3 className="font-heading text-xl font-bold uppercase mb-2">2. Conjunto</h3>
              <p className="text-gray-400"><strong>Para Quem:</strong> Quem vai ver e quanto vou gastar. Orçamento, WhatsApp, Cidades, Idades.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] border border-white/10 p-6 rounded-xl relative">
              <Rocket className="w-10 h-10 text-[var(--color-aeg-blue)] mb-4" />
              <h3 className="font-heading text-xl font-bold uppercase mb-2">3. Anúncio</h3>
              <p className="text-gray-400"><strong>O Como:</strong> A vitrine. Qual foto, qual texto, qual chamada para a ação o cliente vai ver.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 2: PASSO A PASSO DA CRIACAO */}
      <section className="py-24 px-6 relative bg-white/5 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-black uppercase mb-4">Mão na Massa</h2>
            <p className="text-gray-400 text-lg">Faça isso no "Gerenciador de Anúncios".</p>
          </div>

          <div className="space-y-8">
            {/* Passo 1 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-[var(--color-aeg-darker)] border border-white/10 rounded-2xl p-8 relative"
            >
              <div className="absolute -left-4 top-8 w-8 h-8 bg-[var(--color-aeg-blue)] rounded-full flex items-center justify-center font-bold text-white shadow-lg border-4 border-[var(--color-aeg-darker)]">1</div>
              <h3 className="font-heading text-2xl font-bold uppercase mb-4 pl-4">Criando a Campanha</h3>
              <div className="pl-4 text-gray-400 space-y-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Clique no botão verde <strong>"Criar"</strong>.</li>
                  <li>Escolha o objetivo <strong>"Engajamento"</strong> (onde mora o Mensagens).</li>
                  <li>Nome da campanha: <strong>Onix Plus 2020 - Mensagens - Mês/Ano</strong>. Nomes organizados salvam sua vida.</li>
                  <li>Categoria Especial: <strong>NÃO MARQUE NADA</strong>. Desligue Teste A/B e Otimização do Orçamento.</li>
                </ul>
              </div>
            </motion.div>

            {/* Passo 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-[var(--color-aeg-darker)] border border-[var(--color-aeg-blue)]/50 rounded-2xl p-8 relative shadow-[0_0_20px_rgba(10,60,218,0.15)]"
            >
              <div className="absolute -left-4 top-8 w-8 h-8 bg-[var(--color-aeg-blue)] rounded-full flex items-center justify-center font-bold text-white shadow-lg border-4 border-[var(--color-aeg-darker)]">2</div>
              <h3 className="font-heading text-2xl font-bold uppercase mb-4 pl-4">O Conjunto de Anúncios</h3>
              <div className="pl-4 text-gray-400 space-y-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Tipo de Conversão: <strong>Aplicativos de Mensagens</strong> &gt; Marque <strong>WhatsApp</strong>.</li>
                  <li>Nome do conjunto: Ex: <strong>Onix Plus - Cidade - 25 a 55 anos</strong>.</li>
                  <li>Orçamento: <strong>Diário</strong> entre <strong>R$ 30 e R$ 50</strong>. (Valor que você consiga manter por 7 dias).</li>
                  <li>Programação: <strong>Continuamente a partir de hoje</strong>.</li>
                  <li>Posicionamentos: Deixe em <strong>Vantagem+</strong> (automático).</li>
                </ul>
              </div>
            </motion.div>

            {/* Passo 3 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-[var(--color-aeg-darker)] border border-white/10 rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Save className="w-32 h-32 text-[var(--color-aeg-blue)]" />
              </div>
              <div className="absolute -left-4 top-8 w-8 h-8 bg-[var(--color-aeg-blue)] rounded-full flex items-center justify-center font-bold text-white shadow-lg border-4 border-[var(--color-aeg-darker)]">3</div>
              <h3 className="font-heading text-2xl font-bold uppercase mb-4 pl-4 text-[var(--color-aeg-blue)]">Salvar como Rascunho</h3>
              <div className="pl-4 text-gray-400 space-y-4 relative z-10">
                <p>O Facebook vai te levar para a tela de anúncio. <strong>PARA AÍ.</strong></p>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <p>Clique no botão <strong>"Salvar como Rascunho"</strong> ou apenas feche a aba no X e ele salva automaticamente. Não publique ainda!</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 relative overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-6">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
          </div>
          
          <h2 className="font-heading text-3xl font-bold mb-6">
            Estrutura Pronta!
          </h2>
          
          <p className="text-gray-400 mb-8 text-lg">
            Você acabou de fazer 70% do trabalho construindo o chassi da campanha.
            Pense no carro que você quer anunciar de verdade, crie UMA e salve como rascunho.
          </p>

          <button onClick={onNext} className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--color-aeg-blue)] hover:bg-blue-800 text-white font-bold py-5 px-10 rounded-xl transition-all text-xl mx-auto shadow-[0_10px_30px_rgba(10,60,218,0.3)] hover:-translate-y-1 cursor-pointer mb-10">
            <PlayCircle className="w-6 h-6" />
            Ir para Aula 05 
          </button>

          <div className="p-6 bg-white/5 rounded-xl border border-white/10 uppercase tracking-widest text-sm font-bold text-gray-300">
            Próxima aula: Segmentação de Público. Vamos definir QUEM vai ver esse anúncio antes de publicar.
          </div>
        </motion.div>
      </footer>
    </motion.div>
  );
}

function Aula05({ onNext }: { onNext: () => void; key?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* HEADER / ABERTURA */}
      <header className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 pt-20 pb-16 border-b border-white/5">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[var(--color-aeg-blue)] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <PlayCircle className="w-4 h-4 text-[var(--color-aeg-blue)]" />
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-300">Aula 05 • Segmentação de Público</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl font-black uppercase leading-tight tracking-tight mb-6">
            O segredo da <br/>
            <span className="text-[var(--color-aeg-blue)]">Pessoa Certa</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl font-medium mb-8">
            Você pode ter o anúncio mais lindo do mundo, com o melhor preço, e não vender NADA se mostrar pra pessoa errada.
          </p>
        </motion.div>
      </header>

      {/* SEÇÃO 1: O QUE É SEGMENTAR */}
      <section className="py-20 px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 p-8 rounded-2xl grayscale opacity-50 relative overflow-hidden group">
              <Tv className="w-12 h-12 text-gray-500 mb-6" />
              <h3 className="font-heading text-2xl font-bold uppercase mb-4 text-white">TV (Todo Mundo)</h3>
              <p className="text-gray-400">
                Você paga uma fortuna e mostra pra todo mundo (homem, mulher, criança). A maioria não tá nem aí pra carro. É jogar dinheiro no lixo pra quem não tem perfil.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-blue)]/10 border border-[var(--color-aeg-blue)]/30 p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Target className="w-32 h-32 text-[var(--color-aeg-blue)]" />
              </div>
              <Filter className="w-12 h-12 text-[var(--color-aeg-blue)] mb-6 relative z-10" />
              <h3 className="font-heading text-2xl font-bold uppercase mb-4 text-white relative z-10">Anúncio Segmentado</h3>
              <p className="text-gray-300 relative z-10">
                Você diz para o Facebook focar em quem tem perfil para comprar o seu carro: "homem, 25 a 55 anos, interessado em carros, num raio de 30km da minha loja". Você não queima dinheiro atirando para todo lado.
              </p>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="bg-gradient-to-r from-[var(--color-aeg-blue)] to-blue-800 p-8 md:p-12 rounded-3xl text-center shadow-[0_0_40px_rgba(10,60,218,0.3)] border border-white/10">
            <h2 className="font-heading text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight mb-4 text-white">
              Anúncio <span className="text-blue-200">bom</span> pra pessoa <span className="text-red-400">errada</span> não vende.
            </h2>
            <p className="text-xl md:text-2xl font-medium text-blue-100">
              Anúncio <span className="text-white font-bold">SIMPLES</span> para a pessoa <span className="text-white font-bold uppercase underline decoration-4 underline-offset-4">certa</span> vende muito.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* SEÇÃO 2: OS 4 TIPOS DE PÚBLICO */}
      <section className="py-24 px-6 relative bg-white/5 border-t border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-black uppercase mb-4">Os 4 Tipos de Público</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Dos mais simples aos mais avançados.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Aberto */}
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] border border-[var(--color-aeg-blue)]/50 p-8 rounded-2xl relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[var(--color-aeg-blue)]/20 rounded-full flex items-center justify-center text-[var(--color-aeg-blue)]">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold uppercase text-white">1. Aberto (Vantagem+)</h3>
                </div>
              </div>
              <p className="text-gray-400 mb-4">Quase não filtra nada, apenas localização e idade. Você deixa a inteligência do Facebook trabalhar para encontrar o comprador.</p>
              <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-aeg-blue)] bg-[var(--color-aeg-blue)]/10 inline-block px-3 py-1 rounded">Quando usar: Iniciantes / IA da Meta Hoje</div>
            </motion.div>

            {/* Salvo */}
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] border border-white/10 p-8 rounded-2xl relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-400">
                  <Filter className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold uppercase text-white">2. Salvo (Detalhado)</h3>
                </div>
              </div>
              <p className="text-gray-400 mb-4">Você dá os comandos exatos de interesses: "Homem, gosta de Hilux, joga tênis". É o jeito mais antigo e travado de direcionar os anúncios.</p>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-white/5 inline-block px-3 py-1 rounded">Quando usar: Carros de Nicho (ex: Pajero)</div>
            </motion.div>

            {/* Personalizado */}
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] border border-white/10 p-8 rounded-2xl relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-400">
                  <RefreshCcw className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold uppercase text-white">3. Personalizado</h3>
                </div>
              </div>
              <p className="text-gray-400 mb-4">Você sobe suas listas: quem já comprou de você, quem visitou seu site ou mandou mensagem no Instagram.</p>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-white/5 inline-block px-3 py-1 rounded">Quando usar: Remarketing / Reativar Clientes</div>
            </motion.div>

            {/* Semelhante */}
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] border border-white/10 p-8 rounded-2xl relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-400">
                  <Copy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold uppercase text-white">4. Semelhante (Lookalike)</h3>
                </div>
              </div>
              <p className="text-gray-400 mb-4">O Facebook procura na base dele pessoas parecidas com a sua lista de clientes (Público Personalizado).</p>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-white/5 inline-block px-3 py-1 rounded">Quando usar: Apenas no Futuro, com volume.</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 3: QUAL USAR PRA COMEÇAR */}
      <section className="py-24 px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center"
        >
          <Target className="w-16 h-16 text-[var(--color-aeg-blue)] mx-auto mb-6" />
          <h2 className="font-heading text-3xl font-black uppercase mb-12">A Estratégia Inicial Perfeita</h2>

          <div className="flex flex-col md:flex-row gap-8 text-left mb-12">
            <div className="md:w-1/2 bg-[var(--color-aeg-darker)] p-6 rounded-xl border border-[var(--color-aeg-blue)]/30">
              <h3 className="font-heading text-xl font-bold uppercase mb-4 text-[var(--color-aeg-blue)]">Primeiro Mês</h3>
              <p className="text-gray-300 font-bold mb-2">Público Aberto (Vantagem+)</p>
              <ul className="list-disc pl-5 text-gray-400 space-y-2 mb-4">
                <li>Cidade da loja com raio de 30-50km.</li>
                <li>Idade condizente (ex: 25 a 60 anos).</li>
                <li>Deixe a inteligência do Facebook trabalhar por mínimo de 7 dias sem alterar!</li>
              </ul>
            </div>
            
            <div className="md:w-1/2 bg-[var(--color-aeg-darker)] p-6 rounded-xl border border-white/10">
              <h3 className="font-heading text-xl font-bold uppercase mb-4 text-gray-400">Depois do 1º Mês</h3>
              <p className="text-gray-300 font-bold mb-2">Público Personalizado</p>
              <ul className="list-disc pl-5 text-gray-400 space-y-2 mb-4">
                <li>Você já terá dados. Crie públicos de quem mandou mensagem e visitou o site.</li>
                <li>Comece a refinar baseado nos dados reais gerados no mês anterior.</li>
              </ul>
            </div>
          </div>
          
          <div className="inline-block border-l-4 border-[var(--color-aeg-blue)] pl-6 text-left">
            <h4 className="font-heading text-2xl font-bold uppercase mb-2">A Regra Bruta:</h4>
            <p className="text-gray-300 text-lg">Começa simples. Vai complicando depois. Quem começa complicado, quebra.</p>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 relative overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-6">
            <Users className="w-16 h-16 text-[var(--color-aeg-blue)] mx-auto" />
          </div>
          
          <h2 className="font-heading text-3xl font-bold mb-6">
            Defina o dono do carro
          </h2>
          
          <p className="text-gray-400 mb-8 text-lg">
            Pega o caderno e escreve quem é o cliente do carro que você quer anunciar. Idade, sexo, cidade.
            Na próxima aula, vamos pro Gerenciador colocar isso pra rodar. Te vejo lá.
          </p>

          <button onClick={onNext} className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--color-aeg-blue)] hover:bg-blue-800 text-white font-bold py-5 px-10 rounded-xl transition-all text-xl mx-auto shadow-[0_10px_30px_rgba(10,60,218,0.3)] hover:-translate-y-1 cursor-pointer mb-10">
            <PlayCircle className="w-6 h-6" />
            Ir para Aula 06 
          </button>
        </motion.div>
      </footer>
    </motion.div>
  );
}

function Aula06({ onNext }: { onNext: () => void; key?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* HEADER / ABERTURA */}
      <header className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 pt-20 pb-16 border-b border-white/5">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[var(--color-aeg-blue)] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <PlayCircle className="w-4 h-4 text-[var(--color-aeg-blue)]" />
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-300">Aula 06 • Criando Públicos</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl font-black uppercase leading-tight tracking-tight mb-6">
            Segmentando <br/>
            <span className="text-[var(--color-aeg-blue)]">na Prática</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl font-medium mb-8">
            Vamos voltar na campanha rascunho da aula 4 e configurar pra quem o nosso anúncio vai aparecer (Vantagem+ e Público Personalizado).
          </p>
        </motion.div>
      </header>

      {/* SEÇÃO 1: VOLTANDO AO RASCUNHO OTIMIZADO */}
      <section className="py-20 px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-black uppercase mb-4">Editando o Conjunto de Anúncios</h2>
            <p className="text-gray-400 text-lg">É no "Conjunto" que a gente define o público.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* O que fazer */}
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] border border-white/10 rounded-2xl p-8 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-aeg-blue)]"></div>
              <h3 className="font-heading text-2xl font-bold uppercase mb-4 flex items-center gap-3">
                <MousePointer2 className="w-6 h-6 text-[var(--color-aeg-blue)]" />
                Como acessar
              </h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-400">
                <li>Vá até a aba <strong>Campanhas</strong>.</li>
                <li>Encontre o seu rascunho ("Onix Plus 2020...").</li>
                <li>Clique nela. Você será jogado para a aba <strong>Conjuntos de Anúncios</strong>.</li>
                <li>Passe o mouse por cima do conjunto e clique em <strong>Editar</strong> ou no ícone do Lápis.</li>
                <li>Desça a tela até a parte de <strong>Público</strong>.</li>
              </ul>
            </motion.div>

            {/* Configuração do Vantagem+ */}
            <motion.div variants={fadeUp} className="bg-gradient-to-br from-[var(--color-aeg-blue)]/20 to-transparent border border-[var(--color-aeg-blue)]/30 rounded-2xl p-8 relative">
              <h3 className="font-heading text-2xl font-bold uppercase mb-4 flex items-center gap-3 text-white">
                <Globe className="w-6 h-6 text-[var(--color-aeg-blue)]" />
                Público Vantagem+
              </h3>
              <p className="text-gray-300 font-medium mb-4">Escolha a opção Público Vantagem+ para podermos ajustar Localização, Idade e Gênero de forma inteligente.</p>
              <div className="bg-[var(--color-aeg-darker)] p-4 rounded-lg border border-[var(--color-aeg-blue)]/50 mt-4">
                <p className="text-sm text-gray-300">
                  <strong className="text-[var(--color-aeg-blue)] text-base">Localização (Raio de 30-50km)</strong>: Selecione a sua cidade. Exclusivo para "Pessoas que moram neste local" e defina um raio para evitar pessoas de fora que não têm intenção de comprar presencialmente.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 2: IDADE E GÊNERO */}
      <section className="py-24 px-6 relative bg-white/5 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-black uppercase mb-4">Idade, Gênero e Interesses</h2>
          </div>

          <div className="space-y-8">
            {/* Idade */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-[var(--color-aeg-darker)] border border-white/10 rounded-2xl p-8 flex items-start gap-6"
            >
              <div className="w-12 h-12 bg-white/5 rounded-full flex shrink-0 items-center justify-center text-gray-400 border border-white/10">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold uppercase mb-2">Idade (25 a 60 anos)</h3>
                <p className="text-gray-400">
                  Para um carro como o Onix Plus 2020. <i>"Quem tem menos de 25 raramente tem renda para comprar carro de 50 mil"</i>. Você pode ajustar para 23 (carro mais barato) ou 30 (carro premium).
                </p>
              </div>
            </motion.div>

            {/* Gênero */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-[var(--color-aeg-darker)] border border-white/10 rounded-2xl p-8 flex items-start gap-6"
            >
              <div className="w-12 h-12 bg-white/5 rounded-full flex shrink-0 items-center justify-center text-[var(--color-aeg-blue)] border border-[var(--color-aeg-blue)]/50 shadow-[0_0_15px_rgba(10,60,218,0.3)]">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold uppercase mb-2 text-white">Gênero (Todos)</h3>
                <p className="text-gray-400">
                  Deixe em "Todos". Mulheres também compram carros e muito. Só feche em "Homens" caso seja caminhonete 4x4 ou motos grandes.
                </p>
              </div>
            </motion.div>

            {/* Interesses - Detalhamento */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8 flex items-start gap-6"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-full flex shrink-0 items-center justify-center text-red-500 border border-red-500/30">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold uppercase mb-2 text-red-400">Segmentação Detalhada (Interesses)</h3>
                <p className="text-red-200/80 mb-4 font-medium">
                  Deixe em BRANCO no primeiro teste.
                </p>
                <div className="bg-red-500/10 p-4 rounded-lg font-mono text-sm text-red-300 border border-red-500/20">
                  "Quanto menos você trava, melhor a Meta entrega hoje. Se colocar o nome do carro, pode limitar demais."
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: PÚBLICO PERSONALIZADO AVANÇADO */}
      <section className="py-24 px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto bg-[var(--color-aeg-blue)]/10 border border-[var(--color-aeg-blue)]/30 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Instagram className="w-64 h-64 text-[var(--color-aeg-blue)]" />
          </div>

          <div className="text-center mb-12 relative z-10">
            <div className="bg-[var(--color-aeg-blue)] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded inline-block mb-6 shadow-[0_0_15px_rgba(10,60,218,0.5)]">
              Estratégia Avançada para o Futuro
            </div>
            <h2 className="font-heading text-3xl font-black uppercase mb-4">Público de Engajamento</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Mesmo que você não use agora, você precisa criar isso JÁ para começar a preencher.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 relative z-10">
            <div className="md:w-1/2">
              <h3 className="font-heading text-xl font-bold mb-4 uppercase flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-[var(--color-aeg-blue)]" />
                Como Criar
              </h3>
              <ol className="list-decimal pl-5 text-gray-300 space-y-3 font-medium">
                <li>No menu superior (≡), vá em <strong>Públicos</strong>.</li>
                <li>Clique em <strong>Criar Público</strong> &gt; <strong>Público Personalizado</strong>.</li>
                <li>Selecione <strong>Conta do Instagram</strong>.</li>
                <li>Escolha "Todos que engajaram com esta conta profissional".</li>
                <li>Tempo: <strong>365 dias</strong>.</li>
                <li>Nome: "Engajaram Instagram - 365 dias". Salvar.</li>
              </ol>
            </div>
            <div className="md:w-1/2 bg-[var(--color-aeg-darker)] p-6 rounded-xl border border-[var(--color-aeg-blue)]/50">
              <p className="text-gray-300 italic">
                "Esse público vai encher com o tempo. Daqui a 30, 60 dias, você terá milhares de pessoas com quem já teve contato. Campanhas de remarketing para eles convertem muito mais."
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 relative overflow-hidden bg-[var(--color-aeg-darker)]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-6">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
          </div>
          
          <h2 className="font-heading text-3xl font-bold mb-6">
            Públicos Feitos!
          </h2>
          
          <p className="text-gray-400 mb-8 text-lg">
            A sua segmentação está salva no rascunho e pronta para rodar. <br/>
            Falta a peça mais importante para finalizar: o Anúncio.
          </p>

          <div className="p-6 bg-white/5 rounded-xl border border-white/10 uppercase tracking-widest text-sm font-bold text-gray-300">
            Próxima aula: Criar o anúncio (Foto, Texto e CTAs) que faz o cliente parar de rolar o feed.
          </div>

          <button onClick={onNext} className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--color-aeg-blue)] hover:bg-blue-800 text-white font-bold py-5 px-10 rounded-xl transition-all text-xl mx-auto shadow-[0_10px_30px_rgba(10,60,218,0.3)] hover:-translate-y-1 cursor-pointer mt-10 mb-2">
            <PlayCircle className="w-6 h-6" />
            Ir para Aula 07 
          </button>
        </motion.div>
      </footer>
    </motion.div>
  );
}

function Aula07({ key }: { key?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* HEADER / ABERTURA */}
      <header className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 pt-20 pb-16 border-b border-white/5">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[var(--color-aeg-blue)] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <PlayCircle className="w-4 h-4 text-[var(--color-aeg-blue)]" />
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-300">Aula 07 • Criação de Anúncios</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl font-black uppercase leading-tight tracking-tight mb-6">
            O anúncio que <br/>
            <span className="text-[var(--color-aeg-blue)]">para o dedo</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl font-medium mb-8">
            Tudo que a gente fez até agora não vale nada se o anúncio em si não for bom. Vou te ensinar a fórmula pra fazer anúncio que chama atenção e gera contato.
          </p>
        </motion.div>
      </header>

      {/* SEÇÃO 1: POR QUE A MAIORIA ERRA */}
      <section className="py-20 px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-black uppercase mb-4">Ruim x Bom</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Por que 80% das lojas de carro jogam dinheiro fora no tráfego.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* O Anúncio Lixo */}
            <motion.div variants={fadeUp} className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8 relative grayscale-[50%]">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-red-500" />
                <h3 className="font-heading text-2xl font-bold uppercase text-red-500">Anúncio Lixo</h3>
              </div>
              <div className="bg-[var(--color-aeg-darker)] p-4 rounded-lg border border-red-500/10 mb-4 opacity-80">
                <p className="font-mono text-xs text-gray-400 mb-2 uppercase">Texto Vago:</p>
                <p className="text-sm font-bold text-gray-300">"AUTO SHOW MULTIMARCAS - VENHA CONHECER NOSSAS OFERTAS - FINANCIAMOS EM ATÉ 60X"</p>
                <div className="mt-4 bg-white/5 h-32 rounded flex items-center justify-center text-gray-500 italic text-xs border border-white/10">
                  <Camera className="w-4 h-4 mr-2" />
                  Fachada da loja com o vendedor de braço cruzado
                </div>
              </div>
              <ul className="text-sm text-red-300/80 space-y-2">
                <li>• Ninguém pesquisa o NOME da loja.</li>
                <li>• "Nossas ofertas" é vago demais.</li>
                <li>• Cliente quer ver o CARRO e o PREÇO, não a fachada.</li>
              </ul>
            </motion.div>

            {/* O Anúncio Que Vende */}
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-blue)]/10 border border-[var(--color-aeg-blue)]/30 rounded-2xl p-8 relative shadow-[0_0_30px_rgba(10,60,218,0.15)]">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
                <h3 className="font-heading text-2xl font-bold uppercase text-white">Anúncio Que Vende</h3>
              </div>
              <div className="bg-[var(--color-aeg-darker)] p-4 rounded-lg border border-[var(--color-aeg-blue)]/30 mb-4">
                <p className="font-mono text-xs text-[var(--color-aeg-blue)] mb-2 uppercase">Texto Direto:</p>
                <p className="text-sm font-bold text-gray-200">"Tá procurando um carro pra família... Onix Plus tá impecável. Manda 'OI' que te mando todos os detalhes."</p>
                <div className="mt-4 bg-[var(--color-aeg-blue)]/20 h-32 rounded flex flex-col items-center justify-center border border-[var(--color-aeg-blue)]/40 relative overflow-hidden">
                  <div className="absolute top-2 right-2 bg-black/80 px-2 py-1 text-xs font-black text-white rounded">R$ 49.900</div>
                  <span className="text-white font-bold text-sm">Foto Onix Brilhando</span>
                  <span className="text-blue-300 text-xs mt-1">Parcelas a partir de R$ 990</span>
                </div>
              </div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Carro específico brilhando.</li>
                <li>• Preço claro, parcela clara.</li>
                <li>• Chamada direta ("Manda OI").</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 2: HOOK STORY OFFER */}
      <section className="py-24 px-6 relative bg-white/5 border-t border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-black uppercase mb-4">A Fórmula H-S-O</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Hook, Story, Offer. A estrutura de qualquer anúncio milionário (Russell Brunson).</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] p-8 rounded-2xl border border-white/10 relative group hover:border-[var(--color-aeg-blue)]/50 transition-colors">
              <Magnet className="w-12 h-12 text-[var(--color-aeg-blue)] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-2xl font-bold uppercase mb-4 text-white">1. Gancho <span className="text-gray-500 text-sm">(Hook)</span></h3>
              <p className="text-gray-400">
                Faz o cliente PARAR de rolar. Ele tem UM SEGUNDO. Pode ser uma foto excelente, um preço enorme na tela ou uma frase de impacto ("Mais barato que leilão").
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] p-8 rounded-2xl border border-white/10 relative group hover:border-[var(--color-aeg-blue)]/50 transition-colors">
              <BookOpen className="w-12 h-12 text-[var(--color-aeg-blue)] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-2xl font-bold uppercase mb-4 text-white">2. História <span className="text-gray-500 text-sm">(Story)</span></h3>
              <p className="text-gray-400">
                Por que vale a pena? "Único dono, revisado, loja com 10 anos de mercado". Histórias de confiança e procedência vendem e quebram objeção de golpe.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] p-8 rounded-2xl border border-[var(--color-aeg-blue)]/30 relative group hover:border-[var(--color-aeg-blue)]/80 transition-colors shadow-[0_0_20px_rgba(10,60,218,0.1)]">
              <Tag className="w-12 h-12 text-[var(--color-aeg-blue)] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-2xl font-bold uppercase mb-4 text-[var(--color-aeg-blue)]">3. Oferta <span className="text-[var(--color-aeg-blue)]/50 text-sm">(Offer)</span></h3>
              <p className="text-gray-300 font-medium">
                O que ele faz AGORA? "Manda OI no WhatsApp e te mando os detalhes." Peça o MENOR passo possível. Quanto menor o pedido, mais gente faz.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 3: ELEMENTOS VISUAIS E ERROS */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="md:w-1/2"
          >
            <h2 className="font-heading text-3xl font-black uppercase mb-8 flex items-center gap-3">
              <Camera className="w-8 h-8 text-[var(--color-aeg-blue)]" />
              Os 3 Visuais
            </h2>
            <div className="space-y-6">
              <motion.div variants={fadeUp} className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h4 className="font-bold text-white uppercase mb-2">1. Foto BOA do Carro</h4>
                <p className="text-gray-400 text-sm">Ângulo de 45 graus, limpo, fundo neutro, bem iluminado. Pague 50 reais para um fotógrafo se precisar. Melhor investimento.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h4 className="font-bold text-white uppercase mb-2">2. Texto NA Imagem</h4>
                <p className="text-gray-400 text-sm">Preço GRANDE em cima da foto ("R$ 49.900" ou "Parcelas R$ 990"). O cliente vê de longe sem precisar ler o texto do post.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h4 className="font-bold text-white uppercase mb-2">3. Carrossel ou Vídeo (15s)</h4>
                <p className="text-gray-400 text-sm">Várias fotos (frente, lado, interior, motor) ou um vídeo rápido dando a volta no carro. Vídeo entrega MUITO hoje.</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="md:w-1/2 bg-red-500/5 p-8 rounded-3xl border border-red-500/20"
          >
            <h2 className="font-heading text-3xl font-black uppercase mb-8 flex items-center gap-3 text-red-500">
              <XCircle className="w-8 h-8" />
              Os 5 Erros Fatais
            </h2>
            <ul className="space-y-4">
              <motion.li variants={fadeUp} className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-red-500/20 text-red-500 rounded flex items-center justify-center font-bold shrink-0">1</div>
                <div><strong className="text-red-200">Foto ruim.</strong> <span className="text-red-400/80 text-sm">Se na foto tá feio, na vida real acham que tá pior.</span></div>
              </motion.li>
              <motion.li variants={fadeUp} className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-red-500/20 text-red-500 rounded flex items-center justify-center font-bold shrink-0">2</div>
                <div><strong className="text-red-200">Esconder preço.</strong> <span className="text-red-400/80 text-sm">Cliente rola e esquece. Bote o preço grande.</span></div>
              </motion.li>
              <motion.li variants={fadeUp} className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-red-500/20 text-red-500 rounded flex items-center justify-center font-bold shrink-0">3</div>
                <div><strong className="text-red-200">Texto longo demais.</strong> <span className="text-red-400/80 text-sm">3 a 5 linhas. Se tem que ler muito, já saiu.</span></div>
              </motion.li>
              <motion.li variants={fadeUp} className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-red-500/20 text-red-500 rounded flex items-center justify-center font-bold shrink-0">4</div>
                <div><strong className="text-red-200">Sem Call to Action.</strong> <span className="text-red-400/80 text-sm">"Venha conhecer" não é CTA. "Manda OI" é um pedido claro.</span></div>
              </motion.li>
              <motion.li variants={fadeUp} className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-red-500/20 text-red-500 rounded flex items-center justify-center font-bold shrink-0">5</div>
                <div><strong className="text-red-200">Anúncio sem cara.</strong> <span className="text-red-400/80 text-sm">Coloque seu nome. "O Mário da loja tal tá te chamando". Dá confiança.</span></div>
              </motion.li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 relative overflow-hidden bg-[var(--color-aeg-darker)] border-t border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-6">
            <Megaphone className="w-16 h-16 text-[var(--color-aeg-blue)] mx-auto" />
          </div>
          
          <h2 className="font-heading text-3xl font-bold mb-6">
            Crie o seu H-S-O
          </h2>
          
          <p className="text-gray-400 mb-8 text-lg">
            Escolhe um carro da sua loja, escreva o GANCHO, a HISTÓRIA, e a OFERTA. Tira fotos boas se não tem.<br/>
            Na próxima aula, nós vamos subir e publicar isso.
          </p>
        </motion.div>
      </footer>
    </motion.div>
  );
}

export default function App() {
  const [currentTab, setCurrentTab] = useState<'aula01' | 'aula02' | 'aula03' | 'aula04' | 'aula05' | 'aula06' | 'aula07'>('aula01');

  // Rola para o topo sempre que a aba mudar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  return (
    <div className="font-sans min-h-screen bg-[var(--color-aeg-darker)] text-white selection:bg-[var(--color-aeg-blue)] selection:text-white pb-10">
      
      {/* BACKGROUND GRADIENTS */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[var(--color-aeg-blue)] opacity-10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[var(--color-aeg-blue)] opacity-[0.05] blur-[150px] rounded-full"></div>
      </div>

      {/* NAVIGATION BAR FIXA */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[var(--color-aeg-darker)]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="font-heading font-black text-xl tracking-tighter uppercase flex items-center gap-2">
             <div className="w-8 h-8 bg-[var(--color-aeg-blue)] rounded flex items-center justify-center text-white text-xs">
               AEG
             </div>
             Media
          </div>
          
          <nav className="flex bg-white/5 p-1 rounded-lg border border-white/10">
            <button 
              onClick={() => setCurrentTab('aula01')}
              className={`px-6 py-2 rounded-md font-bold text-sm tracking-wide uppercase transition-all ${currentTab === 'aula01' ? 'bg-[var(--color-aeg-blue)] text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              Aula 01
            </button>
            <button 
              onClick={() => setCurrentTab('aula02')}
              className={`px-6 py-2 rounded-md font-bold text-sm tracking-wide uppercase transition-all flex items-center gap-2 ${currentTab === 'aula02' ? 'bg-[var(--color-aeg-blue)] text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              {currentTab === 'aula01' && <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>}
              Aula 02
            </button>
            <button 
              onClick={() => setCurrentTab('aula03')}
              className={`px-6 py-2 rounded-md font-bold text-sm tracking-wide uppercase transition-all flex items-center gap-2 ${currentTab === 'aula03' ? 'bg-[var(--color-aeg-blue)] text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              {currentTab === 'aula02' && <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>}
              Aula 03
            </button>
            <button 
              onClick={() => setCurrentTab('aula04')}
              className={`px-6 py-2 rounded-md font-bold text-sm tracking-wide uppercase transition-all flex items-center gap-2 ${currentTab === 'aula04' ? 'bg-[var(--color-aeg-blue)] text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              {currentTab === 'aula03' && <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>}
              Aula 04
            </button>
            <button 
              onClick={() => setCurrentTab('aula05')}
              className={`px-6 py-2 rounded-md font-bold text-sm tracking-wide uppercase transition-all flex items-center gap-2 ${currentTab === 'aula05' ? 'bg-[var(--color-aeg-blue)] text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              {currentTab === 'aula04' && <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>}
              Aula 05
            </button>
            <button 
              onClick={() => setCurrentTab('aula06')}
              className={`px-6 py-2 rounded-md font-bold text-sm tracking-wide uppercase transition-all flex items-center gap-2 ${currentTab === 'aula06' ? 'bg-[var(--color-aeg-blue)] text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              {currentTab === 'aula05' && <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>}
              Aula 06
            </button>
            <button 
              onClick={() => setCurrentTab('aula07')}
              className={`px-6 py-2 rounded-md font-bold text-sm tracking-wide uppercase transition-all flex items-center gap-2 ${currentTab === 'aula07' ? 'bg-[var(--color-aeg-blue)] text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              {currentTab === 'aula06' && <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>}
              Aula 07
            </button>
          </nav>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="pt-24">
        <AnimatePresence mode="wait">
          {currentTab === 'aula01' && <Aula01 key="aula01" onNext={() => setCurrentTab('aula02')} />}
          {currentTab === 'aula02' && <Aula02 key="aula02" onNext={() => setCurrentTab('aula03')} />}
          {currentTab === 'aula03' && <Aula03 key="aula03" onNext={() => setCurrentTab('aula04')} />}
          {currentTab === 'aula04' && <Aula04 key="aula04" onNext={() => setCurrentTab('aula05')} />}
          {currentTab === 'aula05' && <Aula05 key="aula05" onNext={() => setCurrentTab('aula06')} />}
          {currentTab === 'aula06' && <Aula06 key="aula06" onNext={() => setCurrentTab('aula07')} />}
          {currentTab === 'aula07' && <Aula07 key="aula07" />}
        </AnimatePresence>
      </div>

    </div>
  );
}


