import { expect, test } from "vitest";
import { Slug } from "./slug";


test('it should be ab le to create a new slug fro text', () => {
  const slug = Slug.createFromText('Example question title')

  expect(slug.value).toBe('example-question-title')
})