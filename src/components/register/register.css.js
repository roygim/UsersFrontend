import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const TextFieldWrap = styled((props) => <TextField {...props} />)(
    ({ theme }) => `
        margin-bottom: 18px;
    `
);