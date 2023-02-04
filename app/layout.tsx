"use client";

import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StudyProgram from "@/components/StudyProgram";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head />

        <body>
          <ChakraProvider>
            <Navbar />
            {children}
            <StudyProgram />
            <Footer />
          </ChakraProvider>
        </body>
      </html>
    </>
  );
}
