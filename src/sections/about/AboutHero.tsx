import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-[540px] overflow-hidden mt-[68px] md:mt-[54px]">
      {/* Background image */}
      <Image
        src="/images/about/hero_banner.webp"
        alt="FINRA"
        fill
        priority
        className="object-cover"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[174px] max-w-[1200px] items-center px-4 lg:px-6 mt-[100px] md:mt-[180px]">
        <div className="max-w-[700px] text-white flex flex-col gap-[2px]">
          <h1 className="md:text-[80px] text-[60px] leading-none font-bold">
            FINRA
          </h1>

          <p className=" font-semibold leading-[1.4] text-[20px] md:text-[32px]">
            NỀN TẢNG ĐẦU TƯ CÔNG NGHỆ
          </p>
          <p className=" w-fit bg-gradient-to-r from-[#ff66c4] to-[#ffde59] bg-clip-text text-transparent text-[32px] font-semibold leading-[1.4]">
            TÀI CHÍNH HIỆN ĐẠI
          </p>
        </div>
      </div>
    </section>
  );
}
