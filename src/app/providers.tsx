// app/providers.tsx
"use client";

import { SessionProvider } from "next-auth/react";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    brand: {
      background: {
        DEFAULT: "#000000",
        secondary: "#050505",
      },
      paper: {
        700: "#121212",
        600: "#232323",
        500: "#181818",
        400: "#313131",
      },
      white: "#FEFFFE",
      purple: "#531640",
      primary: "#1ED760",
      slate: "#1e293b",
      gray: {
        DEFAULT: "#B3B3B3",
        dark: "#4D4D4D",
        light: "#AEAEAE",
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
    </SessionProvider>
  );
}
