import React from "react";
import { Container, Grid, Typography } from "@mui/material";

export default function CompanyInfoColumn(): JSX.Element {
    return (
        <section style={{ display: "flex", justifyContent: "center space-between", padding: "16px", borderBottom: "1px solid #ddd" }}>
            <Container component="section" style={{ textAlign: "center", marginTop: "5px" }}>
                <Grid container marginTop="3">
                    <Grid item md={4} lg={4} xl={3} xs={12} className="mx-auto mb-4">
                        <Typography variant="h6" component="div" className="text-uppercase fw-bold mb-4">
                            Nexus
                        </Typography>
                        <Typography variant="body1">
                            Nexus is a startup company that focuses on elevated reading,
                            where people can mainstream their imagination as creators
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}
