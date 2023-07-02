import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.cardBorder};
  display: flex;
  flex-direction: row;
  flex: initial;
  justify-content: space-between;
  min-width: 210px;
  max-width: 60vw;
  border-radius: 5px;
  cursor: text;
  font-size: 0.875rem;
  height: 32px;
`;

const Placeholder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex: initial;
  padding: 0px;
  gap: 12px;
  & > svg {
    margin-left: 8px;
    color: #888;
  }
`;

const Text = styled.span`
  color: #888;
`;

const Command = styled.div`
  margin-right: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex: initial;
  gap: 0px;
`;

const Kbd = styled.kbd`
  font-size: 0.75rem;
  min-width: var(--geist-gap);
  padding: 0;
  line-height: 20px;
  padding-left: 6px !important;
  padding-right: 6px !important;
  background-color: #111;
  border: 1px solid hsla(0, 0%, 100%, 0.14);
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.nav.dropdownBoxShadow};
  display: inline-block;
  text-align: center;
  border-radius: 5px;
`;
const Search = (props: any) => {
  return (
    <Wrapper {...props}>
      <Placeholder>
        <MagnifyingGlassIcon height="18px" width="18px" />
        <Text>Search...</Text>
      </Placeholder>
      <Command>
        <Kbd>⌘ K</Kbd>
      </Command>
    </Wrapper>
  );
};

export default Search;
