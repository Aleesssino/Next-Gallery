import { FC } from "react";

interface InfoCardProps {
  children: string;
}

const InfoCard: FC<InfoCardProps> = ({ children }) => {
  return (
    <div className="flex w-full md:px-52 pb-10">
      <div className=" rounded-2xl p-2 w-full pb-10 text-center  border-white border-[1px]">
        <p>{children}</p>
      </div>
    </div>
  );
};

export default InfoCard;
