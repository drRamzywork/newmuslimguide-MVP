"use client";
import { useEffect, useState, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import styles from "./index.module.scss";

function removeDarkClasses(htmlContent) {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return htmlContent; // Avoid SSR issues
  }

  const div = document.createElement("div");
  div.innerHTML = htmlContent;

  // Remove `dark:` classes from all elements recursively
  div.querySelectorAll("[class]").forEach((el) => {
    el.className = el.className
      .split(" ")
      .filter(
        (className) =>
          !className.startsWith("dark:") && !className.startsWith("dark:!")
      )
      .join(" ");
  });

  return div.innerHTML;
}

const PreliminariesDetailsPagesSection = ({
  sectionData,
  parent_name,
  parent_slug,
  dir,
  topicTitle,
  dataAllWords,
  main_color,
  sec_color,
}) => {
  const [content, setContent] = useState("");
  const [cleanedChildren, setCleanedChildren] = useState([]); // Use an array instead of an empty string

  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      document.documentElement.style.setProperty("--main_color", main_color);
    }

    if (typeof window !== "undefined" && sectionData?.body) {
      console.log("Original Section Data:", sectionData.body);

      const cleanedContent = removeDarkClasses(sectionData.body);
      setContent(cleanedContent);
    }

    if (sectionData?.children) {
      console.log("Original Children Data:", sectionData.children);

      const cleaned = sectionData.children.map((child) => ({
        ...child,
        body: child.body ? removeDarkClasses(child.body) : "",
      }));

      console.log("Cleaned Children Data:", cleaned);

      setCleanedChildren(cleaned);
    }
  }, [sectionData]);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const tabs = root.querySelectorAll(".tabb");
    const btns = root.querySelectorAll(".btna");

    function changeAtiveTab(t, e) {
      let s = t.target;
      while (s.nodeName !== "A") s = s.parentNode;

      const ulElement = s.parentNode.parentNode;
      const aElements = ulElement.querySelectorAll("li > a");
      const tabContents = root
        .querySelector("#tabs-id")
        .querySelectorAll(".tab-content > div");

      for (let t = 0; t < aElements.length; t++) {
        aElements[t].classList.remove("text-white", "bg-pink-600");
        aElements[t].classList.add("text-pink-600", "bg-white");
        tabContents[t].classList.add("hidden");
        tabContents[t].classList.remove("block");
      }

      s.classList.remove("text-pink-600", "bg-white");
      s.classList.add("text-white", "bg-pink-600");
      root.querySelector(`#${e}`).classList.remove("hidden");
      root.querySelector(`#${e}`).classList.add("block");
    }

    root.onclick = function (t) {
      const tabIndex = t.target.getAttribute("tab");
      if (tabIndex !== null) {
        tabs.forEach((tab) => tab.classList.remove("active-tabb"));
        btns.forEach((btn) => btn.classList.remove("active-buttonn"));

        tabs[tabIndex - 1].classList.add("active-tabb");
        btns[tabIndex - 1].classList.add("active-buttonn");
      }
    };
  }, [content]);

  const test = {
    body: "<div class='bg-[var(--h-color)] text-[var(--main-color)] p-4 rounded-md'>Hello</div>",
    variables: {
      "--h-color": "#00bcd4",
      "--main-color": "#ff5722",
    },
  };

  const renderChildrenContent = () => {
    return sectionData?.children?.map((child, index) => {
      if (!child.body) return null; // Skip if there's no content

      const processedContent2 = child.body.replace(
        /class="([^"]*?)bg-gradient-to-br from-main-color to-h-color([^"]*?)"/g,
        `class="$1" style="background: linear-gradient(to bottom right, ${main_color}, ${sec_color}); --tw-gradient-to-position: 100%"$2"`
      );

      return (
        <div key={index}>
          <h2
            id={child.slug}
            className="text-3xl w-full leading-[50px] text-gray-50 bg-main-color p-4 lg:text-3xl dark:text-white custom-border-radius"
            // style={{ color: main_color }}
          >
            {child.title}
          </h2>
          <div
            className={styles.childContent}
            dangerouslySetInnerHTML={{ __html: processedContent2 }}
          />
        </div>
      );
    });
  };

  const processedContent = sectionData.body
    ? sectionData.body.replace(
        /class="([^"]*?)bg-gradient-to-br from-main-color to-h-color([^"]*?)"/g,
        `class="$1" style="background: linear-gradient(to bottom right, ${main_color}, ${sec_color}); --tw-gradient-to-position: 100%"$2"`
      )
    : "";

  return (
    <>
      <section
        id="preliminar"
        className={styles.preliminar}
        ref={sectionRef}
        dir={dir}
      >
        <div className="container">
          <div className={styles.sec_container}>
            <div className={styles.title}>
              <h2>{topicTitle}</h2>
              <div className={styles.links}>
                <Link href={"/"} className={styles.icon_container}>
                  <img src="/assets/svgs/home.svg" alt="Home" />
                </Link>
                <IoIosArrowForward />
                <Link href={"/sections"} className={styles.icon_container}>
                  <span>{dataAllWords?.sections}</span>
                </Link>
                <IoIosArrowForward />
                <Link
                  href={`/section/${parent_slug}`}
                  className={styles.icon_container}
                >
                  <span>{parent_name}</span>
                </Link>
                <IoIosArrowForward />
                <Link href={"#"} className={styles.icon_container}>
                  <span>{topicTitle}</span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            {content && (
              <div dangerouslySetInnerHTML={{ __html: sectionData.body }} />
            )}
            {renderChildrenContent(sectionData?.children)}
          </div>
        </div>
      </section>

      {/* <div style={test.variables}>
        <div
          className={styles.childContent}
          dangerouslySetInnerHTML={{ __html: test.body }}
        />
      </div> */}
    </>
  );
};

export default PreliminariesDetailsPagesSection;
