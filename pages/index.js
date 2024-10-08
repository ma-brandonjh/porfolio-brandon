import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <p>
          <Link href='/posts/first-post'>Next Page</Link>
        </p>
      </section>
      <section>
        <Link href='https://www.infinityq.tech'>
          <Image
            priority
            src="/images/infinityq.jpg"
            className={utilStyles.borderImage}
            height={65}
            width={65}
            alt=""
          />
        </Link>
      </section>
    </Layout>
  );
}
