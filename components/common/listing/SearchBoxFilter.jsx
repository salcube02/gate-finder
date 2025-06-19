'use client'

import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKeyword } from "../../../features/properties/propertiesSlice";


const SearchBoxFilter = () => {
  const { keyword } = useSelector((state) => state.properties);

  // input state
  const [getKeyword, setKeyword] = useState(keyword);

  // advanced state - Initialize as empty array to prevent hydration mismatch
  const [getAdvanced, setAdvanced] = useState([]);
  
  // Initialize advanced features after component mounts
  useEffect(() => {
    const initialAdvanced = [
      { id: "air-conditioning", name: "Air Conditioning" },
      { id: "barbeque", name: "Barbeque" },
      { id: "gym", name: "Gym" },
      { id: "microwave", name: "Microwave" },
      { id: "tv-cable", name: "TV Cable" },
      { id: "lawn", name: "Lawn" },
      { id: "refrigerator", name: "Refrigerator" },
      { id: "swimming-pool", name: "Swimming Pool" },
      { id: "wifi", name: "WiFi" },
      { id: "sauna", name: "Sauna" },
      { id: "dryer", name: "Dryer" },
      { id: "washer", name: "Washer" },
      { id: "laundry", name: "Laundry" },
      { id: "outdoor-shower", name: "Outdoor Shower" },
      { id: "window-coverings", name: "Window Coverings" },
    ];
    setAdvanced(initialAdvanced);
  }, []);

  const dispath = useDispatch();


  // keyword
  useEffect(() => {
    dispath(addKeyword(getKeyword));
  }, [dispath, getKeyword]);

  // clear filter
  const clearHandler = () => {
    clearAllFilters();
  };

  const clearAllFilters = () => {
    setKeyword("");
    clearAdvanced();
  };

  // clear advanced
  const clearAdvanced = () => {
    const changed = getAdvanced.map((item) => {
      item.isChecked = false;
      return item;
    });
    setAdvanced(changed);
  };

  // add advanced
  const advancedHandler = (id) => {
    const data = getAdvanced.map((feature) => {
      if (feature.id === id) {
        if (feature.isChecked) {
          feature.isChecked = false;
        } else {
          feature.isChecked = true;
        }
      }
      return feature;
    });

    setAdvanced(data);
  };

  return (
    <>
      <div className="form-group ">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Title"
          value={getKeyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      {/* End searchbox */}
    </>
  );
};

export default SearchBoxFilter;
