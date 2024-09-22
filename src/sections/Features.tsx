import { Element } from "react-scroll";

import { Button } from "../components/Button";
import { details, features } from "../constants";

export const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="feature-after md:g7 relative flex flex-nowrap rounded-7xl border-2 border-s3 max-md:flex-col max-md:gap-3 max-md:rounded-none max-md:border-none md:flex-wrap md:overflow-hidden">
            {features.map(({ id, icon, title, caption, text, button }) => (
              <div
                key={id}
                className="max-md:g7 relative z-2 flex-50 px-5 pb-5 max-md:flex-320 max-md:rounded-3xl max-md:border-2 max-md:border-s3 md:px-10 md:pb-10"
              >
                <div className="flex w-full items-start justify-start">
                  <div className="-ml-3 mb-12 flex flex-col items-center justify-center">
                    <div className="h-16 w-0.5 bg-s3" />

                    <img
                      src={icon}
                      className="size-28 object-contain"
                      alt={title}
                    />
                  </div>
                </div>

                <p className="caption mb-5 max-md:mb-6">{caption}</p>
                <h2 className="h3 max-md:h5 mb-7 max-w-400 text-p4 max-md:mb-6">
                  {title}
                </h2>

                <p className="body-1 max-md:body-3 mb-11 max-md:mb-8">{text}</p>

                <Button icon={button.icon}>{button.title}</Button>
              </div>
            ))}

            <ul className="relative flex flex-grow justify-around rounded-7xl border-2 border-s3 px-[5%] max-md:hidden">
              <div className="absolute left-0 right-0 top-[38%] z-10 h-px w-full bg-s3/20" />

              {details.map(({ id, icon, title }) => (
                <li key={id} className="relative px-4 pb-14 pt-16">
                  <div className="absolute bottom-0 left-1/2 top-0 z-10 h-full w-px bg-s3/20" />

                  <div className="mx-auto mb-3 flex size-20 items-center justify-center rounded-full border-2 border-s2 shadow-500 transition-all duration-500 hover:border-s4">
                    <img
                      src={icon}
                      alt={title}
                      className="z-20 size-17/20 object-contain"
                    />
                  </div>

                  <h3 className="base-small relative z-2 mx-auto my-0 max-w-36 text-center uppercase">
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};
