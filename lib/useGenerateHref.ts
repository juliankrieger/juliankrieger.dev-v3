import { useRouter } from "next/router";

export const useGenerateHref = () => {
    const router = useRouter();


    const generateHref = (href: string, enableCRT?: boolean) => {

        const query = router.query ?? {};

        const obj = {
            pathname: href,
            query: {
                ...query
            }
        }

        if(enableCRT) {
            // @ts-ignore
            obj.query.crt = true;
        } else if(enableCRT  === false && obj.query.crt) {
            delete obj.query.crt;
        }
        return obj;
    }

    return generateHref;
}