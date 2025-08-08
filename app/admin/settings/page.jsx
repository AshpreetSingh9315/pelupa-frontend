"use client";

import React, { useEffect, useState } from "react";
import axios from "../../../lib/api";

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    address: "",
    pincode: "",
    socials: {
      instagram: "",
      facebook: "",
    },
    logo: null,
  });
  console.log(process.env.NEXT_PUBLIC_API_BASE_IMAGE_URL + "/" + settings.logo);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get("/settings");
        const raw = response.data.data;

        if (Array.isArray(raw) && raw.length > 0) {
          const data = raw[0]; // ✅ get the first object

          setSettings({
            id: data.id || "",
            name: data.name || "",
            email: data.email || "",
            mobile: data.mobile || "",
            address: data.address || "",
            pincode: data.pincode || "",
            socials: {
              instagram: (data.socials || {}).instagram || "",
              facebook: (data.socials || {}).facebook || "",
            },
            logo: data.logo || null,
          });
        } else {
          console.warn("No settings found in API response.");
        }
      } catch (err) {
        console.error("Failed to fetch settings", err);
      }
    };

    fetchSettings();
  }, []);

  useEffect(() => {
    console.log("Current settings state:", settings); // 👈 add this
  }, [settings]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "instagram" || name === "facebook") {
      setSettings((prev) => ({
        ...prev,
        socials: {
          ...prev.socials,
          [name]: value,
        },
      }));
    } else {
      setSettings((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e) => {
    setSettings((prev) => ({
      ...prev,
      logo: e.target.files[0],
    }));
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("id", settings.id);
    formData.append("name", settings.name);
    formData.append("email", settings.email);
    formData.append("mobile", settings.mobile);
    formData.append("address", settings.address);
    formData.append("pincode", settings.pincode);
    formData.append("socials", JSON.stringify(settings.socials));

    if (settings.logo instanceof File) {
      formData.append("logo", settings.logo);
    }

    try {
      const response = await axios.post("/settings", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Saved:", response.data);
    } catch (err) {
      console.error("Failed to save settings", err);
    }
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("name", settings.name);
    formData.append("email", settings.email);
    formData.append("mobile", settings.mobile);
    formData.append("address", settings.address);
    formData.append("pincode", settings.pincode);
    formData.append("socials", JSON.stringify(settings.socials));

    if (settings.logo instanceof File) {
      formData.append("logo", settings.logo);
    }

    try {
      const response = await axios.put(`/settings/${settings.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Updated:", response.data);
    } catch (error) {
      console.error("Failed to update settings:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 underline">Settings</h2>
      <form className="space-y-4">
        <input type="hidden" name="id" value={settings.id} />

        {/* Two-column grid for inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={settings.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Mobile</label>
            <input
              type="text"
              name="mobile"
              value={settings.mobile}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={settings.address}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Pincode</label>
            <input
              type="text"
              name="pincode"
              value={settings.pincode}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Instagram</label>
            <input
              type="text"
              name="instagram"
              value={settings.socials.instagram}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Facebook</label>
            <input
              type="text"
              name="facebook"
              value={settings.socials.facebook}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Logo</label>
            <input
              type="file"
              name="logo"
              onChange={handleFileChange}
              className="w-full border p-2 rounded"
            />
            {settings.logo && (
              <div className="mt-2 text-sm text-gray-500">
                Selected: {settings.logo.name}
              </div>
            )}
            {typeof settings.logo === "string" && (
              <img
                src={`${process.env.NEXT_PUBLIC_API_BASE_IMAGE_URL}${settings.logo}`}
                alt="Logo"
                className="w-32 h-32 object-contain mt-2"
              />
            )}
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="button"
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleUpdate}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;
