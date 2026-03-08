import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Xiaobai - 学科分类与课程共享系统',
  description: '为现代大学生提供全学科的课程学习资源',
  keywords: ['教程', '学习', '课程', '大学', '计算机', '管理学', '数学'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
