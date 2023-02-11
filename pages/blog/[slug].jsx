import { client, urlFor } from "../../lib/client";
import { PortableText } from "@portabletext/react";
import Meta from "../../components/Meta";

const BlogPost = ({ post }) => {
  return (
    <>
      <Meta
        title={post.title}
        description={post.summary}
        ogType="article"
        ogUrl={`https://donniefan.com/blog/${post.slug.current}`}
        image={urlFor(post?.paragraphs[0]?.image).url()}
      />
      <main className="max-w-[1110px] mx-auto px-[24px] md:px-[40px]">
        <h1 className="text-[26px] mt-[41px] mb-0">{post.title}</h1>
        <p className="mb-[41px]">
          {new Date(post._createdAt).toLocaleString()}
        </p>
        {post?.paragraphs.map((paragraph) => (
          <section
            key={paragraph._key}
            className="flex justify-center items-center px-0 mb-[41px]"
          >
            {paragraph.image && (
              <figure className="flex flex-col justify-center items-center">
                <img
                  src={urlFor(paragraph?.image)?.width(300)?.url()}
                  alt={paragraph?.caption}
                />
                <figcaption className="my-[27px] italic text-[14px] font-[300] leading-[28px] max-w-[300px]">
                  {paragraph?.caption}
                </figcaption>
              </figure>
            )}
            <div className="leading-[32px] lg:text-[20px] lg:leading-[40px]">
              <PortableText value={paragraph?.text} />
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  const postQuery = `*[_type == "blog" && slug.current == "${slug}"][0]`;
  const postData = await client.fetch(postQuery);

  return {
    props: {
      post: postData,
    },
  };
}

export async function getStaticPaths() {
  const blogQuery = '*[_type == "blog"] | order(date desc)';
  const blogData = await client.fetch(blogQuery);
  const paths = blogData.map((post) => ({
    params: { slug: post.slug.current },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export default BlogPost;
