import Image from "next/image";

const coreValues = [
  {
    icon: "/images/about/shield-02.svg",
    title: "CHUẨN MỰC",
    desc: "Chuẩn mực trong tác phong, tư duy và hành động",
  },
  {
    icon: "/images/about/fire.svg",
    title: "NHIỆT HUYẾT",
    desc: "Trẻ trung, năng động, luôn sẵn sàng chinh phục mục tiêu",
  },
  {
    icon: "/images/about/hourglass.svg",
    title: "Kỷ luật",
    desc: "Kiên trì với những việc nhỏ để tạo nên tăng trưởng bền vững",
  },
];

export default function FinraPeople() {
  return (
    <section className="relative min-h-[488px] py-[60px]">
      <div className="max-w-[1134px] md:mx-auto flex gap-[24px] flex-col md:flex-row px-[16px]">
        <div className="w-full overflow-hidden rounded-[16px] md:w-[320px]">
          <Image
            src="/images/about/team.webp"
            alt="Finra People"
            width={320}
            height={488}
            className="h-auto w-full"
          />
        </div>
        <div className="flex-1 flex flex-col md:justify-between gap-[24px]">
          <div>
            <p className="text-[12px] mb-[8px] leading-[1.4] text-[#374151] font-normal">
              <span className=" bg-[linear-gradient(90deg,#9c33ff,#682eeb)] bg-clip-text text-transparent">
                05/
              </span>{" "}
              CON NGƯỜI FINRA
            </p>
            <h3 className="md:text-[18px] text-[16px] text-[#4b5563] font-normal leading-[1.3]">
              “Sức mạnh cốt lõi của Finra ở{" "}
              <span>đội ngũ nhân sự tinh hoa</span> nơi giao thoa giữa tư duy
              quản trị tài chính nhạy bén và năng lực công nghệ đột phá”
            </h3>
          </div>
          <div className="flex gap-[12px] overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:overflow-visible">
            {coreValues.map((item) => (
              <div
                key={item.title}
                className="flex w-[280px] shrink-0 flex-col gap-[32px] p-[12px] rounded-[18px] bg-[radial-gradient(197.75%_111.25%_at_23.68%_30.75%,#f6ebff_0,#fff0)] md:w-auto md:flex-1 md:shrink"
              >
                <div className="w-[38px] h-[38px] rounded-full bg-[linear-gradient(270deg,#8a04ff,#1441ff)] flex items-center justify-center relative">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={18}
                    height={18}
                  />
                </div>

                <div className="flex flex-col gap-[8px]">
                  <h4 className="text-[16px] leading-[1.4] font-semibold text-[#111827]">
                    {item.title}
                  </h4>
                  <p className="text-[14px] text-[#4b5563] font-normal leading-[1.4]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
