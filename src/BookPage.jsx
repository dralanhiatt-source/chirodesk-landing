import { useState } from 'react';

const OFFICES = ['Rogers, AR', 'Eureka Springs, AR'];
const DAYS = ['Wednesday', 'Friday', 'Saturday'];
const HEARD = ['Google', 'Friend/Referral', 'Facebook', 'Instagram', 'Other'];

const SUPABASE_URL = 'https://pxubjqdwsrttwcrsuuwg.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4dWJqcWR3c3J0dHdjcnN1dXdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0MTAxODcsImV4cCI6MjA5NDk4NjE4N30.XOGfpy0ihvsNVdAq0Y9VcDFWTxbcEaEyQ5Mxe2MFf7M';

export default function BookPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', email: '',
    office: '', preferredDay: 'Wednesday', complaint: '', heardFrom: '', consentText: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.phone) return alert('First name, last name, and phone are required.');
    if (!form.consentText) return alert('Please agree to receive text messages to continue.');

    // Save locally as a fallback, and best-effort sync to Supabase pending_bookings
    // (feeds the existing office notification pipeline).
    try {
      const existing = JSON.parse(localStorage.getItem('pendingBookings') || '[]');
      localStorage.setItem('pendingBookings', JSON.stringify([...existing, { ...form, status: 'pending', submittedAt: new Date().toISOString() }]));
    } catch { /* ignore */ }

    fetch(`${SUPABASE_URL}/rest/v1/pending_bookings`, {
      method: 'POST',
      headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}`, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
      body: JSON.stringify({
        first_name: form.firstName, last_name: form.lastName, phone: form.phone, email: form.email || null,
        office: form.office, preferred_day: form.preferredDay, complaint: form.complaint || null, heard_from: form.heardFrom || null,
      }),
    }).catch(() => { /* non-blocking */ });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col items-center justify-center p-6">
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-2xl font-bold text-teal-400 mb-3">Request Received!</h1>
          <p className="text-gray-300 mb-4">Thank you, {form.firstName}! Dr. Hiatt's office will confirm your appointment within 24 hours. You'll receive a text message with your intake form link.</p>
          <a href="#/book" onClick={() => setSubmitted(false)} className="inline-block mt-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg px-6 py-2 font-medium">Book Another</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-10 px-4">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🏥</div>
          <h1 className="text-3xl font-bold">Book an Appointment</h1>
          <p className="text-gray-400 mt-1">with Dr. Hiatt — Affordable Chiropractic</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-900 rounded-2xl border border-gray-800 p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-1">First Name *</label>
              <input required value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-1">Last Name *</label>
              <input required value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-teal-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-1">Phone *</label>
            <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-teal-500" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-1">Email</label>
            <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-teal-500" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-1">Office Preference</label>
            <select value={form.office} onChange={e => setForm({ ...form, office: e.target.value })}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-teal-500">
              <option value="">Select office</option>
              {OFFICES.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-1">Preferred Day</label>
            <div className="flex gap-2">
              {DAYS.map(d => (
                <button key={d} type="button" onClick={() => setForm({ ...form, preferredDay: d })}
                  className={`flex-1 py-2 rounded-lg text-sm border font-medium transition ${form.preferredDay === d ? 'border-teal-500 bg-teal-900/30 text-teal-300' : 'border-gray-700 text-gray-400 hover:border-teal-500'}`}>
                  {d.slice(0, 3)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-1">Chief Complaint</label>
            <textarea value={form.complaint} onChange={e => setForm({ ...form, complaint: e.target.value })}
              placeholder="What are you coming in for?" rows={3}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-teal-500 resize-none" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-1">How did you hear about us?</label>
            <select value={form.heardFrom} onChange={e => setForm({ ...form, heardFrom: e.target.value })}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-teal-500">
              <option value="">Select one</option>
              {HEARD.map(h => <option key={h} value={h}>{h}</option>)}
            </select>
          </div>

          <label className="flex items-start gap-2 cursor-pointer mt-2">
            <input type="checkbox" required checked={form.consentText} onChange={e => setForm({ ...form, consentText: e.target.checked })} className="accent-teal-600 mt-1" />
            <span className="text-sm text-gray-300">I agree to receive automated text messages (appointment confirmations, reminders, and updates) from Affordable Chiropractic. Message frequency varies. Msg &amp; data rates may apply. Reply STOP to opt out. <a href="https://chirodesk.pro/sms-terms" target="_blank" rel="noreferrer" className="underline text-teal-400">SMS Terms</a></span>
          </label>

          <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-xl py-3 font-semibold text-lg transition mt-2">
            Request Appointment →
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-4">We'll confirm within 24 hours by text message.</p>
      </div>
    </div>
  );
}
