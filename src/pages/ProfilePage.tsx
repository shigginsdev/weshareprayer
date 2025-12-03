// src/pages/ProfilePage.tsx
import { useState } from 'react'

type UserProfile = {
  name: string
  email: string
  role: string
  tagline: string
  status: string
  picture: string
  ownerPicture: string
  prayerCount: number
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Demo User',
    email: 'user@example.com',
    role: 'Believer',
    tagline: 'Sharing prayers and blessings',
    status: 'Online',
    picture: '',
    ownerPicture: '',
    prayerCount: 42,
  })

  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfile((prev) => ({
      ...prev,
      [name]: name === 'prayerCount' ? parseInt(value, 10) || 0 : value,
    }))
  }

  const handleSave = async () => {
    setIsSaving(true)
    setMessage('')
    try {
      // TODO: Replace with real API call to save profile
      console.log('Saving profile:', profile)
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 500))
      setMessage('Profile updated successfully!')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      console.error('Failed to save profile', err)
      setMessage('Error saving profile. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="profile-page card">
      <h1>Your Profile</h1>

      {message && <div className="profile-message">{message}</div>}

      <form className="profile-form" onSubmit={(e) => e.preventDefault()}>
        {/* Personal Info Section */}
        <section className="profile-section">
          <h2>Personal Information</h2>

          <div className="profile-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="profile-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="profile-field">
            <label htmlFor="tagline">Tagline</label>
            <input
              id="tagline"
              type="text"
              name="tagline"
              value={profile.tagline}
              onChange={handleChange}
              placeholder="e.g., Sharing prayers and blessings"
            />
          </div>

          <div className="profile-field">
            <label htmlFor="status">Status</label>
            <input
              id="status"
              type="text"
              name="status"
              value={profile.status}
              onChange={handleChange}
              placeholder="e.g., Online, Away, Offline"
            />
          </div>
        </section>

        {/* Account Info Section */}
        <section className="profile-section">
          <h2>Account Information</h2>

          <div className="profile-field">
            <label htmlFor="role">Role</label>
            <input
              id="role"
              type="text"
              name="role"
              value={profile.role}
              onChange={handleChange}
              placeholder="e.g., Believer, Pastor, Mentor"
            />
          </div>

          <div className="profile-field">
            <label htmlFor="prayerCount">Prayer Count</label>
            <input
              id="prayerCount"
              type="number"
              name="prayerCount"
              value={profile.prayerCount}
              onChange={handleChange}
              min="0"
            />
          </div>
        </section>

        {/* Pictures Section */}
        <section className="profile-section">
          <h2>Profile Pictures</h2>

          <div className="profile-field">
            <label htmlFor="picture">Picture URL</label>
            <input
              id="picture"
              type="url"
              name="picture"
              value={profile.picture}
              onChange={handleChange}
              placeholder="https://example.com/picture.jpg"
            />
          </div>

          <div className="profile-field">
            <label htmlFor="ownerPicture">Owner Picture URL</label>
            <input
              id="ownerPicture"
              type="url"
              name="ownerPicture"
              value={profile.ownerPicture}
              onChange={handleChange}
              placeholder="https://example.com/owner-picture.jpg"
            />
          </div>
        </section>

        {/* Save Button */}
        <div className="profile-actions">
          <button
            className="profile-save-btn"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? 'Saving...' : 'Save Profile'}
          </button>
        </div>
      </form>
    </div>
  )
}
