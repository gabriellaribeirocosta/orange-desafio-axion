import Header from "@/components/Header/Header";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <Header></Header>
        <main>
          {children}
        </main>
      </>
    );
}