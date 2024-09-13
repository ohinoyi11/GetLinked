import React from "react";
import attributes from "../assets/attributes.png";

function Criteria() {
  return (
    <div className="border-b-[1px] flex flex-col md:flex-row-reverse m-6 md:m-11 text-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          className="w-64 md:w-auto object-contain"
          src={attributes}
          alt="Judging Criteria Key attributes"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl md:text-4xl font-bold pb-5">
          Judging Criteria Key Attributes
        </h3>
        <p className="text-sm md:text-base pb-5">
          Innovation and Creativity: Evaluate the uniqueness and creativity of
          the solution. Consider whether it addresses a real-world problem in a
          novel way or introduces innovative features.
        </p>
        <p className="text-sm md:text-base pb-5">
          Functionality: Assess how well the solution works. Does it perform its
          intended functions effectively and without major issues? Judges would
          consider the completeness and robustness of the solution.
        </p>
        <p className="text-sm md:text-base pb-5">
          Impact and Relevance: Determine the potential impact of the solution
          in the real world. Does it address a significant problem, and is it
          relevant to the target audience? Judges would assess the potential
          social, economic, or environmental benefits.
        </p>
        <p className="text-sm md:text-base pb-5">
          Technical Complexity: Evaluate the technical sophistication of the
          solution. Judges would consider the complexity of the code, the use of
          advanced technologies or algorithms, and the scalability of the
          solution.
        </p>
        <p className="text-sm md:text-base pb-5">
          Adherence to Hackathon Rules: Judges will ensure that the team adhered
          to the rules and guidelines of the hackathon, including deadlines, use
          of specific technologies or APIs, and any other competition-specific
          requirements.
        </p>
      </div>
    </div>
  );
}

export default Criteria;
