import React from "react";
import attributes from "../assets/attributes.png";
import GradientButton from "./Buttons";

function Criteria() {
  return (
    <div className="flex flex-col md:flex-row p-6 md:p-32 text-white items-center border-b-[1px]">
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          className="w-64 md:w-auto object-contain"
          src={attributes}
          alt="Judging Criteria Key attributes"
        />
      </div>

      <div className="w-full md:w-1/2 md:pl-10">
        <h3 className="text-2xl md:text-4xl font-bold mb-4">
          Judging Criteria <br />{" "}
          <span className="text-[#D434FE]">Key Attributes</span>
        </h3>
        <p className="text-sm md:text-base font pb-5">
          <span className="text-[#FF26B9] font-bold">
            Innovation and Creativity:
          </span>
          Evaluate the uniqueness and creativity of the solution. Consider
          whether it addresses a real-world problem in a novel way or introduces
          innovative features.
        </p>
        <p className="text-sm md:text-base font pb-5">
          <span className="text-[#FF26B9] font-bold">Functionality:</span>{" "}
          Assess how well the solution works. Does it perform its intended
          functions effectively and without major issues? Judges would consider
          the completeness and robustness of the solution.
        </p>
        <p className="text-sm md:text-base font pb-5">
          <span className="text-[#FF26B9] font-bold">
            Impact and Relevance:
          </span>{" "}
          Determine the potential impact of the solution in the real world. Does
          it address a significant problem, and is it relevant to the target
          audience? Judges would assess the potential social, economic, or
          environmental benefits.
        </p>
        <p className="text-sm md:text-base font pb-5">
          <span className="text-[#FF26B9] font-bold">
            Technical Complexity:
          </span>{" "}
          Evaluate the technical sophistication of the solution. Judges would
          consider the complexity of the code, the use of advanced technologies
          or algorithms, and the scalability of the solution.
        </p>
        <p className="text-sm md:text-base font pb-5">
          <span className="text-[#FF26B9] font-bold">
            Adherence to Hackathon Rules:
          </span>{" "}
          Judges will ensure that the team adhered to the rules and guidelines
          of the hackathon, including deadlines, use of specific technologies or
          APIs, and any other competition-specific requirements.
        </p>

        <GradientButton text="Read More" />
      </div>
    </div>
  );
}

export default Criteria;
