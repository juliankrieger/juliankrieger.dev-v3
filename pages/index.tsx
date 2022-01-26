import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.Home}>

      <main className={styles.main}>
        <h5 className={styles.title}></h5>
          <strong>Julian Krieger</strong>
          <br />
          <i>Fullstack Developer - Intern at Ergosign GmbH</i>
          <br />
          <p>==============</p>
      </main>
      <div>
        <h5>### Skills</h5>
        <ul>
          <li>- Frontend Development:
            <ul> - JavaScript, TypeScript</ul>
            <ul> - Vue.js v2 &amp; v3, Vuetify</ul>
            <ul> - React.js, Redux, Next.js, Gatsby</ul>
            <ul> - Shopify</ul>
          </li>
        </ul>
        <ul>
          <li>- Backend Development:
            <ul> - Node.js, Rust, Python, GO, C#</ul>
          </li>
        </ul>
        <ul>
          <li>- Deployment:
            <ul> - Docker, Netlify, Vercel</ul>
          </li>
        </ul>
      </div>
      <div>
        <h5>### About</h5>
        <p>I enjoy learning about new programming languages in my free time.
        Recently, I have been interested in <a href={"https://www.rust-lang.org/"}>Rust</a>.</p>
      </div>
      <div>
        <h5>### Noteable Projects</h5>
        - I wrote a <a href={"https://github.com/juliankrieger/iBuffalo-Snes-Controller-Driver"}><b>systemd</b> driver for a specific type of SNES Controller from iBuffalo.</a>.
        <br/>
        - I use an ANSI US 60% keyboard for development. Making it work it with German umlaute was not easy, so I created <a href={"https://github.com/juliankrieger/Durgod-Hades-68-German-Umlaute"}>a custom Hera profile for my Durgod Hades</a>
        <br/>
        - If you play Call of Duty: Warzone and it keeps crashing, try <a href={"https://github.com/juliankrieger/CODWarzoneCrashFixer"}>my COD:Warzone crashfixer tool</a>.
      </div>
    </div>
  )
}
