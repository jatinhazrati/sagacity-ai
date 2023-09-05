"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("43dabf65-6917-47c1-96be-841760c84e9c");
  }, []);

  return null;
};