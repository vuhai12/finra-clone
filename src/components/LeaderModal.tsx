import Image from "next/image";

type LeaderModalProps = {
  leader: {
    name: string;
    role: string;
    imageFull: string;
    image: string;
    desc: string[];
  };
  onClose: () => void;
};

export default function LeaderModal({ leader, onClose }: LeaderModalProps) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[1000] px-[16px] flex items-center justify-center bg-[#121212cc] backdrop-blur-[4px] "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative mx-auto flex h-[70vh] [@media(max-height:799px)]:h-screen w-[700px] overflow-hidden bg-[linear-gradient(180deg,#7f5cf8_10%,#010f7e)] p-[10px] md:p-[30px]"
      >
        <button
          className="absolute right-[4px] top-[4px] md:right-[24px] md:top-[24px] z-10 flex items-center justify-center rounded-full border-none bg-transparent p-[8px] cursor-pointer transition-[background,opacity] duration-200 hover:bg-white/10 hover:opacity-70"
          onClick={onClose}
        >
          <svg
            data-v-16493a41=""
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#FFF"
            stroke-width="2"
          >
            <path
              data-v-16493a41=""
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <div className="relative md:static z-[5] flex h-full w-full flex-col rounded-[12px_120px_12px_12px] bg-[linear-gradient(180deg,#12121240,#12121200)] px-[20px] pb-[20px] pt-[24px] md:px-[32px] md:pb-[24px] md:pt-[32px]">
          <div className="mb-[8px] bg-[linear-gradient(240deg,#00fdc2_2.88%,#00c3de_85.28%)] bg-clip-text text-[14px] font-semibold uppercase text-transparent">
            {leader.role}
          </div>

          <div className="mb-[16px] text-[24px] font-semibold leading-[32px] text-white md:mb-[24px] md:text-[28px] md:leading-[36px]">
            {leader.name}
          </div>

          <div className="flex min-h-0 flex-1 flex-col-reverse md:flex-row">
            {/* TEXT */}
            <div className="custom-scrollbar h-full min-h-0 w-full md:w-1/2 overflow-y-auto pr-[8px] text-[16px] font-normal leading-[24px] text-[#f6ebff] md:h-full">
              <div className="flex flex-col gap-[20px]">
                {leader.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
            {/* IMAGE */}
            <div className="flex md:absolute mb-[20px] md:mb-0 backdrop-blur-[9.4px] bg-[linear-gradient(0deg,#5a43b980,#5a43b9)] md:backdrop-blur-none md:rounded-none rounded-[12px] h-[180px] md:bg-none  md:right-0 md:bottom-0 w-full shrink-0 items-end justify-center md:justify-end overflow-hidden md:h-full md:w-1/2">
              {/* Mobile */}
              <Image
                src={leader.image}
                alt={leader.name}
                width={500}
                height={600}
                className="h-[90%] w-auto object-contain object-bottom md:hidden"
              />

              {/* md trở lên */}
              <Image
                src={leader.imageFull}
                alt={leader.name}
                width={500}
                height={600}
                className="hidden h-[90%] w-auto object-contain object-bottom md:block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
