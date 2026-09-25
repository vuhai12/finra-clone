import Image from "next/image";

export default function LeaderMessage() {
  return (
    <section className="flex md:bg-[#efebe7] bg-transparent relative flex-col-reverse md:flex-row">
      <div className="w-full md:w-1/2  relative sm:static">
        <div className="absolute left-1/2 top-[-50px] z-10 h-[80px] w-[120%] -translate-x-1/2 bg-[#f4f1f2] blur-[12px] md:bg-[#fefdfd] md:blur-[20px] lg:hidden" />
        {/* Mobile */}
        <Image
          src="/images/about/CEO_banner_mb.webp"
          alt="CEO Finra"
          width={800}
          height={600}
          className="block w-full object-cover md:hidden"
        />

        {/* Desktop */}
        <Image
          src="/images/about/CEO_banner.webp"
          alt="CEO Finra"
          width={1163}
          height={606}
          className="hidden w-full object-cover md:absolute md:top-0 md:left-0 md:block md:h-full md:w-auto"
        />
      </div>

      <div className="md:w-1/2 z-10 px-[16px] py-[32px] md:pt-[40px] md:px-[64px] md:pb-[80px] w-full">
        <p className="text-[#6b7280] text-[12px] font-normal">
          <span className="bg-[linear-gradient(90deg,#9c33ff,#682eeb)] bg-clip-text text-transparent">
            01 /
          </span>{" "}
          THÔNG ĐIỆP TỪ NGƯỜI DẪN LỐI
        </p>
        <Image
          src="/images/about/quote_icon_xl.svg"
          alt="Quote"
          width={40}
          height={40}
        />
        <div className="text-[#4b5563] text-[14px] font-normal leading-[1.4] mt-[24px]">
          <p className="mb-[12px]">
            Khi thị trường không ngừng thay đổi, niềm tin của khách hàng luôn là
            nền tảng cho sự phát triển của Finra. Chúng tôi theo đuổi sứ mệnh{" "}
            <span className="bg-[linear-gradient(90deg,#7a00ff,#6421ff_18%,#4b3eff_27%,#007ef7_47%,#1f9bff_70%,#1edcff)] bg-clip-text font-bold text-transparent">
              “Gia tăng giá trị thực”
            </span>{" "}
            thông qua việc kiến tạo các giải pháp đầu tư minh bạch, hiệu quả và
            bền vững.
          </p>
          <p>
            Với hệ sinh thái toàn diện từ bất động sản, tài chính đến chứng
            khoán, Finra mang đến những cơ hội đầu tư an toàn, bảo toàn giá trị
            và gia tăng lợi ích dài hạn cho khách hàng.
          </p>
          <p>
            Finra cam kết đồng hành bằng tinh thần trách nhiệm, sự chuyên nghiệp
            và khát vọng kiến tạo những giá trị bền vững cho tương lai.
          </p>
        </div>
        <div>
          <div className="w-[100px] h-[2px] my-[28px] bg-[linear-gradient(90deg,#7a00ff,#6421ff_18%,#4b3eff_27%,#007ef7_47%,#1f9bff_70%,#1edcff)]" />
          <div>
            <h5 className="text-[#000] text-[16px] font-semibold leading-[38px]">
              Ông Đỗ Quang Trung
            </h5>
            <p className="text-[#6b7280] text-[12px] italic font-normal leading-[26px]">
              Tổng Giám Đốc Finra Capital
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
