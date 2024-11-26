import React, { useState } from "react";

const InputPodcast = () => {
  const [title, setTitle] = useState(""); // State for storing podcast title
  const [description, setDescription] = useState(""); // State for storing podcast description
  const [thumbnail, setThumbnail] = useState(null); // State for storing thumbnail preview
  const [audioFile, setAudioFile] = useState(null); // State for storing selected audio file
  const [category, setCategory] = useState(""); // State for storing selected category

  // Handle title change
  const handleTitleChange = (e) => {
    setTitle(e.target.value); // Update the title state
  };

  // Handle description change
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value); // Update the description state
  };

  // Handle file selection (thumbnail)
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result); // Set the image preview
      };
      reader.readAsDataURL(file); // Read the file as a data URL (base64)
    }
  };

  // Handle drag over event (for drag-and-drop)
  const handleDragOver = (e) => {
    e.preventDefault(); // Prevent default behavior to allow drop
    e.stopPropagation();
  };

  // Handle drop event (for drag-and-drop)
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0]; // Get the dropped file
    if (file && file.type.startsWith("image")) { // Ensure the dropped file is an image
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result); // Set the image preview
      };
      reader.readAsDataURL(file); // Read the file as a data URL (base64)
    } else {
      alert("Please drop a valid image file.");
    }
  };

  // Handle audio file selection
  const handleAudioFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected audio file
    if (file) {
      setAudioFile(file); // Store the audio file in state
    }
  };

  // Handle category selection
  const handleCategoryChange = (e) => {
    setCategory(e.target.value); // Update the category state
  };

  return (
    <div className="my-4 px-4 lg:px-12 flex flex-col lg:flex-row gap-4">
      <div
        className="w-full lg:w-2/6 flex items-center justify-center lg:justify-start mb-4 lg:mb-0"
        onDragOver={handleDragOver} // Handle dragover event
        onDrop={handleDrop} // Handle drop event
      >
        <div className="w-full h-[20vh] lg:h-[60vh] flex items-center justify-center hover:bg-slate-50 transition-all border-dashed border-2 border-black">
          {/* The file input is removed as we are focusing only on drag and drop */}
          <div className="text-xl h-full flex justify-center items-center cursor-pointer">
            {thumbnail ? (
              <img src={thumbnail} alt="Thumbnail Preview" className="w-full h-full object-cover" />
            ) : (
              <span>Drag and drop the thumbnail here</span>
            )}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-4/6">
        <h1 className="text-2xl font-semibold">Create your podcast</h1>

        {/* Podcast Title Input */}
        <div className="mt-5">
          <label htmlFor="podcastTitle" className="block text-lg font-semibold">
            Title
          </label>
          <input
            type="text"
            id="podcastTitle"
            value={title}
            onChange={handleTitleChange}
            className="mt-2 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Title for your podcast"
          />
        </div>

        {/* Podcast Description Input */}
        <div className="mt-5">
          <label htmlFor="podcastDescription" className="block text-lg font-semibold">
            Description
          </label>
          <textarea
            id="podcastDescription"
            value={description}
            onChange={handleDescriptionChange}
            className="mt-2 p-2 border border-gray-300 rounded-md w-full h-32"
            placeholder="Description for your podcast"
          />
        </div>

        {/* Audio File Upload */}
        <div className="mt-5">
          <label htmlFor="audioFile" className="block text-lg font-semibold">
            Select Audio
          </label>
          <input
            type="file"
            accept=".mp3,.wav,.ogg,.flac"
            id="audioFile"
            onChange={handleAudioFileChange}
            className="mt-2 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        {/* Category Selection */}
        <div className="mt-5">
          <label htmlFor="category" className="block text-lg font-semibold">
            Select Category
          </label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="mt-2 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="">Select Category</option>
            <option value="Technology">Technology</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Business">Business</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="mt-5">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-500 transition-all w-full md:w-auto"
          >
            Create Podcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputPodcast;
