---
layout: default
title: Coen Winchester Guitar Lessons
---

<section class="hero-section">
    <img src="/assets/img/hero.png" alt="Guitar teacher on stage">
    <h1>Guitar Lessons That Inspire</h1>
    <p>Unlock your musical potential with expert lessons for all ages and skill levels.<br>Online & In-Person |
        Friendly | Professional</p>
    <a href="mailto:coenwinchester.guitar@gmail.com?subject=Guitar%20Lesson%20Booking" class="btn-primary">Book a
        Lesson</a>
    <!-- <div class="contact">Call/Text: <a href="tel:0411111222">0411 111 222</a></div> -->
</section>

<section class="welcome-section">
    <h2>Welcome to my website!</h2>
    <div class="welcome-wrapper">
        <div class="welcome-text">

            <p>I'm Coen Winchester, a passionate guitar teacher based in Springfield. Whether you're a complete
                beginner
                or an advanced player, I offer lessons designed to help you reach your musical goals. Join me for a
                fun,
                supportive, and inspiring learning experience!</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet lacinia lacus, eget aliquet
                ipsum. Nam quis quam eget risus vestibulum facilisis. Quisque bibendum faucibus nunc, vel laoreet
                nunc
                volutpat eu. Sed quis massa vitae ante tristique sagittis. Quisque tellus enim, vehicula a neque
                venenatis, pulvinar pulvinar magna. Aliquam interdum bibendum mollis. Suspendisse egestas rhoncus
                ultricies. Nullam egestas odio mauris, sit amet dapibus lectus ultrices et. Aliquam malesuada
                pellentesque libero eget mattis. Morbi egestas faucibus urna, at consequat risus.</p>


        </div>

        <div class="posts-list">
            <h3>Latest Articles</h3>
            <ul>
            {% for post in site.posts %}
                <li>
                    <a href="{{ post.url | relative_url }}">
                        {% if post.hero_image %}
                            <img src="{{ post.hero_image }}" alt="{{ post.title }}" style="max-width:100px;vertical-align:middle;">
                        {% endif %}
                        {{ post.title }}
                    </a>
                </li>
            {% endfor %}
            </ul>
        </div>

        <!-- <img src="assets/img/yt1.png" class="welcome-image" alt="Guitar Tutorial 1"> -->
    </div>
</section>



<section id="pricing" class="features">
    <div class="feature">
        <h3>Private Lessons</h3>
        <p>One-on-one 60-minute sessions tailored to your goals. <br><strong>$55 per lesson</strong></p>
    </div>
    <div class="feature">
        <h3>Online Lessons</h3>
        <p>Learn from anywhere via Zoom or Skype. <br><strong>$45 per lesson</strong></p>
    </div>
    <div class="feature">
        <h3>Group Lessons</h3>
        <p>Up to 4 students per group. <br><strong>$25 per person / hour</strong></p>
    </div>
    <div class="feature">
        <h3>Guitar Setup & Advice</h3>
        <p>Help with buying, setting up, and maintaining your instrument.</p>
    </div>
</section>

<section id="videos">
    <div class="youtube-embed">
        <div class="youtube-thumb-wrapper" data-video="VIDEO_ID_1">
            <img src="assets/img/yt1.png" class="youtube-thumb" alt="Guitar Tutorial 1">
            <div class="play-icon"></div>
        </div>
        <div class="youtube-thumb-wrapper" data-video="VIDEO_ID_2">
            <img src="assets/img/yt2.png" class="youtube-thumb" alt="Guitar Tutorial 2">
            <div class="play-icon"></div>
        </div>
        <div class="youtube-thumb-wrapper" data-video="VIDEO_ID_3">
            <img src="assets/img/yt3.png" class="youtube-thumb" alt="Guitar Tutorial 3">
            <div class="play-icon"></div>
        </div>
        <div class="youtube-thumb-wrapper" data-video="VIDEO_ID_4">
            <img src="assets/img/yt4.png" class="youtube-thumb" alt="Guitar Tutorial 4">
            <div class="play-icon"></div>
        </div>
    </div>
    <div id="youtube-overlay">
        <div class="overlay-content">
            <button class="close-btn" aria-label="Close">&times;</button>
            <iframe src="" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
    <script>
        const thumbs = document.querySelectorAll('.youtube-thumb-wrapper');
        const overlay = document.getElementById('youtube-overlay');
        const iframe = overlay.querySelector('iframe');
        const closeBtn = overlay.querySelector('.close-btn');
        thumbs.forEach(thumb => {
            thumb.addEventListener('click', () => {
                const vid = thumb.getAttribute('data-video');
                iframe.src = `https://www.youtube.com/embed/${vid}?autoplay=1`;
                overlay.classList.add('active');
            });
        });
        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('active');
            iframe.src = '';
        });
        overlay.addEventListener('click', e => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
                iframe.src = '';
            }
        });
    </script>
</section>

<section id="faq">
    <h2>Frequently Asked Questions</h2>
    <div class="accordion">
        <details>
            <summary>What ages do you teach?</summary>
            <p>I teach students of all ages, from children to adults.</p>
        </details>
        <details>
            <summary>Do I need my own guitar?</summary>
            <p>It's best to have your own guitar, but I can provide advice on purchasing or renting one.</p>
        </details>
        <details>
            <summary>Can I do lessons online?</summary>
            <p>Yes! Online lessons are available via Zoom or Skype.</p>
        </details>
        <details>
            <summary>What styles do you teach?</summary>
            <p>I teach a range of styles including rock, pop, blues, jazz, and classical.</p>
        </details>
        <details>
            <summary>How do I book a lesson?</summary>
            <p>Just email me or call/text the number above to arrange your first lesson.</p>
        </details>
    </div>
</section>