import React, { Fragment, useState } from "react";

export default function TimelinePoint({ onStep, steps, text }) {
  return (
    <Fragment>
      <div class="timeline-step">
        <div
          class="timeline-content"
          data-toggle="popover"
          data-trigger="hover"
          data-placement="top"
        >
          <div
            class={`${
              onStep >= steps ? "inner-circle" : "inner-circle-disable"
            }`}
          ></div>
          <p
            class={`fs-6 fw-bold mt-3 mb-1 text-uppercase ${
              onStep >= steps ? "text-primary" : ""
            }`}
          >
            Step {steps}
          </p>
          <p class={`fs-6 mb-1 ${onStep >= steps ? "text-primary" : ""}`}>
            {text}
          </p>
        </div>
      </div>
    </Fragment>
  );
}
