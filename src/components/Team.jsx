import React from 'react'
import ProfileCard from './ProfileCard'
import './Team.css'
function Team() {
  return (
    <section className="vet-care-team">
      <div className="container">
        <h2 className="section-heading">The VetCare Team</h2>
        <p className="section-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla mauris non arcu aliquam, vitae varius nulla lacinia.
        </p>
        <div className="team-cards">
          {/* Doctor ProfileCard 1 */}
          <ProfileCard
            profilecardImg="src\assets\Doctor1.png"
            profilecardHeading="Jennifer Mullen"
            profilecardDesc="Veterinary"

          />
          {/* Doctor ProfileCard 2 */}
          <ProfileCard
            profilecardImg="src\assets\Doctor2.png"
            profilecardHeading="Sheeren Collins"
            profilecardDesc="Admin"

          />
          {/* Doctor ProfileCard 3 */}
          <ProfileCard
            profilecardImg="src\assets\Doctor3.png"
            profilecardHeading="Sarah Johnson"
            profilecardDesc="Receptionist"

          />
        </div>
      </div>
    </section>
  )
}

export default Team
