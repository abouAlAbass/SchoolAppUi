export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      
        <div className="h-screen flex">
          <div className="w-[14%] md:w[8%]  lg:[16%] xl-[14%] bg-red-50">l</div>
          <div className="w-[86%] md:w[92%] lg:[84%] xl-[86%] bg-blue-50">right {children}</div>
          
          </div>
      
    );
  }
  