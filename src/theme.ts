import { extendTheme } from "@chakra-ui/react";

const BG_COLOR = "gray.600";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: () => ({
    body: {
      bg: BG_COLOR,
      color: "white",
    },
  }),
};

const theme = extendTheme({ config, styles });

export default theme;
