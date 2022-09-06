const wordCondenser = /(?:^|\s)\S(?:(\s+)\S)(?:\1\S)*(?:$|\s)/g;
const spaceCondenser = /\s{2,}/g;

const spamPhrases = [
  "free money",
  "work from home",
  "stock alert",
  "dear friend",
];

const condenseSpaces = (msg) => {
  return msg
    .replace(wordCondenser, (m) => m.replace(/\s+/g, ""))
    .replace(spaceCondenser, " ");
};

const blacklistRegexps = [
  /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i,
  /(?:^|\s)w[o0]rk fr[o0]m h[o0]m[e3](?:$|\s)/i,
  /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i,
  /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i,
];

const isSpam = (msg) => {
  const spacesCondensed = condenseSpaces(msg);

  return blacklistRegexps.some((re) => re.test(spacesCondensed));
};
