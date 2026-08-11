import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

test("contains the verified course offer and direct contacts", () => {
  assert.match(page, /326,70 €/);
  assert.match(page, /34663781952/);
  assert.match(page, /taller@sanudo\.cat/);
  assert.match(page, /Francesc Ferrer i Guàrdia, 13/);
});

test("contains real imagery and responsive protections", () => {
  for (const image of ["class.webp", "cutting.webp", "product.webp", "tools.webp"]) {
    assert.match(page, new RegExp(image.replace(".", "\\.")));
  }
  assert.match(css, /@media \(max-width: 700px\)/);
  assert.match(css, /overflow-wrap: anywhere/);
  assert.match(css, /mobile-cta/);
});
