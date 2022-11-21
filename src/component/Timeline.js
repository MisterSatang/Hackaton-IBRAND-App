import { Fragment } from "react";
import TimelinePoint from "./TimelinePoint";

// const step = 6;

const dataSteps = [
  {
    id: 1,
    name: "เลือกสูตร",
  },
  {
    id: 2,
    name: "ประเมินราคา",
  },
  {
    id: 3,
    name: "สินค้าทดสอบ",
  },
  {
    id: 4,
    name: "มัดจำ",
  },
  {
    id: 5,
    name: "เลือกเเพคเกจ",
  },
  {
    id: 6,
    name: "ขอ อย.",
  },
  {
    id: 7,
    name: "ผลิตสินค้า",
  },
  {
    id: 8,
    name: "จ่ายเงิน",
  },
  {
    id: 9,
    name: "ส่งสินค้า",
  },
];

export default function Navbar({ step }) {
  console.log(dataSteps);
  return (
    <Fragment>
      <div className="container-fluid pt-4 bg-body-purple">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 p-0">
            <div className="row p-0 m-0">
              <div class="container-fluid ">
                <div class="row mt-4">
                  <div class="col">
                    <div
                      class="timeline-steps aos-init aos-animate"
                      data-aos="fade-up"
                    >
                      {dataSteps.map((dataStep) => (
                        <TimelinePoint
                          key={dataStep.id}
                          onStep={step}
                          steps={dataStep.id}
                          text={dataStep.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </Fragment>
  );
}
