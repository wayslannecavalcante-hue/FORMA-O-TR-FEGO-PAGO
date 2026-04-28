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
  Camera,
  Images,
  Send,
  Car,
  LayoutGrid,
  Snowflake,
  Sun,
  Flame,
  Activity,
  DollarSign,
  HelpCircle,
  Trash2,
  CopyPlus,
  Columns,
  Timer,
  BarChart3,
  TrendingUp,
  Settings,
  ArrowUpRight,
  PieChart,
  ClipboardCheck,
  ListTodo,
  CheckSquare,
  PlaySquare
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

function Aula07({ onNext, key }: { onNext: () => void; key?: string }) {
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

          <button onClick={onNext} className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--color-aeg-blue)] hover:bg-blue-800 text-white font-bold py-5 px-10 rounded-xl transition-all text-xl mx-auto shadow-[0_10px_30px_rgba(10,60,218,0.3)] hover:-translate-y-1 cursor-pointer mb-10">
            <PlayCircle className="w-6 h-6" />
            Ir para Aula 08 
          </button>
        </motion.div>
      </footer>
    </motion.div>
  );
}

function Aula08({ onNext }: { onNext: () => void; key?: string }) {
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
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-300">Aula 08 • Lançando Campanhas</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl font-black uppercase leading-tight tracking-tight mb-6">
            Sua primeira campanha <br/>
            <span className="text-[var(--color-aeg-blue)]">no AR</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl font-medium mb-8">
            Hoje sua primeira campanha vai pro AR. Pega o computador, pega as fotos do carro, e bora. Vamos juntos.
          </p>
        </motion.div>
      </header>

      {/* SEÇÃO 1: CRIANDO O ANÚNCIO */}
      <section className="py-20 px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-black uppercase mb-4">Configurando o Anúncio</h2>
            <p className="text-gray-400 text-lg">Criando o anúncio dentro da campanha rascunho que já tá lá.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] border border-white/10 p-6 rounded-xl relative">
              <MousePointer2 className="w-10 h-10 text-[var(--color-aeg-blue)] mb-4" />
              <h3 className="font-heading text-xl font-bold uppercase mb-2">1. Acesse o Rascunho</h3>
              <p className="text-gray-400 text-sm">Na aba "Campanhas", clique na sua campanha. Vá para a aba "Anúncios" (estará vazia). Clique em "Criar", confirme o conjunto e vá em "Continuar".</p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] border border-white/10 p-6 rounded-xl relative">
              <Edit3 className="w-10 h-10 text-[var(--color-aeg-blue)] mb-4" />
              <h3 className="font-heading text-xl font-bold uppercase mb-2">2. Nome e Identidade</h3>
              <p className="text-gray-400 text-sm">Nome bom: "Onix Plus - Foto Carrossel - v1". Selecione a Página do Facebook da loja e o Instagram da loja.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] border border-white/10 p-6 rounded-xl relative">
              <Images className="w-10 h-10 text-[var(--color-aeg-blue)] mb-4" />
              <h3 className="font-heading text-xl font-bold uppercase mb-2">3. Formato</h3>
              <p className="text-gray-400 text-sm">A Meta te dá "Imagem Única" ou "Carrossel". Para carro, o CARROSSEL é recomendado (mais fotos = mais chance de atenção).</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 2: FOTOS E COPY */}
      <section className="py-24 px-6 relative bg-white/5 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-black uppercase mb-4">Aplicando o "H-S-O"</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Fotos */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-[var(--color-aeg-darker)] border border-white/10 rounded-2xl p-8"
            >
              <h3 className="font-heading text-2xl font-bold uppercase mb-6 flex items-center gap-3 text-white">
                <Images className="w-6 h-6 text-[var(--color-aeg-blue)]" />
                Criando o Carrossel
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-aeg-blue)]/20 text-[var(--color-aeg-blue)] flex items-center justify-center font-bold text-sm shrink-0">1</div>
                  <span>Adicione <strong>4 cartões</strong>: foto frente, lateral, interior e motor.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-aeg-blue)]/20 text-[var(--color-aeg-blue)] flex items-center justify-center font-bold text-sm shrink-0">2</div>
                  <span>Clique no 1º cartão {"->"} "Adicionar mídia" {"->"} suba a foto.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-aeg-blue)]/20 text-[var(--color-aeg-blue)] flex items-center justify-center font-bold text-sm shrink-0">3</div>
                  <span>Em "Título", escreva algo como <strong>"Onix Plus 2020 - R$ 49.900"</strong> (Aparece abaixo da foto, é muito importante).</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-aeg-blue)]/20 text-[var(--color-aeg-blue)] flex items-center justify-center font-bold text-sm shrink-0">4</div>
                  <span>Repita pras outras fotos.</span>
                </li>
              </ul>
            </motion.div>

            {/* Texto (Copy) */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-[var(--color-aeg-darker)] border border-[var(--color-aeg-blue)]/30 rounded-2xl p-8 shadow-[0_0_20px_rgba(10,60,218,0.1)]"
            >
              <h3 className="font-heading text-2xl font-bold uppercase mb-6 flex items-center gap-3 text-[var(--color-aeg-blue)]">
                <Edit3 className="w-6 h-6" />
                O Texto Principal
              </h3>
              <div className="bg-white/5 p-4 rounded-xl font-mono text-sm text-gray-300 border border-white/10 space-y-4">
                <p><span className="text-[var(--color-aeg-blue)] font-bold">// GANCHO</span><br/>"Tá procurando um carro pra família, que não dá dor de cabeça? Esse Onix Plus 2020 tá impecável."</p>
                <p><span className="text-green-500 font-bold">// HISTÓRIA</span><br/>"- 56.000 km rodados<br/>- Segundo dono<br/>- Manual, reserva...<br/>...Aqui no Auto Show, mais de 10 anos vendendo carro tranquilo."</p>
                <p><span className="text-red-400 font-bold">// OFERTA</span><br/>"R$ 49.900 à vista, ou parcelas a partir de R$ 990.<br/>Manda OI aqui no WhatsApp que te mando todos os detalhes."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: DESTINO E PUBLICAÇÃO */}
      <section className="py-24 px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] p-8 rounded-2xl border border-white/10">
              <MessageSquare className="w-10 h-10 text-[var(--color-aeg-blue)] mb-4" />
              <h3 className="font-heading text-2xl font-bold uppercase mb-4 text-white">Destino: WhatsApp</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>• Confirme que o destino está marcado como <strong>WhatsApp</strong>.</li>
                <li>• Botão Chamada para Ação (CTA): <strong>"Enviar mensagem"</strong>.</li>
                <li>• Mensagem Automática: configure a saudação ex: <span className="italic text-gray-300">"Olá! Vi que se interessou pelo Onix. Prefere à vista ou financiado?"</span>. Isso já qualifica o cliente.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-gradient-to-br from-[var(--color-aeg-blue)]/20 to-green-500/10 p-8 rounded-2xl border border-green-500/30 relative shadow-[0_0_30px_rgba(34,197,94,0.15)] flex flex-col justify-center text-center">
              <Send className="w-16 h-16 text-green-400 mb-6 mx-auto" />
              <h3 className="font-heading text-3xl font-bold uppercase mb-4 text-white">Publicar!</h3>
              <p className="text-gray-300 mb-6 font-medium max-w-sm mx-auto">
                Olhe no lado direito (Pré-visualização). Tá bonito no Face, Insta e Stories? A foto não tá cortando?
              </p>
              <div className="bg-green-500 text-white font-bold text-center py-4 rounded-xl uppercase tracking-widest shadow-lg shadow-green-500/20 w-full animate-pulse border border-green-400">
                Clicar em "Publicar"
              </div>
            </motion.div>
          </div>

          {/* ALERTA DE 72H */}
          <motion.div variants={fadeUp} className="mt-12 bg-red-500/10 border border-red-500/30 p-8 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-20 h-20 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(239,68,68,0.4)]">
              <RefreshCcw className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-red-400 uppercase mb-4">A Regra de Ouro: As 72 Horas</h3>
              <p className="text-red-200/90 text-lg">
                A Meta dirá: "Em revisão" e aprovará em 1 a 24 horas. Depois que aprovar, COMEÇA A RODAR.<br/><br/>
                <strong className="text-red-400 underline decoration-red-500/50 underline-offset-4">NÃO MEXA EM NADA NAS PRÓXIMAS 72 HORAS.</strong><br/>
                A IA precisa desse tempo. Se você ficar alterando e futucando, ela zera toda a aprendizagem e joga seu dinheiro fora.
              </p>
            </div>
          </motion.div>
        </motion.div>
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
            <Rocket className="w-20 h-20 text-[var(--color-aeg-blue)] mx-auto animate-bounce" />
          </div>
          
          <h2 className="font-heading text-4xl font-black uppercase mb-6 text-white drop-shadow-lg">
            Campanha no Ar!
          </h2>
          
          <p className="text-gray-300 mb-8 text-xl font-medium">
            Você acabou de fazer o que 90% dos lojistas de carros não fazem.<br/>
            Acompanhe as mensagens. Quando chegar gente, atenda RÁPIDO. <span className="text-[var(--color-aeg-blue)]">Quem responde primeiro, vende.</span>
          </p>

          <div className="p-6 bg-[var(--color-aeg-blue)]/10 rounded-xl border border-[var(--color-aeg-blue)]/30 uppercase tracking-widest text-sm font-bold text-[var(--color-aeg-blue)] shadow-[0_0_30px_rgba(10,60,218,0.1)] mb-10">
            Próxima aula: Estratégias profundas e específicas de tráfego para Loja de Veículos.
          </div>

          <button onClick={onNext} className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--color-aeg-blue)] hover:bg-blue-800 text-white font-bold py-5 px-10 rounded-xl transition-all text-xl mx-auto shadow-[0_10px_30px_rgba(10,60,218,0.3)] hover:-translate-y-1 cursor-pointer">
            <PlayCircle className="w-6 h-6" />
            Ir para Aula 09 
          </button>
        </motion.div>
      </footer>
    </motion.div>
  );
}

function Aula09({ onNext }: { onNext: () => void; key?: string }) {
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
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-300">Aula 09 • Estratégias de Tráfego</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl font-black uppercase leading-tight tracking-tight mb-6">
            Tráfego para <br/>
            <span className="text-[var(--color-aeg-blue)]">Lojas de Veículos</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl font-medium mb-8">
            Estratégias específicas que funcionam pra QUEM VENDE CARRO. Campanha por carro vs loja inteira, funil de cliente e frequência ideal.
          </p>
        </motion.div>
      </header>

      {/* SEÇÃO 1: CARRO POR CARRO VS LOJA */}
      <section className="py-20 px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-black uppercase mb-4">Campanha por Carro <span className="text-[var(--color-aeg-blue)]">vs</span> Loja Inteira</h2>
            <p className="text-gray-400 text-lg">Qual estratégia usar e quando aplicar cada uma.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-aeg-blue)]/10 rounded-bl-full pointer-events-none" />
              <Car className="w-10 h-10 text-[var(--color-aeg-blue)] mb-6" />
              <h3 className="font-heading text-2xl font-bold uppercase mb-4">Carro Específico</h3>
              <ul className="space-y-4 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Carros mais caros (acima de R$ 60 mil).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Raros ou diferenciados (4x4, premium, esportivo).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Quando quer testar qual carro tem mais demanda.</span>
                </li>
              </ul>
              <div className="bg-black/30 p-4 rounded-lg text-sm text-gray-400">
                <strong className="text-white">Por que funciona:</strong> A foto e o preço CHAMAM a atenção pra AQUELE carro. Anúncio "frio" direto pra venda.
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-aeg-blue)]/10 rounded-bl-full pointer-events-none" />
              <LayoutGrid className="w-10 h-10 text-[var(--color-aeg-blue)] mb-6" />
              <h3 className="font-heading text-2xl font-bold uppercase mb-4">Loja Inteira <span className="text-sm text-gray-500 normal-case">(Carrossel)</span></h3>
              <ul className="space-y-4 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Muito carro popular (abaixo de R$ 50 mil) com giro alto.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Não quer trocar de criativo a cada venda.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Para mostrar a VARIEDADE do pátio.</span>
                </li>
              </ul>
              <div className="bg-black/30 p-4 rounded-lg text-sm text-gray-400">
                <strong className="text-white">Por que funciona:</strong> O cliente quer trocar de carro mas nem sempre sabe qual. Ver 6 opções dá a chance de "me interessei por esse".
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="bg-[var(--color-aeg-blue)]/10 border border-[var(--color-aeg-blue)]/30 rounded-2xl p-6 text-center shadow-[0_0_20px_rgba(10,60,218,0.1)]">
            <h4 className="font-bold text-white uppercase mb-2">Regra de Ouro (Bolso)</h4>
            <p className="text-gray-300">Rode <strong className="text-white">1 campanha "Loja Inteira"</strong> como base constânte. E adicione <strong className="text-white">1 ou 2 campanhas de "Carro Estrela"</strong> (o que quer dar saída ou o mais atrativo).</p>
          </motion.div>
        </motion.div>
      </section>

      {/* SEÇÃO 2: O FUNIL */}
      <section className="py-24 px-6 relative bg-white/5 border-t border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-black uppercase mb-4">O Funil de Três Etapas</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">A temperatura do cliente. A estratégia muda para cada etapa da jornada.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeUp} className="bg-blue-500/10 border border-blue-500/20 p-8 rounded-2xl text-center relative hover:bg-blue-500/20 transition-colors">
              <Snowflake className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-bold uppercase mb-2 text-blue-300">Cliente Frio</h3>
              <p className="text-gray-400 text-sm mb-4">Nunca ouviu falar da loja. Vendo seu anúncio pela 1ª vez.</p>
              <div className="bg-black/40 p-4 rounded-xl text-left border border-blue-500/10">
                <strong className="text-blue-300 block text-sm mb-1">Ação:</strong>
                <p className="text-gray-300 text-sm">Apresentação. Chamar atenção para um carro e preço específico. A campanha aberta atende isso.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-orange-500/10 border border-orange-500/20 p-8 rounded-2xl text-center relative hover:bg-orange-500/20 transition-colors">
              <Sun className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-bold uppercase mb-2 text-orange-300">Cliente Morno</h3>
              <p className="text-gray-400 text-sm mb-4">Já viu anúncios ou visitou o Instagram da loja.</p>
              <div className="bg-black/40 p-4 rounded-xl text-left border border-orange-500/10">
                <strong className="text-orange-300 block text-sm mb-1">Ação:</strong>
                <p className="text-gray-300 text-sm">História e Prova Social. "Conheça o Auto Show, X anos no mercado. Veja o depoimento do João".</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-red-500/10 border border-red-500/20 p-8 rounded-2xl text-center relative shadow-[0_0_30px_rgba(239,68,68,0.1)] hover:bg-red-500/20 transition-colors">
              <Flame className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-bold uppercase mb-2 text-red-500">Cliente Quente</h3>
              <p className="text-gray-400 text-sm mb-4">Já mandou mensagem ou visitou a loja antes.</p>
              <div className="bg-black/40 p-4 rounded-xl text-left border border-red-500/10">
                <strong className="text-red-400 block text-sm mb-1">Ação:</strong>
                <p className="text-gray-300 text-sm">Oferta Agressiva (Remarketing). "Fizemos até X reais de desconto pra você fechar essa semana".</p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="mt-12 text-center text-gray-400">
            <p><strong>A maioria só foca no FRIO.</strong> Comece nele, mas após 2 meses, ative campanhas MORNAS e QUENTES.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* SEÇÃO 3: FREQUÊNCIA, HORÁRIO E ORÇAMENTO */}
      <section className="py-24 px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] p-6 rounded-2xl border border-white/5">
              <Activity className="w-8 h-8 text-[var(--color-aeg-blue)] mb-4" />
              <h3 className="font-heading text-xl font-bold uppercase mb-3">Frequência</h3>
              <p className="text-gray-400 text-sm mb-4">Quantas vezes a mesma pessoa vê o anúncio.</p>
              <div className="text-2xl font-black text-white mb-2">2 a 4 vezes</div>
              <p className="text-gray-500 text-xs">Se passou de 4 ou 5 na coluna Frequência, troque o anúncio (nova foto, novo texto). O público cansou.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] p-6 rounded-2xl border border-white/5">
              <Clock className="w-8 h-8 text-[var(--color-aeg-blue)] mb-4" />
              <h3 className="font-heading text-xl font-bold uppercase mb-3">Horários</h3>
              <p className="text-gray-400 text-sm mb-4">A Meta é boa em otimizar, mas historicamente para carros:</p>
              <ul className="text-sm text-white space-y-2 mb-2">
                <li>• 19h às 23h (Noite)</li>
                <li>• Sábados e Domingos</li>
              </ul>
              <p className="text-gray-500 text-xs">Pode deixar automático, mas saiba os picos.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] p-6 rounded-2xl border border-[var(--color-aeg-blue)]/20 shadow-[0_0_20px_rgba(10,60,218,0.1)]">
              <DollarSign className="w-8 h-8 text-[var(--color-aeg-blue)] mb-4" />
              <h3 className="font-heading text-xl font-bold uppercase mb-3 text-[var(--color-aeg-blue)]">Orçamento</h3>
              <p className="text-gray-400 text-sm mb-4">Regra geral de investimento mensal pra loja de veículos:</p>
              <div className="text-2xl font-black text-white mb-2">1% a 3%</div>
              <p className="text-gray-500 text-xs">Do faturamento. Ex: Fatura 200k = gasta 2k a 6k. Loja pequena começando: 30 a 50 reais/dia.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 4: POPULAR VS PREMIUM */}
      <section className="py-24 px-6 relative bg-white/5 border-t border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-black uppercase mb-4">Carro Popular <span className="text-[var(--color-aeg-blue)]">vs</span> Premium</h2>
            <p className="text-gray-400 text-lg">Os clientes são diferentes. A estratégia também precisa ser.</p>
          </div>

          <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden border border-white/10">
            {/* Popular */}
            <motion.div variants={fadeUp} className="md:w-1/2 p-8 md:p-12 bg-black/40 border-b md:border-b-0 md:border-r border-white/10">
              <h3 className="font-heading text-3xl font-black uppercase mb-6 text-white">🚗 Populares</h3>
              <p className="text-[var(--color-aeg-blue)] font-bold text-sm uppercase mb-8">Até R$ 60 Mil</p>
              
              <ul className="space-y-6 text-gray-300">
                <li>
                  <strong className="text-white block">Decisão Rápida</strong>
                  <span className="text-sm text-gray-400">Cliente decide em menos de 30 dias.</span>
                </li>
                <li>
                  <strong className="text-white block">Foco na Parcela</strong>
                  <span className="text-sm text-gray-400">Eles olham menos o preço total e mais o valor que cabe no mês.</span>
                </li>
                <li>
                  <strong className="text-white block">Criativo Direto</strong>
                  <span className="text-sm text-gray-400">Mensagens curtas, foto direta do carro.</span>
                </li>
                <li>
                  <strong className="text-white block">Volume de Leads</strong>
                  <span className="text-sm text-gray-400">Gera mais chamadas no WhatsApp, exige atendimento veloz.</span>
                </li>
              </ul>
            </motion.div>

            {/* Premium */}
            <motion.div variants={fadeUp} className="md:w-1/2 p-8 md:p-12 bg-[var(--color-aeg-blue)]/5 relative">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[var(--color-aeg-blue)]/10 to-transparent pointer-events-none" />
              <h3 className="font-heading text-3xl font-black uppercase mb-6 text-white relative z-10">🚙 Premium</h3>
              <p className="text-[var(--color-aeg-blue)] font-bold text-sm uppercase mb-8 relative z-10">Acima de R$ 80 Mil</p>
              
              <ul className="space-y-6 text-gray-300 relative z-10">
                <li>
                  <strong className="text-white block">Decisão Lenta</strong>
                  <span className="text-sm text-gray-400">Cliente pensa de 30 a 90 dias antes de fechar.</span>
                </li>
                <li>
                  <strong className="text-white block">Foco em Status e Qualidade</strong>
                  <span className="text-sm text-gray-400">Busca procedência, laudo cautelar, exclusividade.</span>
                </li>
                <li>
                  <strong className="text-white block">Conteúdo Profundo</strong>
                  <span className="text-sm text-gray-400">Vídeos maiores mostrando detalhes técnicos (banco de couro, teto solar).</span>
                </li>
                <li>
                  <strong className="text-white block">Menos Volume, Alta Qualidade</strong>
                  <span className="text-sm text-gray-400">Menos leads, mas os que chegam são muito qualificados e exigentes.</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <div className="text-center mt-10">
             <p className="text-gray-400">Se você tem um mix de carros na loja, <strong className="text-white">separe as campanhas</strong>. Orçamento maior para giro rápido (populares), orçamento menor e mais qualidade para as premium.</p>
          </div>

        </motion.div>
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
            <Settings2 className="w-16 h-16 text-[var(--color-aeg-blue)] mx-auto" />
          </div>
          
          <h2 className="font-heading text-3xl font-bold mb-6">
            Pense na sua loja
          </h2>
          
          <p className="text-gray-400 mb-8 text-lg">
            Quais carros você vai separar em campanhas próprias? Você tem só popular, só premium, ou misto?<br/>
            Saber isso muda tudo.
          </p>

          <div className="p-6 bg-white/5 rounded-xl border border-white/10 uppercase tracking-widest text-sm font-bold text-gray-300 mb-10">
            Próxima aula: Ajustes de Campanha (Como saber o que tá funcionando).
          </div>

          <button onClick={onNext} className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--color-aeg-blue)] hover:bg-blue-800 text-white font-bold py-5 px-10 rounded-xl transition-all text-xl mx-auto shadow-[0_10px_30px_rgba(10,60,218,0.3)] hover:-translate-y-1 cursor-pointer">
            <PlayCircle className="w-6 h-6" />
            Ir para Aula 10 
          </button>
        </motion.div>
      </footer>
    </motion.div>
  );
}

function Aula10({ onNext, key }: { onNext?: () => void; key?: string }) {
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
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-300">Aula 10 • Ajustando Campanhas</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl font-black uppercase leading-tight tracking-tight mb-6">
            Como saber se tá <br/>
            <span className="text-[var(--color-aeg-blue)]">funcionando?</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl font-medium mb-8">
            Tem gente que mata a campanha em 2 dias e tem gente que deixa rodar 30 dias queimando dinheiro. Aprenda a regra simples para avaliar suas campanhas.
          </p>
        </motion.div>
      </header>

      {/* SEÇÃO 1: 3 PERGUNTAS */}
      <section className="py-20 px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-black uppercase mb-4 flex items-center justify-center gap-3">
              <HelpCircle className="w-8 h-8 text-[var(--color-aeg-blue)]" />
              As 3 Perguntas de Avaliação
            </h2>
            <p className="text-gray-400 text-lg">Antes de olhar para os números do Gerenciador, faça estas perguntas.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] border border-white/10 p-8 rounded-2xl relative shadow-[0_0_20px_rgba(255,255,255,0.02)]">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-black text-xl mb-6 text-white">1</div>
              <h3 className="font-heading text-xl font-bold uppercase mb-4 text-white">Tá chegando mensagem?</h3>
              <p className="text-gray-400 text-sm">Se em 3 dias rodando com R$ 50/dia (R$ 150 total) você não recebeu NENHUMA mensagem no WhatsApp, tem algo errado. Pode ser foto, texto ou público.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] border border-white/10 p-8 rounded-2xl relative shadow-[0_0_20px_rgba(255,255,255,0.02)]">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-black text-xl mb-6 text-white">2</div>
              <h3 className="font-heading text-xl font-bold uppercase mb-4 text-white">São Qualificadas?</h3>
              <p className="text-gray-400 text-sm">Tem cliente perguntando do carro de verdade ou é só "qual o preço?" e depois some? Lead qualificado é o que marca visita e manda documento.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] border border-[var(--color-aeg-blue)]/30 p-8 rounded-2xl relative shadow-[0_0_30px_rgba(10,60,218,0.1)]">
              <div className="w-12 h-12 bg-[var(--color-aeg-blue)] rounded-full flex items-center justify-center font-black text-xl mb-6 text-white">3</div>
              <h3 className="font-heading text-xl font-bold uppercase mb-4 text-[var(--color-aeg-blue)]">Virou Venda ou Visita?</h3>
              <p className="text-gray-300 text-sm font-medium">10 mensagens, 3 visitas, 1 venda = <span className="text-green-400">campanha boa</span>.<br/><br/>10 mensagens, 0 visitas = <span className="text-red-400">erro no atendimento ou público errado</span>.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 2: CRONOGRAMA */}
      <section className="py-24 px-6 relative bg-white/5 border-t border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-black uppercase mb-4 flex items-center justify-center gap-3">
              <Timer className="w-10 h-10 text-[var(--color-aeg-blue)]" />
              O Cronograma do Tráfego
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">A regra que mais gente erra: quando esperar e quando mexer na campanha.</p>
          </div>

          <div className="space-y-6">
            <motion.div variants={fadeUp} className="bg-red-500/10 border border-red-500/20 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 font-heading text-3xl font-black text-red-400 text-center md:text-left shrink-0">
                72h<br/><span className="text-sm font-bold opacity-80 uppercase tracking-widest">(3 Dias)</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold uppercase text-white mb-2 underline decoration-red-500/50 underline-offset-4">NÃO MEXE EM NADA</h3>
                <p className="text-red-200/90">A Meta está na "fase de aprendizagem". Precisa de uns 50 resultados para aprender (isso leva de 3 a 7 dias com R$30-50/dia). Se mexer agora, o aprendizado zera! Deixa rodar!</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-yellow-500/10 border border-yellow-500/20 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 font-heading text-3xl font-black text-yellow-400 text-center md:text-left shrink-0">
                Dias<br/>4 a 7
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold uppercase text-white mb-2">Pode Avaliar</h3>
                <p className="text-yellow-200/90">Já dá para ver se está vindo mensagem, se o custo está razoável e se o público está certo. Mas ainda não mate a campanha.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-green-500/10 border border-green-500/20 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 shadow-[0_0_30px_rgba(34,197,94,0.1)]">
              <div className="w-32 font-heading text-3xl font-black text-green-400 text-center md:text-left shrink-0">
                Dia 8+
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold uppercase text-white mb-2">Ajuste e Otimize</h3>
                <p className="text-green-200/90 mb-3">Se não veio resultado, mude <strong className="text-white">UMA COISA DE CADA VEZ</strong>. Espere 3 dias e reavalie.</p>
                <div className="bg-black/30 p-4 rounded-xl text-sm border border-green-500/20 text-gray-300">
                  <strong>O que ajustar:</strong> Trocar foto, trocar texto, mudar a idade, aumentar o raio, ou trocar o carro (se havia pouca busca).
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 3: MATAR VS DUPLICAR */}
      <section className="py-24 px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Matar */}
            <motion.div variants={fadeUp} className="bg-gradient-to-b from-red-500/10 to-transparent p-8 rounded-3xl border border-red-500/20 relative">
              <div className="absolute top-8 right-8">
                <Trash2 className="w-12 h-12 text-red-500/40" />
              </div>
              <h3 className="font-heading text-3xl font-black uppercase text-red-500 mb-8">Quando Matar?</h3>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-red-200 block mb-1">Custo alto e sem lead:</strong>
                    <p className="text-sm text-gray-400">7 dias rodando, R$ 200 gastos e menos de 5 mensagens. Corta.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-red-200 block mb-1">Qualidade horrível:</strong>
                    <p className="text-sm text-gray-400">Várias mensagens mas SÓ CURIOSO sem renda e zero interesse real. Mate e refaça o público.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-red-200 block mb-1">Custo fora da meta:</strong>
                    <p className="text-sm text-gray-400">Custo por mensagem num carro popular acima de R$ 30 (ideal é R$ 5 a R$ 25). Pare a campanha.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Duplicar */}
            <motion.div variants={fadeUp} className="bg-gradient-to-b from-[var(--color-aeg-blue)]/20 to-transparent p-8 rounded-3xl border border-[var(--color-aeg-blue)]/40 relative shadow-[0_0_40px_rgba(10,60,218,0.15)]">
              <div className="absolute top-8 right-8">
                <CopyPlus className="w-12 h-12 text-[var(--color-aeg-blue)]/40" />
              </div>
              <h3 className="font-heading text-3xl font-black uppercase text-[var(--color-aeg-blue)] mb-8">Quando Duplicar?</h3>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-blue-200 block mb-1">Máquina azeitada:</strong>
                    <p className="text-sm text-gray-300">7 dias rodando, custo por mensagem na faixa de R$ 5 a R$ 15 e atendimento dando conta do recado.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <CopyPlus className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-blue-200 block mb-1">Como fazer:</strong>
                    <p className="text-sm text-gray-300">Clique nos 3 pontinhos na campanha e vá em "Duplicar". Na nova, aumente o orçamento entre 30% e 50%. Aumentar só a 1ª quebra a inteligência.</p>
                  </div>
                </li>
                <li className="bg-black/40 p-4 rounded-xl border border-[var(--color-aeg-blue)]/20 mt-4">
                  <strong className="text-[var(--color-aeg-blue)] block text-sm uppercase mb-2">A Regra dos 20%</strong>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Não aumente o orçamento da atividade atual acima de 20% de cada vez (ex.: a cada 3 a 4 dias). Para maior escalabilidade repentina, duplique pra não desfazer o aprendizado!
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 4: GERENCIADOR E COLUNAS */}
      <section className="py-24 px-6 relative bg-white/5 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl font-black uppercase mb-4 flex items-center justify-center gap-3">
              <Columns className="w-8 h-8 text-[var(--color-aeg-blue)]" />
              As 5 Colunas que Importam
            </h2>
            <p className="text-gray-400 text-lg">No Gerenciador de Anúncios, limite as colunas para não ficar louco. Ignore CTR, CPM, ROAS (por enquanto).</p>
          </motion.div>

          <div className="bg-[var(--color-aeg-darker)] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="border-b border-white/5 bg-white/5 p-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-gray-500 font-mono ml-4">Gerenciador - Visão Personalizada (Colunas)</span>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <motion.div variants={fadeUp} className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col items-center text-center">
                  <DollarSign className="w-6 h-6 text-gray-400 mb-2" />
                  <strong className="text-white text-sm">Valor Usado</strong>
                  <p className="text-xs text-gray-500 mt-2">Quanto você já gastou na campanha até o momento.</p>
                </motion.div>

                <motion.div variants={fadeUp} className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col items-center text-center">
                  <Users className="w-6 h-6 text-gray-400 mb-2" />
                  <strong className="text-white text-sm">Alcance</strong>
                  <p className="text-xs text-gray-500 mt-2">Pessoas DIFERENTES que viram seu anúncio.</p>
                </motion.div>

                <motion.div variants={fadeUp} className="bg-[var(--color-aeg-blue)]/20 p-4 rounded-xl border border-[var(--color-aeg-blue)]/40 flex flex-col items-center text-center shadow-[0_0_20px_rgba(10,60,218,0.15)] transform scale-105">
                  <MessageSquare className="w-6 h-6 text-[var(--color-aeg-blue)] mb-2" />
                  <strong className="text-[var(--color-aeg-blue)] text-sm">Mensagens</strong>
                  <p className="text-xs text-blue-200/80 mt-2">A métrica-rei: conversas iniciadas no seu WhatsApp.</p>
                </motion.div>

                <motion.div variants={fadeUp} className="bg-[var(--color-aeg-blue)]/10 p-4 rounded-xl border border-[var(--color-aeg-blue)]/30 flex flex-col items-center text-center">
                  <Target className="w-6 h-6 text-blue-300 mb-2" />
                  <strong className="text-blue-200 text-sm">Custo p/ Mensagem</strong>
                  <p className="text-xs text-gray-400 mt-2">O seu termômetro (Valor total ÷ Mensagens).</p>
                </motion.div>

                <motion.div variants={fadeUp} className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col items-center text-center">
                  <RefreshCcw className="w-6 h-6 text-gray-400 mb-2" />
                  <strong className="text-white text-sm">Frequência</strong>
                  <p className="text-xs text-gray-500 mt-2">Se passar de 4 (em média), é hora de renovar os criativos.</p>
                </motion.div>
              </div>
            </div>
          </div>
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
            <ClipboardList className="w-16 h-16 text-[var(--color-aeg-blue)] mx-auto" />
          </div>
          
          <h2 className="font-heading text-3xl font-bold mb-6">
            Olhe para sua campanha!
          </h2>
          
          <p className="text-gray-400 mb-8 text-lg">
            Abra o Gerenciador, personalize as colunas e veja as 3 perguntas: Chegou? Qualificada? Vendeu?
          </p>

          <div className="p-6 bg-[var(--color-aeg-blue)]/10 rounded-xl border border-[var(--color-aeg-blue)]/30 uppercase tracking-widest text-sm font-bold text-[var(--color-aeg-blue)] shadow-[0_0_30px_rgba(10,60,218,0.1)] mb-10">
            Próxima aula: Métricas para otimizar a fundo e escalar.
          </div>

          <button onClick={onNext} className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--color-aeg-blue)] hover:bg-blue-800 text-white font-bold py-5 px-10 rounded-xl transition-all text-xl mx-auto shadow-[0_10px_30px_rgba(10,60,218,0.3)] hover:-translate-y-1 cursor-pointer">
            <PlayCircle className="w-6 h-6" />
            Ir para Aula 11
          </button>
        </motion.div>
      </footer>
    </motion.div>
  );
}

function Aula11({ onNext, key }: { onNext?: () => void; key?: string }) {
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
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-300">Aula 11 • Análise e Otimização</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl font-black uppercase leading-tight tracking-tight mb-6">
            As 5 Métricas de <br/>
            <span className="text-[var(--color-aeg-blue)]">Ouro</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl font-medium mb-8">
            Você não precisa virar analista de dados nem entender sopa de letrinhas. Pra loja de veículos, você precisa olhar só para 5 números.
          </p>
        </motion.div>
      </header>

      {/* SEÇÃO 1: 5 MÉTRICAS */}
      <section className="py-20 px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-black uppercase mb-4 flex items-center justify-center gap-3">
              <PieChart className="w-8 h-8 text-[var(--color-aeg-blue)]" />
              As 5 Métricas que Importam
            </h2>
          </div>

          {/* TABELA DE MÉTRICAS */}
          <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-5 bg-white/5 border-b border-white/10">
              <div className="p-4 font-bold text-white uppercase text-xs tracking-wider">Métrica</div>
              <div className="p-4 font-bold text-white uppercase text-xs tracking-wider md:col-span-2">O que é?</div>
              <div className="p-4 font-bold text-white uppercase text-xs tracking-wider">Faixa Boa</div>
              <div className="p-4 font-bold text-white uppercase text-xs tracking-wider">Alarme</div>
            </div>

            <div className="divide-y divide-white/5">
              {/* 1. Alcance */}
              <div className="grid grid-cols-1 md:grid-cols-5 p-4 hover:bg-white/5 transition-colors items-center">
                <div className="font-bold text-white flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500/20 text-blue-400 rounded flex items-center justify-center text-xs">1</div>
                  Alcance
                </div>
                <div className="text-gray-400 text-sm md:col-span-2">Quantas pessoas DIFERENTES viram seu anúncio.</div>
                <div className="text-green-400 text-sm font-medium">Contínuo e crescente</div>
                <div className="text-red-400 text-sm">Travado (não sobe)</div>
              </div>

              {/* 2. Custo por Mensagem */}
              <div className="grid grid-cols-1 md:grid-cols-5 p-4 bg-[var(--color-aeg-blue)]/5 hover:bg-[var(--color-aeg-blue)]/10 transition-colors items-center">
                <div className="font-bold text-[var(--color-aeg-blue)] flex items-center gap-2">
                  <div className="w-6 h-6 bg-[var(--color-aeg-blue)]/20 text-[var(--color-aeg-blue)] rounded flex items-center justify-center text-xs">2</div>
                  Custo p/ Mensagem
                </div>
                <div className="text-gray-300 text-sm md:col-span-2">Quanto custou cada cliente que mandou mensagem.</div>
                <div className="text-green-400 text-sm font-medium">R$ 5 a R$ 25 (Popular)<br/>R$ 30 a R$ 80 (Premium)</div>
                <div className="text-red-400 text-sm">Acima de R$ 30 (Pop.)<br/>Acima de R$ 100 (Prem.)</div>
              </div>

              {/* 3. Frequência */}
              <div className="grid grid-cols-1 md:grid-cols-5 p-4 hover:bg-white/5 transition-colors items-center">
                <div className="font-bold text-white flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500/20 text-blue-400 rounded flex items-center justify-center text-xs">3</div>
                  Frequência
                </div>
                <div className="text-gray-400 text-sm md:col-span-2">Quantas vezes a mesma pessoa viu o anúncio.</div>
                <div className="text-green-400 text-sm font-medium">1.5 a 4.0</div>
                <div className="text-red-400 text-sm">Acima de 4 (Saturou)</div>
              </div>

              {/* 4. CTR */}
              <div className="grid grid-cols-1 md:grid-cols-5 p-4 hover:bg-white/5 transition-colors items-center">
                <div className="font-bold text-white flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500/20 text-blue-400 rounded flex items-center justify-center text-xs">4</div>
                  CTR <span className="font-normal text-xs text-gray-500">(Taxa Clique)</span>
                </div>
                <div className="text-gray-400 text-sm md:col-span-2">De quem viu, quantos % clicou? O anúncio chama atenção?</div>
                <div className="text-green-400 text-sm font-medium">Acima de 1% (Boa)<br/>Acima de 2% (Excel.)</div>
                <div className="text-red-400 text-sm">Abaixo de 0.5% (Fraco)</div>
              </div>

              {/* 5. Valor Usado */}
              <div className="grid grid-cols-1 md:grid-cols-5 p-4 hover:bg-white/5 transition-colors items-center">
                <div className="font-bold text-white flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500/20 text-blue-400 rounded flex items-center justify-center text-xs">5</div>
                  Valor Usado
                </div>
                <div className="text-gray-400 text-sm md:col-span-2">Quanto já gastou. Compara com seu orçamento diário/mensal.</div>
                <div className="text-green-400 text-sm font-medium">Dentro do Orçamento</div>
                <div className="text-red-400 text-sm">Gasto sem retorno</div>
              </div>
            </div>
          </motion.div>
          <div className="text-center mt-6">
             <p className="text-gray-400 italic">"Anota essa tabela. Imprime. Cola na parede do escritório."</p>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 2: OS 3 AJUSTES */}
      <section className="py-24 px-6 relative bg-white/5 border-t border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-black uppercase mb-4 flex items-center justify-center gap-3">
              <Settings className="w-10 h-10 text-[var(--color-aeg-blue)]" />
              Os 3 Ajustes Mestres
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Algo está fora da faixa boa. O que você faz? Domine esses 3 botões.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] p-8 rounded-2xl border border-[var(--color-aeg-blue)]/30 relative">
              <div className="w-14 h-14 bg-[var(--color-aeg-blue)]/20 rounded-full flex items-center justify-center mb-6">
                <Images className="w-7 h-7 text-[var(--color-aeg-blue)]" />
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase mb-4 text-white">1. Trocar o Criativo</h3>
              <div className="space-y-4">
                <div>
                  <strong className="text-gray-300 block text-sm">Quando?</strong>
                  <p className="text-gray-400 text-sm">CTR baixo (abaixo de 0.5%), Frequência alta (acima de 4), ou custo subindo.</p>
                </div>
                <div>
                  <strong className="text-gray-300 block text-sm">Como?</strong>
                  <p className="text-gray-400 text-sm">"Duplique" o anúncio e troque a foto/vídeo e o texto. <strong className="text-white">NUNCA deixe 1 anúncio só</strong>. Tenha 2 ou 3 rodando juntos para a Meta testar.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] p-8 rounded-2xl border border-orange-500/30 relative">
              <div className="w-14 h-14 bg-orange-500/20 rounded-full flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase mb-4 text-white">2. Trocar o Público</h3>
              <div className="space-y-4">
                <div>
                  <strong className="text-gray-300 block text-sm">Quando?</strong>
                  <p className="text-gray-400 text-sm">Tá vindo lead totalmente desqualificado ou a frequência satura muito rápido (público pequeno).</p>
                </div>
                <div>
                  <strong className="text-gray-300 block text-sm">Como?</strong>
                  <p className="text-gray-400 text-sm">Crie um conjunto NOVO. Mexa na idade, raio de localização ou interesses. Rode em paralelo com o original para comparar.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] p-8 rounded-2xl border border-green-500/30 relative">
              <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase mb-4 text-white">3. Mexer no Orçamento</h3>
              <div className="space-y-4">
                <div>
                  <strong className="text-gray-300 block text-sm">Quando?</strong>
                  <p className="text-gray-400 text-sm">Campanha tá ROUBANDO a cena. Custo baixo, mensagens lotando, vendas saindo.</p>
                </div>
                <div>
                  <strong className="text-gray-300 block text-sm">Como?</strong>
                  <p className="text-gray-400 text-sm">Regra dos 20%. Aumente o orçamento no máximo 20% a cada 3 dias. Ou DUPLIQUE a campanha toda com orçamento maior.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="mt-12 bg-red-500/10 border border-red-500/30 p-6 rounded-xl flex items-center gap-4 max-w-3xl mx-auto">
            <XCircle className="w-8 h-8 text-red-500 shrink-0" />
            <p className="text-red-200">
              <strong className="text-red-400 uppercase tracking-widest">A Regra Férrea:</strong> NUNCA mexa em 2 coisas ao mesmo tempo. Se você trocar a foto E o público, e a campanha melhorar, qual dos dois resolveu? Você nunca vai saber. Disciplina paga.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* SEÇÃO 3: ESCALADA */}
      <section className="py-24 px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-black uppercase mb-4 flex items-center justify-center gap-3">
              <BarChart3 className="w-8 h-8 text-[var(--color-aeg-blue)]" />
              Como Pensar em Escala
            </h2>
            <p className="text-gray-400 text-lg">Aumentar o resultado SEM perder qualidade.</p>
          </div>

          <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden border border-white/10 mb-12">
            {/* Horizontal */}
            <motion.div variants={fadeUp} className="md:w-1/2 p-8 md:p-12 bg-black/40 border-b md:border-b-0 md:border-r border-white/10 relative">
              <Layers className="w-12 h-12 text-[var(--color-aeg-blue)] mb-6 opacity-80" />
              <h3 className="font-heading text-3xl font-black uppercase mb-4 text-white">Escala Horizontal</h3>
              <p className="text-gray-300 font-medium mb-6">Criar MAIS do que está funcionando.</p>
              
              <div className="space-y-4">
                <p className="text-gray-400 text-sm leading-relaxed">Você rodou Onix por 30 dias deu muito bom. Você não precisa forçar o Onix até o osso.</p>
                <p className="text-gray-400 text-sm leading-relaxed">Você <strong className="text-white">monta uma campanha igual para o HB20. Outra para Civic. Outra para Strada.</strong> Multiplica os braços operacionais.</p>
                <div className="bg-[var(--color-aeg-blue)]/10 text-[var(--color-aeg-blue)] font-bold text-xs p-3 rounded uppercase text-center mt-4 border border-[var(--color-aeg-blue)]/20">
                  Ideal para Começar
                </div>
              </div>
            </motion.div>

            {/* Vertical */}
            <motion.div variants={fadeUp} className="md:w-1/2 p-8 md:p-12 bg-white/5 relative">
              <ArrowUpRight className="w-12 h-12 text-green-500 mb-6 opacity-80" />
              <h3 className="font-heading text-3xl font-black uppercase mb-4 text-white">Escala Vertical</h3>
              <p className="text-gray-300 font-medium mb-6">Aumentar a VERBA no que já está lá.</p>
              
              <div className="space-y-4">
                <p className="text-gray-400 text-sm leading-relaxed">Sair de R$ 50 por dia para R$ 200 por dia numa mesma campanha.</p>
                <p className="text-gray-400 text-sm leading-relaxed">Monitora se o Custo por Mensagem sobe muito. Se mantiver, você achou uma mina de ouro. Se o custo triplicar, volta pra trás.</p>
                <div className="bg-white/5 text-gray-400 font-bold text-xs p-3 rounded uppercase text-center mt-4 border border-white/10">
                  Para Quem Já Domina
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="bg-gradient-to-r from-[var(--color-aeg-blue)]/20 to-purple-500/10 border border-[var(--color-aeg-blue)]/30 p-8 rounded-2xl text-center shadow-[0_0_40px_rgba(10,60,218,0.1)]">
            <h4 className="font-heading text-xl font-bold uppercase text-white mb-2">Tráfego é Aposta Informada</h4>
            <p className="text-gray-300">
              Você nunca acerta 100%. Se 7 em cada 10 campanhas derem lucro, você está EXCELENTE. Aceite que vai gastar 200 reais numa campanha que não vai dar em nada. É o custo de comprar dados e descobrir o que o mercado NÃO quer.
            </p>
          </motion.div>

        </motion.div>
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
            <Camera className="w-16 h-16 text-[var(--color-aeg-blue)] mx-auto" />
          </div>
          
          <h2 className="font-heading text-3xl font-bold mb-6">
            Tire um Print
          </h2>
          
          <p className="text-gray-400 mb-8 text-lg">
            Abra o seu Gerenciador de Anúncios agora e tire um print das suas 5 colunas. Salve. Compare daqui a 7 dias. Vai ser o seu termômetro.
          </p>

          <div className="p-6 bg-[var(--color-aeg-blue)]/10 rounded-xl border border-[var(--color-aeg-blue)]/30 uppercase tracking-widest text-sm font-bold text-[var(--color-aeg-blue)] shadow-[0_0_30px_rgba(10,60,218,0.1)] mb-10">
            Próxima aula: Aplicar tudo isso ao vivo (Prática de Otimização).
          </div>

          <button onClick={onNext} className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--color-aeg-blue)] hover:bg-blue-800 text-white font-bold py-5 px-10 rounded-xl transition-all text-xl mx-auto shadow-[0_10px_30px_rgba(10,60,218,0.3)] hover:-translate-y-1 cursor-pointer">
            <PlayCircle className="w-6 h-6" />
            Ir para Aula 12
          </button>
        </motion.div>
      </footer>
    </motion.div>
  );
}

function Aula12({ onNext, key }: { onNext?: () => void; key?: string }) {
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
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-300">Aula 12 • Prática</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl font-black uppercase leading-tight tracking-tight mb-6">
            Otimizando e Escalando <br/>
            <span className="text-[var(--color-aeg-blue)]">Na Prática</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl font-medium mb-8">
            Vamos olhar uma campanha real rodando há 7 dias e tomar 3 decisões juntos: trocar criativo, escalar e testar novo público.
          </p>
        </motion.div>
      </header>

      {/* SEÇÃO 1: LENDO A CAMPANHA */}
      <section className="py-20 px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-black uppercase mb-4 flex items-center justify-center gap-3">
              <BarChart3 className="w-8 h-8 text-[var(--color-aeg-blue)]" />
              Lendo a Campanha
            </h2>
            <p className="text-gray-400 text-lg">Campanha "Onix Plus 2020 - Mensagens", rodando há 7 dias.</p>
          </div>

          <div className="bg-[var(--color-aeg-darker)] rounded-2xl border border-white/10 overflow-hidden shadow-2xl mb-12">
            <div className="border-b border-white/5 bg-white/5 p-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-gray-500 font-mono ml-4">Gerenciador de Anúncios - Desempenho 7 Dias</span>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col">
                  <span className="text-gray-500 text-xs font-bold uppercase mb-1">Valor Usado</span>
                  <span className="text-xl font-bold text-white">R$ 350,00</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col">
                  <span className="text-gray-500 text-xs font-bold uppercase mb-1">Alcance</span>
                  <span className="text-xl font-bold text-white">12.400</span>
                </div>
                <div className="bg-[var(--color-aeg-blue)]/20 p-4 rounded-xl border border-[var(--color-aeg-blue)]/40 flex flex-col shadow-[0_0_15px_rgba(10,60,218,0.1)]">
                  <span className="text-[var(--color-aeg-blue)] text-xs font-bold uppercase mb-1">Mensagens</span>
                  <span className="text-2xl font-black text-white">18</span>
                </div>
                <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/30 flex flex-col">
                  <span className="text-green-500 text-xs font-bold uppercase mb-1">Custo / Mensagem</span>
                  <span className="text-xl font-bold text-white">R$ 19,40</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col">
                  <span className="text-gray-500 text-xs font-bold uppercase mb-1">Frequência</span>
                  <span className="text-xl font-bold text-white">2.1</span>
                </div>
              </div>
              
              <div className="mt-8 bg-[var(--color-aeg-darker)] p-6 rounded-xl border border-white/5 flex gap-4">
                <CheckCircle2 className="w-8 h-8 text-green-500 shrink-0" />
                <div>
                  <h4 className="text-white font-bold mb-1">Diagnóstico Prático</h4>
                  <p className="text-sm text-gray-400">Alcance bom, mensagens chegando, custo dentro da faixa ideal (R$ 5 a R$ 25), frequência baixa e CTR acima de 1%. <strong>Conclusão: Tá indo muito bem. É campanha para OTIMIZAR e ESCALAR.</strong></p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 2: AS 3 DECISÕES */}
      <section className="py-24 px-6 relative bg-white/5 border-t border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-black uppercase mb-4 flex items-center justify-center gap-3">
              <Settings className="w-10 h-10 text-[var(--color-aeg-blue)]" />
              As 3 Decisões
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Com essa campanha em mãos, o que faremos agora?</p>
          </div>

          <div className="space-y-12">
            {/* Decisão 1 */}
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] rounded-2xl border border-[var(--color-aeg-blue)]/30 overflow-hidden flex flex-col md:flex-row relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-[var(--color-aeg-blue)]"></div>
              <div className="p-8 md:p-10 md:w-2/3 border-b md:border-b-0 md:border-r border-white/10">
                <h3 className="font-heading text-2xl font-bold uppercase mb-6 text-white flex items-center gap-3">
                  <Images className="w-6 h-6 text-[var(--color-aeg-blue)]" />
                  1. Adicionar Criativo Novo
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  A frequência está em 2.1. Em breve o público vai cansar daquela foto da frente do carro. 
                  Vamos <strong>Duplicar o anúncio (dentro do mesmo conjunto)</strong> e mudar a foto para o interior do carro.
                  No texto, trocamos o gancho por: "Sabe aquele carro que o concessionário desvaloriza? Aqui a gente avalia HONESTO".
                </p>
                <div className="bg-black/30 p-4 rounded-xl text-sm border border-[var(--color-aeg-blue)]/20">
                  <strong className="text-[var(--color-aeg-blue)]">Efeito:</strong> Dividimos o orçamento entre as 2 versões. A Meta testa as duas em paralelo e entrega a que tiver melhor aceitação.
                </div>
              </div>
              <div className="p-8 md:p-10 md:w-1/3 flex items-center justify-center bg-white/5">
                <div className="text-center">
                  <CopyPlus className="w-16 h-16 text-gray-500 mx-auto mb-4 opacity-50" />
                  <p className="font-bold text-gray-300">Duplicar Anúncio<br/><span className="text-sm font-normal text-gray-500 mt-1 block">Na mesma campanha</span></p>
                </div>
              </div>
            </motion.div>

            {/* Decisão 2 */}
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] rounded-2xl border border-green-500/30 overflow-hidden flex flex-col md:flex-row relative shadow-[0_0_30px_rgba(34,197,94,0.05)]">
              <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
              <div className="p-8 md:p-10 md:w-2/3 border-b md:border-b-0 md:border-r border-white/10">
                <h3 className="font-heading text-2xl font-bold uppercase mb-6 text-white flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  2. Duplicar p/ Escalar
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  A máquina está azeitada. Queremos mais! Lembra da <strong>Regra do 20% ou Duplicar?</strong> 
                  Voltamos na visão de campanhas, clicamos na "Onix Plus 2020", <strong>Duplicamos a Campanha inteira</strong>.
                  A original fica com R$ 50. Na nova ("v2 Escala"), botamos R$ 80/dia. Não mexemos em mais nada.
                </p>
                <div className="bg-green-500/5 p-4 rounded-xl text-sm border border-green-500/20">
                  <strong className="text-green-400">Efeito:</strong> Agora temos 2 idênticas (50 e 80) gastando R$ 130/dia com segurança. Daqui 5 dias olhamos o custo.
                </div>
              </div>
              <div className="p-8 md:p-10 md:w-1/3 flex items-center justify-center bg-white/5">
                <div className="text-center">
                  <ArrowUpRight className="w-16 h-16 text-green-500/60 mx-auto mb-4" />
                  <p className="font-bold text-gray-300">Duplicar Campanha<br/><span className="text-sm font-normal text-green-400/80 mt-1 block">+ Orçamento Novo</span></p>
                </div>
              </div>
            </motion.div>

            {/* Decisão 3 */}
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] rounded-2xl border border-orange-500/30 overflow-hidden flex flex-col md:flex-row relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
              <div className="p-8 md:p-10 md:w-2/3 border-b md:border-b-0 md:border-r border-white/10">
                <h3 className="font-heading text-2xl font-bold uppercase mb-6 text-white flex items-center gap-3">
                  <Users className="w-6 h-6 text-orange-400" />
                  3. Testar Público Novo
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Para testar águas novas sem arruinar o que já funciona: vamos na campanha original e criamos um <strong>Conjunto de Anúncios Novo</strong> ("Adset") dentro dela!
                  Mudamos o raio: em vez de 30km, botamos 50km incluindo a cidade vizinha. Puxamos os criativos v1 e v2 para dentro dela. Orçamento de R$ 50.
                </p>
                <div className="bg-orange-500/5 p-4 rounded-xl text-sm border border-orange-500/20">
                  <strong className="text-orange-400">Efeito:</strong> Expandimos sem perder o controle. Aumentamos o investimento total do dia, mas testando geografias diferentes.
                </div>
              </div>
              <div className="p-8 md:p-10 md:w-1/3 flex items-center justify-center bg-white/5">
                <div className="text-center">
                  <Target className="w-16 h-16 text-orange-400/50 mx-auto mb-4" />
                  <p className="font-bold text-gray-300">Novo Conjunto<br/><span className="text-sm font-normal text-gray-500 mt-1 block">Risco zero</span></p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
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
            <TrendingUp className="w-16 h-16 text-green-500 mx-auto" />
          </div>
          
          <h2 className="font-heading text-3xl font-bold mb-6">
            Inteligência no Investimento
          </h2>
          
          <p className="text-gray-400 mb-8 text-lg">
            Isso é o que separa loja que cresce de loja que estagna. Não é só gastar mais, é gastar com base em dados. Agora vá e aplique na sua campanha!
          </p>

          <div className="p-6 bg-[var(--color-aeg-blue)]/10 rounded-xl border border-[var(--color-aeg-blue)]/30 uppercase tracking-widest text-sm font-bold text-[var(--color-aeg-blue)] shadow-[0_0_30px_rgba(10,60,218,0.1)] mb-10">
            Próxima aula: O PROJETO PRÁTICO FINAL.
          </div>

          <button onClick={onNext} className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--color-aeg-blue)] hover:bg-blue-800 text-white font-bold py-5 px-10 rounded-xl transition-all text-xl mx-auto shadow-[0_10px_30px_rgba(10,60,218,0.3)] hover:-translate-y-1 cursor-pointer">
            <PlayCircle className="w-6 h-6" />
            Ir para Aula 13
          </button>
        </motion.div>
      </footer>
    </motion.div>
  );
}

function Aula13({ key }: { key?: string }) {
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
            <ClipboardCheck className="w-4 h-4 text-[var(--color-aeg-blue)]" />
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-300">Aula 13 • Projeto Prático</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl font-black uppercase leading-tight tracking-tight mb-6">
            Criando e Testando uma <br/>
            <span className="text-[var(--color-aeg-blue)]">Campanha do ZERO</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl font-medium mb-8">
            Vamos consolidar tudo aplicando um checklist prático. Pega papel e caneta, hora de você executar cada passo comigo.
          </p>
        </motion.div>
      </header>

      {/* SEÇÃO 1: O BRIEFING */}
      <section className="py-20 px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-black uppercase mb-4 flex items-center justify-center gap-3">
              <ListTodo className="w-8 h-8 text-[var(--color-aeg-blue)]" />
              O Briefing Antes do Gerenciador
            </h2>
            <p className="text-gray-400 text-lg">Antes de tocar na Meta, responda no papel. Sem isso, você sobe campanha que não vende.</p>
          </div>

          <div className="bg-[var(--color-aeg-darker)] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="border-b border-white/5 bg-white/5 p-4 py-6">
              <h3 className="font-heading text-xl font-bold uppercase text-white flex items-center justify-center gap-2">
                <CheckSquare className="w-6 h-6 text-[var(--color-aeg-blue)]" />
                Checklist Obrigatório
              </h3>
            </div>
            <div className="divide-y divide-white/5">
              <motion.div variants={fadeUp} className="p-8 hover:bg-white/5 transition-colors grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-[var(--color-aeg-blue)] uppercase text-sm mb-2 flex items-center gap-2">[1] Qual o Carro?</h4>
                  <p className="text-gray-300 text-sm">Marca, modelo, ano, km, valor à vista, parcelas, diferenciais.</p>
                </div>
                <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                  <span className="text-xs text-gray-500 uppercase font-bold block mb-1">Exemplo:</span>
                  <p className="text-sm text-gray-400">"Hilux SR 2018, 4x4, diesel, 89.000 km, R$ 168.000 (ou parc. R$ 3.200), manual, revisada."</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="p-8 hover:bg-white/5 transition-colors grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-[var(--color-aeg-blue)] uppercase text-sm mb-2 flex items-center gap-2">[2] Quem é o Cliente?</h4>
                  <p className="text-gray-300 text-sm">Idade, sexo provável, faixa de renda, perfil (trabalho, família?)</p>
                </div>
                <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                  <span className="text-xs text-gray-500 uppercase font-bold block mb-1">Exemplo:</span>
                  <p className="text-sm text-gray-400">"Homem, 35 a 60 anos, classe média/alta, uso rural ou fora-de-estrada, interior."</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="p-8 hover:bg-white/5 transition-colors grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-[var(--color-aeg-blue)] uppercase text-sm mb-2 flex items-center gap-2">[3] Qual o Objetivo?</h4>
                  <p className="text-gray-300 text-sm">Sempre escolha <strong className="text-white">Mensagens</strong> para começar.</p>
                </div>
                <div className="bg-[var(--color-aeg-blue)]/10 p-4 rounded-xl border border-[var(--color-aeg-blue)]/20 flex items-center justify-center">
                  <div className="text-[var(--color-aeg-blue)] font-bold uppercase tracking-wider">MENSAGENS NO WHATSAPP</div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="p-8 hover:bg-white/5 transition-colors grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-[var(--color-aeg-blue)] uppercase text-sm mb-2 flex items-center gap-2">[4] Qual o Orçamento?</h4>
                  <p className="text-gray-300 text-sm">Quanto por dia e por quantos dias.</p>
                </div>
                <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                  <span className="text-xs text-gray-500 uppercase font-bold block mb-1">Exemplo:</span>
                  <p className="text-sm text-gray-400">"R$ 50/dia por 14 dias (Total de R$ 700)."</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="p-8 hover:bg-white/5 transition-colors grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-[var(--color-aeg-blue)] uppercase text-sm mb-2 flex items-center gap-2">[5] O Gancho/Oferta</h4>
                  <p className="text-gray-300 text-sm">Tenha isso escrito ANTES de abrir a ferramenta. Não improvise lá dentro.</p>
                </div>
                <div className="bg-black/30 p-4 rounded-xl border border-white/5 flex items-center">
                  <p className="text-sm text-gray-400 italic">"Tá precisando de uma 4x4 SÉRIA pra trabalho?"</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="p-8 hover:bg-white/5 transition-colors grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h4 className="font-bold text-[var(--color-aeg-blue)] uppercase text-sm mb-2 flex items-center gap-2">[6] Quem Vai Atender?</h4>
                  <p className="text-gray-300 text-sm">Lembre do acordo com o vendedor. <strong className="text-white">Em até 30min!</strong></p>
                </div>
                <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/20 text-red-200 text-sm">
                  Se demorar 2h pra responder o WhatsApp, jogou dinheiro fora. O cliente já cotou com outras 5 lojas.
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="mt-8 text-center bg-white/5 p-6 rounded-2xl border border-white/10">
            <p className="text-gray-300">Pausa agora. Faz isso para o carro que VOCÊ quer anunciar. Custa 1 hora? 2 horas? Não importa. Despausa quando acabar.</p>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 2: GERENCIADOR */}
      <section className="py-24 px-6 relative bg-white/5 border-t border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-black uppercase mb-4 flex items-center justify-center gap-3">
              <PlaySquare className="w-10 h-10 text-[var(--color-aeg-blue)]" />
              Executando no Gerenciador
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] p-8 rounded-2xl border border-white/10 relative shadow-[0_0_30px_rgba(255,255,255,0.02)]">
              <div className="absolute top-4 right-4 bg-white/10 px-3 py-1 rounded text-xs font-bold uppercase text-gray-400">Passo 1: Campanha</div>
              <h3 className="font-heading text-xl font-bold uppercase text-white mb-6 mt-4">Campanha</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-aeg-blue)] mt-1.5 shrink-0"></div>
                  <div><strong>Objetivo:</strong> Engajamento → Mensagens no WhatsApp</div>
                </li>
                <li className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-aeg-blue)] mt-1.5 shrink-0"></div>
                  <div><strong>Nome:</strong> <span className="text-gray-300">"Hilux SR 2018 - Mensagens - Out/2026"</span> (Padrão de nomenclatura!)</div>
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] p-8 rounded-2xl border border-[var(--color-aeg-blue)]/30 relative shadow-[0_0_30px_rgba(10,60,218,0.05)]">
              <div className="absolute top-4 right-4 bg-[var(--color-aeg-blue)]/20 px-3 py-1 rounded text-xs font-bold uppercase text-[var(--color-aeg-blue)]">Passo 2: Conjunto</div>
              <h3 className="font-heading text-xl font-bold uppercase text-white mb-6 mt-4">Conjunto de Anúncios</h3>
              <ul className="space-y-4 text-gray-400 text-sm mb-6">
                <li className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-aeg-blue)] mt-1.5 shrink-0"></div>
                  <div><strong>Nome:</strong> <span className="text-gray-300">"Hilux - Cid+50km - 35/60 Anos - Homens"</span></div>
                </li>
                <li className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-aeg-blue)] mt-1.5 shrink-0"></div>
                  <div><strong>Orçamento Diário:</strong> R$ 50,00 contínuo</div>
                </li>
              </ul>
              <div className="bg-[var(--color-aeg-blue)]/10 p-4 rounded-xl border border-[var(--color-aeg-blue)]/20 text-blue-200/90 text-sm">
                <strong>Público Vantagem+:</strong>
                <br/>• Localização: Sua cidade + 50km
                <br/>• Idade: 35 a 60 anos
                <br/>• Gênero: Homens (pra Hilux faz sentido fechar)
                <br/>• Sem detalhamento (interesses). Deixa aberto!
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 3: O ANÚNCIO (CRIATIVO) */}
      <section className="py-24 px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-black uppercase mb-4 flex items-center justify-center gap-3">
              <Images className="w-8 h-8 text-[var(--color-aeg-blue)]" />
              Subindo o Anúncio
            </h2>
            <p className="text-gray-400 text-lg">"Hilux SR - Carrossel 4 fotos - Texto Trabalho v1"</p>
          </div>

          <div className="bg-[var(--color-aeg-darker)] rounded-2xl border border-white/10 p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div variants={fadeUp}>
                <h3 className="font-bold text-white uppercase mb-4 text-sm tracking-wider text-gray-500">Configuração</h3>
                <ul className="space-y-4 text-gray-300 text-sm">
                  <li><strong>Identidade:</strong> Sua Página + Instagram</li>
                  <li><strong>Formato:</strong> Carrossel (Fotos: frente diagonal, lateral, interior, motor).</li>
                  <li><strong>Título (igual nos 4 cartões):</strong> <br/><span className="text-white font-mono bg-white/10 px-2 py-1 rounded inline-block mt-1">Hilux SR 4x4 - R$ 168.000</span></li>
                  <li><strong>Chamada para Ação:</strong> Enviar mensagem</li>
                  <li className="mt-4 pt-4 border-t border-white/10">
                    <strong>Msg Canned (Automática) do WhatsApp:</strong>
                    <div className="bg-green-500/10 p-3 rounded-lg border border-green-500/20 text-green-300 italic mt-2">
                      "Olá! Aqui é o Mário. Vi seu interesse na Hilux. Tá procurando pra trabalho ou pra lazer? Tem carro pra avaliar na troca?"
                    </div>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div variants={fadeUp} className="bg-black/30 p-6 rounded-xl border border-white/5 font-mono text-sm leading-relaxed overflow-hidden">
                <span className="text-gray-500 font-bold uppercase tracking-widest text-xs block mb-4 border-b border-white/10 pb-2">Texto Principal (Copy)</span>
                <p className="text-gray-300 mb-4">
                  Tá precisando de uma 4x4 SÉRIA pra trabalho ou pra estrada de chão?
                </p>
                <p className="text-gray-400 mb-4">
                  Essa Hilux SR 2018 tá pronta:<br/>
                  - 4x4 diesel<br/>
                  - 89.000 km<br/>
                  - Manual e chave reserva<br/>
                  - Revisada na concessionária<br/>
                  - Pneus quase novos
                </p>
                <p className="text-white font-bold mb-4">
                  R$ 168.000 à vista, ou parcelas a partir de R$ 3.200. Avalio o seu carro na troca, sem enrolação.
                </p>
                <p className="text-gray-300 mb-4">
                  Aqui no Auto Show Multimarcas, mais de 10 anos de tradição, mais de 800 caminhonetes vendidas no agreste.
                </p>
                <p className="text-[var(--color-aeg-blue)] font-bold">
                  Manda 'Hilux' aqui no WhatsApp e te mando o vídeo dela andando, mais detalhes e a melhor proposta da semana.
                </p>
              </motion.div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <span className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded cursor-pointer uppercase tracking-widest transition-colors inline-block text-sm">
                Publicar Campanha
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 4: CRONOGRAMA 7 DIAS */}
      <section className="py-24 px-6 relative bg-white/5 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl font-black uppercase mb-4 flex items-center justify-center gap-3">
              <Timer className="w-8 h-8 text-[var(--color-aeg-blue)]" />
              Os Seus Próximos 7 Dias
            </h2>
            <p className="text-gray-400 text-lg">A rotina de monitoramento de quem não queima dinheiro.</p>
          </motion.div>

          <div className="space-y-6">
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] p-6 rounded-2xl border border-white/10 flex items-center md:items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-black text-2xl shrink-0">1-2</div>
              <div>
                <h4 className="text-white font-bold text-lg mb-2">Olha de longe</h4>
                <p className="text-gray-400 text-sm">NÃO MEXE! Meta está entregando. Apenas anote se a campanha gerou alguma mensagem ou não.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] p-6 rounded-2xl border border-white/10 flex items-center md:items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-black text-2xl shrink-0">3-4</div>
              <div>
                <h4 className="text-white font-bold text-lg mb-2 text-yellow-300">Hora do Termômetro</h4>
                <p className="text-gray-400 text-sm">Abre as 5 métricas que a gente configurou. Tira foto da tabela ou print da tela para ter histórico de comparação.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] p-6 rounded-2xl border border-[var(--color-aeg-blue)]/30 flex items-center md:items-start gap-6 shadow-[0_0_20px_rgba(10,60,218,0.1)]">
              <div className="w-16 h-16 rounded-full bg-[var(--color-aeg-blue)]/20 text-[var(--color-aeg-blue)] flex items-center justify-center font-black text-2xl shrink-0">5</div>
              <div>
                <h4 className="text-[var(--color-aeg-blue)] font-bold text-lg mb-2">Qualifique o Lead</h4>
                <p className="text-gray-300 text-sm">Mensagens chegaram? Analise-as. O cara perguntou se faz financiamento 100%? Veio pra comprar ou só pra curiar? Alguém agendou visita?</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-[var(--color-aeg-darker)] p-6 rounded-2xl border border-green-500/30 flex items-center md:items-start gap-6 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
              <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-black text-2xl shrink-0">7</div>
              <div>
                <h4 className="text-green-400 font-bold text-lg mb-2">A Grande Decisão</h4>
                <p className="text-gray-300 text-sm mb-4">Leitura completa. Qual das 3 decisões? <br/>1) Está top? Duplica e escala. <br/>2) Está ruim? Analisa as métricas e troca o criativo (foto/copy). <br/>3) Público saturado/falso? Novo conjunto com público diferente.</p>
              </div>
            </motion.div>
          </div>
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
            <ClipboardCheck className="w-16 h-16 text-[var(--color-aeg-blue)] mx-auto" />
          </div>
          
          <h2 className="font-heading text-3xl font-bold mb-6">
            Você subiu de nível.
          </h2>
          
          <p className="text-gray-400 mb-8 text-lg">
            Se você fez essa campanha passo a passo comigo, você é uma loja diferente de ontem. Agora a venda não depende só da fachada da sua loja, depende da sua gestão!
          </p>

          <div className="p-6 bg-[var(--color-aeg-blue)]/10 rounded-xl border border-[var(--color-aeg-blue)]/30 uppercase tracking-widest text-sm font-bold text-[var(--color-aeg-blue)] shadow-[0_0_30px_rgba(10,60,218,0.1)] mb-10">
            Próxima e última aula: O Oráculo (a nossa carta na manga pra você gerar anúncios mágicos).
          </div>
        </motion.div>
      </footer>
    </motion.div>
  );
}

export default function App() {
  const [currentTab, setCurrentTab] = useState<'aula01' | 'aula02' | 'aula03' | 'aula04' | 'aula05' | 'aula06' | 'aula07' | 'aula08' | 'aula09' | 'aula10' | 'aula11' | 'aula12' | 'aula13'>('aula01');

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
            <button 
              onClick={() => setCurrentTab('aula08')}
              className={`px-6 py-2 rounded-md font-bold text-sm tracking-wide uppercase transition-all flex items-center gap-2 ${currentTab === 'aula08' ? 'bg-[var(--color-aeg-blue)] text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              {currentTab === 'aula07' && <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>}
              Aula 08
            </button>
            <button 
              onClick={() => setCurrentTab('aula09')}
              className={`px-6 py-2 rounded-md font-bold text-sm tracking-wide uppercase transition-all flex items-center gap-2 ${currentTab === 'aula09' ? 'bg-[var(--color-aeg-blue)] text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              {currentTab === 'aula08' && <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>}
              Aula 09
            </button>
            <button 
              onClick={() => setCurrentTab('aula10')}
              className={`px-6 py-2 rounded-md font-bold text-sm tracking-wide uppercase transition-all flex items-center gap-2 ${currentTab === 'aula10' ? 'bg-[var(--color-aeg-blue)] text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              {currentTab === 'aula09' && <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>}
              Aula 10
            </button>
            <button 
              onClick={() => setCurrentTab('aula11')}
              className={`px-6 py-2 rounded-md font-bold text-sm tracking-wide uppercase transition-all flex items-center gap-2 ${currentTab === 'aula11' ? 'bg-[var(--color-aeg-blue)] text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              {currentTab === 'aula10' && <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>}
              Aula 11
            </button>
            <button 
              onClick={() => setCurrentTab('aula12')}
              className={`px-6 py-2 rounded-md font-bold text-sm tracking-wide uppercase transition-all flex items-center gap-2 ${currentTab === 'aula12' ? 'bg-[var(--color-aeg-blue)] text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              {currentTab === 'aula11' && <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>}
              Aula 12
            </button>
            <button 
              onClick={() => setCurrentTab('aula13')}
              className={`px-6 py-2 rounded-md font-bold text-sm tracking-wide uppercase transition-all flex items-center gap-2 ${currentTab === 'aula13' ? 'bg-[var(--color-aeg-blue)] text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              {currentTab === 'aula12' && <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>}
              Aula 13
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
          {currentTab === 'aula07' && <Aula07 key="aula07" onNext={() => setCurrentTab('aula08')} />}
          {currentTab === 'aula08' && <Aula08 key="aula08" onNext={() => setCurrentTab('aula09')} />}
          {currentTab === 'aula09' && <Aula09 key="aula09" onNext={() => setCurrentTab('aula10')} />}
          {currentTab === 'aula10' && <Aula10 key="aula10" onNext={() => setCurrentTab('aula11')} />}
          {currentTab === 'aula11' && <Aula11 key="aula11" onNext={() => setCurrentTab('aula12')} />}
          {currentTab === 'aula12' && <Aula12 key="aula12" onNext={() => setCurrentTab('aula13')} />}
          {currentTab === 'aula13' && <Aula13 key="aula13" />}
        </AnimatePresence>
      </div>

    </div>
  );
}


