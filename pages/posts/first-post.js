import Link from 'next/link';

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = {name: 'Brota'}

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: data
  }
}

export default function FirstPost(props) {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <p>{props.name}</p>
    </>
  );
}