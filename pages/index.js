import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja list | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Hello world!</h1>
        <p className={styles.text}>
          Aute veniam nulla ipsum consectetur tempor laboris sit amet
          reprehenderit. Dolor in sint incididunt officia magna eu et commodo
          tempor fugiat sunt adipisicing dolore elit. Sunt qui tempor
          consectetur voluptate est sit non nulla fugiat. Nulla nostrud ut qui
          pariatur consectetur. Reprehenderit ut adipisicing incididunt ad irure
          consectetur deserunt. Consectetur elit ex eiusmod occaecat ad laboris
          qui. Exercitation laboris minim culpa minim est voluptate et enim enim
          aliquip consequat reprehenderit. Adipisicing eu excepteur pariatur non
          mollit reprehenderit eu ullamco excepteur. Commodo magna ad nisi
          occaecat consectetur nisi. Proident nulla fugiat est nisi nostrud qui
          nostrud. Mollit ea ipsum aliquip dolore et Lorem excepteur nulla. Id
          voluptate est nostrud nisi esse est Lorem cupidatat laborum pariatur
          proident ullamco. Incididunt magna deserunt occaecat nulla ad anim
          velit. Occaecat excepteur non proident excepteur amet velit minim eu
          nisi dolore.
        </p>
        <Link href="/user/settings">
          <a className={styles.btn}>Settings</a>
        </Link>
      </div>
    </>
  );
}
