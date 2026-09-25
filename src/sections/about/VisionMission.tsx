import Image from "next/image";

const missions = [
  {
    title: "Tư vấn chuyên nghiệp:",
    description:
      "Cung cấp tư vấn, giải pháp tài chính hữu ích, toàn diện, minh bạch và chuyên sâu.",
  },
  {
    title: "Đổi mới sáng tạo:",
    description:
      "Luôn cập nhật và áp dụng công nghệ mới nhất để mang lại trải nghiệm tốt nhất.",
  },
  {
    title: "Khách hàng là trung tâm:",
    description:
      "Đặt lợi ích khách hàng lên hàng đầu, đồng hành và hỗ trợ trong mọi hành trình đầu tư.",
  },
];

export default function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(79deg,#fff,#e6ddfe)] min-h-[525px] pt-[48px] pb-[64px]">
      <Image
        src="/images/about/vision_banner.png"
        alt="Vision Banner"
        width={1920}
        height={800}
        className="absolute top-0 right-0 z-0 h-full w-auto pointer-events-none select-none object-cover"
      />
      <div className="max-w-[1134px] md:mx-auto mx-[16px] relative">
        <p className="text-[12px] mb-[8px] ">
          <span className=" bg-[linear-gradient(90deg,#9c33ff,#682eeb)] bg-clip-text text-transparent">
            02 /
          </span>
          CHÚNG TÔI HƯỚNG ĐẾN ĐÂU
        </p>
        <h2 className="md:text-[32px] text-[24px] text-[#374151] font-medium">
          Tầm nhìn & Sứ mệnh
        </h2>
        <div className="flex gap-[20px] mt-[40px] md:flex-row flex-col">
          <div className="rounded-[12px] flex flex-col gap-[12px] pt-[22px] px-[22px] pb-[36px] border border-[#f6ebff] bg-white w-full md:w-1/2 relative">
            <div className="flex gap-[16px]">
              <div className="w-[28px] h-[28px] bg-[linear-gradient(270deg,#8a04ff,#1441ff)] rounded-full flex items-center justify-center relative">
                <Image
                  src="/images/about/vision.svg"
                  alt="vison"
                  width={16}
                  height={16}
                  className="w-[16px] h-[16px] absolute"
                />
              </div>
              <h3 className="text-[#0f172a] text-[16px] font-bold">Tầm Nhìn</h3>
            </div>
            <div className="text-[#374151] text-[14px]">
              <p>
                Finra định vị trở thành một trong những công ty tài chính hàng
                đầu trong lĩnh vực đầu tư tại Việt Nam bằng việc tạo ra những
                sản phẩm đầu tư ứng dụng và mang lại giá trị lâu dài cho khách
                hàng.
              </p>
              <br />
              <p>
                Chúng tôi tin rằng sự phát triển của mỗi cá nhân và doanh nghiệp
                đều góp phần vào sự thịnh vượng chung của xã hội
              </p>
            </div>
            <Image
              src="/images/about/effect_dots.webp"
              alt="effect_dots"
              width={72}
              height={72}
              className="absolute bottom-0 right-0"
            />
          </div>
          <div className="rounded-[12px] flex flex-col gap-[12px] pt-[22px] px-[22px] pb-[36px] border border-[#f6ebff] bg-white w-full md:w-1/2 relative">
            <div className="flex gap-[16px]">
              <div className="w-[28px] h-[28px] bg-[linear-gradient(270deg,#8a04ff,#1441ff)] rounded-full flex items-center justify-center relative">
                <Image
                  src="/images/about/mission.svg"
                  alt="mission"
                  width={16}
                  height={16}
                  className="w-[16px] h-[16px] absolute"
                />
              </div>
              <h3 className="text-[#0f172a] text-[16px] font-bold">Sứ Mệnh</h3>
            </div>
            <p className="text-[#374151] text-[14px] leading-[1.4]">
              Finra cung cấp các giải pháp đầu tư tài chính hiệu quả, minh bạch
              và an toàn cho khách hàng
            </p>
            <ul className="flex flex-col gap-[16px] border-t border-[#e5e7eb] pt-[12px] ">
              {missions.map((mission) => (
                <li key={mission.title} className="flex items-start gap-[8px]">
                  <Image
                    src="/images/about/checkmark-circle-01.svg"
                    alt="Check"
                    width={10}
                    height={10}
                    className="mt-[2px] shrink-0"
                  />

                  <p className="text-[14px] leading-[1.4] text-[#4b5563]">
                    <strong className="font-semibold text-black">
                      {mission.title}
                    </strong>{" "}
                    {mission.description}
                  </p>
                </li>
              ))}
            </ul>
            <Image
              src="/images/about/effect_dots.webp"
              alt="effect_dots"
              width={72}
              height={72}
              className="absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
