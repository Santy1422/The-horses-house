import Dropdown from "@/components/reusableComponents/DropdownSelector";
import DropdownWeb from "@/components/reusableComponents/DropdownWeb";
import SaleAmountInput from "@/components/reusableComponents/SaleAmountInput";
import { calendar, dollar } from "@/iconos/icons";
import { useState } from "react";

const ComponentesPack = () => {
  const options = ["Pack evento", "Pack mensual", "Pack anual"];
  const [selectedOption, setSelectedOption] = useState("");
  const [picsAmount, setPicsAmount] = useState(0);
  const [videoAmount, setVideoAmount] = useState(0);
  const [price, setPrice] = useState(0);

  const quantity = Array.from({ length: 50 }, (_, index) => index + 1);

  return (
    <div className="flex items-center justify-center w-[508px] border-[1px] border-[#BEBDBD] rounded-[10px] h-[661px] bg-white">
      <div className="mb-16">
        <div className="flex items-center justify-center flex-col">
          <div className="flex gap-4 w-[100%] items-center">
            <span className="bg-[#F3F2F2] flex items-center justify-center w-[72px] h-[72px] rounded-full">
              {calendar}
            </span>
            <div className="flex flex-col">
              <h2 className="text-[#23254C] text-[24px] font-semibold leading-5">
                Mi servicio
              </h2>
              <p className="text-[#6D6E6D] text-[14px] leading-5">
                Completá el formulario con los datos necesarios.
              </p>
            </div>
          </div>

          {/* form */}
          <form className="w-[100%] h-[420px] px-2">
            <div className="h-[74px] w-[100%] gap-1.5 mt-[20px]">
              <SaleAmountInput label={"Precio"} setValue={setPrice} />
            </div>

            <div className="h-[74px] w-[100%] gap-1.5 mt-[20px] relative">
              <DropdownWeb
                options={options}
                label={"Tipo de pack"}
                onSelect={setSelectedOption}
                selectedOption={selectedOption}
                placeholder={"Seleccione un tipo de pack"}
              />
            </div>

            <div className="h-[74px] w-[100%] gap-1.5 mt-[20px]">
              <DropdownWeb
                options={quantity}
                label={"Cantidad de fotos"}
                selectedOption={picsAmount}
                onSelect={setPicsAmount}
                placeholder={"Seleccione la cantidad de fotos"}
              />
            </div>

            <div className="h-[74px] w-[100%] gap-1.5 mt-[20px]">
              <DropdownWeb
                options={quantity}
                label={"Cantidad de videos"}
                selectedOption={videoAmount}
                onSelect={setVideoAmount}
                placeholder={"Seleccione la cantidad de videos"}
              />

              <div className="w-[100%] flex justify-end items-center h-[44px] mt-20">
                <button className="w-[130px] h-[44px] rounded-[4px] bg-[#F3F2F2] text-[#BEBDBD]">
                  Aceptar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComponentesPack;
