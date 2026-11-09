import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Heart, Sparkles, Star, MapPin, Video, BookOpen, HandHeart, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maria de Jesus Costa | Terapeuta na Abordagem Ministerial" },
      { name: "description", content: "Acolhimento terapêutico com Maria de Jesus Costa. Atendimento online e presencial em Novo Gama–GO e região de Brasília." },
      { property: "og:title", content: "Maria de Jesus Costa | Terapeuta" },
      { property: "og:description", content: "Um espaço de escuta, acolhimento e cuidado emocional." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const whatsapp = "https://wa.me/5561995999766?text=Ol%C3%A1%2C%20Maria!%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento.";
const phoneLabel = "(61) 99599-9766";

const services = [
  ["Ansiedade e estresse", "Acolhimento para momentos de preocupação intensa, tensão e sobrecarga emocional."],
  ["Tristeza e desânimo", "Um espaço de escuta para conversar sobre sentimentos difíceis e buscar apoio."],
  ["Luto e perdas", "Acompanhamento respeitoso durante processos de despedida, saudade e mudanças."],
  ["Sono e bem-estar", "Orientações e conversa sobre hábitos e dificuldades que afetam o descanso."],
  ["Traumas e medos", "Acolhimento para falar sobre experiências marcantes, inseguranças e fobias."],
  ["Relacionamentos e família", "Escuta para desafios de convivência, vínculos, comunicação e conflitos."],
  ["Autoestima e autoconhecimento", "Reflexão sobre sua história, identidade, limites e formas de se perceber."],
  ["Acompanhamento por fases da vida", "Atendimento direcionado às necessidades de adultos, idosos, adolescentes e famílias."],
];

const moments = [
  ["Ansiedade e estresse", "Quando as preocupações, a tensão e as responsabilidades parecem ocupar todo o espaço."],
  ["Luto e mudanças", "Para atravessar perdas, despedidas e novos ciclos com acolhimento."],
  ["Autoestima", "Quando inseguranças e sentimentos de inferioridade afetam a maneira como você se vê."],
  ["Família e relacionamentos", "Para conversar sobre vínculos, conflitos, limites e comunicação."],
];

const faqs = [
  ["Como funciona o atendimento?", "O primeiro contato é feito pelo WhatsApp. Você poderá explicar o que está buscando, tirar dúvidas e receber informações sobre horários e formato do atendimento."],
  ["O atendimento pode ser online?", "Sim. Há atendimento online. Entre em contato para consultar horários, orientações e disponibilidade."],
  ["Onde fica o atendimento presencial?", "O endereço informado é Quadra 574, Lote 5A, Novo Gama – Goiás, CEP 72860-537. Também é possível consultar a disponibilidade para pessoas de Brasília e região."],
  ["Qual é o valor da sessão?", "O material de divulgação informa valor social de R$ 90,00. Confirme pelo WhatsApp as condições e a disponibilidade atuais."],
  ["Quais assuntos posso levar para o atendimento?", "Você pode conversar sobre ansiedade, estresse, tristeza, luto, sono, autoestima, traumas, fobias, relacionamentos e questões familiares, entre outros desafios emocionais."],
  ["O atendimento substitui acompanhamento médico ou psicológico?", "Não. O atendimento terapêutico na abordagem ministerial não substitui avaliação, diagnóstico ou tratamento realizado por profissionais de saúde habilitados. Quando necessário, procure também os serviços de saúde adequados."],
];

function BookingButton({ children = "Fale pelo WhatsApp" }: { children?: ReactNode }) {
  return <a className="btn" href={whatsapp} target="_blank" rel="noreferrer">{children}<ArrowRight size={18} /></a>;
}

function Index() {
  const [faq, setFaq] = useState<number | null>(null);

  return (
    <main className="site">
      <section id="inicio" className="hero-clean">
        <div className="hero-content">
          <div className="hero-logo" style={{ color: "var(--brown-dark)", fontFamily: "Georgia,serif", lineHeight: 1.05 }}>
            <span style={{ display: "block", fontSize: "clamp(36px,6vw,58px)", letterSpacing: ".02em" }}>Maria de Jesus Costa</span>
            <span style={{ display: "block", fontSize: 13, letterSpacing: ".22em", marginTop: 10, color: "var(--brown)" }}>TERAPEUTA · ABORDAGEM MINISTERIAL</span>
          </div>
          <div className="eyebrow"><span /> ACOLHIMENTO · ESCUTA · CUIDADO</div>
          <h1>Você merece um espaço de <em>acolhimento.</em></h1>
          <p>Um lugar para conversar sobre o que pesa, compreender seus sentimentos e encontrar apoio para atravessar os desafios da vida com mais serenidade.</p>
          <BookingButton>Agende uma conversa</BookingButton>
          <div className="trust-row"><span><Check /> Escuta acolhedora</span><span><Check /> Atendimento online</span><span><Check /> Valor social informado: R$ 90</span></div>
        </div>
      </section>

      <section className="green-strip" aria-label="Áreas de acolhimento">
        <div className="strip-track">{[...Array(2)].flatMap(() => ["ANSIEDADE · ESTRESSE", "LUTO E MUDANÇAS", "AUTOESTIMA", "FAMÍLIA E RELACIONAMENTOS", "ATENDIMENTO ONLINE E PRESENCIAL"]).map((item, i) => <span key={i}>{item}<b>✦</b></span>)}</div>
      </section>

      <section className="welcome section">
        <div className="section-heading center">
          <div className="kicker">Um primeiro passo</div>
          <h2>Algumas dores não são visíveis, mas <em>merecem cuidado.</em></h2>
          <p>Você não precisa encontrar todas as respostas agora. Começar uma conversa pode ajudar a dar nome ao que está sentindo.</p>
        </div>
        <div className="welcome-grid">
          {["Depressão e tristeza", "Ansiedade e estresse", "Dificuldades para dormir", "Luto e perdas", "Medos e inseguranças", "Autoestima e relações"].map((item) => <div className="soft-pill" key={item}><Heart size={20} />{item}</div>)}
        </div>
        <BookingButton>Quero conversar</BookingButton>
      </section>

      <section className="pain-solution section">
        <div className="pain-solution-shell">
          <div className="section-heading center">
            <div className="kicker">Você não está sozinho</div>
            <h2>Há momentos em que conversar pode ser o começo de <em>um novo caminho.</em></h2>
            <p>Um atendimento respeitoso considera sua história, suas vivências e o momento que você está atravessando.</p>
          </div>
          <div className="pain-simple-grid">
            <div className="pain-simple-card">
              <div className="pain-simple-title"><span>Talvez você esteja vivendo</span></div>
              <ul>
                <li>Ansiedade, preocupação ou pensamentos acelerados</li>
                <li>Tristeza, desânimo ou sensação de solidão</li>
                <li>Dificuldades com sono e descanso</li>
                <li>Perdas, luto ou mudanças difíceis</li>
                <li>Medos, traumas e sentimentos de inferioridade</li>
                <li>Conflitos familiares ou nos relacionamentos</li>
              </ul>
            </div>
            <div className="pain-simple-card solution-simple-card">
              <div className="pain-simple-title"><span>No acolhimento, você encontra</span></div>
              <ul>
                <li>Um espaço respeitoso para falar sobre sua história</li>
                <li>Escuta sem julgamentos e com atenção</li>
                <li>Tempo para organizar pensamentos e sentimentos</li>
                <li>Reflexão sobre desafios e possibilidades</li>
                <li>Respeito às suas crenças e individualidade</li>
                <li>Orientação sobre outros cuidados quando necessário</li>
              </ul>
            </div>
          </div>
          <div className="pain-solution-cta">
            <p>Você pode começar contando o que está acontecendo.</p>
            <BookingButton>Converse com Maria</BookingButton>
          </div>
        </div>
      </section>

      <section id="atendimentos" className="services section">
        <div className="section-heading center">
          <div className="kicker">Áreas de acolhimento</div>
          <h2>Um espaço para cuidar do que <em>você está vivendo.</em></h2>
          <p>Conheça os temas que podem ser trabalhados em um acompanhamento acolhedor e individualizado.</p>
        </div>
        <div className="services-marquee">
          <div className="services-track">
            {[...services, ...services].map(([title, desc], i) => <article className="service-card" key={i}>
              <div className="card-number">{String((i % services.length) + 1).padStart(2, "0")}</div><div className="service-icon"><Sparkles size={25} /></div><h3>{title}</h3><p>{desc}</p>
            </article>)}
          </div>
        </div>
        <div className="services-cta"><BookingButton>Consultar atendimento</BookingButton></div>
      </section>

      <section id="sobre" className="about section">
        <div className="about-image-wrap about-image-desktop" style={{ display: "grid", placeItems: "center", background: "#eadbc8", color: "var(--brown-dark)", padding: 28 }}>
          <div style={{ textAlign: "center" }}><HandHeart size={74} strokeWidth={1.2} /><p style={{ fontFamily: "Georgia,serif", fontSize: 27, marginTop: 18 }}>Acolher também é cuidar.</p></div>
        </div>
        <div className="section-copy">
          <div className="kicker">Conheça seu atendimento</div>
          <h2>Uma escuta com respeito à sua história e à sua <em>individualidade.</em></h2>
          <div className="about-image-wrap about-image-mobile" style={{ placeItems: "center", background: "#eadbc8", color: "var(--brown-dark)", padding: 24 }}>
            <div style={{ textAlign: "center" }}><HandHeart size={58} strokeWidth={1.2} /><p style={{ fontFamily: "Georgia,serif", fontSize: 23 }}>Acolher também é cuidar.</p></div>
          </div>
          <p>Maria de Jesus Costa oferece atendimento terapêutico com abordagem ministerial, fundamentado em escuta, acolhimento e respeito às vivências de cada pessoa.</p>
          <p>A formação apresentada contempla conteúdos como aconselhamento cristão, psicologia pastoral, terapia do luto, ansiedade, estresse, depressão, sono, traumas, fobias e relações familiares.</p>
          <div className="check-list clean-checks"><span><Check /> <b>Atendimento humanizado</b></span><span><Check /> <b>Respeito às crenças e à história</b></span><span><Check /> <b>Escuta individualizada</b></span><span><Check /> <b>Online e presencial</b></span></div>
          <BookingButton>Fale com Maria</BookingButton>
        </div>
      </section>

      <section id="abordagem" className="naturopathy section" aria-labelledby="approach-title">
        <div className="naturopathy-inner">
          <div className="naturopathy-image" style={{ display: "grid", placeItems: "center", background: "#eadbc8", color: "var(--brown-dark)", minHeight: 300 }}>
            <div style={{ textAlign: "center", padding: 24 }}><BookOpen size={64} strokeWidth={1.2} /><h3 style={{ fontFamily: "Georgia,serif", fontSize: 28 }}>Formação e abordagem</h3><p>Escuta · reflexão · acolhimento</p></div>
          </div>
          <div className="naturopathy-copy section-copy">
            <div className="kicker">Abordagem ministerial</div>
            <h2 id="approach-title">Acolhimento que respeita sua fé, sua história e <em>seu momento.</em></h2>
            <p>A abordagem ministerial integra aconselhamento e reflexão a partir de valores cristãos, com respeito à individualidade e às escolhas de cada pessoa.</p>
            <div className="naturopathy-how">
              <h3>Temas da formação</h3>
              <p>Aconselhamento cristão, psicologia pastoral, luto, sono, ansiedade, estresse, depressão, dependência química, traumas, fobias e acompanhamento de famílias, crianças, adolescentes, adultos e idosos.</p>
            </div>
            <p className="naturopathy-note">A abordagem ministerial não equivale a uma graduação em Psicologia nem substitui atendimento médico ou psicológico.</p>
            <BookingButton>Saiba mais pelo WhatsApp</BookingButton>
          </div>
        </div>
      </section>

      <section className="moments section">
        <div className="section-heading center">
          <div className="kicker">Cada história é única</div>
          <h2>O que está pedindo <em>atenção em você?</em></h2>
          <p>Você pode buscar acolhimento em diferentes fases e situações da vida.</p>
        </div>
        <div className="moments-grid">
          {moments.map(([title, desc], i) => <article className="moment-card" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{desc}</p></article>)}
        </div>
        <BookingButton>Agende uma conversa</BookingButton>
      </section>

      <section id="processo" className="process section">
        <div className="process-shell">
          <div className="section-heading center">
            <div className="kicker">Como funciona</div>
            <h2>Um primeiro contato simples e <em>acolhedor.</em></h2>
            <p>Você pode tirar dúvidas e conhecer o formato do atendimento antes de decidir.</p>
          </div>
          <div className="process-timeline">
            {[
              ["01", "Entre em contato", "Envie uma mensagem pelo WhatsApp e conte brevemente o que procura."],
              ["02", "Tire suas dúvidas", "Converse sobre o atendimento, valores, horários e formato."],
              ["03", "Combine o encontro", "Verifique a disponibilidade para atendimento online ou presencial."],
              ["04", "Comece no seu ritmo", "O acompanhamento é conduzido com respeito à sua história e ao seu momento."]
            ].map(([n, title, desc]) => <article className="process-card" key={n}><span className="process-number">{n}</span><div><h3>{title}</h3><p>{desc}</p></div></article>)}
          </div>
          <BookingButton>Fale pelo WhatsApp</BookingButton>
        </div>
      </section>

      <section className="online section">
        <div className="online-copy section-copy">
          <div className="kicker">Atendimento online</div>
          <h2>Um espaço de conversa onde <em>você estiver.</em></h2>
          <div className="online-image-wrap online-image-mobile" style={{ placeItems: "center", background: "#eadbc8", color: "var(--brown-dark)" }}><Video size={76} strokeWidth={1.2} /></div>
          <p>O atendimento online oferece praticidade para quem prefere conversar de casa ou de outro local reservado. Consulte pelo WhatsApp os horários e as orientações para a sessão.</p>
          <div className="online-points"><span><Check /> Praticidade</span><span><Check /> Horário combinado</span><span><Check /> Ambiente reservado</span></div>
          <BookingButton>Consultar horários online</BookingButton>
        </div>
        <div className="online-image-wrap online-image-desktop" style={{ display: "grid", placeItems: "center", background: "#eadbc8", color: "var(--brown-dark)" }}><div style={{ textAlign: "center" }}><Video size={84} strokeWidth={1.2} /><p style={{ fontFamily: "Georgia,serif", fontSize: 24 }}>Atendimento online</p></div></div>
      </section>

      <section id="localizacao" className="section" style={{ background: "#fbf3e8" }}>
        <div className="section-heading center">
          <div className="kicker">Onde estamos</div>
          <h2>Atendimento em Novo Gama e <em>região de Brasília.</em></h2>
          <p>Consulte a disponibilidade de atendimento presencial e online pelo WhatsApp.</p>
        </div>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "30px", borderRadius: 24, background: "#fffaf3", border: "1px solid #dfd0be", textAlign: "center" }}>
          <MapPin size={34} color="#70401f" />
          <h3 style={{ fontFamily: "Georgia,serif", fontSize: 26, color: "#3f2417", margin: "12px 0" }}>Novo Gama – Goiás</h3>
          <p style={{ color: "#7b6a5c", lineHeight: 1.8, margin: 0 }}>Quadra 574, Lote 5A<br />CEP 72860-537<br />Atendimento também para Brasília – Distrito Federal, mediante consulta.</p>
          <BookingButton>Consultar localização e horários</BookingButton>
        </div>
      </section>

      <section className="reviews section">
        <div className="section-heading center">
          <div className="kicker">Acolhimento e confiança</div>
          <h2>O primeiro passo pode ser <em>uma conversa.</em></h2>
          <p>Entre em contato para conhecer a proposta de atendimento, tirar dúvidas e entender se ela corresponde ao que você procura.</p>
        </div>
        <div className="reviews-marquee">
          <div className="reviews-track">
            {[["Escuta respeitosa", "Um espaço para falar com tranquilidade, sem julgamentos e com respeito à sua história."], ["Acolhimento", "Atendimento atento às necessidades e ao momento de cada pessoa."], ["Cuidado individual", "Uma conversa que considera suas vivências, crenças e particularidades."]].concat([["Escuta respeitosa", "Um espaço para falar com tranquilidade, sem julgamentos e com respeito à sua história."], ["Acolhimento", "Atendimento atento às necessidades e ao momento de cada pessoa."], ["Cuidado individual", "Uma conversa que considera suas vivências, crenças e particularidades."]]).map(([name, text], i) => <article className="google-card" key={i}><div className="google-top"><span className="avatar"><Heart size={19} /></span><div><strong>{name}</strong><small>Compromisso com o acolhimento</small></div></div><p>{text}</p></article>)}
          </div>
        </div>
        <BookingButton>Converse com Maria</BookingButton>
      </section>

      <section id="faq" className="faq section">
        <div className="section-heading center"><div className="kicker">Dúvidas frequentes</div><h2>Antes de começar, <em>tire suas dúvidas.</em></h2><p>Se sua pergunta não estiver aqui, fale diretamente pelo WhatsApp.</p><BookingButton>Tirar uma dúvida</BookingButton></div>
        <div className="faq-list">{faqs.map(([q, a], i) => <div className={"faq-item " + (faq === i ? "open" : "")} key={q}><button onClick={() => setFaq(faq === i ? null : i)}><span>{q}</span><ChevronDown /></button><div className="answer"><p>{a}</p></div></div>)}</div>
      </section>

      <section className="final-cta">
        <div className="kicker">Seu próximo passo</div><h2>Você não precisa enfrentar tudo <em>sozinho.</em></h2><p>Se sentir que é o momento, envie uma mensagem e conheça a proposta de atendimento.</p><BookingButton>Fale com Maria pelo WhatsApp</BookingButton>
      </section>

      <footer>
        <div className="footer-brand"><a className="brand" href="#inicio"><strong>MARIA</strong> DE JESUS COSTA <small>TERAPEUTA · ABORDAGEM MINISTERIAL</small></a><p>Escuta, acolhimento e respeito à sua história.</p></div>
        <div className="footer-links"><strong>Navegação</strong><a href="#sobre">Sobre o atendimento</a><a href="#atendimentos">Áreas de acolhimento</a><a href="#processo">Como funciona</a><a href="#localizacao">Localização</a><a href="#faq">Dúvidas</a></div>
        <div className="footer-contact"><strong>Agendamentos</strong><a href={whatsapp} target="_blank" rel="noreferrer">{phoneLabel}</a><a className="footer-cta" href={whatsapp} target="_blank" rel="noreferrer">Fale pelo WhatsApp <ArrowUpRight size={15} /></a><p>Quadra 574, Lote 5A<br />Novo Gama – GO · CEP 72860-537</p></div>
        <div className="footer-bottom">© {new Date().getFullYear()} Maria de Jesus Costa · Atendimento terapêutico</div>
      </footer>
      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar com Maria pelo WhatsApp"><span style={{ display: "grid", placeItems: "center", width: 58, height: 58, borderRadius: "50%", background: "#25D366", color: "#fff" }}><MessageCircle size={29} /></span></a>
    </main>
  );
}
