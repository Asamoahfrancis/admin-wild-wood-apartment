import { IoIosTrendingUp } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";
import StackedChart from "./charts/StackedChart";
import TinyBarChart from "./charts/TinyBarChart";
import Example from "./Chart";
const ReportCard = () => {
  return (
    <div className="w-full flex   gap-[20px] mt-3">
      <section className="  w-[70%]   flex flex-wrap gap-4">
        <div className="rounded-2xl w-[49%]  drop-shadow-[0_3px_6px_rgba(121,121,121,0.1)]  bg-white py-[16px] px-[24px] shadow-sm">
          <div className="p-3 text-text_primary">
            <h1 className="text-[16px] font-[400]">Occupancy Rate</h1>
            <div className="pt-2  items-center flex justify-between">
              <h2 className="text-[32px] font-[700]">90%</h2>
              <div className="h-10 w-10 rounded-[5px] flex justify-center items-center bg-deeppink bg-opacity-[30%] ">
                <IoIosTrendingUp className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-2.5">
              <h3 className="text-[14px] font-[400]">
                <span className="text-[#15C2A5] mr-2">8.5% &uarr;</span> Than
                Last year{" "}
              </h3>
            </div>
          </div>
        </div>
        <div className="rounded-2xl w-[49%]  drop-shadow-[0_3px_6px_rgba(121,121,121,0.1)]  bg-white py-[16px] px-[24px] shadow-sm">
          <div className="p-3 text-text_primary">
            <h1 className="text-[16px] font-[400]">Lease Renewal Rate </h1>
            <div className="pt-2  items-center flex justify-between">
              <h2 className="text-[32px] font-[700]">60%</h2>
              <div className="h-10 w-10 rounded-[5px] flex justify-center items-center bg-deeppink bg-opacity-[30%] ">
                <IoIosTrendingUp className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-2.5">
              <h3 className="text-[14px] font-[400]">
                <span className="text-[#15C2A5] mr-2">8.5% &uarr;</span> Than
                Last Week{" "}
              </h3>
            </div>
          </div>
        </div>
        <div className="rounded-2xl w-[49%]  drop-shadow-[0_3px_6px_rgba(121,121,121,0.1)]  bg-white py-[16px] px-[24px] shadow-sm">
          <div className="p-3 text-text_primary">
            <h1 className="text-[16px] font-[400]">Average Lease Duration </h1>
            <div className="pt-2  items-center flex justify-between">
              <h2 className="text-[32px] font-[700]">3 years</h2>
            </div>

            <div className="mt-2.5">
              <h3 className="text-[14px] font-[400]">
                <span className="text-[#15C2A5] mr-2">8.5% &uarr;</span> Than
                Last Week{" "}
              </h3>
            </div>
          </div>
        </div>
        <div className="rounded-2xl w-[49%]  drop-shadow-[0_3px_6px_rgba(121,121,121,0.1)]  bg-white py-[16px] px-[24px] shadow-sm">
          <div className="p-3 text-text_primary">
            <h1 className="text-[16px] font-[400]">Monthly Revenue: </h1>
            <div className="pt-2  items-center flex justify-between">
              <h2 className="text-[32px] font-[700]"> $3,234,535</h2>
              <div className="h-10 w-10 rounded-[5px] flex justify-center items-center bg-deeppink bg-opacity-[30%] ">
                <IoIosTrendingUp className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-2.5">
              <h3 className="text-[14px] font-[400]">
                <span className="text-[#15C2A5] mr-2">8.5% &uarr;</span> Than
                Last year{" "}
              </h3>
            </div>
          </div>
        </div>

        <div className="rounded-2xl w-[100%]  drop-shadow-[0_3px_6px_rgba(121,121,121,0.1)]  py-[16px] px-[24px] bg-white ">
          <div className="p-3 text-text_primary">
            <div>
              <div className="mt-5 flex items-center gap-8">
                <h3 className=" font-[600] w-full text-[30px] ">
                  Yearly Revenue
                </h3>
                <VscGraph />
              </div>
            </div>
            <div className="pt-2  items-center flex justify-center">
              <div className="w-full h-[300px] my-3 ">
                <StackedChart />
              </div>
            </div>

            <section className="mt-2 flex justify-between rounded-[10px] p-3 border border-[#E0E0FB] ">
              <div>
                <p className="flex items-center gap-2">
                  <span className="w-[10px] block rounded-full h-[10px] bg-[#6AD2FF]"></span>
                  <span>Attendees</span>
                </p>
                <p>25%</p>
              </div>
              <p className="w-[1px] h-[47px] bg-[#F4F7FE]"></p>
              <div>
                <p className="flex items-center gap-2">
                  <span className="w-[10px] block rounded-full h-[10px] bg-[#6666EA]"></span>
                  <span>Sponsors</span>
                </p>
                <p>65%</p>
              </div>{" "}
            </section>
          </div>
        </div>
      </section>
      <section className="flex-auto ">
        <section>
          <div className="rounded-2xl h-[345px] drop-shadow-[0_3px_6px_rgba(121,121,121,0.1)]  py-[8px] px-[24px] bg-white ">
            <div className="p-2 text-text_primary">
              <div>
                <div className="mt-5 flex items-center gap-8">
                  <p className=" font-[600] w-full ">
                    Maintenance and Service Analytics
                  </p>
                </div>
              </div>
              <div className="pt-2  items-center flex justify-center">
                <div className=" w-[143px] h-[143px] my-3 ">
                  <Example />
                </div>
              </div>

              <section className="mt-2 flex justify-between rounded-[10px] p-2 border ">
                <div>
                  <p className="flex items-center gap-2">
                    <span className="w-[10px] block rounded-full h-[10px] bg-red-600"></span>
                    <span>Service Request</span>
                  </p>
                  <p>25%</p>
                </div>
                <p className="w-[1px] h-[47px] bg-[#F4F7FE]"></p>
                <div>
                  <p className="flex items-center gap-2">
                    <span className="w-[10px] block rounded-full h-[10px] bg-black"></span>
                    <span>Sponsors</span>
                  </p>
                  <p>65%</p>
                </div>{" "}
              </section>
            </div>
          </div>
          <div className="rounded-2xl mt-5 mb-10 drop-shadow-[0_3px_6px_rgba(121,121,121,0.1)]  py-[10px] px-[24px] bg-white ">
            <div className="p-2 text-text_primary">
              <div>
                <div className="mt-5 flex items-center gap-8">
                  <p className=" font-[400] w-full text-[#6E6C8E] ">
                    Daily Traffic
                  </p>
                  <p className="text-[#05CD99]">+2.45%</p>
                </div>
                <p className="flex items-center gap-4">
                  <span className=" text-[30px] font-[600]">2.579</span>{" "}
                  <span className="text-[12px]  text-[#6E6C8E]">
                    Page visit
                  </span>
                </p>
              </div>
              <div className="pt-2  items-center flex justify-center">
                <div className="w-full  h-[200px] my-3 ">
                  <TinyBarChart />
                </div>
              </div>

              <section className="mt-2 flex justify-between rounded-[10px] p-2 border  ">
                <div>
                  <p className="flex items-center gap-2">
                    <span className="w-[10px] block rounded-full h-[10px] bg-[#6AD2FF]"></span>
                    <span>Attendees</span>
                  </p>
                  <p>25%</p>
                </div>
                <p className="w-[1px] h-[47px] bg-[#F4F7FE]"></p>
                <div>
                  <p className="flex items-center gap-2">
                    <span className="w-[10px] block rounded-full h-[10px] bg-[#6666EA]"></span>
                    <span>Sponsors</span>
                  </p>
                  <p>65%</p>
                </div>{" "}
              </section>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ReportCard;
