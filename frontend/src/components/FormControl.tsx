import React from "react";
import {
    Container,
    TextField,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import "../styles/CreateForm.css";

interface Props {
    title?: string;
    type: string;
    placeholder?: string;
    checkboxPlaceholder?: string;
    control: string;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeCheck?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checkboxChecked?: boolean;
    value?: string;
    showCheckbox?: boolean;
}

export default function FormControl({
    title,
    type,
    placeholder,
    checkboxPlaceholder,
    control,
    required,
    onChange,
    onChangeCheck,
    checkboxChecked,
    value,
    showCheckbox = false,
}: Props): JSX.Element {
    return (
        <Container className="form-container">
            <TextField
                fullWidth
                label={title}
                type={type}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                disabled={checkboxChecked}
                value={value}
            />

            {showCheckbox && (
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checkboxChecked}
                            onChange={onChangeCheck} // Use onChange prop for checkbox
                        />
                    }
                    label={checkboxPlaceholder}
                />
            )}
        </Container>
    );
}
