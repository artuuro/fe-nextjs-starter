import { Component } from "react";
import Link from "next/link";
import { Container, Typography, Breadcrumbs } from "@material-ui/core";
import { Config } from "../lib";
import css from "../less";

class Footer extends Component {
    
    getDate() {
        const date = new Date();
        return date.getFullYear();
    }

    render() {
        return (
            <Container className={css.footer} >
                <Breadcrumbs aria-label="breadcrumb" separator="|">
                    <Link href="#">
                        <a color="inherit">
                            Agencies
                        </a>
                    </Link>
                    <Link href="#">
                        <a color="inherit">
                            Terms of Service
                        </a>
                    </Link>
                    <Link href="#">
                        <a color="inherit">
                            FAQ
                        </a>
                    </Link>
                </Breadcrumbs>
                <Typography variant="caption" component="p" >
                {this.getDate()} &copy; { Config.title }, All rights reserved.
                </Typography>
            </Container>
            
        );
    }
}

export default Footer;