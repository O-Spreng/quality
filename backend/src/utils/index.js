exports.generateUserId = () => {
  const seed = Math.floor(Math.random() * 1000);
  const now = Date.parse(new Date().toString());
  return +`${seed}${now}`;
}
