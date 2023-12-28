import Image from "next/image";
import NavBar from "./components/NavBar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import TopHeader from "./atom/TopHeader";
import BtnUser from "./atom/BtnUser";
import BtnHeader from "./atom/BtnHeader";
import Loader from "./components/Loader";

const Slider = dynamic(() => import("../app/components/Slider"), {
  ssr: false,
  loading: () => <BtnLoading />,
});

//Suspanse
import dynamic from "next/dynamic";

//Icons
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import TitleSlider from "./atom/TitleSlider";
import SectionCustom from "./components/SectionCustom";
// import Slider from "./components/Slider";
import CardSlider from "./atom/CardSlider";
import ImgCustom from "./atom/ImgCustom";
import ProgressionSlider from "./components/ProgressionSlider";
import BtnProgression from "./atom/BtnProgression";
import BtnLoading from "./atom/BtnLoading";

const Home = async () => {
  const session = await getServerSession();
  // if (!session) {
  //   redirect("/api/auth/signin?callBackUrl=/");
  // }
  return (
    <>
      <TopHeader className="rounded-b-[20%] h-[45vh] text-[21px]  w-full bg-red-400 topHeader">
        <div className="h-1/3 w-full flex justify-between px-[2em] pt-[1em]">
          <p className="text-[1.2em] btnUser font-semibold font-mono">
            Ascolta Ora
          </p>
          <BtnUser />
        </div>
        {/* Btn start Now */}
        <div className="h-2/3 w-full flex items-center justify-center relative">
          <MdKeyboardDoubleArrowDown className="text-[#e7d5d5] absolute text-[2.5em] icon-animation" />
        </div>
      </TopHeader>

      {/* Main */}
      <main className="px-[1em] mt-[2em] flex flex-col">
        <SectionCustom className="w-full h-auto flex flex-col ">
          <TitleSlider
            paragrafo="I Mix da noi scelti"
            className="font-mono text-[1.2em] font-semibold"
          />

          <Slider className="min-h-[96] h-auto w-full  flex snap-x snap-mandatory text-[18px] overflow-x-scroll  gap-5" />

          {/* Barra di progression Slider */}
          <ProgressionSlider className="min-h-32  w-full flex justify-center items-start relative gap-4 mt-[1.5em]">
            <BtnProgression
              id={1}
              className="h-[0.5em] w-[1em] rounded bg-white shadow-black border border-red-400"
            />
            <BtnProgression
              id={2}
              className="h-[0.5em] w-[1em] rounded shadow-black border border-red-400"
            />
            <BtnProgression
              id={3}
              className="h-[0.5em] w-[1em] rounded shadow-black border border-red-400"
            />
          </ProgressionSlider>
        </SectionCustom>
      </main>
    </>
  );
};
export default Home;
