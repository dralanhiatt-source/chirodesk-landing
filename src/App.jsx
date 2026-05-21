import { useState } from 'react'

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background:'linear-gradient(135deg,#0d7a6e,#2dd4bf)'}}>
              <span className="text-white font-bold text-sm">CD</span>
            </div>
            <div>
              <span className="font-bold text-white text-lg leading-none">ChiroDesk</span>
              <p className="text-xs text-teal-400 leading-none">by Dr. Alan Hiatt, DC</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Features','Pricing','Compare','FAQ'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-gray-300 hover:text-teal-400 transition-colors text-sm font-medium">{l}</a>
            ))}
          </div>
          <div className="hidden md:block">
            <a href="#pricing" className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors">
              Start Free Trial
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden text-gray-400 hover:text-white p-2">
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-800 bg-gray-950 px-4 py-4 space-y-3">
          {['Features','Pricing','Compare','FAQ'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block text-gray-300 hover:text-teal-400 py-2 text-sm font-medium">{l}</a>
          ))}
          <a href="#pricing" className="block bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center mt-2">
            Start Free Trial
          </a>
        </div>
      )}
    </nav>
  )
}

// ─── PHONE MOCKUP ─────────────────────────────────────────────────────────────
function PhoneMockup() {
  const messages = [
    { from: 'mia', text: "Hi! This is Mia from Dr. Hiatt's office. 👋" },
    { from: 'patient', text: "Hi I'd like to make an appointment" },
    { from: 'mia', text: "Great! Are you a new or existing patient?" },
    { from: 'patient', text: "New patient" },
    { from: 'mia', text: "Perfect! I have Wed, Fri, or Sat available. Which works best?" },
    { from: 'patient', text: "Friday please" },
    { from: 'mia', text: "✅ Booked for Friday! I'll send your intake form now." },
  ]
  return (
    <div className="relative mx-auto w-72">
      <svg viewBox="0 0 288 580" className="w-full drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="284" height="576" rx="38" fill="#111827" stroke="#374151" strokeWidth="3"/>
        <rect x="10" y="10" width="268" height="560" rx="32" fill="#030712"/>
        <rect x="110" y="18" width="68" height="6" rx="3" fill="#374151"/>
        <rect x="20" y="30" width="248" height="530" rx="24" fill="#111827"/>
        {/* status bar */}
        <rect x="20" y="30" width="248" height="44" rx="24" fill="#0d7a6e"/>
        <text x="144" y="58" textAnchor="middle" fill="white" fontSize="12" fontWeight="600" fontFamily="system-ui">Mia — ChiroDesk AI</text>
        {/* chat area */}
        <rect x="20" y="74" width="248" height="486" rx="0" fill="#111827"/>
        <rect x="20" y="540" width="248" height="34" rx="0" fill="#111827"/>
        {/* rounded bottom */}
        <rect x="20" y="522" width="248" height="18" rx="0" fill="#111827"/>
        <path d="M20 522h248v36c0 12-8 22-20 22H40c-12 0-20-10-20-22V522z" fill="#111827"/>
        {/* input bar */}
        <rect x="30" y="533" width="200" height="24" rx="12" fill="#1f2937"/>
        <text x="75" y="550" fill="#6b7280" fontSize="10" fontFamily="system-ui">Type a message...</text>
        <circle cx="242" cy="545" r="10" fill="#0d7a6e"/>
        <path d="M238 545l4-4 4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      {/* overlay messages */}
      <div className="absolute top-0 left-0 right-0" style={{top:'74px',padding:'8px 28px',maxHeight:'460px',overflowY:'hidden'}}>
        <div className="space-y-2 mt-1">
          {messages.map((m,i) => (
            <div key={i} className={`flex ${m.from==='mia'?'justify-start':'justify-end'}`}>
              {m.from==='mia' && (
                <div className="w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center mr-1 flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">M</span>
                </div>
              )}
              <div className={`rounded-2xl px-3 py-1.5 text-xs max-w-[80%] leading-tight ${
                m.from==='mia'
                  ? 'bg-gray-700 text-gray-100 rounded-tl-sm'
                  : 'text-white rounded-tr-sm'
              }`} style={m.from==='patient'?{background:'#0d7a6e'}:{}}>
                {m.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{background:'radial-gradient(circle,#0d7a6e,transparent)'}}/>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl" style={{background:'radial-gradient(circle,#2dd4bf,transparent)'}}/>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-teal-900/40 border border-teal-700/50 rounded-full px-4 py-2 text-teal-400 text-sm font-medium mb-6">
              <span>🤖</span> AI-Powered Practice Management
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              The Only Practice<br/>Management Software<br/>
              <span style={{background:'linear-gradient(135deg,#0d7a6e,#2dd4bf)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>
                With a 24/7 AI Receptionist
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl lg:max-w-none leading-relaxed">
              Mia answers your calls, texts your patients, handles intake, and reminds them about appointments — automatically.
              Starting at <strong className="text-teal-400">$79/month</strong>. Built by a chiropractor for chiropractors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:opacity-90 hover:scale-105 shadow-lg" style={{background:'linear-gradient(135deg,#0d7a6e,#2dd4bf)'}}>
                Start Free 30-Day Trial
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12"/></svg>
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 border border-teal-600 text-teal-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-900/30 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Watch Demo
              </a>
            </div>
            <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-300">
              <span>🏥</span>
              <span>Used by practitioners across <strong className="text-white">Arkansas, Texas, Missouri</strong> and growing</span>
            </div>
          </div>
          <div className="flex-shrink-0 lg:w-80">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── PROBLEM ──────────────────────────────────────────────────────────────────
function Problem() {
  const cards = [
    {
      icon: '💸',
      title: 'Paying $400+/Month',
      body: 'ChiroTouch, WebPT, Jane App charge $319–650/month for software that needs a full-time staff to operate.',
    },
    {
      icon: '😤',
      title: "No-Shows Are Killing Revenue",
      body: 'Every missed appointment costs $40–60. Without automated reminders, no-shows average 15–20% of all appointments.',
    },
    {
      icon: '📋',
      title: 'Drowning in Paperwork',
      body: 'Intake forms, SOAP notes, superbills, insurance verification — done manually after every patient.',
    },
  ]
  return (
    <section id="features" className="py-20 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Sound Familiar?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">You didn't go to school for 4 years to fight with software.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c,i) => (
            <div key={i} className="rounded-2xl p-6 border border-red-900/40 hover:border-red-700/60 transition-colors" style={{background:'linear-gradient(135deg,rgba(127,29,29,0.2),rgba(17,7,7,0.8))'}}>
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{c.title}</h3>
              <p className="text-gray-300 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── SOLUTION ─────────────────────────────────────────────────────────────────
function Solution() {
  const features = [
    {
      icon: '🤖',
      title: 'Mia AI Receptionist',
      body: 'Answers calls 24/7, books appointments, sends intake forms, handles cancellations. Never miss a new patient again.',
      badge: 'Most Popular',
    },
    {
      icon: '📱',
      title: 'WhatsApp Automation',
      body: 'Appointment reminders, follow-ups, reactivation campaigns, birthday messages — all sent automatically via WhatsApp.',
    },
    {
      icon: '📝',
      title: 'Smart SOAP Notes',
      body: 'CPT code quick-pick, ICD-10 lookup, subluxation grid, voice dictation, PDF export. Notes in under 2 minutes.',
    },
    {
      icon: '💰',
      title: 'Built-In Billing',
      body: 'Superbill generator, insurance card capture, HSA/FSA receipts. Get reimbursed faster.',
    },
  ]
  return (
    <section className="py-20 px-4" style={{background:'linear-gradient(180deg,#030712,#0a1f1c,#030712)'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Meet ChiroDesk —{' '}
            <span style={{background:'linear-gradient(135deg,#0d7a6e,#2dd4bf)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>
              Built by a DC, Powered by AI
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Every feature designed by someone who has treated patients, filed claims, and answered phones.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f,i) => (
            <div key={i} className="relative rounded-2xl p-6 border border-teal-900/40 hover:border-teal-600/60 transition-all hover:scale-[1.02]" style={{background:'linear-gradient(135deg,rgba(13,122,110,0.15),rgba(3,7,18,0.9))'}}>
              {f.badge && (
                <span className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded-full">{f.badge}</span>
              )}
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-gray-300 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── SPECIALTIES ──────────────────────────────────────────────────────────────
function Specialties() {
  const [active, setActive] = useState(0)
  const tabs = [
    {
      label: 'Chiropractors',
      icon: '🦴',
      desc: 'Purpose-built for chiropractic care from day one.',
      features: ['Subluxation grid documentation', 'AT modifier for Medicare', '98940/98941/98942 CPT codes', 'Adjustment technique documentation', 'X-ray upload & DICOM notes'],
    },
    {
      label: 'Physical Therapists',
      icon: '🏋️',
      desc: 'Track functional progress with PT-specific tools.',
      features: ['Functional outcome measures', 'PT-specific CPT codes', 'Exercise protocol builder', 'Home exercise program PDF', 'Progress notes with goal tracking'],
    },
    {
      label: 'Massage Therapists',
      icon: '💆',
      desc: 'Simple session notes without billing complexity.',
      features: ['Session notes with pressure & technique', 'Body diagram markup', 'No billing complexity', 'Gift certificate tracking', 'Package & membership management'],
    },
    {
      label: 'Mental Health',
      icon: '🧠',
      desc: 'Compliant notes and crisis screening built in.',
      features: ['DAP/BIRP note templates', 'Crisis screening tools', 'CPT 90834/90837 codes', 'Treatment plan builder', 'PHQ-9 / GAD-7 intake forms'],
    },
    {
      label: 'Acupuncture',
      icon: '🪡',
      desc: 'Full TCM documentation in one place.',
      features: ['TCM intake questionnaire', 'Tongue & pulse diagnosis fields', 'Point documentation grid', 'Five element note templates', 'Herb formula tracking'],
    },
  ]
  return (
    <section id="specialties" className="py-20 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Built for Every Practice</h2>
          <p className="text-gray-400 text-lg">One platform, tailored to your specialty.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((t,i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                active===i
                  ? 'text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              style={active===i?{background:'linear-gradient(135deg,#0d7a6e,#2dd4bf)'}:{}}
            >
              <span>{t.icon}</span> {t.label}
            </button>
          ))}
        </div>
        <div className="rounded-2xl border border-teal-900/40 p-8" style={{background:'linear-gradient(135deg,rgba(13,122,110,0.1),rgba(3,7,18,0.95))'}}>
          <div className="flex items-start gap-4 mb-6">
            <div className="text-5xl">{tabs[active].icon}</div>
            <div>
              <h3 className="text-2xl font-bold text-white">{tabs[active].label}</h3>
              <p className="text-gray-400 mt-1">{tabs[active].desc}</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {tabs[active].features.map((f,i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-800/50 rounded-lg px-4 py-3">
                <svg className="w-4 h-4 flex-shrink-0" style={{color:'#2dd4bf'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                <span className="text-gray-200 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── PRICING ──────────────────────────────────────────────────────────────────
function Pricing() {
  const [annual, setAnnual] = useState(false)
  const plans = [
    {
      name: 'Starter',
      monthly: 79,
      annual: 66,
      tagline: 'Perfect for solo practitioners',
      features: ['Scheduler (1 office)','SOAP Notes','Patient intake','Mileage tracker','Basic P&L','Email support'],
      cta: 'Start Free Trial',
      highlight: false,
    },
    {
      name: 'Pro',
      monthly: 129,
      annual: 107,
      tagline: 'Scaling practices',
      badge: 'Most Popular',
      features: ['Everything in Starter','Mia AI Receptionist (calls + texts)','2 office locations','Insurance billing / superbills','WhatsApp automation','Reactivation campaigns','Priority support'],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      name: 'Elite',
      monthly: 199,
      annual: 166,
      tagline: 'Multi-provider practices',
      features: ['Everything in Pro','Unlimited providers','Multi-vertical (all specialties)','Admin dashboard','Custom Mia call scripts','API access','White-glove onboarding'],
      cta: 'Start Free Trial',
      highlight: false,
    },
  ]
  return (
    <section id="pricing" className="py-20 px-4" style={{background:'linear-gradient(180deg,#030712,#050f0e,#030712)'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Simple, Honest Pricing</h2>
          <p className="text-gray-400 text-lg mb-6">No contracts. No hidden fees. Cancel anytime.</p>
          <div className="inline-flex items-center gap-3 bg-gray-800 rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${!annual?'bg-white text-gray-900':'text-gray-400 hover:text-white'}`}
            >Monthly</button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${annual?'bg-white text-gray-900':'text-gray-400 hover:text-white'}`}
            >Annual <span className="text-green-500 text-xs font-bold">2 months free</span></button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((p,i) => (
            <div key={i} className={`relative rounded-2xl p-8 transition-all ${
              p.highlight
                ? 'border-2 scale-105 shadow-2xl'
                : 'border border-gray-700 hover:border-teal-700/50'
            }`} style={p.highlight?{
              background:'linear-gradient(135deg,rgba(13,122,110,0.2),rgba(3,7,18,0.95))',
              borderColor:'#0d7a6e',
              boxShadow:'0 0 40px rgba(13,122,110,0.3)',
            }:{background:'#0f172a'}}>
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg" style={{background:'linear-gradient(135deg,#0d7a6e,#2dd4bf)'}}>
                    {p.badge}
                  </span>
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-1">{p.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{p.tagline}</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-extrabold text-white">${annual?p.annual:p.monthly}</span>
                <span className="text-gray-400">/mo</span>
                {annual && <span className="text-green-400 text-xs ml-2">billed annually</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f,j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{color:'#2dd4bf'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`block text-center py-3 rounded-lg font-semibold text-sm transition-all ${
                p.highlight
                  ? 'text-white hover:opacity-90'
                  : 'border border-teal-600 text-teal-400 hover:bg-teal-900/30'
              }`} style={p.highlight?{background:'linear-gradient(135deg,#0d7a6e,#2dd4bf)'}:{}}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-sm">30-day free trial. No credit card required. Cancel anytime.</p>
      </div>
    </section>
  )
}

// ─── COMPARISON TABLE ─────────────────────────────────────────────────────────
function CompareTable() {
  const rows = [
    ['Starting price', '$79/mo', '$159/mo', '$99/mo', '$74/mo', '$129/mo'],
    ['AI Receptionist', '✅', '❌', '❌', '❌', '❌'],
    ['24/7 Phone Answering', '✅', '❌', '❌', '❌', '❌'],
    ['WhatsApp Automation', '✅', '❌', '❌', '❌', '❌'],
    ['Multilingual (EN/ES)', '✅', '❌', '❌', '✅', '❌'],
    ['Built by Practitioner', '✅ DC', '❌', '❌', '❌', '❌'],
    ['SOAP Notes', '✅', '✅', '✅', '✅', '❌'],
    ['P&L Tracking', '✅', '❌', '❌', '✅', '✅'],
    ['Free Trial', '✅ 30 days', '✅ 30 days', '✅ 30 days', '✅', '✅'],
  ]
  const headers = ['Feature', 'ChiroDesk', 'ChiroTouch', 'WebPT', 'Jane App', 'Mindbody']
  return (
    <section id="compare" className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How We Compare</h2>
          <p className="text-gray-400 text-lg">See why practices are switching to ChiroDesk.</p>
        </div>
        <div className="rounded-2xl border border-gray-700 overflow-hidden overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr style={{background:'linear-gradient(135deg,#0d7a6e,#0a6459)'}}>
                {headers.map((h,i) => (
                  <th key={i} className={`py-4 px-4 text-left text-sm font-bold ${i===0?'text-white':'text-center'} ${i===1?'text-teal-200 text-base':''}`}>
                    {i===1?<span className="inline-flex items-center gap-1">⭐ {h}</span>:h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row,ri) => (
                <tr key={ri} className={`border-b border-gray-800 ${ri%2===0?'bg-gray-900':'bg-gray-950'} hover:bg-gray-800/50 transition-colors`}>
                  {row.map((cell,ci) => (
                    <td key={ci} className={`py-4 px-4 text-sm ${ci===0?'font-medium text-gray-200':'text-center'} ${
                      ci===1
                        ? cell==='✅'||cell.startsWith('✅')
                          ? 'text-teal-400 font-bold'
                          : 'text-gray-300 font-semibold'
                        : cell==='❌'
                          ? 'text-gray-600'
                          : cell==='✅'||cell.startsWith('✅')
                            ? 'text-green-400'
                            : 'text-gray-400'
                    }`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
function Testimonials() {
  const items = [
    {
      quote: "ChiroDesk replaced my front desk software AND my answering service. Mia handles new patient calls while I'm adjusting.",
      author: 'Dr. S.M.', location: 'Rogers, AR',
    },
    {
      quote: "I was paying $380/month for ChiroTouch. ChiroDesk does more for $129. The WhatsApp automation alone is worth it.",
      author: 'Dr. T.K.', location: 'Springfield, MO',
    },
    {
      quote: "I set it up in one afternoon. My patients love texting Mia for appointments. Highly recommend.",
      author: 'Dr. L.P.', location: 'Tulsa, OK',
    },
  ]
  return (
    <section className="py-20 px-4" style={{background:'linear-gradient(180deg,#030712,#060e0d,#030712)'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Practitioners Are Saying</h2>
          <p className="text-gray-500 text-sm italic">Testimonials are illustrative examples from early adopters.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t,i) => (
            <div key={i} className="rounded-2xl p-6 border border-gray-700 hover:border-teal-700/50 transition-all hover:scale-[1.02]" style={{background:'#0f172a'}}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_,s) => <span key={s} className="text-yellow-400 text-sm">★</span>)}
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 italic">"{t.quote}"</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{background:'linear-gradient(135deg,#0d7a6e,#2dd4bf)'}}>
                  {t.author.split(' ')[1][0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.author}</p>
                  <p className="text-gray-500 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState(null)
  const items = [
    {
      q: 'Does Mia replace my front desk?',
      a: 'Mia handles all incoming calls for new patient bookings, appointment reminders, cancellations, and general questions. Most practices see a 70% reduction in phone interruptions.',
    },
    {
      q: 'Does Mia use my existing phone number?',
      a: 'Mia uses a dedicated business number. We recommend keeping your existing number active for emergencies. Setup takes less than 10 minutes.',
    },
    {
      q: 'What specialties does ChiroDesk support?',
      a: 'Chiropractic, physical therapy, massage therapy, mental health, and acupuncture. Each specialty gets custom note templates, CPT codes, and intake forms.',
    },
    {
      q: 'Is patient data HIPAA compliant?',
      a: 'ChiroDesk stores all data locally in your browser. No patient data is sent to our servers. For cloud backup, you can export and store your own data. We are working on HIPAA-compliant cloud sync.',
    },
    {
      q: 'What if a patient misses their appointment?',
      a: 'ChiroDesk flags no-shows automatically. After 2 no-shows, the patient is flagged and you can choose to discharge them. Mia sends a courtesy text after the first no-show.',
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel anytime with no penalty. Your data exports as CSV or PDF so you never lose access to your records.',
    },
    {
      q: 'Does Mia speak Spanish?',
      a: 'Yes. ChiroDesk supports English and Spanish. Mia can conduct intake and booking conversations in Spanish. More languages coming.',
    },
    {
      q: 'How long does setup take?',
      a: 'Most practices are fully configured in under 2 hours. We provide a guided setup checklist and our team can onboard you via video call.',
    },
  ]
  return (
    <section id="faq" className="py-20 px-4 bg-gray-950">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">Everything you need to know about ChiroDesk.</p>
        </div>
        <div className="space-y-3">
          {items.map((item,i) => (
            <div key={i} className="rounded-xl border border-gray-700 overflow-hidden transition-all hover:border-teal-700/50">
              <button
                onClick={() => setOpen(open===i?null:i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-800/50 transition-colors"
              >
                <span className="font-semibold text-white pr-4">{item.q}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${open===i?'rotate-180':''}`}
                  style={{color:'#2dd4bf'}}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {open===i && (
                <div className="px-6 pb-5 text-gray-300 leading-relaxed border-t border-gray-800 pt-4" style={{background:'#0a1117'}}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FINAL CTA ────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="py-20 px-4" style={{background:'linear-gradient(180deg,#030712,#071a18,#030712)'}}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="rounded-3xl border border-teal-800/50 p-12 shadow-2xl" style={{background:'linear-gradient(135deg,rgba(13,122,110,0.2),rgba(3,7,18,0.95))'}}>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Stop Paying $400/Month For Software<br/>
            <span style={{background:'linear-gradient(135deg,#0d7a6e,#2dd4bf)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>
              That Doesn't Work For You
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">$79/month. 30-day free trial. No credit card required.</p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all hover:opacity-90 hover:scale-105 shadow-2xl"
            style={{background:'linear-gradient(135deg,#0d7a6e,#2dd4bf)',boxShadow:'0 0 40px rgba(13,122,110,0.5)'}}
          >
            Start Your Free Trial Today
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12"/>
            </svg>
          </a>
          <p className="mt-6 text-gray-400 text-sm">
            Questions? Email us at{' '}
            <a href="mailto:support@chirodesk.io" className="text-teal-400 hover:underline">support@chirodesk.io</a>
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  const cols = [
    {
      title: 'Product',
      links: ['Features','Pricing','Compare','Demo'],
    },
    {
      title: 'Company',
      links: ['About','Blog','Contact'],
    },
    {
      title: 'Legal',
      links: ['Privacy','Terms','HIPAA'],
    },
  ]
  return (
    <footer className="border-t border-gray-800 bg-gray-950 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background:'linear-gradient(135deg,#0d7a6e,#2dd4bf)'}}>
                <span className="text-white font-bold text-sm">CD</span>
              </div>
              <span className="font-bold text-white text-lg">ChiroDesk</span>
            </div>
            <p className="text-teal-400 text-sm mb-3">Built by a DC, for DCs</p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Practice management software designed by a chiropractor who actually uses it.
            </p>
            <a href="mailto:support@chirodesk.io" className="inline-flex items-center gap-1 text-teal-400 text-sm mt-3 hover:underline">
              ✉️ support@chirodesk.io
            </a>
          </div>
          {cols.map((col,i) => (
            <div key={i}>
              <h4 className="text-white font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((l,j) => (
                  <li key={j}>
                    <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-sm">© 2026 ChiroDesk by Hiatt. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Not affiliated with any insurance company or health system.</p>
        </div>
      </div>
    </footer>
  )
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Specialties />
        <Pricing />
        <CompareTable />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
