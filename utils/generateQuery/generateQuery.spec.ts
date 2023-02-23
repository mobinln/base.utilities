import generateQuery from ".";

const sampleUrl = "https://sample.com/";

describe("Test generateQuery", () => {
  it("should return empty query, empty entries and only url if no params provided", () => {
    const resp = generateQuery(sampleUrl, {});

    expect(resp).toEqual({ query: "", entries: {}, url: sampleUrl });
  });

  it("should return url with query if one of params is false or 0", () => {
    const resp = generateQuery(sampleUrl, { page: 0, used: false });

    expect(resp).toEqual({
      query: "page=0&used=false",
      entries: { page: "0", used: "false" },
      url: sampleUrl + "?page=0&used=false",
    });
  });

  it("should return empty if one of params is undefine, '' or null", () => {
    const resp = generateQuery(sampleUrl, { a: null, b: 5, c: undefined, d: 0 });

    expect(resp).toEqual({
      query: "b=5&d=0",
      entries: { b: "5", d: "0" },
      url: sampleUrl + "?b=5&d=0",
    });
  });
});
