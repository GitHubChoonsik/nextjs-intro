import Head from "next/head";

interface Props {
  title: string;
}

export default function Seo({ title }: Props) {
  const fullTitle = `${title} | Next Movies`;
  return (
    <Head>
      <title>{fullTitle}</title>
    </Head>
  );
}
