import Link from 'next/link';
import { Component, Fragment } from 'react';
import { withRouter } from 'next/router';
import css from '../less';

type Links = { 
    router: any,
    links: { 
        url: string; 
        as: string; 
    }[]; 
}

class Navigation extends Component<Links> {
    links: Array<any>;
    currentPage: string;

    constructor(props: Links) {
        super(props);
        this.links = props.links || [];
    }

    render() {
        return (
            <Fragment>
                <div>
                    {
                        this.links.map((link: any) =>
                            <Link key={link.url} href={link.url}>
                                <a className={`${ this.props.router.route == `/${link.url}` ? css.active : '' }`}>{ link.as }</a>
                            </Link>
                        )
                    }
                </div>
            </Fragment>
        );
    }
}

export default withRouter(Navigation);