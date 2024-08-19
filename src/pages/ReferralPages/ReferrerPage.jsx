import React, { useState } from 'react';
import "./Referpage.css";

const ReferralForm = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    dateOfBirth: '',
    gender: '',
    contactInfo: '',
    address: '',
    reasonForReferral: '',
    urgencyLevel: 'Routine',
    preferredDate: '',
    referringClinician: '',
    currentMedications: '',
    allergies: '',
    pastMedicalHistory: '',
    currentSymptoms: '',
    labResults: '',
    insuranceProvider: '',
    policyNumber: '',
    groupNumber: '',
    specialInstructions: '',
    attachments: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachments: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Referral Form</h2>

      <fieldset>
        <legend>Patient Information</legend>
        <label>
          Patient Name:
          <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} />
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
        </label>
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Contact Information:
          <input type="text" name="contactInfo" value={formData.contactInfo} onChange={handleChange} />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>
      </fieldset>

      <fieldset>
        <legend>Referral Details</legend>
        <label>
          Reason for Referral:
          <textarea name="reasonForReferral" value={formData.reasonForReferral} onChange={handleChange} />
        </label>
        <label>
          Urgency Level:
          <select name="urgencyLevel" value={formData.urgencyLevel} onChange={handleChange}>
            <option value="Routine">Routine</option>
            <option value="Urgent">Urgent</option>
            <option value="Emergency">Emergency</option>
          </select>
        </label>
        <label>
          Preferred Appointment Date/Time:
          <input type="datetime-local" name="preferredDate" value={formData.preferredDate} onChange={handleChange} />
        </label>
        <label>
          Referring Clinician:
          <input type="text" name="referringClinician" value={formData.referringClinician} onChange={handleChange} />
        </label>
      </fieldset>

      <fieldset>
        <legend>Medical History</legend>
        <label>
          Current Medications:
          <textarea name="currentMedications" value={formData.currentMedications} onChange={handleChange} />
        </label>
        <label>
          Allergies:
          <textarea name="allergies" value={formData.allergies} onChange={handleChange} />
        </label>
        <label>
          Past Medical History:
          <textarea name="pastMedicalHistory" value={formData.pastMedicalHistory} onChange={handleChange} />
        </label>
        <label>
          Current Symptoms:
          <textarea name="currentSymptoms" value={formData.currentSymptoms} onChange={handleChange} />
        </label>
        <label>
          Relevant Lab Results and Imaging:
          <textarea name="labResults" value={formData.labResults} onChange={handleChange} />
        </label>
      </fieldset>

      <fieldset>
        <legend>Insurance Information</legend>
        <label>
          Insurance Provider:
          <input type="text" name="insuranceProvider" value={formData.insuranceProvider} onChange={handleChange} />
        </label>
        <label>
          Policy Number:
          <input type="text" name="policyNumber" value={formData.policyNumber} onChange={handleChange} />
        </label>
        <label>
          Group Number:
          <input type="text" name="groupNumber" value={formData.groupNumber} onChange={handleChange} />
        </label>
      </fieldset>

      <fieldset>
        <legend>Special Instructions</legend>
        <label>
          Special Instructions:
          <textarea name="specialInstructions" value={formData.specialInstructions} onChange={handleChange} />
        </label>
        <label>
          Attachments:
          <input type="file" name="attachments" onChange={handleFileChange} />
        </label>
      </fieldset>
    {/* If submitted, must be put into a referral database */}
      <button type="submit">Submit Referral</button>
    </form>
  );
};

export default ReferralForm;
