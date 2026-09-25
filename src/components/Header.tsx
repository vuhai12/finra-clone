"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white h-[68px] md:h-[54px]">
      <div className="mx-auto flex max-w-[1262px] items-center justify-between px-4 lg:px-6 h-full">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/common/logo.svg"
            alt="FINRA"
            width={110}
            height={40}
            className="h-auto w-[60px]"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-[28px] lg:flex">
          <Link
            href="/ve-chung-toi"
            className="text-sm text-[#1f2937] p-[10px] font-medium hover:text-[#9c33ff]"
          >
            Về chúng tôi
          </Link>

          <Link
            href="/tin-tuc"
            className="text-sm p-[10px] hover:text-[#9c33ff]"
          >
            Tin tức
          </Link>

          <Link
            href="/tuyen-dung"
            className="text-sm p-[10px] hover:text-[#9c33ff]"
          >
            Tuyển dụng
          </Link>

          <Link
            href="/huong-dan-su-dung"
            className="text-sm hover:text-[#9c33ff] p-[10px]"
          >
            Hướng dẫn sử dụng
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/dau-tu-ngay"
          className="hidden rounded-[999px]  bg-[#6225ff] px-[18px] py-[7px] text-[13px] font-semibold text-white lg:block"
        >
          Đầu tư ngay
        </Link>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
          aria-label="Mở menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            data-v-9ae3432b=""
          >
            <line x1="3" y1="12" x2="21" y2="12" data-v-9ae3432b=""></line>
            <line x1="3" y1="6" x2="21" y2="6" data-v-9ae3432b=""></line>
            <line x1="3" y1="18" x2="21" y2="18" data-v-9ae3432b=""></line>
          </svg>
        </button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      )}
    </header>
  );
}
