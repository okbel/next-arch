export default function Home({}) {
  return (
    <div>
      <h2>Search:</h2>
      <div>Same output.</div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { res } = ctx;
  // DO SOMETHING INTERNAL WITH PARAMS
  // Setitng the right catching headers
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
  return { props: {} };
}
