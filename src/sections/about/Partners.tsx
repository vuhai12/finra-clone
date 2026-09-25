import Image from "next/image";

const partners = [
  {
    image: "/images/about/pristie.webp",
    alt: "Pristie",
  },
  {
    image: "/images/about/upsc.webp",
    alt: "UP Securities",
  },
  {
    image: "/images/about/ramond.webp",
    alt: "Ramond",
  },
  {
    image: "/images/about/lighthousing.webp",
    alt: "Light Housing",
  },
  {
    image: "/images/about/lpbank.webp",
    alt: "LPBank",
  },
];

export default function Partners() {
  return (
    <section className="relative py-[80px] bg-[url('/images/about/partner_bg.png')] bg-center bg-cover bg-no-repeat">
      <div className="max-w-[722px] mx-auto px-[16px] md:px-[64px]">
        <div className="flex items-center flex-col">
          <p className="text-[12px] mb-[8px] leading-[1.4] text-[#374151] font-normal">
            <span className=" bg-[linear-gradient(90deg,#9c33ff,#682eeb)] bg-clip-text text-transparent">
              08/
            </span>{" "}
            ĐƠN VỊ ĐỒNG HÀNH
          </p>
          <h2 className="md:text-[32px] text-[24px] leading-[1.125] text-center font-medium text-[#111827] mb-[40px]">
            Đồng hành cùng những{" "}
            <span className="bg-[linear-gradient(270deg,#8a04ff,#1441ff)] bg-clip-text text-transparent">
              đối tác tin cậy
            </span>
          </h2>
        </div>
        <div className="flex md:gap-[24px] gap-[8px] flex-wrap ">
          {partners.map((partner) => (
            <div
              className="flex w-[calc(50%-12px)] transition-all duration-300 ease-out hover:-translate-y-[5px]"
              key={partner.alt}
            >
              <div className="p-[16px] flex items-center justify-center rounded-[12px] md:rounded-[24px] w-full md:w-[206px] h-[60px] md:h-[100px] relative flex-col gap-0 border-2 border-[hsla(0,0%,100%,0)] bg-[linear-gradient(180deg,#fff,#f1ebfc)] shadow-[0_6px_8px_#a098fb26,inset_0_4px_8px_6px_#fff6] transition-all duration-300 ease-in-out">
                <Image
                  src={partner.image}
                  alt={partner.alt}
                  width={160}
                  height={80}
                  className=" object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
