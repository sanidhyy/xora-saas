import { useState } from "react";
import CountUp from "react-countup";
import { Element } from "react-scroll";

import { plans } from "../constants";
import { Button } from "../components/Button";
import { cn } from "../lib/utils";

export const Pricing = () => {
  const [monthly, setMonthly] = useState(false);
  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
              Flexible pricing for teams of all sizes.
            </h3>

            <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
              <button
                className={cn("pricing-head_btn", monthly && "text-p4")}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </button>

              <button
                className={cn("pricing-head_btn", !monthly && "text-p4")}
                onClick={() => setMonthly(false)}
              >
                Annual
              </button>

              <div
                className={cn(
                  "g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%_-_16px)] w-[calc(50%_-_8px)] overflow-hidden shadow-400 transition-transform duration-500",
                  !monthly && "translate-x-full"
                )}
              />
            </div>

            <div className="pricing-bg">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outlines"
                className="relative z-2"
              />

              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outlines fill"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>

          {/* pricing plans */}
          <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
            {plans.map(
              (
                {
                  id,
                  title,
                  caption,
                  features,
                  icon,
                  logo,
                  priceMonthly,
                  priceYearly,
                },
                i
              ) => {
                const isPrimaryPlan = i === 1;

                return (
                  <div
                    key={id}
                    className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%_+_2px)]"
                  >
                    {isPrimaryPlan && (
                      <div className="g4 absolute h-330 left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl" />
                    )}

                    <div
                      className={cn(
                        "absolute left-0 right-0 z-2 flex items-center justify-center",
                        isPrimaryPlan ? "-top-6" : "-top-6 xl:-top-11"
                      )}
                    >
                      <img
                        src={logo}
                        alt={title}
                        className={cn(
                          "object-contain drop-shadow-2xl",
                          isPrimaryPlan ? "size-[120px]" : "size-[88px]"
                        )}
                      />
                    </div>

                    <div
                      className={cn(
                        "relative flex flex-col items-center",
                        isPrimaryPlan ? "pt-24" : "pt-12"
                      )}
                    >
                      <div
                        className={cn(
                          "small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase",
                          isPrimaryPlan
                            ? "border-p3 text-p3"
                            : "border-p1 text-p1"
                        )}
                      >
                        {title}
                      </div>

                      <div className="relative z-2 flex items-center justify-center">
                        <div
                          className={cn(
                            "h-num flex items-start",
                            isPrimaryPlan ? "text-p3" : "text-p4"
                          )}
                        >
                          $
                          <CountUp
                            start={priceMonthly}
                            end={monthly ? priceMonthly : priceYearly}
                            duration={0.4}
                            useEasing={false}
                            preserveValue
                          />
                        </div>

                        <div className="small-1 relative top-3 ml-1 uppercase">
                          / mo
                        </div>
                      </div>
                    </div>

                    <div
                      className={cn(
                        "body-1 relative z-2 mb-10 w-full border-b-s2 pb-9 text-center text-p4",
                        isPrimaryPlan && "border-b"
                      )}
                    >
                      {caption}
                    </div>

                    <ul className="mx-auto space-y-4 xl:px-7">
                      {features.map((feature) => (
                        <li
                          key={`${title}-${feature}`}
                          className="relative flex items-center gap-5"
                        >
                          <img
                            src="/images/check.png"
                            alt="check"
                            className="size-10 object-contain"
                          />

                          <p className="flex-1">{feature}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-10 flex w-full justify-center">
                      <Button icon={icon}>Get Started</Button>
                    </div>

                    {isPrimaryPlan && (
                      <p className="small-compact mt-9 text-center text-p3 before:content-['-'] after:mx-2.5 before:mx-2.5 after:content-['-']">
                        Limited time offer
                      </p>
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </Element>
    </section>
  );
};
