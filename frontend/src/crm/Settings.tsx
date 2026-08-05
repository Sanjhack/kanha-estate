import { useState } from "react";
import Header from "../components/Header";
import {
  Building2,
  UserCircle,
  Phone,
  Mail,
  Globe,
  MapPin,
  FileText,
} from "lucide-react";

export default function Settings() {

  const [company, setCompany] = useState({
    companyName: "Shervy Realty",
    phone: "+91 9876543210",
    email: "info@shervyrealty.com",
    website: "www.shervyrealty.com",
    address: "Lucknow, Uttar Pradesh",
    gst: "09ABCDE1234F1Z5",
  });

  const [admin, setAdmin] = useState({
    name: "Sanjay",
    email: "admin@shervyrealty.com",
    mobile: "+91 9876543210",
    username: "admin",
  });

  return (

    <div className="flex-1 bg-slate-100 min-h-screen p-8">

      <Header />

      <div className="bg-white rounded-2xl shadow-md p-8 mt-6">

        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="text-gray-500 mt-2">
          Manage company and administrator information
        </p>

        {/* Company Information */}

        <div className="mt-10">

          <div className="flex items-center gap-3 mb-6">

            <Building2 className="text-emerald-600" />

            <h2 className="text-2xl font-semibold">
              Company Information
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="text-sm text-gray-500">
                Company Name
              </label>

              <input
                type="text"
                value={company.companyName}
                onChange={(e)=>
                  setCompany({
                    ...company,
                    companyName:e.target.value,
                  })
                }
                className="w-full mt-2 border rounded-xl px-4 py-3"
              />

            </div>

            <div>

              <label className="text-sm text-gray-500">
                Phone Number
              </label>

              <div className="relative mt-2">

                <Phone
                  size={18}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type="text"
                  value={company.phone}
                  onChange={(e)=>
                    setCompany({
                      ...company,
                      phone:e.target.value,
                    })
                  }
                  className="w-full border rounded-xl pl-11 pr-4 py-3"
                />

              </div>

            </div>

            <div>

              <label className="text-sm text-gray-500">
                Email
              </label>

              <div className="relative mt-2">

                <Mail
                  size={18}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type="email"
                  value={company.email}
                  onChange={(e)=>
                    setCompany({
                      ...company,
                      email:e.target.value,
                    })
                  }
                  className="w-full border rounded-xl pl-11 pr-4 py-3"
                />

              </div>

            </div>

            <div>

              <label className="text-sm text-gray-500">
                Website
              </label>

              <div className="relative mt-2">

                <Globe
                  size={18}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type="text"
                  value={company.website}
                  onChange={(e)=>
                    setCompany({
                      ...company,
                      website:e.target.value,
                    })
                  }
                  className="w-full border rounded-xl pl-11 pr-4 py-3"
                />

              </div>

            </div>

            <div className="md:col-span-2">

              <label className="text-sm text-gray-500">
                Address
              </label>

              <div className="relative mt-2">

                <MapPin
                  size={18}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type="text"
                  value={company.address}
                  onChange={(e)=>
                    setCompany({
                      ...company,
                      address:e.target.value,
                    })
                  }
                  className="w-full border rounded-xl pl-11 pr-4 py-3"
                />

              </div>

            </div>

            <div>

              <label className="text-sm text-gray-500">
                GST Number
              </label>

              <div className="relative mt-2">

                <FileText
                  size={18}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type="text"
                  value={company.gst}
                  onChange={(e)=>
                    setCompany({
                      ...company,
                      gst:e.target.value,
                    })
                  }
                  className="w-full border rounded-xl pl-11 pr-4 py-3"
                />

              </div>

            </div>

          </div>

        </div>

        {/* Administrator */}

        <div className="mt-14">

          <div className="flex items-center gap-3 mb-6">

            <UserCircle className="text-emerald-600" />

            <h2 className="text-2xl font-semibold">
              Administrator Profile
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6">
                        <div>

              <label className="text-sm text-gray-500">
                Administrator Name
              </label>

              <input
                type="text"
                value={admin.name}
                onChange={(e) =>
                  setAdmin({
                    ...admin,
                    name: e.target.value,
                  })
                }
                className="w-full mt-2 border rounded-xl px-4 py-3"
              />

            </div>

            <div>

              <label className="text-sm text-gray-500">
                Email
              </label>

              <input
                type="email"
                value={admin.email}
                onChange={(e) =>
                  setAdmin({
                    ...admin,
                    email: e.target.value,
                  })
                }
                className="w-full mt-2 border rounded-xl px-4 py-3"
              />

            </div>

            <div>

              <label className="text-sm text-gray-500">
                Mobile Number
              </label>

              <input
                type="text"
                value={admin.mobile}
                onChange={(e) =>
                  setAdmin({
                    ...admin,
                    mobile: e.target.value,
                  })
                }
                className="w-full mt-2 border rounded-xl px-4 py-3"
              />

            </div>

            <div>

              <label className="text-sm text-gray-500">
                Username
              </label>

              <input
                type="text"
                value={admin.username}
                onChange={(e) =>
                  setAdmin({
                    ...admin,
                    username: e.target.value,
                  })
                }
                className="w-full mt-2 border rounded-xl px-4 py-3"
              />

            </div>

          </div>

        </div>

        {/* CRM Preferences */}

        <div className="mt-14">

          <h2 className="text-2xl font-semibold mb-6">
            CRM Preferences
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="text-sm text-gray-500">
                Default Sales Person
              </label>

              <input
                type="text"
                defaultValue="Sanjay"
                className="w-full mt-2 border rounded-xl px-4 py-3"
              />

            </div>

            <div>

              <label className="text-sm text-gray-500">
                Default Lead Status
              </label>

              <select className="w-full mt-2 border rounded-xl px-4 py-3">

                <option>New</option>
                <option>Contacted</option>
                <option>Booked</option>

              </select>

            </div>

            <div>

              <label className="text-sm text-gray-500">
                Default Site Visit Status
              </label>

              <select className="w-full mt-2 border rounded-xl px-4 py-3">

                <option>Scheduled</option>
                <option>Completed</option>

              </select>

            </div>

            <div>

              <label className="text-sm text-gray-500">
                Default Follow Up Status
              </label>

              <select className="w-full mt-2 border rounded-xl px-4 py-3">

                <option>Pending</option>
                <option>Completed</option>

              </select>

            </div>

          </div>

        </div>

        {/* Notifications */}

        <div className="mt-14">

          <h2 className="text-2xl font-semibold mb-6">
            Notifications
          </h2>

          <div className="space-y-4">

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                defaultChecked
              />

              Upcoming Site Visits

            </label>

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                defaultChecked
              />

              Pending Follow Ups

            </label>

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                defaultChecked
              />

              Missed Follow Ups

            </label>

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
              />

              Desktop Notifications

            </label>

          </div>

        </div>

        {/* Database Tools */}

        <div className="mt-14">

          <h2 className="text-2xl font-semibold mb-6">
            Database Tools
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <button className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl">

              Backup Database

            </button>

            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl">

              Restore Database

            </button>

            <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl">

              Export Database

            </button>

            <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl">

              Reset Demo Data

            </button>

          </div>

        </div>

        {/* System Information */}

        <div className="mt-14 bg-slate-50 rounded-2xl border p-6">

          <h2 className="text-2xl font-semibold mb-6">
            System Information
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div>

              <strong>CRM Version</strong>

              <p className="text-gray-500">
                Shervy Realty CRM v1.0
              </p>

            </div>

            <div>

              <strong>Database</strong>

              <p className="text-gray-500">
                SQLite
              </p>

            </div>

            <div>

              <strong>Backend</strong>

              <p className="text-emerald-600 font-medium">
                Running
              </p>

            </div>

            <div>

              <strong>Frontend</strong>

              <p className="text-emerald-600 font-medium">
                Running
              </p>

            </div>

          </div>

        </div>

        {/* Save Button */}

        <div className="mt-12 flex justify-end">

          <button
            onClick={() => alert("Settings Saved Successfully")}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold"
          >

            Save Settings

          </button>

        </div>

      </div>

    </div>

  );

}