export default function Page() {
  const proposalHtml = String.raw`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>A New Website for Sure-Lock Self Storage</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --navy: #0d1f2d;
    --navy-mid: #1a3244;
    --teal: #0e9f8e;
    --teal-light: #12b5a2;
    --cream: #f7f5f0;
    --warm-white: #fefcf9;
    --text: #1c2b36;
    --muted: #6b7f8c;
    --border: #dde4e8;
    --danger: #c0392b;
    --good: #1a8a5c;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Inter', sans-serif;
    background: var(--warm-white);
    color: var(--text);
    line-height: 1.6;
  }

  /* ── NAV ── */
  nav {
    position: sticky; top: 0; z-index: 100;
    background: var(--navy);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 40px; height: 60px;
  }
  .nav-logo {
    font-family: 'DM Serif Display', serif;
    color: white; font-size: 18px; letter-spacing: 0.5px;
  }
  .nav-logo span { color: var(--teal); }
  .nav-tabs {
    display: flex; gap: 4px;
  }
  .nav-tab {
    background: none; border: none; cursor: pointer;
    color: rgba(255,255,255,0.6);
    font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500;
    padding: 8px 16px; border-radius: 6px;
    transition: all 0.2s;
  }
  .nav-tab:hover { color: white; background: rgba(255,255,255,0.08); }
  .nav-tab.active { color: white; background: var(--teal); }
  .nav-cta {
    background: var(--teal); color: white; border: none; cursor: pointer;
    font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600;
    padding: 9px 20px; border-radius: 6px;
    transition: background 0.2s;
  }
  .nav-cta:hover { background: var(--teal-light); }

  /* ── SECTIONS ── */
  .section { display: none; }
  .section.active { display: block; }

  /* ── HERO ── */
  .hero {
    background: var(--navy);
    padding: 80px 40px 70px;
    text-align: center;
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at 60% 0%, rgba(14,159,142,0.18) 0%, transparent 65%);
    pointer-events: none;
  }
  .hero-eyebrow {
    display: inline-block;
    background: rgba(14,159,142,0.15);
    border: 1px solid rgba(14,159,142,0.4);
    color: var(--teal); font-size: 12px; font-weight: 600;
    letter-spacing: 1.5px; text-transform: uppercase;
    padding: 6px 16px; border-radius: 20px; margin-bottom: 28px;
  }
  .hero h1 {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(36px, 5vw, 58px);
    color: white; line-height: 1.15; margin-bottom: 20px;
    max-width: 760px; margin-left: auto; margin-right: auto;
  }
  .hero h1 em { color: var(--teal); font-style: normal; }
  .hero p {
    color: rgba(255,255,255,0.68); font-size: 17px;
    max-width: 540px; margin: 0 auto 36px;
  }
  .hero-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  .btn-primary {
    background: var(--teal); color: white; border: none; cursor: pointer;
    font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 600;
    padding: 14px 28px; border-radius: 8px;
    transition: background 0.2s; text-decoration: none; display: inline-block;
  }
  .btn-primary:hover { background: var(--teal-light); }
  .btn-ghost {
    background: rgba(255,255,255,0.08); color: white;
    border: 1px solid rgba(255,255,255,0.2); cursor: pointer;
    font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 500;
    padding: 14px 28px; border-radius: 8px;
    transition: background 0.2s; text-decoration: none; display: inline-block;
  }
  .btn-ghost:hover { background: rgba(255,255,255,0.14); }

  /* stats bar */
  .stats-bar {
    display: flex; justify-content: center; gap: 0;
    background: var(--navy-mid);
    border-top: 1px solid rgba(255,255,255,0.08);
  }
  .stat-item {
    flex: 1; max-width: 200px;
    padding: 22px 24px; text-align: center;
    border-right: 1px solid rgba(255,255,255,0.08);
  }
  .stat-item:last-child { border-right: none; }
  .stat-num {
    font-family: 'DM Serif Display', serif;
    font-size: 32px; color: var(--teal); display: block;
  }
  .stat-label { font-size: 12px; color: rgba(255,255,255,0.5); font-weight: 500; letter-spacing: 0.5px; }

  /* ── CONTAINER ── */
  .container { max-width: 1100px; margin: 0 auto; padding: 0 40px; }
  .section-pad { padding: 72px 0; }

  .section-eyebrow {
    font-size: 11px; font-weight: 700; letter-spacing: 2px;
    text-transform: uppercase; color: var(--teal);
    margin-bottom: 12px; display: block;
  }
  .section-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(28px, 3.5vw, 42px);
    color: var(--navy); line-height: 1.2; margin-bottom: 16px;
  }
  .section-sub {
    font-size: 16px; color: var(--muted); max-width: 560px;
  }
  .section-header { margin-bottom: 52px; }

  /* ── BEFORE/AFTER ── */
  .compare-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 24px;
  }
  .compare-card {
    border-radius: 12px; overflow: hidden;
    border: 1px solid var(--border);
  }
  .compare-label {
    padding: 12px 20px;
    font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
    display: flex; align-items: center; gap: 8px;
  }
  .compare-label.before { background: #fef2f2; color: var(--danger); }
  .compare-label.after { background: #f0fdf7; color: var(--good); }
  .compare-label svg { width: 14px; height: 14px; flex-shrink: 0; }
  .compare-body { padding: 24px; background: white; }

  .old-site-mock {
    border: 1px solid #e0e0e0; border-radius: 6px; overflow: hidden;
    background: #f9f9f9; margin-bottom: 20px;
  }
  .old-site-bar {
    background: #4a6741; padding: 10px 16px;
    display: flex; align-items: center; gap: 10px;
  }
  .old-site-bar-title { color: white; font-size: 13px; font-weight: bold; }
  .old-site-nav {
    background: #3a5233; padding: 6px 16px;
    display: flex; gap: 12px;
  }
  .old-site-nav span {
    color: rgba(255,255,255,0.7); font-size: 11px;
    border-bottom: 1px solid transparent; cursor: default;
  }
  .old-site-body { padding: 16px; }
  .old-site-slider {
    background: #c8d8c4; height: 100px; border-radius: 3px; margin-bottom: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; color: #666;
  }
  .old-site-text-block { }
  .old-site-h2 { font-size: 15px; font-weight: bold; color: #333; margin-bottom: 6px; }
  .old-site-p { font-size: 11px; color: #666; line-height: 1.5; }
  .old-site-bullets { list-style: disc; padding-left: 16px; margin-top: 8px; }
  .old-site-bullets li { font-size: 10px; color: #666; margin-bottom: 3px; }

  .new-site-mock {
    border: 1px solid #d0e8e4; border-radius: 8px; overflow: hidden;
    background: #0d1f2d; margin-bottom: 20px;
  }
  .new-site-nav-bar {
    background: #0d1f2d; padding: 10px 16px;
    display: flex; align-items: center; justify-content: space-between;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }
  .new-site-logo { color: white; font-family: 'DM Serif Display', serif; font-size: 14px; }
  .new-site-logo span { color: #0e9f8e; }
  .new-site-cta-sm {
    background: #0e9f8e; color: white; font-size: 10px; font-weight: 600;
    padding: 5px 12px; border-radius: 5px;
  }
  .new-site-hero-area {
    background: linear-gradient(135deg, #0d1f2d 0%, #1a3244 100%);
    padding: 20px 16px 16px; position: relative; overflow: hidden;
  }
  .new-site-hero-area::before {
    content: '';
    position: absolute; top: -20px; right: -20px;
    width: 120px; height: 120px;
    background: radial-gradient(circle, rgba(14,159,142,0.2), transparent);
    border-radius: 50%;
  }
  .new-site-eyebrow-sm {
    background: rgba(14,159,142,0.15); border: 1px solid rgba(14,159,142,0.4);
    color: #0e9f8e; font-size: 9px; font-weight: 700; letter-spacing: 1px;
    padding: 3px 8px; border-radius: 10px; display: inline-block; margin-bottom: 8px;
  }
  .new-site-h1 {
    font-family: 'DM Serif Display', serif;
    color: white; font-size: 18px; line-height: 1.2; margin-bottom: 8px;
  }
  .new-site-h1 em { color: #0e9f8e; font-style: normal; }
  .new-site-sub { color: rgba(255,255,255,0.6); font-size: 10px; margin-bottom: 10px; }
  .new-site-btn-row { display: flex; gap: 8px; }
  .new-site-btn {
    background: #0e9f8e; color: white; font-size: 9px; font-weight: 600;
    padding: 6px 12px; border-radius: 5px; display: inline-block;
  }
  .new-site-btn-outline {
    background: rgba(255,255,255,0.1); color: white; font-size: 9px; font-weight: 500;
    padding: 6px 12px; border-radius: 5px; display: inline-block;
    border: 1px solid rgba(255,255,255,0.2);
  }

  .issues-list { list-style: none; }
  .issues-list li {
    display: flex; gap: 10px; align-items: flex-start;
    padding: 10px 0; border-bottom: 1px solid #f5f5f5; font-size: 14px;
  }
  .issues-list li:last-child { border-bottom: none; }
  .issue-icon { flex-shrink: 0; margin-top: 2px; }

  .wins-list { list-style: none; }
  .wins-list li {
    display: flex; gap: 10px; align-items: flex-start;
    padding: 10px 0; border-bottom: 1px solid #f0fdf7; font-size: 14px;
  }
  .wins-list li:last-child { border-bottom: none; }

  /* ── FEATURES ── */
  .features-bg { background: var(--cream); }
  .features-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  }
  .feature-card {
    background: white; border-radius: 12px;
    border: 1px solid var(--border); padding: 28px 24px;
    transition: box-shadow 0.2s, transform 0.2s;
  }
  .feature-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); transform: translateY(-2px); }
  .feature-icon {
    width: 44px; height: 44px; border-radius: 10px;
    background: rgba(14,159,142,0.1); display: flex; align-items: center; justify-content: center;
    margin-bottom: 16px;
  }
  .feature-icon svg { width: 22px; height: 22px; color: var(--teal); }
  .feature-title { font-size: 16px; font-weight: 600; margin-bottom: 8px; color: var(--navy); }
  .feature-desc { font-size: 14px; color: var(--muted); line-height: 1.6; }

  /* ── PROCESS ── */
  .process-steps {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
    position: relative;
  }
  .process-steps::before {
    content: '';
    position: absolute; top: 28px; left: 10%; right: 10%;
    height: 2px; background: var(--border); z-index: 0;
  }
  .process-step { text-align: center; padding: 0 16px; position: relative; z-index: 1; }
  .step-num {
    width: 56px; height: 56px; border-radius: 50%;
    background: white; border: 2px solid var(--teal);
    display: flex; align-items: center; justify-content: center;
    font-family: 'DM Serif Display', serif; font-size: 22px; color: var(--teal);
    margin: 0 auto 20px; position: relative;
  }
  .step-title { font-weight: 600; font-size: 15px; color: var(--navy); margin-bottom: 8px; }
  .step-desc { font-size: 13px; color: var(--muted); line-height: 1.5; }

  /* ── PRICING ── */
  .pricing-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: start;
  }
  .pricing-card {
    border-radius: 14px; border: 1px solid var(--border);
    background: white; overflow: hidden;
  }
  .pricing-card.featured {
    border-color: var(--teal);
    box-shadow: 0 0 0 3px rgba(14,159,142,0.15);
  }
  .pricing-head { padding: 28px 28px 20px; }
  .pricing-badge {
    background: var(--teal); color: white; font-size: 11px; font-weight: 700;
    letter-spacing: 1px; text-transform: uppercase; padding: 4px 10px; border-radius: 4px;
    display: inline-block; margin-bottom: 16px;
  }
  .pricing-name { font-size: 18px; font-weight: 700; color: var(--navy); margin-bottom: 6px; }
  .pricing-price {
    font-family: 'DM Serif Display', serif; font-size: 42px; color: var(--navy);
    line-height: 1; margin-bottom: 4px;
  }
  .pricing-price sup { font-family: 'Inter', sans-serif; font-size: 22px; vertical-align: super; }
  .pricing-price sub { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 400; color: var(--muted); }
  .pricing-desc { font-size: 13px; color: var(--muted); }
  .pricing-divider { height: 1px; background: var(--border); }
  .pricing-body { padding: 24px 28px 28px; }
  .pricing-features { list-style: none; display: flex; flex-direction: column; gap: 10px; }
  .pricing-features li {
    display: flex; gap: 10px; align-items: flex-start; font-size: 14px;
  }
  .pricing-features .check { color: var(--good); flex-shrink: 0; margin-top: 2px; }
  .pricing-btn {
    width: 100%; margin-top: 24px; padding: 13px;
    border-radius: 8px; font-size: 15px; font-weight: 600;
    cursor: pointer; border: none; font-family: 'Inter', sans-serif;
    transition: opacity 0.2s;
  }
  .pricing-btn:hover { opacity: 0.88; }
  .pricing-btn.primary { background: var(--teal); color: white; }
  .pricing-btn.outline { background: white; color: var(--navy); border: 1.5px solid var(--border); }

  /* ── CTA BOTTOM ── */
  .cta-bottom {
    background: var(--navy);
    padding: 80px 40px;
    text-align: center;
  }
  .cta-bottom h2 {
    font-family: 'DM Serif Display', serif;
    color: white; font-size: clamp(28px, 4vw, 44px); margin-bottom: 16px;
  }
  .cta-bottom h2 em { color: var(--teal); font-style: normal; }
  .cta-bottom p { color: rgba(255,255,255,0.6); font-size: 16px; margin-bottom: 36px; }
  .cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

  /* ── FOOTER ── */
  footer {
    background: #07131d; padding: 24px 40px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .footer-note { color: rgba(255,255,255,0.3); font-size: 12px; }
  .footer-logo { font-family: 'DM Serif Display', serif; color: rgba(255,255,255,0.5); font-size: 14px; }
  .footer-logo span { color: var(--teal); }

  /* ── TESTIMONIAL STRIP ── */
  .testimonials-strip { background: var(--cream); padding: 52px 0; }
  .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .tcard {
    background: white; border-radius: 10px; padding: 24px;
    border: 1px solid var(--border);
  }
  .tcard-stars { color: #f59e0b; font-size: 13px; margin-bottom: 12px; letter-spacing: 2px; }
  .tcard-text { font-size: 14px; color: var(--text); line-height: 1.65; font-style: italic; }
  .tcard-author { margin-top: 14px; font-size: 13px; font-weight: 600; color: var(--navy); }

  @media (max-width: 768px) {
    nav { padding: 0 20px; }
    .nav-tabs { display: none; }
    .container { padding: 0 20px; }
    .section-pad { padding: 52px 0; }
    .compare-grid, .features-grid, .pricing-grid { grid-template-columns: 1fr; }
    .process-steps { grid-template-columns: repeat(2, 1fr); gap: 32px; }
    .process-steps::before { display: none; }
    .testimonials-grid { grid-template-columns: 1fr; }
    .hero { padding: 52px 20px 48px; }
    .stats-bar { flex-wrap: wrap; }
    footer { flex-direction: column; gap: 8px; text-align: center; }
  }
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <div class="nav-logo">Sure<span>Lock</span> — New Site Demo</div>
  <div class="nav-tabs">
    <button class="nav-tab active" onclick="showSection('overview')">Overview</button>
    <button class="nav-tab" onclick="showSection('compare')">Before & After</button>
    <button class="nav-tab" onclick="showSection('features')">What's Included</button>
    <button class="nav-tab" onclick="showSection('process')">How It Works</button>
    <button class="nav-tab" onclick="showSection('demo')" style="color: var(--teal);">✦ Live Demo</button>
    <button class="nav-tab" onclick="showSection('pricing')">Pricing</button>
  </div>
  <button class="nav-cta" onclick="showSection('pricing')">See Pricing →</button>
</nav>

<!-- ═══════════════════ OVERVIEW SECTION ═══════════════════ -->
<div id="overview" class="section active">
  <div class="hero">
    <div class="hero-eyebrow">📦 Prepared Exclusively for Sure-Lock Self Storage</div>
    <h1>Your business deserves a website as <em>secure</em> as your units</h1>
    <p>We've designed a completely new website for Sure-Lock. Modern, fast, and built to turn Kapiti Coast searches into real bookings.</p>
    <div class="hero-actions">
      <button class="btn-primary" onclick="showSection('compare')">See the Difference →</button>
      <button class="btn-ghost" onclick="showSection('features')">What's Included</button>
    </div>
  </div>

  <div class="stats-bar">
    <div class="stat-item">
      <span class="stat-num">73%</span>
      <span class="stat-label">of storage searches happen on mobile</span>
    </div>
    <div class="stat-item">
      <span class="stat-num">3 sec</span>
      <span class="stat-label">before visitors leave a slow site</span>
    </div>
    <div class="stat-item">
      <span class="stat-num">2×</span>
      <span class="stat-label">more enquiries from modern sites</span>
    </div>
    <div class="stat-item">
      <span class="stat-num">1 week</span>
      <span class="stat-label">to go live from approval</span>
    </div>
  </div>

  <!-- testimonials from real reviews -->
  <div class="testimonials-strip">
    <div class="container">
      <div style="text-align:center; margin-bottom: 36px;">
        <span class="section-eyebrow">What your customers already say</span>
        <h2 class="section-title">Great reputation.<br>Outdated first impression.</h2>
      </div>
      <div class="testimonials-grid">
        <div class="tcard">
          <div class="tcard-stars">★★★★★</div>
          <div class="tcard-text">"The facility is modern, clean, rodent-free, and Kirsten and Kerry are professional, friendly and people of their word."</div>
          <div class="tcard-author">— Mary, long-term customer</div>
        </div>
        <div class="tcard">
          <div class="tcard-stars">★★★★★</div>
          <div class="tcard-text">"It has been a real pleasure doing business with you and I will be recommending your company to anyone who needs storage."</div>
          <div class="tcard-author">— Kate</div>
        </div>
        <div class="tcard">
          <div class="tcard-stars">★★★★★</div>
          <div class="tcard-text">"Hassle free experience and I was impressed with the service and quality of the storage facility."</div>
          <div class="tcard-author">— Joe</div>
        </div>
      </div>
      <p style="text-align:center; margin-top: 28px; color: var(--muted); font-size: 15px;">Your service earns 5 stars. Your website should too.</p>
    </div>
  </div>

  <div class="cta-bottom">
    <h2>Ready to see the <em>new site</em>?</h2>
    <p>Step through the tabs above to see the before & after, everything that's included, and pricing.</p>
    <div class="cta-actions">
      <button class="btn-primary" onclick="showSection('compare')">Before & After →</button>
      <button class="btn-ghost" onclick="showSection('pricing')">Jump to Pricing</button>
    </div>
  </div>
</div>

<!-- ═══════════════════ COMPARE SECTION ═══════════════════ -->
<div id="compare" class="section">
  <div style="padding: 72px 0 40px; background: var(--warm-white);">
    <div class="container">
      <div class="section-header">
        <span class="section-eyebrow">Before & After</span>
        <h2 class="section-title">Side-by-side: old vs new</h2>
        <p class="section-sub">Your current site does the job — but it's leaving bookings on the table every single day.</p>
      </div>
      <div class="compare-grid">

        <!-- BEFORE -->
        <div class="compare-card">
          <div class="compare-label before">
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd"/></svg>
            Current Website — surelockstorage.co.nz
          </div>
          <div class="compare-body">
            <div class="old-site-mock">
              <div class="old-site-bar">
                <div class="old-site-bar-title">Sure-Lock Self Storage — Kapiti, Paraparaumu &amp; Wellington</div>
              </div>
              <div class="old-site-nav">
                <span>Home</span>
                <span>Storage Services</span>
                <span>Space Calculator</span>
                <span>News</span>
                <span>Links</span>
                <span>Contact</span>
              </div>
              <div class="old-site-body">
                <div class="old-site-slider">[ Image Slideshow — 3 photos ]</div>
                <div class="old-site-text-block">
                  <div class="old-site-h2">WHY CHOOSE SURE-LOCK?</div>
                  <div class="old-site-p">Welcome to Sure-Lock Self Storage — providing self storage for household, Business, Filing and more in Paraparaumu...</div>
                  <ul class="old-site-bullets">
                    <li>Alarm monitored electric security fencing</li>
                    <li>Storage Unit rates from $15.00 per week</li>
                    <li>Individual PIN coded access</li>
                    <li>Access your Storage Unit 24/7!</li>
                    <li>Stringent pest control</li>
                    <li>Trolleys available</li>
                  </ul>
                </div>
              </div>
            </div>
            <ul class="issues-list">
              <li>
                <span class="issue-icon">🔴</span>
                <div><strong>Not mobile-friendly</strong> — squashed layout on phones, hard to read or navigate</div>
              </li>
              <li>
                <span class="issue-icon">🔴</span>
                <div><strong>Dated design</strong> — 2012-era look signals an inactive business to visitors</div>
              </li>
              <li>
                <span class="issue-icon">🔴</span>
                <div><strong>No clear call to action</strong> — visitors can't easily enquire or see unit sizes</div>
              </li>
              <li>
                <span class="issue-icon">🔴</span>
                <div><strong>Slow load speed</strong> — image sliders and old WordPress plugins hurt performance</div>
              </li>
              <li>
                <span class="issue-icon">🔴</span>
                <div><strong>Google+ link</strong> — links to a social network that shut down in 2019</div>
              </li>
              <li>
                <span class="issue-icon">🟡</span>
                <div><strong>Good content, poor structure</strong> — strong reviews and features buried in plain text</div>
              </li>
            </ul>
          </div>
        </div>

        <!-- AFTER -->
        <div class="compare-card">
          <div class="compare-label after">
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"/></svg>
            New Website — designed for 2025
          </div>
          <div class="compare-body">
            <div class="new-site-mock">
              <div class="new-site-nav-bar">
                <div class="new-site-logo">Sure<span>Lock</span> Self Storage</div>
                <div class="new-site-cta-sm">Get a Quote</div>
              </div>
              <div class="new-site-hero-area">
                <div class="new-site-eyebrow-sm">KAPITI COAST'S TRUSTED STORAGE</div>
                <div class="new-site-h1">Safe, secure storage in <em>Paraparaumu</em> — from $15/wk</div>
                <div class="new-site-sub">13 unit sizes · 24/7 access · PIN-coded security · 27 Birmingham St</div>
                <div class="new-site-btn-row">
                  <div class="new-site-btn">Get a Quote</div>
                  <div class="new-site-btn-outline">See Unit Sizes</div>
                </div>
              </div>
            </div>
            <ul class="wins-list">
              <li>
                <span>✅</span>
                <div><strong>Fully mobile responsive</strong> — looks sharp on every phone, tablet, and screen</div>
              </li>
              <li>
                <span>✅</span>
                <div><strong>Modern, professional design</strong> — builds trust the moment someone lands on the page</div>
              </li>
              <li>
                <span>✅</span>
                <div><strong>Clear calls to action</strong> — "Get a Quote" and "See Unit Sizes" front and centre</div>
              </li>
              <li>
                <span>✅</span>
                <div><strong>Fast & lightweight</strong> — no bloated plugins, loads in under 2 seconds</div>
              </li>
              <li>
                <span>✅</span>
                <div><strong>Local SEO ready</strong> — structured for Paraparaumu & Kapiti Coast searches</div>
              </li>
              <li>
                <span>✅</span>
                <div><strong>Reviews & features showcased</strong> — your 5-star reputation front and centre</div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div style="background: var(--cream); padding: 52px 0;">
    <div class="container" style="text-align: center;">
      <p style="font-size: 18px; color: var(--navy); font-weight: 500; margin-bottom: 24px;">Seen enough? Let's get Sure-Lock online with a site you're proud of.</p>
      <button class="btn-primary" onclick="showSection('pricing')" style="font-size: 15px; padding: 14px 32px;">See Pricing & Options →</button>
    </div>
  </div>
</div>

<!-- ═══════════════════ FEATURES SECTION ═══════════════════ -->
<div id="features" class="section">
  <div class="features-bg">
    <div class="container section-pad">
      <div class="section-header">
        <span class="section-eyebrow">What's Included</span>
        <h2 class="section-title">Everything Sure-Lock needs.<br>Nothing you don't.</h2>
        <p class="section-sub">A complete package built specifically for a local storage business on the Kapiti Coast.</p>
      </div>
      <div class="features-grid">

        <div class="feature-card">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
          </div>
          <div class="feature-title">Fully Responsive Design</div>
          <div class="feature-desc">Looks perfect on mobile, tablet, and desktop. Over 70% of your enquiries start on a phone — this matters.</div>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7M9 20l6-3M9 20V7m6 13l5.447-2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m0 13V7M9 7l6-3"/></svg>
          </div>
          <div class="feature-title">Unit Size Guide</div>
          <div class="feature-desc">Visual size guide so customers can self-serve. Fewer "what size do I need?" calls, more direct bookings.</div>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </div>
          <div class="feature-title">Enquiry Form & Click-to-Call</div>
          <div class="feature-desc">Make it dead simple for customers to reach you — a quote form and a tap-to-call button on every page.</div>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </div>
          <div class="feature-title">Local SEO Setup</div>
          <div class="feature-desc">Proper page titles, meta descriptions, and local schema markup for Paraparaumu & Kapiti Coast searches on Google.</div>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <div class="feature-title">Reviews Showcase</div>
          <div class="feature-desc">Your genuine 5-star testimonials displayed prominently — social proof that converts hesitant visitors into customers.</div>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          </div>
          <div class="feature-title">Google Maps Integration</div>
          <div class="feature-desc">Embedded map and directions to 27 Birmingham Street — no excuses for people not finding you.</div>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <div class="feature-title">Fast Load Speeds</div>
          <div class="feature-desc">Lightweight, clean code — no bloated WordPress plugins. Loads in under 2 seconds, keeping visitors on the page.</div>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
          </div>
          <div class="feature-title">SSL Security Certificate</div>
          <div class="feature-desc">HTTPS secured so browsers don't warn visitors away with "Not Secure" messages — essential for any business today.</div>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          </div>
          <div class="feature-title">Easy to Update</div>
          <div class="feature-desc">Change prices, add photos, or update hours yourself — no calling a developer every time something needs tweaking.</div>
        </div>

      </div>
    </div>
  </div>

  <div style="background: var(--warm-white); padding: 52px 0; text-align: center; border-top: 1px solid var(--border);">
    <div class="container">
      <p style="font-size: 17px; color: var(--navy); font-weight: 500; margin-bottom: 24px;">All of this included — no hidden extras, no surprise invoices.</p>
      <button class="btn-primary" onclick="showSection('pricing')" style="font-size: 15px; padding: 14px 32px;">See Pricing →</button>
    </div>
  </div>
</div>

<!-- ═══════════════════ PROCESS SECTION ═══════════════════ -->
<div id="process" class="section">
  <div class="container section-pad">
    <div class="section-header">
      <span class="section-eyebrow">How It Works</span>
      <h2 class="section-title">From yes to live in one week</h2>
      <p class="section-sub">We handle everything. You just review, approve, and go live.</p>
    </div>

    <div class="process-steps">
      <div class="process-step">
        <div class="step-num">1</div>
        <div class="step-title">You Approve</div>
        <div class="step-desc">Give the go-ahead and we kick off. No lengthy briefing documents or back-and-forth.</div>
      </div>
      <div class="process-step">
        <div class="step-num">2</div>
        <div class="step-title">We Build</div>
        <div class="step-desc">Your new site is built on a private staging link — you can view it on any device before it goes live.</div>
      </div>
      <div class="process-step">
        <div class="step-num">3</div>
        <div class="step-title">You Review</div>
        <div class="step-desc">Check everything over. Request any changes — we'll fine-tune until it's right.</div>
      </div>
      <div class="process-step">
        <div class="step-num">4</div>
        <div class="step-title">We Launch</div>
        <div class="step-desc">We handle the domain switch and go live. Zero downtime — your old site stays up until the moment the new one takes over.</div>
      </div>
    </div>

    <div style="background: var(--cream); border-radius: 14px; padding: 40px; margin-top: 64px; display: flex; gap: 40px; align-items: flex-start; flex-wrap: wrap;">
      <div style="flex: 1; min-width: 240px;">
        <div style="font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--teal); margin-bottom: 10px;">WHAT YOU DON'T NEED TO DO</div>
        <h3 style="font-family: 'DM Serif Display', serif; font-size: 24px; color: var(--navy); margin-bottom: 16px;">Sit back. We handle it all.</h3>
        <p style="color: var(--muted); font-size: 15px; line-height: 1.7;">No technical knowledge required. No login credentials to manage upfront. No explaining things twice. We write the copy, resize the photos, set up the forms, and configure Google so your site gets found.</p>
      </div>
      <div style="flex: 1; min-width: 240px;">
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px;">
          <li style="display: flex; gap: 12px; align-items: flex-start; font-size: 15px;">✅ <span><strong>Copywriting</strong> — we write all the text based on your current site and a short chat</span></li>
          <li style="display: flex; gap: 12px; align-items: flex-start; font-size: 15px;">✅ <span><strong>Photo optimisation</strong> — your existing facility photos sized and sharpened for the web</span></li>
          <li style="display: flex; gap: 12px; align-items: flex-start; font-size: 15px;">✅ <span><strong>Domain & hosting migration</strong> — we manage the technical changeover</span></li>
          <li style="display: flex; gap: 12px; align-items: flex-start; font-size: 15px;">✅ <span><strong>Google Business sync</strong> — website linked properly to your Google listing</span></li>
          <li style="display: flex; gap: 12px; align-items: flex-start; font-size: 15px;">✅ <span><strong>One month of support</strong> — any tweaks after launch, covered</span></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════════ PRICING SECTION ═══════════════════ -->
<div id="pricing" class="section">
  <div class="container section-pad">
    <div class="section-header">
      <span class="section-eyebrow">Investment</span>
      <h2 class="section-title">Simple, honest pricing</h2>
      <p class="section-sub">No surprise invoices. No ongoing contracts unless you want them. Pick what works for Sure-Lock.</p>
    </div>

    <div class="pricing-grid">

      <div class="pricing-card">
        <div class="pricing-head">
          <div class="pricing-name">Starter</div>
          <div class="pricing-price"><sup>$</sup>POA<sub></sub></div>
          <div class="pricing-desc">Custom quote based on your requirements. Let's chat.</div>
        </div>
        <div class="pricing-divider"></div>
        <div class="pricing-body">
          <ul class="pricing-features">
            <li><span class="check">✓</span> Up to 5 pages</li>
            <li><span class="check">✓</span> Mobile responsive design</li>
            <li><span class="check">✓</span> Enquiry form</li>
            <li><span class="check">✓</span> Google Maps integration</li>
            <li><span class="check">✓</span> SSL certificate</li>
            <li><span class="check">✓</span> 2 rounds of revisions</li>
            <li style="color: var(--muted);">✗ Ongoing SEO</li>
            <li style="color: var(--muted);">✗ Monthly support</li>
          </ul>
          <button class="pricing-btn outline" onclick="alert('Get in touch to discuss!')">Get a Quote</button>
        </div>
      </div>

      <div class="pricing-card featured">
        <div class="pricing-head">
          <div class="pricing-badge">RECOMMENDED</div>
          <div class="pricing-name">Complete</div>
          <div class="pricing-price"><sup>$</sup>POA<sub></sub></div>
          <div class="pricing-desc">Everything Sure-Lock needs, done right, with support included.</div>
        </div>
        <div class="pricing-divider"></div>
        <div class="pricing-body">
          <ul class="pricing-features">
            <li><span class="check">✓</span> Up to 8 pages</li>
            <li><span class="check">✓</span> Mobile responsive design</li>
            <li><span class="check">✓</span> Enquiry form & click-to-call</li>
            <li><span class="check">✓</span> Unit size guide page</li>
            <li><span class="check">✓</span> Reviews showcase</li>
            <li><span class="check">✓</span> Local SEO setup</li>
            <li><span class="check">✓</span> Google Business link</li>
            <li><span class="check">✓</span> 1 month post-launch support</li>
          </ul>
          <button class="pricing-btn primary" onclick="alert('Get in touch to discuss!')">Let\'s Get Started</button>
        </div>
      </div>

      <div class="pricing-card">
        <div class="pricing-head">
          <div class="pricing-name">Ongoing Care</div>
          <div class="pricing-price"><sup>$</sup>POA<sub> / mo</sub></div>
          <div class="pricing-desc">Optional monthly plan — keep everything updated and supported.</div>
        </div>
        <div class="pricing-divider"></div>
        <div class="pricing-body">
          <ul class="pricing-features">
            <li><span class="check">✓</span> Hosting & domain management</li>
            <li><span class="check">✓</span> Security updates</li>
            <li><span class="check">✓</span> Content updates (prices, photos)</li>
            <li><span class="check">✓</span> Monthly performance report</li>
            <li><span class="check">✓</span> Priority support</li>
            <li><span class="check">✓</span> Cancel anytime</li>
            <li style="color: var(--muted);">✗ New page builds</li>
            <li style="color: var(--muted);">✗ Active SEO campaign</li>
          </ul>
          <button class="pricing-btn outline" onclick="alert('Get in touch to discuss!')">Learn More</button>
        </div>
      </div>

    </div>

    <div style="margin-top: 52px; background: var(--navy); border-radius: 14px; padding: 48px; text-align: center;">
      <h3 style="font-family: 'DM Serif Display', serif; color: white; font-size: 30px; margin-bottom: 12px;">
        Ready to give Sure-Lock the website it deserves?
      </h3>
      <p style="color: rgba(255,255,255,0.6); font-size: 16px; margin-bottom: 28px; max-width: 480px; margin-left: auto; margin-right: auto;">
        Let's have a quick conversation — no pressure, no tech jargon. Just a chat about what you need and what it'll cost.
      </p>
      <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
        <a href="tel:+64" class="btn-primary" style="font-size: 15px; padding: 14px 28px;">📞 Call to Discuss</a>
        <a href="mailto:?subject=Sure-Lock Website Enquiry" class="btn-ghost" style="font-size: 15px; padding: 14px 28px;">✉️ Send an Email</a>
      </div>
      <p style="color: rgba(255,255,255,0.3); font-size: 13px; margin-top: 20px;">Usually respond within a few hours during business hours · No obligation quote</p>
    </div>

  </div>
</div>

<!-- ═══════════════════ DEMO SECTION ═══════════════════ -->
<div id="demo" class="section">
  <div style="background: var(--navy); padding: 52px 40px 36px; text-align: center;">
    <span class="section-eyebrow" style="color: var(--teal);">Live Preview</span>
    <h2 style="font-family: 'DM Serif Display', serif; color: white; font-size: clamp(28px, 4vw, 44px); margin-bottom: 12px;">
      Your new website — right here
    </h2>
    <p style="color: rgba(255,255,255,0.6); font-size: 16px; margin-bottom: 28px; max-width: 520px; margin-left: auto; margin-right: auto;">
      This is the actual site we've built for Sure-Lock. Click around, scroll through it — this is exactly what your customers will see.
    </p>
    <a href="https://www.techlani.com/concept/surelockparaparaumu" target="_blank" class="btn-primary" style="font-size: 14px; padding: 11px 22px; text-decoration: none;">
      ↗ Open in new tab
    </a>
  </div>

  <!-- Browser chrome wrapper -->
  <div style="background: #1a3244; padding: 0 0 0 0;">
    <div style="max-width: 1200px; margin: 0 auto; padding: 20px 32px 0;">
      <!-- Fake browser bar -->
      <div style="background: #0d1f2d; border-radius: 10px 10px 0 0; padding: 10px 16px; display: flex; align-items: center; gap: 12px;">
        <div style="display: flex; gap: 6px;">
          <div style="width: 12px; height: 12px; border-radius: 50%; background: #ff5f57;"></div>
          <div style="width: 12px; height: 12px; border-radius: 50%; background: #ffbd2e;"></div>
          <div style="width: 12px; height: 12px; border-radius: 50%; background: #28c840;"></div>
        </div>
        <div style="flex: 1; background: rgba(255,255,255,0.08); border-radius: 6px; padding: 6px 14px; font-size: 12px; color: rgba(255,255,255,0.5); display: flex; align-items: center; gap: 8px;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="opacity:0.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
          techlani.com/concept/surelockparaparaumu
        </div>
        <a href="https://www.techlani.com/concept/surelockparaparaumu" target="_blank" style="color: var(--teal); font-size: 12px; text-decoration: none; white-space: nowrap; font-weight: 500;">Open ↗</a>
      </div>

      <!-- iframe -->
      <div style="position: relative; background: white; border-radius: 0 0 0 0; overflow: hidden; height: 680px;">
        <iframe
          id="demo-iframe"
          src="https://www.techlani.com/concept/surelockparaparaumu"
          style="width: 100%; height: 100%; border: none; display: block;"
          title="Sure-Lock Self Storage — New Website Demo"
          loading="lazy"
        ></iframe>
        <!-- Fallback shown if iframe fails to load -->
        <div id="iframe-fallback" style="display: none; position: absolute; inset: 0; background: var(--cream); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; text-align: center; padding: 40px;">
          <div style="font-size: 48px;">🔒</div>
          <div style="font-size: 18px; font-weight: 600; color: var(--navy);">Preview blocked by browser</div>
          <div style="font-size: 15px; color: var(--muted); max-width: 400px;">Some websites prevent embedding. Open the demo directly in a new tab to see the full site.</div>
          <a href="https://www.techlani.com/concept/surelockparaparaumu" target="_blank" class="btn-primary" style="text-decoration: none; font-size: 15px; padding: 13px 28px;">
            Open Demo Site →
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile preview note + next CTA -->
  <div style="background: #1a3244; padding: 24px 40px 52px;">
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 32px;">
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; justify-content: space-between;">
        <div style="display: flex; gap: 24px; flex-wrap: wrap;">
          <div style="display: flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.5); font-size: 13px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            Fully mobile responsive
          </div>
          <div style="display: flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.5); font-size: 13px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Loads in under 2 seconds
          </div>
          <div style="display: flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.5); font-size: 13px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            Local SEO ready
          </div>
        </div>
        <button onclick="showSection('pricing')" class="btn-primary" style="font-size: 14px; padding: 11px 22px;">
          See Pricing →
        </button>
      </div>
    </div>
  </div>
</div>

<!-- FOOTER -->
<footer>
  <div class="footer-note">Prepared exclusively for Sure-Lock Self Storage, Paraparaumu · Not for redistribution</div>
  <div class="footer-logo">Sure<span>Lock</span> — New Site Proposal</div>
</footer>

<script>
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const tabMap = { overview: 0, compare: 1, features: 2, process: 3, demo: 4, pricing: 5 };
  const tabs = document.querySelectorAll('.nav-tab');
  if (tabs[tabMap[id]] !== undefined) tabs[tabMap[id]].classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Detect if iframe failed to load (X-Frame-Options block)
const iframe = document.getElementById('demo-iframe');
const fallback = document.getElementById('iframe-fallback');
if (iframe && fallback) {
  iframe.addEventListener('error', () => {
    fallback.style.display = 'flex';
    iframe.style.display = 'none';
  });
  // Timeout fallback — if iframe src returns nothing after 5s
  setTimeout(() => {
    try {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      if (!doc || doc.readyState === 'complete' && doc.body && doc.body.innerHTML === '') {
        fallback.style.display = 'flex';
        iframe.style.display = 'none';
      }
    } catch(e) {
      // Cross-origin — this means it loaded, just blocked from reading. That's fine.
    }
  }, 5000);
}
</script>

</body>
</html>`;

  return (
    <iframe
      title="Sure-Lock Self Storage Proposal"
      srcDoc={proposalHtml}
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        display: "block",
      }}
    />
  );
}
