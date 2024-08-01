"use client";

import React, { useEffect, useRef } from "react";
import Datamap from "datamaps";

const JobsByStateMapWithImage = ({
  legendData,
}) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      mapContainerRef.current.innerHTML = "";
    }

    var election = new Datamap({
      scope: "usa",
      element: mapContainerRef.current,
      geographyConfig: {
        highlightBorderColor: "#bada55",
        popupTemplate: function (geography, data) {
          return '<div class="hoverinfo">' + geography.properties.name + 'Electoral Votes:' + data.electoralVotes + ' '
        },
        highlightBorderWidth: 3
      },
      fills: {
        DarkGreen: "#2B6F71",
        Green: "#3D9CA0",
        BlueGreen: "#4CC4C7",
        defaultFill: "#2B6F71",
      },
      data: {
        AZ: { fillKey: "DarkGreen", electoralVotes: 6 },
        CO: { fillKey: "DarkGreen", electoralVotes: 5 },
        DE: { fillKey: "DarkGreen", electoralVotes: 32 },
        FL: { fillKey: "UNDECIDED", electoralVotes: 29 },
        GA: { fillKey: "DarkGreen", electoralVotes: 32 },
        HI: { fillKey: "DarkGreen", electoralVotes: 32 },
        ID: { fillKey: "Green", electoralVotes: 32 },
        IL: { fillKey: "BlueGreen", electoralVotes: 32 },
        IN: { fillKey: "BlueGreen", electoralVotes: 11 },
        IA: { fillKey: "BlueGreen", electoralVotes: 11 },
        KS: { fillKey: "DarkGreen", electoralVotes: 32 },
        KY: { fillKey: "BlueGreen", electoralVotes: 32 },
        LA: { fillKey: "DarkGreen", electoralVotes: 32 },
        MD: { fillKey: "DarkGreen", electoralVotes: 32 },
        ME: { fillKey: "Green", electoralVotes: 32 },
        MA: { fillKey: "DarkGreen", electoralVotes: 32 },
        MN: { fillKey: "Green", electoralVotes: 32 },
        MI: { fillKey: "DarkGreen", electoralVotes: 32 },
        MS: { fillKey: "DarkGreen", electoralVotes: 32 },
        MO: { fillKey: "DarkGreen", electoralVotes: 13 },
        MT: { fillKey: "Green", electoralVotes: 32 },
        NC: { fillKey: "DarkGreen", electoralVotes: 32 },
        NE: { fillKey: "DarkGreen", electoralVotes: 32 },
        NV: { fillKey: "DarkGreen", electoralVotes: 32 },
        NH: { fillKey: "BlueGreen", electoralVotes: 32 },
        NJ: { fillKey: "DarkGreen", electoralVotes: 32 },
        NY: { fillKey: "Green", electoralVotes: 32 },
        ND: { fillKey: "Green", electoralVotes: 32 },
        NM: { fillKey: "Green", electoralVotes: 32 },
        OH: { fillKey: "Green", electoralVotes: 32 },
        OK: { fillKey: "Green", electoralVotes: 32 },
        OR: { fillKey: "DarkGreen", electoralVotes: 32 },
        PA: { fillKey: "Green", electoralVotes: 32 },
        RI: { fillKey: "BlueGreen", electoralVotes: 32 },
        SC: { fillKey: "BlueGreen", electoralVotes: 32 },
        SD: { fillKey: "BlueGreen", electoralVotes: 32 },
        TN: { fillKey: "DarkGreen", electoralVotes: 32 },
        TX: { fillKey: "Green", electoralVotes: 32 },
        UT: { fillKey: "Green", electoralVotes: 32 },
        WI: { fillKey: "Green", electoralVotes: 32 },
        VA: { fillKey: "DarkGreen", electoralVotes: 32 },
        VT: { fillKey: "BlueGreen", electoralVotes: 32 },
        WA: { fillKey: "DarkGreen", electoralVotes: 32 },
        WV: { fillKey: "DarkGreen", electoralVotes: 32 },
        WY: { fillKey: "BlueGreen", electoralVotes: 32 },
        CA: { fillKey: "DarkGreen", electoralVotes: 32 },
        CT: { fillKey: "DarkGreen", electoralVotes: 32 },
        AK: { fillKey: "DarkGreen", electoralVotes: 32 },
        AR: { fillKey: "Green", electoralVotes: 32 },
        AL: { fillKey: "DarkGreen", electoralVotes: 32 },
      },
    });
    election.labels();
  }, []);

  return (
    <div className="md:grid grid-row-1 grid-cols-2 items-center gap-36">
      <div className="w-full justify-center">
        <div
          id="map_election"
          // className="max-w-full h-auto"
          ref={mapContainerRef}
          style={{ height: "400px", width: "700px" }}
        ></div>
      </div>
      <div className="items-start mt-4 ml-12">
        {legendData.map((item, index) => (
          <div className="flex items-center mt-1" key={index}>
            <div
              className={`w-4 h-4 rounded-full`}
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="ml-2 text-sm">{item.percentage}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsByStateMapWithImage;
