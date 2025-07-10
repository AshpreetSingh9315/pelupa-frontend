import axios from '@/lib/api';

export const metadata = {
  title: 'Pelupa Catgories',
  description: 'Premium products delivered to your door',
};

export default async function Products() {
  const res = await axios.get('/categories'); // must be absolute URL inside axios config
  const categories = res?.data;
console.log(categories)
  return (
    <div>
      <h1>Categories</h1>
      <pre>{JSON.stringify(categories, null, 2)}</pre>
    </div>
  );
}
