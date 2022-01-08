import { useRouter } from 'next/router';
import {
  CompassOutlined,
  HeartOutlined,
  HomeOutlined,
} from '@ant-design/icons/lib/icons';
import Link from 'next/link';
import React from 'react';

export const Menu = () => {
  return (
    <nav
      className="fixed bottom-4 w-[70vw] py-4 px-8 rounded-2xl bg-gray-900 flex justify-between mx-auto max-w-[400px] text-lg text-gray-400"
      style={{ transform: 'translateX(-50%)', left: '50%', right: '50%' }}
    >
      <LinkActive href={'/'}>
        <HomeOutlined />
      </LinkActive>
      <LinkActive href={'/explore'}>
        <CompassOutlined />
      </LinkActive>
      <LinkActive href={'/favorites'}>
        <HeartOutlined />
      </LinkActive>
    </nav>
  );
};

export const LinkActive = ({ href, children }) => {
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <div
        className={`p-2 rounded-full flex justify-center items-center ${
          router.asPath === href ? 'bg-gray-200 opacity-80 ' : ''
        }`}
        style={{
          backdropFilter: 'blur(40px)',
        }}
      >
        {children}
      </div>
    </Link>
  );
};
