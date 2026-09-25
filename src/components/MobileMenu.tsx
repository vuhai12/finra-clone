"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? "0%" : "100%" }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="fixed inset-0 z-[1000] flex flex-col bg-white lg:hidden"
    >
      {/* Header */}
      <div className="flex h-[68px] shrink-0 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/common/logo.svg"
            alt="Finra Logo"
            width={110}
            height={40}
            priority
            className="h-auto w-[110px]"
          />
        </Link>

        {/* Close */}
        <button
          onClick={onClose}
          type="button"
          className="cursor-pointer"
          aria-label="Đóng menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1f2937"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 px-5 py-6">
        <ul className="flex flex-col">
          <li>
            <Link
              href="/ve-chung-toi"
              className="block py-4 text-[16px] font-medium text-[#1f2937]"
            >
              Về chúng tôi
            </Link>
          </li>

          <li>
            <Link
              href="/tin-tuc"
              className="block py-4 text-[16px] font-medium text-[#1f2937]"
            >
              Tin tức
            </Link>
          </li>

          <li>
            <Link
              href="/tuyen-dung"
              className="block py-4 text-[16px] font-medium text-[#1f2937]"
            >
              Tuyển dụng
            </Link>
          </li>

          <li>
            <Link
              href="/hdsd"
              className="block py-4 text-[16px] font-medium text-[#1f2937]"
            >
              Hướng dẫn sử dụng
            </Link>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div className="flex shrink-0 gap-3 px-5 pb-6">
        <Link
          href="/dau-tu-ngay"
          className="flex flex-1 items-center justify-center rounded-full bg-[#6225ff] px-5 py-3 text-[14px] font-semibold text-white"
        >
          Đầu tư ngay
        </Link>

        <a
          href="tel:"
          className="flex flex-1 items-center justify-center rounded-full border border-[#6225ff] px-5 py-3 text-[14px] font-semibold text-[#6225ff]"
        >
          Gọi hotline
        </a>
      </div>
    </motion.div>
  );
}
