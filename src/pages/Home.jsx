// export default function Home() {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold text-center mb-4">Welcome to Syvora</h1>
//       <p className="text-center text-gray-600 mb-8">India's No.1 Smart Fashion Destination</p>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         <div className="bg-pink-100 p-8 rounded-lg text-center font-semibold">Men's Wear</div>
//         <div className="bg-pink-100 p-8 rounded-lg text-center font-semibold">Women's Wear</div>
//         <div className="bg-pink-100 p-8 rounded-lg text-center font-semibold">Kids Wear</div>
        
//       </div>
//     </div>
//   );
// }
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ---------- helpers ---------- */
function Reveal({ as: Tag = "div", className = "", children }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { el.classList.add("in"); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); }
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={`reveal ${className}`}>{children}</Tag>;
}

/* ---------- hero demo: a small size finder ---------- */
const BUILDS = { Slim: "S", Athletic: "M", Broad: "L", Heavy: "XL" };
const SIZES = ["S", "M", "L", "XL", "XXL"];

function SizeDemo() {
  const [build, setBuild] = useState("Athletic");
  const [fit, setFit] = useState("Regular");
  let i = SIZES.indexOf(BUILDS[build]);
  if (fit === "Relaxed") i = Math.min(i + 1, SIZES.length - 1);
  if (fit === "Slim") i = Math.max(i - 1, 0);
  const size = SIZES[i];

  const Group = ({ items, value, set }) => (
    <div className="chips">
      {items.map((x) => (
        <button key={x} className={`chip ${value === x ? "on" : ""}`} aria-pressed={value === x} onClick={() => set(x)}>{x}</button>
      ))}
    </div>
  );

  return (
    <div className="demo" aria-label="Size recommendation preview">
      <p className="demo-title">Find your size</p>
      <p className="demo-label">Body type</p>
      <Group items={Object.keys(BUILDS)} value={build} set={setBuild} />
      <p className="demo-label">How you like it to fit</p>
      <Group items={["Slim", "Regular", "Relaxed"]} value={fit} set={setFit} />
      <div className="demo-result">
        <span className="demo-size" key={size}>{size}</span>
        <span className="demo-note">Suggested size for a<br />{fit.toLowerCase()} fit</span>
      </div>
    </div>
  );
}

/* ---------- feature mini-visuals ---------- */
const FitVisual = () => (
  <div className="vis">
    {[["Chest", 82, "Perfect"], ["Shoulder", 64, "Perfect"], ["Length", 90, "Loose"]].map(([l, w, s]) => (
      <div className="vis-row" key={l}>
        <span>{l}</span><i className="bar"><b style={{ width: `${w}%` }} /></i><em>{s}</em>
      </div>
    ))}
    <div className="vis-foot">Best size for you: <strong>M</strong></div>
  </div>
);

const QuizVisual = () => (
  <div className="vis">
    <p className="vis-q">What is your style?</p>
    <div className="chips">
      {["Minimal", "Street", "Classic", "Ethnic"].map((t, i) => (
        <span key={t} className={`chip static ${i % 2 === 0 ? "on" : ""}`}>{t}</span>
      ))}
    </div>
    <p className="vis-q">Budget</p>
    <div className="chips">
      <span className="chip static">Under ₹999</span>
      <span className="chip static on">₹1k – ₹3k</span>
      <span className="chip static">₹3k+</span>
    </div>
    <div className="vis-foot">Your capsule: 5 pieces picked for you</div>
  </div>
);

const EventVisual = () => (
  <div className="vis">
    {[["Cousin's wedding", "Ethnic", "12 Dec"], ["Office dinner", "Formal", "20 Dec"], ["New Year party", "Party Wear", "31 Dec"]].map(([n, t, d]) => (
      <div className="event" key={n}>
        <div className="event-date">{d}</div>
        <div><strong>{n}</strong><small>{t}</small></div>
      </div>
    ))}
    <div className="vis-foot">Reminder email sent 10 days before</div>
  </div>
);

const RoomVisual = () => (
  <div className="vis">
    <div className="avatars">
      {["A", "R", "S"].map((a) => <span key={a}>{a}</span>)}
      <small>3 people in this room</small>
    </div>
    <div className="bubble">I like the olive one. Check the size chart.</div>
    <div className="bubble alt">Added to our room. Waiting for Riya's vote.</div>
    <div className="vis-foot">Share one link, shop in real time</div>
  </div>
);

const SellersVisual = () => (
  <div className="vis">
    <div className="seller"><strong>Online brands</strong><small>Independent labels with their own catalogue</small></div>
    <div className="seller"><strong>Local boutiques</strong><small>Neighbourhood shops, with one or many outlets</small></div>
    <div className="vis-foot">Both live side by side in one store</div>
  </div>
);

const StockVisual = () => (
  <div className="vis">
    <div className="stock">
      <div className="stock-img" />
      <div><strong>Linen Kurta, Sand</strong><small>Size M · Out of stock</small></div>
    </div>
    <div className="toast">Back in stock. We have emailed you.</div>
    <div className="vis-foot">Tap “Notify me” once, we handle the rest</div>
  </div>
);

const FEATURES = [
  { title: "A size that actually fits", Visual: FitVisual,
    text: "Tell us your height, weight and how you like clothes to sit. Syvora estimates your measurements, compares them with each product's own size chart, and recommends the size to order. It even knows that some brands run small and others run large." },
  { title: "A style quiz that learns your taste", Visual: QuizVisual,
    text: "Answer a few quick questions about your body type, your style and your budget. Syvora then puts together a capsule wardrobe of five pieces that match, so you spend less time scrolling." },
  { title: "Outfits for the dates that matter", Visual: EventVisual,
    text: "Add weddings, parties and dinners to your own wardrobe calendar and tag the mood: Ethnic, Indo-Western, Formal, Casual, Party Wear or Streetwear. We send a reminder ten days ahead, while there is still time to order." },
  { title: "Shop together, from anywhere", Visual: RoomVisual,
    text: "Open a shopping room, add products and share the link. Friends and family join, see the same items and leave comments. Choosing an outfit becomes a conversation instead of a screenshot." },
  { title: "Brands and local boutiques in one place", Visual: SellersVisual,
    text: "Syvora brings together online clothing brands and shopkeepers from your own city. Browse by category, brand or boutique, and find pieces you would never see in a big marketplace." },
  { title: "Never miss a restock", Visual: StockVisual,
    text: "Loved it but it was sold out? Ask to be told. The moment the item is back, you get a notification in the app and an email." },
];

const EXTRAS = [
  ["Honest reviews", "Rate products and add up to four photos. Reviews from real buyers carry a verified purchase mark."],
  ["Cart and wishlist", "Save what you like, change sizes and quantities, and see GST and delivery charges before you pay."],
  ["Coupons", "Apply a discount code at checkout. Each code is checked for validity and for one use per person."],
  ["Secure payments", "Pay online through Razorpay, or choose cash on delivery with a small advance on your first order."],
  ["Live order tracking", "Follow your parcel from confirmed to packed, shipped, out for delivery and delivered, with courier details."],
  ["Saved addresses", "Keep several addresses and pick a default so checkout takes seconds."],
];

/* ---------- page ---------- */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div className="sy">
      <style>{css}</style>

      

      <main>
        <section className="hero">
          <div>
            <h1>
              <span className="line l1">Clothes that fit,</span>
              <span className="line l2">chosen with the people</span>
              <span className="line l3">you shop with.</span>
            </h1>
            <p className="lede">
              Syvora is a fashion marketplace for Indian shoppers. It finds your size, learns your
              style, plans outfits around your calendar and lets friends shop together, with brands
              and local boutiques in one store.
            </p>
            <a className="btn" href="#features">See what Syvora does</a>
          </div>
          <div className="hero-demo"><SizeDemo /></div>
        </section>

        <section className="strip">
          <Reveal className="strip-in">
            <p>Shopping for clothes online is mostly guesswork: the wrong size, the wrong colour, the long wait to find out. Syvora removes the guessing at each step.</p>
          </Reveal>
        </section>

        <section id="features" className="features">
          <Reveal as="h2" className="sec-title">What you can do on Syvora</Reveal>
          {FEATURES.map(({ title, text, Visual }, i) => (
            <Reveal className={`feat ${i % 2 ? "flip" : ""}`} key={title}>
              <div className="feat-text"><h3>{title}</h3><p>{text}</p></div>
              <div><Visual /></div>
            </Reveal>
          ))}
        </section>

        <section id="more" className="extras">
          <Reveal as="h2" className="sec-title light">Everything around the shopping</Reveal>
          <Reveal className="extras-grid">
            {EXTRAS.map(([t, d]) => (
              <div className="extra" key={t}><h4>{t}</h4><p>{d}</p></div>
            ))}
          </Reveal>
        </section>

        <section id="privacy" className="privacy">
          <Reveal className="privacy-in">
            <h2>Your data stays yours</h2>
            <p>
              Syvora follows India's Digital Personal Data Protection Act, 2023. We ask for your
              consent when you sign up, keep passwords encrypted and delete your account data when
              you ask. Activity logs and personal details on completed orders are cleared
              automatically after 180 days.
            </p>
            <p className="privacy-links">
  <Link to="/privacy-policy">Read the privacy policy</Link>
  <Link to="/terms-conditions">Read the terms of service</Link>
</p>
          </Reveal>
        </section>
      </main>

      
    </div>
  );
}

/* ---------- styles ---------- */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=DM+Sans:wght@400;500;600&display=swap');
.sy{--paper:#F5EEE2;--beige:#EADFCC;--sand:#D9C7A9;--tan:#B08968;--brown:#7A5233;--deep:#4A2F1E;--ink:#2E1D13;
  font-family:'DM Sans',system-ui,sans-serif;color:var(--ink);background:var(--paper);line-height:1.6;-webkit-font-smoothing:antialiased}
.sy *{box-sizing:border-box}
.sy a{color:inherit;text-decoration:none}
.sy h1,.sy h2,.sy h3,.sy h4{font-family:'Newsreader',Georgia,serif;font-weight:500;margin:0;line-height:1.12}
.sy a:focus-visible,.sy button:focus-visible{outline:2px solid var(--brown);outline-offset:3px;border-radius:6px}

.nav{position:sticky;top:0;z-index:20;display:flex;justify-content:space-between;align-items:center;padding:18px clamp(20px,5vw,64px);background:var(--paper);transition:box-shadow .3s,padding .3s}
.nav.scrolled{box-shadow:0 1px 0 var(--sand);padding-top:12px;padding-bottom:12px}
.brand{font-family:'Newsreader',serif;font-size:1.7rem;font-weight:600;color:var(--deep)}
.nav nav{display:flex;gap:28px;font-size:.95rem}
.nav nav a{color:var(--brown);padding:4px 0;border-bottom:1px solid transparent;transition:border-color .2s,color .2s}
.nav nav a:hover{color:var(--deep);border-color:var(--tan)}

.hero{display:grid;grid-template-columns:1.2fr .8fr;gap:clamp(32px,6vw,88px);align-items:center;max-width:1280px;margin:0 auto;padding:clamp(48px,9vw,112px) clamp(20px,5vw,64px) clamp(56px,8vw,104px)}
.hero h1{font-size:clamp(2.5rem,6vw,4.9rem);color:var(--deep);letter-spacing:-.015em}
.line{display:block;opacity:0;transform:translateY(22px);animation:rise .9s cubic-bezier(.2,.7,.2,1) forwards}
.l2{animation-delay:.15s}.l3{animation-delay:.3s}
.lede{max-width:520px;font-size:1.12rem;color:var(--brown);margin:28px 0 34px;opacity:0;transform:translateY(22px);animation:rise .9s .5s cubic-bezier(.2,.7,.2,1) forwards}
.btn{display:inline-block;background:var(--deep);color:var(--paper)!important;padding:14px 28px;border-radius:999px;font-weight:500;transition:background .25s,transform .25s;opacity:0;transform:translateY(22px);animation:rise .9s .65s cubic-bezier(.2,.7,.2,1) forwards}
.btn:hover{background:var(--brown)}
.hero-demo{opacity:0;transform:translateY(22px);animation:rise 1s .5s cubic-bezier(.2,.7,.2,1) forwards}
@keyframes rise{to{opacity:1;transform:none}}

.demo{background:var(--beige);border:1px solid var(--sand);border-radius:22px;padding:30px;max-width:400px;margin-left:auto;box-shadow:0 18px 40px -22px rgba(74,47,30,.45)}
.demo-title{font-family:'Newsreader',serif;font-size:1.5rem;color:var(--deep);margin:0 0 14px}
.demo-label{font-size:.85rem;color:var(--brown);margin:16px 0 8px}
.chips{display:flex;flex-wrap:wrap;gap:8px}
.chip{font:inherit;font-size:.9rem;border:1px solid var(--tan);background:transparent;color:var(--brown);padding:7px 15px;border-radius:999px;cursor:pointer;transition:background .2s,color .2s}
.chip:hover{background:var(--sand)}
.chip.on{background:var(--brown);border-color:var(--brown);color:var(--paper)}
.chip.static{cursor:default}.chip.static:hover{background:transparent}.chip.static.on:hover{background:var(--brown)}
.demo-result{display:flex;align-items:center;gap:18px;margin-top:26px;padding-top:22px;border-top:1px solid var(--sand)}
.demo-size{font-family:'Newsreader',serif;font-size:3.4rem;color:var(--deep);min-width:78px;animation:pop .35s ease}
.demo-note{font-size:.9rem;color:var(--brown);line-height:1.4}
@keyframes pop{from{opacity:0;transform:scale(.8)}to{opacity:1;transform:none}}

.strip{background:var(--deep);color:var(--beige)}
.strip-in{max-width:820px;margin:0 auto;padding:clamp(48px,7vw,84px) 24px}
.strip p{font-family:'Newsreader',serif;font-size:clamp(1.4rem,2.8vw,2rem);line-height:1.4;margin:0}

.reveal{opacity:0;transform:translateY(24px);transition:opacity .8s ease,transform .8s cubic-bezier(.2,.7,.2,1)}
.reveal.in{opacity:1;transform:none}

.features{max-width:1180px;margin:0 auto;padding:clamp(64px,9vw,120px) clamp(20px,5vw,64px) 40px}
.sec-title{font-size:clamp(2rem,4vw,3rem);color:var(--deep);margin-bottom:clamp(36px,6vw,72px)}
.sec-title.light{color:var(--paper)}
.feat{display:grid;grid-template-columns:1fr 1fr;gap:clamp(28px,6vw,80px);align-items:center;padding:clamp(28px,4vw,52px) 0;border-top:1px solid var(--sand)}
.feat.flip .feat-text{order:2}
.feat h3{font-size:clamp(1.6rem,2.8vw,2.2rem);color:var(--deep);margin-bottom:14px}
.feat p{color:var(--brown);font-size:1.05rem;max-width:480px;margin:0}

.vis{background:var(--beige);border:1px solid var(--sand);border-radius:18px;padding:26px;max-width:420px;width:100%;margin:0 auto;font-size:.92rem}
.vis-foot{margin-top:18px;padding-top:14px;border-top:1px solid var(--sand);color:var(--brown)}
.vis-foot strong{color:var(--deep)}
.vis-q{margin:0 0 8px;color:var(--deep);font-weight:500}
.vis .chips{margin-bottom:16px}
.vis-row{display:grid;grid-template-columns:70px 1fr 56px;gap:12px;align-items:center;margin-bottom:14px;color:var(--brown)}
.vis-row em{font-style:normal;color:var(--deep);font-weight:500;text-align:right}
.bar{display:block;height:8px;background:var(--sand);border-radius:8px;overflow:hidden}
.bar b{display:block;height:100%;background:var(--brown);border-radius:8px;transition:width 1.2s .3s cubic-bezier(.2,.7,.2,1)}
.reveal:not(.in) .bar b{width:0!important}
.event{display:flex;gap:14px;align-items:center;padding:10px 0;border-bottom:1px solid var(--sand)}
.event small,.stock small,.seller small{display:block;color:var(--brown)}
.event-date{background:var(--brown);color:var(--paper);border-radius:10px;padding:8px 10px;font-size:.8rem;min-width:62px;text-align:center}
.avatars{display:flex;align-items:center;margin-bottom:14px}
.avatars span{width:34px;height:34px;border-radius:50%;background:var(--tan);color:var(--paper);display:grid;place-items:center;font-weight:600;border:2px solid var(--beige);margin-right:-8px}
.avatars small{margin-left:20px;color:var(--brown)}
.bubble{background:var(--paper);border:1px solid var(--sand);border-radius:14px 14px 14px 4px;padding:10px 14px;margin:8px 40px 8px 0}
.bubble.alt{background:var(--brown);color:var(--paper);border-radius:14px 14px 4px 14px;margin:8px 0 8px 40px}
.seller{padding:14px 16px;background:var(--paper);border:1px solid var(--sand);border-radius:12px;margin-bottom:10px}
.stock{display:flex;gap:14px;align-items:center;margin-bottom:12px}
.stock-img{width:54px;height:64px;border-radius:10px;background:linear-gradient(160deg,var(--sand),var(--tan));flex:none}
.toast{background:var(--deep);color:var(--beige);border-radius:10px;padding:10px 14px}

.extras{background:var(--brown);padding:clamp(64px,9vw,112px) clamp(20px,5vw,64px)}
.extras .sec-title{max-width:1180px;margin-left:auto;margin-right:auto}
.extras-grid{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(245,238,226,.22);border:1px solid rgba(245,238,226,.22)}
.extra{background:var(--brown);padding:30px 28px}
.extra h4{color:var(--paper);font-size:1.35rem;margin-bottom:8px}
.extra p{margin:0;color:var(--sand);font-size:.98rem}

.privacy{background:var(--beige)}
.privacy-in{max-width:760px;margin:0 auto;padding:clamp(60px,8vw,104px) 24px}
.privacy h2{font-size:clamp(2rem,4vw,2.8rem);color:var(--deep);margin-bottom:18px}
.privacy p{color:var(--brown);font-size:1.05rem}
.privacy-links{display:flex;gap:28px;flex-wrap:wrap;margin-top:26px}
.privacy-links a{color:var(--deep);border-bottom:1px solid var(--tan);padding-bottom:2px;font-weight:500}
.privacy-links a:hover{border-color:var(--deep)}

.foot{background:var(--ink);color:var(--sand);padding:52px clamp(20px,5vw,64px) 28px}
.foot-in{max-width:1180px;margin:0 auto;display:flex;justify-content:space-between;gap:32px;flex-wrap:wrap}
.foot .brand{color:var(--paper)}
.foot p{margin:8px 0 0;max-width:300px}
.foot nav{display:flex;gap:26px;flex-wrap:wrap;align-items:flex-start}
.foot nav a:hover{color:var(--paper)}
.foot .copy{max-width:1180px;margin:36px auto 0;padding-top:20px;border-top:1px solid rgba(217,199,169,.2);font-size:.85rem}

@media(max-width:900px){
  .hero{grid-template-columns:1fr}.demo{margin:0}
  .feat,.feat.flip{grid-template-columns:1fr}.feat.flip .feat-text{order:0}
  .extras-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:600px){
  .nav nav{gap:16px;font-size:.85rem}.nav nav a:nth-child(2){display:none}
  .extras-grid{grid-template-columns:1fr}
}
@media(prefers-reduced-motion:reduce){
  .sy *{animation:none!important;transition:none!important}
  .line,.lede,.btn,.hero-demo,.reveal{opacity:1!important;transform:none!important}
}
`;
