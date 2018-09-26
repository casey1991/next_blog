import Layout from "../components/Layout";
import Link from "next/link";
const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`} as={`/p/${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
const Index = () => (
  <div>
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" id={"hello-nextjs"} />
        <PostLink title="Learn Next.js is awesome" id={"learn-nextjs"} />
        <PostLink title="Deploy apps with Zeit" id={"deploy-nextjs"} />
      </ul>
    </Layout>
  </div>
);
export default Index;
