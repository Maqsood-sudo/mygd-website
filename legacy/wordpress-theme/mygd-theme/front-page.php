<?php
get_header();
?>

<!-- NAV -->
    <nav id="nav">
      <a href="#" class="nav-brand">
        <div class="nav-logo"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/MYGD-Logo.png" alt="MYGD Logo" /></div>
        <span class="nav-title">MYGD</span>
      </a>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#programs">Programs</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#contact" class="nav-cta">Get Involved</a></li>
      </ul>
    </nav>

    <!-- HERO -->
    <div class="hero">
      <div class="hero-inner">
        <div>
          <div class="hero-eyebrow">✦ Rochester Hills, Michigan</div>
          <h1>Sowing the<br /><span>Seeds</span> of<br />Tomorrow</h1>
          <p class="hero-sub">
            Building community, faith, and leadership among Muslim youth across
            Greater Detroit through meaningful programs, events, and lasting
            connection.
          </p>
          <div class="hero-btns">
            <a href="#programs" class="btn btn-gold">Explore Programs →</a>
            <a href="#contact" class="btn btn-outline">Get in Touch</a>
          </div>
        </div>
        <div class="prayer-card">
          <div class="pc-head">
            <h3>Today's Prayer Times</h3>
            <span class="pc-date">IAGD · Rochester Hills</span>
          </div>
          <div class="prayer-row">
            <span class="prayer-name">Fajr</span
            ><span class="prayer-time">5:15 AM</span>
          </div>
          <div class="prayer-row">
            <span class="prayer-name">Dhuhr</span
            ><span class="prayer-time">1:30 PM</span>
          </div>
          <div class="prayer-row now">
            <span class="prayer-name">Asr</span
            ><span class="prayer-time">5:45 PM</span>
          </div>
          <div class="prayer-row">
            <span class="prayer-name">Maghrib</span
            ><span class="prayer-time">8:12 PM</span>
          </div>
          <div class="prayer-row">
            <span class="prayer-name">Isha</span
            ><span class="prayer-time">9:45 PM</span>
          </div>
          <div class="pc-footer">
            879 W Auburn Rd, Rochester Hills, MI 48307
          </div>
        </div>
      </div>
    </div>

    <!-- ABOUT -->
    <section class="sec" id="about">
      <div class="about-grid">
        <div class="about-img-wrap">
          <div class="about-img-block">
            <div class="about-img-arabic">مسجد</div>
          </div>
          <div class="about-float">
            <div class="af-icon">🤝</div>
            <div>
              <div class="af-label">Community</div>
              <div class="af-val">Growing Together</div>
            </div>
          </div>
        </div>
        <div class="about-text">
          <div class="sec-label">Who We Are</div>
          <h2 class="sec-title">Muslim Youth<br />of Greater Detroit</h2>
          <p>
            MYGD is a vibrant community of young Muslims rooted at the Islamic
            Association of Greater Detroit. We create spaces where youth can
            grow in faith, build lasting friendships, and develop leadership
            skills that shape their futures.
          </p>
          <p>
            From qiyams and bonfires to educational programs and community
            service, we're committed to empowering the next generation with
            purpose and belonging.
          </p>
          <div class="pillars">
            <div class="pillar">
              <div class="pillar-dot"></div>
              Faith & Spirituality
            </div>
            <div class="pillar">
              <div class="pillar-dot"></div>
              Community Service
            </div>
            <div class="pillar">
              <div class="pillar-dot"></div>
              Youth Leadership
            </div>
            <div class="pillar">
              <div class="pillar-dot"></div>
              Brotherhood & Sisterhood
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROGRAMS -->
    <div class="prog-section" id="programs">
      <div class="prog-inner">
        <div class="prog-header">
          <div>
            <div class="sec-label">What We Offer</div>
            <h2 class="sec-title">Programs &<br />Opportunities</h2>
            <p class="sec-sub">
              A mix of free and paid programs designed to educate, connect, and
              inspire.
            </p>
          </div>
          <div class="prog-tabs">
            <button class="prog-tab active">All</button>
            <button class="prog-tab">Free</button>
            <button class="prog-tab">Paid</button>
          </div>
        </div>
        <div class="prog-grid">
          <div class="prog-card">
            <div class="prog-thumb pc1">
              <span>📖</span><span class="prog-tag">Free</span>
            </div>
            <div class="prog-body">
              <h4>Weekly Halaqas</h4>
              <p>
                Regular circles of knowledge and reflection, building
                understanding of our deen together.
              </p>
              <div class="prog-meta">
                <span>📅 Weekly</span><span>📍 IAGD</span>
              </div>
            </div>
          </div>
          <div class="prog-card">
            <div class="prog-thumb pc2">
              <span>🏕️</span><span class="prog-tag">Paid</span>
            </div>
            <div class="prog-body">
              <h4>Youth Retreats</h4>
              <p>
                Weekend getaways focused on personal growth, team building, and
                spiritual rejuvenation.
              </p>
              <div class="prog-meta">
                <span>📅 Seasonal</span><span>👥 Limited</span>
              </div>
            </div>
          </div>
          <div class="prog-card">
            <div class="prog-thumb pc3">
              <span>🎤</span><span class="prog-tag">Free</span>
            </div>
            <div class="prog-body">
              <h4>Speaker Series</h4>
              <p>
                Hear from inspiring scholars, leaders, and professionals sharing
                their journeys.
              </p>
              <div class="prog-meta">
                <span>📅 Monthly</span><span>📍 IAGD</span>
              </div>
            </div>
          </div>
          <div class="prog-card">
            <div class="prog-thumb pc4">
              <span>🌙</span><span class="prog-tag">Free</span>
            </div>
            <div class="prog-body">
              <h4>Qiyam Nights</h4>
              <p>
                Late-night worship gatherings that strengthen our connection
                with Allah and each other.
              </p>
              <div class="prog-meta">
                <span>📅 Monthly</span><span>🕐 Late Night</span>
              </div>
            </div>
          </div>
          <div class="prog-card">
            <div class="prog-thumb pc5">
              <span>🤲</span><span class="prog-tag">Free</span>
            </div>
            <div class="prog-body">
              <h4>Community Service</h4>
              <p>
                Give back to Greater Detroit through organized volunteering and
                outreach events.
              </p>
              <div class="prog-meta">
                <span>📅 Bi-weekly</span><span>📍 Various</span>
              </div>
            </div>
          </div>
          <div class="prog-card">
            <div class="prog-thumb pc6">
              <span>⚽</span><span class="prog-tag">Paid</span>
            </div>
            <div class="prog-body">
              <h4>Sports Leagues</h4>
              <p>
                Competitive and recreational sports for brothers and sisters —
                hoops, soccer & more.
              </p>
              <div class="prog-meta">
                <span>📅 Seasonal</span><span>👥 Teams</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- EVENTS -->
    <section class="sec" id="events">
      <div class="sec-label">Get Involved</div>
      <h2 class="sec-title">Past & Upcoming Events</h2>
      <p class="sec-sub">
        From bonfires to Friendsgiving dinners — we've built memories, and
        there's plenty more ahead.
      </p>
      <div class="events-banner">
        <div>
          <h3>Don't Miss What's <span>Coming Next.</span></h3>
          <p>
            Our events bring the community together for fellowship, fun, and
            faith — whether it's a cozy bonfire, a Sisters' Friendsgiving, or a
            late-night qiyam, there's always something for you.
          </p>
          <a href="#contact" class="btn btn-gold">Stay Updated →</a>
        </div>
        <div class="ev-mini-grid">
          <div class="ev-mini">
            <div class="ev-emoji">🔥</div>
            <div class="ev-name">Bonfires</div>
            <div class="ev-desc">Outdoor s'mores & good talks</div>
          </div>
          <div class="ev-mini">
            <div class="ev-emoji">🍽️</div>
            <div class="ev-name">Friendsgiving</div>
            <div class="ev-desc">Sisters' annual gathering</div>
          </div>
          <div class="ev-mini">
            <div class="ev-emoji">🌙</div>
            <div class="ev-name">Qiyams</div>
            <div class="ev-desc">Night prayer & reflection</div>
          </div>
          <div class="ev-mini">
            <div class="ev-emoji">🏀</div>
            <div class="ev-name">Game Nights</div>
            <div class="ev-desc">Sports, fun & competition</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <div class="contact-section" id="contact">
      <div class="contact-inner">
        <div>
          <div class="sec-label">Reach Out</div>
          <h2 class="sec-title">Let's<br />Connect</h2>
          <p class="sec-sub">
            Have questions, ideas, or want to get involved? We'd love to hear
            from you.
          </p>
          <div class="contact-info-block">
            <div class="cib">
              <div class="ci-icon">📍</div>
              <div>
                <div class="ci-label">Location</div>
                <div class="ci-val">
                  879 W Auburn Rd, Rochester Hills, MI 48307
                </div>
              </div>
            </div>
            <div class="cib">
              <div class="ci-icon">✉️</div>
              <div>
                <div class="ci-label">Email</div>
                <div class="ci-val">brothersyd@iagd.net</div>
              </div>
            </div>
            <div class="cib">
              <div class="ci-icon">📱</div>
              <div>
                <div class="ci-label">Follow Us</div>
                <div class="ci-val">Instagram & YouTube</div>
              </div>
            </div>
          </div>
        </div>
        <div class="contact-form">
          <h3>Send Us a Message</h3>
          <div class="fg">
            <label>Your Name</label
            ><input type="text" placeholder="Full name" />
          </div>
          <div class="fg">
            <label>Email Address</label
            ><input type="email" placeholder="you@example.com" />
          </div>
          <div class="fg">
            <label>Message</label
            ><textarea
              placeholder="Share your question, idea, or how you'd like to get involved..."
            ></textarea>
          </div>
          <button class="form-btn">Send Message →</button>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <footer>
      <div class="foot-grid">
        <div>
          <div class="foot-brand-name">MYGD</div>
          <div class="foot-brand-sub">
            Muslim Youth of Greater Detroit — building community, faith, and
            leadership at IAGD in Rochester Hills.
          </div>
          <div class="foot-socials">
            <a href="#" class="fsoc">IG</a>
            <a href="#" class="fsoc">YT</a>
          </div>
        </div>
        <div class="foot-col">
          <div class="foot-col-title">Navigate</div>
          <a href="#about">About Us</a>
          <a href="#programs">Programs</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
        </div>
        <div class="foot-col">
          <div class="foot-col-title">Programs</div>
          <a href="#">Free Programs</a>
          <a href="#">Paid Programs</a>
          <a href="#">Upcoming</a>
        </div>
        <div class="foot-col">
          <div class="foot-col-title">Community</div>
          <a href="#">IAGD Masjid</a>
          <a href="#">Prayer Times</a>
          <a href="#">Volunteer</a>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© 2026 MYGD — Muslim Youth of Greater Detroit</span>
        <span class="foot-gold">Powered by Community ♥</span>
      </div>
    </footer>

<?php
get_footer();
?>
