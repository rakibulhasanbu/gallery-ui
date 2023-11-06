import { Button } from "@nextui-org/react";
import { useContext } from "react";
import { Context } from "../context/AppContext";
import { Checkbox } from "@nextui-org/react";

const Navbar = () => {
  const { handleDeleteImg, deleteItem } = useContext(Context);
  return (
    <div className="border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-2.5">
        {deleteItem.length === 0 ? (
          <h3 className="text-2xl font-semibold">Gallery Ui</h3>
        ) : (
          <div className="flex justify-center items-center gap-1">
            <Checkbox isSelected={true}></Checkbox>{" "}
            <p className="text-lg lg:text-2xl font-semibold">
              Image Selected: {deleteItem.length}
            </p>
          </div>
        )}

        {deleteItem.length !== 0 && (
          <Button onClick={handleDeleteImg} color="danger">
            Delete
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
