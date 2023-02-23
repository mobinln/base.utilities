export default function generateQuery(url: string, params?: any) {
  const urlObj = new URL(url);

  for (const k in params) {
    if (params[k] !== undefined && params[k] !== null && params[k] !== "") {
      urlObj.searchParams.append(k, params[k]);
    }
  }

  const entries: any = {};
  for (let [k, v] of urlObj.searchParams) {
    entries[k] = v;
  }

  return { query: urlObj.searchParams.toString(), entries, url: urlObj.href };
}
