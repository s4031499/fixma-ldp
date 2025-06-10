/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
const WorksThreeColumnWithFilter = ({ filterPosition }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  const [categories, setCategories] = React.useState([]);
  const [tags, setTags] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  const [visiblePosts, setVisiblePosts] = React.useState(9);

  React.useEffect(() => {
    // setPageLoaded(true);
    if (posts.length > 0) {
      setTimeout(() => {
        initIsotope();
      }, 1000);
    }
    const fetchData = async () => {
      const response = await fetch(
        "https://cms.fixma.vn/wp-json/wp/v2/posts?per_page=100"
      );
      const data = await response.json();
      setPosts(data); // Cập nhật state với dữ liệu lấy được
    };

    fetchData();

    const fetchCategories = async () => {
      const response = await fetch(
        "https://cms.fixma.vn/wp-json/wp/v2/categories"
      );
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();

    const fetchTags = async () => {
      const response = await fetch("https://cms.fixma.vn/wp-json/wp/v2/tags");
      const data = await response.json();
      setTags(data); // Assuming you have a state setter named setTags
    };

    fetchTags();
  }, [posts, visiblePosts]);
  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 9);
  };
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="row">
          <div
            className={`filtering ${
              filterPosition === "center"
                ? "text-center"
                : filterPosition === "left"
                ? "text-left"
                : "text-right"
            } smplx col-12`}
          >
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              {/* <span data-filter=".brand">Branding</span>
              <span data-filter=".web">Mobile App</span>
              <span data-filter=".graphic">Creative</span> */}
              {categories
                .filter(
                  (category) => category.name.toLowerCase() !== "uncategorized"
                )
                .map((category) => (
                  <span key={category.id} data-filter={`.${category.slug}`}>
                    {category.name}
                  </span>
                ))}
            </div>
          </div>

          <div className="gallery full-width">
            {posts.slice(0, visiblePosts).map((post, index) => {
              const categorySlugs = (post.post_categories || [])
                .map((category) => category.slug)
                .join(" ");
              const additionalClass = index === 0 || index === 2 ? "lg-mr" : "";
              return (
                <div
                  className={`col-lg-4 col-md-6 items ${categorySlugs} ${additionalClass}`}
                  key={index}
                >
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <Link href={`/works2/${post.slug}`}>
                      <a>
                        <img src={post.featured_media_src_url} alt="image" />
                      </a>
                    </Link>
                  </div>
                  <div className="cont">
                    <h6>{post.title.rendered}</h6>
                    <span>
                      {(post.post_tags || []).map((tags, index) => (
                        <React.Fragment key={tags.id}>
                          {index > 0 && ", "}
                          <a href={`#0`}>{tags.name}</a>
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          {visiblePosts < posts.length && (
            <div
              className="d-flex justify-content-center full-width"
              style={{ height: "100%" }}
            >
              <button
                onClick={loadMorePosts}
                className="btn-curve btn-lit2 mt-30"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorksThreeColumnWithFilter;
