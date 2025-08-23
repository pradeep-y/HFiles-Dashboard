import { useState } from "react";

export default function ProfileCard({ profile, onSave }) {
  const [form, setForm] = useState(profile);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm({
      ...form,
      [name]: type === "radio" ? value : value,
    });
  };

  return (
    <>
    <div className="bg-blue-100 p-5 rounded-2xl shadow w-[500px] relative">
      
      <div className="absolute top-0 right-0 bg-white px-3 py-1 rounded-md text-xs font-medium border shadow-sm">
        {form.code}
      </div>

    <div className="flex justify-evenly">
        <div className="flex flex-col items-center justify-center mt-12">
        <img src={form.avatar} alt="avatar" className="w-[110px] h-[110px] rounded-full object-cover border-2 border-white shadow"/>
        <button className="text-xs text-blue-700 mt-1 hover:underline">
          Change
        </button>
        
        </div>

        <div className="mt-4 ml- space-y-3">
        <h2 className="text-lg font-bold text-blue-700 mt-2">{form.name}</h2>
      
        <div className="flex items-center gap-2">
          <label className="text-sm w-16">Email :</label>
          <input className="flex-1 px-2 py-1 border outline-blue-400 rounded text-sm bg-white" name="email"  value={form.email} onChange={handleChange}/>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm w-16">Phone :</label>
          <input className="flex-1 px-2 py-1 border outline-blue-400 rounded text-sm bg-white" name="phone" value={form.phone}  onChange={handleChange} />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm w-16">Gender :</label>
          <div className="flex gap-5">
            <label className="text-sm flex items-center gap-1">
              <input type="radio" name="gender"  value="Male" checked={form.gender === "Male"}  onChange={handleChange} />
              Male
            </label>
            <label className="text-sm flex items-center gap-1">
              <input type="radio"name="gender" value="Female" checked={form.gender === "Female"} onChange={handleChange} />
              Female
            </label>
          </div>
        </div>
        </div>
    </div>
      
    <div className="absolute bottom-3 right-4 ">
        <button onClick={() => onSave(form)}  className="bg-yellow-200 hover:bg-yellow-300 text-gray-800 px-10 py-2 rounded-lg font-semibold text-sm shadow-md"  >
          Save
        </button>
      </div>
    
    </div>
    
    </>

  );
}
