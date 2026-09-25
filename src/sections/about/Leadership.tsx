"use client";

import LeaderModal from "@/components/LeaderModal";
import Image from "next/image";
import { useState } from "react";

const leaders = [
  {
    imageFull: "/images/about/leader_quang_trung_full.webp",
    image: "/images/about/leader_quang_trung.webp",
    alt: "Ông Đỗ Quang Trung",
    role: "TỔNG GIÁM ĐỐC FINRA CAPITAL",
    name: "Ông Đỗ Quang Trung",
    desc: [
      "16 năm kinh nghiệm làm việc trong lĩnh vực Tài chính - Ngân hàng - Bất động sản. Tham gia hoạch định chiến lược, điều hành hoạt động kinh doanh, phát triển mô hình và mạng lưới phân phối.",
      "Đảm nhiệm vai trò quản lý và phát triển phân khúc khách hàng ưu tiên (Priority & Private) tại nhiều ngân hàng lớn: Techcombank, MB Bank, ABBank.",
      "Thành viên ra mắt dự án Private đầu tiên tại thị trường Việt Nam cùng với MBB và Bordier. Tham gia launching quỹ ABBF - An Bình Bond fund đạt quy mô ~ 2,000 tỷ - lọt top 3 quỹ mở trái phiếu lớn nhất thị trường.",
      "Thành công trong huy động trái phiếu Geleximco, SHN với tổng quy mô lên tới 2.500 tỷ đồng.",
    ],
  },
  {
    imageFull: "/images/about/leader_hai_linh_full.webp",
    image: "/images/about/leader_hai_linh.webp",
    alt: "Bà Nguyễn Thị Hải Linh",
    role: "PHÓ TGĐ KINH DOANH MIỀN BẮC 2",
    name: "Bà Nguyễn Thị Hải Linh",
    desc: [
      "Hơn 15 năm kinh nghiệm trong lĩnh vực tài chính, ngân hàng và tư vấn đầu tư, chị Nguyễn Thị Hải Linh sở hữu nền tảng chuyên môn vững chắc cùng bề dày kinh nghiệm trong quản trị kinh doanh và phát triển đội ngũ.",
      "Chị tốt nghiệp Cử nhân Khoa Kinh tế – Đại học Quốc gia Hà Nội và hoàn thành chương trình Thạc sĩ Điều hành cao cấp(Executive MBA) – Đại học Kinh tế Quốc dân.",
      "Trong suốt quá trình công tác, chị Linh đã đảm nhiệm nhiều vị trí quản lý tại các tổ chức tài chính hàng đầu như MSB, TPBank, VPS, TPS…, trực tiếp quản lý, phát triển các đơn vị kinh doanh với quy mô doanh số gần 2.000 tỷ đồng, quản lý danh mục huy động và đầu tư quy mô hàng nghìn tỷ đồng.",
      "Với tư duy chiến lược, kinh nghiệm thực chiến và năng lực dẫn dắt đội ngũ, chị Linh đã góp phần tạo nên nhiều dấu ấn nổi bật trong lĩnh vực tài chính, đầu tư và phát triển kinh doanh.",
    ],
  },
  {
    imageFull: "/images/about/leader_anh_tu_full.webp",
    image: "/images/about/leader_anh_tu.webp",
    alt: "Ông Ngô Anh Tú",
    role: "PHÓ TGĐ KINH DOANH MIỀN BẮC 3",
    name: "Ông Ngô Anh Tú",
    desc: [
      "23 năm làm việc trong linh vực: Ngân hàng - Tài chính - Bảo hiểm và Bất động sản. Đảm nhiệm nhiều vị trí Quản lý quan trọng tại các Bank và TC Tài chính lớn.",
      "Thành công trong công tác vận hành và điều hành hoạt động tại các Ngân hàng VPBank, GPBank và Manulife.",
      "Triển khai thành công các Dự án bất động sản của các CĐT lớn như VinGroup, SunGroup và Sunshine.",
    ],
  },
];

export default function Leadership() {
  const [selectedLeader, setSelectedLeader] = useState<
    (typeof leaders)[number] | null
  >(null);
  return (
    <section className="relative min-h-[622px] py-[60px] bg-[linear-gradient(180deg,#eceafd00,#eceafd_52.89%),linear-gradient(180deg,#f5f4fd,#fff)] bg-cover bg-center">
      <div className="absolute right-0 top-0 z-0">
        <Image
          src="/images/about/leader_decor.webp"
          alt=""
          width={1920}
          height={800}
          className="h-auto w-full object-contain"
        />
      </div>
      <div className="max-w-[1134px] md:mx-auto z-10 relative px-[16px]">
        <div>
          <p className="text-[12px] mb-[8px] leading-[1.4] text-[#374151] font-normal">
            <span className=" bg-[linear-gradient(90deg,#9c33ff,#682eeb)] bg-clip-text text-transparent">
              06/
            </span>{" "}
            NHỮNG NGƯỜI DẪN ĐƯỜNG
          </p>
          <h2 className="md:text-[32px] text-[24px] leading-[1.125] font-medium text-[#111827] mb-[40px]">
            Đội ngũ lãnh đạo{" "}
            <span className="bg-[linear-gradient(270deg,#8a04ff,#1441ff)] bg-clip-text text-transparent">
              Finra
            </span>
          </h2>
        </div>
        <div className="flex gap-[28px] flex-col md:flex-row">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="flex-1 flex flex-col rounded-[16px] overflow-hidden group relative bg-transparent cursor-pointer transition-all duration-300 ease-out hover:-translate-y-[8px] hover:shadow-[0_16px_30px_rgba(90,67,185,0.25)]"
            >
              <div className="h-[260px] flex items-end justify-center  bg-[linear-gradient(0deg,#5a43b94d,#5a43b999)] backdrop-blur-[50px]">
                <Image
                  src={leader.image}
                  alt={leader.alt}
                  width={500}
                  height={600}
                  className="block h-[90%] w-auto object-contain object-bottom"
                />
              </div>
              <div className="flex-1 flex gap-[12px] p-[14px] flex-col bg-white">
                <div>
                  <div className="bg-[linear-gradient(270deg,#8a04ff,#1441ff)] bg-clip-text text-transparent text-[12px] font-medium leading-[1.5] tracking-[0.16px] uppercase">
                    {leader.role}
                  </div>
                  <h5 className="text-[20px] text-[#111827] font-medium ">
                    {leader.name}
                  </h5>
                </div>
                <p className="text-[14px] text-[#6b7280] font-normal line-clamp-2">
                  {leader.desc[0]}
                </p>
              </div>

              {/* Button */}
              <button
                type="button"
                onClick={() => setSelectedLeader(leader)}
                className="
    absolute
    left-1/2
    bottom-[150px]
    -translate-x-1/2
    translate-y-[100px]
    rounded-full
    bg-white
    px-[16px]
    py-[8px]
    text-[14px]
    text-[#6a00ff]
    font-medium
    opacity-0
    transition-all
    duration-300
    ease-out
    group-hover:translate-y-0
    group-hover:opacity-100
    whitespace-nowrap
  "
              >
                Xem thêm thông tin
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {selectedLeader && (
        <LeaderModal
          leader={selectedLeader}
          onClose={() => setSelectedLeader(null)}
        />
      )}
    </section>
  );
}
