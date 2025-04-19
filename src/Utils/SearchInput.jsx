// import { motion, AnimatePresence } from "framer-motion";
// import { IoIosSearch } from "react-icons/io";
// import Link from "next/link";
// import styles from '@/components/Home/Hero/index.module.scss';

// import { useState } from "react";
// import { useSiteData } from "@/contexts/SiteDataContext";

// const SearchBox = () => {
//   const {
//     dataPreliminaries,
//     dataAllSections
//   } = useSiteData();


//   const [searchTerm, setSearchTerm] = useState("");

//   const filterData = () => {
//     const search = searchTerm.toLowerCase();
//     const filteredSections = dataAllSections?.filter((section) =>
//       section.name?.toLowerCase().includes(search)
//     );
//     const filteredPreliminaries = dataPreliminaries?.posts?.filter((post) =>
//       post.title?.toLowerCase().includes(search)
//     );
//     return { filteredSections, filteredPreliminaries };
//   };

//   const { filteredSections, filteredPreliminaries } = filterData();

//   const highlightText = (text) => {
//     if (!searchTerm) return text;
//     const regex = new RegExp(`(${searchTerm})`, 'gi');
//     const parts = text.split(regex);
//     return parts.map((part, index) =>
//       regex.test(part) ? (
//         <span
//           key={index}
//           style={{
//             fontWeight: "bold",
//             textDecoration: "underline",
//             color: "orange",
//           }}
//         >
//           {part}
//         </span>
//       ) : (
//         part
//       )
//     );
//   };

//   return (
//     <motion.div
//       initial={{ scale: 0.8, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 0.4 }}
//       className={styles.search_input_wrapper}
//     >
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className={styles.search_input}
//       />

//       <div className={styles.icon_container}>
//         <IoIosSearch />
//       </div>

//       <AnimatePresence>
//         {searchTerm && (filteredSections.length > 0 || filteredPreliminaries.length > 0) && (
//           <motion.ul
//             className={styles.dropdownMenu}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 10 }}
//             transition={{ duration: 0.3 }}
//           >
//             {filteredSections.map((section) => (
//               <li key={`section-${section.id}`}>
//                 <Link href={`/section/${section.slug}`} className={styles.dropdownItem}>
//                   {highlightText(section.name)}
//                 </Link>
//               </li>
//             ))}
//             {filteredPreliminaries.map((post) => (
//               <li key={`preliminary-${post.id}`}>
//                 <Link href={`/preliminaries/${post.slug}`} className={styles.dropdownItem}>
//                   {highlightText(post.title)}
//                 </Link>
//               </li>
//             ))}
//           </motion.ul>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default SearchBox;

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import styles from '@/components/Home/Hero/index.module.scss';
import { useSiteData } from "@/contexts/SiteDataContext";

const SearchBox = () => {
  const { dataPreliminaries, dataAllSections } = useSiteData();

  const [searchTerm, setSearchTerm] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSearchTerm(""); // يمسح البحث ويخفي الدروبداون
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filterData = () => {
    const search = searchTerm.toLowerCase();
    const filteredSections = dataAllSections?.filter((section) =>
      section.name?.toLowerCase().includes(search)
    );
    const filteredPreliminaries = dataPreliminaries?.posts?.filter((post) =>
      post.title?.toLowerCase().includes(search)
    );
    return { filteredSections, filteredPreliminaries };
  };

  const { filteredSections, filteredPreliminaries } = filterData();

  const highlightText = (text) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <span
          key={index}
          style={{
            fontWeight: "bold",
            textDecoration: "underline",
            color: "orange",
          }}
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <motion.div
      ref={wrapperRef}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={styles.search_input_wrapper}
    >
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.search_input}
      />

      <div className={styles.icon_container}>
        <IoIosSearch />
      </div>

      <AnimatePresence>
        {searchTerm && (filteredSections.length > 0 || filteredPreliminaries.length > 0) && (
          <motion.ul
            className={styles.dropdownMenu}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            {filteredSections.map((section) => (
              <li key={`section-${section.id}`}>
                <Link href={`/section/${section.slug}`} className={styles.dropdownItem}>
                  {highlightText(section.name)}
                </Link>
              </li>
            ))}
            {filteredPreliminaries.map((post) => (
              <li key={`preliminary-${post.id}`}>
                <Link href={`/preliminaries/${post.slug}`} className={styles.dropdownItem}>
                  {highlightText(post.title)}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SearchBox;
