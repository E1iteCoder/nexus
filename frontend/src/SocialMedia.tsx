import React from "react";
import { Container, Typography, Link, Grid } from "@mui/material";
import { Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import "../styles/SocialMedia.css";

export default function SocialMedia(): JSX.Element {
    return (
        <Container>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{
                    padding: 4,
                    borderBottom: "1px solid #ddd",
                }}
            >
                <Grid item xs={12} sm={6} md={6} lg={6} className="social-text">
                    <Typography variant="body1">
                        Get connected with us on social networks:
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6} className="social-icons">
                    <Link href="http://twitter.com/nexusread" target="_blank" className="social-link">
                        <Twitter />
                    </Link>
                    <Link href="https://www.instagram.com/nexusread/" target="_blank" className="social-link">
                        <Instagram />
                    </Link>
                    <Link href="https://www.linkedin.com/company/nexusread/" target="_blank" className="social-link">
                        <LinkedIn />
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
}