import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import add from "../../assets/add.png";
import CardProduct from "./components/CardProduct";
import ModalAddProduct from "./components/ModalAddProduct";
import ModalManageProduct from "./components/ModalManageProduct";
import { GetProductTypeApi } from "../../api/product_type";
import Swal from "sweetalert2";
import { notify } from "../../utils";
import { EMessage } from "../../constant";
import { GetProductApi } from "../../api/product";
import Loading from "../../components/Loading";
export const Products = () => {
  const [selectedTypeId, setSelectedTypeId] = useState("");

  const [type, setType] = useState([]);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const autoFetchingData = async (fetchApi, setData) => {
    const response = await fetchApi();
    if(!response) {
       notify.error(EMessage.getData)
       return;
    }
    setData(response);
   }

  const fetchData = async () => {
    setLoading(true);
    await Promise.all([
      autoFetchingData(GetProductTypeApi, setType),
      autoFetchingData(GetProductApi, setProduct)
    ]);
    setLoading(false);
   }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Sidebar>
      <div>
        <div className="grid grid-cols-12 mt-4 px-8">
            <ul className="col-span-9 flex flex-wrap w-full gap-4">
              <div className="w-full flex justify-center">
                <Loading className={"py-12"} show={loading && type.length === 0} />
              </div>
              {type.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() =>
                      item.name === selectedTypeId
                        ? setSelectedTypeId(item.PTID)
                        : setSelectedTypeId(item.PTID)
                    }
                    className={`bg-[#ffecd5] ${selectedTypeId === item.PTID
                      ? "bg-[#e3f3da] border-2  border-black"
                      : "border-2 border-transparent"
                      } px-10 py-6 cursor-pointer rounded-[20px] font-medium  text-lg duration-300 transition-all`}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          <div className="col-span-3 flex gap-4 pt-4"> 
            <ModalAddProduct typeData={type} onAddSuccess={fetchData} />
            <ModalManageProduct typeData={type} onAddSuccess={fetchData} onDeleteSuccess={fetchData} />
          </div>

        </div>
        <CardProduct typeData={type} productData={product} selectedTypeId={selectedTypeId} onEditSuccess={fetchData} onDeleteSuccess={fetchData} loading={loading} />
      </div>
    </Sidebar>
  );
};
