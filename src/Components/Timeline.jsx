import React from "react";
import TimelineText from "./TimelineText";

function Timeline() {
  return (
    <div className="p-6 md:p-10">
      {/* Title and Description */}
      <h3 className="text-center text-white text-3xl font-bold mb-4">
        Timeline
      </h3>
      <p className="text-center text-white text-sm mb-8">
        Here is the breakdown of the time we anticipate using for the upcoming
        event.
      </p>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-white opacity-50"></div>

        {/* Timeline Entries */}
        <div className="ml-8 md:ml-16 space-y-8 md:space-y-12">
          <TimelineText
            title="Hackathon Announcement"
            description="The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register"
            date="November 18, 2023"
          />

          <TimelineText
            title="Teams Registration begins"
            description="Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register"
            date="November 18, 2023"
          />

          <TimelineText
            title="Teams Registration ends"
            description="Interested Participants are no longer allowed to register"
            date="November 18, 2023"
          />

          <TimelineText
            title="Announcement of the accepted teams and ideas"
            description="All teams whose ideas have been accepted into getlinked tech hackathon 1.0 2023 are formally announced"
            date="November 18, 2023"
          />

          <TimelineText
            title="Getlinked Hackathon 1.0 Officially Begins"
            description="Accepted teams can now proceed to build their groundbreaking, skill-driven solutions"
            date="November 18, 2023"
          />

          <TimelineText
            title="Demo Day"
            description="Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day"
            date="November 18, 2023"
          />
        </div>
      </div>
    </div>
  );
}

export default Timeline;
