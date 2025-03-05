import LeftBar from '@/components/LeftBar';
import './globals.css';
import RightBar from '@/components/RightBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='flex justify-between bg-red-300 sm:bg-blue-300 md:bg-green-300 lg:bg-yellow-300 xl:bg-pink-300'>
          <div className=''>
            <LeftBar />
          </div>
          <div className=''>{children}</div>
          <div className=''>
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
