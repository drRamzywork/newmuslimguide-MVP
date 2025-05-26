// import React from 'react'
// import styles from './index.module.scss'
// import Link from 'next/link'
// import { FaArrowRightLong } from "react-icons/fa6";
// import HowTo from './HowTo'; // Make sure the path to HowTo is correct

// const Sections2 = ({ dataAllCategories, dataPreliminaries, dir, dataPostWudoo, dataAllSettings, dataPostPray }) => {
//   const test = dataAllCategories.filter(obj => obj.slug !== "preliminaries");

//   // Split the boxes into two halves
//   const midIndex = Math.ceil(test.length / 2);
//   const firstHalf = test.slice(0, midIndex);
//   const secondHalf = test.slice(midIndex);

//   return (
//     <section id='sections2' className={styles.sections2} dir={dir}>
//       <div className="container">
//         <div className={styles.sec_container}>

//           <div className={styles.container}>
//             <div className={styles.title}>
//               <h3>{dataAllCategories[0]?.name}</h3>
//             </div>

//             <div className={styles.links_container}>
//               {dataPreliminaries?.posts?.map((box, index) => (
//                 <Link target='_blank' href={`/preliminaries/${box.slug}`} className={styles.link} key={index}>
//                   <div className={styles.number}>
//                     <span>{index + 1}</span>
//                     <div className={styles.icon}>
//                       <FaArrowRightLong />
//                     </div>
//                   </div>

//                   <div className={styles.title}>
//                     <p>{box.title}</p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <div className={styles.boxes_container}>
//             {/* First half of boxes */}
//             {firstHalf.map((box, idx) => (
//               <Link href={`/section/${box.slug}`} className={styles.box} key={`first-${idx}`}>
//                 <div className={styles.img_container}>
//                   <img src={box.cover} alt="" />
//                 </div>
//                 <div className={styles.title}>
//                   <h4>{box.name}</h4>
//                   <p>{box.description.replace(/<[^>]*>/g, '')}</p>
//                 </div>
//               </Link>
//             ))}

//             {/* Insert the HowTo component here */}
//             <div className={styles.howto_container}>
//               <HowTo
//                 dataPostWudoo={dataPostWudoo}
//                 dataAllSettings={dataAllSettings}
//                 dir={dir}
//                 dataPostPray={dataPostPray}
//               />
//             </div>

//             {/* Second half of boxes */}
//             {secondHalf.map((box, idx) => (
//               <Link href={`/section/${box.slug}`} className={styles.box} key={`second-${idx}`}>
//                 <div className={styles.img_container}>
//                   <img src={box.cover} alt="" />
//                 </div>
//                 <div className={styles.title}>
//                   <h4>{box.name}</h4>
//                   <p>{box.description.replace(/<[^>]*>/g, '')}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

// export default Sections2

import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import HowTo2 from "../HowTo2";

const Sections2 = ({
  dataAllCategories,
  dataPreliminaries,
  dir,
  dataPostWudoo,
  dataAllSettings,
  dataPostPray,
}) => {
  const test = dataAllCategories?.filter((obj) => obj.slug !== "preliminaries");

  // Split the boxes into two halves
  const midIndex = Math.ceil(test?.length / 2);
  const firstHalf = test.slice(0, midIndex);
  const secondHalf = test.slice(midIndex);

  return (
    <section id="sections2" className={styles.sections2} dir={dir}>
      <div className="container">
        <div className={styles.sec_container}>
          <div className={styles.container}>
            <div className={styles.title}>
              <h3>{dataAllCategories[0]?.name}</h3>
            </div>

            <div className={styles.links_container}>
              {dataPreliminaries?.posts?.map((box, index) => (
                <Link
                  target="_blank"
                  href={`/preliminaries/${box.slug}`}
                  className={styles.link}
                  key={index}
                >
                  <div className={styles.number}>
                    <span>{index + 1}</span>
                    <div className={styles.icon}>
                      <FaArrowRightLong />
                    </div>
                  </div>

                  <div className={styles.title}>
                    <p>{box.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.boxes_container}>
            {firstHalf.map((box, idx) => (
              <Link
                href={`/section/${box.slug}`}
                className={styles.box}
                key={`first-${idx}`}
              >
                <div className={styles.img_container}>
                  <img src={box.cover} alt="" />
                </div>
                <div className={styles.title}>
                  <h4>{box.name}</h4>
                  <p>{box.description.replace(/<[^>]*>/g, "")}</p>
                </div>
              </Link>
            ))}

            <div className={styles.howto_container}>
              <div className="desktop">
                <HowTo2
                  dataPostWudoo={dataPostWudoo}
                  dataAllSettings={dataAllSettings}
                  dir={dir}
                  dataPostPray={dataPostPray}
                />
              </div>
            </div>

            {/* Second half of boxes */}
            {secondHalf.map((box, idx) => (
              <Link
                href={`/section/${box.slug}`}
                className={styles.box}
                key={`second-${idx}`}
              >
                <div className={styles.img_container}>
                  <img src={box.cover} alt="" />
                </div>
                <div className={styles.title}>
                  <h4>{box.name}</h4>
                  <p>{box.description.replace(/<[^>]*>/g, "")}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sections2;
