
import style from './CRTMonitor.module.scss';
import classNames from 'classnames';
import { useRouter } from 'next/router';

export const CRTMonitor: React.FC = ({ children }) => {

    const router = useRouter();

    return (
        <div className={classNames( style.CRTMonitor, {
            [style['crt-enabled']]: router.query.crt
        })}>
            <div className={style.screen}>
                <div className={style.crt}>
                    <div className={style.scanline}></div>
                        {children}
                    </div>
                </div>
            </div>
    )
}