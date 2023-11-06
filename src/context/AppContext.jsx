import { createContext, useState } from "react";

export const Context = createContext(null);

// eslint-disable-next-line react/prop-types
const AppContext = ({ children }) => {
  const images = [
    "https://res.cloudinary.com/dsb7txoad/image/upload/v1699283401/website%20assets/gellry-ui/image-11_jh0gfz.jpg",
    "https://res.cloudinary.com/dsb7txoad/image/upload/v1699283399/website%20assets/gellry-ui/image-8_huliwt.webp",
    "https://res.cloudinary.com/dsb7txoad/image/upload/v1699283400/website%20assets/gellry-ui/image-9_qhb2g4.webp",
    "https://res.cloudinary.com/dsb7txoad/image/upload/v1699283404/website%20assets/gellry-ui/image-10_ffbk6w.jpg",
    "https://res.cloudinary.com/dsb7txoad/image/upload/v1699283399/website%20assets/gellry-ui/image-7_ui5uv5.webp",
    "https://res.cloudinary.com/dsb7txoad/image/upload/v1699283400/website%20assets/gellry-ui/image-2_lxhzlr.webp",
    "https://res.cloudinary.com/dsb7txoad/image/upload/v1699283400/website%20assets/gellry-ui/image-1_t9dro1.webp",
    "https://res.cloudinary.com/dsb7txoad/image/upload/v1699283399/website%20assets/gellry-ui/image-5_iwfxzp.webp",
    "https://res.cloudinary.com/dsb7txoad/image/upload/v1699283399/website%20assets/gellry-ui/image-4_lwpmov.webp",
    "https://res.cloudinary.com/dsb7txoad/image/upload/v1699283399/website%20assets/gellry-ui/image-3_ya5rd3.webp",
    "https://res.cloudinary.com/dsb7txoad/image/upload/v1699283399/website%20assets/gellry-ui/image-6_tpbnbd.webp",
  ];
  const [items, setItems] = useState(images);
  const [deleteItem, setDeleteItem] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  const handleDeleteImg = () => {
    const filteredArray1 = items.filter((item) => !deleteItem.includes(item));
    setDeleteItem([]);
    setItems(filteredArray1);
  };

  const authInfo = {
    items,
    setItems,
    deleteItem,
    setDeleteItem,
    activeItem,
    setActiveItem,
    handleDeleteImg,
  };

  return <Context.Provider value={authInfo}>{children}</Context.Provider>;
};

export default AppContext;
