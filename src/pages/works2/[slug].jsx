import React from "react";
import { useRouter } from "next/router";
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar";
import appData from "../../data/app.json";
import ProjectDetails2Header from "../../components/Project-details2-header";
import ProjectDetails2Introduction from "../../components/Project-details2-introduction";
import ProjectDetails2Images from "../../components/Project-details2-images";
import ProjectDetailsDescription from "../../components/Project-details-description";
import ProjectDetailsVideo from "../../components/Project-details-video";
import NextProject from "../../components/Next-project";
import SmallFooter from "../../components/Small-footer";
const ProjectDetails2Light = () => {
  const [post, setPost] = React.useState(null);
  const [bannerImage, setBannerImage] = React.useState(null);
  const [galleryImages, setGalleryImages] = React.useState([]);
  const router = useRouter(); // Bước 2: Tạo instance của router
  const { slug } = router.query; // Bước 3: Lấy slug từ router.query

  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  React.useEffect(() => {
    const fetchPostBySlug = async () => {
      const response = await fetch(
        `https://cms.fixma.vn/wp-json/wp/v2/posts?slug=${slug}`
      );
      const posts = await response.json();
      if (posts.length > 0) {
        setPost(posts[0]); // Lấy bài viết đầu tiên từ mảng trả về
        if (posts[0].acf && posts[0].acf.banner_projects) {
          fetchBannerImage(posts[0].acf.banner_projects);
        }
        if (posts[0].acf && posts[0].acf.gallery_image) {
          fetchGalleryImages(posts[0].acf.gallery_image); // Giả sử 'gallery_images' là trường chứa ID của gallery trong ACF
        }
      }
    };
    const fetchBannerImage = async (imageId) => {
      if (!imageId) return;
      const response = await fetch(
        `https://cms.fixma.vn/wp-json/wp/v2/media/${imageId}`
      );
      const imageData = await response.json();
      setBannerImage(imageData.source_url); // Lưu URL hình ảnh vào state
    };

    const fetchGalleryImages = async (imageIds) => {
      if (!imageIds || imageIds.length === 0) {
        console.log("No image IDs provided for the gallery.");
        return;
      }
      try {
        const images = await Promise.all(
          imageIds.map(async (id) => {
            const response = await fetch(
              `https://cms.fixma.vn/wp-json/wp/v2/media/${id}`
            );
            if (!response.ok) {
              throw new Error(
                `Failed to fetch image with ID ${id}, status: ${response.status}`
              );
            }
            const imageData = await response.json();
            return imageData.source_url; // Trả về URL của hình ảnh
          })
        );
        setGalleryImages(images);
      } catch (error) {
        console.error("Failed to fetch gallery images:", error);
      }
    };
    if (slug) {
      fetchPostBySlug();
    }
  }, [slug]);
  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", appData.darkLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.lightLogo);
      }
    });
  }, [navbarRef]);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date
      .toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
      .toUpperCase();
  };
  const title = post?.title?.rendered;
  const content = post?.content?.rendered;
  const featuredImage = post?.featured_image_src;
  function extractVideoId(youtubeUrl) {
    // Kiểm tra giá trị đầu vào
    if (!youtubeUrl) {
      return null;
    }

    try {
      const url = new URL(youtubeUrl);
      const videoId = url.searchParams.get("v");
      if (videoId) {
        return videoId;
      } else {
        // Xử lý trường hợp URL là dạng rút gọn, ví dụ: https://youtu.be/VIDEO_ID
        const pathMatch = url.pathname.match(/\/([^\/]+)$/);
        if (pathMatch) {
          return pathMatch[1];
        }
      }
    } catch (error) {
      console.error("Invalid URL", error);
    }
    return null; // Trả về null nếu không tìm thấy videoId hoặc URL không hợp lệ
  }
  const video = extractVideoId(post?.acf?.video);

  const date = formatDate(post?.date);
  //   const post_categories = post?.post_categories;
  const renderedCategories = post?.post_categories?.map((category) => (
    <span key={category.id}>{category.name}, &nbsp;</span>
  ));
  const renderedTags = post?.post_tags?.map((tag) => (
    <span key={tag.id}>{tag.name}, &nbsp;</span>
  ));
  //   const post_tags = post?.post_tags;
  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ProjectDetails2Header
        title={title}
        post_categories={renderedCategories}
        post_tags={renderedTags}
        date={date}
        bannerImage={bannerImage}
      />
      <ProjectDetails2Introduction content={content} />
      <ProjectDetails2Images galleryImages={galleryImages} />
      {/* <ProjectDetailsDescription /> */}
      {video && (
        <ProjectDetailsVideo
          videoBackground="https://cms.fixma.vn/wp-content/uploads/2024/07/about-us.jpeg"
          videoType="youtube"
          videoId={video}
        />
      )}

      <NextProject projectImage={featuredImage} projectTitle={title} />
      <SmallFooter />
    </LightTheme>
  );
};

export default ProjectDetails2Light;
