const products = [
  {
    id: 'p1',
    name: 'Hello',
    src: '/img/ironman.png',
  },
  {
    id: 'p2',
    name: 'Bye',
    src: '/img/spiderman.png',
  },
  {
    id: 'p3',
    name: 'Someone',
    src: '/img/thor.png',
  },
];

export default function Root(props) {
  return (
    <section>
      <h1>Gallery</h1>
      <div>
        {products.map((product) => (
          <img
            key={product.id}
            style={{ width: '70px' }}
            src={product.src || '/img/default.jpg'}
          />
        ))}
      </div>
    </section>
  );
}
