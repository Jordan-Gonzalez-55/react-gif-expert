import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Purebas en <GiftItem />", () => {
  const title = "Saitama";
  const url = "https://media.giphy.com/media/l4qR5hjZt8yFv3";
  test("debe hacer match con el snaptshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
});
