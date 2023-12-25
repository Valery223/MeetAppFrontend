import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Photo } from "./Photo";

test("renders the component correctly", () => {
  const { getByAltText, getByLabelText } = render(<Photo />);

  // Проверяем, что компонент рендерится без ошибок
  const component = getByAltText("Man on photo");
  expect(component).toBeInTheDocument();

  // Проверяем, что кнопки присутствуют и имеют правильные атрибуты
  const coldButton = getByLabelText("Cold face emoji button");
  const heartButton = getByLabelText("Heart eyes emoji button");
  expect(coldButton).toBeInTheDocument();
  expect(heartButton).toBeInTheDocument();
});
