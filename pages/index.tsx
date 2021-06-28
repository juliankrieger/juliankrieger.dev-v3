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
          </li>
        </ul>
        <ul>
          <li>- Backend Development:
            <ul> - Node.js, Rust, Python, C#</ul>
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
        I enjoy learning about new programming languages in my free time.
        Recently, I've been infatuates with <a href={"https://www.rust-lang.org/"}>Rust</a>.
      </div>
      <div>
        <h5>### Noteable Projects</h5>
        - I wrote a <b>systemd</b> driver for a specific type of SNES Controller from iBuffalo. You can find it <a href={"https://github.com/juliankrieger/iBuffalo-Snes-Controller-Driver"}>here</a>.
        <br/>
        - I use a Durgod Hades Keyboard to develop. Making it work it with german Umlate was not easy, so <a href={"https://github.com/juliankrieger/Durgod-Hades-68-German-Umlaute"}>here's</a> my profile for it.
        <br/>
        - If you play Call of Duty: Warzone and it keeps crashing, try <a href={"https://github.com/juliankrieger/CODWarzoneCrashFixer"}>this</a> tool.
      </div>
    </div>
  )
}
