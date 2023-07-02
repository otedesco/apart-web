import { styled } from "styled-components";
import Logo from "../Svg/Icons/Logo";
import { MenuItem, SubMenuLayout } from "./components/Menu/types";

const CalloutHeading = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 16px;
  margin-bottom: 7px;
`;

const CalloutText = styled.p`
  color: var(--mauve-4);
  font-size: 14px;
  line-height: 1.3;
`;

const EmphatizedContent = styled.a`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, hsl(272 51% 54%) 0%, hsl(226 70% 55.5%) 100%);
  border-radius: 6px;
  padding: 25px;
  text-decoration: none;
  outline: none;
  user-select: none;
  :focus {
    box-shadow: 0 0 0 2px hsl(250 46.8% 38.9%);
  }
`;

const Emphatized = (
  <EmphatizedContent href="/">
    <Logo gradient />
    <CalloutHeading>Radix Primitives</CalloutHeading>
    <CalloutText>Unstyled, accessible components for React.</CalloutText>
  </EmphatizedContent>
);

export const links: MenuItem[] = [
  {
    label: "Features",
    description: "Some description needed for grouping links on small devices",
    external: false,
    layout: SubMenuLayout.Emphatized,
    items: [
      { href: "/", Component: Emphatized },
      {
        label: "Stitches",
        description: "CSS-in-JS with best-in-class developer experience.",
        href: "/",
      },
      {
        label: "Colors",
        description: "Beautiful, thought-out palettes with auto dark mode.",
        href: "/",
      },
      {
        label: "Icons",
        description: "A crisp set of 15x15 icons, balanced and consistent.",
        href: "/",
      },
    ],
  },
  {
    label: "Docs",
    description: "Some description needed for grouping links on small devices",
    items: [
      {
        label: "Introduction",
        description: "Build high-quality, accessible design systems and web apps.",
        href: "/",
      },
      {
        label: "Getting started",
        description: "A quick tutorial to get you up and running with Radix Primitives.",
        href: "/",
      },
      {
        label: "Styling",
        description: "Unstyled and compatible with any styling solution.",
        href: "/",
      },
      {
        label: "Animation",
        description: "Use CSS keyframes or any animation library of your choice.",
        href: "/",
      },
      {
        label: "Accessibility",
        description: "Tested in a range of browsers and assistive technologies.",
        href: "/",
      },
      {
        label: "Releases",
        description: "Radix Primitives releases and their changelogs.",
        href: "/",
      },
    ],
  },
  { label: "Templates", description: "Some description needed for grouping links", href: "/" },
  { label: "Integrations", description: "Some description needed for grouping links", href: "/" },
  { label: "Customers", description: "Some description needed for grouping links", href: "/" },
  { label: "Enterprise", description: "Some description needed for grouping links", href: "/" },
  { label: "Pricing", description: "Some description needed for grouping links", href: "/" },
];
