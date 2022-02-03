
import Link from 'next/link'
import style from './Layout.module.scss';
import classNames from 'classnames';

export const Layout: React.FC = ({ children }) => {

    return (
        <div className='screen'>
            <div className='crt'>
            <div className={classNames(style.Layout)}>
                <div className="scanline"></div>
                <header>
                    <nav>
                        <ol className={style.NavBar}>
                            <li className='crt-color'>
                                <Link href="/">
                                    <a>juliankrieger.dev</a>
                                </Link>
                            </li>
                            -
                            <li>
                                <Link href="/blog">
                                    <a>Blog</a>
                                </Link>
                            </li>
                            -
                            <li>
                                <Link href="/freelancing">
                                    <a>Freelancing</a>
                                </Link>
                            </li>
                            -
                            <li>
                                <Link href="/publications">
                                    <a>Publications</a>
                                </Link>
                            </li>
                            -
                            <li>
                                <Link href="/books">
                                    <a>Books</a>
                                </Link>
                            </li>
                            -
                            <li>
                                <Link href="/resume">
                                    <a>Resume</a>
                                </Link>
                            </li>
                        </ol>
                    </nav>
                </header>
                <div className={style.content}>
                    {children}
                </div>
                <footer className={style.footer}>
                    <a className="soc" href="https://github.com/juliankrieger" title="GitHub">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>

                    <a className="soc" href="https://www.linkedin.com/in/julian-krieger-29b0b4164/" title="Linkedin"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                    </svg>
                    </a>

                    <a href="mailto:julian.krieger@me.com">julian.krieger@me.com
                    </a>

                    <b>opinions are my own
                    </b>
                </footer>

            </div>
        </div>
        </div>

    )
}