"use strict";
function getElementWidth(content, padding, border) {
  content = Number(content);
  padding = Number(padding);
  border = Number(border);
  const perimet = content + 2 * (padding + border);
  console.log(perimet);
}
