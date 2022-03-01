import { useEffect, useState } from "react";
import FadeInSection from "../utility/FadeInSection";
import useAxios from "../../custom-hooks/useAxios";

const SocialMediaFeed = () => {
  const [feedData, setFeedData] = useState();
  const [posts, setPosts] = useState();

  const { response, loading, error } = useAxios({
    method: "get",
    url: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frssfeed.today%2Fweibo%2Frss%2F7708697903",
  });

  useEffect(() => {
    if (response !== null) {
      setPosts(response.items.filter((post) => post["content"] != ""));
      setFeedData(response.feed);
    }
  }, [response]);

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>error</h1>;
  return (
    <div className="social-media-feed">
      <div className="section-header-style-wrapper">
        <div className="section-header-group">
          <h3 className="__header">Latest Weibo</h3>
          <FadeInSection>
            <p className="__label">See What I'm currently doing</p>
          </FadeInSection>
        </div>
      </div>
      <FadeInSection>
        <div className="__social-window">
          {posts.map((post) => (
            <div key={post["title"]} className="__weibo-post">
              <div className="__top">
                <img
                  src="https://tvax1.sinaimg.cn/crop.0.0.1002.1002.180/008pGUt9ly8gv2ym49cscj60ru0ru0w802.jpg?KID=imgbed,tva&amp;Expires=1640374431&amp;ssig=MpQeHmB1ST"
                  alt="Donnie's weibo avatar"
                  className="__profile-pic"
                />
                <a
                  href="https://weibo.com/u/7708697903?tabtype=feed"
                  className="__username"
                >
                  {/* remove these specific Chinese characters in a series 的微博 but allow others. Because they mean 'his weibo' DJ will never name himself this, but may name himself something else in Chinese*/}
                  {feedData["title"].replace(/[(\u7684\u5fae\u535a)]/g, "")}
                </a>
                <span className="__post-date">{post["pubDate"]}</span>
              </div>
              <div className="__post-content">
                <span className="__content-text">
                  {post["content"]
                    .replace(/<a\b[^>]*>/gm, "")
                    .replace(/<\/a>/gm, "")
                    .replace(/<img\b[^>]*>/gm, "")
                    .replace(/<\/img>/gm, "")
                    .replace(/<br\b[^>]*>/gm, "")
                    .replace(/<\/br>/gm, "")
                    .replace(/<span\b[^>]*>/gm, "")
                    .replace(/<\/span>/gm, "")
                    .replace(/<div\b[^>]*>/gm, "")
                    .replace(/<\/div>/gm, "")}
                </span>
                <a href={post["link"]}>
                  {post["thumbnail"] && (
                    <img
                      className="__content-thumbnail"
                      src={post["thumbnail"]}
                      alt={post["title"]}
                    />
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
};

export default SocialMediaFeed;
