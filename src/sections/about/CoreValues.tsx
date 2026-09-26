import Image from "next/image";

const values = [
  {
    title: "MINH BẠCH",
    desc: "Công khai thông tin, rõ ràng trong hoạt động",
    icon: "/images/about/security-check.svg",
    image: "/images/about/core_value_1.webp",
    position: "lg:-translate-x-[200px] md:-translate-x-[100px]",
  },
  {
    title: "BẢO TOÀN",
    desc: "Quản lý nguồn vốn an toàn, chặt chẽ",
    icon: "/images/about/security-lock.svg",
    image: "/images/about/core_value_2.webp",
    position: "lg:mt-[-30px] md:mt-[-50px]",
  },
  {
    title: "CHIA SẺ",
    desc: "Tối ưu nguồn lực, gia tăng giá trị cho cộng sự và nhà đầu tư",
    icon: "/images/about/share-07.svg",
    image: "/images/about/core_value_3.webp",
    position:
      "lg:mt-[-30px] md:mt-[-50px] lg:translate-x-[200px] md:translate-x-[100px]",
  },
];

export default function CoreValues() {
  return (
    <section className="relative min-h-[458px] md:p-[64px] py-[50px]">
      <Image
        src="/images/about/core_value_banner.webp"
        alt="Core Values Banner"
        width={1920}
        height={800}
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      <div className="md:px-[80px] mx-auto max-w-[1134px] relative px-[16px]">
        <div className="md:absolute min-[768px]:max-[820px]:bottom-[-30px] min-[768px]:max-[820px]:left-[-30px] bottom-0 left-0 z-10 text-white relative">
          <div className="text-[14px] mb-[10px] leading-[1.4] font-normal">
            03/ NỀN TẢNG PHÁT TRIỂN
          </div>

          <h2 className="md:text-[38px] text-[24px] font-medium leading-[1.125]">
            Giá trị cốt lõi
          </h2>
        </div>
        <div className="flex flex-col items-center w-full mt-[40px] md:mt-0 gap-[50px] md:gap-0">
          {values.map((value) => (
            <div
              key={value.title}
              className={`flex md:gap-[32px] gap-[20px] md:flex-row flex-col w-full lg:max-w-[700px] md:max-w-[480px] md:items-end ${value.position}`}
            >
              <div className="flex gap-[12px] w-full md:max-w-[300px]">
                <div className="w-[36px] h-[36px] shrink-0 bg-[linear-gradient(270deg,#8a04ff,#1441ff)] rounded-full flex items-center justify-center relative">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={18}
                    height={18}
                  />
                </div>

                <div className="flex flex-col gap-[8px] md:max-w-[220px]">
                  <h4 className="text-[16px] font-semibold text-white leading-[1.25]">
                    {value.title}
                  </h4>
                  <p className="text-[14px] leading-[1.4] font-medium text-[#e5e7eb]">
                    {value.desc}
                  </p>
                </div>
              </div>

              <div className={`relative md:h-[132px] rounded-[12px]`}>
                <Image
                  src={value.image}
                  alt={value.title}
                  width={230}
                  height={132}
                  className="h-auto w-full md:h-full md:w-full md:object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
