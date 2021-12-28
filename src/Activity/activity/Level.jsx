import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ButtonBottomLine from "../../IotaComponents/Molecules/ButtonBottomLine";

const Level = ({ level, data }) => {
  const [dataToUse, setDataToUse] = useState([]);
  const [step, setStep] = useState(0);

  const actions = {
    SAVE_PROGRESS: (progres) => {
      console.log("[LEVEL]", level);
      console.log("[SAVE PROGRESS DATA]", progres);
    },
    NEXT_STEP: () => {
      console.log("[NEXT STEP]", step);
      setStep(step + 1);
    },
    PREV_STEP: () => {
      console.log("[PREV STEP]", step);
      setStep(step - 1);
    },
  };

  return (
    <div className="col-flex-start" style={{ height: "100%" }}>
      <div className="col-flex-start" style={{ height: "100%" }}>
        <div
          className="row-flex-centered text-center"
          style={{ marginTop: "10px", marginBottom: "20px" }}
        >
          <span className="is-size-3 is-bold">
            {data.steps[step].instruction}
          </span>
        </div>
        {data.steps[step].content.map((element, index) => (
          <element.component
            key={`contentcall_${index}`}
            ckey={`content_${index}`}
            actions={element.actions}
            content={element.content}
            savedData={
              dataToUse?.progress?.answers ? dataToUse?.progress?.answers : null
            }
            setDataToUse={(rep) =>
              setDataToUse({
                progress: rep,
              })
            }
          />
        ))}
        <div className="row-flex-centered ">
          <div className="mx-2">
            <ButtonBottomLine
              disablePrev={step === 0}
              onPrev={
                actions instanceof Object
                  ? () =>
                      data?.steps[step]?.content?.map((e) =>
                        e.actionsPrev
                          ? e.actionsPrev.forEach((func) => {
                              console.log("Function on call :", func);
                              actions[func](dataToUse);
                            })
                          : actions["PREV_STEP"]()
                      )
                  : () => actions["PREV_STEP"]()
              }
              onNext={
                actions instanceof Object
                  ? () =>
                      data?.steps[step]?.content?.map((e) =>
                        e.actions
                          ? e.actions.forEach((func) => {
                              console.log("Function on call :", func);
                              actions[func](dataToUse);
                            })
                          : () => actions["NEXT_STEP"]()
                      )
                  : () => actions["NEXT_STEP"]()
              }
              thisIsTheEnd={step === data.steps[step].length}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Level.propTypes = {
  level: PropTypes.number,
  data: PropTypes.shape({}),
};
Level.defaultProps = {
  level: 1,
  data: {},
};

export default Level;
