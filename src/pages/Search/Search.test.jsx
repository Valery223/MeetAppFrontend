import { render, screen } from "@testing-library/react";
import { Search } from "./Search";

test("отображает компонент Search", () => {
  render(<Search />);

  // Проверяем, что компонент отображается
  const linkElement = screen.getByText(/Loading searchData.../i);
  const searchComponent = screen.queryByText("Личная информация");
  const alternateText = screen.queryByText("");

  expect(linkElement).toBeInTheDocument();
});
