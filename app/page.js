async function getServerSideProps() {
  const res = await fetch("http://127.0.0.1:8000/api/category");
  const products = await res.json();
  console.log(products)
  return {
    props: { products },
  };
}

export default function Home({ products = [] }) {
  console.log(products);
  return (
    <div>
      <h1>Pelupa Products</h1>
      <ul>
        {products?.map(p => <li key={p.id}>{p.name}</li>)}
      </ul>
    </div>
  );
}
