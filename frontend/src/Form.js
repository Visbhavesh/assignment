import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({});

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    alert("Submitted Successfully");
  };

  return (
    <form onSubmit={submit}>
      <input name="name" placeholder="Name" required onChange={handleChange} />
      <input name="company" placeholder="Company" required onChange={handleChange} />
      <input name="gender" placeholder="Gender" required onChange={handleChange} />
      <input name="age" type="number" placeholder="Age" required onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
      <input name="contactNumber" placeholder="Contact Number" required onChange={handleChange} />
      <textarea name="query" placeholder="Query" required onChange={handleChange} />

      <select name="disposition" required onChange={handleChange}>
        <option value="">Select Disposition</option>
        <option>Customer Support</option>
        <option>Consultant Support</option>
        <option>B2B Lead</option>
        <option>New Lead</option>
        <option>General Enquiry</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}
