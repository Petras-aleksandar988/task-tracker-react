import Button from "./Button";

export default function Header({ title, onAdd, btnCloseAdd }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        propsClick={onAdd}
        color={"white"}
        backgroundColor={btnCloseAdd ? "red" : "green"}
        text={btnCloseAdd ? "Close" : "Add"}
      />
    </header>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};
