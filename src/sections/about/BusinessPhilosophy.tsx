import Image from "next/image";

const philosophyCards = [
  {
    number: "01",
    title: "SÁNG TẠO",
    text: "Không ngừng đổi mới, ứng dụng công nghệ để bứt phá",
    icon: "/images/about/idea-01.svg",
    wave: "/images/about/waves_1.webp",
    iconBg:
      "bg-[linear-gradient(180deg,#ad4cfc,#672d96)] shadow-[inset_3px_3px_12px_3px_#ffffff26,0_0_15px_#e9d0fb]",
    divider: "bg-[linear-gradient(90deg,#6f3ed5,#6f3ed500)]",
    dotBg:
      "bg-[linear-gradient(180deg,#ad4cfc,#672d96)] shadow-[inset_4px_4px_50px_8px_#ffffff26,inset_4px_4px_50px_8px_#ffffff26]",
  },
  {
    number: "02",
    title: "KIÊN ĐỊNH",
    text: "Vững mục tiêu, bền chí theo đuổi hành trình đã chọn",
    icon: "/images/about/target-02.svg",
    wave: "/images/about/waves_2.webp",
    iconBg:
      "bg-[linear-gradient(180deg,#2f7bf2,#2157ab)] shadow-[inset_3px_3px_12px_3px_#ffffff26,0_0_15px_#d5e4fb]",
    divider: "bg-[linear-gradient(90deg,#2563eb,#2563eb00)]",
    dotBg:
      "bg-[linear-gradient(180deg,#2f7bf2,#2157ab)] shadow-[inset_4px_4px_50px_8px_#ffffff26]",
  },
  {
    number: "03",
    title: "LINH HOẠT",
    text: "Thích ứng nhanh với thay đổi, lựa chọn giải pháp phù hợp nhất",
    icon: "/images/about/puzzle.svg",
    wave: "/images/about/waves_3.webp",
    iconBg:
      "bg-[linear-gradient(180deg,#ad4cfc,#672d96)] shadow-[inset_3px_3px_12px_3px_#ffffff26,0_0_15px_#e9d0fb]",
    divider: "bg-[linear-gradient(90deg,#6f3ed5,#6f3ed500)]",
    dotBg:
      "bg-[linear-gradient(180deg,#ad4cfc,#672d96)] shadow-[inset_4px_4px_50px_8px_#ffffff26,inset_4px_4px_50px_8px_#ffffff26]",
  },
];

export default function BusinessPhilosophy() {
  return (
    <section className="relative min-h-[520px] bg-[#f4eeff] py-[64px]">
      <Image
        src="/images/about/ideal_banner.webp"
        alt="Ideal Banner"
        width={1920}
        height={800}
        className="absolute top-0 left-0 z-0 h-full w-full object-cover opacity-100 pointer-events-none select-none"
      />
      <div className="relative z-10 mx-auto max-w-[1134px] px-[16px]">
        <p className="text-[12px] mb-[8px] leading-[1.4]">
          <span className=" bg-[linear-gradient(90deg,#9c33ff,#682eeb)] bg-clip-text text-transparent">
            04/
          </span>{" "}
          Trách nhiệm và Cam kết
        </p>
        <h2 className="md:text-[32px] text-[24px] leading-[1.125] font-medium text-[#111827] mb-[40px]">
          Triết lý kinh doanh{" "}
          <span className="bg-[linear-gradient(270deg,#8a04ff,#1441ff)] bg-clip-text text-transparent">
            của Finra
          </span>
        </h2>
        <div className="flex gap-[12px] overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-row md:overflow-visible">
          {philosophyCards.map((card) => (
            <div
              key={card.number}
              className="relative flex w-[300px] shrink-0 flex-col gap-[20px] rounded-[12px] border border-[#f6ebff] bg-white p-[24px] transition-all duration-300 ease-out hover:-translate-y-[8px] hover:shadow-[0_16px_30px_rgba(90,67,185,0.25)] md:w-auto md:flex-1 md:shrink"
            >
              <div className="flex justify-between">
                <div className="p-[8px] rounded-full w-[81px] h-[81px] border border-[#ead0fe]">
                  <div
                    className={`flex h-[64px] w-[64px] items-center justify-center rounded-full ${card.iconBg}`}
                  >
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={38}
                      height={38}
                    />
                  </div>
                </div>
                <span className="text-[40px] text-[#eeeafb] font-normal leading-[1.4]">
                  {card.number}
                </span>
              </div>
              <div>
                <h3 className="text-[18px] leading-[1.4] text-[#111827] font-semibold">
                  {card.title}
                </h3>
                <div
                  className={`w-[47px] h-[4px] rounded-[2px] mt-[16px] ${card.divider}`}
                />
              </div>

              <p className="text-[14px] leading-[1.4] text-[#6b7280] font-normal">
                {card.text}
              </p>
              <Image
                src={card.wave}
                alt=""
                width={500}
                height={200}
                className="pointer-events-none absolute right-0 bottom-0 z-0 h-auto w-full"
              />
              <div className={`w-[8px] h-[8px] rounded-full ${card.dotBg}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
