import Text from "../../components/Text/Text";

it("renders correctly", () => {
  expect(<Text>apart</Text>).toMatchInlineSnapshot(`
    <styled.div
      color="text"
      ellipsis={false}
      fontSize="16px"
      small={false}
    >
      apart
    </styled.div>
  `);
});
