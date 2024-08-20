import { Box, Container } from "@mui/material";
import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const CommonContainer: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Container>
      <Box sx={{ bgcolor: "#242424" }}>{children}</Box>
    </Container>
  );
};

export default CommonContainer;
