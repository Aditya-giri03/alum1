'use clinet';

import { useState } from 'react';

export default function EditPortfolio({
  email,
  data,
  setRefresh,
  refresh,
  show,
  type,
  edit,
  location,
  setData,
  placeholder,
}) {
  const type_identifier = {
    occupation: ['Company', 'Position', 'Duration'],
    education: ['Intitution', 'Course', 'Year of Passing'],
    projects: ['Title', 'Domain', 'Duration'],
    honors: ['Title', 'Issuing Organisation', 'Date of Honor'],
  };
  const [error, setError] = useState(false);
  const [title, setTitle] = useState(edit ? data[type][location].title : '');
  const [subTitle, setSubTitle] = useState(
    edit ? data[type][location].subTitle : ''
  );
  const [description, setDescription] = useState(
    edit ? data[type][location].description : ''
  );
  const [duration, setDuration] = useState(
    edit ? data[type][location].duration : ''
  );
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    let updatedData = data[type];
    let oldData = JSON.stringify(data[type]);
    if (edit) {
      updatedData[location] = {
        title: title,
        subTitle: subTitle,
        description: description,
        duration: duration,
      };
    } else {
      updatedData.push({
        title: title,
        subTitle: subTitle,
        description: description,
        duration: duration,
      });
    }
    data[type] = updatedData;
    updatedData = JSON.stringify(updatedData);
    let bodyData = {
      email: email,
      oldData: oldData,
      category: type,
    };
    bodyData[type] = updatedData;
    const res = await fetch(`/api/edit-portfolio-item`, {
      method: 'POST',
      body: JSON.stringify(bodyData),
      cache: 'no-cache',
    }).then((e) => e.json());
    if (res.error) {
      setError(true);
      setLoading(false);
    } else {
      setData(data);
      setError(false);
      setRefresh(!refresh);
      setLoading(false);
      show(false);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <section class="bg-white">
          <div className="py-8 px-4 mx-auto max-w-3xl lg:py-14">
            <h2 className="text-2xl text-black font-bold">
              {edit ? 'Edit Details' : 'Add Details'}
            </h2>
            <hr className="mb-14 h-0.5" />
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-7">
                <div class="sm:col-span-2 relative">
                  <input
                    id={type_identifier[type][0]}
                    className="w-full p-3 border-2 border-gray-500  text-gray-900 bg-transparent rounded-lg  appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder=" "
                    // placeholder={placeholder[0]}
                  ></input>
                  <label
                    for={type_identifier[type][0]}
                    className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
                  >
                    {type_identifier[type][0]}
                  </label>
                </div>

                <div className="w-full relative">
                  <input
                    id={type_identifier[type][1]}
                    className="w-full p-3 border-2 border-gray-500  text-gray-900 bg-transparent rounded-lg  appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    required
                    value={subTitle}
                    onChange={(e) => setSubTitle(e.target.value)}
                    placeholder=" "
                    // placeholder={placeholder[1]}
                  ></input>
                  <label
                    for={type_identifier[type][1]}
                    className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
                  >
                    {type_identifier[type][1]}
                  </label>
                </div>

                <div className="w-full relative">
                  <input
                    id={type_identifier[type][2]}
                    className="w-full p-3 border-2 border-gray-500  text-gray-900 bg-transparent rounded-lg  appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    required
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder=" "
                    // placeholder={placeholder[2]}
                  ></input>
                  <label
                    for={type_identifier[type][2]}
                    className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
                  >
                    {type_identifier[type][2]}
                  </label>
                </div>

                <div class="sm:col-span-2">
                  <label
                    for="Description"
                    class="block mb-2 text-sm font-medium text-gray-500"
                  >
                    Description
                  </label>
                  <textarea
                    id="Description"
                    rows="8"
                    className="block p-2.5 w-full border-2 border-gray-500 text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Add more details..."
                    // placeholder={placeholder[3]}
                  ></textarea>
                </div>

                {error &&
                  'Some error occured, Maybe two devics are simultaneously editing'}
              </div>
              <button
                className="profile-add mt-4 p-4"
                action="submit"
                disabled={loading}
              >
                {edit ? 'Edit' : 'Add'}
              </button>
            </form>
            <button className="form-close" onClick={() => show(false)}>
              X
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
