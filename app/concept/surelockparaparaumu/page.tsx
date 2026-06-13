'use client';

import { useState, useRef, useEffect } from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────
type SectionId = 'overview' | 'compare' | 'features' | 'process' | 'demo' | 'pricing';

// ─── CSS (injected via <style> tag in layout, or use a global CSS import) ────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Serif+Display:ital@0;1&display=swap');

  .sl-root *, .sl-root *::before, .sl-root *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .sl-root {
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
    font-family: 'Inter', sans-serif;
    background: var(--warm-white);
    color: var(--text);
    line-height: 1.6;
  }

  /* NAV */
  .sl-nav {
    position: sticky; top: 0; z-index: 100;
    background: var(--navy);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 40px; height: 60px;
  }
  .sl-nav-logo { font-family: 'DM Serif Display', serif; color: white; font-size: 18px; letter-spacing: 0.5px; }
  .sl-nav-logo span { color: var(--teal); }
  .sl-nav-tabs { display: flex; gap: 4px; }
  .sl-nav-tab {
    background: none; border: none; cursor: pointer;
    color: rgba(255,255,255,0.6);
    font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500;
    padding: 8px 16px; border-radius: 6px; transition: all 0.2s;
  }
  .sl-nav-tab:hover { color: white; background: rgba(255,255,255,0.08); }
  .sl-nav-tab.active { color: white; background: var(--teal); }
  .sl-nav-cta {
    background: var(--teal); color: white; border: none; cursor: pointer;
    font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600;
    padding: 9px 20px; border-radius: 6px; transition: background 0.2s;
  }
  .sl-nav-cta:hover { background: var(--teal-light); }

  /* HERO */
  .sl-hero {
    background: var(--navy); padding: 80px 40px 70px;
    text-align: center; position: relative; overflow: hidden;
  }
  .sl-hero::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse at 60% 0%, rgba(14,159,142,0.18) 0%, transparent 65%);
    pointer-events: none;
  }
  .sl-hero-eyebrow {
    display: inline-block;
    background: rgba(14,159,142,0.15); border: 1px solid rgba(14,159,142,0.4);
    color: var(--teal); font-size: 12px; font-weight: 600;
    letter-spacing: 1.5px; text-transform: uppercase;
    padding: 6px 16px; border-radius: 20px; margin-bottom: 28px;
  }
  .sl-hero h1 {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(36px, 5vw, 58px);
    color: white; line-height: 1.15; margin-bottom: 20px;
    max-width: 760px; margin-left: auto; margin-right: auto;
  }
  .sl-hero h1 em { color: var(--teal); font-style: normal; }
  .sl-hero p { color: rgba(255,255,255,0.68); font-size: 17px; max-width: 540px; margin: 0 auto 36px; }
  .sl-hero-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

  /* BUTTONS */
  .sl-btn-primary {
    background: var(--teal); color: white; border: none; cursor: pointer;
    font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 600;
    padding: 14px 28px; border-radius: 8px;
    transition: background 0.2s; text-decoration: none; display: inline-block;
  }
  .sl-btn-primary:hover { background: var(--teal-light); }
  .sl-btn-ghost {
    background: rgba(255,255,255,0.08); color: white;
    border: 1px solid rgba(255,255,255,0.2); cursor: pointer;
    font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 500;
    padding: 14px 28px; border-radius: 8px;
    transition: background 0.2s; text-decoration: none; display: inline-block;
  }
  .sl-btn-ghost:hover { background: rgba(255,255,255,0.14); }

  /* STATS BAR */
  .sl-stats-bar {
    display: flex; justify-content: center;
    background: var(--navy-mid); border-top: 1px solid rgba(255,255,255,0.08);
  }
  .sl-stat-item {
    flex: 1; max-width: 200px; padding: 22px 24px; text-align: center;
    border-right: 1px solid rgba(255,255,255,0.08);
  }
  .sl-stat-item:last-child { border-right: none; }
  .sl-stat-num { font-family: 'DM Serif Display', serif; font-size: 32px; color: var(--teal); display: block; }
  .sl-stat-label { font-size: 12px; color: rgba(255,255,255,0.5); font-weight: 500; letter-spacing: 0.5px; }

  /* LAYOUT */
  .sl-container { max-width: 1100px; margin: 0 auto; padding: 0 40px; }
  .sl-section-pad { padding: 72px 0; }
  .sl-section-eyebrow {
    font-size: 11px; font-weight: 700; letter-spacing: 2px;
    text-transform: uppercase; color: var(--teal); margin-bottom: 12px; display: block;
  }
  .sl-section-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(28px, 3.5vw, 42px); color: var(--navy); line-height: 1.2; margin-bottom: 16px;
  }
  .sl-section-sub { font-size: 16px; color: var(--muted); max-width: 560px; }
  .sl-section-header { margin-bottom: 52px; }

  /* TESTIMONIALS */
  .sl-testimonials-strip { background: var(--cream); padding: 52px 0; }
  .sl-testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .sl-tcard { background: white; border-radius: 10px; padding: 24px; border: 1px solid var(--border); }
  .sl-tcard-stars { color: #f59e0b; font-size: 13px; margin-bottom: 12px; letter-spacing: 2px; }
  .sl-tcard-text { font-size: 14px; color: var(--text); line-height: 1.65; font-style: italic; }
  .sl-tcard-author { margin-top: 14px; font-size: 13px; font-weight: 600; color: var(--navy); }

  /* CTA BOTTOM */
  .sl-cta-bottom { background: var(--navy); padding: 80px 40px; text-align: center; }
  .sl-cta-bottom h2 {
    font-family: 'DM Serif Display', serif;
    color: white; font-size: clamp(28px, 4vw, 44px); margin-bottom: 16px;
  }
  .sl-cta-bottom h2 em { color: var(--teal); font-style: normal; }
  .sl-cta-bottom p { color: rgba(255,255,255,0.6); font-size: 16px; margin-bottom: 36px; }
  .sl-cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

  /* COMPARE */
  .sl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .sl-compare-card { border-radius: 12px; overflow: hidden; border: 1px solid var(--border); }
  .sl-compare-label {
    padding: 12px 20px; font-size: 12px; font-weight: 700; letter-spacing: 1.5px;
    text-transform: uppercase; display: flex; align-items: center; gap: 8px;
  }
  .sl-compare-label svg { width: 14px; height: 14px; flex-shrink: 0; }
  .sl-compare-label-before { background: #fef2f2; color: var(--danger); }
  .sl-compare-label-after { background: #f0fdf7; color: var(--good); }
  .sl-compare-body { padding: 24px; background: white; }

  .sl-old-site-mock { border: 1px solid #e0e0e0; border-radius: 6px; overflow: hidden; background: #f9f9f9; margin-bottom: 20px; }
  .sl-old-site-bar { background: #4a6741; padding: 10px 16px; display: flex; align-items: center; gap: 10px; }
  .sl-old-site-bar-title { color: white; font-size: 13px; font-weight: bold; }
  .sl-old-site-nav { background: #3a5233; padding: 6px 16px; display: flex; gap: 12px; }
  .sl-old-site-nav span { color: rgba(255,255,255,0.7); font-size: 11px; }
  .sl-old-site-body { padding: 16px; }
  .sl-old-site-slider { background: #c8d8c4; height: 100px; border-radius: 3px; margin-bottom: 12px; display: flex; align-items: center; justify-content: center; font-size: 11px; color: #666; }
  .sl-old-site-h2 { font-size: 15px; font-weight: bold; color: #333; margin-bottom: 6px; }
  .sl-old-site-p { font-size: 11px; color: #666; line-height: 1.5; }
  .sl-old-site-bullets { list-style: disc; padding-left: 16px; margin-top: 8px; }
  .sl-old-site-bullets li { font-size: 10px; color: #666; margin-bottom: 3px; }

  .sl-new-site-mock { border: 1px solid #d0e8e4; border-radius: 8px; overflow: hidden; background: #0d1f2d; margin-bottom: 20px; }
  .sl-new-site-nav-bar { background: #0d1f2d; padding: 10px 16px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); }
  .sl-new-site-logo { color: white; font-family: 'DM Serif Display', serif; font-size: 14px; }
  .sl-new-site-logo span { color: #0e9f8e; }
  .sl-new-site-cta-sm { background: #0e9f8e; color: white; font-size: 10px; font-weight: 600; padding: 5px 12px; border-radius: 5px; }
  .sl-new-site-hero-area { background: linear-gradient(135deg, #0d1f2d 0%, #1a3244 100%); padding: 20px 16px 16px; position: relative; overflow: hidden; }
  .sl-new-site-eyebrow-sm { background: rgba(14,159,142,0.15); border: 1px solid rgba(14,159,142,0.4); color: #0e9f8e; font-size: 9px; font-weight: 700; letter-spacing: 1px; padding: 3px 8px; border-radius: 10px; display: inline-block; margin-bottom: 8px; }
  .sl-new-site-h1 { font-family: 'DM Serif Display', serif; color: white; font-size: 18px; line-height: 1.2; margin-bottom: 8px; }
  .sl-new-site-h1 em { color: #0e9f8e; font-style: normal; }
  .sl-new-site-sub { color: rgba(255,255,255,0.6); font-size: 10px; margin-bottom: 10px; }
  .sl-new-site-btn-row { display: flex; gap: 8px; }
  .sl-new-site-btn { background: #0e9f8e; color: white; font-size: 9px; font-weight: 600; padding: 6px 12px; border-radius: 5px; display: inline-block; }
  .sl-new-site-btn-outline { background: rgba(255,255,255,0.1); color: white; font-size: 9px; font-weight: 500; padding: 6px 12px; border-radius: 5px; display: inline-block; border: 1px solid rgba(255,255,255,0.2); }

  .sl-issues-list { list-style: none; }
  .sl-issues-list li { display: flex; gap: 10px; align-items: flex-start; padding: 10px 0; border-bottom: 1px solid #f5f5f5; font-size: 14px; }
  .sl-issues-list li:last-child { border-bottom: none; }
  .sl-wins-list { list-style: none; }
  .sl-wins-list li { display: flex; gap: 10px; align-items: flex-start; padding: 10px 0; border-bottom: 1px solid #f0fdf7; font-size: 14px; }
  .sl-wins-list li:last-child { border-bottom: none; }

  /* FEATURES */
  .sl-features-bg { background: var(--cream); }
  .sl-features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .sl-feature-card { background: white; border-radius: 12px; border: 1px solid var(--border); padding: 28px 24px; transition: box-shadow 0.2s, transform 0.2s; }
  .sl-feature-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); transform: translateY(-2px); }
  .sl-feature-icon { width: 44px; height: 44px; border-radius: 10px; background: rgba(14,159,142,0.1); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
  .sl-feature-icon svg { width: 22px; height: 22px; color: var(--teal); }
  .sl-feature-title { font-size: 16px; font-weight: 600; margin-bottom: 8px; color: var(--navy); }
  .sl-feature-desc { font-size: 14px; color: var(--muted); line-height: 1.6; }

  /* PROCESS */
  .sl-process-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; position: relative; }
  .sl-process-steps::before { content: ''; position: absolute; top: 28px; left: 10%; right: 10%; height: 2px; background: var(--border); z-index: 0; }
  .sl-process-step { text-align: center; padding: 0 16px; position: relative; z-index: 1; }
  .sl-step-num { width: 56px; height: 56px; border-radius: 50%; background: white; border: 2px solid var(--teal); display: flex; align-items: center; justify-content: center; font-family: 'DM Serif Display', serif; font-size: 22px; color: var(--teal); margin: 0 auto 20px; }
  .sl-step-title { font-weight: 600; font-size: 15px; color: var(--navy); margin-bottom: 8px; }
  .sl-step-desc { font-size: 13px; color: var(--muted); line-height: 1.5; }

  /* PRICING */
  .sl-pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: start; }
  .sl-pricing-card { border-radius: 14px; border: 1px solid var(--border); background: white; overflow: hidden; }
  .sl-pricing-card-featured { border-color: var(--teal); box-shadow: 0 0 0 3px rgba(14,159,142,0.15); }
  .sl-pricing-head { padding: 28px 28px 20px; }
  .sl-pricing-badge { background: var(--teal); color: white; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; padding: 4px 10px; border-radius: 4px; display: inline-block; margin-bottom: 16px; }
  .sl-pricing-name { font-size: 18px; font-weight: 700; color: var(--navy); margin-bottom: 6px; }
  .sl-pricing-price { font-family: 'DM Serif Display', serif; font-size: 42px; color: var(--navy); line-height: 1; margin-bottom: 4px; }
  .sl-pricing-price sup { font-family: 'Inter', sans-serif; font-size: 22px; vertical-align: super; }
  .sl-pricing-price sub { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 400; color: var(--muted); }
  .sl-pricing-desc { font-size: 13px; color: var(--muted); }
  .sl-pricing-divider { height: 1px; background: var(--border); }
  .sl-pricing-body { padding: 24px 28px 28px; }
  .sl-pricing-features { list-style: none; display: flex; flex-direction: column; gap: 10px; }
  .sl-pricing-features li { display: flex; gap: 10px; align-items: flex-start; font-size: 14px; }
  .sl-pricing-features .check { color: var(--good); flex-shrink: 0; margin-top: 2px; }
  .sl-pricing-btn { width: 100%; margin-top: 24px; padding: 13px; border-radius: 8px; font-size: 15px; font-weight: 600; cursor: pointer; border: none; font-family: 'Inter', sans-serif; transition: opacity 0.2s; }
  .sl-pricing-btn:hover { opacity: 0.88; }
  .sl-pricing-btn-primary { background: var(--teal); color: white; }
  .sl-pricing-btn-outline { background: white; color: var(--navy); border: 1.5px solid var(--border); }

  /* FOOTER */
  .sl-footer { background: #07131d; padding: 24px 40px; display: flex; align-items: center; justify-content: space-between; }
  .sl-footer-note { color: rgba(255,255,255,0.3); font-size: 12px; }
  .sl-footer-logo { font-family: 'DM Serif Display', serif; color: rgba(255,255,255,0.5); font-size: 14px; }
  .sl-footer-logo span { color: var(--teal); }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .sl-nav { padding: 0 20px; }
    .sl-nav-tabs { display: none; }
    .sl-container { padding: 0 20px; }
    .sl-section-pad { padding: 52px 0; }
    .sl-compare-grid, .sl-features-grid, .sl-pricing-grid { grid-template-columns: 1fr; }
    .sl-process-steps { grid-template-columns: repeat(2, 1fr); gap: 32px; }
    .sl-process-steps::before { display: none; }
    .sl-testimonials-grid { grid-template-columns: 1fr; }
    .sl-hero { padding: 52px 20px 48px; }
    .sl-stats-bar { flex-wrap: wrap; }
    .sl-footer { flex-direction: column; gap: 8px; text-align: center; }
  }
`;

// ─── Sub-components ───────────────────────────────────────────────────────────

function OverviewSection({ go }: { go: (id: SectionId) => void }) {
  return (
    <div>
      <div className="sl-hero">
        <div className="sl-hero-eyebrow">📦 Prepared Exclusively for Sure-Lock Self Storage</div>
        <h1>
          Your business deserves a website as <em>secure</em> as your units
        </h1>
        <p>
          We&apos;ve designed a completely new website for Sure-Lock. Modern, fast, and built to turn
          Kapiti Coast searches into real bookings.
        </p>
        <div className="sl-hero-actions">
          <button className="sl-btn-primary" onClick={() => go('compare')}>
            See the Difference →
          </button>
          <button className="sl-btn-ghost" onClick={() => go('features')}>
            What&apos;s Included
          </button>
        </div>
      </div>

      <div className="sl-stats-bar">
        {[
          { num: '73%', label: 'of storage searches happen on mobile' },
          { num: '3 sec', label: 'before visitors leave a slow site' },
          { num: '2×', label: 'more enquiries from modern sites' },
          { num: '1 week', label: 'to go live from approval' },
        ].map((s) => (
          <div key={s.num} className="sl-stat-item">
            <span className="sl-stat-num">{s.num}</span>
            <span className="sl-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="sl-testimonials-strip">
        <div className="sl-container">
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span className="sl-section-eyebrow">What your customers already say</span>
            <h2 className="sl-section-title">
              Great reputation.
              <br />
              Outdated first impression.
            </h2>
          </div>
          <div className="sl-testimonials-grid">
            {[
              {
                text: '"The facility is modern, clean, rodent-free, and Kirsten and Kerry are professional, friendly and people of their word."',
                author: '— Mary, long-term customer',
              },
              {
                text: '"It has been a real pleasure doing business with you and I will be recommending your company to anyone who needs storage."',
                author: '— Kate',
              },
              {
                text: '"Hassle free experience and I was impressed with the service and quality of the storage facility."',
                author: '— Joe',
              },
            ].map((t) => (
              <div key={t.author} className="sl-tcard">
                <div className="sl-tcard-stars">★★★★★</div>
                <div className="sl-tcard-text">{t.text}</div>
                <div className="sl-tcard-author">{t.author}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 28, color: 'var(--muted)', fontSize: 15 }}>
            Your service earns 5 stars. Your website should too.
          </p>
        </div>
      </div>

      <div className="sl-cta-bottom">
        <h2>
          Ready to see the <em>new site</em>?
        </h2>
        <p>Step through the tabs above to see the before &amp; after, everything that&apos;s included, and pricing.</p>
        <div className="sl-cta-actions">
          <button className="sl-btn-primary" onClick={() => go('compare')}>
            Before &amp; After →
          </button>
          <button className="sl-btn-ghost" onClick={() => go('pricing')}>
            Jump to Pricing
          </button>
        </div>
      </div>
    </div>
  );
}

function CompareSection({ go }: { go: (id: SectionId) => void }) {
  return (
    <div>
      <div style={{ padding: '72px 0 40px', background: 'var(--warm-white)' }}>
        <div className="sl-container">
          <div className="sl-section-header">
            <span className="sl-section-eyebrow">Before &amp; After</span>
            <h2 className="sl-section-title">Side-by-side: old vs new</h2>
            <p className="sl-section-sub">
              Your current site does the job — but it&apos;s leaving bookings on the table every single day.
            </p>
          </div>

          <div className="sl-compare-grid">
            {/* BEFORE */}
            <div className="sl-compare-card">
              <div className={`sl-compare-label sl-compare-label-before`}>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                    clipRule="evenodd"
                  />
                </svg>
                Current Website — surelockstorage.co.nz
              </div>
              <div className="sl-compare-body">
                <div className="sl-old-site-mock">
                  <div className="sl-old-site-bar">
                    <div className="sl-old-site-bar-title">
                      Sure-Lock Self Storage — Kapiti, Paraparaumu &amp; Wellington
                    </div>
                  </div>
                  <div className="sl-old-site-nav">
                    {['Home', 'Storage Services', 'Space Calculator', 'News', 'Links', 'Contact'].map((n) => (
                      <span key={n}>{n}</span>
                    ))}
                  </div>
                  <div className="sl-old-site-body">
                    <div className="sl-old-site-slider">[ Image Slideshow — 3 photos ]</div>
                    <div>
                      <div className="sl-old-site-h2">WHY CHOOSE SURE-LOCK?</div>
                      <div className="sl-old-site-p">
                        Welcome to Sure-Lock Self Storage — providing self storage for household, Business, Filing
                        and more in Paraparaumu...
                      </div>
                      <ul className="sl-old-site-bullets">
                        {[
                          'Alarm monitored electric security fencing',
                          'Storage Unit rates from $15.00 per week',
                          'Individual PIN coded access',
                          'Access your Storage Unit 24/7!',
                          'Stringent pest control',
                          'Trolleys available',
                        ].map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <ul className="sl-issues-list">
                  {[
                    { icon: '🔴', label: 'Not mobile-friendly', desc: '— squashed layout on phones, hard to read or navigate' },
                    { icon: '🔴', label: 'Dated design', desc: '— 2012-era look signals an inactive business to visitors' },
                    { icon: '🔴', label: 'No clear call to action', desc: "— visitors can't easily enquire or see unit sizes" },
                    { icon: '🔴', label: 'Slow load speed', desc: '— image sliders and old WordPress plugins hurt performance' },
                    { icon: '🔴', label: 'Google+ link', desc: '— links to a social network that shut down in 2019' },
                    { icon: '🟡', label: 'Good content, poor structure', desc: '— strong reviews and features buried in plain text' },
                  ].map((item) => (
                    <li key={item.label}>
                      <span style={{ flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                      <div>
                        <strong>{item.label}</strong> {item.desc}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AFTER */}
            <div className="sl-compare-card">
              <div className={`sl-compare-label sl-compare-label-after`}>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                New Website — designed for 2025
              </div>
              <div className="sl-compare-body">
                <div className="sl-new-site-mock">
                  <div className="sl-new-site-nav-bar">
                    <div className="sl-new-site-logo">
                      Sure<span>Lock</span> Self Storage
                    </div>
                    <div className="sl-new-site-cta-sm">Get a Quote</div>
                  </div>
                  <div className="sl-new-site-hero-area">
                    <div className="sl-new-site-eyebrow-sm">KAPITI COAST&apos;S TRUSTED STORAGE</div>
                    <div className="sl-new-site-h1">
                      Safe, secure storage in <em>Paraparaumu</em> — from $15/wk
                    </div>
                    <div className="sl-new-site-sub">
                      13 unit sizes · 24/7 access · PIN-coded security · 27 Birmingham St
                    </div>
                    <div className="sl-new-site-btn-row">
                      <div className="sl-new-site-btn">Get a Quote</div>
                      <div className="sl-new-site-btn-outline">See Unit Sizes</div>
                    </div>
                  </div>
                </div>
                <ul className="sl-wins-list">
                  {[
                    { label: 'Fully mobile responsive', desc: '— looks sharp on every phone, tablet, and screen' },
                    { label: 'Modern, professional design', desc: '— builds trust the moment someone lands on the page' },
                    { label: 'Clear calls to action', desc: '— "Get a Quote" and "See Unit Sizes" front and centre' },
                    { label: 'Fast & lightweight', desc: '— no bloated plugins, loads in under 2 seconds' },
                    { label: 'Local SEO ready', desc: '— structured for Paraparaumu & Kapiti Coast searches' },
                    { label: 'Reviews & features showcased', desc: '— your 5-star reputation front and centre' },
                  ].map((item) => (
                    <li key={item.label}>
                      <span>✅</span>
                      <div>
                        <strong>{item.label}</strong> {item.desc}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--cream)', padding: '52px 0' }}>
        <div className="sl-container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 18, color: 'var(--navy)', fontWeight: 500, marginBottom: 24 }}>
            Seen enough? Let&apos;s get Sure-Lock online with a site you&apos;re proud of.
          </p>
          <button className="sl-btn-primary" onClick={() => go('pricing')} style={{ fontSize: 15, padding: '14px 32px' }}>
            See Pricing &amp; Options →
          </button>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Fully Responsive Design',
    desc: 'Looks perfect on mobile, tablet, and desktop. Over 70% of your enquiries start on a phone — this matters.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7M9 20l6-3M9 20V7m6 13l5.447-2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m0 13V7M9 7l6-3" />
      </svg>
    ),
    title: 'Unit Size Guide',
    desc: 'Visual size guide so customers can self-serve. Fewer "what size do I need?" calls, more direct bookings.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Enquiry Form & Click-to-Call',
    desc: 'Make it dead simple for customers to reach you — a quote form and a tap-to-call button on every page.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    title: 'Local SEO Setup',
    desc: 'Proper page titles, meta descriptions, and local schema markup for Paraparaumu & Kapiti Coast searches on Google.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Reviews Showcase',
    desc: 'Your genuine 5-star testimonials displayed prominently — social proof that converts hesitant visitors into customers.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Google Maps Integration',
    desc: 'Embedded map and directions to 27 Birmingham Street — no excuses for people not finding you.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Fast Load Speeds',
    desc: 'Lightweight, clean code — no bloated WordPress plugins. Loads in under 2 seconds, keeping visitors on the page.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: 'SSL Security Certificate',
    desc: "HTTPS secured so browsers don't warn visitors away with \"Not Secure\" messages — essential for any business today.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Easy to Update',
    desc: 'Change prices, add photos, or update hours yourself — no calling a developer every time something needs tweaking.',
  },
];

function FeaturesSection({ go }: { go: (id: SectionId) => void }) {
  return (
    <div>
      <div className="sl-features-bg">
        <div className="sl-container sl-section-pad">
          <div className="sl-section-header">
            <span className="sl-section-eyebrow">What&apos;s Included</span>
            <h2 className="sl-section-title">
              Everything Sure-Lock needs.
              <br />
              Nothing you don&apos;t.
            </h2>
            <p className="sl-section-sub">
              A complete package built specifically for a local storage business on the Kapiti Coast.
            </p>
          </div>
          <div className="sl-features-grid">
            {features.map((f) => (
              <div key={f.title} className="sl-feature-card">
                <div className="sl-feature-icon">{f.icon}</div>
                <div className="sl-feature-title">{f.title}</div>
                <div className="sl-feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          background: 'var(--warm-white)',
          padding: '52px 0',
          textAlign: 'center',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div className="sl-container">
          <p style={{ fontSize: 17, color: 'var(--navy)', fontWeight: 500, marginBottom: 24 }}>
            All of this included — no hidden extras, no surprise invoices.
          </p>
          <button
            className="sl-btn-primary"
            onClick={() => go('pricing')}
            style={{ fontSize: 15, padding: '14px 32px' }}
          >
            See Pricing →
          </button>
        </div>
      </div>
    </div>
  );
}

function ProcessSection() {
  const steps = [
    {
      n: '1',
      title: 'You Approve',
      desc: 'Give the go-ahead and we kick off. No lengthy briefing documents or back-and-forth.',
    },
    {
      n: '2',
      title: 'We Build',
      desc: 'Your new site is built on a private staging link — you can view it on any device before it goes live.',
    },
    {
      n: '3',
      title: 'You Review',
      desc: "Check everything over. Request any changes — we'll fine-tune until it's right.",
    },
    {
      n: '4',
      title: 'We Launch',
      desc: 'We handle the domain switch and go live. Zero downtime — your old site stays up until the moment the new one takes over.',
    },
  ];

  return (
    <div className="sl-container sl-section-pad">
      <div className="sl-section-header">
        <span className="sl-section-eyebrow">How It Works</span>
        <h2 className="sl-section-title">From yes to live in one week</h2>
        <p className="sl-section-sub">We handle everything. You just review, approve, and go live.</p>
      </div>

      <div className="sl-process-steps">
        {steps.map((s) => (
          <div key={s.n} className="sl-process-step">
            <div className="sl-step-num">{s.n}</div>
            <div className="sl-step-title">{s.title}</div>
            <div className="sl-step-desc">{s.desc}</div>
          </div>
        ))}
      </div>

      <div
        style={{
          background: 'var(--cream)',
          borderRadius: 14,
          padding: 40,
          marginTop: 64,
          display: 'flex',
          gap: 40,
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: 1, minWidth: 240 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: 'var(--teal)',
              marginBottom: 10,
            }}
          >
            WHAT YOU DON&apos;T NEED TO DO
          </div>
          <h3
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 24,
              color: 'var(--navy)',
              marginBottom: 16,
            }}
          >
            Sit back. We handle it all.
          </h3>
          <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>
            No technical knowledge required. No login credentials to manage upfront. No explaining things twice. We
            write the copy, resize the photos, set up the forms, and configure Google so your site gets found.
          </p>
        </div>
        <div style={{ flex: 1, minWidth: 240 }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              ['Copywriting', 'we write all the text based on your current site and a short chat'],
              ['Photo optimisation', 'your existing facility photos sized and sharpened for the web'],
              ['Domain & hosting migration', 'we manage the technical changeover'],
              ['Google Business sync', 'website linked properly to your Google listing'],
              ['One month of support', 'any tweaks after launch, covered'],
            ].map(([bold, rest]) => (
              <li key={bold} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15 }}>
                ✅ <span><strong>{bold}</strong> — {rest}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: 'POA',
      sub: '',
      desc: "Custom quote based on your requirements. Let's chat.",
      featured: false,
      features: [
        { tick: true, text: 'Up to 5 pages' },
        { tick: true, text: 'Mobile responsive design' },
        { tick: true, text: 'Enquiry form' },
        { tick: true, text: 'Google Maps integration' },
        { tick: true, text: 'SSL certificate' },
        { tick: true, text: '2 rounds of revisions' },
        { tick: false, text: 'Ongoing SEO' },
        { tick: false, text: 'Monthly support' },
      ],
      btnLabel: 'Get a Quote',
      btnStyle: 'outline' as const,
    },
    {
      name: 'Complete',
      price: 'POA',
      sub: '',
      desc: 'Everything Sure-Lock needs, done right, with support included.',
      featured: true,
      features: [
        { tick: true, text: 'Up to 8 pages' },
        { tick: true, text: 'Mobile responsive design' },
        { tick: true, text: 'Enquiry form & click-to-call' },
        { tick: true, text: 'Unit size guide page' },
        { tick: true, text: 'Reviews showcase' },
        { tick: true, text: 'Local SEO setup' },
        { tick: true, text: 'Google Business link' },
        { tick: true, text: '1 month post-launch support' },
      ],
      btnLabel: "Let's Get Started",
      btnStyle: 'primary' as const,
    },
    {
      name: 'Ongoing Care',
      price: 'POA',
      sub: ' / mo',
      desc: 'Optional monthly plan — keep everything updated and supported.',
      featured: false,
      features: [
        { tick: true, text: 'Hosting & domain management' },
        { tick: true, text: 'Security updates' },
        { tick: true, text: 'Content updates (prices, photos)' },
        { tick: true, text: 'Monthly performance report' },
        { tick: true, text: 'Priority support' },
        { tick: true, text: 'Cancel anytime' },
        { tick: false, text: 'New page builds' },
        { tick: false, text: 'Active SEO campaign' },
      ],
      btnLabel: 'Learn More',
      btnStyle: 'outline' as const,
    },
  ];

  return (
    <div className="sl-container sl-section-pad">
      <div className="sl-section-header">
        <span className="sl-section-eyebrow">Investment</span>
        <h2 className="sl-section-title">Simple, honest pricing</h2>
        <p className="sl-section-sub">
          No surprise invoices. No ongoing contracts unless you want them. Pick what works for Sure-Lock.
        </p>
      </div>

      <div className="sl-pricing-grid">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`sl-pricing-card${plan.featured ? ' sl-pricing-card-featured' : ''}`}
          >
            <div className="sl-pricing-head">
              {plan.featured && <div className="sl-pricing-badge">RECOMMENDED</div>}
              <div className="sl-pricing-name">{plan.name}</div>
              <div className="sl-pricing-price">
                <sup>$</sup>
                {plan.price}
                <sub>{plan.sub}</sub>
              </div>
              <div className="sl-pricing-desc">{plan.desc}</div>
            </div>
            <div className="sl-pricing-divider" />
            <div className="sl-pricing-body">
              <ul className="sl-pricing-features">
                {plan.features.map((f) => (
                  <li key={f.text} style={!f.tick ? { color: 'var(--muted)' } : {}}>
                    <span className={f.tick ? 'check' : ''} style={{ flexShrink: 0, marginTop: 2 }}>
                      {f.tick ? '✓' : '✗'}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>
              <button
                className={`sl-pricing-btn ${plan.btnStyle === 'primary' ? 'sl-pricing-btn-primary' : 'sl-pricing-btn-outline'}`}
                onClick={() => alert('Get in touch to discuss!')}
              >
                {plan.btnLabel}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 52,
          background: 'var(--navy)',
          borderRadius: 14,
          padding: 48,
          textAlign: 'center',
        }}
      >
        <h3
          style={{
            fontFamily: "'DM Serif Display', serif",
            color: 'white',
            fontSize: 30,
            marginBottom: 12,
          }}
        >
          Ready to give Sure-Lock the website it deserves?
        </h3>
        <p
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: 16,
            marginBottom: 28,
            maxWidth: 480,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Let&apos;s have a quick conversation — no pressure, no tech jargon. Just a chat about what you need and what
          it&apos;ll cost.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:+64" className="sl-btn-primary" style={{ fontSize: 15, padding: '14px 28px' }}>
            📞 Call to Discuss
          </a>
          <a
            href="mailto:?subject=Sure-Lock Website Enquiry"
            className="sl-btn-ghost"
            style={{ fontSize: 15, padding: '14px 28px' }}
          >
            ✉️ Send an Email
          </a>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13, marginTop: 20 }}>
          Usually respond within a few hours during business hours · No obligation quote
        </p>
      </div>
    </div>
  );
}

const DEMO_URL = 'https://www.techlani.com/concepts/surelockparaparaumu';

function DemoSection({ go }: { go: (id: SectionId) => void }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeBlocked, setIframeBlocked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const doc = iframeRef.current?.contentDocument ?? iframeRef.current?.contentWindow?.document;
        if (!doc || (doc.readyState === 'complete' && doc.body && doc.body.innerHTML === '')) {
          setIframeBlocked(true);
        }
      } catch {
        // Cross-origin — loaded fine, just can't read it
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div style={{ background: 'var(--navy)', padding: '52px 40px 36px', textAlign: 'center' }}>
        <span className="sl-section-eyebrow" style={{ color: 'var(--teal)' }}>
          Live Preview
        </span>
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            color: 'white',
            fontSize: 'clamp(28px, 4vw, 44px)',
            marginBottom: 12,
          }}
        >
          Your new website — right here
        </h2>
        <p
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: 16,
            marginBottom: 28,
            maxWidth: 520,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          This is the actual site we&apos;ve built for Sure-Lock. Click around, scroll through it — this is exactly what
          your customers will see.
        </p>
        <a
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="sl-btn-primary"
          style={{ fontSize: 14, padding: '11px 22px', textDecoration: 'none' }}
        >
          ↗ Open in new tab
        </a>
      </div>

      {/* Browser chrome */}
      <div style={{ background: '#1a3244' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 32px 0' }}>
          <div
            style={{
              background: '#0d1f2d',
              borderRadius: '10px 10px 0 0',
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div style={{ display: 'flex', gap: 6 }}>
              {['#ff5f57', '#ffbd2e', '#28c840'].map((c) => (
                <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
              ))}
            </div>
            <div
              style={{
                flex: 1,
                background: 'rgba(255,255,255,0.08)',
                borderRadius: 6,
                padding: '6px 14px',
                fontSize: 12,
                color: 'rgba(255,255,255,0.5)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ opacity: 0.5 }}>
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              techlani.com/concepts/surelockparaparaumu
            </div>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--teal)', fontSize: 12, textDecoration: 'none', whiteSpace: 'nowrap', fontWeight: 500 }}
            >
              Open ↗
            </a>
          </div>

          <div style={{ position: 'relative', background: 'white', overflow: 'hidden', height: 680 }}>
            {!iframeBlocked ? (
              <iframe
                ref={iframeRef}
                src={DEMO_URL}
                style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                title="Sure-Lock Self Storage — New Website Demo"
                loading="lazy"
                onError={() => setIframeBlocked(true)}
              />
            ) : (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'var(--cream)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 16,
                  textAlign: 'center',
                  padding: 40,
                }}
              >
                <div style={{ fontSize: 48 }}>🔒</div>
                <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--navy)' }}>Preview blocked by browser</div>
                <div style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 400 }}>
                  Some websites prevent embedding. Open the demo directly in a new tab to see the full site.
                </div>
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sl-btn-primary"
                  style={{ textDecoration: 'none', fontSize: 15, padding: '13px 28px' }}
                >
                  Open Demo Site →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ background: '#1a3244', padding: '24px 40px 52px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {[
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <rect x="5" y="2" width="14" height="20" rx="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                  ),
                  label: 'Fully mobile responsive',
                },
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  ),
                  label: 'Loads in under 2 seconds',
                },
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                    </svg>
                  ),
                  label: 'Local SEO ready',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', fontSize: 13 }}
                >
                  {item.icon}
                  {item.label}
                </div>
              ))}
            </div>
            <button
              onClick={() => go('pricing')}
              className="sl-btn-primary"
              style={{ fontSize: 14, padding: '11px 22px' }}
            >
              See Pricing →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page Component ──────────────────────────────────────────────────────

const TABS: { id: SectionId; label: string; highlight?: boolean }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'compare', label: 'Before & After' },
  { id: 'features', label: "What's Included" },
  { id: 'process', label: 'How It Works' },
  { id: 'demo', label: '✦ Live Demo', highlight: true },
  { id: 'pricing', label: 'Pricing' },
];

export default function SureLockPitchPage() {
  const [active, setActive] = useState<SectionId>('overview');

  const go = (id: SectionId) => {
    setActive(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="sl-root">
        {/* NAV */}
        <nav className="sl-nav">
          <div className="sl-nav-logo">
            Sure<span>Lock</span> — New Site Demo
          </div>
          <div className="sl-nav-tabs">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                className={`sl-nav-tab${active === tab.id ? ' active' : ''}`}
                onClick={() => go(tab.id)}
                style={tab.highlight && active !== tab.id ? { color: 'var(--teal)' } : undefined}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <button className="sl-nav-cta" onClick={() => go('pricing')}>
            See Pricing →
          </button>
        </nav>

        {/* SECTIONS */}
        {active === 'overview' && <OverviewSection go={go} />}
        {active === 'compare' && <CompareSection go={go} />}
        {active === 'features' && <FeaturesSection go={go} />}
        {active === 'process' && <ProcessSection />}
        {active === 'demo' && <DemoSection go={go} />}
        {active === 'pricing' && <PricingSection />}

        {/* FOOTER */}
        <footer className="sl-footer">
          <div className="sl-footer-note">
            Prepared exclusively for Sure-Lock Self Storage, Paraparaumu · Not for redistribution
          </div>
          <div className="sl-footer-logo">
            Sure<span>Lock</span> — New Site Proposal
          </div>
        </footer>
      </div>
    </>
  );
}
