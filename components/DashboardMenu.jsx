import css from "../less";
import { Navigation } from "./";

export default () => {

    return (
        <div className={css.dashboardMenu}>
            <Navigation links={[
                  { url: 'agencies', as: 'Agencies' },
                  { url: 'signup', as: 'Create Account' }
                ]}/>
        </div>
    );
};