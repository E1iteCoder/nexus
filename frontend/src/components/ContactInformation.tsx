import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';



export default function ContactInformation(): JSX.Element {
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
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Typography variant="h6" fontWeight="bold" mb={4}>
                        Contact
                    </Typography>
                    <Typography>
                        <HomeIcon />
                        Pflugerville, TX 78660, US
                    </Typography>
                    <Typography>
                        <MailIcon />
                        Nexus1@gmail.com
                    </Typography>
                    <Typography>
                        <PhoneIcon />
                        +1 (512)-587-0501
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}
