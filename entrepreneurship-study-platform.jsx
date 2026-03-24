import { useState } from "react";

/* ═══════════════════════════════════════════════════════════════════
   DATA — structured per week, per source
   ═══════════════════════════════════════════════════════════════════ */

const weeks = [
  {
    id: "w1",
    num: 1,
    title: "Introduction to Entrepreneurship",
    lecture: {
      label: "Lecture 1 — Prof. Dr. Wouter Stam",
      date: "Feb 2, 2026",
      sections: [
        {
          title: "What is Entrepreneurship?",
          body: `Entrepreneurship is the process of creating value by bringing together a unique combination of resources to exploit an opportunity. Key terms include: starting/founding/creating, new business/new venture, innovation, pursuit of opportunity, risk-taking, and profit-seeking.\n\nEntrepreneurship is not limited to starting a new business — it can happen inside established firms, non-profits, and other contexts. Ludwig von Mises (1949) argued that everyone acts entrepreneurially. The behavioral perspective emphasizes what entrepreneurs do (actions) rather than who they are (traits).`,
        },
        {
          title: "The Academic Field — Shane & Venkataraman (2000)",
          body: `Shane & Venkataraman (2000) provided the most influential academic definition, describing entrepreneurship as the scholarly examination of how, by whom, and with what effects opportunities to create future goods and services are discovered, evaluated, and exploited.\n\nThis shifted the conversation from who the entrepreneur is to the nexus of the individual and the opportunity — the process of discovery, evaluation, and exploitation.`,
        },
        {
          title: "Entrepreneurs vs. Managers",
          body: `Stevenson & Gumpert (1985) contrasted entrepreneurial and managerial behavior.\n\nEntrepreneurs are opportunity-driven, act quickly under uncertainty, take experimental approaches, resourcefully acquire resources, prefer flat structures with open communication, and favor decentralized decision-making.\n\nManagers focus on efficient resource management, move slowly wanting guarantees, are analytical and conservative, dislike borrowing resources, seek control, and prefer centralized decisions. This is a behavioral spectrum, not a personality dichotomy.`,
        },
        {
          title: "Trends Promoting Entrepreneurship",
          body: `Four trends fuel entrepreneurship today.\n\nTechnological changes — AI and other technologies reduce startup costs while creating new opportunities.\n\nEconomic changes — dynamic labor markets reduce opportunity costs of self-employment.\n\nInstitutional changes — the ecosystem has improved with incubators, accelerators, and venture capital.\n\nSocial changes — entrepreneurship is increasingly seen as a desirable career choice.`,
        },
        {
          title: "AI & Entrepreneurship — Opportunities",
          body: `AI enables entrepreneurship through four channels.\n\nNew forms of innovation — AI solutions offer distinctive features and performance advantages.\n\nOpportunity recognition — data analytics help identify untapped markets and predict trends.\n\nResource constraints — AI complements human labor, allowing focus on creative tasks.\n\nBusiness model exploration — AI enables rapid experimentation and hypothesis testing.`,
        },
        {
          title: "AI & Entrepreneurship — Challenges",
          body: `AI also creates challenges for entrepreneurs.\n\nData resource constraints — startups lack the vast historical data that incumbents possess.\n\nEthics and skepticism — managing transparency, data security, and avoiding biased decisions.\n\nContinuous learning — the rapid pace of AI development requires constant monitoring.\n\nHuman-AI collaboration — balancing analytical AI insights with intuitive personal expertise.`,
        },
        {
          title: "Unique Challenges Entrepreneurs Face",
          body: `Entrepreneurs face three unique challenges.\n\nLiability of newness — without a track record, attracting resources (funding, talent, customers) is very difficult.\n\nResource scarcity — entrepreneurs often lack the financial, human, and physical resources needed.\n\nExtreme uncertainty — creating something new requires trial-and-error learning with higher odds of failure.`,
        },
        {
          title: "Debunking Common Myths",
          body: `The lecture debunked ten myths.\n\nTrait myth — no single entrepreneurial personality exists, though genetics explain 37–48% of the tendency (Nicolaou et al., 2008).\n\nAge myth — self-employment peaks at ages 35–55, not under 40.\n\nNetworking myth — many successful entrepreneurs are not natural networkers, though social capital matters (Stam et al., 2014).\n\nEducation myth — mixed evidence; no clear link between education and self-employment probability.\n\nMoney myth — top motivation is "to realize my idea," not money (Dahlqvist & Davidsson, 2000).\n\nPrior employment myth — working for others actually increases entrepreneurial chances.\n\nImmigrant myth — varies by country, driven by culture, resources, and discrimination.\n\nIndustry myth — most entrepreneurs enter traditional sectors, not tech.\n\nGender myth — males are more likely to become entrepreneurs in nearly all countries.\n\nFunding myth — most common source is personal savings and friends/family, not VC.`,
        },
        {
          title: "The Startup Financing Cycle",
          body: `Financing progresses through stages.\n\nIn the "Valley of Death" phase, founders rely on personal savings and the three F's: Friends, Family, and Fools.\n\nAs traction builds, angel investors and seed capital enter.\n\nWith demonstrated growth, formal VC arrives in successive rounds.\n\nLater stages include mezzanine financing, leading to an IPO and public markets.\n\nKey takeaway: VC is NOT the most common funding source — most entrepreneurs self-fund initially.`,
        },
      ],
    },
    papers: [
      {
        label: "Audia & Rider (2005)",
        citation: "A Garage and an Idea: What More Does an Entrepreneur Need? California Management Review, 48(1), 6–28.",
        sections: [
          {
            title: "The Garage Myth",
            body: `Audia & Rider challenge the popular "garage entrepreneur" legend — the belief that entrepreneurs commonly start companies in garages, basements, or dorm rooms.\n\nBusiness school students estimated 48% of entrepreneurs start this way; a random phone survey estimated 30%. But a survey of actual VC-funded startups found only about 25% started in such locations, and always temporarily.\n\nThe myth persists because it taps into emotionally resonant ideas — hard work, ingenuity, independence, rags-to-riches success — not because it accurately represents entrepreneurship. It functions as a contemporary legend.`,
          },
          {
            title: "Entrepreneurs as Organizational Products",
            body: `The paper's central thesis is that entrepreneurs are "organizational products." Most entrepreneurs acquire the resources they need through prior experience at existing organizations in related industries.\n\nOrganizations provide three critical resources:\n\nConfidence — through mastery experiences (succeeding at relevant tasks) and vicarious experiences (watching peers become entrepreneurs).\n\nInformation and knowledge — access to industry knowledge, fine-grained information about opportunities, and organizational blueprints. 70% of founders started businesses related to prior employment; 71% of the fastest-growing companies came from ideas encountered at previous jobs.\n\nSocial ties — relationships with customers, suppliers, investors, and potential co-founders that facilitate resource mobilization and founding team composition.`,
          },
          {
            title: "Supporting Evidence",
            body: `Two research streams support the thesis.\n\nCareer history studies — 85% of technical entrepreneurs started businesses closely related to prior employment. Baxter became known as a prolific "producer" of biotech entrepreneurs, with former employees involved in 29 venture-backed startups.\n\nSpatial distribution studies — areas with more organizations of a certain kind generate more new organizations of that kind. Demonstrated in U.S. footwear, Dutch accounting, biotech, and other industries. Entrepreneurs start companies near prior employers because social ties are geographically localized.`,
          },
          {
            title: "HP & Apple — Beyond the Garage",
            body: `Even the most famous garage stories support the organizational products thesis.\n\nHP: Hewlett and Packard met at Stanford, where Terman connected them to opportunities. Packard gained experience at GE. Their first product was developed in Terman's lab; early production used Litton Engineering's foundry. The garage was their workspace for only about one year.\n\nApple: Jobs worked at HP at age 12 (calling it "the blueprint for Apple") and later at Atari. Wozniak worked at HP. They found their first customer through the Homebrew Computer Club. Atari's Bushnell connected Jobs to Markkula, who wrote the business plan, provided capital, and recruited Apple's first president from his Fairchild Semiconductor network.\n\nIn both cases, prior organizations — not garages — provided the confidence, knowledge, and connections that made these ventures possible.`,
          },
          {
            title: "Jobs That Promote Entrepreneurship",
            body: `Four conditions of employment are conducive to entrepreneurship.\n\nFirst, exposure to information signaling opportunities — new technologies, unmet customer needs.\n\nSecond, opportunities to fulfill broad roles that build confidence.\n\nThird, close contact with colleagues across functional areas for potential founding teams.\n\nFourth, direct access to key resource providers — suppliers, customers, and investors.\n\nSmall and young firms are more likely to offer these conditions, but the individual's specific position matters most.`,
          },
          {
            title: "Implications",
            body: `The garage legend teaches the wrong lessons by promoting an undersocialized view of entrepreneurship — the lone individual relying on extraordinary effort and talent.\n\nIn reality, venture creation is eminently social. Would-be entrepreneurs should seek positions at organizations known for producing entrepreneurs. Established companies should see themselves as natural incubators and support promising employee ideas rather than losing talent. Policy makers should focus on existing organizations as sources of entrepreneurial activity. Business schools should emphasize prior work experience alongside analytical skills.`,
          },
        ],
      },
    ],
  },
  {
    id: "w2",
    num: 2,
    title: "Opportunity Recognition & Idea Generation",
    lecture: {
      label: "Lecture 2 — Prof. Dr. Wouter Stam",
      date: "Feb 9, 2026",
      sections: [
        {
          title: "The Entrepreneurial Process",
          body: `The entrepreneurial process consists of **four key stages**: (1) **Opportunity recognition & assessment**, (2) **Mobilizing resources**, (3) **Defining & validating the business model**, and (4) **Managing and growing the venture**. This lecture focuses on the first stage — how entrepreneurs identify, generate, and assess new business ideas.\n\nA common misconception is that you need a brilliant, original idea to start a business. As Anita Roddick (The Body Shop) said: "Everyone wants to think it is like an act of God — that you sit down and have a brilliant idea. Well, when you start your own business it is not like that." Research by Hills & Singh (2004) shows that for about **42% of entrepreneurs, the desire to start a business came first** — before they even had an idea. Only about 37% started with the idea first.`,
        },
        {
          title: "You Don't Need a Unique Idea",
          body: `Bhidé (2000) interviewed 100 Inc. founders and found that **only 6% claimed to have started with unique products or services**. A full 58% said that **identical or very close substitutes** were already available. The rest indicated only slight to moderate differences from competitors.\n\nThe most common sources of new business ideas (out of 480 responses): **experience in a particular industry or market (56%)**, discussions with family and friends (42%), discussions with potential/existing customers (31%), thinking about solving a particular problem (30%), knowledge of or expertise with technology (29%), and developed from another idea (23%). This shows that ideas emerge from **everyday experience and social interaction**, not from flashes of genius.`,
        },
        {
          title: "Questioning & Challenging Conventions",
          body: `The first technique for generating business ideas is **asking "Why?" "Why not?" and "What if?"** Michael Dell observed that $600 worth of computer parts were being sold for $3,000 and asked: "Why not sell a much cheaper computer?" — founding Dell Computer.\n\nEntrepreneurs can create **uncontested market space** by challenging three types of conventions: **sectoral conventions** (how the industry works), **performance conventions** (what counts as good), and **customer conventions** (who the customer is and what they want). Henry Ford famously said: "If I'd asked people what they wanted, they'd have said faster horses."\n\nThe **SCAMPER** method is a structured tool for generating new ideas: **S**ubstitute, **C**ombine, **A**dapt, **M**odify, **P**ut to another use, **E**liminate, **R**earrange. Applying these prompts to any existing product can generate novel business concepts.`,
        },
        {
          title: "Problems as Opportunities & Value Proposition",
          body: `Entrepreneurs should **view problems as opportunities**. As Scott Cook (founder of Intuit) said: "Often the surprises that lead to new business ideas come from watching other people work and live their normal lives." Problems indicate **unmet customer needs** and thus opportunities to fill them. The approach: observe a problem, ask why it exists, then compare your proposed solution to those presently available.\n\nA useful exercise is creating a **"bug list"** — things that annoy you in daily life, poorly designed products, unfriendly services — then screening these for potential business opportunities.\n\nAs Theodore Levitt put it: **"People don't want to buy a quarter-inch drill. They want a quarter-inch hole."** Focus on value, not product features. A **value proposition** describes the bundle of product/service attributes that creates value for a specific customer segment. Value can be **quantitative** (price, speed of service) or **qualitative** (design, customer experience). Key value drivers include: newness, performance, customization, "getting the job done," design, brand/status, price, cost reduction, risk reduction, accessibility, and convenience/usability.`,
        },
        {
          title: "Identifying Trends — PESTEL Analysis",
          body: `The **PESTEL framework** helps entrepreneurs identify trends that create opportunities across six dimensions:\n\n**Political** — government policy, funding, grants, and initiatives.\n**Economic** — inflation, economic growth, labor and energy costs.\n**Social** — population changes, education, media, lifestyle, fashion, and culture.\n**Technological** — emerging technologies and disruptive innovations.\n**Environmental** — weather, green/ethical issues, pollution, waste, recycling.\n**Legal** — regulation, standards, and employment law.\n\nTrends matter because they **affect customer needs, preferences, and willingness to pay**, pointing to new markets that will emerge and existing markets that will decline. They also **affect costs of resources and production methods**, pointing to new innovations that can address unmet needs. Entrepreneurs should systematically map key trends in each domain and brainstorm associated opportunities.`,
        },
        {
          title: "Copycat Entrepreneurship & Technology-Based Ideas",
          body: `**Copycat entrepreneurship** is a legitimate and often successful strategy. As Steve Jobs said: "Creativity is about connecting things." **Me-too products often work** — combine ideas, trends, and business models that emerge in other markets to develop a solution for your target customer.\n\nIdea generation can follow a **technology-based approach** (new technology seeking existing markets), a **market-based approach** (existing technology applied to new markets), or a **synthesis of both** (new technology for new markets). When pursuing technology-based ideas, entrepreneurs should search for practical **use cases** for emerging technologies.\n\n**Divergent thinking** abilities are scored on four dimensions: **Fluency** (how many uses you come up with), **Originality** (how uncommon those uses are), **Flexibility** (how many categories your answers cover), and **Elaboration** (amount of detail in your answers).`,
        },
        {
          title: "Customer Empathy & Using AI Tools",
          body: `**Observing and interviewing potential customers** is crucial. Don't use surveys — employ **open-ended questions** to uncover deep insights. Focus on **gains and pains**: talk about their daily challenges in a specific setting or industry. Determine what current solutions they use and why; what would push them to switch to your offering?\n\nDevelop a **customer archetype** by asking: What keeps my customer up at night (**pain**)? What motivates them to get up in the morning (**gain**)? The **Empathy Map** helps capture what customers think and feel, hear, see, say and do, plus their pains and gains.\n\n**Generative AI tools** are increasingly popular among aspiring entrepreneurs. Smart prompting can quickly generate relevant information for idea generation, customer identification, market sizing, competitive analysis, and MVP planning. Key principles: designing effective prompts is an art, and you must **VALIDATE, VALIDATE, VALIDATE** — AI output is only a starting point and may contain inaccuracies. Collect real evidence through experiments, interviews, and surveys.`,
        },
        {
          title: "Feasibility Analysis",
          body: `Moving from idea to opportunity requires two steps: a **feasibility analysis** (turning an idea into a possibility) and a **personal analysis** (turning a possibility into an opportunity).\n\nA feasibility analysis is a **preliminary evaluation** of a business idea — it's NOT a full business plan, but a **GO vs NO-GO** decision supported by evidence (interviews, secondary data). Conduct it **early** to evaluate ideas before much resources are wasted. Usually Plan A doesn't work, so get feedback fast to refine and develop Plan B.\n\nFour components of a feasibility analysis:\n\n**Product/service feasibility** — Can the product be built? Does it solve an important problem?\n**Industry/market feasibility** — Is there a real customer who wants this? Are the industry and target market attractive?\n**Organizational feasibility** — What are the required resources? How can they be obtained?\n**Financial feasibility** — What are the funding needs? What is the risk/return?`,
        },
        {
          title: "Determining Personal Fit",
          body: `Even if an idea passes the feasibility analysis, the entrepreneur must assess whether it fits with their **personal goals and situation**. Apply at least **four criteria**:\n\n**1. My Goals** — Is this venture consistent with my goals and values? Is it the best option at this time? Will it open or close future doors? Am I comfortable with the personal risk/reward profile?\n\n**2. My Capabilities** — Can I define a useful role for myself? Do I have (or can I quickly acquire) the skills and experience required to add value?\n\n**3. My Lifestyle** — Will this venture let me control my life to the degree I want or need? Do I understand the impact on my lifestyle and personal finances?\n\n**4. My Relationships** — Do I understand the potential impact on my relationships? Do my significant others understand and support my commitment?\n\nContinue until: you prove to yourself it cannot be done, you don't want it, or you exceed your **affordable loss**.`,
        },
      ],
    },
    papers: [
      {
        label: "Drucker (1985)",
        citation: "The Discipline of Innovation. Harvard Business Review, May-June: 67-75.",
        sections: [
          {
            title: "Innovation as a Discipline",
            body: `Drucker's central argument is that **successful innovation results from a conscious, purposeful search for innovation opportunities** — it is not a flash of genius but a systematic discipline. Innovation is the specific function of entrepreneurship: **the effort to create purposeful, focused change** in an enterprise's economic or social potential.\n\nDrucker observed that the successful entrepreneurs he worked with over 30 years did not share a particular personality type. Instead, they all shared **a commitment to the systematic practice of innovation**. Entrepreneurship is not about an enterprise's size or age but about a certain kind of activity — and at the heart of that activity is innovation.`,
          },
          {
            title: "Internal Sources: Unexpected Occurrences & Incongruities",
            body: `Drucker identifies **seven sources of innovation**, four of which are **internal** to a company or industry.\n\n**1. Unexpected occurrences** — the easiest and simplest source. Both unexpected **successes** and unexpected **failures** can spark innovation. IBM's accounting machine was designed for banks but unexpectedly sold to libraries during the New Deal. Later, when business showed unexpected interest in computers for payroll, IBM seized the opportunity while Univac spurned it. The Ford Edsel failure led Ford to discover that market segmentation had shifted from income groups to **lifestyles**, leading to the hugely successful Mustang. Most businesses dismiss the unexpected — Drucker advises having **two "first pages"**: a problem page and an opportunity page.\n\n**2. Incongruities** — gaps between what is and what "ought" to be. Alcon Laboratories exploited an incongruity in cataract surgery by preserving an enzyme that dissolved a ligament, replacing an awkward cutting step. An incongruity between expectations and results in ocean shipping — where costs came from **sitting idle in port**, not from being at sea — led to the container ship revolution.`,
          },
          {
            title: "Internal Sources: Process Needs & Industry Changes",
            body: `**3. Process needs** — a weak link in an existing process creates an opportunity. Japan adapted American highway reflectors for its ancient road system, enabling modern traffic flow. The Linotype machine and modern advertising both emerged around 1890 to meet the process needs of newspaper production and distribution.\n\n**4. Industry and market changes** — industry structures can change overnight. When an industry **grows about 40% in ten years or less**, its structure changes. Established companies focus on defending what they have and tend to **neglect the fastest growing market segments**. Donaldson, Lufkin & Jenrette was founded in 1960 by three young HBS graduates who recognized that institutional investors were becoming dominant — within years they became a Wall Street leader. New opportunities **rarely fit the way the industry has always approached the market**.`,
          },
          {
            title: "External Sources: Demographics & Changes in Perception",
            body: `Three additional sources exist **outside** the company:\n\n**5. Demographic changes** — the most **reliable** of all external sources of innovation. Demographic events have known lead times. Japan led in robotics because they acted on the predictable decline of blue-collar workers due to the education explosion. Club Mediterranée succeeded by recognizing the emergence of affluent, educated young adults who wanted different vacations than their working-class parents.\n\n**6. Changes in perception** — "the glass is half-full" and "the glass is half-empty" describe the same phenomenon but have vastly different meanings. A change in perception **does not alter facts but changes their meaning — and very quickly**. Despite massive health improvements, Americans' growing health concerns created markets for health magazines, health foods, exercise equipment, and jogging gear. It took less than two years for computers to shift from being perceived as threats to becoming consumer products for income tax preparation.`,
          },
          {
            title: "New Knowledge as a Source of Innovation",
            body: `**7. New knowledge** — the "superstars" of entrepreneurship. They get the publicity and the money, but they are also the **most unpredictable and have the longest lead times** (roughly 50 years from new knowledge to market impact).\n\nKnowledge-based innovation typically requires **convergence of multiple kinds of knowledge**. Modern banking required both the French theory of entrepreneurial banking (Saint-Simon, 1825) and English commercial banking practice — J.P. Morgan and Georg Siemens combined both to create the first successful modern banks. The computer required **six separate strands of knowledge**: binary arithmetic, Babbage's calculating machine concept, Hollerith's punch card, the audion tube (1906), symbolic logic (Russell & Whitehead, 1910-1913), and programming/feedback concepts from WWI.\n\nKnowledge-based innovation follows a pattern: a long gestation period with much talk and little action, then **sudden convergence** with tremendous excitement and speculation, followed by a **crash and shakeout** (e.g., ~1,000 electric companies founded 1880-1890, only 25 survived to 1914). Paradoxically, knowledge-based innovation is **more market dependent** than any other kind — de Havilland built the first passenger jet but failed because it didn't analyze market needs; Boeing and Douglas took over.`,
          },
          {
            title: "Principles of Innovation",
            body: `Drucker outlines several key **principles for effective innovation**:\n\n**Analyze all opportunity sources** — innovators must systematically examine all seven sources, as different sources matter at different times depending on context.\n\n**Be both conceptual and perceptual** — go out and look, ask, and listen. Successful innovators use **both the right and left sides of their brains**. They work out analytically what the innovation needs to be, then study potential users' expectations, values, and needs.\n\n**Keep it simple and focused** — an effective innovation should do only one thing. The greatest praise: **"This is obvious! Why didn't I think of it?"**\n\n**Start small** — effective innovations are not grandiose. They try to do one specific thing.\n\n**Aim for leadership** — even if results are modest, the successful innovation aims from the beginning to become the standard setter. **If an innovation does not aim at leadership from the beginning, it is unlikely to be innovative enough.**\n\n**Innovation is work, not genius** — it requires knowledge, ingenuity, focus, and above all **hard, focused, purposeful work**. Diligence, persistence, and commitment are essential.`,
          },
        ],
      },
    ],
  },
];

/* sidebar short labels per source */
const sideLabels = {
  w1_lecture: [
    "What is Entrepreneurship?", "Academic Field", "Ent. vs. Managers",
    "Trends", "AI — Opportunities", "AI — Challenges",
    "Unique Challenges", "Debunking Myths", "Financing Cycle",
  ],
  w1_paper0: [
    "The Garage Myth", "Organizational Products", "Supporting Evidence",
    "HP & Apple", "Promoting Jobs", "Implications",
  ],
  w2_lecture: [
    "Entrepreneurial Process", "No Unique Idea Needed", "Challenging Conventions",
    "Problems & Value Prop.", "PESTEL Analysis", "Copycat & Tech Ideas",
    "Customer Empathy & AI", "Feasibility Analysis", "Personal Fit",
  ],
  w2_paper0: [
    "Innovation as Discipline", "Unexpected & Incongruities", "Process & Industry",
    "Demographics & Perception", "New Knowledge", "Principles",
  ],
};

/* placeholder data */
const flashcards = [];
const examQs = [];

/* ═══════════════════════════════════════════════════════════════════
   PALETTE
   ═══════════════════════════════════════════════════════════════════ */
const C = {
  bg: "#faf8f5", paper: "#ffffff", warm: "#f2ede6", warmDk: "#e4ddd3",
  ink: "#302b26", inkSoft: "#5e564d", inkMuted: "#8a827a", inkFaint: "#b5afa7",
  sage: "#6d9e72", sageBg: "#eaf2ea", sageTx: "#3f7243",
  terra: "#c07a5f", terraBg: "#f6ece7", terraTx: "#9a5a3f",
  sky: "#6b94b2", skyBg: "#e8eff5", skyTx: "#3e6a88",
  plum: "#9b7fb8", plumBg: "#f0ecf5", plumTx: "#6e5a8a",
};
const ff = `'Source Serif 4','Georgia',serif`;
const fs = `'Libre Franklin','Helvetica Neue',sans-serif`;

/* ═══════════════════════════════════════════════════════════════════
   APP
   ═══════════════════════════════════════════════════════════════════ */
export default function App() {
  const [tab, setTab] = useState("study");
  const [weekIdx, setWeekIdx] = useState(0);
  const [source, setSource] = useState("lecture"); // "lecture" | "paper-0" etc.
  const [mob, setMob] = useState(false);

  const week = weeks[weekIdx];

  return (
    <div style={{ fontFamily: ff, background: C.bg, color: C.ink, minHeight: "100vh", display: "flex", WebkitFontSmoothing: "antialiased" }}>
      <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,300;8..60,400;8..60,500;8..60,600;8..60,700&family=Libre+Franklin:wght@400;500;600&display=swap" rel="stylesheet" />
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        ::selection{background:${C.sageBg};color:${C.ink}}
        button{cursor:pointer;font-family:${fs}}
        @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeOnly{from{opacity:0}to{opacity:1}}
        ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:${C.warmDk};border-radius:4px}
        @media(max-width:860px){
          .sb{position:fixed!important;z-index:200;transform:translateX(-100%);transition:transform .3s;box-shadow:4px 0 20px rgba(0,0,0,.08)}
          .sb.open{transform:translateX(0)}
          .mc{margin-left:0!important;padding-left:20px!important;padding-right:20px!important}
          .mobBtn{display:flex!important}
        }
      `}</style>

      {mob && <div onClick={() => setMob(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.15)", zIndex: 199, animation: "fadeOnly .2s" }} />}

      <button className="mobBtn" onClick={() => setMob(!mob)} style={{
        display: "none", position: "fixed", top: 14, left: 14, zIndex: 201,
        width: 38, height: 38, borderRadius: 10, border: `1px solid ${C.warmDk}`,
        background: C.paper, alignItems: "center", justifyContent: "center",
        fontSize: 17, color: C.ink, boxShadow: "0 2px 8px rgba(0,0,0,.06)"
      }}>☰</button>

      <Side tab={tab} setTab={t => { setTab(t); setMob(false) }} source={source} setSource={s => { setSource(s); setTab("study"); setMob(false) }} week={week} weekIdx={weekIdx} setWeekIdx={i => { setWeekIdx(i); setSource("lecture"); setTab("study"); setMob(false) }} open={mob} />

      <main className="mc" style={{ flex: 1, marginLeft: 272, maxWidth: 700, padding: "0 48px", minHeight: "100vh" }}>
        <div style={{ paddingTop: 52, paddingBottom: 100 }}>
          {tab === "study" && <StudyView week={week} source={source} />}
          {tab === "flashcards" && <Placeholder icon="🌿" color={C.sky} title="Flashcards" msg="Flashcards will be generated once all weekly materials have been uploaded. Check back soon!" />}
          {tab === "exam" && <Placeholder icon="✏️" color={C.terra} title="Mock Exam" msg="The mock exam will be created after all weeks and papers have been processed. Keep uploading your materials!" />}
        </div>
      </main>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SIDEBAR
   ═══════════════════════════════════════════════════════════════════ */
function Side({ tab, setTab, source, setSource, week, weekIdx, setWeekIdx, open }) {
  const modeTabs = [
    { id: "study", label: "Study Material", icon: "📖", c: C.sage, bg: C.sageBg },
    { id: "flashcards", label: "Flashcards", icon: "🌿", c: C.sky, bg: C.skyBg },
    { id: "exam", label: "Mock Exam", icon: "✏️", c: C.terra, bg: C.terraBg },
  ];

  const scrollTo = id => {
    setTab("study");
    setTimeout(() => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }) }, 60);
  };

  const lecLabels = sideLabels[`${week.id}_lecture`] || [];
  const isLec = source === "lecture";

  return (
    <aside className={`sb ${open ? "open" : ""}`} style={{
      width: 272, position: "fixed", top: 0, left: 0, height: "100vh",
      background: C.paper, borderRight: `1px solid ${C.warmDk}`,
      display: "flex", flexDirection: "column", overflow: "hidden", zIndex: 200,
    }}>
      {/* Header */}
      <div style={{ padding: "28px 22px 20px", borderBottom: `1px solid ${C.warm}` }}>
        <div style={{ fontFamily: fs, fontSize: 9.5, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: C.inkMuted, marginBottom: 5 }}>EAAI · XM_0090</div>
        <h1 style={{ fontSize: 15.5, fontWeight: 600, lineHeight: 1.4 }}>Entrepreneurship in Analytics & AI</h1>
        <p style={{ fontFamily: fs, fontSize: 10.5, color: C.inkMuted, marginTop: 4 }}>Prof. Dr. Wouter Stam · VU Amsterdam</p>
      </div>

      {/* Mode tabs */}
      <div style={{ padding: "12px 12px 4px" }}>
        {modeTabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            display: "flex", alignItems: "center", gap: 8, width: "100%",
            padding: "8px 11px", marginBottom: 2, borderRadius: 8, border: "none",
            background: tab === t.id ? t.bg : "transparent",
            color: tab === t.id ? t.c : C.inkSoft,
            fontSize: 12.5, fontWeight: tab === t.id ? 600 : 500, transition: "all .2s",
          }}>
            <span style={{ fontSize: 14 }}>{t.icon}</span>{t.label}
          </button>
        ))}
      </div>

      {/* Study navigation — only show when study tab active */}
      {tab === "study" && (
        <div style={{ flex: 1, overflowY: "auto", borderTop: `1px solid ${C.warm}`, padding: "8px 0" }}>
          {/* Week selector */}
          <div style={{ padding: "6px 12px 2px", display: "flex", gap: 4 }}>
            {weeks.map((w, i) => (
              <button key={w.id} onClick={() => setWeekIdx(i)} style={{
                flex: 1, padding: "7px 4px", borderRadius: 7, border: "none",
                background: weekIdx === i ? C.sageBg : "transparent",
                color: weekIdx === i ? C.sageTx : C.inkMuted,
                fontSize: 10.5, fontWeight: weekIdx === i ? 600 : 500,
                fontFamily: fs, transition: "all .2s", lineHeight: 1.3,
              }}>
                Wk {w.num}
              </button>
            ))}
          </div>
          <div style={{ fontFamily: fs, fontSize: 9, fontWeight: 600, letterSpacing: 1.4, textTransform: "uppercase", color: C.inkFaint, padding: "8px 22px 6px" }}>
            {week.title}
          </div>

          {/* Lecture source */}
          <SourceBtn
            active={isLec}
            onClick={() => setSource("lecture")}
            icon="🎓"
            label="Lecture"
            sub={week.lecture.date}
            color={C.plum}
            bg={C.plumBg}
          />
          {isLec && lecLabels.map((l, i) => (
            <TopicBtn key={i} num={i + 1} label={l} onClick={() => scrollTo(`lec-${i}`)} />
          ))}

          {/* Papers */}
          {week.papers.map((p, pi) => {
            const key = `paper-${pi}`;
            const active = source === key;
            const papLabels = sideLabels[`${week.id}_paper${pi}`] || [];
            return (
              <div key={pi}>
                <SourceBtn
                  active={active}
                  onClick={() => setSource(key)}
                  icon="📄"
                  label={p.label}
                  sub="Paper"
                  color={C.terra}
                  bg={C.terraBg}
                />
                {active && papLabels.map((l, i) => (
                  <TopicBtn key={i} num={i + 1} label={l} onClick={() => scrollTo(`pap${pi}-${i}`)} />
                ))}
              </div>
            );
          })}
        </div>
      )}

      {/* Footer */}
      <div style={{ padding: "11px 20px", borderTop: `1px solid ${C.warm}`, fontFamily: fs, fontSize: 9, color: C.inkFaint, lineHeight: 1.5 }}>
        Weeks 1–{weeks.length} available · more coming soon
      </div>
    </aside>
  );
}

function SourceBtn({ active, onClick, icon, label, sub, color, bg }) {
  return (
    <button onClick={onClick} style={{
      display: "flex", alignItems: "center", gap: 9, width: "calc(100% - 24px)",
      margin: "4px 12px 2px", padding: "8px 10px", borderRadius: 8,
      border: active ? `1px solid ${color}33` : "1px solid transparent",
      background: active ? bg : "transparent",
      color: active ? color : C.inkSoft,
      fontSize: 12, fontWeight: 600, textAlign: "left", transition: "all .2s",
    }}>
      <span style={{ fontSize: 13 }}>{icon}</span>
      <div>
        <div style={{ lineHeight: 1.3 }}>{label}</div>
        <div style={{ fontSize: 9.5, fontWeight: 400, color: C.inkFaint, marginTop: 1 }}>{sub}</div>
      </div>
    </button>
  );
}

function TopicBtn({ num, label, onClick }) {
  return (
    <button onClick={onClick} style={{
      display: "flex", alignItems: "baseline", gap: 6, width: "calc(100% - 24px)",
      margin: "0 12px", padding: "5px 10px 5px 28px", border: "none", borderRadius: 5,
      background: "transparent", textAlign: "left",
      fontSize: 11, color: C.inkMuted, lineHeight: 1.4,
      transition: "background .15s",
    }}
      onMouseEnter={e => e.currentTarget.style.background = C.warm}
      onMouseLeave={e => e.currentTarget.style.background = "transparent"}
    >
      <span style={{ color: C.inkFaint, fontWeight: 600, flexShrink: 0, width: 14, fontSize: 9.5 }}>{num}</span>
      <span>{label}</span>
    </button>
  );
}


/* ═══════════════════════════════════════════════════════════════════
   STUDY VIEW
   ═══════════════════════════════════════════════════════════════════ */
function StudyView({ week, source }) {
  const isLec = source === "lecture";
  const paperIdx = !isLec ? parseInt(source.split("-")[1]) : -1;

  const title = isLec ? week.lecture.label : week.papers[paperIdx]?.label;
  const subtitle = isLec ? null : week.papers[paperIdx]?.citation;
  const sections = isLec ? week.lecture.sections : week.papers[paperIdx]?.sections || [];
  const idPrefix = isLec ? "lec" : `pap${paperIdx}`;
  const accentColor = isLec ? C.plum : C.terra;
  const accentTx = isLec ? C.plumTx : C.terraTx;

  return (
    <div key={source} style={{ animation: "fadeIn .5s ease" }}>
      {/* Header */}
      <header style={{ marginBottom: 48 }}>
        <p style={{ fontFamily: fs, fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: accentColor, marginBottom: 10 }}>
          Week {week.num} · {isLec ? "Lecture" : "Paper"}
        </p>
        <h2 style={{ fontSize: "clamp(24px,4vw,32px)", fontWeight: 700, lineHeight: 1.25, marginBottom: 10 }}>
          {isLec ? week.title : title}
        </h2>
        {isLec && (
          <p style={{ fontFamily: fs, fontSize: 13, color: C.inkMuted, marginBottom: 6 }}>{title}</p>
        )}
        {subtitle && (
          <p style={{ fontFamily: fs, fontSize: 12, color: C.inkMuted, lineHeight: 1.6, fontStyle: "italic", maxWidth: 560 }}>{subtitle}</p>
        )}
        <p style={{ fontSize: 15, color: C.inkSoft, lineHeight: 1.8, maxWidth: 540, marginTop: 14 }}>
          {isLec
            ? "Key concepts and frameworks from the lecture."
            : "Most important points from this reading."}
        </p>
      </header>

      {/* Sections */}
      {sections.map((s, i) => (
        <section key={i} id={`${idPrefix}-${i}`} style={{ marginBottom: 48, scrollMarginTop: 40 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: fs, fontSize: 11, fontWeight: 600, color: C.inkFaint, minWidth: 22 }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.35 }}>{s.title}</h3>
          </div>
          <div style={{ paddingLeft: 34 }}>
            {s.body.split("\n\n").map((p, pi) => (
              <p key={pi} style={{ fontSize: 14.5, lineHeight: 1.9, color: C.inkSoft, marginBottom: 14, maxWidth: 570 }}>{p}</p>
            ))}
          </div>
          {i < sections.length - 1 && (
            <div style={{ width: 28, height: 1, background: C.warmDk, marginTop: 12, marginLeft: 34 }} />
          )}
        </section>
      ))}

      {/* Source badge */}
      <div style={{
        marginTop: 20, padding: "14px 18px", borderRadius: 10,
        background: isLec ? C.plumBg : C.terraBg,
        border: `1px solid ${accentColor}22`,
        fontFamily: fs, fontSize: 11, color: C.inkMuted, lineHeight: 1.6,
      }}>
        <strong style={{ color: accentTx }}>Source:</strong> {isLec ? week.lecture.label : `${week.papers[paperIdx].label} — ${week.papers[paperIdx].citation}`}
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════════
   PLACEHOLDER (for flashcards & exam)
   ═══════════════════════════════════════════════════════════════════ */
function Placeholder({ icon, color, title, msg }) {
  return (
    <div style={{ animation: "fadeIn .5s ease", paddingTop: 40, textAlign: "center" }}>
      <div style={{
        width: 72, height: 72, borderRadius: 20, margin: "0 auto 20px",
        display: "flex", alignItems: "center", justifyContent: "center",
        background: C.warm, fontSize: 32,
      }}>{icon}</div>
      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 10, color }}>{title}</h2>
      <p style={{ fontSize: 15, color: C.inkSoft, lineHeight: 1.8, maxWidth: 400, margin: "0 auto" }}>{msg}</p>

      <div style={{
        marginTop: 40, padding: "20px 24px", borderRadius: 12,
        background: C.paper, border: `1px solid ${C.warmDk}`,
        maxWidth: 420, margin: "40px auto 0", textAlign: "left",
      }}>
        <p style={{ fontFamily: fs, fontSize: 12, fontWeight: 600, color: C.inkMuted, marginBottom: 8 }}>What's needed:</p>
        <div style={{ fontFamily: fs, fontSize: 13, color: C.inkSoft, lineHeight: 1.7 }}>
          Upload all remaining weekly materials (lectures + papers) and I'll generate comprehensive flashcards and exam questions covering every topic.
        </div>
      </div>
    </div>
  );
}
