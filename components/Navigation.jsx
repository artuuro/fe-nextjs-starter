import Link from "next/link";
import { useRouter } from "next/router";
import css from "../less";

export default props => {
    const router = useRouter();
    return (
        <div>
            {
                props.links.map((link, index) => 
                    <Link key={index} href={ link.url }>
                        <a className={`${ router.pathname == `/${link.url}` ? css.active : '' }`} >{ link.as }</a>
                    </Link>
                )
            }
        </div>
    );
};