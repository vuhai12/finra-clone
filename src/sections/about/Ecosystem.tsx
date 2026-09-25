import Image from "next/image";

const ecosystem = [
  {
    icon: "/images/about/building-07.svg",
    label: "Bất động sản",
    items: [
      {
        image: "/images/about/ramond.webp",
        alt: "Ramond",
      },
      {
        image: "/images/about/lighthousing.webp",
        alt: "Light Housing",
      },
    ],
  },
  {
    icon: "/images/about/money-02.svg",
    label: "Tài chính",
    items: [
      {
        image: "/images/about/upsc.webp",
        alt: "UP Securities",
      },
      {
        image: "/images/about/finra.webp",
        alt: "Finra",
      },
      {
        image: "/images/about/upwealth.webp",
        alt: "UP Wealth",
      },
    ],
  },
  {
    icon: "/images/about/settings-01.svg",
    label: "Vận hành",
    items: [
      {
        image: "/images/about/stellar.webp",
        alt: "Stellar",
      },
      {
        image: "/images/about/boltx.webp",
        alt: "BoltX",
      },
      {
        image: "/images/about/nomad.webp",
        alt: "Nomad",
      },
      {
        image: "/images/about/urban.webp",
        alt: "Urban",
      },
    ],
  },
];

export default function Ecosystem() {
  return (
    <section className="relative py-[60px] bg-white">
      <div className="max-w-[1080px] mx-auto px-[16px] md:px-[64px]">
        <div className="flex justify-center flex-col gap-0 items-center mb-[48px]">
          <p className="text-[12px] mb-[8px] leading-[1.4] text-[#374151] font-normal">
            <span className=" bg-[linear-gradient(90deg,#9c33ff,#682eeb)] bg-clip-text text-transparent">
              07/
            </span>{" "}
            SỨC MẠNH TỪ SỰ KẾT NỐI
          </p>
          <h2 className="md:text-[32px] text-[24px] text-center leading-[1.125] font-medium text-[#111827] md:mb-[40px]">
            Hệ sinh thái
            <span className="bg-[linear-gradient(270deg,#8a04ff,#1441ff)] bg-clip-text text-transparent">
              {" "}
              Bolt Holdings
            </span>
          </h2>
        </div>
        <div className="flex flex-col gap-[40px]">
          {ecosystem.map((row) => (
            <div
              key={row.label}
              className="flex md:flex-row flex-col gap-[16px] items-center "
            >
              {/* Label */}
              <div className="flex gap-[4px] items-center">
                <Image src={row.icon} alt={row.label} width={16} height={16} />
                <span className="text-[16px] font-semibold">{row.label}</span>
              </div>

              {/* Logos */}
              <div className="flex flex-wrap justify-center gap-[20px] items-center flex-1">
                {row.items.map((item) => (
                  <div
                    key={item.alt}
                    className="md:rounded-[16px] rounded-[10px] w-[110px] md:w-[180px] p-[6px] md:p-[16px] border border-[#e5e7eb] bg-white transition-all duration-300 ease-out hover:-translate-y-[5px]"
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={200}
                      height={100}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
