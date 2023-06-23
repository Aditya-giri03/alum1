import React, { useEffect } from 'react';
// import Table from './Table';
import Table_Content from './Table_Content';
import { useState } from 'react';

let DATA = [
  {
    name: 'Jane Cooper',
    email: 'jane.cooper@example.com',
    cgpa: 10,
    branch: 'CSE',
    resume: 'Download',
    imgUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Cody Fisher',
    email: 'cody.fisher@example.com',
    cgpa: 4,
    branch: 'ME',
    resume: 'Download',
    imgUrl:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Cody Fisher',
    email: 'cody.fisher@example.com',
    cgpa: 8,
    branch: 'ECE',
    resume: 'Download',
    imgUrl:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Cody Fisher',
    email: 'cody.fisher@example.com',
    cgpa: 9,
    branch: 'MAC',
    resume: 'Download',
    imgUrl:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Cody Fisher',
    email: 'cody.fisher@example.com',
    cgpa: 6.5,
    branch: 'EE',
    resume: 'Download',
    imgUrl:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Cody Fisher',
    email: 'cody.fisher@example.com',
    cgpa: 7.86,
    branch: 'ECE',
    resume: 'Download',
    imgUrl:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Cody Fisher',
    email: 'cody.fisher@example.com',
    cgpa: 6,
    branch: 'ECE',
    resume: 'Download',
    imgUrl:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Cody Fisher',
    email: 'cody.fisher@example.com',
    cgpa: 9.21,
    branch: 'CSAI',
    resume: 'Download',
    imgUrl:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
];
const Branches = {
  CSE: false,
  CSAI: false,
  CSDS: false,
  CSDA: false,
  CIOT: false,
  MAC: false,
  IT: false,
  ITNS: false,
  ECE: false,
  EIOT: false,
  ME: false,
  CE: false,
  ICE: false,
  EE: false,
  MPAE: false,
  BT: false,
  ECAM: false,
  GI: false,
  MEEV: false,
};

const Recruit_Table = () => {
  const [gpa_filter, set_gpa] = useState(0);
  const [data, setData] = useState(DATA);
  const [Branch_Drop, set_Branch_Drop] = useState('hidden');
  const [branch_filter, set_branch_filter] = useState(Branches);

  const dropdown_handler = () => {
    if (Branch_Drop == 'hidden') {
      set_Branch_Drop((prev) => {
        return '';
      });
    } else {
      set_Branch_Drop((prev) => {
        return 'hidden';
      });
    }
  };

  const branch_filter_handler = (event) => {
    // set_branch_filter((prev) => {

    if (event.target.checked) {
      let editBranch = event.target.value;
      set_branch_filter((prev) => {
        return { ...branch_filter, [editBranch]: true };
      });
    } else {
      let editBranch = event.target.value;
      set_branch_filter((prev) => {
        return { ...branch_filter, [editBranch]: false };
      });
    }
  };

  const clear_all_handler = () => {
    set_branch_filter((prev) => {
      return Branches;
    });
  };
  const select_all_handler = () => {
    set_branch_filter((prev) => {
      return {
        CSE: true,
        CSAI: true,
        CSDS: true,
        CSDA: true,
        CIOT: true,
        MAC: true,
        IT: true,
        ITNS: true,
        ECE: true,
        EIOT: true,
        ME: true,
        CE: true,
        ICE: true,
        EE: true,
        MPAE: true,
        BT: true,
        ECAM: true,
        GI: true,
        MEEV: true,
      };
    });
  };

  const filter_handler = (e) => {
    e.preventDefault();
    let newData = DATA.filter((currentValue) => {
      return (
        currentValue.cgpa >= gpa_filter && branch_filter[currentValue.branch]
      );
    });
    setData((prev) => {
      return newData;
    });
    set_Branch_Drop((prev) => {
      return 'hidden';
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };
  console.log('RE - render');
  console.log(branch_filter);
  return (
    <div class=" overflow-x-auto shadow-md sm:rounded-lg">
      <div class="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
        <div className="m-4 w-full">
          <form
            className="text-xl bg-gray-100 rounded-xl"
            onKeyDown={handleKeyDown}
          >
            <div className="flex md:flex-row flex-col">
              <div class="m-4">
                <label
                  for="steps-range"
                  class="inline mb-2 text-sm font-medium text-gray-900"
                >
                  Select Min CGPA :
                </label>
                <input
                  class="inline mx-2 bg-gray-100"
                  type="Number"
                  value={gpa_filter}
                  onChange={(e) => {
                    if (e.target.value > 10) {
                      set_gpa((prev) => {
                        return 10;
                      });
                    } else {
                      set_gpa((prev) => {
                        return e.target.value;
                      });
                    }
                  }}
                  min="0"
                  max="10"
                  step="0.01"
                />
                <input
                  id="steps-range"
                  type="range"
                  min="0"
                  max="10"
                  value={gpa_filter}
                  step="0.01"
                  onChange={(e) => set_gpa(e.target.value)}
                  class="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                ></input>
              </div>
              <div class="mx-auto my-auto">
                <button
                  id="dropdownSearchButton"
                  data-dropdown-toggle="dropdownSearch"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                  onClick={dropdown_handler}
                >
                  Select Branch{' '}
                  <svg
                    class="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div
                  id="dropdownSearch"
                  class={
                    `z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-00 absolute ` +
                    Branch_Drop
                  }
                >
                  <ul
                    class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownSearchButton"
                  >
                    {Object.keys(branch_filter).map((e, idx) => {
                      return (
                        <li>
                          <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input
                              id={`checkbox-item-` + idx}
                              type="checkbox"
                              value={e}
                              checked={branch_filter[e]}
                              onChange={branch_filter_handler}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            ></input>
                            <label
                              for={`checkbox-item-` + idx}
                              class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                            >
                              {e}
                            </label>
                          </div>
                        </li>
                      );
                    })}
                    {/* <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-11"
                        type="checkbox"
                        value="CSE"
                        checked={branch_filter.CSE}
                        onChange={branch_filter_handler}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        for="checkbox-item-11"
                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        CSE
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-12"
                        type="checkbox"
                        value="CSAI"
                        onChange={branch_filter_handler}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        for="checkbox-item-12"
                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        CSAI
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-13"
                        type="checkbox"
                        value="CSDS"
                        onChange={branch_filter_handler}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        for="checkbox-item-13"
                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        CSDS
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-14"
                        type="checkbox"
                        value="CSDA"
                        onChange={branch_filter_handler}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        for="checkbox-item-14"
                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        CSDA
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-15"
                        type="checkbox"
                        value="CIOT"
                        onChange={branch_filter_handler}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        for="checkbox-item-15"
                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        CIOT
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-16"
                        type="checkbox"
                        value="MAC"
                        onChange={branch_filter_handler}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        for="checkbox-item-16"
                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        MAC
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-17"
                        type="checkbox"
                        value="ITNS"
                        onChange={branch_filter_handler}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        for="checkbox-item-17"
                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        ITNS
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-18"
                        type="checkbox"
                        value="ECE"
                        onChange={branch_filter_handler}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        for="checkbox-item-18"
                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        ECE
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-19"
                        type="checkbox"
                        value="EIOT"
                        onChange={branch_filter_handler}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        for="checkbox-item-19"
                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        EIOT
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-20"
                        type="checkbox"
                        value="ME"
                        onChange={branch_filter_handler}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        for="checkbox-item-20"
                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        ME
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-21"
                        type="checkbox"
                        value="CE"
                        onChange={branch_filter_handler}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        for="checkbox-item-21"
                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        CE
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-22"
                        type="checkbox"
                        value="ICE"
                        onChange={branch_filter_handler}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        for="checkbox-item-22"
                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        ICE
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-23"
                        type="checkbox"
                        value="EE"
                        onChange={branch_filter_handler}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        for="checkbox-item-23"
                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        EE
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-24"
                        type="checkbox"
                        value="MPAE"
                        onChange={branch_filter_handler}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        for="checkbox-item-24"
                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        MPAE
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-25"
                        type="checkbox"
                        value="BT"
                        onChange={branch_filter_handler}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        for="checkbox-item-25"
                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        BT
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-26"
                        type="checkbox"
                        value="ECAM"
                        onChange={branch_filter_handler}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        for="checkbox-item-26"
                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        ECAM
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-27"
                        type="checkbox"
                        value="GI"
                        onChange={branch_filter_handler}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        for="checkbox-item-27"
                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        GI
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-28"
                        type="checkbox"
                        value="MEEV"
                        onChange={branch_filter_handler}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></input>
                      <label
                        for="checkbox-item-28"
                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        MEEV
                      </label>
                    </div>
                  </li> */}
                  </ul>
                  <button
                    onClick={clear_all_handler}
                    type="button"
                    class="flex w-full items-center p-3 text-sm font-medium text-red-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500"
                  >
                    <svg
                      class="w-5 h-5 mr-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4z"></path>
                    </svg>
                    Clear All
                  </button>
                  <button
                    onClick={select_all_handler}
                    type="button"
                    class="flex w-full items-center p-3 text-sm font-medium text-green-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500"
                  >
                    <svg
                      class="w-5 h-5 mr-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13  8a1 1 0 100 2h4a1 5 0 100-2h-4z"></path>
                    </svg>
                    Select All
                  </button>
                </div>
              </div>
            </div>

            {/* <div>
              CSE :{' '}
              <input
                type="Checkbox"
                value="CSE"
                onChange={branch_filter_handler}
              />
            </div>
            <div>
              CSAI :{' '}
              <input
                type="Checkbox"
                value="CSAI"
                onChange={branch_filter_handler}
              />
            </div>
            <div>
              CSDS :{' '}
              <input
                type="Checkbox"
                value="CSDS"
                onChange={branch_filter_handler}
              />
            </div>
            <div>
              CSDA :{' '}
              <input
                type="Checkbox"
                value="CSDA"
                onChange={branch_filter_handler}
              />
            </div>
            <div>
              CIOT :{' '}
              <input
                type="Checkbox"
                value="CIOT"
                onChange={branch_filter_handler}
              />
            </div>
            <div>
              MAC :{' '}
              <input
                type="Checkbox"
                value="MAC"
                onChange={branch_filter_handler}
              />
            </div>
            <div>
              MAC :{' '}
              <input
                type="Checkbox"
                value="IT"
                onChange={branch_filter_handler}
              />
            </div>
            <div>
              ITNS :{' '}
              <input
                type="Checkbox"
                value="ITNS"
                onChange={branch_filter_handler}
              />
            </div>
            <div>
              ECE :{' '}
              <input
                type="Checkbox"
                value="ECE"
                onChange={branch_filter_handler}
              />
            </div>
            <div>
              EIOT :{' '}
              <input
                type="Checkbox"
                value="EIOT"
                onChange={branch_filter_handler}
              />
            </div>
            <div>
              ME :{' '}
              <input
                type="Checkbox"
                value="ME"
                onChange={branch_filter_handler}
              />
            </div>
            <div>
              CE :{' '}
              <input
                type="Checkbox"
                value="CE"
                onChange={branch_filter_handler}
              />
            </div>
            <div>
              ICE :{' '}
              <input
                type="Checkbox"
                value="ICE"
                onChange={branch_filter_handler}
              />
            </div>
            <div>
              EE :{' '}
              <input
                type="Checkbox"
                value="EE"
                onChange={branch_filter_handler}
              />
            </div>
            <div>
              MPAE :{' '}
              <input
                type="Checkbox"
                value="MPAE"
                onChange={branch_filter_handler}
              />
            </div>
            <div>
              BT :{' '}
              <input
                type="Checkbox"
                value="BT"
                onChange={branch_filter_handler}
              />
            </div>
            <div>
              ECAM :{' '}
              <input
                type="Checkbox"
                value="ECAM"
                onChange={branch_filter_handler}
              />
            </div>
            <div>
              GI :{' '}
              <input
                type="Checkbox"
                value="GI"
                onChange={branch_filter_handler}
              />
            </div>
            <div>
              MEEV :{' '}
              <input
                type="Checkbox"
                value="MEEV"
                onChange={branch_filter_handler}
              />
            </div> */}
            <button
              class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4"
              onClick={filter_handler}
            >
              Filter
            </button>
          </form>
        </div>
      </div>

      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 m-4">
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all-search" class="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Branch
            </th>
            <th scope="col" class="px-6 py-3">
              CGPA
            </th>
            <th scope="col" class="px-6 py-3">
              Resume
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            return <Table_Content info={e} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Recruit_Table;
