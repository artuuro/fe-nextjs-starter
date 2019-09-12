import Link from 'next/link';
import { Component, Fragment } from 'react';
import { withRouter } from 'next/router';
import css from '../less';

class Navigation extends Component {
    links;
    currentPage;

    constructor(props) {
        super(props);
        this.links = props.links || [];
    }

    render() {
        return (
            <Fragment>
                <div>
                    {
                        this.links.map((link) =>
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