import React, { useState, useEffect, useRef } from "react";
import { Controller } from "react-hook-form";
import { ReactComponent as Plus } from "../assets/images/plus-circle.svg";
import { ReactComponent as Trash } from "../assets/images/trash-2.svg";

const ImageUploader = ({ control, errors, name }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [hasImage, setHasImage] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageChange = (event, onChange) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setHasImage(true);
      onChange(file);
      console.log(file);
    }
  };

  const handleRemoveImage = (onChange) => {
    setImagePreview(null);
    setHasImage(false);
    onChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  return (
    <div className="space-y-[5px]">
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ...field } }) => (
          <>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              ref={fileInputRef}
              {...field}
              onChange={(e) => handleImageChange(e, onChange)}
              onClick={(e) => {
                e.target.value = null;
              }}
              accept="image/*"
            />
            <label
              htmlFor="file-upload"
              className="w-full flex justify-center border-dashed items-center rounded-[6px] p-[10px] h-[135px] border-[#808A93] border-[1px] cursor-pointer"
            >
              {hasImage ? (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-[92px] h-[82px] object-cover rounded-[4px]"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemoveImage(onChange);
                    }}
                    className="absolute bottom-[-7px] right-[-7px] bg-white border-[1px] border-[#021526] text-white rounded-[50%] p-1"
                  >
                    <Trash size={16} />
                  </button>
                </div>
              ) : (
                <Plus size={24} />
              )}
            </label>
          </>
        )}
        rules={{ required: true }}
      />
      {errors.image && <p className="text-red-500">File is required</p>}
    </div>
  );
};

export default ImageUploader;
