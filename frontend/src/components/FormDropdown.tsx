import React from "react";
import { MenuItem, Select, TextField, Container } from "@mui/material";
import "../styles/CreateForm.css";

interface Props {
    title: string;
    control: string;
    options: { label: string; value: number }[];
    required?: boolean;
    value?: number | null;
    title2: string;
    control2: string;
    options2: { label: string; value: number }[];
    required2?: boolean;
    value2?: number | null;
    onChange: (value: number | null) => void;
    onChange2: (value: number | null) => void;
}

export default function FormDropdown({
    title,
    control,
    options,
    required,
    value,
    title2,
    control2,
    options2,
    required2,
    value2,
    onChange,
    onChange2,
}: Props): JSX.Element {
    return (
        <Container className="form-container">
            <div className="dropdown-container">
                <TextField
                    select
                    label={title}
                    value={value || ""}
                    required={required}
                    onChange={(e) => onChange(Number(e.target.value))}
                    fullWidth
                    variant="outlined"
                    className="labelContainer"
                    id="labelContainer1"
                >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    select
                    label={title2}
                    value={value2 || ""}
                    required={required}
                    onChange={(e) => onChange2(Number(e.target.value))}
                    fullWidth
                    variant="outlined"
                    className="labelContainer"
                    id="labelContainer2"
                >
                    {options2.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        </Container>
    );
}
