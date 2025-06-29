import { Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledSwatch = styled(Button)(({ selected }) => ({
  width: 40,
  height: 40,
  minWidth: "unset",
  borderRadius: "50%",
  margin: "0 8px",
  border: selected ? "2px solid #000" : "1px solid #ddd",
  padding: 0,
  transition: "transform 0.2s",
  "&:hover": { transform: "scale(1.1)" }
}));

const ColorSwatch = ({ selected, onClick, sx, ...props }) => (
  <StyledSwatch selected={selected ? 1 : 0} onClick={onClick} sx={sx} {...props} />
);

export default ColorSwatch;
