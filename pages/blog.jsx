import { client, urlFor } from "../lib/client";
import Link from "next/link";

const blog = ({ blogPosts }) => {
  return (
    <main className="max-w-[1110px] mx-auto px-[24px] md:px-[40px]">
      <span className="flex justify-center my-[72px]">
        <h1>Blog</h1>
      </span>
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center md:justify-items-start gap-[24px] mb-[48px] ">
        {blogPosts.map((post) => (
          <li key={post._id}>
            <div className="grid w-[300px] h-[400px]">
              <div className="relative w-full h-[150px] overflow-hidden">
                <img src={urlFor(post.thumbnail).width(300).url()} />
              </div>
              <p className="mt-[16px] font-[700]">{post.title}</p>
              <p className="h-[100px] my-[16px] text-[12px] text-ellipsis overflow-hidden">
                {post.summary}
              </p>
              <Link href={`/blog/${post.slug.current}`}>
                <span className="w-[200px] my-[16px] px-[16px] py-[8px] bg-yellow text-[black] text-[14px] font-[700] transition-all cursor-pointer hover:bg-[transparent] hover:border-[1px] hover:border-yellow dark:hover:text-[white]">
                  Read full article
                </span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export async function getStaticProps() {
  const blogQuery = '*[_type == "blog"] | order(_createdAt desc)';
  const blogData = await client.fetch(blogQuery);

  return {
    props: {
      blogPosts: blogData,
    },
  };
}

export default blog;
