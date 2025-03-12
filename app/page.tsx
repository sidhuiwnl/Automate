import Navbar from "@/app/components/global/navbar";

export default function Home() {
  return (

      <main className="flex flex-col">
          <Navbar/>
          <section  className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
              <div className="max-w-4xl mx-auto p-4 relative z-10 flex items-center justify-center flex-col">

              </div>

          </section>
      </main>


  );
}
