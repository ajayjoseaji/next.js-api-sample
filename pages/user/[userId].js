import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const defaultEndpoint = `https://jsonplaceholder.typicode.com/users`;
const defaultImageEndpoint = `https://reqres.in/api/users?delay=3&id=`;

export async function getServerSideProps({ query }) {
    const { userId } = query;
    const res = await fetch(`${defaultEndpoint}/${userId}`)
    const data = await res.json();
    const res1 = await fetch(`${defaultImageEndpoint}${userId}`)
    const data1 = await res1.json();
    return {
        props: {
        data,
        data1
        }
    }
}

export default function User({ data, data1 }) {
  // const { results = []} = data;
  const { name, username, email, address, phone, website, company } = data
//   const { avatar } = data1
  console.log(data1)
  return (
    <div className={styles.container}>
      <Head>
        <title>{name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Image className={styles.image} src={data1.data.avatar} width={150} height={150} alt=""  />
        <h1 className={styles.title}>
          {name}
        </h1>
        <ul>
            <li className={styles.description}>
                <strong>Name : </strong> {name}
            </li>
            <li className={styles.description}>
                <strong>Username : </strong> {username}
            </li>
            <li className={styles.description}>
                <strong>Email : </strong> {email}
            </li>
            <li className={styles.description}>
                <strong>Phone : </strong> {phone}
            </li>
            <li className={styles.description}>
                <strong>Website : </strong> {website}
            </li>
            {/* <li className={styles.description}>
                <strong>Address : </strong> {address}
            </li> */}
            {/* <li className={styles.description}>
                <strong>Company : </strong> {company}
            </li> */}
        </ul>
        <p>
        <div className={styles.backToHome}>
          <Link legacyBehavior href="/">
            <a className={styles.link}>??? Back</a>
          </Link>
        </div>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
