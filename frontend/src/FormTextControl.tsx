import React from "react";
import { TextField, Container } from "@mui/material";
import "../styles/CreateForm.css";

interface Props {
    control: string;
    title: string;
    required?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export default function FormTextControl({
    control,
    title,
    required,
    onChange,
    value,
}: Props): JSX.Element {
    return (
        <Container className="form-container">
            <TextField
                fullWidth
                multiline
                rows={5}
                label={title}
                required={required}
                variant="outlined"
                placeholder={`Enter ${title}`}
                onChange={onChange}
                value={value}
            />
        </Container>
    );
}
