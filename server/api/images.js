export default async (req, res) => {
  const data = await $fetch("https://jsonplaceholder.typicode.com/photos");

  res.writeHead(200, { "Content-type": "application/json" });
  res.write(JSON.stringify(data));
  res.end();
};
