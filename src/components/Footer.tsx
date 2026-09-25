import Image from "next/image";
import Link from "next/link";

const aboutLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Về chúng tôi", href: "/ve-chung-toi" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Tuyển dụng", href: "/tuyen-dung" },
  { label: "Hướng dẫn sử dụng", href: "/hdsd" },
];

const productLinks = [
  { label: "Finra Star", href: "/san-pham/finra-star" },
  { label: "Finra Snap", href: "/san-pham/finra-snap" },
  { label: "Finra Shield", href: "/san-pham/finra-shield" },
  { label: "Bất động sản", href: "/san-pham/bat-dong-san" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    src: "/images/about/facebook.svg",
  },
  {
    name: "YouTube",
    href: "#",
    src: "/images/about/youtube.svg",
  },
  {
    name: "Messenger",
    href: "#",
    src: "/images/about/messenger.svg",
  },
];

const appLinks = [
  {
    href: "https://play.google.com/store/apps/details?id=com.bolt.finracapital",
    src: "/images/about/googleplay.svg",
    alt: "Google Play",
  },
  {
    href: "https://apps.apple.com/vn/app/finrainvest/id6738405146?l=vi",
    src: "/images/about/appstore.svg",
    alt: "App Store",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(48deg,#010647,#0017b8_98.53%)] text-white min-h-[460px] py-[60px]">
      {/* Background */}
      <Image
        src="/images/common/footer-bg.webp"
        alt="background wave"
        width={800}
        height={500}
        className="absolute right-0 bottom-0 z-0 w-[80%] max-w-[800px] h-auto opacity-80 pointer-events-none"
      />

      {/* Content */}
      <div className="mx-auto max-w-[1182px] flex flex-col gap-[40px] px-[16px]">
        <div className="flex gap-[40px] flex-col md:flex-row">
          <div className="flex flex-col gap-[16px] md:mr-[60px] -mt-[30px]">
            <Link href="/">
              <Image
                src="/images/common/logo-mobile.png"
                alt="FINRA"
                width={100}
                height={100}
                priority
              />
            </Link>
            <h6 className="text-[20px] font-semibold leading-[1.5] text-white">
              Công Ty Cổ Phần <br /> Công Nghệ Tài Chính Finra Capital
            </h6>
            <div className="flex flex-col gap-[12px]">
              <div className="flex items-start gap-3 text-[14px] font-normal leading-[1.4] text-[#e5e7eb]">
                <svg
                  className="mt-1 shrink-0"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />{" "}
                  <circle cx="12" cy="10" r="3" />{" "}
                </svg>
                <span>
                  Tầng 10, Tòa nhà Hapro, Số 11B Cát Linh, <br /> phường Ô Chợ
                  Dừa, thành phố Hà Nội
                </span>
              </div>
              <div className="flex items-start gap-3 text-[14px] font-normal leading-[1.4] text-[#e5e7eb]">
                <svg
                  className="shrink-0"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
                  <polyline points="22,6 12,13 2,6" />{" "}
                </svg>{" "}
                <span>info@finra.com.vn</span>
              </div>
              <div className="flex items-start gap-3 text-[14px] font-normal leading-[1.4] text-[#e5e7eb]">
                <svg
                  className="shrink-0"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />{" "}
                </svg>{" "}
                <span>1900 5082</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] min-w-[200px]">
            <h6 className="text-[16px] font-semibold">Về Finra</h6>
            <ul className="flex flex-col gap-[12px]">
              {aboutLinks.map((aboutLink) => (
                <li key={aboutLink.href}>
                  <Link
                    href={aboutLink.href}
                    className="text-sm text-white cursor-pointer font-normal"
                  >
                    {aboutLink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-[16px] min-w-[200px]">
            <h6 className="text-[16px] font-semibold">Sản phẩm</h6>
            <ul className="flex flex-col gap-[12px]">
              {productLinks.map((productLink) => (
                <li key={productLink.href}>
                  <Link
                    href={productLink.href}
                    className="text-sm text-white cursor-pointer font-normal"
                  >
                    {productLink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex md:justify-between md:items-center items-start gap-[32px] md:flex-row flex-col">
          <div className="flex gap-[20px]">
            <h6 className="text-white text-base font-semibold">
              Theo dõi chúng tôi
            </h6>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className="social-icon">
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="flex gap-[20px] items-center z-10">
            <h6 className="text-white text-base font-semibold">Tải ứng dụng</h6>
            <div className="flex gap-[12px]">
              {appLinks.map((app) => (
                <a
                  key={app.alt}
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={app.src} alt={app.alt} width={124} height={40} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
