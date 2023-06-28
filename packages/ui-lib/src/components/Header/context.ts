import { createContext, ElementType } from "react";

export const HeaderContext = createContext<{ linkComponent: ElementType }>({ linkComponent: "a" });
