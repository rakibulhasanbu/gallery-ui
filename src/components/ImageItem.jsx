/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef, useEffect, useState } from "react";
import { Checkbox } from "@nextui-org/react";

const ImageItem = forwardRef(
  (
    {
      id,
      index,
      deletedImg,
      setDeletedImg,
      withOpacity,
      isDragging,
      style,
      ...props
    },
    ref
  ) => {
    const [hovered, setHovered] = useState(false);
    const [selected, setSelected] = useState(deletedImg?.includes(id));

    useEffect(() => {
      setSelected(deletedImg?.includes(id));
    }, [deletedImg, id]);

    const handleDeletedImages = () => {
      const updatedDeletedImg = [...deletedImg];
      const isCurrentlySelected = updatedDeletedImg?.includes(id);

      if (isCurrentlySelected) {
        updatedDeletedImg?.splice(updatedDeletedImg?.indexOf(id), 1);
      } else {
        updatedDeletedImg?.push(id);
      }

      setDeletedImg(updatedDeletedImg);
      setSelected(!isCurrentlySelected);
    };

    const inlineStyles = {
      opacity: withOpacity ? "0.5" : "1",
      transformOrigin: "0% 0%",
      height: `${index === 0 ? "300px" : "140px"}`,
      width: `${index === 0 ? "300px" : "140px"}`,
      borderRadius: "12px",
      gridColumn: `${index === 0 ? "1 / span 2" : ""}`,
      gridRow: `${index === 0 ? "1 / span 2" : ""}`,
      cursor: isDragging ? "grabbing" : "grab",
      backgroundColor: "#ffffff",
      display: "flex",
      justifyContent: "center",
      touchAction: "none",
      alignItems: "center",
      boxShadow: isDragging
        ? "rgb(63 63 68 / 5%) 0px 2px 0px 2px, rgb(34 33 81 / 15%) 0px 2px 3px 2px"
        : "rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px",
      transform: isDragging ? "scale(1.05)" : "scale(1)",
      ...style,
    };

    return (
      <>
        <div
          ref={ref}
          style={inlineStyles}
          {...props}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`relative hidden md:flex ${
            selected ? "border-2 border-sky-600" : ""
          }`}
        >
          <img className="rounded-[10px]" src={id} alt="" />

          {/* <Checkbox
            isSelected={selected}
            name={id}
            id={id}
            className={`absolute top-2 left-2 ${
              selected ? "selectedImg" : ""
            } ${hovered ? "" : "md:hidden"}`}
            onValueChange={handleDeletedImages}
          ></Checkbox> */}

          {hovered && (
            <div
              className={`absolute ${
                index === 0 ? "hidden" : ""
              } rounded-[10px] inset-0 bg-black bg-opacity-50 pointer-events-none z-10`}
            ></div>
          )}
        </div>
      </>
    );
  }
);

export default ImageItem;

// const  = forwardRef(
//   (
//     {
//       id,
//       index,
//       deletedImg,
//       setDeletedImg,
//       withOpacity,
//       isDragging,
//       style,
//       ...props
//     },
//     ref
//   ) => {
//     const [isHover, setIsHover] = useState(false);

//     const inlineStyles = {
//       opacity: withOpacity ? "0.5" : "1",
//       transformOrigin: "0% 0%",
//       height: `${index === 0 ? "300px" : "140px"}`,
//       width: `${index === 0 ? "300px" : "140px"}`,
//       borderRadius: "12px",
//       gridColumn: `${index === 0 ? "1 / span 2" : ""}`,
//       gridRow: `${index === 0 ? "1 / span 2" : ""}`,
//       cursor: isDragging ? "grabbing" : "grab",
//       backgroundColor: "#ffffff",
//       display: "flex",
//       justifyContent: "center",
//       touchAction: "none",
//       alignItems: "center",
//       boxShadow: isDragging
//         ? "rgb(63 63 68 / 5%) 0px 2px 0px 2px, rgb(34 33 81 / 15%) 0px 2px 3px 2px"
//         : "rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px",
//       transform: isDragging ? "scale(1.05)" : "scale(1)",
//       ...style,
//     };

//     return (
//       <div
//         //   onMouseEnter={() => setIsHover(true)}
//         //   onMouseLeave={() => setIsHover(false)}
//         className={`relative ${isHover && ""}`}
//       >
//         <div
//           className={`absolute top-0 border-2 border-slate-300 left-0 w-full h-full  text-2xl p-5 rounded-lg ${
//             isHover
//               ? "bg-white opacity-40"
//               : "bg-black opacity-0 hover:opacity-40"
//           }`}
//         >
//           <input
//             type="checkbox"
//             className="w-8 h-8 rounded z-50 cursor-pointer border border-red-600 checked:bg-red-600"
//             onClick={(e) => setIsHover(e.target.checked)}
//           />
//         </div>
//         <img
//           src="https://res.cloudinary.com/dsb7txoad/image/upload/v1699105076/website%20assets/gellry-ui/gallery_klw4qh.png"
//           alt=""
//         />
//       </div>
//     );
//   }
// );
// export default ImageItem;
