export default function Home({ query = {} }) {
  // console.log(query);
  return (
    <div>
      <h2>Item </h2>
      <ul>
        {Object.keys(query).map((k) => (
          <li key={k}>{`${k} : ${query[k]}`}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { query = {}, res } = ctx;
  // DO SOMETHING INTERNAL WITH PARAMS
  console.log(query);
  // Setitng the right catching headers
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
  return { props: { query } };
}
